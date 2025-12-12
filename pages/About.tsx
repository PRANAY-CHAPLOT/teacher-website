
import React, { useRef } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const ParallaxImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Maps scroll progress to vertical movement for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);

  return (
    <div ref={ref} className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] w-full border-[8px] border-white/40 dark:border-white/5">
      <motion.div style={{ y, scale, height: "120%" }} className="absolute -top-[10%] left-0 w-full">
         <img 
            src="https://picsum.photos/seed/neelam_academic/800/1000" 
            alt="Dr. Neelam Chaplot" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
         />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Decorative Badge */}
      <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full">
        <span className="text-sm font-bold tracking-widest uppercase">Est. 2007</span>
      </div>
    </div>
  )
}

export const About = () => {
  return (
    <div className="pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal animation="blur-slide-up" duration={1}>
          <h1 className="text-6xl md:text-7xl font-serif text-dark dark:text-white mb-20 text-center">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary italic">Journey</span>
          </h1>
        </ScrollReveal>

        {/* Intro Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="prose prose-xl dark:prose-invert text-gray-600 dark:text-gray-300 font-sans leading-relaxed font-light">
              <p className="lead text-2xl text-dark dark:text-white font-serif mb-8 leading-normal">
                Dr. Neelam Chaplot serves as an Associate Professor and Deputy HOD in the Department of Computer Science & Engineering at Manipal University Jaipur (MUJ).
              </p>
              <p className="mb-8 text-lg">
                With over 16 years of experience in academia, she has dedicated her career to fostering a deep understanding of computer science fundamentals while encouraging students to explore the frontiers of technology. Her classroom philosophy revolves around "active learning"—where students don't just consume information but build with it.
              </p>
              <p className="text-lg">
                Her research interests are AI, Machine Learning, and Deep Learning. She believes that the best solutions come from interdisciplinary approaches, often collaborating with departments across engineering and humanities.
              </p>
              <div className="mt-8 flex gap-4">
                 <div className="flex flex-col">
                    <span className="text-4xl font-serif text-secondary font-bold">16+</span>
                    <span className="text-sm text-gray-400 uppercase tracking-widest mt-1">Years Exp.</span>
                 </div>
                 <div className="w-px h-16 bg-gray-200 dark:bg-white/10 mx-4"></div>
                 <div className="flex flex-col">
                    <span className="text-4xl font-serif text-accent font-bold">20+</span>
                    <span className="text-sm text-gray-400 uppercase tracking-widest mt-1">Publications</span>
                 </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="w-full hidden lg:block" animation="zoom-in">
             <ParallaxImage />
          </ScrollReveal>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-32">
           <ScrollReveal animation="fade-up">
             <h2 className="text-4xl font-serif text-dark dark:text-white mb-16 text-center">Education</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { degree: 'Ph.D in Computer Science', school: 'Banasthali Vidyapith', year: '2017' },
               { degree: 'M.Tech in Computer Science', school: 'Banasthali Vidyapith', year: '' },
               { degree: 'B.E. in Computer Science', school: 'Bharati Vidyapeeth College of Engineering', year: '' },
             ].map((edu, i) => (
                <ScrollReveal key={i} delay={i * 0.15} animation="blur-slide-up">
                   <div className="bg-white dark:bg-[#181818] p-8 rounded-[2rem] shadow-sm border border-transparent dark:border-white/5 hover:border-secondary/20 h-full flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500">
                      <div className="w-12 h-12 bg-cream dark:bg-white/5 rounded-full flex items-center justify-center text-dark dark:text-white mb-4">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl text-dark dark:text-white mb-2">{edu.degree}</h3>
                      <p className="text-sm text-secondary font-bold uppercase tracking-wide mb-1">{edu.school}</p>
                      {edu.year && <span className="text-xs text-gray-400 font-mono">{edu.year}</span>}
                   </div>
                </ScrollReveal>
             ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
             <h2 className="text-4xl font-serif text-dark dark:text-white mb-16 text-center">Career Milestones</h2>
          </ScrollReveal>

          <div className="relative ml-4 md:ml-0 space-y-16">
            {/* Animated Line */}
            <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: "100%" }}
               viewport={{ once: true, margin: "0px 0px -20% 0px" }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="absolute left-0 top-0 w-0.5 bg-dark/10 dark:bg-white/10"
            />

            {[
              { year: 'Nov 2023 - Present', title: 'Associate Professor & Deputy HOD', org: 'Manipal University Jaipur', desc: 'Leading academic administration and research initiatives in CSE.' },
              { year: 'Feb 2022 - Nov 2023', title: 'Assistant Professor (Selection Grade)', org: 'Manipal University Jaipur', desc: 'Focus on advanced curriculum and student mentorship.' },
              { year: 'Jul 2019 - Feb 2022', title: 'Associate Professor', org: 'Poornima College of Engineering', desc: 'Teaching core computer science subjects and guiding projects.' },
              { year: 'Dec 2017 - Jul 2019', title: 'Associate Professor', org: 'JECRC, Jaipur', desc: 'Research and teaching in engineering.' },
              { year: 'Dec 2007 - Dec 2017', title: 'Assistant Professor', org: 'JECRC, Jaipur', desc: 'A decade of foundational teaching and academic growth.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.2} animation="blur-slide-up">
                <div className="relative pl-12 md:pl-20 group">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.1, type: "spring", stiffness: 200 }}
                    className="absolute -left-[9px] top-2 w-5 h-5 bg-cream dark:bg-dark rounded-full border-4 border-accent group-hover:border-secondary transition-colors duration-500 z-10"
                  />
                  <span className="inline-block px-5 py-2 bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary/80 text-sm font-bold rounded-full mb-4">{item.year}</span>
                  <h3 className="text-3xl md:text-4xl font-serif text-dark dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">{item.title}</h3>
                  <h4 className="text-xl text-gray-400 mb-6 font-light">{item.org}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
    