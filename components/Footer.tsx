import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight, Instagram, GraduationCap, School, FlaskConical } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-cream via-[#FF9F76] to-[#5E81D6] dark:from-[#020617] dark:via-[#1e1b4b] dark:to-[#312e81] pt-20 pb-10 overflow-hidden relative transition-colors duration-500">
       {/* 
         Light Mode: Vibrant Sunset (Cream -> Saturated Peach -> Deep Periwinkle)
         Dark Mode: Vibrant Moonlight (Midnight Black -> Deep Indigo -> Vibrant Blue-Purple)
       */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Main Heading */}
        <h2 className="text-5xl md:text-7xl font-serif text-dark dark:text-white mb-5 tracking-tight transition-colors">
          Academic <span className="text-dark dark:text-indigo-100">Community</span>
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-dark/80 dark:text-indigo-100/80 max-w-2xl mx-auto mb-12 font-sans leading-relaxed transition-colors">
          Using computational thinking to unlock innovation, research, and engineering excellence everyday. Join the worldwide academic movement.
        </p>
        
        {/* Input Field - Capsule Style */}
        <div className="max-w-xl mx-auto mb-16 relative">
           <div className="relative flex items-center">
             <input 
               type="email" 
               placeholder="Your email address" 
               className="w-full pl-8 pr-20 py-5 rounded-full bg-black/10 dark:bg-white/10 border border-white/10 dark:border-white/20 text-dark dark:text-white placeholder-dark/60 dark:placeholder-white/70 focus:outline-none focus:bg-black/5 dark:focus:bg-white/15 transition-all text-lg backdrop-blur-sm"
             />
             <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-dark/60 dark:text-white/80 hover:text-dark dark:hover:text-white hover:translate-x-1 transition-all">
               <ArrowRight className="w-8 h-8 font-light" strokeWidth={1.5} />
             </button>
           </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 font-sans font-medium text-dark/80 dark:text-indigo-100">
          <Link to="/about" className="hover:text-dark dark:hover:text-white hover:underline decoration-1 underline-offset-4 transition-all">About Dr. Neelam</Link>
          <Link to="/courses" className="hover:text-dark dark:hover:text-white hover:underline decoration-1 underline-offset-4 transition-all">Resources</Link>
          <Link to="/blog" className="hover:text-dark dark:hover:text-white hover:underline decoration-1 underline-offset-4 transition-all">Blog</Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-12">
          
          {/* Google Scholar */}
          <a href="https://scholar.google.com/citations?user=CclRSYUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" className="text-dark dark:text-white/80 hover:text-dark dark:hover:text-white hover:scale-110 transition-all duration-300">
            <GraduationCap className="w-6 h-6" />
          </a>

          {/* ResearchGate */}
          <a href="https://www.researchgate.net/profile/Neelam-Chaplot" target="_blank" rel="noopener noreferrer" aria-label="ResearchGate" className="text-dark dark:text-white/80 hover:text-dark dark:hover:text-white hover:scale-110 transition-all duration-300">
            <FlaskConical className="w-6 h-6" />
          </a>

          {/* MUJ Profile */}
          <a href="https://jaipur.manipal.edu/fosta/faculty-details.php?url=172/" target="_blank" rel="noopener noreferrer" aria-label="Manipal University Profile" className="text-dark dark:text-white/80 hover:text-dark dark:hover:text-white hover:scale-110 transition-all duration-300">
            <School className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/dr-neelam-chaplot-29993439" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-dark dark:text-white/80 hover:text-dark dark:hover:text-white hover:scale-110 transition-all duration-300">
            <Linkedin className="w-6 h-6 fill-current" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/neelam_chaplot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-dark dark:text-white/80 hover:text-dark dark:hover:text-white hover:scale-110 transition-all duration-300">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-dark/60 dark:text-indigo-200/60 font-sans transition-colors">
          <p>© 2025 Dr. Neelam Chaplot</p>
        </div>

      </div>
    </footer>
  );
};