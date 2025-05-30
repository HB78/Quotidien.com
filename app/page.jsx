import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Article from "@/components/main_page/Article";
import HeroSection from "@/components/main_page/HeroSection";
import LatestAlerte from "@/components/main_page/LatestAlerte";
import Pagination from "@/components/main_page/Pagination";
import AutorInfo from "@/components/main_page/rightColumn/AutorInfo";
import Contact from "@/components/main_page/rightColumn/Contact";
import LatestVideos from "@/components/main_page/rightColumn/LatestVideos";
import Meetings from "@/components/main_page/rightColumn/Meetings";
import NewBooks from "@/components/main_page/rightColumn/NewBooks";
import TabsComponent from "@/components/main_page/TabsComponent";
import { Suspense } from "react";

// Composant de fallback réutilisable
const LoadingFallback = ({ children }) => (
  <div className="animate-pulse bg-gray-200 rounded-lg p-4 min-h-[200px] flex items-center justify-center">
    <p className="text-gray-500">{children}</p>
  </div>
);

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="font-sans bg-gray-100 text-gray-900 min-h-screen">
        {/* Contenu principal */}
        <div className="container mx-auto px-4 py-6">
          {/* Section Hero */}
          <Suspense
            fallback={
              <LoadingFallback>
                Chargement de la section héro...
              </LoadingFallback>
            }
          >
            <HeroSection />
          </Suspense>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Colonne de gauche - Contenu principal */}
            <section className="lg:w-2/3" aria-label="Contenu principal">
              {/* Dernière alerte */}
              <Suspense
                fallback={
                  <LoadingFallback>Chargement des alertes...</LoadingFallback>
                }
              >
                <LatestAlerte />
              </Suspense>

              {/* Onglets */}
              <Suspense
                fallback={
                  <LoadingFallback>Chargement des onglets...</LoadingFallback>
                }
              >
                <TabsComponent />
              </Suspense>

              {/* Article en vedette */}
              <Suspense
                fallback={
                  <LoadingFallback>Chargement de l'article...</LoadingFallback>
                }
              >
                <Article />
              </Suspense>

              {/* Pagination */}
              <Suspense
                fallback={
                  <LoadingFallback>
                    Chargement de la pagination...
                  </LoadingFallback>
                }
              >
                <nav aria-label="Navigation des pages">
                  <Pagination />
                </nav>
              </Suspense>
            </section>

            {/* Colonne de droite - Barre latérale */}
            <aside
              className="lg:w-1/3"
              aria-label="Informations complémentaires"
            >
              {/* Informations sur l'auteur */}
              <Suspense
                fallback={
                  <LoadingFallback>
                    Chargement des informations de l'auteur...
                  </LoadingFallback>
                }
              >
                <AutorInfo />
              </Suspense>

              {/* Dates des rencontres */}
              <Suspense
                fallback={
                  <LoadingFallback>
                    Chargement des rencontres...
                  </LoadingFallback>
                }
              >
                <Meetings />
              </Suspense>

              {/* Livres */}
              <Suspense
                fallback={
                  <LoadingFallback>Chargement des livres...</LoadingFallback>
                }
              >
                <NewBooks />
              </Suspense>

              {/* Vidéos */}
              <Suspense
                fallback={
                  <LoadingFallback>Chargement des vidéos...</LoadingFallback>
                }
              >
                <LatestVideos />
              </Suspense>

              {/* Adresses et téléphones */}
              <Suspense
                fallback={
                  <LoadingFallback>Chargement des contacts...</LoadingFallback>
                }
              >
                <Contact />
              </Suspense>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
