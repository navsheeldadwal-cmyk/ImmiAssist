import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Square,
  Calendar,
  CheckCircle2,
  FileText,
  ChevronDown,
  ChevronUp,
  Printer,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Clock,
  Compass,
  ArrowRight
} from 'lucide-react';
import { INLAND_EMPIRE_ROADMAP } from '../data/roadmap';
import { RoadmapStep, RoadmapPeriod } from '../types';

interface RoadmapViewProps {
  onAskAi: (promptText: string) => void;
  lang: 'en' | 'es';
}

type PeriodFilter = 'All' | 'First 30 Days' | 'Days 31-60' | 'Days 61-90';

export const RoadmapView: React.FC<RoadmapViewProps> = ({ onAskAi, lang }) => {
  const [completedSteps, setCompletedSteps] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ie_roadmap_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activePeriod, setActivePeriod] = useState<PeriodFilter>('First 30 Days');
  const [expandedStepId, setExpandedStepId] = useState<string | null>(INLAND_EMPIRE_ROADMAP[0]?.id || null);

  useEffect(() => {
    try {
      localStorage.setItem('ie_roadmap_completed', JSON.stringify(completedSteps));
    } catch (e) {
      console.error('Failed to save roadmap state', e);
    }
  }, [completedSteps]);

  const toggleStepCompleted = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedSteps((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleResetChecklist = () => {
    if (window.confirm(lang === 'en' ? 'Reset your progress checklist?' : '¿Reiniciar la lista de progreso?')) {
      setCompletedSteps([]);
    }
  };

  const filteredSteps = INLAND_EMPIRE_ROADMAP.filter((step) => {
    if (activePeriod !== 'All' && step.period !== activePeriod) {
      return false;
    }
    return true;
  });

  const totalSteps = INLAND_EMPIRE_ROADMAP.length;
  const overallCompletedCount = completedSteps.length;
  const overallPercentage = Math.round((overallCompletedCount / totalSteps) * 100);

  const getPeriodCount = (period: RoadmapPeriod) => {
    return INLAND_EMPIRE_ROADMAP.filter((s) => s.period === period).length;
  };

  const getPeriodCompletedCount = (period: RoadmapPeriod) => {
    return INLAND_EMPIRE_ROADMAP.filter(
      (s) => s.period === period && completedSteps.includes(s.id)
    ).length;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Overview Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-blue-700" />
              {lang === 'en'
                ? '90-Day Newcomer Settlement Journey'
                : 'Plan de Asentamiento de 90 Días'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'en'
                ? 'First 30, 60 & 90 Days in the Inland Empire'
                : 'Primeros 30, 60 y 90 Días en el Inland Empire'}
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
              {lang === 'en'
                ? 'A comprehensive milestone checklist for newly arrived legal immigrant families and permanent residents. From school enrollment and health plans to banking, adult English classes, career advancement, and long-term integration.'
                : 'Una lista estructurada de metas para familias recién llegadas y residentes. Desde inscripción escolar y salud, hasta cuentas bancarias, clases de inglés y desarrollo profesional.'}
            </p>
          </div>

          {/* Progress Indicator Card */}
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl min-w-[240px] text-center shrink-0">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              {lang === 'en' ? 'Overall 90-Day Progress' : 'Progreso Total de 90 Días'}
            </div>
            <div className="text-3xl font-black text-slate-900">
              {overallCompletedCount} / {totalSteps}
            </div>
            <div className="text-xs text-blue-700 font-semibold mb-3">
              {overallPercentage}% {lang === 'en' ? 'Completed' : 'Completado'}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${overallPercentage}%` }}
              />
            </div>

            {completedSteps.length > 0 && (
              <button
                type="button"
                onClick={handleResetChecklist}
                className="mt-3 text-[11px] text-slate-400 hover:text-slate-700 hover:underline cursor-pointer"
              >
                {lang === 'en' ? 'Reset checklist' : 'Reiniciar lista'}
              </button>
            )}
          </div>
        </div>

        {/* 30, 60, 90 Days Primary Navigation Tabs */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
            {/* Tab 1: First 30 Days */}
            <button
              type="button"
              onClick={() => setActivePeriod('First 30 Days')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activePeriod === 'First 30 Days'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{lang === 'en' ? 'First 30 Days' : 'Primeros 30 Días'}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  activePeriod === 'First 30 Days'
                    ? 'bg-blue-800 text-blue-100'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                {getPeriodCompletedCount('First 30 Days')}/{getPeriodCount('First 30 Days')}
              </span>
            </button>

            {/* Tab 2: Days 31–60 */}
            <button
              type="button"
              onClick={() => setActivePeriod('Days 31-60')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activePeriod === 'Days 31-60'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{lang === 'en' ? 'Days 31–60 (Month 2)' : 'Días 31–60 (Mes 2)'}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  activePeriod === 'Days 31-60'
                    ? 'bg-blue-800 text-blue-100'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                {getPeriodCompletedCount('Days 31-60')}/{getPeriodCount('Days 31-60')}
              </span>
            </button>

            {/* Tab 3: Days 61–90 */}
            <button
              type="button"
              onClick={() => setActivePeriod('Days 61-90')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activePeriod === 'Days 61-90'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{lang === 'en' ? 'Days 61–90 (Month 3)' : 'Días 61–90 (Mes 3)'}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  activePeriod === 'Days 61-90'
                    ? 'bg-blue-800 text-blue-100'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                {getPeriodCompletedCount('Days 61-90')}/{getPeriodCount('Days 61-90')}
              </span>
            </button>

            {/* Tab 4: All 90 Days */}
            <button
              type="button"
              onClick={() => setActivePeriod('All')}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activePeriod === 'All'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lang === 'en' ? 'All 90 Days' : 'Todos'}
            </button>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-2 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>{lang === 'en' ? 'Print Checklist' : 'Imprimir Lista'}</span>
          </button>
        </div>

        {/* Stage Description Subheader */}
        <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-slate-600 flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
          <div>
            {activePeriod === 'First 30 Days' && (
              <span>
                <strong>{lang === 'en' ? 'Stage 1 Focus:' : 'Foco de Etapa 1:'}</strong>{' '}
                {lang === 'en'
                  ? 'Immediate essentials – K-12 public school enrollment, healthcare coverage (Covered CA / Medi-Cal), driver’s license at DMV, and housing stability.'
                  : 'Lo fundamental e inmediato: inscripción escolar K-12, seguro de salud, licencia de conducir del DMV y estabilidad en vivienda.'}
              </span>
            )}
            {activePeriod === 'Days 31-60' && (
              <span>
                <strong>{lang === 'en' ? 'Stage 2 Focus:' : 'Foco de Etapa 2:'}</strong>{' '}
                {lang === 'en'
                  ? 'Financial stability & family integration – opening bank accounts, building U.S. credit, free adult ESL classes, establishing a family doctor/dentist, and preschool registration.'
                  : 'Estabilidad financiera e integración: cuentas bancarias, historial crediticio, clases de inglés para adultos, médico familiar y preescolar.'}
              </span>
            )}
            {activePeriod === 'Days 61-90' && (
              <span>
                <strong>{lang === 'en' ? 'Stage 3 Focus:' : 'Foco de Etapa 3:'}</strong>{' '}
                {lang === 'en'
                  ? 'Career advancement & community roots – America’s Job Centers (AJCC), foreign degree evaluations, community college degrees, school PTA participation, and citizenship planning.'
                  : 'Crecimiento profesional y comunitario: centros de empleo AJCC, revalidación de títulos, colegios comunitarios, comités escolares y plan de ciudadanía.'}
              </span>
            )}
            {activePeriod === 'All' && (
              <span>
                <strong>{lang === 'en' ? 'Complete 90-Day Roadmap:' : 'Hoja de Ruta Completa de 90 Días:'}</strong>{' '}
                {lang === 'en'
                  ? 'Viewing all 15 settlement steps across your first 3 months in the Inland Empire.'
                  : 'Viendo los 15 pasos de integración a lo largo de sus primeros 3 meses en el Inland Empire.'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Accordion Step Cards */}
      <div className="space-y-4">
        {filteredSteps.map((step) => {
          const isCompleted = completedSteps.includes(step.id);
          const isExpanded = expandedStepId === step.id;

          return (
            <div
              key={step.id}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isCompleted
                  ? 'border-emerald-300 bg-emerald-50/20'
                  : isExpanded
                  ? 'border-blue-400 shadow-md ring-1 ring-blue-400/20'
                  : 'border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              {/* Step Header */}
              <div
                onClick={() => setExpandedStepId(isExpanded ? null : step.id)}
                className="p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <button
                    type="button"
                    onClick={(e) => toggleStepCompleted(step.id, e)}
                    className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer shrink-0"
                    title={
                      isCompleted
                        ? lang === 'en'
                          ? 'Mark as incomplete'
                          : 'Marcar incompleto'
                        : lang === 'en'
                        ? 'Mark as complete'
                        : 'Marcar completo'
                    }
                  >
                    {isCompleted ? (
                      <CheckSquare className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Square className="w-6 h-6" />
                    )}
                  </button>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 text-blue-900">
                        {step.period}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 capitalize">
                        {step.urgency} • {step.category}
                      </span>
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold leading-snug ${
                        isCompleted ? 'line-through text-slate-500' : 'text-slate-900'
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-normal">
                      {step.summary}
                    </p>
                  </div>
                </div>

                <div className="text-slate-400 hover:text-slate-700 shrink-0 mt-1">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {/* Expanded Detailed Guidance */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-100 bg-slate-50/60 space-y-5 animate-in fade-in duration-150">
                  {/* Legal Protection Callout */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-blue-950">
                    <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block text-blue-950 mb-0.5">
                        {lang === 'en' ? 'Legal Protection & Guidance:' : 'Protección Legal y Derechos:'}
                      </strong>
                      <span>{step.keyRights}</span>
                    </div>
                  </div>

                  {/* Step Action Plan */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      {lang === 'en' ? 'Step-by-Step Action Plan:' : 'Plan de Acción Paso a Paso:'}
                    </h4>
                    <ol className="space-y-2 list-decimal list-inside text-xs sm:text-sm text-slate-700">
                      {step.actionSteps.map((action, aIdx) => (
                        <li key={aIdx} className="leading-relaxed">
                          <span className="font-medium">{action}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Required Documents Checklist */}
                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4">
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-amber-700" />
                      {lang === 'en' ? 'Documents to Prepare:' : 'Documentos Recomendados:'}
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {step.requiredDocs.map((doc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links & AI Guidance Shortcut */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex flex-wrap items-center gap-3">
                      {step.helpfulLinks.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline"
                        >
                          <span>{link.title}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onAskAi(`How do I complete step: "${step.title}" in the Inland Empire?`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Ask AI about this step' : 'Consultar con la IA'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
