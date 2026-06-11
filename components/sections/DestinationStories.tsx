"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Badge } from "../ui/Badge";
import { ResilientImage } from "../ui/ResilientImage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DESTINATIONS = [
  {
    country: "INDIA",
    headline: "Where Every Stone Tells a Story",
    body: "From the pink city of Jaipur to the blue labyrinth of Jodhpur, Rajasthan is India's most cinematic state. Wander through century-old forts and experience a hospitality that was once reserved only for kings.",
    tags: ["Heritage", "Palaces", "Desert"],
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1400",
    cta: "Explore Rajasthan ->",
  },
  {
    country: "INDONESIA",
    headline: "The Island That Teaches You to Breathe",
    body: "Bali is more than a destination; it's a mood, an aspiration, a tropical state of mind. Between the emerald rice terraces of Ubud and the sacred cliffs of Uluwatu, find a peace you didn't know you were missing.",
    tags: ["Spirituality", "Wellness", "Nature"],
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1400",
    cta: "Discover Bali ->",
  },
  {
    country: "SWITZERLAND",
    headline: "Above the Clouds, Below Your Expectations",
    body: "The Swiss Alps offer a silence so profound it becomes a sound. Whether it's the peak of the Matterhorn or the crystal clarity of Lake Brienz, the landscape here doesn't just invite you - it humbles you.",
    tags: ["Adventure", "Luxury", "Alps"],
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=1400",
    cta: "Ascend the Alps ->",
  },
];

const TextReveal = ({ text }: { text: string }) => {
  const words = text.split(" ");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="flex flex-wrap gap-x-[0.2em] gap-y-0">
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

const FeatureBlock = ({
  dest,
  index,
}: {
  dest: (typeof DESTINATIONS)[0];
  index: number;
}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-warmWhite">
      <div className="grid min-h-[620px] grid-cols-1 items-stretch md:grid-cols-2">
        <div
          className={`relative h-[360px] overflow-hidden bg-onyx md:h-auto ${
            isEven ? "order-1" : "order-1 md:order-2"
          }`}
        >
          <div ref={imageRef} className="absolute inset-[-12%] z-0">
            <ResilientImage
              src={dest.image}
              alt={`${dest.country} destination landscape`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
        </div>

        <div
          className={`flex flex-col justify-center bg-warmWhite p-8 sm:p-10 lg:p-20 ${
            isEven ? "order-2" : "order-2 md:order-1"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="gold" className="mb-6 tracking-[0.3em] font-body">
              {dest.country}
            </Badge>

            <h3 className="mb-8 text-4xl font-display leading-tight text-onyx lg:text-6xl">
              {dest.headline}
            </h3>

            <div className="mb-8 max-w-xl text-lg font-body leading-relaxed text-textMuted lg:text-xl">
              <TextReveal text={dest.body} />
            </div>

            <div className="mb-10 flex flex-wrap gap-4">
              {dest.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium uppercase tracking-widest text-gold/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="group inline-flex items-center border-b border-transparent pb-1 text-lg font-display italic text-gold transition-all duration-300 hover:border-gold"
            >
              {dest.cta}
            </a>
          </motion.div>
        </div>
      </div>

      {index < 2 && (
        <div className="container mx-auto px-6">
          <div className="h-px w-full bg-gold/20" />
        </div>
      )}
    </section>
  );
};

export const DestinationStories = () => {
  return (
    <div className="bg-warmWhite">
      {DESTINATIONS.map((dest, i) => (
        <FeatureBlock key={dest.country} dest={dest} index={i} />
      ))}
    </div>
  );
};
