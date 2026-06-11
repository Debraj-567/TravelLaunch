"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';

// Layout Components
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

// Static Sections (Low risk)
import { Hero } from '../components/sections/Hero';
import { ExploreByFeeling } from '../components/sections/ExploreByFeeling';
import { DestinationStories } from '../components/sections/DestinationStories';
import { TrustSection } from '../components/sections/TrustSection';

// Dynamic Sections (Higher risk or heavy libraries)
const ExperienceShowcase = dynamic(() => import('../components/sections/ExperienceShowcase').then(mod => mod.ExperienceShowcase), { ssr: false });
const TravelTimeline = dynamic(() => import('../components/sections/TravelTimeline').then(mod => mod.TravelTimeline), { ssr: false });
const AITripDesigner = dynamic(() => import('../components/sections/AITripDesigner').then(mod => mod.AITripDesigner), { ssr: false });
const WorldMap = dynamic(() => import('../components/sections/WorldMap').then(mod => mod.WorldMap), { ssr: false });
const CommunityStories = dynamic(() => import('../components/sections/CommunityStories').then(mod => mod.CommunityStories), { ssr: false });

// UI Components
import { FloatingCTA } from '../components/ui/FloatingCTA';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarketingPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative selection:bg-gold selection:text-onyx"
    >
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="feelings">
          <ExploreByFeeling />
        </section>

        <section id="stories">
          <DestinationStories />
        </section>

        <section id="experiences">
          <ExperienceShowcase />
        </section>

        <section id="itinerary">
          <TravelTimeline />
        </section>

        <section id="ai-designer">
          <AITripDesigner />
        </section>

        <section id="destinations">
          <WorldMap />
        </section>

        <section id="community">
          <CommunityStories />
        </section>

        <section id="trust">
          <TrustSection />
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </motion.div>
  );
}
