"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Book, 
  ChevronRight, 
  FileText, 
  Map, 
  ShieldCheck, 
  CreditCard, 
  Plane, 
  User, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const SECTIONS = [
  {
    id: 'intro',
    title: 'Introduction',
    icon: Book,
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-black text-slate-900 leading-tight">Welcome to Travelzada</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Travelzada is your all-in-one platform for modern travel planning, booking, and management. This documentation will help you navigate our features, from AI-powered itinerary generation to managing complex international bookings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-6 rounded-[24px] bg-blue-50 border border-blue-100">
            <h4 className="font-black text-blue-900 mb-2">Platform Goal</h4>
            <p className="text-blue-800/70 text-sm font-medium">To simplify global travel through intelligent automation and personalized experiences.</p>
          </div>
          <div className="p-6 rounded-[24px] bg-slate-50 border border-slate-100">
            <h4 className="font-black text-slate-900 mb-2">Version</h4>
            <p className="text-slate-500 text-sm font-medium">Current Build: v2.4.0 (Stable)<br />Released: June 2026</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'planner',
    title: 'AI Travel Planner',
    icon: Sparkles,
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-black text-slate-900 leading-tight">Using the AI Planner</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Our proprietary 'Travel Planner' AI understands your budget, duration, and interests to craft the perfect itinerary.
        </p>
        <div className="space-y-4">
          <h4 className="text-xl font-black text-slate-900">How to generate:</h4>
          <ol className="space-y-4 list-decimal list-inside text-slate-600 font-medium">
            <li className="pl-2">Select your <span className="text-blue-600 font-bold">Destination</span> from over 150+ countries.</li>
            <li className="pl-2">Choose your <span className="text-blue-600 font-bold">Budget Tier</span> (Economy, Premium, or Luxury).</li>
            <li className="pl-2">Define your <span className="text-blue-600 font-bold">Travel Style</span> (Adventure, Relaxation, Cultural, etc.).</li>
            <li className="pl-2">Click <span className="text-blue-600 font-bold">"Generate Itinerary"</span> and wait ~5 seconds.</li>
          </ol>
        </div>
        <div className="mt-6 p-6 rounded-[32px] bg-blue-600 text-white flex items-center gap-6">
          <Sparkles size={40} className="flex-shrink-0 text-blue-200" />
          <div>
            <div className="font-black text-xl mb-1">Pro Tip:</div>
            <p className="text-blue-100/80">The more specific you are with "Travel Style", the better our AI can prioritize hidden gems over tourist traps.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'booking',
    title: 'Booking Process',
    icon: Plane,
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-black text-slate-900 leading-tight">Managing Bookings</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Once an itinerary is generated, you can proceed to booking. Here's how our unified booking system works:
        </p>
        <div className="grid grid-cols-1 gap-4">
          {[
            { step: "01", title: "Confirmation", desc: "Review the daily breakdown and estimated costs before proceeding." },
            { step: "02", title: "Passenger Details", desc: "Upload passport scans directly via our secure dashboard for faster processing." },
            { step: "03", title: "Payment", desc: "Pay via Credit Card, UPI, or International Wire Transfer." },
            { step: "04", title: "Vouchers", desc: "Receive digital vouchers and tickets instantly in your 'My Bookings' section." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 p-6 rounded-[32px] border border-slate-100 hover:bg-slate-50 transition-colors">
              <div className="text-3xl font-black text-blue-100">{item.step}</div>
              <div>
                <h5 className="font-black text-slate-900 text-lg">{item.title}</h5>
                <p className="text-slate-500 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'security',
    title: 'Security & Payments',
    icon: ShieldCheck,
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-black text-slate-900 leading-tight">Security Standards</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Your data security is our top priority. We use military-grade encryption for all transactions and personal data storage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-[40px] border-2 border-slate-100 bg-white shadow-xl shadow-slate-900/5">
            <CreditCard className="text-blue-600 mb-6" size={32} />
            <h4 className="font-black text-xl text-slate-900 mb-3">PCI-DSS Compliant</h4>
            <p className="text-slate-500 font-medium">All credit card processing is handled via Stripe and PayPal with end-to-end tokenization.</p>
          </div>
          <div className="p-8 rounded-[40px] border-2 border-slate-100 bg-white shadow-xl shadow-slate-900/5">
            <ShieldCheck className="text-emerald-600 mb-6" size={32} />
            <h4 className="font-black text-xl text-slate-900 mb-3">Data Protection</h4>
            <p className="text-slate-500 font-medium">Personal info and travel documents are encrypted using AES-256 standards.</p>
          </div>
        </div>
      </div>
    )
  }
];

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-100 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/support" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors">
              <ArrowLeft size={18} />
              Back to Support
            </Link>
            <div className="w-px h-6 bg-slate-200" />
            <Link href="/" className="text-2xl font-black text-blue-600 tracking-tighter">TRAVELZADA</Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Documentation Center</span>
            <div className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-wider">v2.4</div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 flex-1 flex flex-col lg:flex-row gap-12 py-12">
        {/* Sidebar */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="sticky top-32 space-y-2">
            <div className="px-4 mb-6">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Navigation</h3>
              <div className="w-12 h-1 bg-blue-600 rounded-full" />
            </div>
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-[20px] transition-all group ${
                  activeSection === section.id 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' 
                    : 'bg-transparent text-slate-500 hover:bg-slate-50'
                }`}
              >
                <section.icon size={20} className={activeSection === section.id ? 'text-blue-200' : 'text-slate-400 group-hover:text-blue-600'} />
                <span className="font-bold">{section.title}</span>
                {activeSection === section.id && (
                  <motion.div layoutId="arrow" className="ml-auto">
                    <ChevronRight size={18} />
                  </motion.div>
                )}
              </button>
            ))}

            <div className="mt-12 p-8 rounded-[32px] bg-slate-900 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-white font-black mb-2 leading-tight">Need dedicated help?</h4>
                <p className="text-slate-400 text-sm mb-6 font-medium">Contact our expert team for 1-on-1 assistance.</p>
                <Link href="/support">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-black text-xs uppercase tracking-widest">
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl" />
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 lg:max-w-3xl">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {SECTIONS.find(s => s.id === activeSection)?.content}

            {/* Pagination / Next Section */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">Previously</span>
                <button className="text-slate-900 font-black hover:text-blue-600 transition-colors">Welcome Intro</button>
              </div>
              <div className="text-right">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">Next Topic</span>
                <button className="text-slate-900 font-black hover:text-blue-600 transition-colors flex items-center gap-2 ml-auto group">
                  Booking Process
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-slate-400 font-bold text-sm tracking-tight">
            © 2026 Travelzada. All rights reserved. Built with ❤️ for the global traveler.
          </p>
        </div>
      </footer>
    </div>
  );
}
