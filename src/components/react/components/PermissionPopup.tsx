// src/components/react/ItecceLoading/components/PermissionPopup.tsx
import React, { useState, useEffect } from 'react';

interface PermissionPopupProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const PermissionPopup: React.FC<PermissionPopupProps> = ({ onAccept, onDecline }) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Return null on first render for hydration
  if (!hydrated) return null;

  return (
    <div className="fixed top-4 right-4 z-[10000] bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm animate-slide-in">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-[#0093d9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 18.364a7 7 0 010-12.728M8.464 15.536a5 5 0 010-7.072" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900">
            Sonido Disponible
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Esta página incluye una experiencia con audio. ¿Deseas reproducirlo?
          </p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={onAccept}
              className="px-3 py-1.5 text-sm font-medium text-white bg-[#0093d9] rounded-md hover:bg-[#007bb8] transition-colors"
            >
              Reproducir
            </button>
            <button
              onClick={onDecline}
              className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Continuar sin Audio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
