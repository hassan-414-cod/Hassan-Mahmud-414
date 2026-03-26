'use client';

import { motion } from 'motion/react';
import { Sparkles, Heart, Zap, Target } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-3xl overflow-hidden glass border border-brand-silver/10 p-2 relative">
              <Image 
                src="/social-media.png" 
                alt="Social Media Marketing" 
                fill
                className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl border border-brand-teal/20 shadow-2xl">
              <p className="text-4xl font-display font-bold text-brand-teal">3+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-silver/60">Years of<br/>Experience</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-xs font-bold text-brand-teal uppercase tracking-[0.3em] mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Personal <span className="text-brand-teal">Touch</span></h3>
            
            <div className="space-y-6 text-brand-silver/80 text-lg leading-relaxed">
              <p>
                Hi, I&apos;m <span className="text-brand-offwhite font-bold">Hassan!</span> At 22, I&apos;ve already accumulated 3+ years of professional design experience while pursuing my Bachelor&apos;s in Computer Science at Lahore Garrison University.
              </p>
              <p>
                I believe in the power of visual storytelling to connect brands with their audiences—whether it&apos;s through dynamic motion videos for a steel factory or heartfelt campaigns for a welfare trust.
              </p>
              <p>
                I&apos;m a quick learner who thrives under pressure and loves turning creative concepts into reality, even with minimal resources. My background in CS helps me bridge the gap between technical execution and creative vision.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Passion</h4>
                  <p className="text-sm text-brand-silver/60">Driven by social impact and creative storytelling.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Efficiency</h4>
                  <p className="text-sm text-brand-silver/60">Delivering high-quality results under tight deadlines.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Vision</h4>
                  <p className="text-sm text-brand-silver/60">Turning minimal resources into impactful visuals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Growth</h4>
                  <p className="text-sm text-brand-silver/60">Continuously evolving my craft at the age of 22.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
