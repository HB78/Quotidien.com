import { DollarSign } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="bg-yellow-100 text-yellow-800 py-3 px-4">
        <h3 className="font-bold flex items-center">
          <DollarSign size={16} className="mr-2" />
          Adresses et téléphones
        </h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-700 mb-3">
          Depuis 2008 j'ai reçu des dizaines de milliers de mails "Où acheter
          dans un endroit sûr?" Voici les adresses pour sauver vos meubles des
          taux négatifs et de l'inflation:
        </p>
        <ul className="space-y-3 text-sm">
          <li className="border-b border-gray-100 pb-2">
            <div className="font-medium">CC Opera</div>
            <div className="text-gray-600">
              Certifié ISO 9001, devises $, ¥, £, ?, € & Bitcoins
            </div>
            <div className="text-gray-600">
              9 rue Scribe, Paris – Métro Opéra
            </div>
            <div className="text-gray-600">
              Tél. 01 47 42 20 96 - Livraisons sécurisées
            </div>
          </li>
        </ul>
        <div className="mt-3">
          <blockquote className="text-xs italic text-gray-600 border-l-2 border-gray-300 pl-3">
            "La monnaie est par nature l'or et l'argent" - Karl Marx
          </blockquote>
          <blockquote className="text-xs italic text-gray-600 border-l-2 border-gray-300 pl-3 mt-2">
            "Gold is money! Everything else is credit" - John Pierpont Morgan
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Contact;
