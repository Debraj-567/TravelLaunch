"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const EXPERIENCES = [
  { 
    code: "ADV", 
    name: "Adventure", 
    desc: "Adrenaline at altitude",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=1200&auto=format&fit=crop",
    location: "Bir Billing, India",
    story: "The air in the Himalayas is different. As I jumped from the ledge, the world went silent. It wasn't just flight; it was absolute freedom. The ground felt like a distant memory, and for ten minutes, I was the wind."
  },
  { 
    code: "ROM", 
    name: "Romantic", 
    desc: "For two, forever",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1200&auto=format&fit=crop",
    location: "Santorini, Greece",
    story: "Watching the sun dip below the Oia horizon, we realized travel isn't about the destination, but who you're holding hands with when you get there. The white-washed walls glowed in a way no camera could ever capture."
  },
  { 
    code: "SPI", 
    name: "Spiritual", 
    desc: "Find your center",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    location: "Kyoto, Japan",
    story: "In the bamboo groves of Arashiyama, the only sound is the rhythmic creaking of the stalks. I didn't find God, but I found a silence within myself that I hadn't heard in years. It was a homecoming."
  },
  { 
    code: "LUX", 
    name: "Luxury", 
    desc: "The art of excess",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    location: "Lake Como, Italy",
    story: "Silk sheets, a private speed-boat at dawn, and espresso served on a marble balcony. Here, 'luxury' isn't a price tag—it's the feeling that time has been paused just for you. Every detail was a masterpiece."
  },
  { 
    code: "NAT", name: "Nature", desc: "Rewild yourself",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
    location: "Banff, Canada",
    story: "The water of Lake Louise is a blue so impossible it looks painted. Standing at the water's edge, you feel small in the best way possible. Nature doesn't care about your emails. It just exists, beautifully."
  },
  { 
    code: "RDT", name: "Road Trips", desc: "No destination needed",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    location: "Route 66, USA",
    story: "Windows down, the smell of desert sage and old asphalt, and a playlist that never ends. There's a specific kind of magic in getting lost on purpose. The best parts were the stops we didn't plan."
  },
  { 
    code: "SOL", name: "Solo", desc: "Your pace, your rules",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    location: "Reykjavik, Iceland",
    story: "Traveling alone taught me that I'm my own best company. Standing under the Aurora Borealis by myself, I wasn't lonely. I was whole. I made decisions based on my own heartbeat, for once."
  },
  { 
    code: "HGM", name: "Hidden Gems", desc: "Off every map",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    location: "Uluwatu, Bali",
    story: "We followed a dirt path that didn't appear on Google Maps. It led to a limestone cove where the locals were surfing a break with no name. It felt like we'd stepped into a secret version of the world."
  },
];

export const ExperiencesHero = () => {
  const [activeExp, setActiveExp] = useState<string | null>("ADV");

  return (
    <section className="relative min-h-screen w-full flex flex-col bg-warm-white pt-32 pb-20 overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.04]" />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Column: Fixed Header */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-40 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-label text-[10px] tracking-[0.5em] text-gold mb-10 uppercase font-bold flex items-center gap-4"
            >
              <span className="w-8 h-px bg-gold" />
              THE MOOD SELECTOR
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display font-[200] text-[10vw] lg:text-[5vw] leading-[1] text-onyx mb-10"
            >
              How do you <br /> 
              <span className="italic font-light text-gold">want to feel?</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-body text-[16px] text-text-muted max-w-sm leading-relaxed mb-12"
            >
              Choose a frequency. Below are the footprints of those who have walked these paths before you.
            </motion.p>

            <div className="hidden lg:block">
              <div className="p-8 border border-gold/10 rounded-2xl bg-onyx/[0.02]">
                 <div className="font-label text-[9px] text-gold/40 uppercase tracking-widest mb-4">Current Selection</div>
                 <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeExp}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="font-display text-3xl text-onyx italic"
                    >
                      {EXPERIENCES.find(e => e.code === activeExp)?.name}
                    </motion.div>
                 </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="w-full lg:w-[65%] flex flex-col">
            {EXPERIENCES.map((exp, i) => {
              const isActive = activeExp === exp.code;
              return (
                <div
                  key={exp.code}
                  className={`group border-b border-onyx/5 transition-all duration-700 ease-premium ${isActive ? "py-12" : "py-6"}`}
                  onMouseEnter={() => setActiveExp(exp.code)}
                >
                  {/* Header Row */}
                  <div className="flex items-center gap-8 md:gap-12 cursor-pointer relative z-10">
                    <div className="font-label text-[11px] text-gold font-bold w-12 flex-shrink-0">
                      {exp.code}
                    </div>
                    <div className="flex-grow">
                      <h3 className={`font-display text-3xl md:text-5xl transition-all duration-500 ${isActive ? "text-onyx" : "text-onyx/20 group-hover:text-onyx/50"}`}>
                        {exp.name}
                      </h3>
                    </div>
                    <div className={`font-body text-[13px] text-text-muted transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                      {exp.location}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 pt-12">
                          {/* Image Reveal */}
                          <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
                          >
                            <Image 
                              src={exp.image}
                              alt={exp.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white font-label text-[10px] tracking-widest uppercase">
                              Verified Experience
                            </div>
                          </motion.div>

                          {/* Story Text */}
                          <div className="flex flex-col justify-center">
                            <div className="font-display italic text-2xl text-gold mb-6 leading-relaxed">
                              "{exp.story}"
                            </div>
                            <div className="h-px w-12 bg-onyx/10 mb-6" />
                            <div className="flex items-center gap-4">
                               <button className="px-8 py-3 bg-onyx text-warm-white rounded-full font-label text-[10px] tracking-widest uppercase hover:bg-gold hover:text-onyx transition-all duration-300">
                                 Explore Itinerary
                               </button>
                               <span className="font-body text-[11px] text-text-muted">Avg. Stay: 7-10 Days</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
