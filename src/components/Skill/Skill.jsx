import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative px-6 py-5 md:px-8 md:py-24 lg:px-16 lg:py-32"
      style={{ background: "var(--surface)" }}
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-12 flex items-end justify-between sm:mb-14 md:mb-16 lg:mb-20">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--accent)] sm:gap-4 sm:text-[0.65rem] sm:tracking-[0.25em]">
              <span className="block h-px w-5 shrink-0 bg-[var(--accent)] sm:w-[30px]" />
              Tech Stack
            </div>

            <h2
              className="mb-6 text-[clamp(2.2rem,10vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[clamp(2.5rem,8vw,3.8rem)] md:text-[clamp(3rem,7vw,4rem)] lg:text-[clamp(2.5rem,5vw,4.5rem)]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Tools I
              <br />
              Master Daily
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded border border-[var(--border)] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "⚛️",
              name: "React",
              level: "Advanced · 2 yrs",
              desc: "Hooks, context, Redux, performance optimization, custom component libraries.",
            },
            {
              icon: "▲",
              name: "Next.js",
              level: "Advanced · 2 yrs",
              desc: "App Router, SSR, ISR, API routes, edge functions, Vercel deployment.",
            },
            {
              icon: "🟢",
              name: "Node.js",
              level: "Advanced · 2 yrs",
              desc: "Event loop, streams, clustering, microservices, real-time with Socket.io.",
            },
            {
              icon: "🍃",
              name: "MongoDB",
              level: "Advanced · 2 yrs",
              desc: "Aggregation pipelines, indexing, Atlas, Mongoose ODM, sharding strategies.",
            },
            {
              icon: "🚂",
              name: "Express",
              level: "Advanced · 2 yrs",
              desc: "RESTful APIs, middleware architecture, JWT auth, rate limiting, caching.",
            },
            {
              icon: "💳",
              name: "Stripe",
              level: "Advanced · 2 yrs",
              desc: "Payment integration, Checkout, Subscriptions, Webhooks, API security, PCI compliance.",
            },
            {
              icon: "🌬️",
              name: "Tailwind CSS",
              level: "Advanced · 2 yrs",
              desc: "Responsive layouts, dark mode, custom themes, utility-first design, Tailwind plugins, animations, and optimized production builds.",
            },
            {
              icon: "🔥",
              name: "Firebase",
              level: "Advanced · 2 yrs",
              desc: "Authentication, Firestore, Realtime Database, Hosting, Cloud Functions, Storage, FCM, security rules & production deployment.",
            },
          ].map((tech) => (
            <div
              key={tech.name}
              className="group relative cursor-default overflow-hidden border-b border-r border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:bg-[#16161e] sm:p-7 md:p-8 lg:px-8 lg:py-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(124,106,255,0.08)] to-transparent opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] transition-transform duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100" />

              <span className="relative mb-4 block text-3xl transition-transform duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-[5deg] group-hover:scale-110 sm:text-[2.5rem]">
                {tech.icon}
              </span>

              <div
                className="relative mb-1.5 text-base font-bold sm:text-base"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {tech.name}
              </div>

              <div className="relative text-[0.6rem] uppercase tracking-[0.12em] text-[var(--accent)] sm:text-[0.65rem] sm:tracking-[0.15em]">
                {tech.level}
              </div>

              <div className="relative mt-3 text-[0.75rem] leading-[1.6] text-[var(--muted)] sm:text-[0.78rem]">
                {tech.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
