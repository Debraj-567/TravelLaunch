"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { ExperiencesHero } from '../../components/sections/ExperiencesHero';

export default function ExperiencesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-warm-white selection:bg-gold/30 selection:text-onyx"
    >
      <Navbar />
      
      <main>
        <ExperiencesHero />
        
        {/* Secondary Section to provide context */}
        <section className="py-32 bg-warm-white border-t border-onyx/5">
          <div className="container mx-auto px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-display text-5xl md:text-6xl text-onyx mb-8">
                  Tailored to your <br /> <span className="italic font-light text-gold">current frequency.</span>
                </h2>
                <p className="font-body text-text-muted text-lg max-w-md leading-relaxed">
                  We don't believe in generic itineraries. We believe in resonance. Every experience we curate is a reflection of your state of mind.
                </p>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                 <Image 
                  src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1200&auto=format&fit=crop"
                  alt="Curated Experience"
                  fill
                  className="object-cover"
                 />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}
