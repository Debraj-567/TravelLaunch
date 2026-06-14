"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Check, Compass, Map, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex font-sans overflow-hidden">
      {/* Left Side: Creative Section */}
      <div className="hidden lg:flex w-1/2 relative bg-blue-600 items-center justify-center p-12 overflow-hidden">
        {/* Abstract Background Patterns */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-500 rounded-full -translate-y-1/2 -translate-x-1/2 opacity-20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full translate-y-1/3 translate-x-1/4 opacity-20 blur-[80px]" />
        
        <div className="relative z-10 w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/30 border border-blue-400/30 text-white text-sm font-bold mb-8 backdrop-blur-md">
              <Compass size={16} />
              Adventure Awaits
            </div>
            <h1 className="text-6xl font-black text-white mb-8 leading-[1.1]">
              Start your <br /> 
              <span className="text-blue-200">Journey</span> <br /> 
              with us.
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed mb-12 max-w-md">
              Unlock exclusive travel deals, personalized itineraries, and a community of world explorers.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Map, title: "Custom Maps", count: "500+" },
                { icon: Heart, title: "Happy Users", count: "2M+" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="p-6 rounded-[32px] bg-white/10 border border-white/10 backdrop-blur-sm text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-400/30 flex items-center justify-center text-white mx-auto mb-4">
                    <item.icon size={24} />
                  </div>
                  <div className="text-2xl font-black text-white mb-1">{item.count}</div>
                  <div className="text-blue-100/70 text-sm font-bold">{item.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-blue-300 opacity-40 animate-pulse" />
        <div className="absolute bottom-40 right-20 w-8 h-8 rounded-full bg-blue-200 opacity-20 animate-bounce" />
      </div>

      {/* Right Side: Auth Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-50/50">
        <div className="w-full max-w-md">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center lg:text-left"
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-black text-blue-600 tracking-tight">TRAVELZADA</span>
            </Link>
            <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">
              Create Account
            </h2>
            <p className="text-slate-500 font-medium">
              Join the world's most loved travel community.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-10 rounded-[40px] shadow-2xl shadow-blue-900/5 border border-slate-100"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-300 group-focus-within:text-blue-500 transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full pl-12 pr-5 py-4 bg-slate-50/50 border-2 border-slate-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-blue-500/50 focus:bg-white transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-300 group-focus-within:text-blue-500 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-12 pr-5 py-4 bg-slate-50/50 border-2 border-slate-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-blue-500/50 focus:bg-white transition-all font-medium"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-300 group-focus-within:text-blue-500 transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-12 pr-5 py-4 bg-slate-50/50 border-2 border-slate-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-blue-500/50 focus:bg-white transition-all font-medium"
                    placeholder="••••••••"
                  />
                </div>
                <p className="mt-2 text-[10px] font-black text-slate-400 flex items-center gap-1 uppercase tracking-wider">
                  <Check size={12} className="text-emerald-500" /> Must be at least 8 characters
                </p>
              </div>

              <div className="flex items-center pt-2">
                <input
                  type="checkbox"
                  required
                  className="w-5 h-5 rounded-lg border-2 border-slate-200 text-blue-600 focus:ring-0 transition-all cursor-pointer"
                />
                <label className="ml-3 text-sm font-bold text-slate-600">
                  I agree to the <a href="#" className="text-blue-600 underline underline-offset-4 decoration-2 decoration-blue-100">Terms</a>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-[60px] bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isLoading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
                {!isLoading && <ArrowRight size={20} />}
              </Button>
            </form>

            <div className="mt-10">
              <div className="relative flex items-center justify-center mb-8">
                <div className="w-full border-t-2 border-slate-100" />
                <span className="absolute px-4 bg-white text-xs font-black text-slate-300 uppercase tracking-widest">or sign up with</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 h-14 border-2 border-slate-100 rounded-2xl text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-[0.95]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center gap-3 h-14 border-2 border-slate-100 rounded-2xl text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-[0.95]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </button>
              </div>

              <p className="mt-10 text-center text-sm font-bold text-slate-500">
                Already have an account? {' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-700 transition-colors">Sign in</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
