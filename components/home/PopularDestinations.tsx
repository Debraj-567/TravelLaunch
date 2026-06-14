"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

const DESTINATIONS = [
  {
    name: "Golden Sands - Dubai",
    price: "₹45,000",
    season: "Oct - Mar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Alpine Paradise - Switzerland",
    price: "₹1,20,000",
    season: "Jun - Aug",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Tropical Haven - Bali",
    price: "₹35,000",
    season: "Apr - Oct",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Eastern Heritage - Kyoto",
    price: "₹95,000",
    season: "Mar - May",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "City of Lights - Paris",
    price: "₹85,000",
    season: "Apr - Jun",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Crystal Waters - Maldives",
    price: "₹65,000",
    season: "Nov - Apr",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800"
  }
];

export const PopularDestinations = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Popular Destinations</h2>
            <p className="text-slate-600 text-lg">Handpicked locations for your next adventure</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory"
        >
          {DESTINATIONS.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] snap-start"
            >
              <div className="group relative h-[500px] rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute top-6 right-6 flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-sm font-bold z-10">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  {dest.rating}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <Button 
                    size="md" 
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = '/dashboard';
                    }}
                  >
                    Book Now
                  </Button>
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-end justify-between mb-2">
                    <h3 className="text-3xl font-bold text-white">{dest.name}</h3>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-wider opacity-80 mb-1">Starting from</div>
                      <div className="text-2xl font-bold text-white">{dest.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm opacity-90 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-1.5">
                      <Star size={14} />
                      Best Season: {dest.season}
                    </div>
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
