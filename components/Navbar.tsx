import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, ArrowRight, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchModal } from './SearchModal';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      children: [
        { name: 'Biography', path: '/about' },
        { name: 'Certifications', path: '/certifications' },
      ]
    },
    { 
      name: 'Research', 
      path: '/research',
      children: [
        { name: 'Publications', path: '/research' },
        { name: 'Journals', path: '/journals' },
      ]
    },
    { 
      name: 'Teaching', 
      path: '/courses',
      children: [
        { name: 'Courses', path: '/courses' },
        { name: 'Resources', path: '/courses' },
      ]
    },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <div className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center w-full pointer-events-none"> 
        {/* pointer-events-none on wrapper so clicks pass through to sides, but nav needs pointer-events-auto */}
        
        <nav 
          className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex items-center justify-between mx-auto rounded-[2rem] border backdrop-blur-2xl shadow-xl shadow-dark/5 dark:shadow-black/20 ${
            scrolled 
              ? 'w-[92%] lg:w-[85%] max-w-6xl bg-cream/80 dark:bg-black/60 border-white/30 dark:border-white/10 py-3 px-6' 
              : 'w-[95%] lg:w-[90%] max-w-7xl bg-cream/50 dark:bg-black/40 border-white/20 dark:border-white/5 py-4 px-8'
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-xl md:text-2xl font-bold text-dark dark:text-cream tracking-tight leading-none group flex flex-col items-start">
               <div className="flex items-baseline">
                 <span>Dr. Neelam</span>
                 <span className="text-accent ml-0.5 animate-cursor font-mono">_</span>
               </div>
               <span className="font-light italic -mt-1 text-lg group-hover:text-accent transition-colors duration-500 font-mono text-xs tracking-widest uppercase opacity-60">CS . Engineering</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`font-sans text-sm font-medium tracking-wide flex items-center gap-1 py-2 px-4 rounded-full transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'text-dark dark:text-cream bg-white/60 dark:bg-white/10' 
                      : 'text-dark/80 dark:text-white/70 hover:text-dark dark:hover:text-cream hover:bg-white/40 dark:hover:bg-white/10 hover:text-accent dark:hover:text-secondary'
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 w-64">
                    {/* Invisible bridge */}
                    <div className="absolute -top-8 left-0 w-full h-8 bg-transparent"></div> 
                    
                    <div className="bg-white/90 dark:bg-[#1A1A1A]/95 backdrop-blur-3xl rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60 dark:border-white/10 overflow-hidden p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="group flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 dark:text-gray-200 hover:text-dark dark:hover:text-white hover:bg-cream/50 dark:hover:bg-white/5 rounded-2xl transition-all"
                        >
                          <span className="font-medium">{child.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={toggleTheme}
                className="p-3 rounded-full hover:bg-white/40 dark:hover:bg-white/10 transition-colors text-dark dark:text-cream group"
                aria-label="Toggle Theme"
              >
                {isDark ? 
                  <Sun className="w-5 h-5 group-hover:rotate-90 transition-transform text-accent" /> : 
                  <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                }
              </button>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-3 rounded-full hover:bg-white/40 dark:hover:bg-white/10 transition-colors text-dark dark:text-cream group"
                aria-label="Search"
              >
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform hover:text-secondary dark:hover:text-secondary" />
              </button>
              <Link to="/courses" className="px-6 py-3 bg-dark dark:bg-white text-cream dark:text-dark rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 transition-all shadow-lg shadow-dark/10 flex items-center gap-2 group">
                Student Portal
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse group-hover:bg-accent transition-colors"></div>
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full hover:bg-white/20 transition-colors text-dark dark:text-cream"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/20 transition-colors text-dark dark:text-cream"
            >
               {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark dark:text-cream p-2 rounded-full hover:bg-white/20 transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
             <motion.div 
               initial={{ opacity: 0, y: -20, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: -20, scale: 0.95 }}
               transition={{ duration: 0.4, ease: "easeOut" }}
               className="pointer-events-auto mt-2 w-[92%] max-w-md bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/40 dark:border-white/10 overflow-hidden lg:hidden"
             >
                <div className="px-8 py-10 space-y-6">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between mb-2">
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="text-2xl font-serif text-dark dark:text-white hover:text-accent transition-colors"
                        >
                          {item.name}
                        </Link>
                        {item.children && <ChevronDown className="w-5 h-5 text-gray-400" />}
                      </div>
                      {item.children && (
                        <div className="pl-4 space-y-4 border-l-2 border-dark/5 dark:border-white/10 ml-1 my-4">
                          {item.children.map(child => (
                             <Link key={child.name} to={child.path} onClick={() => setIsOpen(false)} className="block text-base text-gray-600 dark:text-gray-400 font-medium hover:text-secondary transition-colors">
                               {child.name}
                             </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-8 mt-6 border-t border-gray-100 dark:border-white/5 flex gap-4">
                     <Link to="/courses" onClick={() => setIsOpen(false)} className="flex-1 text-center px-4 py-4 bg-dark dark:bg-white text-cream dark:text-dark rounded-[1.5rem] text-base font-medium active:scale-95 transition-transform">
                        Access Student Portal
                     </Link>
                  </div>
                </div>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};