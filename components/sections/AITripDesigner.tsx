"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Compass, Sparkles, Loader2, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

const BUDGET_OPTIONS = ["<50k", "50-150k", "150-300k", "300k+"];
const STYLE_OPTIONS = ["Luxury", "Adventure", "Cultural", "Relaxed", "Backpacker"];

const MOCK_ITINERARY = [
  { day: "01", title: "The Royal Arrival", activities: ["Private airport transfer in vintage car", "Check-in at The Rambagh Palace", "Private dinner at the 1135 AD restaurant"] },
  { day: "02", title: "Ancestral Echoes", activities: ["Sunrise hot air balloon over Amer Fort", "Guided walk through the old city bazaars", "Evening folk music and dance at the desert camp"] },
  { day: "03", title: "The Hidden Jaipur", activities: ["Traditional block printing workshop", "Sunset trek to Nahargarh Fort", "Farewell cocktail at the Bar Palladio"] },
];

export const AITripDesigner = () => {
  const [isDesigning, setIsDesigning] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [destination, setDestination] = useState("");
  const prefersReducedMotion = useReducedMotion();

  const handleDesign = () => {
    setIsDesigning(true);
    setTimeout(() => {
      setIsDesigning(false);
      setHasResult(true);
    }, 2500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-24 bg-onyx text-warmWhite overflow-hidden" aria-label="AI Trip Designer">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-display mb-16 text-center leading-tight"
        >
          Your Dream Trip, <br /> <span className="text-gold italic font-light">Designed by AI</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
          {/* Left Side: Command Panel */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8 md:space-y-10 order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold/60 font-bold block">01. Destination</label>
              <div className="relative border-b border-gold/30 focus-within:border-gold transition-colors duration-300 py-2">
                <input 
                  type="text" 
                  placeholder="Where do you want to go?"
                  className="bg-transparent w-full border-none outline-none text-xl font-display text-warmWhite placeholder:text-warmWhite/20"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  aria-required="true"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold/60 font-bold block">02. Duration</label>
              <div className="relative border-b border-gold/30 focus-within:border-gold transition-colors duration-300 py-2">
                <input 
                  type="number" 
                  min="1" 
                  max="30"
                  placeholder="How many days?"
                  className="bg-transparent w-full border-none outline-none text-xl font-display text-warmWhite placeholder:text-warmWhite/20"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold/60 font-bold block">03. Travel Style</label>
              <div className="relative">
                <select className="bg-transparent w-full border-b border-gold/30 py-2 text-xl font-display outline-none appearance-none cursor-pointer focus:border-gold transition-colors">
                  {STYLE_OPTIONS.map(opt => <option key={opt} value={opt.toLowerCase()} className="bg-onyx text-warmWhite">{opt}</option>)}
                </select>
                <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-gold pointer-events-none" size={16} />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold/60 font-bold block">04. Budget per Person (INR)</label>
              <div className="flex flex-wrap gap-2">
                {BUDGET_OPTIONS.map(opt => (
                  <button 
                    key={opt}
                    className="px-5 py-2.5 rounded-full border border-gold/20 text-[10px] font-bold uppercase tracking-widest hover:border-gold hover:text-gold active:scale-95 transition-all duration-300"
                    aria-label={`Select budget range ${opt}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <Button 
                onClick={handleDesign}
                disabled={isDesigning}
                className="w-full bg-gold text-onyx font-display italic text-xl py-8 rounded-none shadow-[0_20px_40px_rgba(201,169,110,0.15)]"
              >
                {isDesigning ? (
                  <span className="flex items-center gap-3">
                    <Loader2 className="animate-spin" size={20} /> ARCHITECTING...
                  </span>
                ) : (
                  <span className="flex items-center gap-3">
                    DESIGN MY TRIP <Sparkles size={20} />
                  </span>
                )}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side: Visualizer */}
          <div className="lg:col-span-6 h-[500px] md:h-[650px] relative rounded-none border border-gold/10 bg-black/60 backdrop-blur-md overflow-hidden order-1 lg:order-2">
            <AnimatePresence mode="wait">
              {!hasResult && !isDesigning && (
                <motion.div 
                  key="map"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center p-12"
                >
                  <svg viewBox="0 0 800 400" className="w-full h-full opacity-10 fill-gold">
                    {[...Array(20)].map((_, i) => (
                      <circle 
                        key={i} 
                        cx={Math.random() * 600 + 100} 
                        cy={Math.random() * 250 + 50} 
                        r={Math.random() * 2 + 1} 
                        className="animate-pulse fill-gold" 
                        style={{ animationDelay: `${i * 0.3}s` }} 
                      />
                    ))}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-20 h-20 rounded-full border border-gold/20 flex items-center justify-center mb-6 animate-[bounce_3s_infinite]">
                      <Compass className="text-gold/40" size={40} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.6em] text-gold/30 font-bold">System Online • Awaiting Input</span>
                  </div>
                </motion.div>
              )}

              {isDesigning && (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center space-y-8"
                >
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full border-t-2 border-gold animate-spin" />
                    <div className="absolute inset-0 m-auto w-20 h-20 rounded-full border-b-2 border-gold/30 animate-[spin_2s_linear_infinite_reverse]" />
                    <Sparkles className="absolute inset-0 m-auto text-gold animate-pulse" size={32} />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-display text-gold mb-3 italic">Analyzing global patterns...</p>
                    <div className="flex justify-center gap-1.5">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {hasResult && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 p-8 md:p-12 overflow-y-auto no-scrollbar"
                >
                  <div className="flex items-center justify-between mb-10 border-b border-gold/10 pb-8">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-2 block">AI Generated Itinerary</span>
                      <h4 className="text-3xl md:text-4xl font-display text-warmWhite">{destination || "The Himalayan Gateway"}</h4>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-green-500/30 flex items-center justify-center text-green-500">
                      <CheckCircle2 size={24} />
                    </div>
                  </div>

                  <div className="space-y-8">
                    {MOCK_ITINERARY.map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        key={item.day} 
                        className="relative pl-12 group"
                      >
                        <span className="absolute left-0 top-0 text-4xl font-display text-gold/20 group-hover:text-gold/40 transition-colors">{item.day}</span>
                        <h5 className="text-xl font-display text-gold mb-4">{item.title}</h5>
                        <ul className="space-y-3">
                          {item.activities.map((act, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-warmWhite/50 leading-relaxed">
                              <ChevronRight className="text-gold flex-shrink-0 mt-0.5" size={14} /> 
                              {act}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 pt-12 border-t border-gold/10">
                    <Button 
                      onClick={() => window.location.href = '/dashboard'}
                      className="w-full bg-white/5 hover:bg-gold hover:text-onyx border border-white/10 hover:border-gold text-warmWhite transition-all duration-700 py-8 flex items-center justify-center gap-3 group text-xl"
                    >
                      Book This Journey <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
