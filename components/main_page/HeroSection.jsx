import jovanovics from "@/public/jovanovics.jpg";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] mb-12 rounded-2xl overflow-hidden shadow-2xl group">
      {/* Image avec effet parallax */}
      <div className="absolute inset-0">
        <Image
          src={jovanovics}
          alt="Pierre Jovanovic"
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          priority
          quality={90}
        />

        {/* Overlay moderne avec dégradé subtil */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-transparent"></div>

        {/* Effet vignette pour focus central */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute top-12 right-12 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse opacity-60"></div>
      <div className="absolute bottom-20 right-24 w-12 h-12 bg-yellow-400/30 rotate-45 animate-bounce opacity-50"></div>

      {/* Contenu principal */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-4xl">
          {/* Badge de crédibilité */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">
              Expertise depuis 2008
            </span>
          </div>

          {/* Titre principal avec gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
            <span className="block drop-shadow-2xl">La Revue</span>
            <span className="block bg-gradient-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent">
              de Presse
            </span>
          </h1>

          {/* Ligne décorative */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-6 animate-pulse"></div>

          {/* Description avec style card */}
          <div className="bg-white/10 backdrop-blur-[2px] rounded-xl p-2 min-md:p-6 border border-white/20 mb-8 max-w-3xl">
            <p className="text-sm  min-md:text-2xl text-white/95 leading-relaxed font-light">
              Analyses expertes et décryptages quotidiens sur l'économie, la
              finance et les marchés mondiaux par
              <span className="text-blue-300 font-semibold">
                {" "}
                Pierre Jovanovic
              </span>
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/rendez-vous"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <svg
                className="w-5 h-5 z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span className="z-10">Prochains Événements</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bordure élégante */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
