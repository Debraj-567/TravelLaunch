"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Sparkles, Navigation, Camera, Coffee, Moon } from 'lucide-react';

const ITINERARY = [
  {
    day: "Day 01",
    title: "Arrive Jaipur",
    desc: "Welcome to the Pink City. Start your journey with a sunset visit to Amber Fort, followed by a royal rooftop dinner overlooking the city lights.",
    location: "Jaipur, India",
    icon: Navigation,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200",
    mapLabel: "Amber Fort & Old City"
  },
  {
    day: "Day 02",
    title: "The Heart of the Pink City",
    desc: "Explore the intricate City Palace, the celestial Hawa Mahal, and lose yourself in the vibrant local bazaars for traditional henna and textiles.",
    location: "Jaipur Bazaars",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=1200",
    mapLabel: "Hawa Mahal & Bazaars"
  },
  {
    day: "Day 03",
    title: "The Blue Labyrinth",
    desc: "Drive to Jodhpur, the Blue City. Climb the massive Mehrangarh Fort and wander through the indigo-washed streets of the old town.",
    location: "Jodhpur, India",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?auto=format&fit=crop&q=80&w=1200",
    mapLabel: "Mehrangarh Fort Area"
  },
  {
    day: "Day 04",
    title: "Silence of the Dunes",
    desc: "Venture into the Thar Desert. Experience a camel safari across the rolling dunes and spend the night stargazing at a luxury desert camp.",
    location: "Osian Desert",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?auto=format&fit=crop&q=80&w=1200",
    mapLabel: "Thar Desert Camp"
  },
  {
    day: "Day 05",
    title: "Memories Forever",
    desc: "Final sunrise over the dunes before heading back. Carry the stories of Rajasthan with you as you prepare for your flight home.",
    location: "Jodhpur Airport",
    icon: Moon,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
    mapLabel: "Departure Point"
  }
];

export const TravelTimeline = () => {
  const [activeDay, setActiveDay] = useState(ITINERARY[0]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Timeline */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-6">
                <MapPin size={16} />
                Interactive Route
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Your Journey, Day by Day</h2>
              <p className="text-slate-600 text-lg">A curated 5-day escape into the soul of Rajasthan.</p>
            </motion.div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-slate-100" />

              <div className="flex flex-col gap-8">
                {ITINERARY.map((item, i) => {
                  const isActive = activeDay.day === item.day;
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.day}
                      onClick={() => setActiveDay(item)}
                      className={`relative pl-12 cursor-pointer transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                    >
                      {/* Dot */}
                      <div className="absolute left-0 top-1.5 w-6 h-6 flex items-center justify-center">
                        <div className={`w-2.5 h-2.5 rounded-full z-10 transition-all ${isActive ? 'bg-blue-600 scale-125' : 'bg-slate-300'}`} />
                        {isActive && <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-ping" />}
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                            {item.day}
                          </span>
                          <Icon size={14} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                        </div>
                        <h3 className={`text-xl md:text-2xl font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                          {item.title}
                        </h3>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-2"
                          >
                            <p className="text-slate-600 leading-relaxed max-w-lg mb-4">
                              {item.desc}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                              <MapPin size={12} />
                              {item.location}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Detailed Map Preview */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay.day}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Map Card */}
                <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={activeDay.image} 
                    alt={activeDay.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Map Info */}
                  <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 text-white shadow-xl">
                      <p className="text-[10px] uppercase font-bold tracking-widest opacity-80 mb-1">Current Checkpoint</p>
                      <h4 className="text-xl font-bold">{activeDay.mapLabel}</h4>
                    </div>
                    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl">
                      <Navigation size={24} />
                    </div>
                  </div>

                  {/* Route Visualization Overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                     <svg className="w-full h-full" viewBox="0 0 400 500">
                        <motion.path
                          d="M 100 400 Q 200 100 300 300"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeDasharray="10, 10"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <circle cx="100" cy="400" r="8" fill="white" />
                        <circle cx="300" cy="300" r="8" fill="#3B82F6" />
                     </svg>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full border-2 border-white/40 overflow-hidden">
                        <img src="https://i.pravatar.cc/100?u=guide" alt="Guide" />
                      </div>
                      <div>
                        <p className="text-white font-bold">Arjun Singh</p>
                        <p className="text-white/60 text-xs">Local Culture Expert</p>
                      </div>
                    </div>
                    <p className="text-white/80 italic text-sm leading-relaxed">
                      "Each corner of {activeDay.location} tells a story that's centuries old. Don't forget to take a deep breath and soak in the royal air."
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
