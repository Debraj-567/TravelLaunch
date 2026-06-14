"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: "Rahul Sharma",
    trip: "Family Trip to Dubai",
    rating: 5,
    text: "The planning was flawless. Every detail from airport transfers to hotel check-ins was handled professionally. Highly recommended!",
    image: "https://i.pravatar.cc/150?u=rahul"
  },
  {
    name: "Sarah Jenkins",
    trip: "Solo Trip to Japan",
    rating: 5,
    text: "As a solo traveler, I was worried about the logistics. TravelZada made everything so easy and I felt safe throughout my journey.",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Amit Patel",
    trip: "Honeymoon in Maldives",
    rating: 5,
    text: "Best experience ever! The resort they suggested was breathtaking and all the special arrangements for our honeymoon were perfect.",
    image: "https://i.pravatar.cc/150?u=amit"
  },
  {
    name: "Elena Rodriguez",
    trip: "Adventure in Switzerland",
    rating: 4,
    text: "Great itinerary for hikers. The mountain guides were excellent and the views were even better than the photos.",
    image: "https://i.pravatar.cc/150?u=elena"
  }
];

export const CustomerReviews = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Travelers Say</h2>
          <p className="text-slate-600 text-lg">Real stories from real travelers around the world</p>
        </div>

        <div className="flex gap-8 overflow-hidden py-4">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8"
          >
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review }: any) => (
  <div className="min-w-[400px] bg-slate-900 border border-slate-800 p-8 rounded-[32px] shadow-xl hover:shadow-2xl transition-all">
    <div className="flex items-center gap-4 mb-6">
      <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-800" />
      <div>
        <h4 className="font-bold text-white">{review.name}</h4>
        <p className="text-blue-400 text-sm font-medium">{review.trip}</p>
      </div>
    </div>
    
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-700"} 
        />
      ))}
    </div>

    <p className="text-white leading-relaxed italic relative">
      <Quote size={24} className="absolute -top-4 -left-2 text-slate-800 -z-10" />
      "{review.text}"
    </p>
  </div>
);
