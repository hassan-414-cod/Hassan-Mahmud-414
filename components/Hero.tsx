'use client';

import { motion } from 'motion/react';
import { ArrowRight, Play, Video, Palette } from 'lucide-react';
import Image from 'next/image';
import FacePortrait from './FacePortrait';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-charcoal/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
            </span>
            Available for Remote & Hybrid Work
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Hassan <span className="text-brand-teal">Mahmud</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-silver font-medium mb-8 max-w-xl leading-relaxed">
            22-Year-Old Visual Storyteller & Motion Graphics Specialist delivering impactful visuals from concept to completion.
          </p>

          <p className="text-brand-silver/70 mb-10 max-w-lg">
            Creative and detail-oriented Graphic Designer and Video Editor with 3+ years of experience crafting visually engaging content for social media, marketing, and branding.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-teal text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-brand-teal/20"
            >
              View My Work <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-charcoal border border-brand-silver/10 text-brand-offwhite rounded-xl font-bold flex items-center gap-2"
            >
              Let&apos;s Talk
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-brand-silver/50">
            <div className="flex items-center gap-2">
              <Video size={20} />
              <span className="text-sm font-medium">Video Editing</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette size={20} />
              <span className="text-sm font-medium">Graphic Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Play size={20} />
              <span className="text-sm font-medium">Motion Graphics</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <FacePortrait />
            
            <div className="mt-8 glass p-6 rounded-2xl border border-brand-teal/20 shadow-xl">
              <div className="flex items-center justify-between gap-8">
                <div>
                  <p className="text-xs text-brand-teal font-bold uppercase tracking-widest mb-1">Based in</p>
                  <p className="text-lg font-bold">Lahore, Pakistan</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-brand-teal font-bold uppercase tracking-widest mb-1">Experience</p>
                  <p className="text-lg font-bold">3+ Years</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-brand-teal/30 rounded-tr-3xl hidden md:block" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-brand-teal/30 rounded-bl-3xl hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
}
