"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Article = () => {
  const articlesRef = useRef([]);

  useGSAP(() => {
    articlesRef.current.forEach((article, index) => {
      if (!article) return;

      // Animation d'apparition au scroll
      gsap.fromTo(article,
        {
          opacity: 0,
          y: 100,
          rotationX: -15,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: article,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animation au hover
      const handleMouseEnter = () => {
        gsap.to(article, {
          y: -10,
          scale: 1.02,
          boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
          duration: 0.4,
          ease: 'power2.out'
        });
      };

      const handleMouseLeave = () => {
        gsap.to(article, {
          y: 0,
          scale: 1,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          duration: 0.4,
          ease: 'power2.out'
        });
      };

      article.addEventListener('mouseenter', handleMouseEnter);
      article.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        article.removeEventListener('mouseenter', handleMouseEnter);
        article.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  });

  return (
    <>
      <article ref={el => articlesRef.current[0] = el} className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            LE LIVRE 2008 EN PLEIN DANS LE MILLE - RETRAITE À 70 ANS
          </h2>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar size={16} className="mr-2" />
            <span>26 au 30 mai 2025</span>
          </div>
          <div className="prose max-w-none">
            <p>
              Mes chers lecteurs, le livre 2008 est effectivement une
              description de notre futur puisque j'ai abordé ce sujet page 153,
              274 et 279 en expliquant, dès le 2 novembre 2008, que les
              gouvernements ont décidé ce nouveau plan pour compenser les
              trilliards volés aux fonds de pension pour sauver les banques.
            </p>
            <p>
              Et le jeudi 22 mai, vous avec pu voir sur tous les fils, y
              compris, les chaînes d'informations continues (donc une
              information poussée en avant par l'Elysée) que le Danemark est le
              premier pays qui a voté en ce sens, repousser la date du départ à
              la retraite...
            </p>
            <p>
              Notez qu'en parallèle, la France, elle, vote le droit au suicide,
              et 30.000 euros d'amende à ceux qui tenteraient d'empêcher la
              personne qui en ferait la demande !
            </p>
            <p>N'est-ce pas merveilleux ?</p>
            <blockquote className="border-l-4 border-gray-200 pl-4 italic">
              "Le parlement danois a voté : l'âge légal de départ à la retraite
              passera à 68 ans d'ici cinq ans, avant d'atteindre 70 ans à partir
              de 2040, sachant qu'aujourd'hui, il est fixé à 67 ans. Définir
              l'âge de départ en fonction de l'espérance de vie, en prévoyant
              des ajustements, tous les 5 ans ce n'est pas tout à fait nouveau
              pour le Danemark, qui a déjà intégré depuis plusieurs années, ce
              principe du "travailler plus longtemps parce qu'on vit plus
              longtemps". Il n'est pas le seul en Europe, l'Italie, les
              Pays-Bas, ou encore le Portugal prennent en compte aussi ce
              critère de l'espérance de vie dans le pilotage de leur régime"
              (c'est la partie sucrée pour faire passer la pilule amère surtout
              quand vous avez cotisé pendant 40 ans)"
            </blockquote>
          </div>
          <div className="mt-4">
            <Link
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Lire la suite
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </article>

      {/* Second Article */}
      <article ref={el => articlesRef.current[1] = el} className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            LE FMI AVERTIT LA FRANCE SUR SA DETTE - MISE SOUS TUTELLE COMME LA
            GRÈCE
          </h2>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar size={16} className="mr-2" />
            <span>26 au 30 mai 2025</span>
          </div>
          <div className="prose max-w-none">
            <p>
              Chers lecteurs, je vous en parle depuis mes reportages en Grèce et
              à Chypre, et prévenu maintes fois que si rien n'est fait, la
              France finira comme ces deux pays. Avance rapide jusqu'en mai
              2025, voici le premier avertissement du Fonds Monétaire
              International d'une inévitable mise sous tutelle (comme la Grèce
              en 2012).
            </p>
            <p>
              "Des "décisions difficiles" sont nécessaires en France pour
              rétablir les finances publiques, a indiqué ce jeudi 22 mai le FMI,
              mettant en garde contre des hausses d'impôts excessives au
              détriment de la baisse des dépenses publiques."
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Lire la suite
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </article>

      {/* Third Article */}
      <article ref={el => articlesRef.current[2] = el} className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            DARMANIN VEUT SUPPRIMER L'ARGENT LIQUIDE
          </h2>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar size={16} className="mr-2" />
            <span>26 au 30 mai 2025</span>
          </div>
          <div className="prose max-w-none">
            <p>
              Allez, encore une preuve que le gouvernement veut mettre fin à
              l'usage du liquide, comme en Chine. Cette fois, c'est le ministre
              de la Justice qui s'y est collé:
            </p>
            <p>
              "Le ministre a évoqué l'idée d'une suppression de l'argent liquide
              pour lutter contre le narcotrafic, devant une commission d'enquête
              au Sénat, qui mériterait toutefois selon lui "une longue
              discussion" avec les Français, "dans une campagne présidentielle
              par exemple", a-t-il précisé vendredi 23 mai sur RTL."
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Lire la suite
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default Article;
