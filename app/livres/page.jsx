"use client";

import BookGrid from "@/components/book_page/BookGrid";
import CategoryFilter from "@/components/book_page/CategoryFilter";
import Pagination from "@/components/book_page/Pagination";
import SearchAndSort from "@/components/book_page/SearchAndSort";
import ShoppingCart from "@/components/book_page/ShoppingCart";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { books } from "@/data/books";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiCalendar, HiLocationMarker, HiShoppingCart } from "react-icons/hi";

const ITEMS_PER_PAGE = 9;

export default function LivresPage() {
  // ===== GESTION DES FILTRES ET DE LA RECHERCHE =====
  // selectedCategory : Garde en mémoire la catégorie sélectionnée (ex: "all", "economie", etc.)
  const [selectedCategory, setSelectedCategory] = useState("all");
  // searchQuery : Stocke le texte de recherche saisi par l'utilisateur
  const [searchQuery, setSearchQuery] = useState("");
  // sortBy : Mémorise le critère de tri choisi (ex: "price-asc", "title-desc", etc.)
  const [sortBy, setSortBy] = useState("default");

  // ===== GESTION DE LA PAGINATION =====
  // currentPage : Garde en mémoire la page actuellement affichée (commence à 1)
  const [currentPage, setCurrentPage] = useState(1);

  // ===== GESTION DU PANIER =====
  // cart : Tableau qui contient les livres ajoutés au panier
  const [cart, setCart] = useState([]);
  // isCartOpen : Booléen qui indique si le panier est ouvert ou fermé
  const [isCartOpen, setIsCartOpen] = useState(false);
  // notification : Stocke le message de notification à afficher (ex: "Livre ajouté au panier")
  const [notification, setNotification] = useState(null);

  // ===== FILTRAGE ET TRI DES LIVRES =====
  // 1. Filtre par catégorie
  // 2. Filtre par recherche (titre ou description)
  // 3. Trie selon le critère choisi (prix, titre, etc.)
  const filteredBooks = books
    .filter(
      (book) => selectedCategory === "all" || book.category === selectedCategory
    )
    .filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return parseFloat(a.price) - parseFloat(b.price);
        case "price-desc":
          return parseFloat(b.price) - parseFloat(a.price);
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  // ===== GESTION DE LA PAGINATION =====
  // Calcule le nombre total de pages
  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  // Calcule l'index de départ pour la page courante
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // Extrait les livres de la page courante
  const paginatedBooks = filteredBooks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Fonction pour changer de page et remonter en haut
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ===== GESTION DU PANIER =====
  // Ajoute un livre au panier et affiche une notification
  const addToCart = (book) => {
    setCart([...cart, book]);
    setIsCartOpen(true);
    setNotification({
      type: "success",
      message: `${book.title} a été ajouté au panier`,
    });
  };

  // Retire un livre du panier et affiche une notification
  const removeFromCart = (bookId) => {
    const book = cart.find((item) => item.id === bookId);
    setCart(cart.filter((item) => item.id !== bookId));
    setNotification({
      type: "info",
      message: `${book.title} a été retiré du panier`,
    });
  };

  // Calcule le total du panier
  const cartTotal = cart.reduce(
    (total, book) => total + parseFloat(book.price),
    0
  );

  // ===== GESTION DES NOTIFICATIONS =====
  // Efface la notification après 3 secondes
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const categories = ["all", ...new Set(books.map((book) => book.category))];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">Livres</h1>
          {/* Notification */}
          {notification && (
            <div
              className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
                notification.type === "success" ? "bg-green-500" : "bg-blue-500"
              } text-white`}
            >
              {notification.message}
            </div>
          )}

          {/* Hero Section */}
          <div className="bg-blue-900 text-white rounded-xl p-8 mb-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-4xl font-bold mb-4">
                    Les Livres de Pierre Jovanovic
                  </h1>
                  <p className="text-xl mb-6">
                    Découvrez l'ensemble des ouvrages de Pierre Jovanovic, de
                    ses enquêtes sur les anges à ses analyses économiques.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="relative p-2 text-white hover:bg-blue-800 rounded-lg"
                >
                  <HiShoppingCart className="w-8 h-8" />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-blue-800 px-4 py-2 rounded-lg">
                  <HiCalendar className="w-5 h-5 mr-2" />
                  <span>Prochain rendez-vous : 31 mai 2025</span>
                </div>
                <div className="flex items-center bg-blue-800 px-4 py-2 rounded-lg">
                  <HiLocationMarker className="w-5 h-5 mr-2" />
                  <span>Centre Culturel Leclerc, Moisselles (95)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panier */}
          <ShoppingCart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onRemoveFromCart={removeFromCart}
            cartTotal={cartTotal}
          />

          {/* Recherche et tri */}
          <SearchAndSort
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {/* Filtres par catégorie */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Grille de livres */}
          <BookGrid books={paginatedBooks} onAddToCart={addToCart} />

          {/* Message si aucun résultat */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Aucun livre ne correspond à votre recherche.
              </p>
            </div>
          )}

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          {/* Social Media Section */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Suivez Pierre Jovanovic
              </h2>
              <div className="flex flex-wrap gap-6 justify-center">
                <a
                  href="https://x.com/pierrejovanovic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <FaTwitter className="w-6 h-6 mr-2" />
                  <span>@pierrejovanovic</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pierre-jovanovic-33260b23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <FaLinkedin className="w-6 h-6 mr-2" />
                  <span>Pierre Jovanovic</span>
                </a>
                <a
                  href="https://www.instagram.com/jovapierre14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <FaInstagram className="w-6 h-6 mr-2" />
                  <span>@jovapierre14</span>
                </a>
                <a
                  href="https://www.facebook.com/Pierre-Jovanovic-297361163288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <FaFacebook className="w-6 h-6 mr-2" />
                  <span>Page Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
