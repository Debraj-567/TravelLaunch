"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ResilientImage } from '../ui/ResilientImage';

const CATEGORIES = [
  {
    name: "Adventure",
    tagline: "Adrenaline & Altitude",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Romantic",
    tagline: "Just the Two of You",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Spiritual",
    tagline: "Find Your Center",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Luxury",
    tagline: "The Art of Excess",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Nature",
    tagline: "Rewild Yourself",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Road Trips",
    tagline: "No Destination",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Solo Travel",
    tagline: "Your Pace, Your Rules",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Hidden Gems",
    tagline: "Off the Map",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800",
  },
];

export const ExploreByFeeling = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 px-6 bg-warmWhite">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-display text-onyx mb-4"
          >
            How Do You Want <br className="md:hidden" /> to Feel?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl font-body text-textMuted italic"
          >
            Every journey starts with an emotion.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              whileHover="hover"
              className="relative h-[340px] overflow-hidden rounded-sm bg-onyx cursor-pointer group shadow-sm ring-1 ring-onyx/5 hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 z-0"
                variants={{
                  hover: { scale: 1.08 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ResilientImage
                  src={category.image}
                  alt={`${category.name} travel inspiration`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/35 to-black/10 opacity-90 group-hover:opacity-75 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <motion.div
                    variants={{
                      hidden: { x: -10, opacity: 0 },
                      hover: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <ArrowRight className="text-gold" size={20} />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-display text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">
                    {category.name}
                  </h3>
                </div>
                <p className="text-[13px] font-body text-warmWhite/70 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {category.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
