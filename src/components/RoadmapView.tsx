import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Square,
  Calendar,
  AlertCircle,
  CheckCircle2,
  FileText,
  ChevronDown,
  ChevronUp,
  Printer,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { INLAND_EMPIRE_ROADMAP } from '../data/roadmap';
import { RoadmapStep } from '../types';

interface RoadmapViewProps {
  onAskAi: (promptText: string) => void;
  lang: 'en' | 'es';
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ onAskAi, lang }) => {
  const [completedSteps, setCompletedSteps] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ie_roadmap_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [expandedStepId, setExpandedStepId] = useState<string | null>(INLAND_EMPIRE_ROADMAP[0]?.id || null);
  const [urgencyFilter, setUrgencyFilter] = useState<'All' | 'Week 1' | 'Week 2' | 'Month 1'>('All');

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
    if (urgencyFilter !== 'All' && step.urgency !== urgencyFilter) {
      return false;
    }
    return true;
  });

  const completionPercentage = Math.round(
    (completedSteps.length / INLAND_EMPIRE_ROADMAP.length) * 100
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Overview Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5 text-amber-700" />
              {lang === 'en' ? 'First 30 Days in the Inland Empire' : 'Primeros 30 Días en el Inland Empire'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'en' ? 'Immigrant Family Settlement Roadmap' : 'Hoja de Ruta de Asentamiento Familiar'}
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
              {lang === 'en'
                ? 'A structured, priority-ranked checklist helping you establish school enrollment, healthcare coverage, driver’s licenses, tenant protections, and ITIN work authorization.'
                : 'Una lista paso a paso para organizar la inscripción escolar, Medi-Cal, licencia de conducir, derechos de vivienda y trabajo con ITIN.'}
            </p>
          </div>

          {/* Progress Indicator Card */}
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl min-w-[240px] text-center shrink-0">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              {lang === 'en' ? 'Your Progress' : 'Su Progreso'}
            </div>
            <div className="text-3xl font-black text-slate-900">
              {completedSteps.length} / {INLAND_EMPIRE_ROADMAP.length}
            </div>
            <div className="text-xs text-amber-700 font-semibold mb-3">
              {completionPercentage}% {lang === 'en' ? 'Completed' : 'Completado'}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-600 to-emerald-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>

            {completedSteps.length > 0 && (
              <button
                onClick={handleResetChecklist}
                className="mt-3 text-[11px] text-slate-400 hover:text-slate-700 hover:underline cursor-pointer"
              >
                {lang === 'en' ? 'Reset checklist' : 'Reiniciar lista'}
              </button>
            )}
          </div>
        </div>

        {/* Urgency Filter Tabs & Print Button */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-500 mr-1">
              {lang === 'en' ? 'Timeframe:' : 'Plazo:'}
            </span>
            {(['All', 'Week 1', 'Week 2', 'Month 1'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setUrgencyFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  urgencyFilter === filter
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter === 'All'
                  ? lang === 'en'
                    ? 'All Steps'
                    : 'Todos los Pasos'
                  : filter === 'Week 1'
                  ? lang === 'en'
                    ? 'Week 1 (Immediate)'
                    : 'Semana 1 (Inmediato)'
                  : filter === 'Week 2'
                  ? lang === 'en'
                    ? 'Week 2'
                    : 'Semana 2'
                  : lang === 'en'
                  ? 'Month 1'
                  : 'Mes 1'}
              </button>
            ))}
          </div>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            {lang === 'en' ? 'Print Checklist' : 'Imprimir Lista'}
          </button>
        </div>
      </div>

      {/* Accordion Step Cards */}
      <div className="space-y-4">
        {filteredSteps.map((step, idx) => {
          const isCompleted = completedSteps.includes(step.id);
          const isExpanded = expandedStepId === step.id;

          return (
            <div
              key={step.id}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isCompleted
                  ? 'border-emerald-300 bg-emerald-50/20'
                  : isExpanded
                  ? 'border-amber-400 shadow-md ring-1 ring-amber-400/30'
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
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                        {step.urgency}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 capitalize">
                        {step.category}
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
                  {/* Constitutional & State Right Callout */}
                  <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-sky-900">
                    <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block text-sky-950 mb-0.5">
                        {lang === 'en' ? 'Guaranteed Legal Protection:' : 'Protección Legal Garantizada:'}
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
                      {lang === 'en' ? 'Documents to Prepare:' : 'Documentos a Preparar:'}
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
                          className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900 hover:underline"
                        >
                          <span>{link.title}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>

                    <button
                      onClick={() => onAskAi(`How do I complete step: "${step.title}" in the Inland Empire?`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {lang === 'en' ? 'Ask AI about this step' : 'Preguntar a la IA'}
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
