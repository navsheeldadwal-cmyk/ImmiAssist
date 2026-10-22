import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Code2, Users, MapPin, X, CheckCircle2, Heart } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'es';
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
            <Heart className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
            {lang === 'en' ? 'Community Civic Project' : 'Proyecto Cívico Comunitario'}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          ImmiAssist: Inland Empire Immigrant Navigator
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            {lang === 'en'
              ? 'Serving Families Across San Bernardino & Riverside Counties, Southern California'
              : 'Sirviendo a Familias en los Condados de San Bernardino y Riverside, Sur de California'}
          </span>
        </p>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1.5">
              <Users className="w-4 h-4 text-amber-700" />
              <span>{lang === 'en' ? 'Our Mission' : 'Nuestra Misión'}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'ImmiAssist bridges the information gap for over 350,000 immigrant community members in the Inland Empire. We empower families with transparent, accessible, and verified information about schools, healthcare, tenant defense, and work permits.'
                : 'ImmiAssist elimina las barreras de información para más de 350,000 inmigrantes en el Inland Empire. Brindamos información transparente y verificada sobre escuelas, salud, vivienda y permisos de trabajo.'}
            </p>
          </div>

          <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-sky-900 font-bold text-sm mb-1.5">
              <Sparkles className="w-4 h-4 text-sky-700" />
              <span>{lang === 'en' ? 'AI Navigator with Gemini' : 'Navegador IA con Gemini'}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Powered by Google Gemini 3.8 Flash, our AI assistant allows residents to ask questions in any language—from Spanish and Arabic to Tagalog and Vietnamese—receiving empathetic, grounded answers based on California laws.'
                : 'Impulsado por Google Gemini 3.8 Flash, nuestro asistente permite hacer preguntas en cualquier idioma y recibir respuestas empáticas fundamentadas en las leyes de California.'}
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 mb-6 space-y-3">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'Privacy & Safety Architecture' : 'Arquitectura de Privacidad y Seguridad'}</span>
          </div>

          <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>100% Confidential:</strong> We never collect, track, or share personal names, addresses, or immigration records. All checklist progress is saved purely in your device’s local browser memory.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Emergency Quick Exit:</strong> Built-in privacy button instantly redirects your screen away if you need discretion.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Vetted Community Alliances:</strong> Connected with accredited non-profit legal teams, community clinics, and the Inland Empire Rapid Response Network.
              </span>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-100 text-[11px] text-slate-500 leading-relaxed mb-6">
          <strong>Notice:</strong> ImmiAssist provides educational community orientation and connects residents with certified regional organizations. It does not provide formal legal representation. For individualized legal advice, please consult the accredited non-profit organizations listed in our directory.
        </div>

        {/* Footer */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Close & Explore' : 'Cerrar y Explorar'}
          </button>
        </div>
      </div>
    </div>
  );
};
