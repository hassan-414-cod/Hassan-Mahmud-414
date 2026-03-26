'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-display font-bold tracking-tighter"
        >
          HASSAN<span className="text-brand-teal">MAHMUD</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-brand-silver hover:text-brand-teal transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 border-l border-brand-silver/20 pl-4">
            <a href="https://www.linkedin.com/in/hassan-mahmud-952803271/" target="_blank" rel="noopener noreferrer" className="text-brand-silver hover:text-brand-teal transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/kun_foundation_org/" target="_blank" rel="noopener noreferrer" className="text-brand-silver hover:text-brand-teal transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-offwhite p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-brand-silver/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-brand-offwhite hover:text-brand-teal"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4 pt-4 border-t border-brand-silver/10">
                <a href="https://www.linkedin.com/in/hassan-mahmud-952803271/" target="_blank" rel="noopener noreferrer" className="text-brand-silver">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/kun_foundation_org/" target="_blank" rel="noopener noreferrer" className="text-brand-silver">
                  <Instagram size={24} />
                </a>
                <a href="mailto:hassanmahmood.4242@gmail.com" className="text-brand-silver">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
