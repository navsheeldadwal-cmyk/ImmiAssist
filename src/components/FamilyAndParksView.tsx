import React, { useState } from 'react';
import {
  Trees,
  Calendar,
  Baby,
  Lightbulb,
  MapPin,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  HelpCircle,
  Sun,
  Flame,
  Award,
  BookOpen,
  Car,
  Heart,
  Info,
  Phone
} from 'lucide-react';
import {
  PARKS_AND_OUTDOORS,
  FAMILY_EVENTS_AND_ACTIVITIES,
  CRITICAL_FAMILY_PROGRAMS,
  FUN_FACTS_DATA,
  ParkItem,
  FamilyEventItem,
  CriticalFamilyInfo,
  FunFactItem
} from '../data/familyAndParks';

interface FamilyAndParksViewProps {
  onAskAi: (promptText: string) => void;
  lang: 'en' | 'es';
}

type SubTab = 'parks' | 'events' | 'family-programs' | 'fun-facts';

export const FamilyAndParksView: React.FC<FamilyAndParksViewProps> = ({ onAskAi, lang }) => {
  const [activeTab, setActiveTab] = useState<SubTab>('parks');
  const [funFactRegion, setFunFactRegion] = useState<'All' | 'Inland Empire' | 'SoCal' | 'California' | 'United States'>('All');
  const [parkWaterFilter, setParkWaterFilter] = useState<boolean>(false);
  const [expandedFactId, setExpandedFactId] = useState<string | null>(null);

  const subTabs = [
    {
      id: 'parks' as SubTab,
      labelEn: 'Parks & Splash Zones',
      labelEs: 'Parques y Zonas de Agua',
      icon: Trees,
      count: PARKS_AND_OUTDOORS.length
    },
    {
      id: 'events' as SubTab,
      labelEn: 'Family Events & Festivals',
      labelEs: 'Eventos y Festivales Gratis',
      icon: Calendar,
      count: FAMILY_EVENTS_AND_ACTIVITIES.length
    },
    {
      id: 'family-programs' as SubTab,
      labelEn: 'Essential Family Programs',
      labelEs: 'Programas Clave para Familias',
      icon: Baby,
      count: CRITICAL_FAMILY_PROGRAMS.length
    },
    {
      id: 'fun-facts' as SubTab,
      labelEn: 'Fun Facts: IE, SoCal & USA',
      labelEs: 'Datos Curiosos: IE, CA y EE.UU.',
      icon: Lightbulb,
      count: FUN_FACTS_DATA.length
    }
  ];

  const filteredFacts = FUN_FACTS_DATA.filter((fact) => {
    if (funFactRegion !== 'All' && fact.region !== funFactRegion) {
      return false;
    }
    return true;
  });

  const filteredParks = PARKS_AND_OUTDOORS.filter((park) => {
    if (parkWaterFilter && !park.hasWaterPlay) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
          <Sun className="w-3.5 h-3.5 text-emerald-700" />
          {lang === 'en' ? 'Community Life & Family Joy' : 'Vida Comunitaria y Familiar'}
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'en' ? 'Parks, Family Activities & Fun Facts' : 'Parques, Familia y Datos Curiosos'}
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
          {lang === 'en'
            ? 'Discover budget-friendly parks, splash pads, seasonal festivals, critical support programs (WIC, preschool, paid family leave), and fascinating history about the Inland Empire and America.'
            : 'Descubra parques familiares, zonas de agua, festivales gratuitos, programas esenciales para niños (WIC, preescolar, permiso familiar pagado) e historia fascinante del Inland Empire y EE.UU.'}
        </p>
      </div>

      {/* Main SubTab Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-slate-200/80 pb-4">
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{lang === 'en' ? tab.labelEn : tab.labelEs}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  isActive ? 'bg-amber-700 text-amber-100' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* --- TAB 1: PARKS & SPLASH ZONES --- */}
      {activeTab === 'parks' && (
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-amber-50/70 border border-amber-200 p-4 rounded-2xl">
            <div>
              <h3 className="font-bold text-amber-950 text-sm sm:text-base">
                {lang === 'en' ? 'Family-Friendly Parks & Green Spaces' : 'Parques y Áreas Verdes Familiares'}
              </h3>
              <p className="text-xs text-amber-900/80">
                {lang === 'en'
                  ? 'Great places for kids to run, picnic, explore nature trails, and cool off in splash pads.'
                  : 'Lugares excelentes para que los niños jueguen, hagan días de campo y se refresquen.'}
              </p>
            </div>

            <button
              onClick={() => setParkWaterFilter(!parkWaterFilter)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                parkWaterFilter
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white border border-amber-300 text-amber-900 hover:bg-amber-100'
              }`}
            >
              <Droplets className="w-3.5 h-3.5 text-sky-400" />
              <span>
                {lang === 'en'
                  ? parkWaterFilter
                    ? 'Showing: Water Play Only'
                    : 'Filter: Has Splash / Water Play'
                  : parkWaterFilter
                  ? 'Mostrando: Solo Juegos de Agua'
                  : 'Filtrar: Con Zona de Agua'}
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredParks.map((park) => (
              <div
                key={park.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                      {park.admission}
                    </span>
                    {park.hasWaterPlay && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800">
                        <Droplets className="w-3 h-3 text-sky-600" />
                        Splash / Water
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {park.name}
                  </h4>

                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mt-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>
                      {park.city} • <strong className="text-slate-700">{park.county}</strong>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {park.description}
                  </p>

                  {/* Highlights pills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {park.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Family Tip Box */}
                  <div className="bg-amber-50/80 border border-amber-200/70 rounded-xl p-3 text-xs text-amber-900">
                    <strong className="block text-[11px] font-bold uppercase tracking-wider text-amber-950 mb-0.5 flex items-center gap-1">
                      <Heart className="w-3 h-3 text-amber-600" />
                      {lang === 'en' ? 'Parent / Family Tip:' : 'Consejo para Familias:'}
                    </strong>
                    <span>{park.familyTip}</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(park.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-900"
                  >
                    <span>{lang === 'en' ? 'Get Directions' : 'Cómo Llegar'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() =>
                      onAskAi(
                        `Tell me more about visiting ${park.name} in ${park.city} with young kids. What are the best hours, parking tips, and what should we bring?`
                      )
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold bg-white border border-slate-200 hover:bg-amber-50 text-slate-700 hover:text-amber-900 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>{lang === 'en' ? 'Ask AI' : 'Consultar'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- TAB 2: LOCAL EVENTS & FESTIVALS --- */}
      {activeTab === 'events' && (
        <section className="space-y-6">
          <div className="bg-sky-50 border border-sky-200 p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-sky-950">
            <Calendar className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block mb-0.5">
                {lang === 'en' ? 'Free & Low-Cost Family Traditions' : 'Tradiciones y Eventos Gratuitos'}
              </strong>
              <span>
                {lang === 'en'
                  ? 'The Inland Empire offers world-class community traditions where families can enjoy music, movies, holiday lights, and museum culture without financial barriers.'
                  : 'El Inland Empire ofrece eventos culturales reconocidos donde las familias pueden disfrutar de música, cine y festivales de luces sin barreras de costo.'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FAMILY_EVENTS_AND_ACTIVITIES.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                      {evt.season}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                      {evt.cost}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1">{evt.title}</h4>

                  <p className="text-xs text-slate-500 font-medium mb-3 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{evt.location}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {evt.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 text-xs text-slate-700 mb-4">
                    {evt.familyHighlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  {evt.website ? (
                    <a
                      href={evt.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900"
                    >
                      <span>{lang === 'en' ? 'Official Event Website' : 'Sitio Oficial del Evento'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400">
                      {lang === 'en' ? 'Community Event' : 'Evento Comunitario'}
                    </span>
                  )}

                  <button
                    onClick={() =>
                      onAskAi(
                        `What are the dates, schedules, and tips for bringing a family to ${evt.title}?`
                      )
                    }
                    className="inline-flex items-center gap-1 text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>{lang === 'en' ? 'Ask AI for Dates' : 'Preguntar Fechas'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- TAB 3: ESSENTIAL FAMILY PROGRAMS & SAFETY --- */}
      {activeTab === 'family-programs' && (
        <section className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-emerald-950">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block mb-0.5">
                {lang === 'en'
                  ? 'Safe for Immigrant Families • Exempt from Public Charge'
                  : 'Seguro para Familias Inmigrantes • Exento de Carga Pública'}
              </strong>
              <span>
                {lang === 'en'
                  ? 'Programs like WIC, Head Start preschool, car seat inspections, and developmental therapy are rights designed for every child living in California. Using them will never endanger your immigration status.'
                  : 'Programas como WIC, preescolar Head Start y revisiones de asientos de auto son derechos para todos los niños en California. Su uso no afecta su estatus migratorio.'}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {CRITICAL_FAMILY_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-amber-300 transition-all space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900">
                    {prog.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {lang === 'en' ? 'Protected for all immigrants' : 'Protegido para inmigrantes'}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900">{prog.title}</h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prog.summary}
                </p>

                {/* Key Rule / Right */}
                <div className="bg-slate-50 border-l-4 border-amber-600 p-3 rounded-r-xl text-xs text-slate-800">
                  <strong className="block text-slate-900 font-bold mb-0.5">
                    {lang === 'en' ? 'Critical Rule / Legal Protection:' : 'Regla Clave / Protección Legal:'}
                  </strong>
                  <span>{prog.keyRuleOrRight}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div>
                    <span className="font-bold text-slate-700 block">
                      {lang === 'en' ? 'How to Apply / Access:' : 'Cómo Acceder:'}
                    </span>
                    <span className="text-slate-600">{prog.howToAccess}</span>
                  </div>

                  <div>
                    <span className="font-bold text-slate-700 block">
                      {lang === 'en' ? 'Phone / Helpline:' : 'Teléfono de Contacto:'}
                    </span>
                    <span className="text-slate-800 font-semibold">{prog.phoneOrContact}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() =>
                      onAskAi(
                        `How can an immigrant family in San Bernardino/Riverside County apply for ${prog.title}? What documents do we need?`
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Ask AI Step-by-Step' : 'Consultar Paso a Paso'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- TAB 4: FUN FACTS TRIVIA HUB --- */}
      {activeTab === 'fun-facts' && (
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900">
              {lang === 'en' ? 'Discover Your New Home & Heritage' : 'Descubra la Historia de Su Nuevo Hogar'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {lang === 'en'
                ? 'Fascinating trivia and inspiring facts about the Inland Empire, Southern California, the Golden State, and the United States.'
                : 'Datos curiosos e inspiradores sobre el Inland Empire, el Sur de California, el Estado Dorado y los Estados Unidos.'}
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(['All', 'Inland Empire', 'SoCal', 'California', 'United States'] as const).map(
              (reg) => (
                <button
                  key={reg}
                  onClick={() => setFunFactRegion(reg)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    funFactRegion === reg
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {reg === 'All'
                    ? lang === 'en'
                      ? 'All Facts'
                      : 'Todos'
                    : reg}
                </button>
              )
            )}
          </div>

          {/* Facts Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredFacts.map((item) => {
              const isExpanded = expandedFactId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                        {item.region}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      {item.fact}
                    </p>

                    {/* Did You Know Accordion */}
                    <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-3 text-xs">
                      <strong className="block font-bold text-amber-950 mb-1 flex items-center gap-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                        {lang === 'en' ? 'Did You Know?' : '¿Sabía Usted?'}
                      </strong>
                      <p className="text-slate-700 leading-relaxed">{item.didYouKnow}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() =>
                        onAskAi(
                          `Tell me more fun historical facts and stories about: ${item.title} in ${item.region}.`
                        )
                      }
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:text-amber-950 cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>{lang === 'en' ? 'Ask AI to expand on this' : 'Saber más con la IA'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
