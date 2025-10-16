"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  MessageSquare,
  ArrowLeft,
  ExternalLink,
  Coffee
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaypal,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useGSAP(() => {
    // Animation du hero
    gsap.from(heroRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power3.out"
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
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: FaTwitter,
      label: "@pierrejovanovic",
      href: "https://x.com/pierrejovanovic",
      color: "text-sky-500 hover:bg-sky-50"
    },
    {
      icon: FaLinkedin,
      label: "Pierre Jovanovic",
      href: "https://www.linkedin.com/in/pierre-jovanovic-33260b23/",
      color: "text-blue-600 hover:bg-blue-50"
    },
    {
      icon: FaInstagram,
      label: "@jovapierre14",
      href: "https://www.instagram.com/jovapierre14/",
      color: "text-pink-500 hover:bg-pink-50"
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

          {/* Hero Section */}
          <section
            ref={heroRef}
            className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-3xl p-8 lg:p-12 mb-12 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="relative max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Mail className="h-5 w-5" />
                <span className="text-sm font-semibold">Restons en contact</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Contactez-nous
              </h1>

              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                Une question, un commentaire ou besoin d'informations ? N'hésitez pas à nous contacter.
                Nous serons ravis d'échanger avec vous.
              </p>
            </div>
          </section>

          {/* Section Soutien */}
          <div
            ref={el => cardsRef.current[0] = el}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-12 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      Soutenez la Revue de Presse
                    </h2>
                  </div>

                  <p className="text-lg text-white/95 mb-8 leading-relaxed max-w-3xl">
                    Chers lecteurs, c'est grâce à vos dons que je vais là où la presse
                    subventionnée par l'État ne va plus... Nul besoin d'avoir un compte
                    PayPal pour participer !
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CYVKHDLSWJT94"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <FaPaypal className="h-7 w-7" />
                      Faire un don
                      <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/30">
                      <p className="text-white text-sm font-medium flex items-center gap-2">
                        <Coffee className="h-5 w-5" />
                        Chaque contribution compte
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire et Infos */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-12">
            {/* Formulaire de contact */}
            <div ref={el => cardsRef.current[1] = el}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                  Envoyez-nous un message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Sujet
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Objet de votre message"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Écrivez votre message ici..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              {/* Contact direct */}
              <div ref={el => cardsRef.current[2] = el}>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                    Informations de contact
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a
                          href="mailto:jovapierre14@yahoo.fr"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          jovapierre14@yahoo.fr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Adresse postale</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Pierre Jovanovic<br />
                          c/o Jardin des Livres<br />
                          14 rue de Naples<br />
                          75008 Paris
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div ref={el => cardsRef.current[3] = el}>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                    Réseaux sociaux
                  </h2>

                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-4 p-4 rounded-xl border border-gray-200 ${social.color} transition-all duration-200`}
                      >
                        <social.icon className="h-6 w-6" />
                        <span className="font-medium text-gray-900">{social.label}</span>
                        <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}

                    <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <p className="text-sm text-amber-900 mb-3 leading-relaxed">
                        Mon Facebook avec 67 000 abonnés a été censuré la veille du 1er tour
                        des élections régionales de décembre 2015.
                      </p>
                      <div className="space-y-2">
                        <a
                          href="https://www.facebook.com/Pierre-Jovanovic-297361163288"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-100 transition-colors text-blue-600"
                        >
                          <FaFacebook className="h-5 w-5" />
                          <span className="text-sm font-medium">Page "Personne Publique"</span>
                        </a>
                        <a
                          href="https://www.facebook.com/pierre.jovanovic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-100 transition-colors text-blue-600"
                        >
                          <FaFacebook className="h-5 w-5" />
                          <span className="text-sm font-medium">Facebook Privé</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Attachée de presse */}
          <div ref={el => cardsRef.current[4] = el} className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-10 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">
                      Attachée de presse
                    </h2>
                  </div>

                  <p className="text-white/95 mb-6 text-lg">
                    Pour les signatures en librairie et conférences
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <p className="text-xl font-bold text-white mb-3">Mme Marie Guillard</p>
                    <div className="space-y-2">
                      <p className="text-white/95 flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        01 44 09 08 78
                      </p>
                      <p className="text-white/95 flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        pressejdl@gmail.com
                      </p>
                    </div>
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
