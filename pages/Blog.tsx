import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { BLOG_POSTS } from '../data/content';

export const Blog = () => {
  return (
    <div className="pt-44 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
      <ScrollReveal animation="blur-slide-up">
        <h1 className="text-6xl font-serif text-dark dark:text-white mb-8 text-center">Lab Notes & <span className="text-secondary italic">Thoughts</span></h1>
        <p className="text-center text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 font-light">
          Musings on technology, education, and the evolving landscape of computer science.
        </p>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto space-y-14">
        {BLOG_POSTS.map((post, i) => (
          <ScrollReveal key={i} delay={i * 0.15} animation="blur-slide-up">
            <article className="group bg-white dark:bg-[#181818] rounded-[3.5rem] p-9 md:p-12 shadow-sm border border-white dark:border-white/5 hover:shadow-[0_20px_60px_-15px_rgba(255,140,102,0.15)] dark:shadow-none transition-all duration-500 hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                {post.tags.map(tag => (
                   <span key={tag} className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">{tag}</span>
                ))}
                <span className="text-sm text-gray-400 font-medium">{post.date}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-dark dark:text-white group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-xl font-light transform transition-all duration-500 origin-left group-hover:scale-[1.01] group-hover:text-dark/90 dark:group-hover:text-gray-300">
                {post.excerpt}
              </p>
              <a href="#" className="inline-flex items-center text-dark dark:text-white font-bold text-lg hover:text-secondary transition-colors group/link">
                Read Full Post 
                <span className="block h-[2px] w-0 bg-secondary group-hover/link:w-full transition-all duration-300 ml-2"></span>
              </a>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};