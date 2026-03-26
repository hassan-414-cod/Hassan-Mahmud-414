'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, MapPin, Phone, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hassanmahmood.4242@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs font-bold text-brand-teal uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8">Let&apos;s Create <span className="text-brand-teal">Something</span> Impactful</h3>
            <p className="text-brand-silver/60 text-lg mb-12 max-w-lg">
              Open to Remote, Hybrid, or On-Site opportunities. Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-charcoal flex items-center justify-center text-brand-teal">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-silver/50 uppercase font-bold tracking-widest">Phone</p>
                  <p className="text-lg font-bold">+92 3498471863</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-charcoal flex items-center justify-center text-brand-teal">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-silver/50 uppercase font-bold tracking-widest">Location</p>
                  <p className="text-lg font-bold">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 glass rounded-3xl border border-brand-teal/20">
              <p className="text-sm text-brand-silver/70 italic mb-0">
                &quot;At 22, I bring youthful creativity combined with 3+ years of professional experience across corporate and non-profit sectors.&quot;
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Email Button */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-teal-500 to-navy-900 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative glass p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-brand-silver/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white shadow-lg">
                    <Mail size={24} />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-xs font-bold text-brand-teal uppercase tracking-widest">Email Me</p>
                    <p className="font-bold truncate max-w-[200px] sm:max-w-none">hassanmahmood.4242@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={copyEmail}
                    className="p-3 rounded-xl bg-brand-navy hover:bg-brand-charcoal transition-colors text-brand-silver"
                    title="Copy Email"
                  >
                    {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                  </button>
                  <a 
                    href="mailto:hassanmahmood.4242@gmail.com"
                    className="px-6 py-3 rounded-xl bg-brand-teal text-white font-bold hover:shadow-lg hover:shadow-brand-teal/20 transition-all"
                  >
                    Send
                  </a>
                </div>
              </div>
            </motion.div>

            {/* LinkedIn Button */}
            <motion.a 
              href="https://www.linkedin.com/in/hassan-mahmud-952803271/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="group glass p-6 rounded-2xl flex items-center gap-4 border border-brand-silver/10 hover:border-[#0077B5]/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0077B5] flex items-center justify-center text-white shadow-lg">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0077B5] uppercase tracking-widest">LinkedIn</p>
                <p className="font-bold">Connect on LinkedIn</p>
              </div>
            </motion.a>

            {/* Instagram Portfolio */}
            <motion.a 
              href="https://www.instagram.com/kun_foundation_org/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="group glass p-6 rounded-2xl flex items-center gap-4 border border-brand-silver/10 hover:border-pink-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <Instagram size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-pink-500 uppercase tracking-widest">Portfolio</p>
                <p className="font-bold">View My Work @kun_foundation_org</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-24 py-12 border-t border-brand-silver/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-silver/40 text-sm">
            © {new Date().getFullYear()} Hassan Mahmud. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#about" className="text-xs font-bold text-brand-silver/40 hover:text-brand-teal uppercase tracking-widest transition-colors">About</a>
            <a href="#projects" className="text-xs font-bold text-brand-silver/40 hover:text-brand-teal uppercase tracking-widest transition-colors">Projects</a>
            <a href="#contact" className="text-xs font-bold text-brand-silver/40 hover:text-brand-teal uppercase tracking-widest transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
