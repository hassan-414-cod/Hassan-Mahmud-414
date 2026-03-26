'use client';

import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor in Computer Science',
    institution: 'Lahore Garrison University, Lahore',
    period: '2022 - Present',
    description: 'Focusing on software development, design, and emerging technologies. Actively involved in university societies.',
    status: 'Ongoing'
  },
  {
    degree: 'Intermediate (Pre-Engineering)',
    institution: 'KIPS College, Garden Town, Lahore',
    period: '2021 - 2022',
    description: 'Strong foundation in mathematics, physics, and chemistry. Achieved GPA: B+.',
    status: 'Completed'
  },
  {
    degree: 'Matriculation',
    institution: 'DHA Senior School for Boys, Lahore',
    period: '2019 - 2020',
    description: 'Focus on Biology, Chemistry, and Physics. Achieved GPA: A*.',
    status: 'Completed'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-[0.3em] mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Academic <span className="text-brand-teal">Timeline</span></h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-brand-silver/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-brand-teal border-4 border-brand-navy -translate-x-1/2 hidden md:block z-10 shadow-[0_0_15px_rgba(58,107,127,0.5)]" />

                <div className="md:w-1/2">
                  <div className={`p-8 glass rounded-3xl border border-brand-silver/5 hover:border-brand-teal/20 transition-all ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-2 rounded-lg bg-brand-teal/10 text-brand-teal">
                        <GraduationCap size={20} />
                      </div>
                      <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">{item.period}</span>
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-2">{item.degree}</h4>
                    <p className="text-brand-teal font-medium mb-4">{item.institution}</p>
                    <p className="text-brand-silver/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className={`mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-tighter ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className={`px-2 py-1 rounded-md ${item.status === 'Ongoing' ? 'bg-brand-teal/20 text-brand-teal' : 'bg-brand-silver/10 text-brand-silver'}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
