
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Book, FileText, Globe, Layers } from 'lucide-react';
import { searchContent } from '../data/content';
import { SearchResult } from '../types';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    setResults(searchContent(query));
  }, [query]);

  const handleResultClick = (link: string) => {
    navigate(link);
    onClose();
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Research Paper': return <FileText className="w-5 h-5" />;
      case 'Course': return <Book className="w-5 h-5" />;
      case 'Blog Post': return <Layers className="w-5 h-5" />;
      case 'Journal': return <Globe className="w-5 h-5" />;
      default: return <Search className="w-5 h-5" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-cream/90 dark:bg-black/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#1A1A1A] rounded-[2rem] shadow-2xl overflow-hidden border border-dark/5 dark:border-white/10"
          >
            <div className="flex items-center p-6 border-b border-gray-100 dark:border-white/5">
              <Search className="w-6 h-6 text-gray-400 mr-4" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search research, courses, blog posts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-xl text-dark dark:text-white placeholder-gray-400 focus:outline-none font-serif"
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4">
              {query === '' ? (
                <div className="text-center py-12 text-gray-400">
                  <p className="mb-2 text-sm uppercase tracking-widest font-bold">Suggestions</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                     {['Data Structures', 'Cloud Computing', 'AI', 'Mentorship', 'Publications'].map(tag => (
                       <button 
                         key={tag}
                         onClick={() => setQuery(tag)}
                         className="px-4 py-2 bg-gray-50 dark:bg-white/5 rounded-full text-sm hover:bg-secondary/10 hover:text-secondary transition-colors"
                       >
                         {tag}
                       </button>
                     ))}
                  </div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-2">
                    {results.length} Result{results.length !== 1 && 's'} Found
                  </p>
                  {results.map((result, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => handleResultClick(result.link)}
                      className="group flex items-start p-4 rounded-2xl hover:bg-cream dark:hover:bg-white/5 cursor-pointer transition-colors"
                    >
                      <div className="p-3 bg-secondary/10 dark:bg-secondary/20 text-secondary rounded-xl mr-4 group-hover:scale-110 transition-transform">
                        {getIcon(result.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-lg font-serif font-medium text-dark dark:text-white group-hover:text-secondary transition-colors">
                            {result.title}
                          </h4>
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-md">
                            {result.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-accent group-hover:translate-x-1 transition-all self-center ml-4" />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  <p>No results found for "{query}"</p>
                  <p className="text-sm mt-2">Try checking for typos or using different keywords.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
