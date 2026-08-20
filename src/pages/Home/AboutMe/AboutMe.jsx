import React from "react";
import { motion } from "framer-motion";
import { MapPin, Zap, Cpu, Activity, Clock, Crosshair } from "lucide-react";

const bentoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const AboutMe = () => {
  return (
    <section
      id="system-profile"
      className="relative mx-auto max-w-[1400px] px-4 py-32 md:px-8"
    >
      <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Crosshair size={16} className="text-neon-cyan" />
            <span className="text-neon-cyan font-mono text-xs uppercase tracking-[0.4em]">
              Module 02
            </span>
          </div>
          <h2 className="text-5xl font-black uppercase italic leading-none tracking-tighter md:text-7xl">
            System <br className="hidden md:block" /> Profile
          </h2>
        </div>
        <p className="max-w-xs font-mono text-[10px] uppercase tracking-widest text-gray-500 md:text-right">
          Engineering digital experiences engineered for maximum velocity and
          zero latency.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.1 }}
        className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-12"
      >
        <motion.div
          variants={bentoVariants}
          className="group relative overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.02] p-8 transition-colors hover:border-white/[0.1] md:col-span-8 md:row-span-2 md:p-12"
        >
          <div className="bg-neon-cyan/[0.03] group-hover:bg-neon-cyan/[0.05] absolute right-0 top-0 h-[500px] w-[500px] rounded-full blur-[100px] transition-colors" />
          <Cpu size={24} className="mb-8 text-gray-600" />
          <h3 className="mb-6 text-3xl font-black uppercase italic leading-[1.1] md:text-5xl">
            I don't just write code.
            <br />
            <span className="from-neon-cyan bg-gradient-to-r to-white bg-clip-text text-transparent">
              I engineer velocity.
            </span>
          </h3>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-gray-400 md:text-xl">
            Bridging the gap between high-performance logic and cinematic visual
            aesthetics. My architecture is built on a foundation of clean state
            management, modular components, and physics-based motion design to
            ensure every interaction feels instantly responsive.
          </p>
        </motion.div>

        <motion.div
          variants={bentoVariants}
          className="group flex flex-col justify-between rounded-2xl border border-white/[0.05] bg-[#0a0a0a] p-8 md:col-span-4 md:row-span-1"
        >
          <div className="flex items-start justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
              Telemetry
            </span>
            <Activity size={16} className="text-neon-cyan animate-pulse" />
          </div>
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="bg-neon-cyan absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-neon-cyan relative inline-flex h-3 w-3 rounded-full"></span>
              </span>
              <span className="text-sm font-bold uppercase tracking-widest">
                Status: Optimal
              </span>
            </div>
            <p className="font-mono text-xs text-gray-500">
              Available for high-impact missions
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={bentoVariants}
          className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0a0a0a] p-8 md:col-span-4 md:row-span-1"
        >
          <div className="absolute -bottom-4 -right-4 opacity-10">
            <MapPin size={120} />
          </div>
          <span className="mb-8 block font-mono text-[10px] uppercase tracking-widest text-gray-500">
            Origin Point
          </span>
          <div>
            <h4 className="text-3xl font-black uppercase italic">Dhaka, BD</h4>
            <div className="text-neon-cyan mt-2 flex items-center gap-2 font-mono text-xs">
              <Clock size={12} />
              <span>UTC +6:00</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={bentoVariants}
          className="bg-neon-cyan flex cursor-pointer flex-col justify-between rounded-2xl p-8 text-black transition-transform hover:scale-[0.98] md:col-span-4 md:row-span-1"
        >
          <div className="flex items-start justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
              Engine Hours
            </span>
            <Zap size={16} />
          </div>
          <div>
            <h4 className="text-6xl font-black italic tracking-tighter">
              8,400<span className="text-2xl">+</span>
            </h4>
            <p className="mt-1 text-xs font-bold uppercase">Hours Logged</p>
          </div>
        </motion.div>

        <motion.div
          variants={bentoVariants}
          className="flex flex-col justify-center rounded-2xl border border-white/[0.05] bg-[#0a0a0a] p-8 md:col-span-8 md:row-span-1"
        >
          <span className="mb-6 block font-mono text-[10px] uppercase tracking-widest text-gray-500">
            Core Arsenal
          </span>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind v4",
              "Framer Motion",
              "Three.js",
              "Node.js",
            ].map((tech) => (
              <div
                key={tech}
                className="hover:border-neon-cyan hover:text-neon-cyan cursor-crosshair rounded-full border border-white/[0.05] bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
