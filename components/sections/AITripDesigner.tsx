"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Compass, Sparkles, Loader2, CheckCircle2, ChevronRight, Send } from 'lucide-react';
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

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-24 bg-warmWhite text-onyx overflow-hidden relative" aria-label="AI Trip Designer">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10C50 10 50 50 90 50S130 90 170 90' stroke='%23C9A96E' fill='none' stroke-width='2'/%3E%3Cpath d='M30 150C70 150 70 110 110 110S150 70 190 70' stroke='%23C9A96E' fill='none' stroke-width='2'/%3E%3C/svg%3E")` }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-display mb-16 text-center leading-tight tracking-tight"
        >
          Your Dream Trip, <br /> <span className="text-gold italic font-light">Architected by Intelligence</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-20 items-stretch">
          {/* Left Side: Command Panel */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-10 order-2 lg:order-1 flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="text-[11px] uppercase tracking-[0.4em] text-gold font-black block">01. Destination</label>
              <div className="relative border-b-2 border-gold/20 focus-within:border-gold transition-all duration-500 py-3 group">
                <input 
                  type="text" 
                  placeholder="Where do you want to go?"
                  className="bg-transparent w-full border-none outline-none text-2xl font-display text-onyx placeholder:text-onyx/20"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  aria-required="true"
                />
                <div className="absolute bottom-0 left-0 h-0.5 bg-gold w-0 group-focus-within:w-full transition-all duration-700" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <label className="text-[11px] uppercase tracking-[0.4em] text-gold font-black block">02. Duration</label>
              <div className="relative border-b-2 border-gold/20 focus-within:border-gold transition-all duration-500 py-3 group">
                <input 
                  type="number" 
                  min="1" 
                  max="30"
                  placeholder="How many days?"
                  className="bg-transparent w-full border-none outline-none text-2xl font-display text-onyx placeholder:text-onyx/20"
                />
                <div className="absolute bottom-0 left-0 h-0.5 bg-gold w-0 group-focus-within:w-full transition-all duration-700" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5">
              <label className="text-[11px] uppercase tracking-[0.4em] text-gold font-black block">03. Travel Style</label>
              <div className="relative">
                <select className="bg-transparent w-full border-b-2 border-gold/20 py-3 text-2xl font-display outline-none appearance-none cursor-pointer focus:border-gold transition-all duration-500 text-onyx">
                  {STYLE_OPTIONS.map(opt => <option key={opt} value={opt.toLowerCase()} className="bg-warmWhite text-onyx">{opt}</option>)}
                </select>
                <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-gold pointer-events-none" size={20} />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5">
              <label className="text-[11px] uppercase tracking-[0.4em] text-gold font-black block">04. Budget per Person (INR)</label>
              <div className="flex flex-wrap gap-3">
                {BUDGET_OPTIONS.map(opt => (
                  <button 
                    key={opt}
                    className="px-6 py-3 rounded-full border-2 border-gold/10 text-[11px] font-black uppercase tracking-[0.2em] hover:border-gold hover:text-gold hover:bg-gold/5 active:scale-95 transition-all duration-500"
                    aria-label={`Select budget range ${opt}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <Button 
                onClick={handleDesign}
                disabled={isDesigning}
                className="w-full bg-gold text-onyx font-display italic text-2xl py-10 rounded-2xl shadow-[0_20px_50px_rgba(201,169,110,0.3)] hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(201,169,110,0.45)] transition-all duration-500 relative overflow-hidden group"
              >
                {/* Golden Animated Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                
                {isDesigning ? (
                  <span className="flex items-center gap-4 relative z-10">
                    <Loader2 className="animate-spin" size={24} /> GENESIS IN PROGRESS...
                  </span>
                ) : (
                  <span className="flex items-center gap-4 relative z-10">
                    DESIGN MY JOURNEY <Sparkles size={24} />
                  </span>
                )}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side: Visualizer */}
          <div className="lg:col-span-6 h-[550px] md:h-[700px] relative rounded-[40px] border border-gold/20 bg-white shadow-[0_40px_100px_rgba(201,169,110,0.12)] overflow-hidden order-1 lg:order-2">
            {/* Topographic Background Overlay */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/topography.png")` }} />
            
            <AnimatePresence mode="wait">
              {!hasResult && !isDesigning && (
                <motion.div 
                  key="map"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center p-12"
                >
                  {/* Decorative Travel Motifs */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                     <motion.div 
                        animate={{ 
                          x: [0, 100, 0], 
                          y: [0, -50, 0],
                          rotate: [45, 45, 45]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-10 -left-10 opacity-[0.05]"
                     >
                        <Send size={200} className="text-gold" />
                     </motion.div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-8">
                    <div className="relative">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="w-48 h-48 rounded-full border border-dashed border-gold/30 flex items-center justify-center"
                      >
                        <Compass className="text-gold/20" size={80} />
                      </motion.div>
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                         <div className="w-4 h-4 bg-gold rounded-full shadow-[0_0_20px_rgba(201,169,110,0.5)]" />
                      </motion.div>
                    </div>
                    <div>
                      <span className="text-[12px] uppercase tracking-[0.8em] text-gold font-black block mb-4">Discovery Engine Active</span>
                      <p className="text-onyx/30 font-display italic text-lg">Awaiting your coordinates to begin the synthesis</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {isDesigning && (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center space-y-12"
                >
                  <div className="relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-36 h-36 rounded-full border-t-4 border-gold" 
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 m-auto w-24 h-24 rounded-full border-b-4 border-onyx/10" 
                    />
                    <Sparkles className="absolute inset-0 m-auto text-gold animate-pulse" size={40} />
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-display text-onyx mb-4 italic">Mapping possibilities...</p>
                    <div className="flex justify-center gap-3">
                      {[...Array(3)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                          className="w-2.5 h-2.5 bg-gold rounded-full" 
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {hasResult && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 p-10 md:p-16 overflow-y-auto no-scrollbar bg-warmWhite/80 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-12 border-b-2 border-gold/10 pb-10">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.5em] text-gold font-black mb-3 block">Your Personalized Atlas</span>
                      <h4 className="text-4xl md:text-5xl font-display text-onyx">{destination || "The Himalayan Gateway"}</h4>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-600">
                      <CheckCircle2 size={32} />
                    </div>
                  </div>

                  <div className="space-y-12">
                    {MOCK_ITINERARY.map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        key={item.day} 
                        className="relative pl-16 group"
                      >
                        <span className="absolute left-0 top-0 text-5xl font-display text-gold/10 group-hover:text-gold/30 transition-all duration-500 leading-none">{item.day}</span>
                        <h5 className="text-2xl font-display text-gold mb-5 italic tracking-wide">{item.title}</h5>
                        <ul className="space-y-4">
                          {item.activities.map((act, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-base text-onyx/60 leading-relaxed font-body">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                              {act}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-16 pt-12">
                    <Button 
                      onClick={() => window.location.href = '/dashboard'}
                      className="w-full bg-gold text-onyx hover:scale-[1.02] transition-all duration-700 py-10 rounded-2xl flex items-center justify-center gap-4 group text-2xl font-display italic shadow-[0_20px_50px_rgba(201,169,110,0.3)] hover:shadow-[0_25px_60px_rgba(201,169,110,0.45)] relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                      <span className="relative z-10 flex items-center gap-4">
                        Commence This Journey <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                      </span>
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
