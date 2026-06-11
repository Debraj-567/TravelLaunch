"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, Receipt, ShieldCheck } from 'lucide-react';

const TRUST_POINTS = [
  {
    title: "Verified Journeys",
    icon: MapPin,
    desc: "Every itinerary is personally curated and field-tested by our travel experts before we recommend it."
  },
  {
    title: "24/7 On-Ground Support",
    icon: PhoneCall,
    desc: "From missed trains to sudden weather changes, our local team has you covered anywhere in the world."
  },
  {
    title: "Transparent Pricing",
    icon: Receipt,
    desc: "No hidden fees. No surprise charges. Your quote is your price, guaranteed from the moment you book."
  }
];

const CERTIFICATIONS = [
  "IATA Member",
  "Govt. of India Recognized",
  "ISO 9001:2015",
  "TripAdvisor Excellence"
];

export const TrustSection = () => {
  return (
    <section className="py-24 bg-[#FAFAF8] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display text-onyx mb-4">Trusted by Explorers Worldwide</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-20">
          {TRUST_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-8 group-hover:bg-gold transition-colors duration-500">
                <point.icon className="text-gold group-hover:text-onyx transition-colors duration-500" size={28} />
              </div>
              <h3 className="text-2xl font-display text-onyx mb-4">{point.title}</h3>
              <p className="text-textMuted font-body leading-relaxed max-w-xs mx-auto">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-12 border-t border-black/5 flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {CERTIFICATIONS.map((cert) => (
            <div key={cert} className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-gold" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-onyx/40">
                {cert}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
