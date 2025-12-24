"use client";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const InitialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating 3D elements
  const FloatingElement = ({ delay, x, y, size, icon }: { delay: number; x: number; y: number; size: number; icon: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.2, 1],
        x: [x, x + 20, x],
        y: [y, y - 30, y],
        rotateX: [0, 15, 0],
        rotateY: [0, 15, 0],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        fontSize: `${size}px`,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div
        className="text-accent opacity-40 dark:opacity-30"
        style={{
          transform: "translateZ(20px)",
          filter: "blur(0.5px)",
        }}
      >
        {icon}
      </div>
    </motion.div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center items-center bg-section-1 p-6 overflow-hidden"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Floating 3D icons */}
      <FloatingElement delay={0} x={10} y={20} size={40} icon="⚡" />
      <FloatingElement delay={0.5} x={85} y={30} size={35} icon="🚀" />
      <FloatingElement delay={1} x={15} y={70} size={30} icon="💻" />
      <FloatingElement delay={1.5} x={80} y={75} size={35} icon="✨" />
      <FloatingElement delay={2} x={50} y={15} size={25} icon="🎯" />
      <FloatingElement delay={2.5} x={5} y={50} size={30} icon="🔥" />
      <FloatingElement delay={3} x={90} y={60} size={28} icon="⚙️" />

      {/* Main content with 3D effect */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative text-center max-w-3xl z-10"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* 3D Card effect wrapper */}
        <motion.div
          whileHover={{
            rotateY: 5,
            rotateX: -2,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-3xl blur-xl opacity-30"
            style={{
              background: "linear-gradient(135deg, var(--color-accent) 0%, transparent 50%)",
              transform: "translateZ(-50px)",
            }}
          />
          
          <div className="relative bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-white/10 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <AnimatedText
                text="Hi, I'm Er.Arjun Nepali Currently Fullstack developer"
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-text-primary via-accent to-text-primary bg-clip-text text-transparent"
              />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl sm:text-2xl text-text-secondary mb-8 font-medium"
            >
              Computer Engineer
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link
                  href="/development"
                  className="px-8 py-4 bg-gradient-to-r from-accent to-accent-hover text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 block relative overflow-hidden group"
                >
                  <span className="relative z-10">View Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-hover to-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link
                  href="https://www.linkedin.com/in/arjun-nepali-32b876244/"
                  className="px-8 py-4 border-2 border-accent rounded-xl font-semibold hover:bg-accent/10 transition-all duration-300 block relative overflow-hidden group text-text-primary"
                >
                  <span className="relative z-10">LinkedIn</span>
                  <motion.div
                    className="absolute inset-0 bg-accent/5"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InitialSection;
