"use client";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

const InitialSection = () => {
  const FloatingIcon = ({ icon, x, y, size, delay }: any) => (
    <motion.div
      className="absolute text-accent/40"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        fontSize: size,
      }}
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
        rotate: [0, 8, 0],
        opacity: [0.2, 0.6, 0.2],
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-6">

      {/* 🌌 Animated Mesh Background */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          className="absolute w-[900px] h-[900px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
          animate={{ x: [0, 120, 0], y: [0, 80, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            bottom: "-10%",
            right: "-10%",
          }}
          animate={{ x: [0, -120, 0], y: [0, -100, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      {/* ✨ Spotlight center glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />

      {/* 🧿 Floating tech icons */}
      <FloatingIcon icon="⚛️" x={15} y={25} size={40} delay={0} />
      <FloatingIcon icon="🚀" x={80} y={30} size={38} delay={1} />
      <FloatingIcon icon="💻" x={20} y={75} size={34} delay={2} />
      <FloatingIcon icon="🧠" x={85} y={70} size={36} delay={3} />
      <FloatingIcon icon="⚡" x={50} y={15} size={28} delay={1.5} />

      {/* 🧑‍💻 Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-2"
      >
        <div className="absolute inset-0 rounded-full bg-accent blur-1xl opacity-40 animate-pulse" />
        <img
          src="/profile_photo.png"
          alt="Arjun"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border border-white/20 relative"

        />
      </motion.div>

      {/* 👋 Name */}
      <AnimatedText
        text="Hi, I'm Arjun Nepali"
        className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent"
      />

      {/* Role */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl text-white/80 max-w-2xl mb-8"
      >
        Full-Stack Developer crafting scalable SaaS & AI-powered products
      </motion.p>

      {/* Tech stack */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {["Django", "Next.js", "React", "AI", "SaaS", "PostgreSQL"].map(
          (t) => (
            <span
              key={t}
              className="px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm"
            >
              {t}
            </span>
          )
        )}
      </motion.div>

      {/* CTA */}
      <div className="flex gap-4 flex-wrap justify-center">
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/development"
            className="px-10 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-indigo-500 shadow-2xl"
          >
            View Projects
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="https://www.linkedin.com/in/arjun-nepali-32b876244/"
            className="px-10 py-4 rounded-xl border border-white/30 text-white/90 hover:bg-white/10 transition"
          >
            LinkedIn
          </Link>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8"
      >
        <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default InitialSection;