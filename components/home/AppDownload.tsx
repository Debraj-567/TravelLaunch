"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const AppDownload = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-blue-600 rounded-[48px] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="w-full lg:w-3/5 relative z-10 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Get the TravelZada App <br /> for a smoother journey.
            </h2>
            
            <div className="space-y-4 mb-10">
              <AppFeature text="Real-time flight status updates" />
              <AppFeature text="Exclusive app-only discounts" />
              <AppFeature text="Manage bookings offline" />
              <AppFeature text="24/7 Priority chat support" />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="bg-white p-4 rounded-[24px] shadow-xl flex items-center gap-4">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <Smartphone size={64} className="text-slate-900" />
                </div>
                <div className="text-slate-900 pr-4">
                  <p className="text-sm font-bold">Scan to Download</p>
                  <p className="text-xs text-slate-500">Available for iOS & Android</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-slate-900 transition-all border border-white/10 shadow-lg">
                  <Smartphone size={24} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase opacity-60">Download on the</p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-slate-900 transition-all border border-white/10 shadow-lg">
                  <Download size={24} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase opacity-60">Get it on</p>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Phone Mockup Area */}
          <div className="w-full lg:w-2/5 relative z-10">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[48px] border-[8px] border-slate-800 shadow-2xl"
            >
              {/* Screen Content Mock */}
              <div className="absolute inset-2 bg-white rounded-[38px] overflow-hidden">
                <div className="h-40 bg-blue-600 p-6 flex flex-col justify-end">
                  <p className="text-white text-xs font-bold opacity-80 mb-1">Hello, Explorer!</p>
                  <p className="text-white font-bold text-lg">Your next trip is waiting.</p>
                </div>
                <div className="p-4 space-y-4">
                  <div className="h-24 bg-slate-50 rounded-2xl border border-slate-100" />
                  <div className="h-24 bg-slate-50 rounded-2xl border border-slate-100" />
                  <div className="h-24 bg-slate-50 rounded-2xl border border-slate-100" />
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AppFeature = ({ text }: any) => (
  <div className="flex items-center gap-3">
    <CheckCircle size={20} className="text-blue-200" />
    <span className="text-lg opacity-90">{text}</span>
  </div>
);
