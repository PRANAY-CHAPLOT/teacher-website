import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { JOURNALS } from '../data/content';

export const Journals = () => {
  return (
    <div className="pt-44 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
      <ScrollReveal animation="blur-slide-up">
        <h1 className="text-5xl font-serif text-dark dark:text-white mb-12 text-center">Academic <span className="text-primary dark:text-white">Journals</span></h1>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {JOURNALS.map((journal, i) => (
          <ScrollReveal key={journal.id} delay={i * 0.1} animation="blur-slide-up">
            <div className="bg-white dark:bg-[#181818] border-l-4 border-accent p-8 shadow-sm rounded-r-2xl h-full flex flex-col justify-center dark:shadow-none hover:shadow-lg transition-shadow duration-300">
              <p className="text-sm font-bold text-gray-400 mb-2">{journal.role}</p>
              <h3 className="text-2xl font-serif text-dark dark:text-white mb-2">{journal.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{journal.publisher}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};