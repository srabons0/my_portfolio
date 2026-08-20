import { useCallback, useEffect, useState } from "react";
import Reveal from "../../hooks/Reveal";

const TESTI = [
  {
    name: "Rohan Mehta",
    role: "Engineering Manager · B2B SaaS",
    av: "#6366F1",
    text: "What stood out immediately was his structured thinking. Every UI decision had architectural reasoning behind it. The codebase became cleaner, more modular, and significantly easier to scale.",
    result: "Scalable Architecture",
  },
  {
    name: "Elena Fischer",
    role: "Head of Product · Data Platform",
    av: "#06B6D4",
    text: "He doesn't just design interfaces — he designs systems. From component libraries to interaction logic, everything felt intentional and cohesive. Our product finally feels mature.",
    result: "System-Driven UI",
  },
  {
    name: "Adrian Park",
    role: "CTO · SaaS Startup",
    av: "#10B981",
    text: "Clear communication, clean Git workflow, and production-ready delivery. No shortcuts. No patchwork fixes. Just thoughtful engineering that holds up under real-world pressure.",
    result: "Production Ready",
  },
  {
    name: "Camila Duarte",
    role: "Founder · Digital Platform",
    av: "#F59E0B",
    text: "He approaches frontend like infrastructure — performance-aware, accessibility-conscious, and built for longevity. Our team trusted every release.",
    result: "Long-Term Stability",
  },
];

export default function TestimonialsSection() {
  const [curr, setCurr] = useState(0);
  const [fade, setFade] = useState(true);

  const go = useCallback(
    (n) => {
      setFade(false);

      setTimeout(() => {
        setCurr((curr + n + TESTI.length) % TESTI.length);
        setFade(true);
      }, 150);
    },
    [curr],
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);

    return () => clearInterval(t);
  }, [go]);

  const T = TESTI[curr];

  return (
    <section className="relative overflow-hidden bg-[var(--ink3)] px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-[6%] lg:py-[140px]">
      <div className="animate-float absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.04)_0%,transparent_60%)] sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px]" />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-14 md:mb-16 lg:mb-20">
          <Reveal>
            <span className="sl mb-4 inline-flex">Client Results</span>

            <h2 className="mt-4 text-[clamp(44px,7vw,96px)] font-[var(--fd)] leading-[0.88] tracking-[-2px] text-[var(--snow)]">
              ZERO
              <br />
              <span className="gt-aurora">DISAPPOINTED</span>
            </h2>
          </Reveal>

          <Reveal d={0.15}>
            <div className="text-left sm:text-right">
              <div className="text-[52px] font-[var(--fd)] font-normal leading-none text-[var(--aurora2)] sm:text-[58px] md:text-[64px]">
                200+
              </div>

              <div className="mt-1 text-[9px] font-[var(--fm)] tracking-[3px] text-[var(--fog)] sm:text-[10px]">
                CLIENT REVIEWS
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mb-10 grid grid-cols-1 items-center gap-10 md:gap-12 lg:mb-12 lg:grid-cols-2 lg:gap-[60px]">
          <div
            className={`transition-all duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)] ${
              fade ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="mb-6 flex gap-[3px] sm:mb-7">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="text-[20px] text-yellow-300 drop-shadow-[0_0_12px_#F59E0B] sm:text-[22px]"
                >
                  ★
                </span>
              ))}
            </div>

            <blockquote className="mb-8 text-[18px] font-[var(--fb)] italic leading-[1.7] text-[var(--snow)] sm:mb-9 sm:text-[20px] md:text-[22px] lg:text-[clamp(18px,2.2vw,26px)]">
              "{T.text}"
            </blockquote>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-lg font-[var(--fd)] text-white sm:h-[52px] sm:w-[52px] sm:text-xl"
                style={{
                  background: `linear-gradient(135deg,${T.av},${T.av}88)`,
                  boxShadow: `0 0 20px ${T.av}40`,
                }}
              >
                {T.name[0]}
              </div>

              <div className="min-w-0">
                <div className="text-[13px] font-[var(--fb)] font-semibold text-[var(--snow)] sm:text-[14px]">
                  {T.name}
                </div>

                <div className="mt-[3px] text-[9px] font-[var(--fm)] text-[var(--fog)] sm:text-[10px]">
                  {T.role}
                </div>
              </div>

              <div
                className="rounded-full px-3 py-1.5 text-[13px] font-[var(--fd)] sm:ml-2 sm:px-[18px] sm:py-2 sm:text-[16px]"
                style={{
                  background: `${T.av}20`,
                  border: `1px solid ${T.av}40`,
                  color: T.av,
                  boxShadow: `0 0 16px ${T.av}20`,
                }}
              >
                {T.result}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {TESTI.map((t2, i) => (
              <div
                key={i}
                onClick={() => setCurr(i)}
                className="gc duration-400 cursor-none rounded-[14px] p-4 transition-all sm:px-[22px] sm:py-[18px]"
                style={{
                  borderColor: i === curr ? `${t2.av}40` : undefined,
                  background: i === curr ? `${t2.av}08` : undefined,
                  transform: i === curr ? "translateX(8px)" : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg,${t2.av},${t2.av}88)`,
                      boxShadow: i === curr ? `0 0 14px ${t2.av}40` : "none",
                    }}
                  >
                    {t2.name[0]}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[13px] font-[var(--fb)] font-semibold text-[var(--snow)]">
                      {t2.name}
                    </div>

                    <div className="truncate text-[9px] font-[var(--fm)] text-[var(--fog)] sm:text-[10px]">
                      {t2.role}
                    </div>
                  </div>

                  <span
                    className="hidden flex-shrink-0 text-[12px] font-[var(--fd)] font-normal sm:block sm:text-[14px]"
                    style={{
                      color: t2.av,
                    }}
                  >
                    {t2.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2.5">
          {TESTI.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="h-[3px] rounded-[2px] border-0 p-0 transition-all duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)]"
              style={{
                width: i === curr ? 44 : 10,
                background: i === curr ? "var(--aurora2)" : "var(--rim2)",
                boxShadow: i === curr ? "0 0 12px var(--aurora)" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
