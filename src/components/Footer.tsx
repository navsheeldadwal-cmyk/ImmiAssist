import React from 'react';
import { Compass, PhoneCall, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  openAboutModal: () => void;
  lang: 'en' | 'es';
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, openAboutModal, lang }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Identity & Mission */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                ImmiAssist
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              {lang === 'en'
                ? 'Dedicated to empowering new legal immigrant families, permanent residents, and arriving newcomers across Riverside and San Bernardino counties with verified school and healthcare information.'
                : 'Dedicado a orientar a familias inmigrantes, residentes y recién llegados en Riverside y San Bernardino con información verificada de escuelas y salud.'}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-[11px] font-semibold border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified Community Directory
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
                  type="button"
                  onClick={() => setCurrentTab('directory')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Schools & Hospitals (Home)' : 'Escuelas y Hospitales (Inicio)'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setCurrentTab('family-parks')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Parks & Family Life' : 'Parques y Familia'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setCurrentTab('fun-facts')}
                  className="hover:text-white transition-colors cursor-pointer text-amber-300 font-semibold"
                >
                  {lang === 'en' ? 'IE Fun Fact Sheet 📄' : 'Hoja de Curiosidades 📄'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setCurrentTab('ai-assistant')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Ask AI Navigator' : 'Asistente IA (Voz y Texto)'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setCurrentTab('roadmap')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'en' ? '30-60-90 Days Settlement Plan' : 'Plan de 30-60-90 Días'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setCurrentTab('refugee-legal')}
                  className="hover:text-white transition-colors cursor-pointer text-amber-300"
                >
                  {lang === 'en' ? 'Specialized Legal & Refugee Aid' : 'Ayuda Legal y Refugiados'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openAboutModal}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'About ImmiAssist' : 'Acerca del Proyecto'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Emergency & Specialized Regional Helplines (Placed in the Back) */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              {lang === 'en' ? 'Regional Support Helplines' : 'Líneas de Ayuda Regional'}
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <span className="block text-[11px] text-slate-500">
                  {lang === 'en' ? 'Inland Counties Legal Services:' : 'Servicios Legales del Interior:'}
                </span>
                <a href="tel:8882454257" className="text-white font-semibold hover:underline">
                  (888) 245-4257
                </a>
              </li>
              <li>
                <span className="block text-[11px] text-slate-500">
                  {lang === 'en' ? 'Community Health & Crisis Aid:' : 'Salud y Crisis Comunitaria:'}
                </span>
                <a href="tel:211" className="text-white font-bold hover:underline">
                  Dial 2-1-1
                </a>
              </li>
              <li>
                <span className="block text-[11px] text-slate-500">
                  {lang === 'en' ? 'Rapid Response Emergency Dispatch:' : 'Respuesta Rápida 24/7:'}
                </span>
                <a
                  href="tel:9093614588"
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  (909) 361-4588
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Privacy Statement */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              {lang === 'en' ? 'Privacy Guarantee' : 'Garantía de Privacidad'}
            </h4>
            <div className="flex items-start gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? 'No personal identification, legal paperwork, or search queries are collected or tracked. Your checklist data stays safely in your local browser.'
                  : 'No se almacena información personal ni búsquedas. Sus datos se guardan de forma privada en su navegador.'}
              </p>
            </div>
            <p className="text-[10px] text-slate-500 leading-normal">
              Serving the communities of San Bernardino, Riverside, Ontario, Fontana, Corona, Moreno Valley, and the Coachella Valley.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-3">
          <p>
            © {new Date().getFullYear()} ImmiAssist. {lang === 'en' ? 'Built with care' : 'Creado con dedicación'}{' '}
            <Heart className="w-3 h-3 inline text-red-500 fill-red-500 mx-0.5" />{' '}
            {lang === 'en' ? 'for Inland Empire newcomer families.' : 'para las familias del Inland Empire.'}
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
