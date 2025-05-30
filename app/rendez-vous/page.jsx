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

export default function RendezVousPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">Rendez-vous</h1>
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
          <div className="bg-blue-900 text-white rounded-xl p-8 mb-12">
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
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
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
