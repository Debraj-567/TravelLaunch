"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const GUIDES = [
  {
    title: "Best Places in Summer",
    category: "Seasonal",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Hidden Gems in India",
    category: "Offbeat",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Top Honeymoon Destinations",
    category: "Couples",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=600"
  }
];

export const TravelGuides = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Travel Inspiration</h2>
            <p className="text-slate-600 text-lg">Guides, tips and stories to help you plan your next journey</p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
            View All Guides <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUIDES.map((guide, i) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all"
            >
              <img 
                src={guide.image} 
                alt={guide.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <BookOpen size={14} />
                {guide.category}
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                  <Calendar size={14} />
                  {guide.date}
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight transition-colors">
                  {guide.title}
                </h3>
                <p className="text-white/80 line-clamp-2 text-sm">
                  Discover the most enchanting locations to visit and create memories that last a lifetime.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
