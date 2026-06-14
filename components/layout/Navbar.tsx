"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, HelpCircle, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

const NAV_LINKS = [
  { name: 'Flights', href: '/flights' },
  { name: 'Hotels', href: '/hotels' },
  { name: 'Packages', href: '/packages' },
  { name: 'Visa', href: '/visa' },
  { name: 'Experiences', href: '/experiences' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center gap-12">
            <Link 
              href="/" 
              className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
            >
              TRAVELZADA
            </Link>

            {/* Center: Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 mr-2">
              <Link href="/support" className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>
                <HelpCircle size={18} />
                Support
              </Link>
              <Link href="/login" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>
                Login
              </Link>
            </div>
            
            <Button
              size="sm"
              className={`hidden md:flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold transition-all shadow-lg hover:scale-105 active:scale-95 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200' 
                  : 'bg-white text-blue-600 hover:bg-slate-50 shadow-black/10'
              }`}
              onClick={() => window.location.href = '/dashboard'}
            >
              Book Now
            </Button>

            <Link 
              href="/signup"
              className={`p-2 rounded-full border transition-all ${isScrolled ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/10'}`}
              title="Sign Up"
            >
              <User size={20} />
            </Link>
            
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} size={24} />
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
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <span className="text-xl font-bold text-blue-600">TRAVELZADA</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-slate-900">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <Link href="/support" className="text-lg font-semibold text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
              <Link href="/login" className="text-lg font-semibold text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            </div>

            <div className="mt-auto p-6 bg-slate-50">
              <Button
                className="w-full bg-blue-600 text-white rounded-xl py-4 text-lg font-bold shadow-lg"
                onClick={() => window.location.href = '/dashboard'}
              >
                Go to Dashboard
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

