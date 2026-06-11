"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[90]"
        >
          <Link href="/dashboard" className="group relative flex items-center gap-3">
            <motion.div 
              animate={{ boxShadow: ["0 0 0 0px rgba(201,169,110,0.4)", "0 0 0 20px rgba(201,169,110,0)"] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-onyx shadow-2xl transition-transform group-hover:rotate-12"
            >
              <Calendar size={24} />
            </motion.div>
            
            <div className="bg-onyx text-warmWhite px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 absolute right-full mr-4 whitespace-nowrap border border-gold/20 backdrop-blur-md">
              Book Your Journey
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
