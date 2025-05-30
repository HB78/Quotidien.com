"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { banks } from "@/data/gang bank/banks";
import { economists } from "@/data/gang bank/economists";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "super gestion":
    case "banque solide":
    case "solide":
      return "text-green-600";
    case "guérison":
      return "text-blue-600";
    case "survie":
      return "text-yellow-600";
    case "sous perfusion":
    case "zombie":
    case "banque zombie":
      return "text-orange-600";
    case "banque morte":
    case "banque 2x mourue":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export default function GangBankPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 bg-gradient-to-b from-gray-50 to-white min-h-screen">
        {/* Navigation */}
        <nav className="mb-8">
          <Link
            href="/jovanovic"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <HiArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl p-8 mb-12 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Les Banques les Plus Fortes
            </h1>
            <p className="text-xl">
              L'évolution du cours des actions des principales banques entre
              2007 et 2025. La Loi "Jovanovic" signifie que les banques ne
              peuvent pas tromper leurs propres traders.
            </p>
          </div>
        </section>

        {/* Légende */}
        <section className="max-w-4xl mx-auto mb-8">
          <article className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Légende</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-2">♛</span>
                  <span>Banque solide</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 text-xl mr-2">⚕</span>
                  <span>En guérison</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-600 text-xl mr-2">☢</span>
                  <span>Survie</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-orange-600 text-xl mr-2">☠</span>
                  <span>Zombie</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 text-xl mr-2">☠ ☢ ☠</span>
                  <span>Banque morte</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Liste des banques */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banks.map((bank) => (
              <article
                key={bank.name}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="p-6">
                  <header className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-gray-900">
                      {bank.name}
                    </h2>
                    <span className="text-2xl">{bank.icon}</span>
                  </header>
                  <div className="space-y-3">
                    {bank.evolution.map((evo) => (
                      <div
                        key={evo.year}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="text-gray-600">{evo.year}:</span>
                        {evo.note ? (
                          <span className="text-red-600">{evo.note}</span>
                        ) : (
                          <span className="font-medium">
                            {evo.value} {bank.currency}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <footer className="mt-4 pt-4 border-t border-gray-100">
                    <span
                      className={`font-medium ${getStatusColor(bank.status)}`}
                    >
                      {bank.status}
                    </span>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section des économistes */}
        <section className="max-w-7xl mx-auto mt-16">
          <article className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 mb-12 shadow-lg border border-red-100">
            <header>
              <h2 className="text-3xl font-bold text-red-900 mb-6">
                Les Économistes "Bidons" qui n'ont rien vu venir
              </h2>
              <p className="text-lg text-red-800 mb-8">
                Revue de Presse du 5 novembre 2012 - Classement des déclarations
                des économistes qui n'ont pas vu la catastrophe économique
                arriver alors qu'ils la regardaient droit dans les yeux.
              </p>
            </header>

            {/* Avant la crise */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">
                AVANT l'explosion de Wall Street du 29 septembre 2008
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {economists.beforeCrisis.map((economist, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 hover:border-red-600"
                  >
                    <header className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {economist.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {economist.title}
                        </p>
                      </div>
                      <time className="text-sm text-gray-500">
                        {economist.date}
                      </time>
                    </header>
                    <blockquote className="text-gray-700 italic mb-2">
                      "{economist.quote}"
                    </blockquote>
                    <footer className="text-sm text-gray-500">
                      {economist.source}
                    </footer>
                  </article>
                ))}
              </div>
            </section>

            {/* Après la crise */}
            <section>
              <h3 className="text-2xl font-bold text-red-800 mb-6">
                APRÈS l'explosion de Wall Street du 29 septembre 2008
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {economists.afterCrisis.map((economist, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 hover:border-red-600"
                  >
                    <header className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {economist.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {economist.title}
                        </p>
                      </div>
                      <time className="text-sm text-gray-500">
                        {economist.date}
                      </time>
                    </header>
                    <blockquote className="text-gray-700 italic mb-2">
                      "{economist.quote}"
                    </blockquote>
                    <footer className="text-sm text-gray-500">
                      {economist.source}
                    </footer>
                  </article>
                ))}
              </div>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
