import React from 'react';
import { Compass, Bookmark, ShieldCheck, HeartHandshake, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  savedCount: number;
  openSavedModal: () => void;
  openAboutModal: () => void;
  lang: 'en' | 'es';
  setLang: (lang: 'en' | 'es') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  savedCount,
  openSavedModal,
  openAboutModal,
  lang,
  setLang
}) => {
  const handleEmergencyExit = () => {
    window.location.replace('https://www.google.com/search?q=weather+today');
  };

  const navItems = [
    { id: 'directory', labelEn: 'Home & Directory', labelEs: 'Inicio y Directorio' },
    { id: 'fun-facts', labelEn: 'IE Fun Fact Sheet', labelEs: 'Hoja de Curiosidades' },
    { id: 'family-parks', labelEn: 'Parks & Family', labelEs: 'Parques y Familia' },
    { id: 'ai-assistant', labelEn: 'Ask Navigator (AI)', labelEs: 'Asistente IA' },
    { id: 'roadmap', labelEn: '30-60-90 Days Plan', labelEs: 'Guía 30-60-90 Días' },
    { id: 'refugee-legal', labelEn: 'Specialized Legal & Refugee Aid', labelEs: 'Ayuda Legal y Refugiados' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Clean, Non-Intrusive Sub-bar for Region & Community Tone (No emergency crisis alarm) */}
      <div className="bg-slate-900 text-slate-300 text-xs px-4 sm:px-6 py-1.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-medium text-[11px] sm:text-xs text-slate-200">
            {lang === 'en'
              ? 'Inland Empire, Southern California • Official Community Resource Guide'
              : 'Inland Empire, Sur de California • Guía Oficial de Recursos Comunitarios'}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <button
            onClick={openAboutModal}
            className="text-slate-300 hover:text-white transition-colors cursor-pointer text-[11px]"
          >
            {lang === 'en' ? 'About ImmiAssist' : 'Acerca de ImmiAssist'}
          </button>
          <span className="text-slate-600">|</span>
          <button
            onClick={handleEmergencyExit}
            title={lang === 'en' ? 'Quickly close this site' : 'Salida rápida de privacidad'}
            className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ShieldAlert className="w-3 h-3 text-slate-400" />
            <span>{lang === 'en' ? 'Quick Exit' : 'Salida Rápida'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-4">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => setCurrentTab('directory')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs group-hover:bg-amber-700 transition-colors">
              <Compass className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
                  ImmiAssist
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-900">
                  Newcomer Guide
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                {lang === 'en' ? 'Inland Empire Legal Immigrant & Family Hub' : 'Guía de Familias y Recién Llegados del IE'}
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lang === 'en' ? item.labelEn : item.labelEs}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-100 text-xs font-bold">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'en' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'es' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                ES
              </button>
            </div>

            {/* Saved Bookmarks */}
            <button
              onClick={openSavedModal}
              title={lang === 'en' ? 'View saved resources' : 'Ver recursos guardados'}
              className="relative p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
            >
              <Bookmark className="w-4 h-4 text-slate-600" />
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Unified Voice & Text Assistant Pill */}
            <button
              onClick={() => setCurrentTab('ai-assistant')}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{lang === 'en' ? 'Ask AI Navigator' : 'Preguntar a la IA'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="flex lg:hidden overflow-x-auto py-2 border-t border-slate-100 gap-1 no-scrollbar">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`px-3 py-1 text-xs font-semibold whitespace-nowrap rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lang === 'en' ? item.labelEn : item.labelEs}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
