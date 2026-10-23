import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  HeartPulse,
  MapPin,
  Phone,
  Globe,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  FileText,
  Sparkles,
  ExternalLink,
  Info,
  X,
  Search,
  Building2,
  Compass,
  Map,
  ChevronDown,
  ChevronUp,
  School,
  Baby
} from 'lucide-react';
import { ResourceItem, ResourceCategory, IECounty } from '../types';
import { INLAND_EMPIRE_RESOURCES } from '../data/resources';

interface ResourceDirectoryProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: ResourceCategory | 'all';
  setSelectedCategory: (c: ResourceCategory | 'all') => void;
  savedIds: string[];
  toggleSaveResource: (id: string) => void;
  onAskAboutResource: (resourceName: string) => void;
  lang: 'en' | 'es';
}

export const ResourceDirectory: React.FC<ResourceDirectoryProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  savedIds,
  toggleSaveResource,
  onAskAboutResource,
  lang
}) => {
  const [selectedCounty, setSelectedCounty] = useState<IECounty>('All');
  const [selectedFacilityType, setSelectedFacilityType] = useState<string>('All');
  const [activeModalResource, setActiveModalResource] = useState<ResourceItem | null>(null);
  const [showBoundaryGuide, setShowBoundaryGuide] = useState<boolean>(false);
  const [selectedDistrictGuide, setSelectedDistrictGuide] = useState<'sbcusd' | 'rusd' | 'cnusd' | 'omsd'>('rusd');

  const counties: { id: IECounty; labelEn: string; labelEs: string }[] = [
    { id: 'All', labelEn: 'All Inland Empire', labelEs: 'Todo el Inland Empire' },
    { id: 'San Bernardino County', labelEn: 'San Bernardino County', labelEs: 'San Bernardino' },
    { id: 'Riverside County', labelEn: 'Riverside County', labelEs: 'Riverside' },
    { id: 'Coachella Valley', labelEn: 'Coachella Valley', labelEs: 'Valle de Coachella' },
  ];

  // Base resources for Home view: Education and Healthcare
  const baseResources = useMemo(() => {
    return INLAND_EMPIRE_RESOURCES.filter(
      (res) => res.category === 'education' || res.category === 'health'
    );
  }, []);

  // Helper function to check if item matches search query with robust synonyms and fuzzy terms
  const doesItemMatch = (res: ResourceItem, query: string): boolean => {
    const raw = query.trim().toLowerCase();
    if (!raw) return true;

    // Direct token matching
    const tokens = raw.split(/\s+/).filter(Boolean);

    // Precomputed text block
    const itemFullText = [
      res.name,
      res.city,
      res.county,
      res.address,
      res.description,
      res.category,
      res.facilityType || '',
      res.gradeLevels || '',
      res.boundaryZone || '',
      res.feederPattern || '',
      ...(res.tags || []),
      ...(res.keyBenefits || []),
      ...(res.languages || [])
    ]
      .join(' ')
      .toLowerCase();

    // 1. Literal all tokens match
    const literalMatch = tokens.every((tok) => itemFullText.includes(tok));
    if (literalMatch) return true;

    // 2. Semantic & spelling-tolerant synonym matching
    // Elementary School: elementary, elemenatry, elemntary, elementry, primary, tk, kindergarten, kinder
    const isElementaryQuery =
      raw.includes('elemen') ||
      raw.includes('elem') ||
      raw.includes('primary') ||
      raw.includes('kinder') ||
      raw.includes('tk');
    if (isElementaryQuery && (res.facilityType === 'Elementary School' || res.tags?.includes('elementary'))) {
      return true;
    }

    // Middle School: middle, middleschool, intermediate, junior high, 6-8, 7-8
    const isMiddleQuery =
      raw.includes('middle') ||
      raw.includes('intermed') ||
      raw.includes('junior') ||
      raw.includes('6-8') ||
      raw.includes('7-8');
    if (isMiddleQuery && (res.facilityType === 'Middle School' || res.tags?.includes('middle school'))) {
      return true;
    }

    // High School: high, highschool, high school, 9-12, secondary, diploma
    const isHighQuery =
      raw.includes('high') ||
      raw.includes('9-12') ||
      raw.includes('preparatoria') ||
      raw.includes('poly') ||
      raw.includes('cardinal');
    if (isHighQuery && (res.facilityType === 'High School' || res.tags?.includes('high school'))) {
      return true;
    }

    // Daycare & Childcare: daycare, day care, childcare, child care, infant, toddler, preschool, guarderia, guardería, ccrc, rcoe
    const isDaycareQuery =
      raw.includes('daycare') ||
      raw.includes('day care') ||
      raw.includes('childcare') ||
      raw.includes('child care') ||
      raw.includes('infant') ||
      raw.includes('toddler') ||
      raw.includes('preschool') ||
      raw.includes('guarderia') ||
      raw.includes('guardería') ||
      raw.includes('ccrc') ||
      raw.includes('capp');
    if (
      isDaycareQuery &&
      (res.facilityType === 'Daycare & Childcare' || res.tags?.includes('daycare') || res.tags?.includes('childcare'))
    ) {
      return true;
    }

    // School Boundaries: boundary, boundaries, zone, zones, feeder, attendance, locator, map, address
    const isBoundaryQuery =
      raw.includes('bound') ||
      raw.includes('zone') ||
      raw.includes('feeder') ||
      raw.includes('attendance') ||
      raw.includes('distrito') ||
      raw.includes('limite') ||
      raw.includes('límite');
    if (
      isBoundaryQuery &&
      (res.facilityType === 'School Boundary & Enrollment' || Boolean(res.boundaryZone))
    ) {
      return true;
    }

    // Hospitals: hospital, hospitals, emergency, er, trauma, urgent, loma linda, arrowhead, ruhs
    const isHospitalQuery =
      raw.includes('hosp') ||
      raw.includes('emerg') ||
      raw.includes('er') ||
      raw.includes('trauma') ||
      raw.includes('loma linda') ||
      raw.includes('kaiser');
    if (isHospitalQuery && (res.facilityType === 'Hospital' || res.tags?.includes('hospital'))) {
      return true;
    }

    // Clinics: clinic, clinics, clinica, clínica, doctor, doctors, pediatric, dentist, sac health, borrego
    const isClinicQuery =
      raw.includes('clinic') ||
      raw.includes('clínic') ||
      raw.includes('doctor') ||
      raw.includes('pediatr') ||
      raw.includes('dent');
    if (isClinicQuery && (res.facilityType === 'Clinic' || res.tags?.includes('clinic'))) {
      return true;
    }

    // General School query: school, schools, escuela, escuelas
    const isGeneralSchoolQuery = raw.includes('school') || raw.includes('escuela');
    if (isGeneralSchoolQuery && res.category === 'education') {
      return true;
    }

    return false;
  };

  // Smart search and filtering calculation
  const filteredResources = useMemo(() => {
    const rawQuery = searchQuery.trim().toLowerCase();

    return baseResources.filter((res) => {
      // 1. County filter
      if (selectedCounty !== 'All' && res.county !== selectedCounty && res.county !== 'All') {
        return false;
      }

      // 2. Facility Type filter
      if (selectedFacilityType !== 'All') {
        // If searching actively, don't let facility type suppress strong direct keyword matches
        if (rawQuery.length > 0) {
          const directMatch = doesItemMatch(res, rawQuery);
          if (!directMatch && res.facilityType !== selectedFacilityType) {
            return false;
          }
        } else if (res.facilityType !== selectedFacilityType) {
          return false;
        }
      }

      // 3. Category filter
      if (selectedCategory !== 'all') {
        // If searching actively, allow cross-category results to surface
        if (rawQuery.length > 0) {
          const directMatch = doesItemMatch(res, rawQuery);
          if (!directMatch && res.category !== selectedCategory) {
            return false;
          }
        } else if (res.category !== selectedCategory) {
          return false;
        }
      }

      // 4. Keyword query matching
      if (rawQuery.length > 0) {
        return doesItemMatch(res, rawQuery);
      }

      return true;
    });
  }, [baseResources, selectedCategory, selectedCounty, selectedFacilityType, searchQuery]);

  // Handler to set facility filter directly
  const handleSelectFacility = (fType: string) => {
    setSelectedFacilityType(fType);
    if (
      fType === 'Elementary School' ||
      fType === 'Middle School' ||
      fType === 'High School' ||
      fType === 'Daycare & Childcare' ||
      fType === 'School Boundary & Enrollment'
    ) {
      setSelectedCategory('education');
    } else if (fType === 'Hospital' || fType === 'Clinic') {
      setSelectedCategory('health');
    } else {
      setSelectedCategory('all');
    }
  };

  return (
    <section id="resources-directory-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-20">
      {/* Header & Category Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            <span>{lang === 'en' ? 'Verified Directory' : 'Directorio Verificado'}</span>
            <span>•</span>
            <span className="text-blue-600 font-extrabold">
              {filteredResources.length}{' '}
              {lang === 'en' ? 'Verified Locations' : 'Ubicaciones Verificadas'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {selectedCategory === 'education'
              ? lang === 'en'
                ? 'Public Schools, Daycare & Attendance Boundaries'
                : 'Escuelas Públicas, Guarderías y Límites Escolares'
              : selectedCategory === 'health'
              ? lang === 'en'
                ? 'Regional Hospitals & Health Centers'
                : 'Hospitales Regionales y Clínicas'
              : lang === 'en'
              ? 'Inland Empire Schools & Healthcare'
              : 'Escuelas y Salud del Inland Empire'}
          </h2>
        </div>

        {/* Category Switcher */}
        <div className="inline-flex rounded-xl border border-slate-200 p-1 bg-slate-100 text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedFacilityType('All');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              selectedCategory === 'all' && selectedFacilityType === 'All'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'en' ? 'All (Both)' : 'Todos'}
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('education');
              setSelectedFacilityType('All');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCategory === 'education'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Schools & Daycare' : 'Escuelas y Guarderías'}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('health');
              setSelectedFacilityType('All');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCategory === 'health'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Hospitals & Health' : 'Hospitales y Salud'}</span>
          </button>
        </div>
      </div>

      {/* Directory Search & Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-6 shadow-xs space-y-3">
        {/* Search Bar Input */}
        <div className="relative flex-1 w-full flex items-center rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 focus-within:border-slate-800 focus-within:bg-white transition-all">
          <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'en'
                ? 'Search specifically: "elementary", "middle school", "high school", "daycare", "boundary", "hospital", "Loma Linda"...'
                : 'Buscar específicamente: "primaria", "secundaria", "preparatoria", "guardería", "límites", "hospital"...'
            }
            className="w-full text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden bg-transparent"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              title={lang === 'en' ? 'Clear search' : 'Borrar búsqueda'}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Dedicated School & Health Facility Filter Buttons */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            {lang === 'en' ? 'Quick Filter by Level & Type:' : 'Filtrar por Nivel y Tipo:'}
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: 'All', labelEn: 'All Types', labelEs: 'Todos' },
              { id: 'Elementary School', labelEn: 'Elementary Schools (TK–5/6)', labelEs: 'Escuelas Primarias (TK-5)', icon: School, color: 'border-blue-300 text-blue-700' },
              { id: 'Middle School', labelEn: 'Middle Schools (6–8)', labelEs: 'Secundarias (6-8)', icon: GraduationCap, color: 'border-indigo-300 text-indigo-700' },
              { id: 'High School', labelEn: 'High Schools (9–12)', labelEs: 'Preparatorias (9-12)', icon: GraduationCap, color: 'border-purple-300 text-purple-700' },
              { id: 'Daycare & Childcare', labelEn: 'Daycare & Childcare (0–5)', labelEs: 'Guarderías y Cuidado (0-5)', icon: Baby, color: 'border-amber-300 text-amber-800' },
              { id: 'School Boundary & Enrollment', labelEn: 'School Boundaries & Zones', labelEs: 'Límites Escolares y Zonas', icon: Map, color: 'border-cyan-300 text-cyan-800' },
              { id: 'Hospital', labelEn: 'Regional Hospitals', labelEs: 'Hospitales Regionales', icon: HeartPulse, color: 'border-rose-300 text-rose-700' },
              { id: 'Clinic', labelEn: 'Family Clinics', labelEs: 'Clínicas Familiares', icon: Building2, color: 'border-teal-300 text-teal-700' },
            ].map((fItem) => {
              const isSelected = selectedFacilityType === fItem.id;
              const Icon = fItem.icon;

              return (
                <button
                  key={fItem.id}
                  type="button"
                  onClick={() => handleSelectFacility(fItem.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {Icon && <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : ''}`} />}
                  <span>{lang === 'en' ? fItem.labelEn : fItem.labelEs}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Region / County Selector Bar */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-medium mr-1">
            {lang === 'en' ? 'Region:' : 'Región:'}
          </span>
          {counties.map((county) => {
            const isSelected = selectedCounty === county.id;
            return (
              <button
                key={county.id}
                type="button"
                onClick={() => setSelectedCounty(county.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lang === 'en' ? county.labelEn : county.labelEs}
              </button>
            );
          })}

          {/* School Boundary Guide Toggle Button */}
          <button
            type="button"
            onClick={() => setShowBoundaryGuide(!showBoundaryGuide)}
            className="ml-auto inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold transition-colors cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>
              {lang === 'en' ? 'School Boundary Finder Guide' : 'Guía de Límites Escolares'}
            </span>
            {showBoundaryGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {(searchQuery || selectedCategory !== 'all' || selectedCounty !== 'All' || selectedFacilityType !== 'All') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedCounty('All');
                setSelectedFacilityType('All');
              }}
              className="text-xs text-blue-700 hover:text-blue-900 font-bold underline cursor-pointer"
            >
              {lang === 'en' ? 'Reset Filters' : 'Restablecer'}
            </button>
          )}
        </div>
      </div>

      {/* School Attendance Boundaries & Address Zone Finder Accordion */}
      {showBoundaryGuide && (
        <div className="mb-8 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 rounded-3xl border border-blue-200 p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-blue-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-1">
                <Compass className="w-3.5 h-3.5 text-blue-600" />
                <span>{lang === 'en' ? 'California School Zones' : 'Zonas Escolares de California'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {lang === 'en'
                  ? 'How School Boundaries Work in the Inland Empire'
                  : 'Cómo Funcionan los Límites Escolares en el Inland Empire'}
              </h3>
            </div>
            <div className="text-xs text-slate-600 max-w-sm">
              {lang === 'en'
                ? 'Your home street address assigns your child to an Elementary School, which feeds into a Middle School, and then a High School.'
                : 'La dirección de su hogar asigna a su hijo a una Escuela Primaria, que luego avanza a la Secundaria y a la Preparatoria.'}
            </div>
          </div>

          {/* District Boundary Tool Tabs */}
          <div className="mt-4">
            <div className="text-xs font-bold text-slate-700 mb-2">
              {lang === 'en' ? 'Select your district to access official GIS Address Locators:' : 'Seleccione su distrito para ver el mapa oficial de calles:'}
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'rusd', name: 'Riverside Unified (RUSD)' },
                { id: 'sbcusd', name: 'San Bernardino City (SBCUSD)' },
                { id: 'cnusd', name: 'Corona-Norco Unified (CNUSD)' },
                { id: 'omsd', name: 'Ontario-Montclair & Chaffey' }
              ].map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSelectedDistrictGuide(d.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedDistrictGuide === d.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>

            {/* Details for Selected District */}
            <div className="mt-4 bg-white rounded-2xl border border-blue-100 p-4 text-xs sm:text-sm text-slate-700 space-y-3">
              {selectedDistrictGuide === 'rusd' && (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Riverside Unified School District (RUSD) Boundary Locator
                      </h4>
                      <p className="text-xs text-slate-500">
                        Serves City of Riverside, Woodcrest, and Highgrove communities.
                      </p>
                    </div>
                    <a
                      href="https://www.riversideunified.org/departments/student_services/school_directory_locator"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs inline-flex items-center gap-1.5 shrink-0"
                    >
                      <span>{lang === 'en' ? 'Launch RUSD Boundary Tool' : 'Abrir Buscador RUSD'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs border-t border-slate-100">
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>1. Elementary:</strong> Bryant, Victoria, Longfellow, Fremont, Rivera (Grades TK–6).
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>2. Middle Feeder:</strong> Central Middle & Gage Middle (Grades 7–8).
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>3. High School:</strong> Poly High, Arlington High, King High, Ramona High (Grades 9–12).
                    </div>
                  </div>
                </>
              )}

              {selectedDistrictGuide === 'sbcusd' && (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        San Bernardino City Unified School District (SBCUSD) Boundary Locator
                      </h4>
                      <p className="text-xs text-slate-500">
                        Serves San Bernardino, Highland, and Muscoy neighborhoods.
                      </p>
                    </div>
                    <a
                      href="https://sbcusd.com/departments/enrollment"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs inline-flex items-center gap-1.5 shrink-0"
                    >
                      <span>{lang === 'en' ? 'Launch SBCUSD Boundary Tool' : 'Abrir Buscador SBCUSD'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs border-t border-slate-100">
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>1. Elementary:</strong> Crenshaw, Belvedere, Palm Avenue, Riley (Grades TK–5).
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>2. Middle Feeder:</strong> Richardson PREP HI, Serrano Middle, King Middle (Grades 6–8).
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>3. High School:</strong> San Bernardino High (IB), Cajon High (IB), San Gorgonio (Grades 9–12).
                    </div>
                  </div>
                </>
              )}

              {selectedDistrictGuide === 'cnusd' && (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Corona-Norco Unified School District (CNUSD) Attendance Boundaries
                      </h4>
                      <p className="text-xs text-slate-500">
                        Serves Corona, Norco, Eastvale, and Home Gardens.
                      </p>
                    </div>
                    <a
                      href="https://www.cnusd.k12.ca.us/our_departments/student_services/school_boundaries"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs inline-flex items-center gap-1.5 shrink-0"
                    >
                      <span>{lang === 'en' ? 'Launch CNUSD Boundary Tool' : 'Abrir Buscador CNUSD'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs border-t border-slate-100">
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>1. Elementary:</strong> Eisenhower, Lincoln, Adams, Orange Grove (Grades TK–6).
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>2. Intermediate Feeder:</strong> Auburndale Intermediate, Citrus Hills (Grades 7–8).
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>3. High School:</strong> Centennial High (STEM), Corona High, Santiago High (Grades 9–12).
                    </div>
                  </div>
                </>
              )}

              {selectedDistrictGuide === 'omsd' && (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Ontario-Montclair School District & Chaffey High Boundary Locator
                      </h4>
                      <p className="text-xs text-slate-500">
                        Elementary & Middle (OMSD) feeding into Chaffey Joint Union High (CJUHSD).
                      </p>
                    </div>
                    <a
                      href="https://www.omsd.net/departments/child-welfare-and-attendance/school-locator"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs inline-flex items-center gap-1.5 shrink-0"
                    >
                      <span>{lang === 'en' ? 'Launch OMSD Boundary Tool' : 'Abrir Buscador OMSD'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs border-t border-slate-100">
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>1. Elementary:</strong> Kingsley, Sultana, Bon View, Del Norte (Grades TK–6).
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>2. Middle Feeder:</strong> De Anza Middle, Vernon Middle, Wiltsey (Grades 7–8).
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50">
                      <strong>3. High School Feeder:</strong> Chaffey High School, Montclair High (Grades 9–12).
                    </div>
                  </div>
                </>
              )}

              {/* Three Rules of School Boundaries */}
              <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                <p>
                  <strong>Proof of Residence Rule:</strong> In California, school districts require 2 documents verifying you live in the boundary zone (such as an apartment lease agreement, electric bill, or gas bill).
                </p>
                <p>
                  <strong>Intra-District Open Enrollment Transfers:</strong> If you prefer a school outside your street boundary (e.g. for a Dual-Language or STEM magnet), you can submit an Open Enrollment Transfer application during the spring window (usually January–March).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resource Cards Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <h3 className="text-base font-bold text-slate-800">
            {lang === 'en'
              ? `No matching schools or medical centers found for "${searchQuery}"`
              : `No se encontraron resultados para "${searchQuery}"`}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-4">
            {lang === 'en'
              ? 'Try searching "elementary", "middle school", "high school", "daycare", "hospital", or reset the filters below.'
              : 'Intente buscar "primaria", "secundaria", "preparatoria", "guardería", "hospital" o restablezca los filtros.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedCounty('All');
              setSelectedFacilityType('All');
            }}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Reset Filters & Show All Schools & Hospitals' : 'Restablecer Filtros y Ver Todos'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources.map((res) => {
            const isEducation = res.category === 'education';
            const isSaved = savedIds.includes(res.id);
            const isHospital = res.facilityType === 'Hospital';
            const isElementary = res.facilityType === 'Elementary School';
            const isMiddle = res.facilityType === 'Middle School';
            const isHigh = res.facilityType === 'High School';
            const isDaycare = res.facilityType === 'Daycare & Childcare';
            const isBoundary = res.facilityType === 'School Boundary & Enrollment';

            return (
              <div
                key={res.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Card Top Section */}
                <div className="p-5 pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {/* Facility Type Badge */}
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                          isElementary
                            ? 'bg-blue-100 text-blue-900 border border-blue-200'
                            : isMiddle
                            ? 'bg-indigo-100 text-indigo-900 border border-indigo-200'
                            : isHigh
                            ? 'bg-purple-100 text-purple-900 border border-purple-200'
                            : isDaycare
                            ? 'bg-amber-100 text-amber-900 border border-amber-200'
                            : isBoundary
                            ? 'bg-cyan-100 text-cyan-900 border border-cyan-200'
                            : isHospital
                            ? 'bg-rose-100 text-rose-900 border border-rose-200'
                            : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                        }`}
                      >
                        {isElementary && <School className="w-3 h-3 text-blue-700" />}
                        {isMiddle && <GraduationCap className="w-3 h-3 text-indigo-700" />}
                        {isHigh && <GraduationCap className="w-3 h-3 text-purple-700" />}
                        {isDaycare && <Baby className="w-3 h-3 text-amber-700" />}
                        {isBoundary && <Map className="w-3 h-3 text-cyan-700" />}
                        {isHospital && <HeartPulse className="w-3 h-3 text-rose-700" />}
                        <span>{res.facilityType}</span>
                      </span>

                      {/* Grade Levels Tag */}
                      {res.gradeLevels && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          {res.gradeLevels}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleSaveResource(res.id)}
                      title={
                        isSaved
                          ? lang === 'en'
                            ? 'Remove bookmark'
                            : 'Eliminar de guardados'
                          : lang === 'en'
                          ? 'Bookmark resource'
                          : 'Guardar recurso'
                      }
                      className="p-1 rounded-md text-slate-400 hover:text-amber-700 transition-colors cursor-pointer"
                    >
                      {isSaved ? (
                        <BookmarkCheck className="w-4 h-4 text-blue-600 fill-blue-600" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {res.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>
                      {res.city} • <strong className="text-slate-700">{res.county}</strong>
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {res.description}
                  </p>

                  {/* School Boundary & Feeder Pipeline Highlight Box */}
                  {res.boundaryZone && (
                    <div className="mt-2.5 p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 space-y-1">
                      <div className="flex items-start gap-1.5 font-medium text-slate-900">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-blue-950">{lang === 'en' ? 'Attendance Zone:' : 'Zona Escolar:'}</strong> {res.boundaryZone}
                        </span>
                      </div>
                      {res.feederPattern && (
                        <div className="flex items-start gap-1.5 text-[11px] text-blue-900">
                          <Compass className="w-3 h-3 text-blue-500 shrink-0 mt-0.5" />
                          <span>
                            <strong>{lang === 'en' ? 'Feeder Pathway:' : 'Trayectoria:'}</strong> {res.feederPattern}
                          </span>
                        </div>
                      )}
                      {res.boundaryMapUrl && (
                        <div className="pt-0.5">
                          <a
                            href={res.boundaryMapUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 hover:text-blue-900 hover:underline"
                          >
                            <span>{lang === 'en' ? 'Check Street Boundary Map' : 'Ver Mapa de Límites Oficial'}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bullet Benefits */}
                  <div className="mt-2.5 space-y-1.5">
                    {res.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isEducation ? 'text-blue-600' : 'text-emerald-600'
                          }`}
                        />
                        <span className="leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Contact & Action Footer */}
                <div className="p-5 pt-3 bg-slate-50 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <a
                      href={`tel:${res.phone.replace(/[^\d]/g, '')}`}
                      className="font-bold text-slate-800 hover:text-blue-700 flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-slate-400" />
                      {res.phone}
                    </a>
                    <span className="text-[11px] font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {res.costType}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="truncate pr-2">{res.address}</span>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(res.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-700 hover:underline font-semibold shrink-0 flex items-center gap-0.5"
                    >
                      {lang === 'en' ? 'Map' : 'Mapa'}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Action Buttons: Documents & Ask AI */}
                  <div className="pt-1.5 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalResource(res)}
                      className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-500" />
                      <span>{lang === 'en' ? 'What to Bring' : 'Documentos'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onAskAboutResource(res.name)}
                      className="inline-flex items-center justify-center gap-1 py-1.5 px-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 text-xs font-semibold transition-colors cursor-pointer"
                      title={lang === 'en' ? 'Ask AI Navigator about this provider' : 'Consultar con la IA'}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>{lang === 'en' ? 'Ask AI' : 'IA'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* "What To Bring" Modal Popup */}
      {activeModalResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => setActiveModalResource(null)}
              className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                {lang === 'en' ? 'Checklist Before Visiting' : 'Documentos Recomendados'}
              </span>
              {activeModalResource.gradeLevels && (
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  {activeModalResource.gradeLevels}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {activeModalResource.name}
            </h3>
            <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {activeModalResource.address}
            </p>

            {/* School Boundary Details if present */}
            {activeModalResource.boundaryZone && (
              <div className="mb-4 p-3 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-slate-800 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5 text-blue-900">
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>{lang === 'en' ? 'School Attendance Zone:' : 'Zona Escolar Asignada:'}</span>
                </div>
                <p className="text-slate-700">{activeModalResource.boundaryZone}</p>
                {activeModalResource.feederPattern && (
                  <p className="text-[11px] text-blue-800">
                    <strong>{lang === 'en' ? 'Feeder Pathway:' : 'Secuencia Escolar:'}</strong> {activeModalResource.feederPattern}
                  </p>
                )}
                {activeModalResource.boundaryMapUrl && (
                  <a
                    href={activeModalResource.boundaryMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-blue-700 hover:underline pt-1"
                  >
                    <span>{lang === 'en' ? 'Verify Street Boundary on Official District Map' : 'Verificar Límites en Mapa Oficial'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-slate-600" />
                {lang === 'en' ? 'Recommended Documents to Bring:' : 'Lleve los siguientes documentos si los tiene:'}
              </h4>
              <ul className="space-y-2">
                {activeModalResource.whatToBring.map((doc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs text-slate-500 space-y-1 mb-5">
              <p>
                <strong>{lang === 'en' ? 'Languages Available:' : 'Idiomas Disponibles:'}</strong>{' '}
                {activeModalResource.languages.join(', ')}
              </p>
              <p>
                <strong>{lang === 'en' ? 'Coverage / Cost:' : 'Costo / Cobertura:'}</strong>{' '}
                {activeModalResource.costType}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${activeModalResource.phone.replace(/[^\d]/g, '')}`}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-bold text-center hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                {lang === 'en' ? 'Call Office' : 'Llamar'}
              </a>

              <a
                href={activeModalResource.website}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Globe className="w-4 h-4 text-slate-500" />
                {lang === 'en' ? 'Website' : 'Sitio'}
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
