// components/AnimatedSection.tsx
'use client';

import { motion, Variants } from 'framer-motion';

type AnimationType =
  | 'fadeUp'
  | 'fadeIn'
  | 'slideLeft'
  | 'slideRight'
  | 'zoomIn'
  | 'rotateIn'
  | 'flipX'
  | 'flipY'
  | 'bounce'
  | 'scaleUp'
  | 'fadeDown'
  | 'fadeSlideIn'
  | 'elastic'
  | 'float'
  | 'shake'
  | 'flip'
  | 'slideUp'
  | 'swirl'
  | 'pulse'
  | 'wave'
  | 'stretch'
  | 'neonGlow'
  | 'tada'
  | 'hinge'
  | 'jackInTheBox';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

const variants: Record<AnimationType, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -90 },
    visible: { opacity: 1, rotate: 0 },
  },
  flipX: {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0 },
  },
  flipY: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 },
  },
  bounce: {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: [0, -15, 0, -7, 0], // bounce effect
      opacity: 1,
      transition: { duration: 1, times: [0, 0.3, 0.5, 0.7, 1] },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },

  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeSlideIn: {
    hidden: { opacity: 0, x: -30, y: 20 },
    visible: { opacity: 1, x: 0, y: 0 }
  },
  elastic: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 150,
        damping: 10
      }
    }
  },
  float: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  },
  shake: {
    hidden: { x: 0 },
    visible: {
      x: [-5, 5, -5, 5, 0],
      transition: { duration: 0.5 }
    }
  },
  flip: {
    hidden: { opacity: 0, rotateY: 180 },
    visible: { opacity: 1, rotateY: 0 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { ease: [0.175, 0.885, 0.32, 1.275] }
    }
  },
  swirl: {
    hidden: { opacity: 0, rotate: -180, scale: 0.5 },
    visible: { opacity: 1, rotate: 0, scale: 1 }
  },
  pulse: {
    visible: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 1.5,
        repeat: Infinity
      }
    }
  },
  wave: {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1
      }
    })
  },
  stretch: {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { 
      opacity: 1, 
      scaleX: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  },
  neonGlow: {
    hidden: { opacity: 0.5, textShadow: '0 0 8px rgba(0,0,0,0)' },
    visible: {
      opacity: 1,
      textShadow: [
        '0 0 8px rgba(100,255,218,0)',
        '0 0 8px rgba(100,255,218,0.8)',
        '0 0 8px rgba(100,255,218,0)'
      ],
      transition: { duration: 1.5, repeat: Infinity }
    }
  },
  tada: {
    visible: {
      scale: [1, 0.9, 0.9, 1.1, 1],
      rotate: [0, -3, 3, -3, 0],
      transition: { duration: 1 }
    }
  },
  hinge: {
    hidden: { rotate: 0, translateY: 0, opacity: 1 },
    visible: {
      rotate: [-10, 80, 60],
      translateY: [0, 0, 300],
      opacity: [1, 1, 0],
      transition: { duration: 1.5 }
    }
  },
  jackInTheBox: {
    hidden: { opacity: 0, scale: 0.5, rotate: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 150 }
    }
  }
};

export default function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
}: AnimatedSectionProps) {
  const selectedVariant = variants[animation] || variants.fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={selectedVariant}
      transition={{ duration, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
