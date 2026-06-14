"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, ShieldCheck, CheckCircle, BadgeCheck } from 'lucide-react';

const TRUST_ITEMS = [
  {
    title: "24x7 Support",
    description: "We're here to help, anytime and anywhere.",
    icon: Headphones,
    color: "blue"
  },
  {
    title: "Secure Payment",
    description: "Your transactions are always safe and protected.",
    icon: ShieldCheck,
    color: "teal"
  },
  {
    title: "Verified Partners",
    description: "We only work with the most trusted travel providers.",
    icon: CheckCircle,
    color: "sky"
  },
  {
    title: "Best Price",
    description: "We guarantee the most competitive rates available.",
    icon: BadgeCheck,
    color: "emerald"
  }
];

export const TrustIndicators = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
