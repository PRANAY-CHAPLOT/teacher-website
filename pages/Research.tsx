
import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { FileText, Download, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PAPERS } from '../data/content';

export const Research = () => {
  return (
    <div className="pt-44 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
       <div className="text-center mb-20 max-w-4xl mx-auto">
        <ScrollReveal animation="blur-slide-up">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Academic Output</span>
          <h1 className="text-6xl md:text-7xl font-serif text-dark dark:text-white mb-8">
            Research & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Publications</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            A collection of peer-reviewed papers, conference proceedings, and technical reports focusing on scalable computing and intelligent systems.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid gap-8">
        {PAPERS.map((paper, index) => (
          <ScrollReveal key={paper.id} delay={Math.min(index, 6) * 0.05} animation="blur-slide-up">
            <div className="group bg-white dark:bg-[#181818] rounded-[3rem] p-9 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(118,145,214,0.2)] dark:shadow-none transition-all duration-500 border border-transparent dark:border-white/5 hover:border-secondary/20 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 dark:bg-secondary/10 rounded-bl-[3rem] -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-700"></div>

              <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-dark dark:text-white bg-cream dark:bg-white/10 px-3 py-1 rounded-full border border-dark/5 dark:border-white/5">{paper.year}</span>
                    <span className="text-sm font-medium text-secondary">{paper.journal || paper.conference}</span>
                  </div>
                  <h3 className="text-3xl font-serif text-dark dark:text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                    {paper.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl text-lg">
                    {paper.abstract}
                  </p>
                  <div className="flex gap-6">
                     {paper.link && paper.link !== '#' ? (
                       <a 
                         href={paper.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center text-sm font-bold text-dark dark:text-white hover:text-accent transition-colors group/btn"
                       >
                         Read Paper <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                       </a>
                     ) : (
                       <span className="flex items-center text-sm font-bold text-gray-400 cursor-not-allowed">
                         Read Paper <ArrowUpRight className="w-4 h-4 ml-1" />
                       </span>
                     )}
                     
                     {paper.link && paper.link !== '#' ? (
                       <a 
                         href={paper.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center text-sm font-bold text-gray-400 hover:text-dark dark:hover:text-white transition-colors"
                       >
                         <Download className="w-4 h-4 mr-2" /> PDF
                       </a>
                     ) : (
                       <span className="flex items-center text-sm font-bold text-gray-300 cursor-not-allowed">
                         <Download className="w-4 h-4 mr-2" /> PDF
                       </span>
                     )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
