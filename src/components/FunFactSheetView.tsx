import React, { useState, useMemo } from 'react';
import {
  Lightbulb,
  Printer,
  Search,
  Sparkles,
  Share2,
  Check,
  MapPin,
  Calendar,
  Building,
  Award,
  Sun,
  Flame,
  Globe2,
  Trees,
  Car,
  Compass,
  Heart
} from 'lucide-react';
import { FUN_FACTS_DATA, FunFactItem } from '../data/familyAndParks';

interface FunFactSheetViewProps {
  onAskAi: (promptText: string) => void;
  lang: 'en' | 'es';
}

export const FunFactSheetView: React.FC<FunFactSheetViewProps> = ({ onAskAi, lang }) => {
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Inland Empire' | 'SoCal' | 'California' | 'United States'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Region tabs
  const regions: Array<'All' | 'Inland Empire' | 'SoCal' | 'California' | 'United States'> = [
    'All',
    'Inland Empire',
    'SoCal',
    'California',
    'United States'
  ];

  // Quick stats by the numbers
  const fastStats = [
    {
      number: '20,105',
      unit: lang === 'en' ? 'sq miles' : 'millas cuadradas',
      label: lang === 'en' ? 'San Bernardino County size (bigger than Switzerland & Belgium combined!)' : 'Tamaño de San Bernardino (más grande que Suiza y Bélgica)',
      color: 'bg-amber-500/10 text-amber-900 border-amber-200'
    },
    {
      number: '1873',
      unit: lang === 'en' ? 'Living Tree' : 'Árbol Vivo',
      label: lang === 'en' ? 'Original Parent Navel Orange Tree in Riverside still growing fruit' : 'Árbol original de naranja navel en Riverside aún da fruta',
      color: 'bg-emerald-500/10 text-emerald-900 border-emerald-200'
    },
    {
      number: '1948',
      unit: 'Route 66',
      label: lang === 'en' ? 'World’s 1st McDonald’s opened in San Bernardino, creating fast food' : 'El primer McDonald’s del mundo abrió en San Bernardino',
      color: 'bg-red-500/10 text-red-900 border-red-200'
    },
    {
      number: '1924',
      unit: 'Redlands Bowl',
      label: lang === 'en' ? 'Oldest 100% free outdoor music bowl in the US (never charges admission)' : 'Festival de música al aire libre 100% gratis más antiguo de EE.UU.',
      color: 'bg-indigo-500/10 text-indigo-900 border-indigo-200'
    },
    {
      number: '284',
      unit: lang === 'en' ? 'Sunny Days/Yr' : 'Días de Sol/Año',
      label: lang === 'en' ? 'Year-round Mediterranean sunshine enjoyed by 4.6M IE residents' : 'Clima soleado mediterráneo que disfrutan 4.6M de residentes',
      color: 'bg-yellow-500/10 text-yellow-900 border-yellow-200'
    },
    {
      number: '#5',
      unit: lang === 'en' ? 'Global Economy' : 'Economía Mundial',
      label: lang === 'en' ? 'California rank among all nations on Earth in economic GDP' : 'Posición de California entre todas las economías del planeta',
      color: 'bg-sky-500/10 text-sky-900 border-sky-200'
    }
  ];

  // Filtered facts
  const filteredFacts = useMemo(() => {
    return FUN_FACTS_DATA.filter((item) => {
      if (selectedRegion !== 'All' && item.region !== selectedRegion) {
        return false;
      }
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchFact = item.fact.toLowerCase().includes(query);
        const matchDidYouKnow = item.didYouKnow.toLowerCase().includes(query);
        const matchRegion = item.region.toLowerCase().includes(query);
        return matchTitle || matchFact || matchDidYouKnow || matchRegion;
      }
      return true;
    });
  }, [selectedRegion, searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyFact = (item: FunFactItem) => {
    const textToCopy = `🏛️ ${item.title} (${item.region})\n${item.fact}\n\n💡 Did You Know? ${item.didYouKnow}\n\nVia ImmiAssist Inland Empire Guide`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Print-only Header */}
      <div className="hidden print:block mb-6 border-b-2 border-slate-900 pb-4">
        <h1 className="text-2xl font-black text-slate-900">
          ImmiAssist • Inland Empire & California Fun Fact Sheet
        </h1>
        <p className="text-xs text-slate-600 mt-1">
          Official Community Reference for Newcomer Families & Students • Riverside & San Bernardino Counties
        </p>
      </div>

      {/* Main Screen Header & Badge */}
      <div className="text-center max-w-3xl mx-auto mb-8 print:hidden">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
          <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
          <span>
            {lang === 'en'
              ? 'Official Community Trivia & Heritage Sheet'
              : 'Hoja Oficial de Curiosidades y Patrimonio del IE'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'en'
            ? 'Inland Empire & California Fun Fact Sheet'
            : 'Hoja de Datos Curiosos del Inland Empire y California'}
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {lang === 'en'
            ? 'A quick-reference sheet of verified, inspiring trivia about your new home: from the birthplace of the citrus empire and historic Route 66 to geographic marvels and California milestones.'
            : 'Una hoja de referencia rápida con datos fascinantes y verificados sobre su nuevo hogar: desde la cuna de los cítricos y la histórica Ruta 66 hasta maravillas geográficas y logros de California.'}
        </p>

        {/* Action Buttons: Print / Share */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>{lang === 'en' ? 'Print / Save Fact Sheet (PDF)' : 'Imprimir / Guardar Hoja (PDF)'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              const fullText = fastStats.map(s => `${s.number} ${s.unit}: ${s.label}`).join('\n\n');
              navigator.clipboard.writeText(`Inland Empire Fast Facts:\n\n${fullText}\n\nVia ImmiAssist`);
              alert(lang === 'en' ? 'Summary facts copied to clipboard!' : '¡Resumen copiado al portapapeles!');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-slate-600" />
            <span>{lang === 'en' ? 'Copy Quick Summary' : 'Copiar Resumen'}</span>
          </button>
        </div>
      </div>

      {/* "By the Numbers" Quick-Glance Ribbon */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-amber-600" />
            <span>{lang === 'en' ? 'Regional Milestones at a Glance' : 'Cifras Clave de un Vistazo'}</span>
          </h2>
          <span className="text-[11px] text-slate-400 print:hidden">
            {lang === 'en' ? '6 Fast IE & CA Landmarks' : '6 Hitos Rápidos'}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {fastStats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-2xl border ${stat.color} flex flex-col justify-between transition-transform hover:-translate-y-0.5`}
            >
              <div>
                <span className="text-xl sm:text-2xl font-black block tracking-tight">
                  {stat.number}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider block opacity-80 mb-1">
                  {stat.unit}
                </span>
              </div>
              <p className="text-[11px] leading-tight opacity-90 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-white rounded-2xl border border-slate-200 p-4 mb-6 shadow-xs print:hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {reg === 'All'
                  ? lang === 'en' ? 'All Facts' : 'Todos'
                  : reg}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'en'
                  ? 'Search trivia ("orange", "Route 66")...'
                  : 'Buscar dato ("naranja", "Ruta 66")...'
              }
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:border-slate-900 bg-slate-50 focus:bg-white"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-[10px] text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Fact Sheet Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            {lang === 'en'
              ? `Showing ${filteredFacts.length} trivia facts`
              : `Mostrando ${filteredFacts.length} datos curiosos`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 print:grid-cols-2 print:gap-4">
          {filteredFacts.map((item) => {
            const isCopied = copiedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between print:border-slate-300 print:shadow-none print:break-inside-avoid"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 print:bg-slate-200 print:text-slate-900">
                      {item.region}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleCopyFact(item)}
                      title={lang === 'en' ? 'Copy fact text' : 'Copiar dato'}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-slate-700 transition-colors cursor-pointer print:hidden"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">{lang === 'en' ? 'Copied' : 'Copiado'}</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Copy' : 'Copiar'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3 font-normal">
                    {item.fact}
                  </p>

                  {/* "Did You Know?" Box */}
                  <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 text-xs print:bg-slate-50 print:border-slate-200">
                    <strong className="block font-bold text-amber-950 mb-1 flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                      {lang === 'en' ? 'Did You Know?' : '¿Sabía Usted?'}
                    </strong>
                    <p className="text-slate-700 leading-relaxed">
                      {item.didYouKnow}
                    </p>
                  </div>
                </div>

                {/* Footer Action: Ask AI */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between print:hidden">
                  <span className="text-[11px] text-slate-400">
                    {lang === 'en' ? 'Historical & Cultural Gem' : 'Joya Histórica y Cultural'}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      onAskAi(
                        `Tell me the full history and fun trivia behind: "${item.title}" in ${item.region}. What makes it unique for newcomer families?`
                      )
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg border border-amber-200 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>{lang === 'en' ? 'Ask AI to expand' : 'Saber más con la IA'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredFacts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
            <Lightbulb className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h4 className="font-bold text-slate-700 text-sm">
              {lang === 'en' ? 'No trivia facts found' : 'No se encontraron datos'}
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              {lang === 'en'
                ? 'Try a different search word or switch the region filter.'
                : 'Pruebe con otra palabra o cambie el filtro de región.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
              }}
              className="mt-3 text-xs text-amber-700 hover:underline font-bold"
            >
              {lang === 'en' ? 'Reset Filters' : 'Restablecer Filtros'}
            </button>
          </div>
        )}
      </section>

      {/* Bonus Regional History Tip Box */}
      <section className="mt-8 bg-slate-900 text-white rounded-2xl p-6 print:hidden flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            {lang === 'en' ? 'Inland Empire Pride' : 'Orgullo del Inland Empire'}
          </span>
          <h4 className="text-lg font-bold">
            {lang === 'en'
              ? 'Have a fun question about Inland Empire history?'
              : '¿Tiene preguntas sobre la historia del Inland Empire?'}
          </h4>
          <p className="text-xs text-slate-300 max-w-xl">
            {lang === 'en'
              ? 'Ask our fast AI Assistant about the original Citrus Fair, the historic Mission Inn in Riverside, or the origin of names like Ontario, Chino, and Corona.'
              : 'Consulte a nuestro Asistente IA sobre la Feria de los Cítricos, el histórico Mission Inn o el origen de nombres como Ontario, Chino y Corona.'}
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            onAskAi(
              lang === 'en'
                ? 'What are the most fascinating hidden historical stories about cities in the Inland Empire (Riverside, San Bernardino, Redlands, Ontario)?'
                : '¿Cuáles son las historias y datos históricos más fascinantes sobre las ciudades del Inland Empire?'
            )
          }
          className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shrink-0 shadow-md"
        >
          {lang === 'en' ? 'Ask AI About IE History' : 'Preguntar a la IA sobre el IE'}
        </button>
      </section>
    </div>
  );
};
