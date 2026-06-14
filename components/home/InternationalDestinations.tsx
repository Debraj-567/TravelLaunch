"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, TrendingUp } from 'lucide-react';

const INTERNATIONAL = [
  { name: "Dubai", visitors: "1.2M+", growth: "+12%", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800" },
  { name: "Singapore", visitors: "800K+", growth: "+8%", image: "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?auto=format&fit=crop&q=80&w=800" },
  { name: "Thailand", visitors: "2.5M+", growth: "+15%", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800" },
  { name: "Japan", visitors: "1.5M+", growth: "+20%", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800" },
  { name: "Switzerland", visitors: "600K+", growth: "+5%", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800" },
  { name: "Maldives", visitors: "400K+", growth: "+10%", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800" },
  { name: "France", visitors: "3.2M+", growth: "+6%", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800" },
  { name: "Italy", visitors: "2.8M+", growth: "+9%", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800" },
];

export const InternationalDestinations = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">International Destinations</h2>
          <p className="text-slate-600 text-lg">Explore the most popular destinations across the globe</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {INTERNATIONAL.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative h-72 rounded-[24px] overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-3 text-white">{dest.name}</h3>
                <div className="flex items-center justify-between text-xs font-medium opacity-80">
                  <div className="flex items-center gap-1.5">
                    <Users size={14} />
                    {dest.visitors} visitors
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400">
                    <TrendingUp size={14} />
                    {dest.growth}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
