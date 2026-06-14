"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass } from 'lucide-react';

const INDIAN = [
  { name: "Goa", category: "Beaches", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800" },
  { name: "Kashmir", category: "Mountains", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800" },
  { name: "Manali", category: "Adventure", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800" },
  { name: "Leh", category: "Road Trip", image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80&w=800" },
  { name: "Kerala", category: "Backwaters", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800" },
  { name: "Andaman", category: "Islands", image: "https://plus.unsplash.com/premium_photo-1697729600772-2432650882e3?q=80&w=1000&auto=format&fit=crop" },
  { name: "Darjeeling", category: "Tea Gardens", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800" },
  { name: "Rajasthan", category: "Heritage", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800" },
];

export const IndianDestinations = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Explore India</h2>
          <p className="text-slate-600 text-lg">Discover the beauty and diversity of the Indian subcontinent</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {INDIAN.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative h-64 rounded-[32px] overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Compass size={20} />
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-1 text-white">{dest.name}</h3>
                <p className="text-white/80 text-xs font-medium uppercase tracking-wider">{dest.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
