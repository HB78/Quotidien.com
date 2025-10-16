"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import jovanovics from "@/public/jovanovics.jpg";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const decorRef1 = useRef(null);
  const decorRef2 = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animation séquentielle élégante d'entrée
    tl.from(badgeRef.current, {
      opacity: 0,
      y: -30,
      scale: 0.8,
      duration: 0.8,
      ease: 'back.out(1.7)'
    })
    .from(titleRef.current.children, {
      opacity: 0,
      y: 60,
      rotationX: -20,
      stagger: 0.2,
      duration: 1
    }, '-=0.4')
    .from(lineRef.current, {
      width: 0,
      duration: 0.8
    }, '-=0.3')
    .from(descRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8
    }, '-=0.5')
    .from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.4');

    // Animations des éléments décoratifs flottants
    gsap.to(decorRef1.current, {
      y: -20,
      scale: 1.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to(decorRef2.current, {
      y: -15,
      x: 10,
      rotation: 360,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Animation de parallax au scroll pour l'image
    gsap.to(containerRef.current.querySelector('.parallax-image'), {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Animation au hover du bouton
    const button = buttonRef.current;
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-[500px] md:h-[600px] mb-12 rounded-2xl overflow-hidden shadow-2xl group">
      {/* Image avec effet parallax */}
      <div className="absolute inset-0 parallax-image">
        <Image
          src={jovanovics}
          alt="Pierre Jovanovic"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />

        {/* Overlay moderne avec dégradé subtil */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-transparent"></div>

        {/* Effet vignette pour focus central */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Éléments décoratifs flottants avec animation GSAP */}
      <div ref={decorRef1} className="absolute top-12 right-12 w-20 h-20 bg-blue-400/20 rounded-full blur-xl opacity-60"></div>
      <div ref={decorRef2} className="absolute bottom-20 right-24 w-12 h-12 bg-yellow-400/30 rotate-45 opacity-50"></div>

      {/* Contenu principal */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-4xl">
          {/* Badge de crédibilité */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">
              Expertise depuis 2008
            </span>
          </div>

          {/* Titre principal avec gradient */}
          <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
            <span className="block drop-shadow-2xl">La Revue</span>
            <span className="block bg-gradient-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent">
              de Presse
            </span>
          </h1>

          {/* Ligne décorative */}
          <div ref={lineRef} className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-6"></div>

          {/* Description avec style card */}
          <div ref={descRef} className="bg-white/10 backdrop-blur-[2px] rounded-xl p-2 min-md:p-6 border border-white/20 mb-8 max-w-3xl">
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
              ref={buttonRef}
              href="/rendez-vous"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2 overflow-hidden"
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
