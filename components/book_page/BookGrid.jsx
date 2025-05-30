"use client";

import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";

/**
 * Composant qui affiche une grille de livres
 * @param {Object[]} books - Liste des livres à afficher
 * @param {Function} onAddToCart - Fonction appelée lors de l'ajout d'un livre au panier
 */
const BookGrid = ({ books, onAddToCart }) => {
  return (
    // Grille responsive : 1 colonne sur mobile, 2 sur tablette, 3 sur desktop
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {books.map((book) => (
        // Lien vers la page de détail du livre
        <Link
          key={book.id}
          href={`/jovanovic/livres/${book.id}`}
          className="hover:text-blue-600"
        >
          {/* Carte de livre */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
            {/* Conteneur de l'image avec ratio 2:3 */}
            <div className="relative aspect-[2/3] w-full">
              <Image
                src={book.image}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority={book.id <= 3} // Priorité de chargement pour les 3 premiers livres
              />
            </div>
            {/* Contenu de la carte */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Titre du livre */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {book.title}
              </h3>
              {/* Prix */}
              <p className="text-lg font-medium text-blue-600 mb-4">
                {book.price}
              </p>
              {/* Description limitée à 2 lignes */}
              <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
                {book.description}
              </p>
              {/* Actions */}
              <div className="flex justify-between items-center mt-auto">
                {/* Lien "En savoir plus" */}
                <span className="text-blue-600 hover:text-blue-800 font-medium">
                  En savoir plus
                </span>
                {/* Bouton d'ajout au panier */}
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Empêche la navigation vers la page de détail
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

export default BookGrid;
