"use client";

import {
  Calendar,
  Clock,
  Menu,
  Search,
  TrendingUp,
  X,
  Home,
  CalendarDays,
  BookOpen,
  Building2,
  Mail,
  Coins
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil", icon: Home },
    { href: "/rendez-vous", label: "Rendez-vous", icon: CalendarDays },
    { href: "/livres", label: "Livres", icon: BookOpen },
    { href: "/bang-bank", label: "Gang Bank", icon: Building2 },
    { href: "/contact", label: "Contact", icon: Mail }
  ];

  const goldPrices = [
    { label: "Or", value: "3,470$", icon: Coins },
    { label: "Lingot €", value: "79,500€", icon: TrendingUp },
    { label: "Argent", value: "34€", icon: TrendingUp },
    { label: "50Fr Hercules", value: "1,250€", icon: TrendingUp }
  ];

  return (
    <>
      {/* Header Principal */}
      <header className="bg-gradient-to-r from-white via-blue-50/30 to-white border-b border-gray-200 sticky top-0 z-50 shadow-md backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo et titre */}
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden p-2 rounded-xl hover:bg-blue-50 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {menuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>

              <Link href="/" className="cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-lg md:text-2xl font-black text-gray-900 leading-tight">
                      LA REVUE DE PRESSE
                    </h1>
                    <p className="text-xs text-gray-600 font-medium">
                      Pierre Jovanovic - depuis 2008
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group whitespace-nowrap"
                  >
                    <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Barre d'informations */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 py-3">
            {/* Date et heure */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-semibold whitespace-nowrap">
                  Mercredi 28 mai 2025
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-semibold whitespace-nowrap">
                  09:45:51
                </span>
              </div>
            </div>

            {/* Prix de l'or et métaux */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide">
              {goldPrices.map((price, index) => {
                const Icon = price.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg whitespace-nowrap border border-white/20 hover:bg-white/20 transition-all duration-200"
                  >
                    <Icon className="h-4 w-4 text-yellow-300" />
                    <span className="text-sm font-semibold">
                      {price.label}: <span className="text-yellow-300">{price.value}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Styles pour masquer la scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Header;
