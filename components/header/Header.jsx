"use client";

import {
  Calendar,
  Clock,
  DollarSign,
  Menu,
  Search,
  TrendingUp,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <button
                className="mr-4 lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex flex-col">
                <Link href="/" className="cursor-pointer">
                  <h1 className="text-md md:text-2xl font-bold text-blue-900">
                    LA REVUE DE PRESSE
                  </h1>
                  <div className="text-xs text-gray-500">
                    de Pierre Jovanovic - depuis 2008
                  </div>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="font-medium hover:text-blue-700">
                Accueil
              </Link>
              <Link
                href="/rendez-vous"
                className="font-medium hover:text-blue-700"
              >
                Rendez-vous
              </Link>
              <Link href="/livres" className="font-medium hover:text-blue-700">
                Livres
              </Link>
              <Link
                href="/bang-bank"
                className="font-medium hover:text-blue-700"
              >
                Gang Bank
              </Link>
              <Link href="/contact" className="font-medium hover:text-blue-700">
                Contact
              </Link>
            </div>

            <div className="flex items-center">
              <div className="relative mr-2">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-32 md:w-48 pl-8 pr-2 py-1 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Search
                  size={16}
                  className="absolute left-2.5 top-1.5 text-gray-400"
                />
              </div>
              <div className="hidden md:block ml-4 bg-blue-100 px-3 py-1 rounded-full text-blue-800 text-xs font-medium">
                <DollarSign size={14} className="inline -mt-1 mr-1" />
                Or: 3,470$
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-3 py-2">
                <Link href="/" className="font-medium hover:text-blue-700">
                  Accueil
                </Link>
                <Link
                  href="/rendez-vous"
                  className="font-medium hover:text-blue-700"
                >
                  Rendez-vous
                </Link>
                <Link
                  href="/livres"
                  className="font-medium hover:text-blue-700"
                >
                  Livres
                </Link>
                <Link
                  href="/bang-bank"
                  className="font-medium hover:text-blue-700"
                >
                  Gang Bank
                </Link>
                <Link
                  href="/contact"
                  className="font-medium hover:text-blue-700"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Header with Date and Gold Price Ticker */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            {/* Date et heure */}
            <div className="flex items-center space-x-2">
              <Calendar size={16} className="flex-shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">
                Mercredi 28 mai 2025
              </span>
              <Clock size={16} className="ml-4 flex-shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">
                09:45:51
              </span>
            </div>

            {/* Prix et indicateurs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide">
              <div className="flex items-center bg-blue-800 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                <TrendingUp size={14} className="mr-1 flex-shrink-0" />
                <span>Or: 3,470$</span>
              </div>
              <div className="flex items-center bg-blue-800 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                <TrendingUp size={14} className="mr-1 flex-shrink-0" />
                <span>Lingot €: 79,500€</span>
              </div>
              <div className="flex items-center bg-blue-800 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                <TrendingUp size={14} className="mr-1 flex-shrink-0" />
                <span>Argent: 34€</span>
              </div>
              <div className="flex items-center bg-blue-800 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                <TrendingUp size={14} className="mr-1 flex-shrink-0" />
                <span>50Fr Hercules: 1,250€</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles pour masquer la scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </>
  );
};

export default Header;
