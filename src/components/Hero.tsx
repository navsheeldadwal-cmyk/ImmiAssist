import React, { useState } from 'react';
import {
  GraduationCap,
  HeartPulse,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Mic,
  MicOff,
  Trees,
  Building2,
  Scale,
  Lightbulb
} from 'lucide-react';
import { ResourceCategory } from '../types';
import { SCHOOL_IMAGE, HEALTH_IMAGE, PARK_IMAGE } from '../assets/images';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: ResourceCategory | 'all';
  setSelectedCategory: (cat: ResourceCategory | 'all') => void;
  onAskAiPrompt: (promptText: string) => void;
  openAiAssistant: () => void;
  lang: 'en' | 'es';
  onNavigateToParks?: () => void;
  onNavigateToFunFacts?: () => void;
  onNavigateToRefugeeLegal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onAskAiPrompt,
  openAiAssistant,
  lang,
  onNavigateToParks,
  onNavigateToFunFacts,
  onNavigateToRefugeeLegal
}) => {
  const [isVoiceListening, setIsVoiceListening] = useState(false);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Scroll directly to the directory section so users see the filtered cards immediately
    const el = document.getElementById('resources-directory-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickTopic = (topic: string, cat?: ResourceCategory) => {
    setSearchQuery(topic);
    if (cat) {
      setSelectedCategory(cat);
    } else {
      setSelectedCategory('all');
    }
    setTimeout(() => {
      handleSearchSubmit();
    }, 50);
  };

  // Microphone speech search
  const handleMicSearch = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      openAiAssistant();
      return;
    }

    try {
      if (isVoiceListening) {
        setIsVoiceListening(false);
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = lang === 'es' ? 'es-US' : 'en-US';

      recognition.onstart = () => {
        setIsVoiceListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setIsVoiceListening(false);
        if (transcript && transcript.trim().length > 0) {
          if (
            transcript.includes('?') ||
            transcript.toLowerCase().startsWith('how') ||
            transcript.toLowerCase().startsWith('where') ||
            transcript.toLowerCase().startsWith('can') ||
            transcript.toLowerCase().startsWith('cómo') ||
            transcript.toLowerCase().startsWith('dónde') ||
            transcript.toLowerCase().startsWith('puedo')
          ) {
            onAskAiPrompt(transcript);
          } else {
            setSearchQuery(transcript);
            handleSearchSubmit();
          }
        }
      };

      recognition.onerror = () => {
        setIsVoiceListening(false);
      };

      recognition.onend = () => {
        setIsVoiceListening(false);
      };

      recognition.start();
    } catch {
      setIsVoiceListening(false);
      openAiAssistant();
    }
  };

  const scrollToDirectory = (category?: ResourceCategory) => {
    if (category) {
      setSelectedCategory(category);
    }
    const el = document.getElementById('resources-directory-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        {/* Title & Tagline - Clean, Professional Newcomer Focus */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>
              {lang === 'en'
                ? 'Official Inland Empire Community Navigator for New Immigrant Families'
                : 'Guía Comunitaria Oficial del Inland Empire para Familias Inmigrantes'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en'
              ? 'Welcome to the Inland Empire'
              : 'Bienvenido al Inland Empire'}
          </h1>

          <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'Essential guidance for new legal immigrant families, green card holders, and newcomers settling in Riverside and San Bernardino counties. Find top school districts, regional hospitals, healthcare plans, and family community centers.'
              : 'Orientación esencial para familias inmigrantes, residentes y recién llegados a Riverside y San Bernardino. Encuentre distritos escolares, hospitales regionales, planes de salud y centros comunitarios.'}
          </p>
        </div>

        {/* Unified Search & Voice Input */}
        <div className="max-w-2xl mx-auto mb-8">
          <form
            onSubmit={handleSearchSubmit}
            className={`flex items-center bg-white rounded-2xl border shadow-sm transition-all p-1.5 ${
              isVoiceListening
                ? 'border-red-500 ring-2 ring-red-500/20'
                : 'border-slate-300 focus-within:border-slate-900 focus-within:ring-2 focus-within:ring-slate-900/10'
            }`}
          >
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isVoiceListening
                  ? lang === 'en'
                    ? 'Listening... Speak in any language'
                    : 'Escuchando... Hable en su idioma'
                  : lang === 'en'
                  ? 'Search by name, city, "hospital", "daycare", "school", "doctor", "ESL"...'
                  : 'Buscar por nombre, ciudad, "hospital", "guardería", "escuela", "doctor", "inglés"...'
              }
              className="w-full px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 cursor-pointer mr-1"
              >
                {lang === 'en' ? 'Clear' : 'Borrar'}
              </button>
            )}

            {/* Microphone Button */}
            <button
              type="button"
              onClick={handleMicSearch}
              title={
                lang === 'en'
                  ? 'Tap microphone to speak in any language'
                  : 'Toque el micrófono para hablar en cualquier idioma'
              }
              className={`p-2 rounded-xl transition-all cursor-pointer shrink-0 mr-1 ${
                isVoiceListening
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {isVoiceListening ? (
                <MicOff className="w-4 h-4" />
              ) : (
                <Mic className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Search Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
            >
              <span>{lang === 'en' ? 'Search' : 'Buscar'}</span>
            </button>
          </form>

          {/* Quick Search Shortcut Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">
              {lang === 'en' ? 'Quick searches:' : 'Búsquedas rápidas:'}
            </span>
            <button
              type="button"
              onClick={() => handleQuickTopic('elementary', 'education')}
              className="bg-white border border-blue-200 hover:border-blue-400 text-blue-900 px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <span>{lang === 'en' ? 'Elementary Schools (TK–5)' : 'Escuelas Primarias'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickTopic('middle school', 'education')}
              className="bg-white border border-indigo-200 hover:border-indigo-400 text-indigo-900 px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <span>{lang === 'en' ? 'Middle Schools (6–8)' : 'Secundarias'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickTopic('high school', 'education')}
              className="bg-white border border-purple-200 hover:border-purple-400 text-purple-900 px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <span>{lang === 'en' ? 'High Schools (9–12)' : 'Preparatorias'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickTopic('daycare', 'education')}
              className="bg-white border border-amber-200 hover:border-amber-400 text-amber-900 px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <Building2 className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'en' ? 'Daycare & Childcare (0–5)' : 'Guarderías'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickTopic('boundary', 'education')}
              className="bg-white border border-cyan-200 hover:border-cyan-400 text-cyan-900 px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <span>{lang === 'en' ? 'School Boundaries & Zones' : 'Límites Escolares'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickTopic('hospital', 'health')}
              className="bg-white border border-rose-200 hover:border-rose-400 text-rose-900 px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
              <span>{lang === 'en' ? 'Regional Hospitals' : 'Hospitales'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickTopic('clinic', 'health')}
              className="bg-white border border-teal-200 hover:border-teal-400 text-teal-900 px-2.5 py-1 rounded-lg transition-colors cursor-pointer font-semibold"
            >
              {lang === 'en' ? 'Family Clinics' : 'Clínicas'}
            </button>
            {onNavigateToFunFacts && (
              <button
                type="button"
                onClick={onNavigateToFunFacts}
                className="bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-950 px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-bold shadow-xs"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
                <span>{lang === 'en' ? 'IE Fun Fact Sheet 📄' : 'Hoja de Curiosidades 📄'}</span>
              </button>
            )}
          </div>
        </div>

        {/* 2 Focused Primary Cards: Schools & Healthcare (Arrival Advisor pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. School, Childcare & Daycare Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              {/* Photo Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={SCHOOL_IMAGE}
                  alt="Inland Empire School Students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-xs">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {lang === 'en' ? 'Schools, Daycare & Boundaries' : 'Escuelas, Guarderías y Límites'}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold leading-tight">
                    {lang === 'en' ? 'Elementary, Middle, High School & Daycare' : 'Primarias, Secundarias, Preparatorias y Guarderías'}
                  </h3>
                </div>
              </div>

              {/* Scannable Key Points for Legal Immigrants & Families */}
              <div className="p-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Elementary Schools (Grades TK–5/6)' : 'Escuelas Primarias (TK-5)'}</strong>{' '}
                    {lang === 'en'
                      ? '– Full-day Transitional Kindergarten (TK) and dual-language immersion programs in your assigned neighborhood boundary.'
                      : '– Kínder de transición (TK) de día completo e inmersión bilingüe en su zona escolar asignada.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Middle & High Schools (Grades 6–12)' : 'Secundarias y Preparatorias (6-12)'}</strong>{' '}
                    {lang === 'en'
                      ? '– Advanced STEM academies, International Baccalaureate (IB), robotics, and foreign transcript evaluations for immigrant teens.'
                      : '– Academias STEM, Bachillerato Internacional (IB), robótica y convalidación de estudios secundarios.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'School Attendance Boundaries & Maps' : 'Límites Escolares y Mapas de Calles'}</strong>{' '}
                    {lang === 'en'
                      ? '– Street address locators for SBCUSD, RUSD, CNUSD, and OMSD to verify your child’s assigned schools and feeder pattern.'
                      : '– Buscadores de direcciones para verificar la escuela asignada por su calle y su secuencia escolar.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Licensed Infant & Toddler Daycare' : 'Guarderías para Bebés y Niños'}</strong>{' '}
                    {lang === 'en'
                      ? '– State CAPP childcare vouchers (CCRC & RCOE) paying up to 100% of licensed daycare and Early Head Start for babies.'
                      : '– Subsidios CAPP de cuidado infantil que cubren hasta el 100% del costo de guardería para bebés y niños pequeños.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => scrollToDirectory('education')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Browse Elementary, Middle & High Schools' : 'Ver Primarias, Secundarias y Preparatorias'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  onAskAiPrompt(
                    lang === 'en'
                      ? 'What documents do newly arrived immigrant families need to register children in public schools in Riverside or San Bernardino?'
                      : '¿Qué documentos necesitan las familias recién llegadas para inscribir a sus hijos en escuelas públicas en Riverside o San Bernardino?'
                  )
                }
                className="py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                title={lang === 'en' ? 'Ask AI question about schools' : 'Preguntar a la IA sobre escuelas'}
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
              </button>
            </div>
          </div>

          {/* 2. Healthcare & Hospitals Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              {/* Photo Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={HEALTH_IMAGE}
                  alt="Inland Empire Regional Healthcare"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-xs">
                    <HeartPulse className="w-3.5 h-3.5" />
                    {lang === 'en' ? 'Hospitals & Healthcare' : 'Hospitales y Salud'}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold leading-tight">
                    {lang === 'en' ? 'Regional Hospitals & Medical Centers' : 'Hospitales Regionales y Clínicas'}
                  </h3>
                </div>
              </div>

              {/* Scannable Key Points for Legal Immigrants & Families */}
              <div className="p-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Major Regional Hospitals' : 'Hospitales Regionales'}</strong>{' '}
                    {lang === 'en'
                      ? '– 24/7 Level 1 & 2 Emergency Departments at Loma Linda, Arrowhead Regional, RUHS, and Riverside Community.'
                      : '– Salas de emergencia 24/7 y centros de trauma en Loma Linda, Arrowhead, RUHS y Riverside Community.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Insurance & Medi-Cal Plans' : 'Seguros de Salud y Medi-Cal'}</strong>{' '}
                    {lang === 'en'
                      ? '– In-person navigation for Covered California health insurance and California Full-Scope Medi-Cal.'
                      : '– Orientación para seguros Covered California y cobertura médica estatal Medi-Cal.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Pediatric & Family Practice' : 'Pediatría y Doctores Familiares'}</strong>{' '}
                    {lang === 'en'
                      ? '– Multilingual physicians, child immunizations, prenatal care, and sliding-scale outpatient clinics.'
                      : '– Médicos bilingües, vacunas infantiles, atención prenatal y clínicas familiares.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => scrollToDirectory('health')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Browse Hospitals & Clinics' : 'Ver Hospitales y Clínicas'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  onAskAiPrompt(
                    lang === 'en'
                      ? 'Where are the top hospitals and family clinics in Riverside and San Bernardino counties for new families?'
                      : '¿Dónde están los principales hospitales y clínicas familiares en Riverside y San Bernardino para familias nuevas?'
                  )
                }
                className="py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                title={lang === 'en' ? 'Ask AI question about healthcare' : 'Preguntar a la IA sobre salud'}
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Third Banner for Parks & Young Family Life */}
        {onNavigateToParks && (
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <img
                  src={PARK_IMAGE}
                  alt="Inland Empire Park"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {lang === 'en'
                    ? 'Exploring the Region with Young Children?'
                    : '¿Explorando la Región con Niños Pequeños?'}
                </h4>
                <p className="text-xs text-slate-500">
                  {lang === 'en'
                    ? 'Find local splash pads, free lake parks, community events, and fun facts about Southern California.'
                    : 'Descubra parques familiares, zonas de agua, eventos gratuitos y datos curiosos del Inland Empire.'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onNavigateToParks}
              className="w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
            >
              <Trees className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'en' ? 'View Parks & Splash Pads' : 'Ver Parques y Zonas de Agua'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>
        )}

        {/* Dedicated Inland Empire Fun Fact Sheet Banner */}
        {onNavigateToFunFacts && (
          <div className="mt-4 bg-gradient-to-r from-amber-50 via-amber-50/70 to-yellow-50 rounded-2xl border border-amber-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Lightbulb className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-200 text-amber-900">
                    {lang === 'en' ? 'Community Heritage' : 'Patrimonio Comunitario'}
                  </span>
                  <span className="text-[11px] text-amber-800 font-semibold">
                    {lang === 'en' ? 'Printable & Shareable Fact Sheet' : 'Hoja Imprimible y Compartible'}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                  {lang === 'en'
                    ? 'Inland Empire & California Fun Fact Sheet'
                    : 'Hoja de Datos Curiosos del Inland Empire y California'}
                </h4>
                <p className="text-xs text-slate-600">
                  {lang === 'en'
                    ? 'Explore 20,105 sq mi of history: the 1873 Parent Orange Tree, the original 1948 Route 66 McDonald’s, Redlands Bowl, and fast trivia.'
                    : 'Explore la historia regional: el árbol de naranjas de 1873, el primer McDonald’s de 1948 en la Ruta 66 y datos del IE.'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onNavigateToFunFacts}
              className="w-full sm:w-auto px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
            >
              <span>{lang === 'en' ? 'Open Fun Fact Sheet' : 'Abrir Hoja de Curiosidades'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Discreet Link to Back Legal & Refugee Support */}
        {onNavigateToRefugeeLegal && (
          <div className="mt-6 text-center text-xs text-slate-500">
            <span>
              {lang === 'en'
                ? 'Looking for refugee resettlement, humanitarian parole, or specialized legal aid?'
                : '¿Busca reasentamiento de refugiados, asilo o ayuda legal especializada?'}{' '}
            </span>
            <button
              type="button"
              onClick={onNavigateToRefugeeLegal}
              className="text-blue-700 hover:text-blue-900 font-bold underline cursor-pointer inline-flex items-center gap-0.5 ml-1"
            >
              <span>
                {lang === 'en'
                  ? 'Access Specialized Legal & Refugee Directory'
                  : 'Acceder al Directorio Legal y de Refugiados'}
              </span>
              <ArrowRight className="w-3 h-3 inline" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
