"use client";

import septSeptSept from "@/public/books/777.jpg";
import blythe from "@/public/books/blythe_masther.jpg";
import crise2008 from "@/public/books/crise_2008.jpg";
import { BookOpen, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NewBooks = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* En-tête moderne */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-bold text-lg text-white">Livres</h3>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Livre 1 */}
        <div className="group flex gap-4 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200">
          <div className="relative w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
            <Image
              src={crise2008}
              alt="Livre 2008"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <h4 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">
              2008, L'année du krach
            </h4>
            <p className="text-xs text-gray-600 mb-2 flex-1 line-clamp-2">
              La crise financière expliquée en détail et ses conséquences sur l'économie mondiale.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-semibold group-hover:gap-2 transition-all"
            >
              <ShoppingCart className="h-3 w-3" />
              Commander
            </Link>
          </div>
        </div>

        {/* Livre 2 */}
        <div className="group flex gap-4 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200">
          <div className="relative w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
            <Image
              src={septSeptSept}
              alt="Livre 777"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <h4 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">
              777, La chute du Vatican
            </h4>
            <p className="text-xs text-gray-600 mb-2 flex-1 line-clamp-2">
              Une analyse des structures financières et économiques du Vatican.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-semibold group-hover:gap-2 transition-all"
            >
              <ShoppingCart className="h-3 w-3" />
              Commander
            </Link>
          </div>
        </div>

        {/* Livre 3 */}
        <div className="group flex gap-4 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200">
          <div className="relative w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
            <Image
              src={blythe}
              alt="Livre Blythe Masters"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <h4 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">
              Blythe Masters
            </h4>
            <p className="text-xs text-gray-600 mb-2 flex-1 line-clamp-2">
              L'histoire de la banquière qui a inventé les produits dérivés.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-semibold group-hover:gap-2 transition-all"
            >
              <ShoppingCart className="h-3 w-3" />
              Commander
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBooks;
