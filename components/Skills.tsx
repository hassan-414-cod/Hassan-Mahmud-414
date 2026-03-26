'use client';

import { motion } from 'motion/react';
import { 
  Palette, 
  Video, 
  Camera, 
  Share2, 
  Zap, 
  Users, 
  PenTool, 
  Monitor,
  CheckCircle2
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Design Skills',
    icon: <Palette className="text-brand-teal" />,
    skills: [
      'Graphic Design',
      'Motion Graphics & Dynamic Visuals',
      'Color Grading & Photo Enhancing',
      'Photography & Visual Storytelling'
    ]
  },
  {
    title: 'Video Production',
    icon: <Video className="text-brand-teal" />,
    skills: [
      'Video Editing',
      'Reels Production',
      'Short-form Content Creation'
    ]
  },
  {
    title: 'Social Media',
    icon: <Share2 className="text-brand-teal" />,
    skills: [
      'Content Creation & Curation',
      'Instagram Strategy',
      'Campaign Planning'
    ]
  },
  {
    title: 'Technical Proficiencies',
    icon: <Monitor className="text-brand-teal" />,
    skills: [
      'Adobe Photoshop (Expert)',
      'Adobe Premiere Pro',
      'Lightroom',
      'CapCut',
      'Canva'
    ]
  }
];

const strengths = [
  'Quick Learner & Resourceful',
  'Attention to Visual Details',
  'Ability to Work Under Pressure',
  'Collaborative Team Player',
  'Continuous Creative Growth'
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(58,107,127,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-[0.3em] mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Skills & <span className="text-brand-teal">Proficiencies</span></h3>
          <p className="text-brand-silver/60 max-w-2xl mx-auto">
            Combining technical mastery with a keen eye for detail to create visuals that resonate and engage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 glass rounded-3xl border border-brand-silver/5 hover:border-brand-teal/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold mb-6">{category.title}</h4>
              <ul className="space-y-4">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-start gap-3 text-sm text-brand-silver/70">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="glass rounded-3xl p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-6">Personal <span className="text-brand-teal">Strengths</span></h4>
              <p className="text-brand-silver/70 mb-8">
                Beyond technical skills, I bring a mindset focused on growth, efficiency, and collaborative success.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {strengths.map((strength, i) => (
                  <motion.div 
                    key={strength}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-brand-navy/40 border border-brand-silver/5"
                  >
                    <CheckCircle2 size={18} className="text-brand-teal flex-shrink-0" />
                    <span className="text-sm font-medium">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden glass border border-brand-silver/10 flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-brand-teal/5 group-hover:bg-brand-teal/10 transition-colors" />
                <div className="text-center relative z-10 p-8">
                  <div className="w-16 h-16 rounded-full bg-brand-teal flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-teal/20 group-hover:scale-110 transition-transform">
                    <Zap className="text-white" fill="white" />
                  </div>
                  <p className="font-bold text-lg mb-2">Motion Demo Reel</p>
                  <p className="text-xs text-brand-silver/60 uppercase tracking-widest">Click to Play (Coming Soon)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
