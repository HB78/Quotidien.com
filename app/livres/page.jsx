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
import { ShoppingBag, BookOpen, Calendar as CalendarIcon, MapPin, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

const ITEMS_PER_PAGE = 9;

export default function LivresPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  // Filtrage et tri des livres
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

  // Pagination
  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBooks = filteredBooks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Gestion du panier
  const addToCart = (book) => {
    setCart([...cart, book]);
    setIsCartOpen(true);
    setNotification({
      type: "success",
      message: `${book.title} a été ajouté au panier`,
    });
  };

  const removeFromCart = (bookId) => {
    const book = cart.find((item) => item.id === bookId);
    setCart(cart.filter((item) => item.id !== bookId));
    setNotification({
      type: "info",
      message: `${book.title} a été retiré du panier`,
    });
  };

  const cartTotal = cart.reduce(
    (total, book) => total + parseFloat(book.price),
    0
  );

  // Gestion des notifications
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const socialLinks = [
    {
      icon: FaTwitter,
      label: "@pierrejovanovic",
      href: "https://x.com/pierrejovanovic",
      color: "hover:bg-sky-50"
    },
    {
      icon: FaLinkedin,
      label: "Pierre Jovanovic",
      href: "https://www.linkedin.com/in/pierre-jovanovic-33260b23/",
      color: "hover:bg-blue-50"
    },
    {
      icon: FaInstagram,
      label: "@jovapierre14",
      href: "https://www.instagram.com/jovapierre14/",
      color: "hover:bg-pink-50"
    },
    {
      icon: FaFacebook,
      label: "Page Facebook",
      href: "https://www.facebook.com/Pierre-Jovanovic-297361163288",
      color: "hover:bg-blue-50"
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-100 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Navigation */}
          <nav className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Link>
          </nav>

          {/* Notification */}
          {notification && (
            <div
              className={`fixed top-4 right-4 p-4 rounded-xl shadow-2xl z-50 ${
                notification.type === "success"
                  ? "bg-gradient-to-r from-green-500 to-emerald-600"
                  : "bg-gradient-to-r from-blue-500 to-blue-600"
              } text-white animate-fade-in-up border border-white/20`}
            >
              <p className="font-semibold">{notification.message}</p>
            </div>
          )}

          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-3xl p-8 lg:p-12 mb-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="relative max-w-5xl mx-auto">
              <div className="flex justify-between items-start gap-6 mb-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <BookOpen className="h-5 w-5" />
                    <span className="text-sm font-semibold">{books.length} ouvrages disponibles</span>
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                    Les Livres de Pierre Jovanovic
                  </h1>

                  <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-6">
                    Découvrez l'ensemble des ouvrages de Pierre Jovanovic, de ses enquêtes
                    sur les anges à ses analyses économiques approfondies.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20 flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span className="text-sm">Prochain rendez-vous : 31 mai 2025</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">Centre Culturel Leclerc, Moisselles (95)</span>
                    </div>
                  </div>
                </div>

                {/* Bouton panier */}
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="relative p-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-2xl transition-all duration-300 border border-white/30 group"
                >
                  <ShoppingBag className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* Panier */}
          <ShoppingCart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onRemoveFromCart={removeFromCart}
            cartTotal={cartTotal}
          />

          {/* Recherche et tri */}
          <div className="mb-8">
            <SearchAndSort
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>

          {/* Filtres par catégorie */}
          <div className="mb-8">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Grille de livres */}
          <div className="mb-12">
            <BookGrid books={paginatedBooks} onAddToCart={addToCart} />
          </div>

          {/* Message si aucun résultat */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100 mb-12">
              <BookOpen className="h-20 w-20 text-gray-300 mx-auto mb-6" />
              <p className="text-2xl font-bold text-gray-900 mb-3">
                Aucun livre trouvé
              </p>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou vos filtres.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSortBy("default");
                }}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredBooks.length > 0 && (
            <div className="mb-12">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}

          {/* Réseaux sociaux */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-12 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Suivez Pierre Jovanovic
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                      >
                        <social.icon className="h-6 w-6 text-white" />
                        <span className="text-white font-medium text-sm flex-1">{social.label}</span>
                        <ExternalLink className="h-4 w-4 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
