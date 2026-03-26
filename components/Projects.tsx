'use client';

import { motion } from 'motion/react';
import { ExternalLink, Instagram, Briefcase, Users, Building2, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Kun Foundation',
    role: 'Media Head',
    period: "Jan '25 - Present",
    description: 'Leading visual storytelling for a nonprofit foundation. Managing Instagram identity, event photography, and dynamic motion videos.',
    skills: ['Photography', 'Videography', 'Motion Graphics', 'Social Media Strategy'],
    link: 'https://www.instagram.com/kun_foundation_org/',
    icon: <Users className="text-brand-teal" />,
    image: '/logo refined.png'
  },
  {
    title: 'Upple Hadid',
    role: 'Graphic Designer & Video Editor',
    period: "Jan '23 - Present",
    description: 'Corporate branding for a B2B steel manufacturing company. Produced dynamic motion videos and promotional materials.',
    skills: ['Motion Graphics', 'Corporate Branding', 'Content Planning'],
    icon: <Building2 className="text-brand-teal" />,
    image: '/image_2026-02-21_12-38-19.png'
  },
  {
    title: 'Makhlooq Welfare Trust',
    role: 'Creative Designer',
    period: "Jan '24 - Present",
    description: 'Purpose-driven design for social awareness. Created posters and visuals for campaigns and project achievements.',
    skills: ['Non-Profit Design', 'Collaboration', 'Creative Direction'],
    icon: <Users className="text-brand-teal" />,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    title: 'The IT Society (TechSphere)',
    role: 'Design Lead',
    period: "Jan '23 - Jan '24",
    description: 'Student engagement through design. Created visuals supporting event promotions and student outreach.',
    skills: ['Versatile Design', 'Deadlines', 'Team Collaboration'],
    icon: <GraduationCap className="text-brand-teal" />,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-brand-charcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold text-brand-teal uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured <span className="text-brand-teal">Work</span></h3>
          </div>
          <p className="text-brand-silver/60 max-w-md">
            A selection of projects where I&apos;ve blended creativity with strategy to deliver impactful visual experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 bg-brand-teal text-white rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-[10px] font-bold uppercase tracking-widest">
                  {project.period}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {project.icon}
                      <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">{project.role}</span>
                    </div>
                    <h4 className="text-2xl font-bold">{project.title}</h4>
                  </div>
                </div>
                
                <p className="text-brand-silver/70 mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-lg bg-brand-navy/50 text-brand-silver/80 text-xs border border-brand-silver/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
