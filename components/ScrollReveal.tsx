import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'blur-in' | 'blur-slide-up' | 'zoom-in';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  animation?: AnimationType;
  threshold?: number;
  staggerChildren?: number;
}

export const ScrollReveal: React.FC<Props> = ({ 
  children, 
  width = "100%", 
  className = "", 
  delay = 0,
  duration = 0.9,
  animation = 'blur-slide-up',
  threshold = 0.2,
  staggerChildren = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px", amount: threshold });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'slide-left': {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    'slide-right': {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    'scale-up': {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    'blur-in': {
      hidden: { opacity: 0, filter: 'blur(20px)', scale: 1.02 },
      visible: { opacity: 1, filter: 'blur(0px)', scale: 1 },
    },
    'blur-slide-up': {
      hidden: { opacity: 0, filter: 'blur(10px)', y: 30 },
      visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
    },
    'zoom-in': {
      hidden: { opacity: 0, scale: 0.95, filter: 'blur(5px)' },
      visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    }
  };

  const transition = {
    duration: duration,
    delay: delay,
    ease: [0.22, 1, 0.36, 1], // Custom sophisticated easing
  };

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={{
          hidden: variants[animation].hidden,
          visible: {
            ...variants[animation].visible,
            transition: {
              ...transition,
              staggerChildren: staggerChildren
            }
          }
        }}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};