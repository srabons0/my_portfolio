import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const title = "Welcome To My Portfolio";

function PreLoader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const letters = title.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 120,
        delay: i * 0.05 + 0.3,
      },
    }),
  };

  useEffect(() => {
    let p = 0;
    const iv = setInterval(() => {
      p = Math.min(p + Math.random() * 3 + 0.5, 100);
      setPct(Math.floor(p));
      if (p >= 100) {
        clearInterval(iv);
        setTimeout(() => {
          setDone(true);
          setTimeout(onDone, 800);
        }, 700);
      }
    }, 35);
    return () => clearInterval(iv);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[8800] flex flex-col items-center justify-center transition-all delay-[200ms] duration-[1200ms] ${
        done ? "pointer-events-none scale-[1.05] opacity-0" : ""
      }`}
      style={{ background: "var(--ink)" }}
    >
      <div
        className="absolute h-[260px] w-[260px] rounded-full border sm:h-[360px] sm:w-[360px] md:h-[430px] md:w-[430px] lg:h-[500px] lg:w-[500px]"
        style={{
          borderColor: "rgba(139,92,246,.08)",
          animation: "spin 25s linear infinite",
        }}
      />

      <div
        className="absolute h-[180px] w-[180px] rounded-full border sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]"
        style={{
          borderColor: "rgba(6,182,212,.05)",
          animation: "spinR 18s linear infinite",
        }}
      />

      <div
        className="absolute h-[100px] w-[100px] rounded-full sm:h-[120px] sm:w-[120px] md:h-[140px] md:w-[140px] lg:h-[160px] lg:w-[160px]"
        style={{
          background:
            "radial-gradient(circle,rgba(139,92,246,.06),transparent)",
          animation: "blob 8s ease-in-out infinite",
        }}
      />

      <motion.div
        className="overflow-hidden text-3xl font-[var(--fd)] leading-[0.9] sm:text-5xl md:text-7xl lg:text-8xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((l, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letter}
            style={{
              color:
                i === 0
                  ? "var(--aurora2)"
                  : i === 8
                    ? "var(--plasma2)"
                    : i === 11
                      ? "var(--emerald2)"
                      : i === 14
                        ? "var(--rose)"
                        : "var(--snow)",
            }}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </motion.div>

      <div
        className="mt-3 text-[9px] font-[var(--fm)] tracking-[0.15em] opacity-0 sm:mt-4 sm:text-[10px] md:text-[11px]"
        style={{
          color: "var(--mist)",
          animation: "fadeIn 1s 1.2s forwards",
        }}
      >
        CREATIVE TECHNOLOGIST & DIGITAL ARCHITECT
      </div>

      <div
        className="mt-8 h-px w-[200px] overflow-hidden rounded-[1px] sm:mt-10 sm:w-[230px] md:mt-11 md:w-[260px]"
        style={{ background: "var(--rim)" }}
      >
        <div
          className="h-full shadow-[0_0_12px_var(--aurora)] transition-all duration-200"
          style={{
            background: "var(--g-aurora)",
            width: `${pct}%`,
          }}
        />
      </div>

      <div
        className="mt-3 text-[9px] font-[var(--fm)] tracking-wider transition-opacity duration-300 sm:text-[10px]"
        style={{ color: "var(--fog)" }}
      >
        {String(pct).padStart(3, "0")} / 100
      </div>
    </div>
  );
}

export default PreLoader;
