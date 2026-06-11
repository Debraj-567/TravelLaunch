"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, Sparkles, Star } from "lucide-react";
import { Button } from "../ui/Button";
import { ResilientImage } from "../ui/ResilientImage";

const INDIA_MAP_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/5/57/India-locator-map-blank.svg";

const STATES = [
  {
    id: "ladakh",
    name: "Ladakh",
    region: "High Himalaya",
    x: 246,
    y: 48,
    duration: "6-8 Days",
    bestTime: "Jun - Sep",
    places: ["Leh Palace", "Pangong Lake", "Nubra Valley", "Thiksey Monastery"],
    highlight: "Mountain roads, blue lakes, and monastery stays above the clouds.",
  },
  {
    id: "delhi",
    name: "Delhi",
    region: "Heritage Gateway",
    x: 204,
    y: 163,
    duration: "2-3 Days",
    bestTime: "Oct - Mar",
    places: ["Humayun's Tomb", "India Gate", "Chandni Chowk", "Qutub Minar"],
    highlight: "Old-world lanes, Mughal monuments, and the perfect start to North India.",
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "Royal Desert",
    x: 128,
    y: 222,
    duration: "7-10 Days",
    bestTime: "Nov - Feb",
    places: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    highlight: "Palaces, forts, desert sunsets, and stays that still feel regal.",
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    region: "Sacred Cities",
    x: 266,
    y: 207,
    duration: "4-6 Days",
    bestTime: "Oct - Mar",
    places: ["Varanasi", "Agra", "Lucknow", "Sarnath"],
    highlight: "The Taj Mahal, Ganga aarti, and some of India's deepest cultural roots.",
  },
  {
    id: "gujarat",
    name: "Gujarat",
    region: "Salt & Coast",
    x: 96,
    y: 314,
    duration: "5-7 Days",
    bestTime: "Nov - Feb",
    places: ["Rann of Kutch", "Gir National Park", "Somnath", "Dwarka"],
    highlight: "White salt deserts, temple towns, craft villages, and lion country.",
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    region: "Caves & Coast",
    x: 181,
    y: 367,
    duration: "4-6 Days",
    bestTime: "Oct - Feb",
    places: ["Mumbai", "Ajanta Caves", "Ellora Caves", "Lonavala"],
    highlight: "Sea-facing city energy, ancient caves, hill stations, and food trails.",
  },
  {
    id: "goa",
    name: "Goa",
    region: "Beach Leisure",
    x: 170,
    y: 430,
    duration: "3-5 Days",
    bestTime: "Nov - Feb",
    places: ["Fontainhas", "Palolem", "Baga", "Dudhsagar Falls"],
    highlight: "Portuguese lanes, golden beaches, slow lunches, and easy coastal luxury.",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    region: "Ruins & Coffee",
    x: 198,
    y: 468,
    duration: "5-7 Days",
    bestTime: "Oct - Mar",
    places: ["Hampi", "Coorg", "Mysuru Palace", "Gokarna"],
    highlight: "Temple ruins, coffee estates, palaces, and calm coastal escapes.",
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "Backwaters",
    x: 213,
    y: 535,
    duration: "5-8 Days",
    bestTime: "Sep - Mar",
    places: ["Alleppey", "Munnar", "Kochi", "Thekkady"],
    highlight: "Houseboats, tea gardens, spice trails, and slow wellness stays.",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    region: "Temples & Coast",
    x: 272,
    y: 526,
    duration: "5-7 Days",
    bestTime: "Nov - Feb",
    places: ["Madurai", "Rameswaram", "Ooty", "Mahabalipuram"],
    highlight: "Dravidian temples, hill stations, coastal routes, and classical culture.",
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    region: "Culture & Hills",
    x: 354,
    y: 254,
    duration: "4-6 Days",
    bestTime: "Oct - Mar",
    places: ["Kolkata", "Darjeeling", "Sundarbans", "Kalimpong"],
    highlight: "Colonial streets, tea hills, river deltas, and literary charm.",
  },
  {
    id: "assam",
    name: "Assam",
    region: "Northeast Wild",
    x: 423,
    y: 195,
    duration: "5-7 Days",
    bestTime: "Nov - Apr",
    places: ["Kaziranga", "Majuli", "Guwahati", "Sivasagar"],
    highlight: "Rhino safaris, river islands, tea estates, and living heritage.",
  },
];

const ROUTE_PATH = STATES.map((state, index) =>
  `${index === 0 ? "M" : "L"} ${state.x} ${state.y}`
).join(" ");

