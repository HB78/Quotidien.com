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

// Composant de fallback réutilisable amélioré
const LoadingFallback = ({ children }) => (
  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden min-h-[200px] border border-gray-100">
    {/* Animation de fond */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent animate-shimmer"></div>

    {/* Contenu skeleton */}
    <div className="relative p-6 lg:p-8 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded-lg w-1/3 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded-lg w-1/4 animate-pulse"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded-lg w-full animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded-lg w-5/6 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded-lg w-4/6 animate-pulse"></div>
      </div>
      <div className="flex justify-center pt-4">
        <p className="text-sm text-gray-500 font-medium">{children}</p>
      </div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="font-sans bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 text-gray-900 min-h-screen">
        {/* Contenu principal */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
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

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-12">
            {/* Colonne de gauche - Contenu principal */}
            <section className="lg:w-2/3 space-y-6" aria-label="Contenu principal">
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
              className="lg:w-1/3 space-y-6"
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
