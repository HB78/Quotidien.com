"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { banks } from "@/data/gang bank/banks";
import { economists } from "@/data/gang bank/economists";
import Link from "next/link";
import { ArrowLeft, TrendingDown, TrendingUp, AlertCircle, Building2, Crown, Skull, Activity } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const getStatusConfig = (status) => {
  const statusLower = status.toLowerCase();

  if (statusLower.includes("super gestion") || statusLower === "banque solide" || statusLower === "solide") {
    return {
      color: "from-green-500 to-emerald-600",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: Crown,
      label: "Banque Solide"
    };
  }

  if (statusLower.includes("guérison")) {
    return {
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: Activity,
      label: "En Guérison"
    };
  }

  if (statusLower.includes("survie")) {
    return {
      color: "from-yellow-500 to-amber-600",
      textColor: "text-yellow-700",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: AlertCircle,
      label: "Survie"
    };
  }

  if (statusLower.includes("zombie") || statusLower.includes("perfusion")) {
    return {
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      icon: Skull,
      label: "Banque Zombie"
    };
  }

  return {
    color: "from-red-500 to-red-600",
    textColor: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    icon: Skull,
    label: "Banque Morte"
  };
};

const calculateChange = (evolution) => {
  if (!evolution || evolution.length < 2) return null;

  const first = evolution[0];
  const last = evolution[evolution.length - 1];

  if (!first.value || !last.value) return null;

  const change = ((last.value - first.value) / first.value) * 100;
  return change;
};

export default function GangBankPage() {
  const cardsRef = useRef([]);

  useGSAP(() => {
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
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  });

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
          <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-3xl p-8 lg:p-12 mb-12 shadow-2xl overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="relative max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="h-5 w-5" />
                <span className="text-sm font-semibold">Analyse 2007-2025</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Les Banques les Plus Fortes
              </h1>

              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-6">
                L'évolution du cours des actions des principales banques entre 2007 et 2025.
                La Loi "Jovanovic" signifie que les banques ne peuvent pas tromper leurs propres traders.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <p className="text-sm text-blue-200">Banques analysées</p>
                  <p className="text-2xl font-bold">{banks.length}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <p className="text-sm text-blue-200">Période</p>
                  <p className="text-2xl font-bold">18 ans</p>
                </div>
              </div>
            </div>
          </section>

          {/* Légende */}
          <section className="max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                Légende des Statuts
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
                  <Crown className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-gray-900">Banque Solide</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <Activity className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">En Guérison</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                  <AlertCircle className="h-6 w-6 text-yellow-600" />
                  <span className="font-semibold text-gray-900">Survie</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-orange-50 border border-orange-200">
                  <Skull className="h-6 w-6 text-orange-600" />
                  <span className="font-semibold text-gray-900">Banque Zombie</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                  <Skull className="h-6 w-6 text-red-600" />
                  <span className="font-semibold text-gray-900">Banque Morte</span>
                </div>
              </div>
            </div>
          </section>

          {/* Liste des banques */}
          <section className="max-w-7xl mx-auto mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Évolution des Banques</h2>
              <p className="text-gray-600">Cliquez sur une carte pour voir les détails</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {banks.map((bank, index) => {
                const statusConfig = getStatusConfig(bank.status);
                const StatusIcon = statusConfig.icon;
                const change = calculateChange(bank.evolution);

                return (
                  <article
                    key={bank.name}
                    ref={el => cardsRef.current[index] = el}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                  >
                    {/* En-tête avec gradient */}
                    <div className={`bg-gradient-to-r ${statusConfig.color} p-5 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                      <div className="relative flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                            {bank.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <StatusIcon className="h-4 w-4 text-white/90" />
                            <span className="text-sm text-white/90 font-medium">
                              {statusConfig.label}
                            </span>
                          </div>
                        </div>
                        <span className="text-3xl">{bank.icon}</span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-5">
                      {/* Variation */}
                      {change !== null && (
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 ${
                          change >= 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                        }`}>
                          {change >= 0 ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          <span className="text-sm font-bold">
                            {change >= 0 ? '+' : ''}{change.toFixed(1)}%
                          </span>
                        </div>
                      )}

                      {/* Évolution */}
                      <div className="space-y-2">
                        {bank.evolution.map((evo) => (
                          <div
                            key={evo.year}
                            className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm font-semibold text-gray-600">
                              {evo.year}
                            </span>
                            {evo.note ? (
                              <span className="text-sm text-red-600 font-medium italic">
                                {evo.note}
                              </span>
                            ) : (
                              <span className="text-sm font-bold text-gray-900">
                                {evo.value} {bank.currency}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Section des économistes */}
          <section className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 via-white to-red-50/50 rounded-3xl p-8 lg:p-12 shadow-2xl border border-red-100">
              <div className="max-w-4xl mb-12">
                <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6">
                  <AlertCircle className="h-5 w-5 text-red-700" />
                  <span className="text-sm font-semibold text-red-700">Archives 2012</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-black text-red-900 mb-4">
                  Les Économistes "Bidons" qui n'ont rien vu venir
                </h2>
                <p className="text-lg text-red-800 leading-relaxed">
                  Revue de Presse du 5 novembre 2012 - Classement des déclarations
                  des économistes qui n'ont pas vu la catastrophe économique
                  arriver alors qu'ils la regardaient droit dans les yeux.
                </p>
              </div>

              {/* Avant la crise */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-red-800">
                    AVANT l'explosion de Wall Street du 29 septembre 2008
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {economists.beforeCrisis.map((economist, index) => (
                    <article
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 hover:border-red-600"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">
                            {economist.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {economist.title}
                          </p>
                        </div>
                        <time className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {economist.date}
                        </time>
                      </div>

                      <blockquote className="relative bg-red-50 rounded-xl p-4 text-gray-700 italic mb-3 border border-red-100">
                        <span className="text-red-300 text-4xl absolute top-2 left-2">"</span>
                        <p className="pl-6 text-sm leading-relaxed">{economist.quote}</p>
                      </blockquote>

                      <p className="text-xs text-gray-500">{economist.source}</p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Après la crise */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-red-700 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-red-800">
                    APRÈS l'explosion de Wall Street du 29 septembre 2008
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {economists.afterCrisis.map((economist, index) => (
                    <article
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 hover:border-red-600"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">
                            {economist.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {economist.title}
                          </p>
                        </div>
                        <time className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {economist.date}
                        </time>
                      </div>

                      <blockquote className="relative bg-red-50 rounded-xl p-4 text-gray-700 italic mb-3 border border-red-100">
                        <span className="text-red-300 text-4xl absolute top-2 left-2">"</span>
                        <p className="pl-6 text-sm leading-relaxed">{economist.quote}</p>
                      </blockquote>

                      <p className="text-xs text-gray-500">{economist.source}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