export const WorldMap = () => {
  const [selectedStateId, setSelectedStateId] = useState(STATES[2].id);
  const selectedState = STATES.find((state) => state.id === selectedStateId) ?? STATES[0];

  return (
    <section className="relative overflow-hidden bg-white py-24 text-onyx" aria-label="Interactive India state journey map">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-6">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-gold">
              India Curated Route
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="text-4xl font-display leading-tight text-onyx md:text-7xl">
            Explore India by Checkpoints
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-onyx/62 md:text-lg">
            Click a golden checkpoint to discover handpicked places worth visiting in that state.
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="relative min-h-[620px] overflow-hidden rounded-lg border border-gold/20 bg-white shadow-[0_28px_90px_rgba(201,169,110,0.18)]">
            <div className="absolute left-8 top-8 z-20 rounded-full border border-gold/30 bg-white/82 px-5 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-gold shadow-sm backdrop-blur">
              Exact India Map
            </div>

            <div className="absolute inset-0 flex items-center justify-center p-7 sm:p-10">
              <div className="relative aspect-[500/584] h-full max-h-[570px] w-full max-w-[520px]">
                <ResilientImage
                  src={INDIA_MAP_IMAGE}
                  alt="Political map of India with state and union territory boundaries"
                  className="absolute inset-0 h-full w-full object-contain opacity-95 mix-blend-multiply"
                  loading="lazy"
                  decoding="async"
                  fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/India-locator-map-blank.svg/500px-India-locator-map-blank.svg.png"
                />
                <div className="absolute inset-0 rounded-[40%] bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.13),transparent_68%)]" />

                <svg
                  viewBox="0 0 500 584"
                  className="absolute inset-0 h-full w-full"
                  role="img"
                  aria-label="Animated India travel checkpoint route"
                >
              <path
                d={ROUTE_PATH}
                fill="none"
                stroke="#C9A96E"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2 16"
                className="india-route"
                opacity="0.95"
              />
              <path
                d={ROUTE_PATH}
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1 18"
                className="india-route india-route-light"
              />

              {STATES.map((state, index) => {
                const isSelected = state.id === selectedState.id;

                return (
                  <g key={state.id}>
                    <motion.circle
                      cx={state.x}
                      cy={state.y}
                      r={isSelected ? 22 : 16}
                      fill={isSelected ? "#0A0A0A" : "#C9A96E"}
                      stroke="#ffffff"
                      strokeWidth="4"
                      className="cursor-pointer"
                      animate={{
                        scale: isSelected ? [1, 1.12, 1] : 1,
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: isSelected ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      onClick={() => setSelectedStateId(state.id)}
                    />
                    <circle
                      cx={state.x}
                      cy={state.y}
                      r="5"
                      fill={isSelected ? "#C9A96E" : "#ffffff"}
                      className="pointer-events-none"
                    />
                    <text
                      x={state.x + (state.x > 430 ? -14 : 22)}
                      y={state.y - 20}
                      textAnchor={state.x > 430 ? "end" : "start"}
                      className="pointer-events-none select-none fill-[#C9A96E] text-[18px] font-black uppercase tracking-[0.15em]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </text>
                  </g>
                );
              })}
                </svg>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-white via-white/70 to-transparent p-6">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {STATES.slice(0, 4).map((state) => (
                  <button
                    key={state.id}
                    onClick={() => setSelectedStateId(state.id)}
                    className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition-all ${
                      selectedState.id === state.id
                        ? "border-gold bg-gold text-onyx shadow-lg"
                        : "border-gold/30 bg-white/80 text-gold hover:border-gold"
                    }`}
                  >
                    {state.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-onyx p-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-white to-gold" />
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedState.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.28em] text-gold">
                      <Sparkles size={15} />
                      {selectedState.region}
                    </p>
                    <h3 className="text-4xl font-display leading-tight text-white md:text-5xl">
                      {selectedState.name}
                    </h3>
                  </div>
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold text-onyx">
                    <MapPin size={24} />
                  </div>
                </div>

                <p className="mb-8 text-base leading-7 text-white/72">
                  {selectedState.highlight}
                </p>

                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
                    <Calendar className="mb-3 text-gold" size={20} />
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/38">Ideal Trip</p>
                    <p className="mt-2 text-lg font-display text-white">{selectedState.duration}</p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
                    <Star className="mb-3 text-gold" size={20} />
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/38">Best Time</p>
                    <p className="mt-2 text-lg font-display text-white">{selectedState.bestTime}</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-gold">
                    Places Worth Visiting
                  </h4>
                  <div className="space-y-3">
                    {selectedState.places.map((place, index) => (
                      <motion.div
                        key={place}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-5 py-4 text-white transition-all hover:border-gold/70 hover:bg-gold/10"
                      >
                        <span className="font-body text-sm font-semibold">{place}</span>
                        <ArrowUpRight size={16} className="text-gold" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Button
                  className="mt-9 w-full rounded-full bg-gold py-5 text-onyx shadow-[0_18px_45px_rgba(201,169,110,0.22)] hover:bg-[#d9bc7e]"
                  onClick={() => window.location.href = "/dashboard"}
                >
                  Plan {selectedState.name}
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .india-route {
          animation: route-dash 18s linear infinite;
        }

        .india-route-light {
          animation-duration: 12s;
          opacity: 0.9;
        }

        @keyframes route-dash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -260;
          }
        }
      `}</style>
    </section>
  );
};
