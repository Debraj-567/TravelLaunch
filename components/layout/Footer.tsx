"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Globe, Heart, MapPin, Send } from 'lucide-react';
import { Button } from '../ui/Button';

const FOOTER_LINKS = {
  destinations: ["India", "Maldives", "Switzerland", "Japan", "Kenya", "Iceland"],
  experiences: ["Luxury Tours", "Adventure", "Spiritual Journeys", "Honeymoons", "Road Trips"],
  company: ["About Us", "Our Story", "Travel Blog", "Careers"],
  support: ["Book Now", "FAQs", "Contact Us", "Privacy Policy"]
};

const FOOTER_COLUMNS = [
  { title: "Destinations", links: FOOTER_LINKS.destinations, href: "/destinations" },
  { title: "Experiences", links: FOOTER_LINKS.experiences, href: "/experiences" },
  { title: "Company", links: FOOTER_LINKS.company, href: "#" },
  { title: "Support", links: FOOTER_LINKS.support, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="overflow-hidden border-t border-onyx/10 bg-white text-onyx">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 py-12 md:py-16"
      >
        <div className="container mx-auto grid items-center gap-8 rounded-lg border border-gold/25 bg-warmWhite px-6 py-10 shadow-[0_22px_70px_rgba(10,10,10,0.06)] md:grid-cols-[1.1fr_auto] md:px-12">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold/70" />
              Plan Your Escape
            </div>
            <h2 className="text-5xl leading-tight text-onyx md:text-6xl">
              The world is waiting.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
              Curated destinations, thoughtful stays, and expert guidance for your next journey.
            </p>
          </div>

          <Button
            size="lg"
            className="w-full rounded-full bg-gold px-10 py-6 text-base font-black uppercase tracking-[0.18em] text-onyx shadow-[0_14px_34px_rgba(201,169,110,0.26)] hover:bg-[#d9bc7e] md:w-auto"
            onClick={() => window.location.href = '/dashboard'}
          >
            Book a Journey
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </Button>
        </div>
      </motion.div>

      <div className="px-6 pb-10">
        <div className="container mx-auto grid gap-12 border-b border-onyx/10 pb-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="/" className="font-display text-4xl font-bold tracking-[0.22em] text-gold">
              TRAVELZADA
            </a>
            <p className="mt-5 max-w-sm text-base leading-7 text-text-muted">
              Premium travel planning for explorers who want every detail handled beautifully.
            </p>
            <div className="mt-6 grid gap-4 text-base text-text-muted">
              <span className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" />
                Global DMC network
              </span>
              <span className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-gold" />
                Custom itineraries, year round
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h4 className="mb-6 text-[13px] font-black uppercase tracking-[0.28em] text-onyx">
                  <a href={column.href} className="hover:text-gold transition-colors">{column.title}</a>
                </h4>
                <ul className="space-y-4">
                  {column.links.map(link => (
                    <li key={link}>
                      <a href={column.href} className="text-base font-body text-text-muted transition-colors hover:text-gold">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-6 text-xs font-bold uppercase tracking-[0.18em] text-text-muted md:flex-row">
            <div className="text-center md:text-left">
              &copy; 2026 TRAVELZADA DMC. ALL RIGHTS RESERVED.
            </div>

            <div className="flex items-center gap-2">
              MADE WITH <Heart className="h-4 w-4 fill-gold text-gold" /> FOR EXPLORERS.
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="rounded-full border border-onyx/10 p-2 transition-colors hover:border-gold hover:text-gold" aria-label="Website">
                <Globe size={16} />
              </a>
              <a href="#" className="rounded-full border border-onyx/10 p-2 transition-colors hover:border-gold hover:text-gold" aria-label="Favorites">
                <Heart size={16} />
              </a>
              <a href="#" className="rounded-full border border-onyx/10 p-2 transition-colors hover:border-gold hover:text-gold" aria-label="Message">
                <Send size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
