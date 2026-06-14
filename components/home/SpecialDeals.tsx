"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const DEALS = [
  {
    title: "Summer Flash Sale",
    discount: "Up to 30% Off",
    description: "Book your summer getaway now and save big on top hotels.",
    validity: "Limited time offer",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "International Flights",
    discount: "Flat ₹5,000 Off",
    description: "Exclusive discount on all international flight bookings.",
    validity: "Ends in 2 days",
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Luxury Honeymoons",
    discount: "Couple Special",
    description: "Special perks and upgrades for your dream honeymoon.",
    validity: "Ongoing offer",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=800"
  }
];

export const SpecialDeals = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Special Deals</h2>
            <p className="text-slate-600 text-lg">Exclusive offers only for our premium members</p>
          </div>
          <Button variant="ghost" className="text-blue-600 font-bold hover:bg-blue-50">
            View All Offers <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEALS.map((deal, i) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={deal.image} 
                alt={deal.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute top-6 left-6">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-xl text-lg font-bold shadow-lg">
                  {deal.discount}
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 text-white font-bold mb-2">
                  <Tag size={18} />
                  <span>{deal.title}</span>
                </div>
                <p className="text-lg opacity-90 mb-6 line-clamp-2">
                  {deal.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <Clock size={16} />
                    {deal.validity}
                  </div>
                  <Button size="sm" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full border border-white/20">
                    Claim Deal
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
