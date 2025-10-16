"use client";

import jovanovic from "@/public/jovanovic.jpg";
import { Coffee, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AutorInfo = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* En-tête avec gradient */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative flex items-center gap-4">
          <div className="relative w-20 h-20 ring-4 ring-white/20 rounded-full">
            <Image
              src={jovanovic}
              alt="Pierre Jovanovic"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl text-white mb-1">Pierre Jovanovic</h3>
            <p className="text-sm text-blue-100">Journaliste économique</p>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 space-y-4">
        {/* Citation avec icône */}
        <div className="relative bg-gray-50 rounded-xl p-4 border border-gray-100">
          <Quote className="absolute top-2 left-2 h-6 w-6 text-blue-200" />
          <p className="text-sm text-gray-700 leading-relaxed pl-6 italic">
            J'ai commencé cette revue de presse le 20 février 2008 à cause de la
            Société Générale qui a utilisé Jérôme Kerviel pour dissimuler ses
            pertes apocalyptiques dues aux subprimes...
          </p>
        </div>

        {/* Bouton CTA */}
        <Link
          href="/contact"
          className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <Coffee size={18} className="z-10" />
          <span className="z-10">Soutenir cette revue</span>
        </Link>
      </div>
    </div>
  );
};

export default AutorInfo;
