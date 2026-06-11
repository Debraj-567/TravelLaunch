"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Map, Star } from 'lucide-react';
import { ResilientImage } from '../ui/ResilientImage';

const STORIES = [
  {
    name: "Aria Montgomery",
    destination: "Kyoto, Japan",
    date: "April 2026",
    quote: "The cherry blossoms were just the beginning. The hidden temples in Arashiyama felt like stepping back in time.",
    likes: 234,
    days: 12,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    color: "#C9A96E"
  },
  {
    name: "Julian Rossi",
    destination: "Amalfi Coast, Italy",
    date: "June 2025",
    quote: "Every cliffside dinner felt like a movie scene. Travelzada found us the only table in Positano with no tourists around.",
    likes: 512,
    days: 10,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    color: "#4A6741"
  },
  {
    name: "Elena Petrov",
    destination: "Swiss Alps",
    date: "January 2026",
    quote: "Waking up above the clouds in Zermatt is a memory I'll carry forever. The silence of the peaks is profound.",
    likes: 389,
    days: 7,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    color: "#0A0A0A"
  },
  {
    name: "Marcus Thorne",
    destination: "Maasai Mara, Kenya",
    date: "August 2025",
    quote: "The migration is a raw display of nature's power. Our guide knew exactly where to be for the perfect sunrise.",
    likes: 678,
    days: 14,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    color: "#C9A96E"
  },
  {
    name: "Sanya Gupta",
    destination: "Rajasthan, India",
    date: "November 2025",
    quote: "The blue streets of Jodhpur at dawn are pure magic. We didn't just see India, we felt it.",
    likes: 445,
    days: 9,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    color: "#4A6741"
  },
  {
    name: "David Chen",
    destination: "Reykjavik, Iceland",
    date: "February 2026",
    quote: "Floating in the Blue Lagoon while the Northern Lights danced above... there are no words for that.",
    likes: 890,
    days: 8,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    color: "#0A0A0A"
  }
];

const JourneyMap = ({ color }: { color: string }) => (
  <svg width="100" height="30" viewBox="0 0 100 30" className="opacity-40">
    <circle cx="5" cy="15" r="2" fill={color} />
    <path d="M5 15 C 30 0, 70 30, 95 15" stroke={color} fill="none" strokeWidth="1" strokeDasharray="4 2" />
    <circle cx="95" cy="15" r="2" fill={color} />
  </svg>
);

export const CommunityStories = () => {
  return (
    <section className="py-24 px-6 bg-warmWhite">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display text-onyx mb-16 text-center"
        >
          Stories From the Road
        </motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {STORIES.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid bg-white p-8 rounded-[16px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <ResilientImage
                  src={story.image} 
                  alt={story.name} 
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="font-display text-lg text-onyx">{story.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-textMuted">
                    {story.destination} • {story.date}
                  </p>
                </div>
              </div>

              <blockquote className="text-xl font-display italic text-onyx mb-6 leading-relaxed">
                "{story.quote}"
              </blockquote>

              <div className="flex items-center justify-between mb-6">
                <JourneyMap color={story.color} />
                <div className="text-[10px] uppercase tracking-widest text-textMuted font-bold">Journey Route</div>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-black/5 text-textMuted text-xs">
                <span className="flex items-center gap-1.5"><Heart size={14} className="text-red-400" /> {story.likes}</span>
                <span className="flex items-center gap-1.5"><Map size={14} /> {story.days} days</span>
                <span className="flex items-center gap-1.5 text-gold font-bold"><Star size={14} fill="currentColor" /> 5.0</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
