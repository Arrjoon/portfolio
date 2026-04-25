"use client";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import SectionSurface from "@/components/SectionSurface";
import { motion } from "framer-motion";

type FloatingIconProps = {
  icon: string;
  x: number;
  y: number;
  size: number;
  delay: number;
};

const InitialSection = () => {
  const FloatingIcon = ({
    icon,
    x,
    y,
    size,
    delay,
  }: FloatingIconProps) => (
    <motion.div
      className="absolute text-accent/25 dark:text-accent/40 pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        fontSize: size,
      }}
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
        rotate: [0, 8, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {icon}
    </motion.div>
  );

  return (
    <SectionSurface className="section-x min-h-screen items-center justify-center py-20 sm:py-24">
      <div className="absolute inset-0 z-[1] pointer-events-none hidden sm:block" aria-hidden>
        <FloatingIcon icon="⚛️" x={8} y={20} size={40} delay={0} />
        <FloatingIcon icon="🚀" x={88} y={18} size={36} delay={1} />
        <FloatingIcon icon="💻" x={6} y={75} size={32} delay={2} />
        <FloatingIcon icon="🧠" x={92} y={72} size={34} delay={3} />
        <FloatingIcon icon="⚡" x={50} y={10} size={28} delay={1.5} />
      </div>

      <div className="relative z-[2] w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full shrink-0 lg:w-[min(48%,28rem)] flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-none">
            <img
              src="/profile_photo.png"
              alt="Arjun"
              className="w-full h-auto min-h-[360px] sm:min-h-[360px] lg:min-h-[420px] max-h-[55vh] lg:max-h-[min(75vh,36rem)] object-cover object-top"
            />
          </div>
        </motion.div>


        <div className="relative w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left min-w-0">
          <AnimatedText
            text="Hi, I'm Arjun Nepali"
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-heading-primary mb-4 [text-align:inherit] w-full drop-shadow-sm"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg sm:text-xl md:text-2xl text-body-secondary max-w-xl mb-8"
          >
            Full-Stack Developer crafting scalable SaaS & AI-powered products
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-10 w-full"
          >
            {["Django", "Next.js", "React", "AI", "SaaS", "PostgreSQL"].map(
              (t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full text-sm border backdrop-blur bg-slate-100/90 border-slate-200/90 text-slate-800 dark:border-white/25 dark:bg-white/10 dark:text-white"
                >
                  {t}
                </span>
              )
            )}
          </motion.div>

          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start w-full">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/development"
                className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-indigo-500 shadow-md dark:shadow-[0_10px_40px_-8px_rgba(99,102,241,0.55)]"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://www.linkedin.com/in/arjun-nepali-32b876244/"
                className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-100/80 transition dark:border-white/30 dark:text-white/90 dark:hover:bg-white/10"
              >
                LinkedIn
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionSurface>
  );
};

export default InitialSection;
