"use client";

import React from 'react';
import { 
  Mail,
  Globe,
  MessageSquare,
  Share2,
  Phone,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/Button';

const FOOTER_COLUMNS = [
  {
    title: "Destinations",
    links: [
      { name: "Dubai", href: "#" },
      { name: "Thailand", href: "#" },
      { name: "Switzerland", href: "#" },
      { name: "Bali", href: "#" },
      { name: "India", href: "#" },
      { name: "Maldives", href: "#" }
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Flight Booking", href: "#" },
      { name: "Hotel Booking", href: "#" },
      { name: "Holiday Packages", href: "#" },
      { name: "Visa Assistance", href: "#" },
      { name: "Travel Insurance", href: "#" },
      { name: "Car Rentals", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Travel Guides", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press Release", href: "#" },
      { name: "Partners", href: "#" }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      {/* Newsletter Section */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-blue-100 opacity-90">Get the latest travel deals and inspiration directly in your inbox.</p>
            </div>
            <div className="flex w-full lg:w-auto items-center gap-2">
              <div className="relative flex-1 lg:w-80">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <Button className="bg-slate-900 text-white hover:bg-black rounded-xl px-8 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-2">
            <a href="/" className="text-2xl font-bold text-blue-600 mb-6 block">
              TRAVELZADA
            </a>
            <p className="text-slate-600 mb-8 max-w-sm leading-relaxed">
              Your one-stop solution for seamless travel experiences. From flights to hotels and curated packages, we make your journey unforgettable.
            </p>
            <div className="flex items-center gap-4">
              {[Globe, MessageSquare, Share2, Mail, Phone].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="col-span-1">
              <h4 className="font-bold text-slate-900 mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-600 hover:text-blue-600 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} TRAVELZADA. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
