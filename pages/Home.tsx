
import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowRight, Terminal, Cpu, GitBranch, Code, Binary } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="w-full">
      {/* Decorative gradient behind navbar */}
      <div className="fixed top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-accent/15 via-secondary/10 to-transparent pointer-events-none z-0 dark:from-accent/5 dark:via-secondary/5" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-44 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="z-10 flex flex-col items-start">
              <ScrollReveal animation="blur-slide-up" delay={0.1}>
                 <div className="inline-block px-4 py-2 bg-dark/5 dark:bg-white/10 rounded-lg mb-6 border-l-4 border-accent">
                    <span className="font-mono text-xs font-bold text-dark/70 dark:text-white/80 tracking-widest uppercase">
                       {`// Initialize System`}
                    </span>
                 </div>
                <h1 className="text-6xl lg:text-8xl font-serif text-dark dark:text-white leading-[1.05] mb-8 tracking-tight">
                  Architecting <br />
                  Intelligence. <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-dark to-gray-600 dark:from-white dark:to-gray-400">Design Logic.</span>
                    {/* Code Brackets */}
                    <div className="absolute -right-12 top-2 text-accent/20 dark:text-accent/10 font-mono text-8xl opacity-50 hidden lg:block">{`}`}</div>
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="blur-slide-up" delay={0.3}>
                <p className="text-lg lg:text-xl font-sans text-gray-600 dark:text-gray-300 mb-12 max-w-lg leading-relaxed font-light">
                  Dr. Neelam Chaplot bridges the gap between theoretical Computer Science and applied Engineering, fostering a new generation of algorithmic thinkers.
                </p>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Link 
                    to="/research"
                    className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 bg-dark dark:bg-white text-cream dark:text-dark rounded-full font-medium transition-all shadow-xl shadow-dark/20 dark:shadow-white/10 hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10 mr-2">Explore Research</span>
                    <Terminal className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                  </Link>
                  <Link 
                    to="/courses"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-white dark:bg-white/5 text-dark dark:text-white border-2 border-transparent hover:border-dark/10 dark:hover:border-white/10 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
                  >
                    Student Portal
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="zoom-in" delay={0.2} duration={1.2} className="relative">
              <div className="relative group">
                {/* Decorative Elements - Geometric & Tech */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/20 dark:bg-accent/10 rounded-3xl rotate-12 blur-[60px] animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-[60px]"></div>
                
                {/* Image Container */}
                <div className="relative rounded-[4rem] rounded-tr-none overflow-hidden shadow-2xl border-[4px] border-white/60 dark:border-white/10 animate-float">
                  <img 
                    src="https://picsum.photos/800/1000?grayscale" 
                    alt="Dr. Neelam Chaplot" 
                    className="w-full h-auto object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Tech Badge */}
                  <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
                     <Binary className="w-8 h-8 text-white/80" />
                  </div>

                  <div className="absolute bottom-10 left-10 text-white/90">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/80">System Online</span>
                    </div>
                    <p className="font-serif italic text-2xl">Manipal University Jaipur</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-24 bg-white dark:bg-[#181818] rounded-[3rem] my-12 mx-4 lg:mx-8 shadow-sm relative z-10 overflow-hidden transition-colors duration-500 border border-gray-100 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <ScrollReveal animation="blur-slide-up" duration={1} threshold={0.3}>
            <h2 className="text-4xl md:text-5xl font-serif text-dark dark:text-white mb-16 leading-tight">
              "We often ask '<span className="font-mono text-secondary text-3xl">how.execute()</span>', but rarely '<span className="font-mono text-accent text-3xl">why.exists()</span>'. That's where <span className="relative inline-block"><span className="relative z-10 border-b-4 border-secondary/30">ethics</span></span> comes in."
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-20">
            {[
              { icon: Terminal, title: 'Computational Thinking', text: 'Developing problem-solving skills that apply algorithmic logic to real-world ambiguity.', color: 'text-secondary' },
              { icon: Cpu, title: 'Intelligent Systems', text: 'Researching the frontiers of Machine Learning, Data Mining, and automated reasoning.', color: 'text-accent' },
              { icon: GitBranch, title: 'Open Research', text: 'Collaborative development and publishing in top-tier journals for community knowledge.', color: 'text-dark dark:text-white' }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.2} animation="blur-slide-up" className="h-full">
                <div className="p-9 bg-cream/50 dark:bg-white/5 rounded-[2rem] hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:bg-white dark:hover:bg-[#252525] transition-all duration-500 group border border-transparent dark:border-white/5 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Code className="w-24 h-24 text-current" />
                  </div>
                  <div className={`w-14 h-14 bg-white dark:bg-white/10 rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 ${item.color}`}>
                     <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-dark dark:text-white">{item.title}</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="zoom-in" duration={1} threshold={0.3}>
          <div className="bg-secondary dark:bg-secondary/80 rounded-[4rem] p-9 md:p-16 text-cream relative overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-700">
            {/* Background decoration - Binary/Code */}
            <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-xs overflow-hidden leading-none break-all select-none">
               {Array(500).fill('01 ').join('')}
            </div>
            
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none mix-blend-overlay">
               <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <ScrollReveal delay={0.2} animation="slide-right">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-md text-xs font-bold mb-8 border border-white/20 tracking-widest uppercase font-mono">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Latest_Publication.pdf
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3} animation="blur-slide-up">
                  <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                    Single-View Depth Estimation: Advancing 3D Scene Interpretation With One Lens
                  </h2>
                  <p className="text-xl text-white/90 mb-12 max-w-lg leading-relaxed font-light">
                    Advancing 3D scene interpretation utilizing single-view depth estimation techniques to enhance computer vision capabilities.
                  </p>
                  <a 
                    href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10854440" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-white font-bold text-lg hover:text-white/80 transition-colors"
                  >
                    Read the Abstract 
                    <span className="ml-3 w-8 h-8 rounded-full bg-white text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                </ScrollReveal>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                 <ScrollReveal delay={0.5} animation="slide-left" duration={1}>
                   <a 
                     href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10854440"
                     target="_blank"
                     rel="noopener noreferrer" 
                     className="block w-80 h-[32rem] bg-white dark:bg-[#1A1A1A] rounded-r-[3rem] rounded-l-md shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative transform rotate-3 group-hover:rotate-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer overflow-hidden border border-transparent dark:border-white/5"
                   >
                      <div className="absolute inset-y-0 left-0 w-2 bg-accent/80"></div>
                      <div className="p-10 h-full flex flex-col justify-between pl-10 relative z-10">
                        <div>
                          <div className="font-mono text-[10px] text-gray-400 mb-2">IEEE Access</div>
                          <h4 className="text-dark dark:text-white font-serif text-3xl mb-4 group-hover:text-secondary transition-colors leading-tight">IEEE Access</h4>
                          <div className="flex gap-2 mb-8">
                             <div className="h-1.5 w-16 bg-accent rounded-full"></div>
                             <div className="h-1.5 w-4 bg-gray-200 dark:bg-white/20 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="space-y-4 opacity-40">
                            <div className="flex gap-2">
                                <div className="h-2 bg-dark dark:bg-white/20 rounded w-1/4"></div>
                                <div className="h-2 bg-dark dark:bg-white/20 rounded w-3/4"></div>
                            </div>
                            <div className="h-2 bg-dark dark:bg-white/20 rounded w-full"></div>
                            <div className="h-2 bg-dark dark:bg-white/20 rounded w-5/6"></div>
                            <div className="h-2 bg-dark dark:bg-white/20 rounded w-4/6"></div>
                        </div>

                        <div className="text-right">
                           <p className="font-mono text-6xl text-gray-100 dark:text-white/5 font-bold group-hover:text-secondary/10 transition-colors">2025</p>
                        </div>
                      </div>
                   </a>
                 </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
