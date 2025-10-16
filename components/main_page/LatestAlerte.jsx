"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { AlertTriangle, MapPin, Calendar } from 'lucide-react';

const LatestAlerte = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animation d'entrée uniquement
    gsap.from(containerRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-2xl shadow-lg overflow-hidden mb-8 border border-amber-200/50 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

      {/* Contenu */}
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Icône statique */}
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-4 shadow-lg">
              <AlertTriangle className="h-8 w-8 text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Contenu principal */}
          <div className="flex-1 space-y-3">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Événement à venir
            </div>

            {/* Titre */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              Rendez-vous ce Samedi à Moisselles
            </h3>

            {/* Détails */}
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-gray-700">
                <Calendar className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">
                  Samedi à partir de 14h - Pour les citoyens du 95
                </span>
              </div>

              <div className="flex items-start gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  Centre Culturel Leclerc, 1 route Nationale à Moisselles (95) - Nombreux parkings disponibles
                </span>
              </div>
            </div>

            {/* Message personnel */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-amber-200/50">
              <p className="text-sm md:text-base text-gray-800 italic leading-relaxed">
                "À samedi et je compte vraiment sur vous !"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bordure brillante */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
    </div>
  );
};

export default LatestAlerte;
