import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { COURSES } from '../data/content';
import { Book, Code, Database, Layers, ArrowRight } from 'lucide-react';

export const Courses = () => {
  return (
    <div className="pt-44 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
      <ScrollReveal animation="slide-right" duration={0.8}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-dark/5 dark:border-white/10 pb-10">
          <div>
            <h1 className="text-6xl font-serif text-dark dark:text-white mb-6">Teaching</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
              Course materials, syllabi, and resources for students at Manipal University Jaipur.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <span className="text-sm font-bold text-white dark:text-dark bg-dark dark:bg-white px-6 py-3 rounded-full shadow-lg">Academic Year 2024-25</span>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {COURSES.map((course, i) => (
          <ScrollReveal key={course.id} delay={i * 0.15} animation="blur-slide-up">
            <div className="group bg-white dark:bg-[#181818] rounded-[3rem] p-9 border border-transparent dark:border-white/5 hover:border-accent/10 shadow-sm hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
              
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cream to-white dark:from-[#202020] dark:to-[#181818] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl ${i % 2 === 0 ? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'}`}>
                   {i % 2 === 0 ? <Code className="w-8 h-8" /> : <Database className="w-8 h-8" />}
                </div>
                <span className={`text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider ${course.level === 'Postgraduate' ? 'bg-dark text-white dark:bg-white dark:text-dark' : 'bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-400'}`}>
                  {course.level}
                </span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif text-dark dark:text-white mb-3 group-hover:text-accent transition-colors">{course.title}</h3>
                <p className="text-sm font-mono text-gray-400 mb-6">{course.code} • {course.semester}</p>
                
                <p className="text-gray-600 dark:text-gray-400 mb-10 flex-grow text-lg font-light leading-relaxed">
                  {course.description}
                </p>

                <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex gap-6">
                   <button className="text-sm font-bold text-dark dark:text-white flex items-center gap-2 hover:gap-3 transition-all">
                     View Syllabus <ArrowRight className="w-4 h-4" />
                   </button>
                   <button className="text-sm font-bold text-gray-400 hover:text-secondary transition-colors">Resources</button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};