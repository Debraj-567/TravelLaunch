"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const DESTINATIONS = [
  {
    name: "Rajasthan",
    country: "India",
    region: "ASIA",
    image: "https://images.unsplash.com/photo-1598305363406-8961726a8770?q=80&w=1200",
    description: "The land of kings and desert winds.",
    textOffset: "translate-x-[-15%] translate-y-[-40%]"
  },
  {
    name: "Kyoto",
    country: "Japan",
    region: "ASIA",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200",
    description: "Ancient temples and floating cherry blossoms.",
    textOffset: "translate-x-[25%] translate-y-[20%]"
  },
  {
    name: "Amalfi",
    country: "Italy",
    region: "EUROPE",
    image: "https://images.unsplash.com/photo-1633321088390-d4468f700010?q=80&w=1200",
    description: "Cliffside dreams above the azure sea.",
    textOffset: "translate-x-[-35%] translate-y-[15%]"
  },
  {
    name: "Patagonia",
    country: "Argentina",
    region: "AMERICAS",
    image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=1200",
    description: "Glacial peaks at the end of the world.",
    textOffset: "translate-x-[30%] translate-y-[-50%]"
  },
  {
    name: "Marrakech",
    country: "Morocco",
    region: "AFRICA",
    image: "https://images.unsplash.com/photo-1539020140153-e479b7c2b3df?q=80&w=1200",
    description: "Saffron sunsets in the red city.",
    textOffset: "translate-x-[-25%] translate-y-[35%]"
  },
  {
    name: "Iceland",
    country: "Nordic",
    region: "EUROPE",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1200",
    description: "Fire and ice in the raw northern light.",
    textOffset: "translate-x-[15%] translate-y-[-25%]"
  }
];

const FILTERS = ["ALL", "ASIA", "EUROPE", "AFRICA", "AMERICAS", "OCEANIA"];

export const DestinationsHero = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const mosaicRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(mosaicRef.current, 
        { rotate: -3 },
        { 
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "60px top",
            scrub: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredDestinations = activeFilter === "ALL" 
    ? DESTINATIONS 
    : DESTINATIONS.filter(dest => dest.region === activeFilter);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90svh] w-full flex items-center justify-center overflow-hidden bg-onyx"
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 h-[120%] -top-[10%]"
        >
          <Image 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2400&auto=format&fit=crop"
            alt="Adventure Horizon"
            fill
            priority
            className="object-cover opacity-60"
          />
        </motion.div>
        
        {/* Advanced Gradient Masking */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-transparent to-onyx z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/40 via-transparent to-onyx/40 z-10" />
        
        {/* Mist/Fog Effects for Depth */}
        <div className="absolute inset-0 z-15 pointer-events-none">
          <div className="absolute top-[20%] -left-[10%] w-[140%] h-[30%] bg-white/5 blur-[100px] rotate-[-5deg] animate-pulse" />
          <div className="absolute bottom-[10%] -left-[10%] w-[140%] h-[40%] bg-gold/5 blur-[120px] rotate-[3deg]" />
        </div>
      </div>

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.05] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-20 relative z-30 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="h-px w-12 bg-gold/50" />
            <span className="font-label text-[10px] tracking-[0.4em] text-gold uppercase">
              Curated Destinations
            </span>
            <span className="h-px w-12 bg-gold/50" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display font-[200] text-[8vw] md:text-[6.5vw] leading-[1] text-cream mb-16 drop-shadow-2xl"
          >
            Places that <span className="italic font-light text-gold">resonate</span> <br /> 
            with your soul.
          </motion.h1>

          {/* Premium Filter UI */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20"
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`group relative py-2 px-1 overflow-hidden transition-all duration-500`}
              >
                <span className={`font-label text-[11px] tracking-[0.25em] uppercase transition-colors duration-500 ${
                  activeFilter === filter ? "text-gold" : "text-cream/40 group-hover:text-cream"
                }`}>
                  {filter}
                </span>
                <span className={`absolute bottom-0 left-0 h-[1px] bg-gold transition-all duration-500 ${
                  activeFilter === filter ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </button>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Mosaic Grid */}
        <div 
          ref={mosaicRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.7, 
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2rem] cursor-pointer bg-onyx/40 backdrop-blur-sm border border-white/5"
              >
                {/* Image Layer with Hover Zoom */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent opacity-80 z-10" />
                </div>

                {/* Floating Meta Info */}
                <div className="absolute top-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center backdrop-blur-md">
                    <span className="text-gold text-[10px] font-bold">EXPLORE</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                  <div className="overflow-hidden">
                    <motion.div 
                      className="font-label text-[10px] text-gold tracking-[0.3em] mb-4 uppercase"
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                    >
                      {dest.region}
                    </motion.div>
                  </div>
                  
                  <h3 className="font-display text-[2.8rem] md:text-[3.2rem] text-cream leading-[0.9] mb-4 tracking-tight">
                    {dest.name}
                  </h3>
                  
                  <p className="font-body text-[14px] text-cream/60 max-w-[90%] leading-relaxed h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-premium">
                    {dest.description}
                  </p>
                </div>

                {/* Ambient Glow on Hover */}
                <div className="absolute inset-0 border-[1px] border-gold/0 group-hover:border-gold/20 rounded-[2rem] transition-all duration-500 z-30 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
