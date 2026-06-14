"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Hotel, Briefcase, MapPin, Calendar, Users, Search, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

const DESTINATIONS = [
  { name: 'Dubai', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000' },
  { name: 'Switzerland', url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=2000' },
  { name: 'Bali', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000' },
  { name: 'Japan', url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2000' },
  { name: 'Paris', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000' },
];

const TABS = [
  { id: 'flights', label: 'Flights', icon: Plane },
  { id: 'hotels', label: 'Hotels', icon: Hotel },
  { id: 'packages', label: 'Packages', icon: Briefcase },
];

export const UnifiedSearchHero = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % DESTINATIONS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-50 z-10" />
          <img
            src={DESTINATIONS[bgIndex].url}
            alt={DESTINATIONS[bgIndex].name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={bgIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Experience <span className="text-white">{DESTINATIONS[bgIndex].name}</span>
            </motion.h1>
          </AnimatePresence>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Book flights, hotels and holiday packages at the best prices.
          </p>
        </motion.div>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-[1200px] bg-white rounded-[32px] shadow-2xl overflow-hidden border border-white/20"
        >
          {/* Tabs */}
          <div className="flex border-b border-slate-100 p-2 gap-2 bg-slate-50/50">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold transition-all ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Fields */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeTab === 'flights' && (
                <>
                  <SearchField label="From" placeholder="Source City" icon={MapPin} value="New Delhi (DEL)" />
                  <SearchField label="To" placeholder="Destination City" icon={MapPin} value="Dubai (DXB)" />
                  <SearchField label="Departure" placeholder="Select Date" icon={Calendar} value="24 Jun, 2026" />
                  <SearchField label="Travellers & Class" placeholder="Select" icon={Users} value="1 Traveller, Economy" />
                </>
              )}
              {activeTab === 'hotels' && (
                <>
                  <SearchField label="Destination" placeholder="Where are you going?" icon={MapPin} value="Paris, France" />
                  <SearchField label="Check-in" placeholder="Select Date" icon={Calendar} value="15 Jul, 2026" />
                  <SearchField label="Check-out" placeholder="Select Date" icon={Calendar} value="20 Jul, 2026" />
                  <SearchField label="Guests & Rooms" placeholder="Select" icon={Users} value="2 Guests, 1 Room" />
                </>
              )}
              {activeTab === 'packages' && (
                <>
                  <SearchField label="Destination" placeholder="Where to?" icon={MapPin} value="Switzerland" />
                  <SearchField label="Duration" placeholder="Days" icon={Calendar} value="7 Days, 6 Nights" />
                  <SearchField label="Budget" placeholder="Range" icon={Briefcase} value="₹50,000 - ₹1,00,000" />
                  <SearchField label="Travel Type" placeholder="Type" icon={Users} value="Couple, Luxury" />
                </>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="w-full lg:w-80 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-blue-100 transition-all hover:scale-[1.02]">
                <Search size={24} />
                Search {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SearchField = ({ label, placeholder, icon: Icon, value }: any) => (
  <div className="group p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-blue-200 hover:shadow-md cursor-pointer">
    <div className="flex items-center gap-2 mb-1 text-slate-500">
      <Icon size={16} />
      <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
    </div>
    <div className="text-lg font-bold text-slate-900 group-hover:text-blue-600 truncate">{value}</div>
  </div>
);
