"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { events } from "@/data/meetings";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  BookOpen,
  Filter,
  CalendarDays,
  MessageCircle
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function RendezVousPage() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useGSAP(() => {
    // Animation du hero
    gsap.from(heroRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Animation des cards au scroll
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  });

  // Fonction pour extraire le mois d'une date
  const getMonth = (dateString) => {
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                   'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const monthsInDate = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                         'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    for (let month of monthsInDate) {
      if (dateString.toLowerCase().includes(month)) {
        return month;
      }
    }
    return 'tous';
  };

  // Filtrer les événements
  const filteredEvents = selectedFilter === "all"
    ? events
    : events.filter(event => getMonth(event.date) === selectedFilter);

  // Obtenir les mois uniques
  const uniqueMonths = [...new Set(events.map(event => getMonth(event.date)))];

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

          {/* Hero Section */}
          <section
            ref={heroRef}
            className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-3xl p-8 lg:p-12 mb-12 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="relative max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <CalendarDays className="h-5 w-5" />
                <span className="text-sm font-semibold">{events.length} événements prévus</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Prochains Rendez-vous et Dédicaces
              </h1>

              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                Retrouvez Pierre Jovanovic lors de ses prochaines dédicaces et événements
                partout en France. Venez échanger et faire dédicacer vos livres !
              </p>
            </div>
          </section>

          {/* Filtres */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Filter className="h-5 w-5 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900">Filtrer par mois</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedFilter("all")}
                  className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                    selectedFilter === "all"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Tous les mois
                </button>
                {uniqueMonths.map((month) => (
                  <button
                    key={month}
                    onClick={() => setSelectedFilter(month)}
                    className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 capitalize ${
                      selectedFilter === month
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Liste des événements */}
          <div className="max-w-7xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <article
                  key={event.id}
                  ref={el => cardsRef.current[index] = el}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  {/* En-tête avec gradient */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                          Événement
                        </span>
                      </div>

                      <p className="text-2xl font-black text-white">
                        {event.date}
                      </p>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                      {event.title}
                    </h2>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
                        <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                          <Clock className="h-4 w-4 text-blue-700" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Horaires</p>
                          <p className="text-sm text-gray-600">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-xl bg-green-50 border border-green-100">
                        <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                          <MapPin className="h-4 w-4 text-green-700" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Lieu</p>
                          <p className="text-sm text-gray-600 line-clamp-2">{event.location}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    <Link
                      href="/livres"
                      className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 w-full justify-center"
                    >
                      <BookOpen className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Voir les livres disponibles
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Message si aucun événement filtré */}
            {filteredEvents.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-900 mb-2">
                  Aucun événement trouvé
                </p>
                <p className="text-gray-600">
                  Essayez de changer les filtres ou consultez tous les événements.
                </p>
                <button
                  onClick={() => setSelectedFilter("all")}
                  className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Voir tous les événements
                </button>
              </div>
            )}
          </div>

          {/* Section informations */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-12 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      Informations importantes
                    </h2>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 mb-6">
                    <div className="space-y-4 text-white/95">
                      <p className="text-lg leading-relaxed">
                        Pour toute demande de dédicace ou d'organisation d'événement,
                        veuillez nous contacter via la page de contact.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Les dédicaces sont l'occasion de rencontrer Pierre Jovanovic et
                        d'échanger avec lui sur ses ouvrages. N'hésitez pas à apporter
                        vos livres pour les faire dédicacer.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle className="h-6 w-6" />
                      Nous contacter
                      <ArrowLeft className="h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/livres"
                      className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
                    >
                      <BookOpen className="h-6 w-6" />
                      Voir tous les livres
                    </Link>
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
