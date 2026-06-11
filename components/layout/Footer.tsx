"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Send, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const FOOTER_LINKS = {
  destinations: ["India", "Maldives", "Switzerland", "Japan", "Kenya", "Iceland", "Indonesia", "France"],
  experiences: ["Luxury Tours", "Adventure", "Spiritual Journeys", "Honeymoons", "Road Trips", "Solo Travel"],
  company: ["About Us", "Our Story", "Travel Blog", "Careers", "Press", "Sustainability"],
  support: ["Book Now", "FAQs", "Contact Us", "Emergency Line", "Terms of Service", "Privacy Policy"]
};

export const Footer = () => {
  return (
    <footer className="bg-onyx text-warmWhite overflow-hidden">
      {/* Top Section: Editorial Statement */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="py-32 px-6 text-center border-b border-white/5"
      >
        <div className="container mx-auto">
          <h2 className="text-6xl md:text-8xl lg:text-[100px] font-display mb-8 leading-none">
            The World <br /> Is Waiting.
          </h2>
          <p className="text-lg md:text-xl font-body text-warmWhite/60 mb-12 max-w-xl mx-auto italic">
            Let's find your next adventure.
          </p>
          <Button 
            size="lg"
            className="bg-gold text-onyx rounded-full px-12 py-6 text-xl font-display italic group"
            onClick={() => window.location.href = '/dashboard'}
          >
            Book a Journey 
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </motion.div>

      {/* Middle Section: Links Grid */}
      <div className="py-24 px-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Destinations</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.destinations.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm font-body text-warmWhite/40 hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Experiences</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.experiences.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm font-body text-warmWhite/40 hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Company</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm font-body text-warmWhite/40 hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Support</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.support.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm font-body text-warmWhite/40 hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 pb-12">
        <div className="container mx-auto">
          <div className="h-[1px] w-full bg-gold/20 mb-12" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-warmWhite/20">
            <div className="text-center md:text-left">
              © 2026 TRAVELZADA DMC. ALL RIGHTS RESERVED.
            </div>
            
            <div className="flex items-center gap-2 italic">
              MADE WITH <span className="text-gold">♥</span> FOR EXPLORERS.
            </div>

            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-gold transition-colors"><Globe size={18} aria-label="Instagram" /></a>
              <a href="#" className="hover:text-gold transition-colors"><Heart size={18} aria-label="Facebook" /></a>
              <a href="#" className="hover:text-gold transition-colors"><Send size={18} aria-label="Youtube" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
