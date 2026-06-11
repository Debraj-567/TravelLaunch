"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const NAV_LINKS = [
  { name: 'Destinations', href: '#' },
  { name: 'Experiences', href: '#' },
  { name: 'Stories', href: '#' },
  { name: 'About', href: '#' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-premium ${
          isScrolled 
            ? 'py-3 bg-white/92 backdrop-blur-xl border-b border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)]' 
            : 'py-5 bg-black/24 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Left: Brand */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className={`text-2xl md:text-3xl font-display tracking-[0.22em] text-gold font-bold drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] transition-all duration-300 ${
                isScrolled ? 'drop-shadow-none' : ''
              }`}
            >
              TRAVELZADA
            </a>
          </div>

          {/* Center: Links (Desktop) */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm uppercase tracking-[0.18em] font-body font-bold transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? 'text-onyx/82 hover:text-gold' : 'text-white/88 hover:text-gold'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="hidden md:flex rounded-full border border-gold bg-gold px-8 py-3 text-sm font-black uppercase tracking-[0.18em] text-onyx shadow-[0_12px_34px_rgba(201,169,110,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9bc7e] hover:shadow-[0_16px_42px_rgba(201,169,110,0.48)]"
              onClick={() => window.location.href = '/dashboard'}
            >
              Book Now
            </Button>
            
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className={isScrolled ? 'text-onyx' : 'text-warmWhite'} size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-onyx flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-display tracking-widest text-gold">TRAVELZADA</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="text-warmWhite" size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-display text-warmWhite hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pb-12">
              <Button
                className="w-full bg-gold text-onyx rounded-full py-6 text-xl font-display italic"
                onClick={() => window.location.href = '/dashboard'}
              >
                Book Your Journey
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
