"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { HiShoppingCart } from "react-icons/hi";

// Composant de fallback pour la grille de livres
const BookGridFallback = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col animate-pulse"
        >
          {/* Placeholder pour l'image */}
          <div className="relative aspect-[2/3] w-full bg-gray-200" />
          {/* Placeholder pour le contenu */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-4" />
            <div className="space-y-2 flex-grow">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-10 bg-gray-200 rounded w-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Composant qui affiche une grille de livres
 * @param {Object[]} books - Liste des livres à afficher
 * @param {Function} onAddToCart - Fonction appelée lors de l'ajout d'un livre au panier
 */
const BookGridContent = ({ books, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {books.map((book) => (
        <Link
          key={book.id}
          href={`/jovanovic/livres/${book.id}`}
          className="hover:text-blue-600"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
            <div className="relative aspect-[2/3] w-full">
              <Image
                src={book.image}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority={book.id <= 3}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {book.title}
              </h3>
              <p className="text-lg font-medium text-blue-600 mb-4">
                {book.price}
              </p>
              <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
                {book.description}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-blue-600 hover:text-blue-800 font-medium">
                  En savoir plus
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onAddToCart(book);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <HiShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const BookGrid = (props) => {
  return (
    <Suspense fallback={<BookGridFallback />}>
      <BookGridContent {...props} />
    </Suspense>
  );
};

export default BookGrid;
