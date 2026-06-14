"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPinned, MapPin, Calendar, Wallet, Send, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const AITravelPlanner = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 blur-[120px] rounded-full z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Inputs */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-6">
                <MapPinned size={16} />
                Travel Planner
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Plan your dream trip <br /> in seconds.
              </h2>
              <p className="text-slate-600 text-lg mb-10 max-w-lg">
                Our advanced AI understands your preferences and crafts a perfectly balanced itinerary tailored just for you.
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-slate-100 p-6 rounded-[24px] shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AIInput label="Destination" icon={MapPin} value="Switzerland" />
                    <AIInput label="Budget" icon={Wallet} value="Premium" />
                    <AIInput label="Duration" icon={Calendar} value="7 Days" />
                    <AIInput label="Travel Style" icon={Sparkles} value="Adventure & Nature" />
                  </div>
                  <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                    Generate Itinerary
                    <Send size={18} />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Preview */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <MapPinned size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">7-Day Swiss Alps Adventure</h4>
                    <p className="text-slate-500 text-sm">Generated just for you</p>
                  </div>
                </div>
                <div className="text-emerald-600 flex items-center gap-1.5 text-sm font-bold">
                  <CheckCircle size={16} />
                  Optimized
                </div>
              </div>

              <div className="space-y-6">
                <ItineraryItem day="1" title="Arrival in Zurich & Lake Cruise" />
                <ItineraryItem day="2" title="Lucerne & Mount Pilatus Trek" />
                <ItineraryItem day="3" title="Interlaken Paragliding Session" />
                <ItineraryItem day="4" title="Grindelwald First Cliff Walk" />
                <div className="h-px bg-slate-100 my-4" />
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Estimated Cost</span>
                  <span className="text-slate-900 font-bold text-xl">₹1,45,000 / person</span>
                </div>
                <Button variant="ghost" className="w-full text-blue-600 hover:bg-blue-50 font-bold">
                  View Full Itinerary
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AIInput = ({ label, icon: Icon, value }: any) => (
  <div>
    <label className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 block">{label}</label>
    <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl text-slate-900 group hover:border-blue-500 transition-colors cursor-pointer">
      <Icon size={18} className="text-blue-500" />
      <span className="font-medium">{value}</span>
    </div>
  </div>
);

const ItineraryItem = ({ day, title }: any) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 text-xs font-bold">
        {day}
      </div>
      <div className="w-px h-full bg-slate-100" />
    </div>
    <div className="pb-4">
      <h5 className="text-slate-900 font-bold mb-1">Day {day}</h5>
      <p className="text-slate-500 text-sm">{title}</p>
    </div>
  </div>
);
