import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResourceDirectory } from './components/ResourceDirectory';
import { AiNavigator } from './components/AiNavigator';
import { RoadmapView } from './components/RoadmapView';
import { KnowYourRights } from './components/KnowYourRights';
import { FamilyAndParksView } from './components/FamilyAndParksView';
import { SavedResourcesModal } from './components/SavedResourcesModal';
import { AboutModal } from './components/AboutModal';
import { Footer } from './components/Footer';
import { ResourceCategory } from './types';
import { Mic } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('directory');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'all'>('all');
  const [aiInitialPrompt, setAiInitialPrompt] = useState<string>('');
  const [isSavedModalOpen, setIsSavedModalOpen] = useState<boolean>(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState<boolean>(false);

  // Language state (en / es)
  const [lang, setLang] = useState<'en' | 'es'>(() => {
    try {
      const saved = localStorage.getItem('immiassist_lang');
      return saved === 'es' ? 'es' : 'en';
    } catch {
      return 'en';
    }
  });

  // Bookmarked resource IDs
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('immiassist_saved');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('immiassist_lang', lang);
    } catch (e) {
      console.error(e);
    }
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem('immiassist_saved', JSON.stringify(savedIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedIds]);

  const toggleSaveResource = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAskAiFromAnywhere = (promptText: string) => {
    setAiInitialPrompt(promptText);
    setCurrentTab('ai-assistant');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAskAboutResource = (resourceName: string) => {
    const question =
      lang === 'en'
        ? `What services does ${resourceName} provide for immigrant families in the Inland Empire, and what documents should I bring?`
        : `¿Qué servicios ofrece ${resourceName} para familias inmigrantes en el Inland Empire y qué documentos debo llevar?`;
    handleAskAiFromAnywhere(question);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-slate-200">
      {/* Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        savedCount={savedIds.length}
        openSavedModal={() => setIsSavedModalOpen(true)}
        openAboutModal={() => setIsAboutModalOpen(true)}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {currentTab === 'directory' && (
          <>
            <Hero
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onAskAiPrompt={handleAskAiFromAnywhere}
              openAiAssistant={() => setCurrentTab('ai-assistant')}
              lang={lang}
              onNavigateToParks={() => setCurrentTab('family-parks')}
            />
            <ResourceDirectory
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              savedIds={savedIds}
              toggleSaveResource={toggleSaveResource}
              onAskAboutResource={handleAskAboutResource}
              lang={lang}
            />
          </>
        )}

        {currentTab === 'ai-assistant' && (
          <AiNavigator initialPrompt={aiInitialPrompt} lang={lang} />
        )}

        {currentTab === 'family-parks' && (
          <FamilyAndParksView onAskAi={handleAskAiFromAnywhere} lang={lang} />
        )}

        {currentTab === 'roadmap' && (
          <RoadmapView onAskAi={handleAskAiFromAnywhere} lang={lang} />
        )}

        {currentTab === 'rights' && <KnowYourRights lang={lang} />}
      </main>

      {/* Floating Unified Voice & Text Button */}
      {currentTab !== 'ai-assistant' && (
        <aside aria-label="Unified AI Assistant" className="fixed bottom-6 right-6 z-30">
          <button
            onClick={() => setCurrentTab('ai-assistant')}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-slate-700"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <Mic className="w-4 h-4 text-amber-400" />
            </div>
            <span>{lang === 'en' ? 'Ask AI (Voice & Text)' : 'Asistente IA (Voz y Texto)'}</span>
          </button>
        </aside>
      )}

      {/* Footer */}
      <Footer
        setCurrentTab={setCurrentTab}
        openAboutModal={() => setIsAboutModalOpen(true)}
        lang={lang}
      />

      {/* Modals */}
      <SavedResourcesModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedIds={savedIds}
        toggleSaveResource={toggleSaveResource}
        lang={lang}
      />

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
