import React from 'react';
import {
  Scale,
  ShieldCheck,
  PhoneCall,
  ExternalLink,
  MapPin,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  FileText,
  AlertCircle
} from 'lucide-react';
import { INLAND_EMPIRE_RESOURCES } from '../data/resources';

interface RefugeeAndLegalViewProps {
  onAskAi: (prompt: string) => void;
  lang: 'en' | 'es';
}

export const RefugeeAndLegalView: React.FC<RefugeeAndLegalViewProps> = ({ onAskAi, lang }) => {
  const specializedLegalResources = INLAND_EMPIRE_RESOURCES.filter(
    (res) => res.category === 'legal'
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-700">
          <Scale className="w-3.5 h-3.5 text-amber-400" />
          {lang === 'en' ? 'Specialized Legal & Humanitarian Services' : 'Servicios Legales Especializados y Humanitarios'}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {lang === 'en'
            ? 'Refugee Resettlement, Asylum & Legal Aid'
            : 'Reasentamiento de Refugiados, Asilo y Ayuda Legal'}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          {lang === 'en'
            ? 'Dedicated resources for refugee families, asylum seekers, humanitarian parolees, and individuals seeking accredited non-profit legal counsel and emergency protection in the Inland Empire.'
            : 'Recursos para familias refugiadas, solicitantes de asilo, personas con permiso humanitario y quienes buscan asesoría legal sin fines de lucro en el Inland Empire.'}
        </p>
      </div>

      {/* Regional Emergency Helplines Section (Placed in the Back per user request) */}
      <section className="bg-amber-50 border border-amber-200 rounded-3xl p-6 mb-8">
        <h3 className="text-base font-bold text-amber-950 mb-1 flex items-center gap-2">
          <PhoneCall className="w-4 h-4 text-amber-700" />
          {lang === 'en' ? 'Regional Emergency & Legal Helplines' : 'Líneas de Emergencia y Ayuda Legal'}
        </h3>
        <p className="text-xs text-amber-900/80 mb-4">
          {lang === 'en'
            ? 'Confidential phone lines available 24/7 for community protection, legal referrals, and crisis support in Riverside and San Bernardino counties.'
            : 'Líneas telefónicas confidenciales disponibles 24/7 para protección comunitaria, referencias legales y crisis en Riverside y San Bernardino.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-white p-4 rounded-2xl border border-amber-200/80 shadow-2xs">
            <span className="text-[11px] font-bold text-red-700 uppercase block mb-1">
              {lang === 'en' ? '24/7 Rapid Response Network' : 'Red de Respuesta Rápida 24/7'}
            </span>
            <a
              href="tel:9093614588"
              className="text-base font-extrabold text-slate-900 hover:text-red-700 flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4 text-red-600" />
              (909) 361-4588
            </a>
            <p className="text-slate-500 mt-1 text-[11px]">
              {lang === 'en'
                ? 'Emergency dispatch for legal defense and detention verification.'
                : 'Respuesta urgente para verificación de detenciones y defensa legal.'}
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-amber-200/80 shadow-2xs">
            <span className="text-[11px] font-bold text-blue-700 uppercase block mb-1">
              {lang === 'en' ? 'Inland Counties Legal Aid' : 'Servicios Legales del Interior'}
            </span>
            <a
              href="tel:8882454257"
              className="text-base font-extrabold text-slate-900 hover:text-blue-700 flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              (888) 245-4257
            </a>
            <p className="text-slate-500 mt-1 text-[11px]">
              {lang === 'en'
                ? 'Free civil legal consultations and tenant eviction defense.'
                : 'Consultas legales civiles gratuitas y defensa contra desalojos.'}
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-amber-200/80 shadow-2xs">
            <span className="text-[11px] font-bold text-emerald-700 uppercase block mb-1">
              {lang === 'en' ? 'Community 2-1-1 Referral' : 'Línea Comunitaria 2-1-1'}
            </span>
            <a
              href="tel:211"
              className="text-base font-extrabold text-slate-900 hover:text-emerald-700 flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              Dial 2-1-1
            </a>
            <p className="text-slate-500 mt-1 text-[11px]">
              {lang === 'en'
                ? '24/7 food, emergency housing, and utility bill assistance.'
                : 'Ayuda 24/7 de alimentos, vivienda temporal y pago de servicios.'}
            </p>
          </div>
        </div>
      </section>

      {/* Directory of Specialized Agencies */}
      <section className="space-y-5">
        <h3 className="text-lg font-bold text-slate-900">
          {lang === 'en'
            ? 'Accredited Non-Profit Legal & Resettlement Agencies'
            : 'Agencias Acreditadas de Asilo y Apoyo Legal'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {specializedLegalResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-800">
                    {res.facilityType || 'Legal Aid'}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {res.costType}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  {res.name}
                </h4>

                <p className="text-xs text-slate-500 font-medium mb-3 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>
                    {res.city} • <strong className="text-slate-700">{res.county}</strong>
                  </span>
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {res.description}
                </p>

                <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                  {res.keyBenefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`tel:${res.phone.replace(/[^\d]/g, '')}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-blue-700"
                >
                  <PhoneCall className="w-3 h-3 text-slate-400" />
                  <span>{res.phone}</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={res.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 px-2.5 py-1 rounded-lg"
                  >
                    <span>{lang === 'en' ? 'Website' : 'Sitio'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    type="button"
                    onClick={() =>
                      onAskAi(
                        `What services and document requirements does ${res.name} offer for families in the Inland Empire?`
                      )
                    }
                    className="inline-flex items-center gap-1 text-xs font-bold bg-blue-50 hover:bg-blue-100 text-blue-900 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>{lang === 'en' ? 'Ask AI' : 'IA'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* California Legal Protections Notice */}
      <section className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-600 leading-relaxed">
        <h4 className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          {lang === 'en' ? 'California State Legal Protections' : 'Protecciones Legales del Estado de California'}
        </h4>
        <p>
          {lang === 'en'
            ? 'Under California Senate Bill 54 (California Values Act), state and local police, public schools, and county hospitals in California do not act as federal immigration agents. Public hospital emergency rooms and public schools are open to everyone.'
            : 'Bajo la Ley SB 54 (Ley de Valores de California), la policía local, las escuelas públicas y los hospitales del condado no actúan como agentes migratorios federales. Las salas de emergencia y las escuelas públicas están abiertas para todos.'}
        </p>
      </section>
    </div>
  );
};
