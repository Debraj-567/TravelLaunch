"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Button } from '../ui/Button';
import Image from 'next/image';
import { useMediaQuery } from '../../hooks/useMediaQuery';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PARTICLES = [
  { width: 3, left: 12, top: 18, duration: 16, delay: 0 },
  { width: 5, left: 28, top: 64, duration: 19, delay: 2.5 },
  { width: 4, left: 47, top: 24, duration: 14, delay: 1.2 },
  { width: 2, left: 68, top: 72, duration: 18, delay: 3.5 },
  { width: 4, left: 82, top: 32, duration: 17, delay: 0.8 },
  { width: 3, left: 91, top: 58, duration: 21, delay: 4.1 },
];

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const journeyLayerRef = useRef<HTMLDivElement>(null);
  const routePathRef = useRef<SVGPathElement>(null);
  const routeGlowRef = useRef<SVGPathElement>(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.to(videoContainerRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }

      const routePaths = [routePathRef.current, routeGlowRef.current].filter(Boolean) as SVGPathElement[];

      routePaths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.fromTo(
        journeyLayerRef.current,
        { opacity: 0.16, y: prefersReducedMotion ? 0 : 18 },
        {
          opacity: 0.92,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "15% top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-onyx"
      aria-label="Welcome to Travelzada"
    >
      {/* Background Image */}
      <div ref={videoContainerRef} className="absolute inset-x-0 -top-[6%] bottom-[-10%] z-0">
        <Image
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=85&w=2400"
          alt="Cinematic alpine lake and mountain landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/28 to-black/72 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.34)_72%)] z-10" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="mist mist-one" />
        <div className="mist mist-two" />
        <div className="mist mist-three" />
      </div>

      <div
        ref={journeyLayerRef}
        className="absolute inset-x-0 bottom-0 z-10 h-[54%] pointer-events-none opacity-20"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 520"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="routeGold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C9A96E" stopOpacity="0" />
              <stop offset="18%" stopColor="#C9A96E" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#F5D99B" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="mapFade" cx="50%" cy="55%" r="70%">
              <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0" />
              <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0.68" />
            </radialGradient>
          </defs>

          <rect width="1440" height="520" fill="url(#mapFade)" />
          <g opacity="0.18" stroke="#F8E7BE" strokeWidth="1" fill="none">
            <path d="M0 418 C 180 360 270 450 420 390 S 690 260 870 306 S 1160 450 1440 330" />
            <path d="M0 330 C 160 290 250 318 390 280 S 660 154 850 206 S 1130 336 1440 248" />
            <path d="M0 236 C 172 198 316 210 450 168 S 708 100 900 146 S 1190 238 1440 172" />
            <path d="M0 142 C 160 118 330 122 520 96 S 850 52 1040 94 S 1250 132 1440 86" />
          </g>
          <g opacity="0.14" stroke="#FFFFFF" strokeWidth="1" fill="none">
            <path d="M120 520 V80" />
            <path d="M360 520 V52" />
            <path d="M600 520 V78" />
            <path d="M840 520 V48" />
            <path d="M1080 520 V88" />
            <path d="M1320 520 V60" />
          </g>

          <path
            ref={routeGlowRef}
            d="M118 394 C 276 310 374 424 514 318 C 662 206 788 234 918 172 C 1070 100 1190 142 1324 82"
            fill="none"
            stroke="#C9A96E"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.18"
            filter="blur(8px)"
          />
          <path
            ref={routePathRef}
            d="M118 394 C 276 310 374 424 514 318 C 662 206 788 234 918 172 C 1070 100 1190 142 1324 82"
            fill="none"
            stroke="url(#routeGold)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <g fill="#C9A96E" stroke="#0A0A0A" strokeWidth="8">
            <circle cx="118" cy="394" r="7" />
            <circle cx="514" cy="318" r="7" />
            <circle cx="918" cy="172" r="7" />
            <circle cx="1324" cy="82" r="7" />
          </g>
          <g fill="#F8E7BE" fontFamily="DM Sans, sans-serif" fontSize="20" letterSpacing="5" opacity="0.78">
            <text x="84" y="432">ORIGIN</text>
            <text x="1260" y="124">NEXT</text>
          </g>
        </svg>
      </div>

      {/* Floating Particles (Desktop Only) */}
      {isDesktop && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {PARTICLES.map((particle, i) => (
            <div
              key={i}
              className="absolute bg-white/40 rounded-full blur-[1px]"
              style={{
                width: `${particle.width}px`,
                height: `${particle.width}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float-up ${particle.duration}s linear infinite`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        <motion.div
          variants={itemVariants}
          className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-gold/90"
        >
          <span className="h-px w-10 bg-gold/60" />
          Journey Starts Here
          <span className="h-px w-10 bg-gold/60" />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-[52px] md:text-8xl lg:text-[100px] font-display text-white leading-[1] mb-8 [text-shadow:0_4px_28px_rgba(0,0,0,0.9),0_1px_2px_rgba(0,0,0,0.8)]"
        >
          Discover Places <br className="hidden md:block" /> 
          <span className="italic font-light text-gold">That Change You</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-base md:text-xl font-body text-white mb-12 max-w-2xl mx-auto tracking-wide [text-shadow:0_3px_18px_rgba(0,0,0,0.9),0_1px_2px_rgba(0,0,0,0.8)]"
        >
          Curated journeys. Expert guides. Memories that last.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button 
            className="bg-gold hover:bg-gold/90 text-onyx border-none rounded-full px-12 w-full sm:w-auto"
            size="lg"
            aria-label="Explore our curated destinations"
          >
            Explore Destinations
          </Button>
          <Button 
            className="bg-gold hover:bg-gold/90 text-onyx border-none rounded-full px-12 w-full sm:w-auto shadow-[0_18px_45px_rgba(201,169,110,0.26)]"
            size="lg"
            onClick={() => window.location.href = '/dashboard'}
            aria-label="Book a journey via our dashboard"
          >
            Book a Journey
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-warmWhite/50 text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-warmWhite/50 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-4 bg-gold shadow-[0_0_10px_rgba(201,169,110,0.5)]"
          />
        </div>
      </div>

      <style jsx>{`
        .mist {
          position: absolute;
          left: -18%;
          width: 136%;
          height: 22%;
          background:
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.08) 70%, transparent 100%);
          filter: blur(24px);
          transform: rotate(-6deg);
          opacity: 0.46;
        }

        .mist-one {
          top: 28%;
          animation: mist-drift 24s ease-in-out infinite alternate;
        }

        .mist-two {
          top: 47%;
          height: 18%;
          opacity: 0.32;
          animation: mist-drift 30s ease-in-out infinite alternate-reverse;
        }

        .mist-three {
          top: 66%;
          height: 16%;
          opacity: 0.24;
          animation: mist-drift 36s ease-in-out infinite alternate;
        }

        @keyframes mist-drift {
          from { transform: translateX(-4%) rotate(-6deg); }
          to { transform: translateX(6%) rotate(-3deg); }
        }

        @keyframes float-up {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
