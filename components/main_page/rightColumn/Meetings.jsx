"use client";

import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const Meetings = () => {
  const meetings = [
    { date: "31 mai 2025", location: "Moisselles (95)" },
    { date: "7 juin 2025", location: "Paris" },
    { date: "14 juin 2025", location: "Béziers" },
    { date: "21 juin 2025", location: "La Rochelle - Lagord" },
    { date: "28 juin 2025", location: "Paris" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* En-tête moderne */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-bold text-lg text-white">Prochaines rencontres</h3>
        </div>
      </div>

      {/* Liste des rencontres */}
      <div className="p-5">
        <ul className="space-y-3">
          {meetings.map((meeting, index) => (
            <li
              key={index}
              className="group flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-200"
            >
              <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                <MapPin className="h-4 w-4 text-blue-700" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900">{meeting.date}</p>
                <p className="text-sm text-gray-600 truncate">{meeting.location}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Bouton voir plus */}
        <Link
          href="/rendez-vous"
          className="group mt-4 flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300"
        >
          <span>Voir toutes les dates</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Meetings;
