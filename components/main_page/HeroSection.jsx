import jovanovics from "@/public/jovanovics.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/90 to-blue-400/50 z-10"></div>
      <Image
        src={jovanovics}
        alt="Pierre Jovanovic"
        fill
        className="object-cover"
        priority
        quality={80}
      />
      <div className="absolute pt-9 inset-0 z-20 flex flex-col  px-4 sm:px-6 md:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
          La Revue de Presse
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mb-4 sm:mb-6">
          Analyses et commentaires sur l'économie, la finance et les marchés
          depuis 2008
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Link
          href="rendez-vous"
          className="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-white/10 transition-colors text-center text-sm sm:text-base"
        >
          Prochains Événements
        </Link>
      </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
