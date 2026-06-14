"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PARTNERS = [
  "IndiGo", "Air India", "Vistara", "SpiceJet", "Emirates", "Qatar Airways",
  "Taj Hotels", "Marriott", "Hilton", "Hyatt", "ITC Hotels", "Radisson",
  "Visa", "Mastercard", "American Express", "UPI", "PayPal", "Stripe"
];

export const PartnerLogos = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-8 text-center">
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Trusted by leading travel partners worldwide</p>
      </div>

      <div className="flex gap-12 overflow-hidden py-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-20 whitespace-nowrap"
        >
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
            <span key={i} className="text-2xl font-bold text-slate-400 hover:text-blue-600 transition-colors cursor-default">
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
