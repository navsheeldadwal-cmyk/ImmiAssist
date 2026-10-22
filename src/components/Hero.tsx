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
  Compass
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
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onAskAiPrompt,
  openAiAssistant,
  lang,
  onNavigateToParks
}) => {
  const [isVoiceListening, setIsVoiceListening] = useState(false);

  // Quick microphone activation directly inside the search bar
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
          // If query looks like a question, send directly to AI assistant
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
        {/* Title & Tagline - Clean Arrival Advisor Style */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {lang === 'en'
                ? 'Official & Verified Newcomer Guidance'
                : 'Guía Verificada para Recién Llegados'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en'
              ? 'Welcome to the Inland Empire'
              : 'Bienvenido al Inland Empire'}
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {lang === 'en'
              ? 'Find verified public schools, healthcare clinics, and community support in Riverside and San Bernardino counties.'
              : 'Encuentre escuelas públicas, clínicas de salud y apoyo comunitario en los condados de Riverside y San Bernardino.'}
          </p>
        </div>

        {/* Unified Search & Voice Input */}
        <div className="max-w-xl mx-auto mb-8">
          <div
            className={`flex items-center bg-white rounded-2xl border shadow-sm transition-all p-1.5 ${
              isVoiceListening
                ? 'border-red-500 ring-2 ring-red-500/20'
                : 'border-slate-300 focus-within:border-slate-800 focus-within:ring-2 focus-within:ring-slate-900/10'
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
                  ? 'Search schools, clinics, Medi-Cal, ESL...'
                  : 'Buscar escuelas, clínicas, Medi-Cal, inglés...'
              }
              className="w-full px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 cursor-pointer mr-1"
              >
                {lang === 'en' ? 'Clear' : 'Borrar'}
              </button>
            )}

            {/* Unified Voice Microphone Button */}
            <button
              onClick={handleMicSearch}
              title={
                lang === 'en'
                  ? 'Tap microphone to speak in any language'
                  : 'Toque el micrófono para hablar en cualquier idioma'
              }
              className={`p-2 rounded-xl transition-all cursor-pointer shrink-0 ${
                isVoiceListening
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {isVoiceListening ? (
                <MicOff className="w-4 h-4" />
              ) : (
                <Mic className="w-4 h-4 text-amber-700" />
              )}
            </button>
          </div>

          {/* Quick Voice / Text Shortcut Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">
              {lang === 'en' ? 'Popular topics:' : 'Temas frecuentes:'}
            </span>
            <button
              onClick={() =>
                onAskAiPrompt(
                  lang === 'en'
                    ? 'How do I enroll my child in public school without a Social Security number?'
                    : '¿Cómo inscribo a mi hijo en la escuela sin número de Seguro Social?'
                )
              }
              className="bg-white border border-slate-200 hover:border-slate-400 text-slate-700 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'School Enrollment without SSN' : 'Inscripción Escolar sin SSN'}
            </button>
            <button
              onClick={() =>
                onAskAiPrompt(
                  lang === 'en'
                    ? 'How do I apply for Full-Scope Medi-Cal in California and is it safe?'
                    : '¿Cómo solicito Medi-Cal Completo en California y es seguro?'
                )
              }
              className="bg-white border border-slate-200 hover:border-slate-400 text-slate-700 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Medi-Cal for All' : 'Medi-Cal para Todos'}
            </button>
            <button
              onClick={() =>
                onAskAiPrompt(
                  lang === 'en'
                    ? 'Where can I take free adult English (ESL) classes in Riverside or San Bernardino?'
                    : '¿Dónde puedo tomar clases de inglés (ESL) gratis para adultos?'
                )
              }
              className="bg-white border border-slate-200 hover:border-slate-400 text-slate-700 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Free Adult ESL' : 'Inglés Gratis (ESL)'}
            </button>
          </div>
        </div>

        {/* 2 Focused Primary Cards: Schools & Healthcare (Arrival Advisor pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. School & Education Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              {/* Photo Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={SCHOOL_IMAGE}
                  alt="Inland Empire School"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-xs">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {lang === 'en' ? 'Schools & Education' : 'Escuelas y Educación'}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold leading-tight">
                    {lang === 'en' ? 'Free K–12 & Adult School' : 'Escuelas K-12 y Clases para Adultos'}
                  </h3>
                </div>
              </div>

              {/* Scannable Key Points */}
              <div className="p-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'No SSN or legal papers required' : 'Sin SSN ni papeles'}</strong>{' '}
                    {lang === 'en' ? 'to enroll children in school (Plyler v. Doe).' : 'para inscribir a sus hijos en la escuela.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Free School Meals' : 'Comidas Escolares Gratis'}</strong>{' '}
                    {lang === 'en' ? '– Breakfast and lunch for every student.' : '– Desayuno y almuerzo para todos.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Adult English & College Aid' : 'Inglés y Universidad'}</strong>{' '}
                    {lang === 'en' ? '– Free ESL classes and CA Dream Act tuition.' : '– Clases ESL gratuitas y ayuda Dream Act.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex items-center justify-between gap-3">
              <button
                onClick={() => scrollToDirectory('education')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Browse School Centers' : 'Ver Centros Escolares'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  onAskAiPrompt(
                    lang === 'en'
                      ? 'What documents do I need to register my child for school in Riverside or San Bernardino?'
                      : '¿Qué documentos necesito para inscribir a mi hijo en la escuela en Riverside o San Bernardino?'
                  )
                }
                className="py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                title={lang === 'en' ? 'Ask AI question' : 'Preguntar a la IA'}
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
              </button>
            </div>
          </div>

          {/* 2. Healthcare & Clinics Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              {/* Photo Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={HEALTH_IMAGE}
                  alt="Inland Empire Healthcare"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-xs">
                    <HeartPulse className="w-3.5 h-3.5" />
                    {lang === 'en' ? 'Healthcare & Medi-Cal' : 'Salud y Medi-Cal'}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold leading-tight">
                    {lang === 'en' ? 'Community Clinics & Medi-Cal' : 'Clínicas Comunitarias y Medi-Cal'}
                  </h3>
                </div>
              </div>

              {/* Scannable Key Points */}
              <div className="p-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Full-Scope Medi-Cal for All Ages' : 'Medi-Cal para Todas las Edades'}</strong>{' '}
                    {lang === 'en' ? 'regardless of immigration status.' : 'sin importar el estatus migratorio.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? '100% Safe from Public Charge' : 'Seguro de Carga Pública'}</strong>{' '}
                    {lang === 'en' ? '– Medi-Cal will not impact green card petitions.' : '– Medi-Cal no afecta solicitudes migratorias.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Sliding-Scale Community Clinics' : 'Clínicas a Bajo Costo'}</strong>{' '}
                    {lang === 'en' ? '– Doctors and mental health in your language.' : '– Doctores e intérpretes en su idioma.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex items-center justify-between gap-3">
              <button
                onClick={() => scrollToDirectory('health')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Find Health Clinics' : 'Buscar Clínicas de Salud'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  onAskAiPrompt(
                    lang === 'en'
                      ? 'How do I apply for Full-Scope Medi-Cal in Riverside or San Bernardino?'
                      : '¿Cómo solicito Medi-Cal Completo en Riverside o San Bernardino?'
                  )
                }
                className="py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                title={lang === 'en' ? 'Ask AI question' : 'Preguntar a la IA'}
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
                    ? 'Exploring with Young Children?'
                    : '¿Tiene Niños Pequeños?'}
                </h4>
                <p className="text-xs text-slate-500">
                  {lang === 'en'
                    ? 'Find local splash pads, free lake parks, community events, and fun facts about Southern California.'
                    : 'Descubra parques familiares, zonas de agua, eventos gratuitos y datos curiosos del Inland Empire.'}
                </p>
              </div>
            </div>

            <button
              onClick={onNavigateToParks}
              className="w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
            >
              <Trees className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'en' ? 'View Parks & Facts' : 'Ver Parques y Datos'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
