import { useState } from "react";
import Reveal from "../../hooks/Reveal";

const STEPS = [
  {
    n: "01",
    icon: "💡",
    t: "Idea & Plan",
    d: "Understand project goals, define tech stack (React, Next.js, Node.js), and plan the architecture with clear milestones.",
    time: "1–2 hours",
    c: "var(--aurora2)",
    gc: "#8B5CF6",
  },
  {
    n: "02",
    icon: "⚙️",
    t: "Setup & Dev Environment",
    d: "Install Next.js, Tailwind CSS, Framer Motion, MongoDB setup, and configure Git for version control.",
    time: "1 day",
    c: "var(--plasma2)",
    gc: "#06B6D4",
  },
  {
    n: "03",
    icon: "🖌️",
    t: "UI/UX Design",
    d: "Create modern, responsive layouts, animations, and components using Tailwind CSS, Framer Motion, and GSAP.",
    time: "1–2 days",
    c: "var(--emerald2)",
    gc: "#10B981",
  },
  {
    n: "04",
    icon: "💻",
    t: "Development & Integration",
    d: "Build dynamic pages, integrate APIs, implement authentication (JWT, Google login), and connect to MongoDB backend.",
    time: "2–4 days",
    c: "var(--rose2)",
    gc: "#F43F5E",
  },
  {
    n: "05",
    icon: "🚀",
    t: "Testing & Launch",
    d: "Perform QA, fix bugs, optimize performance, deploy to Vercel or preferred host, and ensure smooth user experience.",
    time: "1–2 days",
    c: "var(--gold2)",
    gc: "#F59E0B",
  },
  {
    n: "06",
    icon: "📈",
    t: "Maintenance & Growth",
    d: "Monitor performance, add new features, optimize SEO, and iterate based on user feedback to grow your project.",
    time: "Ongoing",
    c: "var(--aqua2)",
    gc: "#0EA5E9",
  },
];
function ProcessSection() {
  const [activeStep, setActiveStep] = useState(null);
  return (
    <section className="relative bg-[var(--ink2)] px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-[6%] lg:py-[140px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-14 md:mb-16 lg:mb-20">
          <Reveal>
            <span className="sl mb-4 inline-flex">Methodology</span>

            <h2 className="mt-4 text-[clamp(44px,6vw,90px)] font-[var(--fd)] leading-[0.9] tracking-[-2px] text-[var(--snow)]">
              HOW I
              <br />
              <span className="gt-aurora">SHIP FAST</span>
            </h2>
          </Reveal>

          <Reveal d={0.15}>
            <p className="max-w-[340px] text-[14px] font-[var(--fb)] leading-[1.8] text-[var(--mist)] sm:text-[15px]">
              A battle-tested process that ships complex products in weeks —
              without cutting a single corner.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute bottom-10 left-5 top-10 w-px bg-gradient-to-b from-transparent via-[var(--aurora)] via-[var(--emerald)] via-[var(--plasma)] to-transparent opacity-30 sm:bottom-12 sm:left-6 sm:top-12 md:bottom-14 md:left-7 md:top-14" />

          <div className="flex flex-col gap-1">
            {STEPS.map((s, i) => (
              <Reveal key={i} d={i * 0.08}>
                <div
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="duration-400 flex cursor-none items-start gap-4 rounded-[20px] p-4 transition-all ease-[cubic-bezier(.16,1,.3,1)] sm:gap-5 sm:p-5 md:gap-6 md:p-6 lg:gap-8 lg:p-7"
                  style={{
                    border: `1px solid ${
                      activeStep === i ? s.gc + "40" : "transparent"
                    }`,
                    background:
                      activeStep === i
                        ? `radial-gradient(circle at 0% 50%,${s.gc}08,transparent 60%)`
                        : "transparent",
                  }}
                >
                  <div
                    className="duration-400 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-xl transition-all sm:h-12 sm:w-12 sm:text-2xl md:h-14 md:w-14"
                    style={{
                      background: `${s.gc}15`,
                      border: `1px solid ${
                        activeStep === i ? s.gc + "50" : "var(--rim)"
                      }`,
                      transform: activeStep === i ? "scale(1.1)" : "none",
                      boxShadow:
                        activeStep === i ? `0 0 20px ${s.gc}30` : "none",
                    }}
                  >
                    {s.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                      <span className="text-[9px] font-[var(--fm)] tracking-[2px] text-[var(--snow)] sm:text-[10px] sm:tracking-[3px]">
                        {s.n}
                      </span>

                      <h3 className="text-[18px] font-[var(--fd)] font-normal tracking-[-0.5px] text-[var(--snow)] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                        {s.t}
                      </h3>

                      <span className="text-[9px] font-[var(--fm)] text-[var(--fog)] sm:ml-auto sm:text-[10px]">
                        <span className="inline-flex rounded-full border border-[var(--rim)] bg-[var(--glass)] px-2.5 py-1 sm:px-3">
                          {s.time}
                        </span>
                      </span>
                    </div>

                    <p className="text-[13px] font-[var(--fb)] leading-[1.8] text-[var(--mist)] sm:text-[14px]">
                      {s.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
