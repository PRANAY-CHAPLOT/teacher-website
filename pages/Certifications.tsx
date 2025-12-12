
import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS } from '../data/content';

export const Certifications = () => {
  return (
    <div className="pt-44 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
      <ScrollReveal animation="blur-slide-up">
        <h1 className="text-5xl md:text-7xl font-serif text-dark dark:text-white mb-8 text-center">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary italic">Certifications</span>
        </h1>
        <p className="text-center text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-20 font-light">
          Continuous learning is the hallmark of a great educator. A showcase of technical proficiency and specialized training.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, i) => (
          <ScrollReveal key={cert.id} delay={i * 0.05} animation="blur-slide-up">
            <div className="group bg-white dark:bg-[#181818] p-8 rounded-[2.5rem] border border-transparent dark:border-white/5 hover:border-accent/20 shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
               {/* Decorative Gradient Blob */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500"></div>

               <div className="flex justify-between items-start mb-6 relative z-10">
                 <div className="p-3 bg-cream dark:bg-white/5 rounded-2xl text-dark dark:text-white group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 stroke-[1.5]" />
                 </div>
                 {cert.link && (
                   <a href={cert.link} className="text-gray-400 hover:text-accent transition-colors">
                     <ExternalLink className="w-5 h-5" />
                   </a>
                 )}
               </div>

               <div className="flex-grow">
                 <h3 className="text-xl font-serif text-dark dark:text-white mb-3 leading-tight group-hover:text-secondary transition-colors">
                   {cert.title}
                 </h3>
                 <p className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                   {cert.issuer}
                 </p>
                 {cert.credentialId && (
                   <p className="text-xs text-gray-400 font-mono mb-4 truncate">
                     ID: {cert.credentialId}
                   </p>
                 )}
               </div>

               <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-4">
                 <div className="flex items-center gap-2">
                   <Calendar className="w-4 h-4" />
                   <span>{cert.date}</span>
                 </div>
                 <div className="flex items-center gap-1 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-md">
                    <CheckCircle className="w-3 h-3" />
                    <span className="text-xs font-bold">Verified</span>
                 </div>
               </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
