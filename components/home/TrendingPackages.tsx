"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PACKAGES = [
  {
    title: "Beach Escapes",
    description: "Relax on pristine white sands with crystal clear waters.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    size: "large",
    tag: "Relaxation"
  },
  {
    title: "Adventure Awaits",
    description: "Trek through the highest peaks and deepest valleys.",
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=800",
    size: "medium",
    tag: "Adventure"
  },
  {
    title: "Luxury Retreats",
    description: "Experience the finest stays and premium services.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    size: "small",
    tag: "Premium"
  },
  {
    title: "Family Holidays",
    description: "Create unforgettable memories with your loved ones.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800",
    size: "small",
    tag: "Family"
  },
  {
    title: "Weekend Getaways",
    description: "Quick escapes to recharge for the week ahead.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
    size: "medium",
    tag: "Short Trip"
  }
];

export const TrendingPackages = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Trending Packages</h2>
          <p className="text-slate-600 text-lg">Curated collections for every type of traveler</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          {/* Large Card */}
          <BentoCard 
            pkg={PACKAGES[0]} 
            className="md:col-span-2 md:row-span-2"
          />
          
          {/* Medium Card */}
          <BentoCard 
            pkg={PACKAGES[1]} 
            className="md:col-span-2 md:row-span-1"
          />
          
          {/* Small Cards */}
          <BentoCard 
            pkg={PACKAGES[2]} 
            className="md:col-span-1 md:row-span-1"
          />
          <BentoCard 
            pkg={PACKAGES[3]} 
            className="md:col-span-1 md:row-span-1"
          />
        </div>
        
        {/* Bottom Wide Card */}
        <div className="mt-6">
           <BentoCard 
            pkg={PACKAGES[4]} 
            className="w-full h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ pkg, className }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`group relative rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${className}`}
  >
    <img 
      src={pkg.image} 
      alt={pkg.title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    
    <div className="absolute top-6 left-6">
      <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
        {pkg.tag}
      </div>
    </div>

    <div className="absolute bottom-8 left-8 right-8 text-white">
      <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
        {pkg.title}
        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
      </h3>
      <p className="text-sm opacity-80 max-w-xs group-hover:opacity-100 transition-opacity">
        {pkg.description}
      </p>
    </div>
  </motion.div>
);
