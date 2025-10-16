"use client";

import { DollarSign, MapPin, Phone, Shield, Quote } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* En-tête moderne avec gradient doré */}
      <div className="bg-gradient-to-br from-yellow-500 to-amber-600 px-6 py-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <DollarSign className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-bold text-lg text-white">Adresses et téléphones</h3>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Introduction */}
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <p className="text-sm text-gray-700 leading-relaxed">
            Depuis 2008 j'ai reçu des dizaines de milliers de mails "Où acheter dans un endroit sûr?"
            Voici les adresses pour sauver vos meubles des taux négatifs et de l'inflation:
          </p>
        </div>

        {/* Card de contact */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 space-y-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Shield className="h-5 w-5 text-yellow-700" />
            </div>
            <h4 className="font-bold text-gray-900">CC Opera</h4>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2 text-gray-700">
              <Shield className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span>Certifié ISO 9001, devises $, ¥, £, € & Bitcoins</span>
            </div>

            <div className="flex items-start gap-2 text-gray-700">
              <MapPin className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span>9 rue Scribe, Paris – Métro Opéra</span>
            </div>

            <div className="flex items-start gap-2 text-gray-700">
              <Phone className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span>01 47 42 20 96 - Livraisons sécurisées</span>
            </div>
          </div>
        </div>

        {/* Citations */}
        <div className="space-y-3">
          <div className="relative bg-gray-50 rounded-xl p-4 border border-gray-200">
            <Quote className="absolute top-2 left-2 h-5 w-5 text-gray-300" />
            <p className="text-xs italic text-gray-700 pl-6 leading-relaxed">
              "La monnaie est par nature l'or et l'argent"
              <span className="block mt-1 font-semibold text-gray-900">- Karl Marx</span>
            </p>
          </div>

          <div className="relative bg-gray-50 rounded-xl p-4 border border-gray-200">
            <Quote className="absolute top-2 left-2 h-5 w-5 text-gray-300" />
            <p className="text-xs italic text-gray-700 pl-6 leading-relaxed">
              "Gold is money! Everything else is credit"
              <span className="block mt-1 font-semibold text-gray-900">- John Pierpont Morgan</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
