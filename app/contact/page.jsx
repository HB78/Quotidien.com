import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaypal,
  FaTwitter,
} from "react-icons/fa";
import { HiHeart, HiLocationMarker, HiMail } from "react-icons/hi";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">Contact</h1>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact</h1>

            {/* Section Dons */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-start space-x-4">
                <HiHeart className="w-8 h-8 text-red-500 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Soutenez la Revue de Presse
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Chers lecteurs, c'est grâce à vos dons que je vais là où la
                    presse subventionnée par l'État ne va plus... Nul besoin
                    d'avoir un compte PayPal pour participer!
                  </p>
                  <a
                    href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CYVKHDLSWJT94"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaPaypal className="h-6 w-6 mr-2" />
                    Faire un don
                  </a>
                </div>
              </div>
            </div>

            {/* Section principale */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Informations de contact */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Informations de contact
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <HiMail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600">jovapierre14@yahoo.fr</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <HiLocationMarker className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Adresse postale
                        </h3>
                        <p className="text-gray-600">
                          Pierre Jovanovic
                          <br />
                          c/o Jardin des Livres
                          <br />
                          14 rue de Naples
                          <br />
                          75008 Paris
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Réseaux sociaux
                  </h2>

                  <div className="space-y-6">
                    <a
                      href="https://x.com/pierrejovanovic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <FaTwitter className="w-6 h-6 mr-4" />
                      <span>@pierrejovanovic</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/pierre-jovanovic-33260b23/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <FaLinkedin className="w-6 h-6 mr-4" />
                      <span>Pierre Jovanovic</span>
                    </a>

                    <a
                      href="https://www.instagram.com/jovapierre14/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <FaInstagram className="w-6 h-6 mr-4" />
                      <span>@jovapierre14</span>
                    </a>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">
                        Mon Facebook avec 67 000 abonnés a été censuré la veille
                        du 1er tour des élections régionales de décembre 2015.
                      </p>
                      <a
                        href="https://www.facebook.com/Pierre-Jovanovic-297361163288"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <FaFacebook className="w-6 h-6 mr-4" />
                        <span>Page "Personne Publique"</span>
                      </a>
                      <a
                        href="https://www.facebook.com/pierre.jovanovic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <FaFacebook className="w-6 h-6 mr-4" />
                        <span>Facebook Privé</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Attachée de presse */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Attachée de presse
              </h2>
              <div className="flex items-start">
                <div className="flex-1">
                  <p className="text-gray-600 mb-4">
                    Pour les signatures en librairie et conférences :
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">Mme Marie Guillard</p>
                    <p className="text-gray-600">Tél. 01 44 09 08 78</p>
                    <p className="text-gray-600">Email : pressejdl@gmail.com</p>
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
