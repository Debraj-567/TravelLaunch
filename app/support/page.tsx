"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown, 
  LifeBuoy, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Globe,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const FAQS = [
  {
    question: "How do I book a customized tour package?",
    answer: "You can use our 'Travel Planner' AI tool on the home page or contact our travel experts directly via the 'Custom Request' form below. We'll craft an itinerary based on your preferences."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Cancellations made 30 days prior to departure receive a 90% refund. For cancellations within 15-30 days, a 50% refund is applicable. Refunds are processed within 7-10 business days."
  },
  {
    question: "Do you provide international visa assistance?",
    answer: "Yes, we have a dedicated Visa team that assists with documentation, appointment scheduling, and submission for over 50+ countries."
  },
  {
    question: "How can I track my existing booking?",
    answer: "Once logged in, you can visit your 'Dashboard' to see real-time status updates, download vouchers, and manage your travel documents."
  }
];

const CONTACT_METHODS = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    desc: "Average response: 2 mins",
    action: "Start Chat",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  {
    icon: Phone,
    title: "Call Us",
    desc: "Available 24/7",
    action: "+1 (800) TRAVEL",
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "For complex queries",
    action: "support@travelzada.com",
    color: "bg-purple-50 text-purple-600 border-purple-100"
  }
];

export default function SupportPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-black mb-8 backdrop-blur-md uppercase tracking-widest">
              <LifeBuoy size={16} />
              Help Center
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
              How can we help <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">your journey today?</span>
            </h1>
            
            {/* Creative Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[24px] blur opacity-25 group-focus-within:opacity-50 transition duration-1000 group-focus-within:duration-200" />
              <div className="relative flex items-center bg-white rounded-[24px] p-2 shadow-2xl">
                <div className="pl-6 pr-4 text-slate-400">
                  <Search size={24} />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for bookings, visas, refunds..."
                  className="w-full py-4 bg-transparent outline-none text-slate-900 font-medium text-lg placeholder:text-slate-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-8 h-[56px] font-black uppercase tracking-wider">
                  Search
                </Button>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400 font-bold uppercase tracking-widest text-xs">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-blue-500" /> Secure Payments</span>
              <span className="flex items-center gap-2"><Globe size={16} className="text-blue-500" /> 24/7 Global Support</span>
              <span className="flex items-center gap-2"><Zap size={16} className="text-blue-500" /> Instant Resolution</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="py-24 max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTACT_METHODS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-[40px] border-2 border-slate-50 bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-[24px] ${item.color} flex items-center justify-center mb-8 border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">{item.desc}</p>
              <button className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-wider text-sm hover:gap-4 transition-all">
                {item.action}
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium">Quick answers to common questions from our global community.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className={`rounded-[32px] border transition-all duration-300 ${activeFaq === idx ? 'bg-white border-blue-100 shadow-xl' : 'bg-transparent border-slate-100'}`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className={`text-xl font-bold transition-colors ${activeFaq === idx ? 'text-blue-600' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeFaq === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TICKETING / FORM SECTION --- */}
      <section className="py-24 max-w-[1400px] mx-auto px-6">
        <div className="bg-blue-600 rounded-[50px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
          {/* Abstract background for form section */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 right-10 w-96 h-96 border-[60px] border-white rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white rounded-full blur-[100px]" />
          </div>

          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-5xl font-black text-white mb-6 leading-tight">Can't find what you're looking for?</h2>
            <p className="text-blue-100 text-xl font-medium mb-10 leading-relaxed">
              Send us a detailed message and our specialized support team will get back to you within 4 business hours.
            </p>
            <div className="flex items-center gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-[32px] border border-white/10">
                <Clock className="text-blue-200 mb-2" size={32} />
                <div className="text-white font-black text-2xl tracking-tight">4 Hours</div>
                <div className="text-blue-200 text-sm font-bold uppercase tracking-widest">Avg Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-[32px] border border-white/10">
                <ShieldCheck className="text-blue-200 mb-2" size={32} />
                <div className="text-white font-black text-2xl tracking-tight">100%</div>
                <div className="text-blue-200 text-sm font-bold uppercase tracking-widest">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative z-10">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-blue-500 transition-all font-medium" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-widest">Email</label>
                    <input type="email" className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-blue-500 transition-all font-medium" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-widest">Subject</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-blue-500 transition-all font-bold text-slate-900 appearance-none">
                    <option>General Inquiry</option>
                    <option>Booking Status</option>
                    <option>Refund Request</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-blue-500 transition-all font-medium resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <Button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg uppercase tracking-[0.2em] shadow-xl shadow-blue-100">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 text-center">
        <div className="inline-flex items-center gap-2 p-1 pr-6 rounded-full bg-slate-900 text-white font-bold text-sm">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <HelpCircle size={16} />
          </div>
          Still lost? Check our <Link href="/docs" className="text-blue-400 ml-1 hover:underline">Documentation</Link>
        </div>
      </section>

      {/* --- NAVBAR SPACING (Simple fix for fixed navbar) --- */}
      <div className="h-0" />
    </div>
  );
}
