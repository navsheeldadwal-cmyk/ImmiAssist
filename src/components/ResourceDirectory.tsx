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
  Search
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
  const [activeModalResource, setActiveModalResource] = useState<ResourceItem | null>(null);

  const counties: { id: IECounty; labelEn: string; labelEs: string }[] = [
    { id: 'All', labelEn: 'All Inland Empire', labelEs: 'Todo el Inland Empire' },
    { id: 'San Bernardino County', labelEn: 'San Bernardino', labelEs: 'San Bernardino' },
    { id: 'Riverside County', labelEn: 'Riverside', labelEs: 'Riverside' },
    { id: 'Pomona Valley', labelEn: 'Pomona Valley', labelEs: 'Valle de Pomona' },
    { id: 'Coachella Valley', labelEn: 'Coachella Valley', labelEs: 'Valle de Coachella' },
  ];

  // Focused strictly on School and Health per user request
  const filteredResources = useMemo(() => {
    return INLAND_EMPIRE_RESOURCES.filter((res) => {
      // Hide non-school and non-health categories
      if (res.category !== 'education' && res.category !== 'health') {
        return false;
      }
      // Selected Category filter
      if (selectedCategory !== 'all' && res.category !== selectedCategory) {
        return false;
      }
      // County filter
      if (selectedCounty !== 'All' && res.county !== selectedCounty && res.county !== 'All') {
        return false;
      }
      // Search query filter
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const matchesName = res.name.toLowerCase().includes(q);
        const matchesCity = res.city.toLowerCase().includes(q);
        const matchesDesc = res.description.toLowerCase().includes(q);
        const matchesBenefits = res.keyBenefits.some((b) => b.toLowerCase().includes(q));
        const matchesLanguages = res.languages.some((l) => l.toLowerCase().includes(q));
        if (!matchesName && !matchesCity && !matchesDesc && !matchesBenefits && !matchesLanguages) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedCounty, searchQuery]);

  return (
    <section id="resources-directory-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            <span>{lang === 'en' ? 'Verified Directory' : 'Directorio Verificado'}</span>
            <span>•</span>
            <span>
              {filteredResources.length}{' '}
              {lang === 'en' ? 'Schools & Clinics' : 'Escuelas y Clínicas'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {selectedCategory === 'education'
              ? lang === 'en'
                ? 'Schools & Education Centers'
                : 'Escuelas y Centros Educativos'
              : selectedCategory === 'health'
              ? lang === 'en'
                ? 'Clinics & Healthcare Services'
                : 'Clínicas y Servicios de Salud'
              : lang === 'en'
              ? 'Inland Empire Schools & Clinics'
              : 'Escuelas y Clínicas del Inland Empire'}
          </h2>
        </div>

        {/* Category Pill Switcher */}
        <div className="inline-flex rounded-xl border border-slate-200 p-1 bg-slate-100 text-xs font-bold">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'en' ? 'All (Both)' : 'Todos (Ambos)'}
          </button>
          <button
            onClick={() => setSelectedCategory('education')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCategory === 'education'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Schools' : 'Escuelas'}
          </button>
          <button
            onClick={() => setSelectedCategory('health')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCategory === 'health'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Healthcare' : 'Salud'}
          </button>
        </div>
      </div>

      {/* Subregion County Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-6 pb-2 border-b border-slate-200">
        <span className="text-xs text-slate-500 font-medium mr-1">
          {lang === 'en' ? 'Region:' : 'Región:'}
        </span>
        {counties.map((county) => {
          const isSelected = selectedCounty === county.id;
          return (
            <button
              key={county.id}
              onClick={() => setSelectedCounty(county.id)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {lang === 'en' ? county.labelEn : county.labelEs}
            </button>
          );
        })}
      </div>

      {/* Resource Cards Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <h3 className="text-base font-bold text-slate-800">
            {lang === 'en' ? 'No matching providers found' : 'No se encontraron centros'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-4">
            {lang === 'en'
              ? 'Try clearing your search query or selecting "All Inland Empire".'
              : 'Intente borrar su búsqueda o seleccionar "Todo el Inland Empire".'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedCounty('All');
            }}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Reset Filters' : 'Reiniciar Filtros'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources.map((res) => {
            const isEducation = res.category === 'education';
            const isSaved = savedIds.includes(res.id);

            return (
              <div
                key={res.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Card Top Section */}
                <div className="p-5 pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-bold ${
                        isEducation
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {isEducation ? (
                        <GraduationCap className="w-3.5 h-3.5" />
                      ) : (
                        <HeartPulse className="w-3.5 h-3.5" />
                      )}
                      <span>
                        {isEducation
                          ? lang === 'en'
                            ? 'Education'
                            : 'Educación'
                          : lang === 'en'
                          ? 'Healthcare'
                          : 'Salud'}
                      </span>
                    </span>

                    <button
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
                        <BookmarkCheck className="w-4 h-4 text-amber-700 fill-amber-700" />
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

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {res.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="mt-3 space-y-1.5">
                    {res.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
                      className="font-bold text-slate-800 hover:text-amber-700 flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-slate-400" />
                      {res.phone}
                    </a>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
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
                      onClick={() => setActiveModalResource(res)}
                      className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-500" />
                      <span>{lang === 'en' ? 'What to Bring' : 'Documentos'}</span>
                    </button>

                    <button
                      onClick={() => onAskAboutResource(res.name)}
                      className="inline-flex items-center justify-center gap-1 py-1.5 px-2.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold transition-colors cursor-pointer"
                      title={lang === 'en' ? 'Ask AI Navigator about this provider' : 'Consultar con la IA'}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
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
              onClick={() => setActiveModalResource(null)}
              className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                {lang === 'en' ? 'Checklist Before Visiting' : 'Documentos Recomendados'}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {activeModalResource.name}
            </h3>
            <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {activeModalResource.address}
            </p>

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
                <strong>{lang === 'en' ? 'Cost Structure:' : 'Costo:'}</strong>{' '}
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
