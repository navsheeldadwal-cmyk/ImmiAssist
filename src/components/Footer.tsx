import React from 'react';
import { Compass, Award, PhoneCall, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  openAboutModal: () => void;
  lang: 'en' | 'es';
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, openAboutModal, lang }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800 mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Identity & Mission */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                ImmiAssist
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              {lang === 'en'
                ? 'Dedicated to empowering immigrant individuals and families across Riverside and San Bernardino counties with free, protected, and dignified community resources.'
                : 'Dedicado a empoderar a personas y familias inmigrantes en los condados de Riverside y San Bernardino con recursos comunitarios gratuitos y dignos.'}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Community Safe & Confidential
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Shortcuts */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              {lang === 'en' ? 'Quick Navigation' : 'Navegación Rápida'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => setCurrentTab('directory')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Schools & Health' : 'Escuelas y Salud'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('ai-assistant')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Ask AI Navigator (Gemini)' : 'Asistente IA (Gemini)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('roadmap')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'First 30 Days Guide' : 'Guía de Primeros 30 Días'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('rights')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Know Your Rights Pocket Card' : 'Tarjeta Conozca Sus Derechos'}
                </button>
              </li>
              <li>
                <button
                  onClick={openAboutModal}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'About Project' : 'Sobre el Proyecto'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Emergency Inland Empire Helplines */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              {lang === 'en' ? 'Emergency Regional Helplines' : 'Líneas Regionales de Emergencia'}
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <span className="block text-[11px] text-slate-500">
                  {lang === 'en' ? 'Inland Empire Rapid Response (24/7):' : 'Respuesta Rápida del IE (24/7):'}
                </span>
                <a
                  href="tel:9093614588"
                  className="text-red-400 font-bold hover:underline flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  (909) 361-4588
                </a>
              </li>
              <li>
                <span className="block text-[11px] text-slate-500">
                  {lang === 'en' ? 'Inland Counties Legal Services:' : 'Servicios Legales del Interior:'}
                </span>
                <a href="tel:8882454257" className="text-amber-400 font-semibold hover:underline">
                  (888) 245-4257
                </a>
              </li>
              <li>
                <span className="block text-[11px] text-slate-500">
                  {lang === 'en' ? 'Community Health & Crisis Aid:' : 'Salud y Crisis Comunitaria:'}
                </span>
                <span className="text-white font-bold">Dial 2-1-1</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Privacy Statement */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              {lang === 'en' ? 'Safety & Privacy Guarantee' : 'Garantía de Privacidad'}
            </h4>
            <div className="flex items-start gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? 'No personal identification, immigration documents, or search queries are stored or tracked. This platform is 100% privacy-first.'
                  : 'No se almacena ni rastrea información de estatus migratorio ni búsquedas. Esta plataforma protege totalmente su privacidad.'}
              </p>
            </div>
            <p className="text-[10px] text-slate-500 leading-normal">
              California Senate Bill 54 (California Values Act) prevents state and local resources, law enforcement, and schools from being used for federal immigration enforcement.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-3">
          <p>
            © {new Date().getFullYear()} ImmiAssist. {lang === 'en' ? 'Built with' : 'Creado con'}{' '}
            <Heart className="w-3 h-3 inline text-red-500 fill-red-500 mx-0.5" />{' '}
            {lang === 'en' ? 'for the Inland Empire community.' : 'para la comunidad del Inland Empire.'}
          </p>

          <p className="text-center sm:text-right">
            {lang === 'en'
              ? 'San Bernardino & Riverside Counties, Southern California'
              : 'Condados de San Bernardino y Riverside, Sur de California'}
          </p>
        </div>
      </div>
    </footer>
  );
};
