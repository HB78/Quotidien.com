"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { events } from "@/data/meetings";
import Link from "next/link";
import {
  HiArrowLeft,
  HiCalendar,
  HiClock,
  HiLocationMarker,
} from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

export default function RendezVousPage() {
  const titleRef = useRef(null);
  const heroRef = useRef(null);
  const eventsRef = useRef([]);

  useGSAP(() => {
    // Animation du titre
    gsap.from(titleRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out'
    });

    // Animation de la hero section
    gsap.from(heroRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 1,
      ease: 'back.out(1.2)',
      delay: 0.3
    });

    // Animation des cartes d'événements avec stagger
    eventsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(card,
        {
          opacity: 0,
          y: 100,
          rotationX: -20,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.15
        }
      );

      // Animation au hover
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -12,
          scale: 1.03,
          boxShadow: '0 25px 50px rgba(59, 130, 246, 0.3)',
          duration: 0.4,
          ease: 'power2.out'
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          duration: 0.4,
          ease: 'power2.out'
        });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 ref={titleRef} className="text-3xl font-bold text-blue-900 mb-8">Rendez-vous</h1>
          {/* Navigation */}
          <div className="mb-8">
            <Link
              href="/jovanovic"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <HiArrowLeft className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Link>
          </div>

          {/* Hero Section */}
          <div ref={heroRef} className="bg-blue-900 text-white rounded-xl p-8 mb-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">
                Prochains Rendez-vous et Dédicaces
              </h1>
              <p className="text-xl">
                Retrouvez Pierre Jovanovic lors de ses prochaines dédicaces et
                événements.
              </p>
            </div>
          </div>

          {/* Liste des événements */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  ref={el => eventsRef.current[index] = el}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Informations */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h2>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <HiCalendar className="w-5 h-5 mr-2 flex-shrink-0 text-blue-600" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <HiClock className="w-5 h-5 mr-2 flex-shrink-0 text-blue-600" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <HiLocationMarker className="w-5 h-5 mr-2 flex-shrink-0 text-blue-600" />
                        <span className="line-clamp-2">{event.location}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600 line-clamp-3">
                      {event.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/jovanovic/livres"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        Voir les livres disponibles
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message si aucun événement */}
            {events.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  Aucun événement prévu pour le moment.
                </p>
              </div>
            )}
          </div>

          {/* Section d'information */}
          <div className="max-w-4xl mx-auto mt-12 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Informations importantes
            </h2>
            <div className="prose prose-lg">
              <p>
                Pour toute demande de dédicace ou d'organisation d'événement,
                veuillez nous contacter via la page de contact.
              </p>
              <p>
                Les dédicaces sont l'occasion de rencontrer Pierre Jovanovic et
                d'échanger avec lui sur ses ouvrages. N'hésitez pas à apporter
                vos livres pour les faire dédicacer.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/jovanovic/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
