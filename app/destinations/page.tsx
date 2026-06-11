"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { DestinationsHero } from '../../components/sections/DestinationsHero';

export default function DestinationsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-onyx selection:bg-gold selection:text-onyx"
    >
      <Navbar />
      
      <main>
        <DestinationsHero />
        
        {/* Placeholder for other sections */}
        <section className="py-32 bg-onyx flex items-center justify-center border-t border-white/5">
           <p className="font-display italic text-cream/20 text-4xl text-center px-6 tracking-wide">
             Discovering more horizons... <br /> 
             <span className="text-[12px] font-label tracking-[0.5em] uppercase mt-4 block text-gold/40">Coming Soon</span>
           </p>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}
