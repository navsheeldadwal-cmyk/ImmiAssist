import React from 'react';
import { Bookmark, X, MapPin, Phone, Trash2, Printer, ExternalLink } from 'lucide-react';
import { ResourceItem } from '../types';
import { INLAND_EMPIRE_RESOURCES } from '../data/resources';

interface SavedResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  toggleSaveResource: (id: string) => void;
  lang: 'en' | 'es';
}

export const SavedResourcesModal: React.FC<SavedResourcesModalProps> = ({
  isOpen,
  onClose,
  savedIds,
  toggleSaveResource,
  lang
}) => {
  if (!isOpen) return null;

  const savedResources = INLAND_EMPIRE_RESOURCES.filter((r) => savedIds.includes(r.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-amber-700 text-amber-700" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {lang === 'en' ? 'My Saved Resources' : 'Mis Recursos Guardados'}
              </h3>
              <p className="text-xs text-slate-500">
                {savedResources.length}{' '}
                {lang === 'en' ? 'resources saved for easy access' : 'recursos guardados'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {savedResources.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              <Bookmark className="w-10 h-10 mx-auto mb-2 text-slate-300" />
              <p className="font-semibold text-slate-600">
                {lang === 'en' ? 'No saved resources yet.' : 'No tiene recursos guardados aún.'}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'en'
                  ? 'Click the bookmark icon on any directory card to save it here.'
                  : 'Haga clic en el icono de marcador en cualquier tarjeta para guardarlo.'}
              </p>
            </div>
          ) : (
            savedResources.map((res) => (
              <div
                key={res.id}
                className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                    {res.category}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-1">
                    {res.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {res.city}
                    </span>
                    <span>•</span>
                    <a
                      href={`tel:${res.phone.replace(/[^\d]/g, '')}`}
                      className="text-slate-800 font-semibold hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {res.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(res.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-amber-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1"
                  >
                    <span>{lang === 'en' ? 'Directions' : 'Ruta'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => toggleSaveResource(res.id)}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-red-600 hover:bg-red-50 text-xs transition-colors cursor-pointer"
                    title={lang === 'en' ? 'Remove' : 'Eliminar'}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedResources.length > 0 && (
          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              {lang === 'en' ? 'Print Saved List' : 'Imprimir Lista'}
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Close' : 'Cerrar'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
