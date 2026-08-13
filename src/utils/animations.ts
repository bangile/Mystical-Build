import { type Variants } from 'motion/react';

// Refined architectural luxury easing curve (Cubic Bezier: [0.22, 1, 0.36, 1])
export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 28 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.75,
      ease: luxuryEase,
    }
  }
};

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    }
  }
};

export const staggerContainer = (staggerDelay = 0.12, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    }
  }
});

export const scaleUp: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.7,
      ease: luxuryEase,
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.75,
      ease: luxuryEase,
    }
  }
};

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.75,
      ease: luxuryEase,
    }
  }
};
