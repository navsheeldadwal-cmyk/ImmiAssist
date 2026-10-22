import React from 'react';
import { Compass, ShieldAlert, Bookmark, PhoneCall, ExternalLink, ShieldCheck } from 'lucide-react';

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
    { id: 'directory', labelEn: 'Schools & Health', labelEs: 'Escuelas y Salud' },
    { id: 'family-parks', labelEn: 'Parks & Family', labelEs: 'Parques y Familia' },
    { id: 'ai-assistant', labelEn: 'Ask Navigator', labelEs: 'Preguntar a la IA' },
    { id: 'roadmap', labelEn: 'Checklist', labelEs: 'Guía Inicial' },
    { id: 'rights', labelEn: 'Your Rights', labelEs: 'Sus Derechos' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Essential Hotline Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs px-4 sm:px-6 py-1.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-[11px] sm:text-xs">
              {lang === 'en' ? 'Inland Empire, Southern California' : 'Inland Empire, Sur de California'}
            </span>
          </div>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline text-[11px] text-slate-400">
            {lang === 'en' ? 'Confidential & Safe for all immigrants' : 'Confidencial y seguro para toda la comunidad'}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <a
            href="tel:9093614588"
            className="hidden sm:inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 font-semibold"
          >
            <PhoneCall className="w-3 h-3" />
            <span>24/7 Helpline: (909) 361-4588</span>
          </a>
          <button
            onClick={openAboutModal}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer text-[11px]"
          >
            {lang === 'en' ? 'About' : 'Acerca de'}
          </button>
          <button
            onClick={handleEmergencyExit}
            title={lang === 'en' ? 'Quickly close this site for privacy' : 'Salida rápida por privacidad'}
            className="inline-flex items-center gap-1 text-[11px] text-red-300 hover:text-white bg-red-950/80 hover:bg-red-900 border border-red-800/80 px-2 py-0.5 rounded-md transition-colors cursor-pointer"
          >
            <ShieldAlert className="w-3 h-3 text-red-400" />
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
                <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight">
                  ImmiAssist
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">
                  IE Guide
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                {lang === 'en' ? 'Inland Empire Newcomer Hub' : 'Guía Comunitaria del Inland Empire'}
              </p>
            </div>
          </div>

          {/* Nav Items (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
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
                <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
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
              <span>{lang === 'en' ? 'Ask AI (Voice & Text)' : 'Preguntar a la IA'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Submenu Tabs */}
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
