"use client";

import { ExternalLink, Play } from "lucide-react";
import Link from "next/link";

const LatestVideos = () => {
  const videos = [
    "La chronique de Youssef Hindi: Privatisation de la Police pour combattre les opposants à Israel",
    "La dernière Revue de Presse avec Olivier Pichon sur TVL",
    "SPECIAL OR pour 2025 - 2 heures d'entretien avec Idriss Aberkane",
    "La Revue de Presse HIVER 2025 avec Dieu(donné)"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* En-tête moderne */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <Play className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-bold text-lg text-white">Dernières vidéos</h3>
        </div>
      </div>

      <div className="p-5">
        <ul className="space-y-3">
          {videos.map((video, index) => (
            <li key={index}>
              <Link
                href="#"
                className="group flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-200"
              >
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <ExternalLink className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700 group-hover:text-blue-700 transition-colors leading-relaxed">
                  {video}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestVideos;
