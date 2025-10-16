import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Configuration des animations réutilisables
export const animations = {
  // Animation de fade in depuis le bas
  fadeInUp: {
    from: {
      opacity: 0,
      y: 60,
    },
    to: {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    },
  },

  // Animation de fade in depuis la gauche
  fadeInLeft: {
    from: {
      opacity: 0,
      x: -60,
    },
    to: {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
    },
  },

  // Animation de fade in depuis la droite
  fadeInRight: {
    from: {
      opacity: 0,
      x: 60,
    },
    to: {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
    },
  },

  // Animation de scale
  scaleIn: {
    from: {
      opacity: 0,
      scale: 0.8,
    },
    to: {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
    },
  },

  // Animation de rotation
  rotateIn: {
    from: {
      opacity: 0,
      rotation: -10,
      scale: 0.9,
    },
    to: {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
    },
  },

  // Animation de slide depuis le haut
  slideDown: {
    from: {
      opacity: 0,
      y: -60,
    },
    to: {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    },
  },
};

// Fonction pour animer un élément au scroll
export const animateOnScroll = (element, animationType = 'fadeInUp', options = {}) => {
  const animation = animations[animationType];
  if (!animation) return;

  const defaultOptions = {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 30%',
      toggleActions: 'play none none reverse',
      ...options.scrollTrigger,
    },
    ...animation.to,
    ...options,
  };

  gsap.fromTo(element, animation.from, defaultOptions);
};

// Fonction pour animer plusieurs éléments avec un stagger
export const staggerAnimation = (elements, animationType = 'fadeInUp', staggerDelay = 0.1, options = {}) => {
  const animation = animations[animationType];
  if (!animation) return;

  gsap.fromTo(
    elements,
    animation.from,
    {
      ...animation.to,
      stagger: staggerDelay,
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        ...options.scrollTrigger,
      },
      ...options,
    }
  );
};

// Animation de parallax pour les images
export const parallaxImage = (element, speed = 0.5) => {
  gsap.to(element, {
    yPercent: 50 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Animation de hover pour les cartes
export const cardHoverAnimation = (card) => {
  const tl = gsap.timeline({ paused: true });

  tl.to(card, {
    y: -10,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    duration: 0.3,
    ease: 'power2.out',
  });

  card.addEventListener('mouseenter', () => tl.play());
  card.addEventListener('mouseleave', () => tl.reverse());
};

// Animation de timeline pour les entrées séquentielles
export const createEntranceTimeline = () => {
  return gsap.timeline({ defaults: { ease: 'power3.out' } });
};

// Animation de texte lettre par lettre
export const splitTextAnimation = (element, options = {}) => {
  const text = element.textContent;
  element.textContent = '';

  const chars = text.split('').map(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    element.appendChild(span);
    return span;
  });

  gsap.fromTo(
    chars,
    {
      opacity: 0,
      y: 20,
      rotationX: -90,
    },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      stagger: 0.03,
      duration: 0.6,
      ease: 'back.out(1.7)',
      ...options,
    }
  );
};

// Animation de compteur (pour les chiffres)
export const counterAnimation = (element, target, duration = 2) => {
  const obj = { value: 0 };

  gsap.to(obj, {
    value: target,
    duration: duration,
    ease: 'power1.inOut',
    onUpdate: () => {
      element.textContent = Math.round(obj.value);
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true,
    },
  });
};

// Animation de reveal avec mask
export const revealAnimation = (element, direction = 'left') => {
  const directions = {
    left: { xPercent: -100 },
    right: { xPercent: 100 },
    top: { yPercent: -100 },
    bottom: { yPercent: 100 },
  };

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: currentColor;
    z-index: 1;
  `;

  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(overlay);

  gsap.to(overlay, {
    ...directions[direction],
    duration: 1.2,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true,
    },
  });
};
