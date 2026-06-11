"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin } from 'lucide-react';
import { ResilientImage } from '../ui/ResilientImage';

const EXPERIENCES = [
  {
    title: "Northern Lights",
    location: "Iceland",
    image: "https://images.unsplash.com/photo-1531366930499-81d59e205fb2?auto=format&fit=crop&q=80&w=800",
    desc: "A celestial dance of colors in the Arctic sky, where the night comes alive with emerald waves."
  },
  {
    title: "Cherry Blossoms",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    desc: "The transient beauty of Sakura season, where cities turn pink and the air smells of spring."
  },
  {
    title: "Safari Sunrise",
    location: "Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
    desc: "Witness the majestic wildlife of the Maasai Mara waking up to a golden African dawn."
  },
  {
    title: "Swiss Alps Skiing",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800",
    desc: "Carve through pristine powder on the world's most legendary peaks, followed by fireside luxury."
  },
  {
    title: "Bali Rice Terraces",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800",
    desc: "The emerald heart of Bali, where ancient farming traditions meet tropical tranquility."
  },
  {
    title: "Maldives Villa",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800",
    desc: "Pure isolation in an overwater sanctuary, surrounded by nothing but turquoise clarity."
  }
];

export const ExperienceShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 400 : scrollLeft + 400;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#080806] py-24 text-[#FAFAF8]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/60 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[#C9A96E]" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A96E]">
                Signature Experiences
              </p>
            </div>
            <h2 className="text-4xl font-display leading-[1.05] text-white sm:text-5xl lg:text-7xl">
              Experiences Worth Every Mile
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/62 md:text-lg">
              Cinematic journeys, rare stays, and once-in-a-lifetime moments selected for travelers who want the story to feel as good as the destination.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white shadow-[0_14px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#080806] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]"
              aria-label="Previous experiences"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white shadow-[0_14px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#080806] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]"
              aria-label="Next experiences"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 scrollbar-hide no-scrollbar md:gap-6 md:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative h-[520px] w-[82vw] max-w-[430px] flex-none snap-start overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-[0_26px_80px_rgba(0,0,0,0.4)] sm:w-[390px] lg:w-[420px]"
          >
            <ResilientImage
              src={exp.image} 
              alt={exp.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-black/5 transition-opacity duration-500 group-hover:opacity-95" />
            <div className="absolute inset-x-5 top-5 z-20 flex items-center justify-between">
              <span className="rounded-full border border-white/20 bg-black/35 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#080806] shadow-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={18} />
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-white/78">
                <MapPin size={16} className="text-[#C9A96E]" />
                <span>{exp.location}</span>
              </div>

              <h3 className="mb-4 text-4xl font-display leading-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
                {exp.title}
              </h3>

              <p className="max-w-sm text-sm leading-6 text-white/76">
                {exp.desc}
              </p>

              <div className="mt-7 inline-flex items-center gap-3 border-b border-[#C9A96E]/70 pb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                View Experience
                <ArrowUpRight size={15} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
