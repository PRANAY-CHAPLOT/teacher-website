import React, { useState } from 'react';
import { generateResearchResponse } from '../services/geminiService';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ResearchAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse('');
    
    try {
      const result = await generateResearchResponse(query);
      setResponse(result);
    } catch (err) {
      setResponse("I apologize, but I'm having trouble connecting to the research database right now.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-96 mb-4 overflow-hidden border border-primary/10"
          >
            <div className="bg-primary p-4 text-cream flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="font-serif font-bold">Research Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-accent">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 h-80 overflow-y-auto bg-gray-50 flex flex-col gap-4">
              {!response && !isLoading && (
                <div className="text-gray-500 text-sm text-center mt-10">
                  <p>Ask me about Computer Science trends, specific research topics, or details about the field.</p>
                  <p className="mt-2 text-xs text-primary/60">Powered by Gemini & Google Search</p>
                </div>
              )}
              
              {query && response && (
                <div className="flex flex-col gap-3">
                   <div className="self-end bg-primary/10 text-primary px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] text-sm">
                    {query}
                   </div>
                   <div className="self-start bg-white border border-gray-100 shadow-sm text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[95%] text-sm leading-relaxed">
                    {response}
                   </div>
                </div>
              )}

              {isLoading && (
                <div className="flex items-center gap-2 text-primary/50 text-sm self-center mt-4">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                  Searching knowledge base...
                </div>
              )}
            </div>

            <form onSubmit={handleSearch} className="p-3 border-t border-gray-100 bg-white flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-2 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary/20"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-cream p-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-200 group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />}
      </button>
    </div>
  );
};