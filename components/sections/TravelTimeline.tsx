"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';

const ITINERARY = [
  {
    day: "Day 01",
    title: "Arrive Jaipur",
    desc: "Welcome to the Pink City. Start your journey with a sunset visit to Amber Fort, followed by a royal rooftop dinner overlooking the city lights.",
    location: "Jaipur, India"
  },
  {
    day: "Day 02",
    title: "The Heart of the Pink City",
    desc: "Explore the intricate City Palace, the celestial Hawa Mahal, and lose yourself in the vibrant local bazaars for traditional henna and textiles.",
    location: "Jaipur Bazaars"
  },
  {
    day: "Day 03",
    title: "The Blue Labyrinth",
    desc: "Drive to Jodhpur, the Blue City. Climb the massive Mehrangarh Fort and wander through the indigo-washed streets of the old town.",
    location: "Jodhpur, India"
  },
  {
    day: "Day 04",
    title: "Silence of the Dunes",
    desc: "Venture into the Thar Desert. Experience a camel safari across the rolling dunes and spend the night stargazing at a luxury desert camp.",
    location: "Osian Desert"
  },
  {
    day: "Day 05",
    title: "Memories Forever",
    desc: "Final sunrise over the dunes before heading back. Carry the stories of Rajasthan with you as you prepare for your flight home.",
    location: "Jodhpur Airport"
  }
];

export const TravelTimeline = () => {
  return (
    <section className="py-24 bg-warmWhite overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-display text-onyx mb-4">Your Journey, Day by Day</h2>
            <p className="text-textMuted font-body italic">A curated 5-day escape into the soul of Rajasthan.</p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[11px] top-0 w-[2px] bg-gradient-to-b from-gold via-gold/50 to-transparent"
            />

            <div className="flex flex-col gap-16">
              {ITINERARY.map((item, i) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12 group"
                >
                  {/* Pulsing Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-gold rounded-full z-10" />
                    <div className="absolute inset-0 bg-gold/30 rounded-full animate-ping" />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                    <div className="flex-shrink-0 pt-1">
                      <Badge variant="gold" className="px-4 py-1.5 text-xs font-mono tracking-tighter">
                        {item.day}
                      </Badge>
                    </div>

                    <div className="max-w-2xl">
                      <h3 className="text-2xl md:text-3xl font-display text-onyx mb-3 group-hover:text-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-textMuted font-body leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-onyx/40">
                        {item.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
