import "./service.css";

const Service = () => {
  return (
    <div id="service" className="text-white">
      <section
        id="skills"
        aria-label="Services"
        className="relative mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-16 lg:py-32"
      >
        <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-purple-400">
          What I Do
        </div>

        <h2 className="mb-12 text-[clamp(44px,7vw,96px)] font-[var(--fd)] font-extrabold leading-[1.05] tracking-[-0.03em]">
          Services <em className="gt-aurora not-italic">&amp; Skills</em>
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded border border-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          <div className="group relative flex flex-col gap-6 overflow-hidden border-b border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-500 ease-[cubic-bezier(.23,1,.32,1)] hover:-translate-y-1 hover:bg-[#16161e] sm:p-7 lg:border-b-0 lg:border-r">
            <div className="text-3xl transition-transform duration-500 group-hover:scale-110">
              ⚡
            </div>

            <div>
              <div className="mb-3 text-lg font-[var(--fd)] font-bold">
                Full-Stack Development
              </div>

              <div className="text-sm leading-[1.7] text-[var(--muted)]">
                End-to-end product engineering—from React UI to Node.js APIs,
                database design, and cloud deployment. I own the entire
                vertical.
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "REST"].map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[var(--border)] px-2.5 py-1.5 font-mono text-[10px] tracking-[1px] text-[var(--fog1)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="group relative flex flex-col gap-6 overflow-hidden border-b border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-500 ease-[cubic-bezier(.23,1,.32,1)] hover:-translate-y-1 hover:bg-[#16161e] sm:p-7 lg:border-b-0 lg:border-r"
            style={{ transitionDelay: "0.12s" }}
          >
            <div className="text-3xl transition-transform duration-500 group-hover:scale-110">
              🎨
            </div>

            <div>
              <div className="mb-3 text-lg font-[var(--fd)] font-bold">
                UI Engineering
              </div>

              <div className="text-sm leading-[1.7] text-[var(--muted)]">
                Pixel-perfect, accessible, and performant interfaces with
                meticulous attention to motion, detail, and developer
                experience.
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
              {["Tailwind", "Framer Motion", "Radix UI"].map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[var(--border)] px-2.5 py-1.5 font-mono text-[10px] tracking-[1px] text-[var(--fog1)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="group relative flex flex-col gap-6 overflow-hidden border-b border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-500 ease-[cubic-bezier(.23,1,.32,1)] hover:-translate-y-1 hover:bg-[#16161e] sm:p-7 lg:border-b-0 lg:border-r"
            style={{ transitionDelay: "0.24s" }}
          >
            <div className="text-3xl transition-transform duration-500 group-hover:scale-110">
              🏗️
            </div>

            <div>
              <div className="mb-3 text-lg font-[var(--fd)] font-bold">
                API &amp; Backend Architecture
              </div>

              <div className="text-sm leading-[1.7] text-[var(--muted)]">
                Scalable, secure, and well-documented APIs. GraphQL, REST,
                gRPC—architected for growth with clean domain separation.
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
              {["GraphQL", "Express", "PostgreSQL", "Redis"].map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[var(--border)] px-2.5 py-1.5 font-mono text-[10px] tracking-[1px] text-[var(--fog1)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="group relative flex flex-col gap-6 overflow-hidden bg-[var(--card)] p-6 transition-all duration-500 ease-[cubic-bezier(.23,1,.32,1)] hover:-translate-y-1 hover:bg-[#16161e] sm:p-7"
            style={{ transitionDelay: "0.36s" }}
          >
            <div className="text-3xl transition-transform duration-500 group-hover:scale-110">
              🚀
            </div>

            <div>
              <div className="mb-3 text-lg font-[var(--fd)] font-bold">
                Performance Optimization
              </div>

              <div className="text-sm leading-[1.7] text-[var(--muted)]">
                Core Web Vitals mastery. Lighthouse 98+ scores. Bundle
                splitting, lazy loading, CDN strategy, and edge runtime
                deployment.
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
              {["Core Web Vitals", "CDN", "Edge"].map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[var(--border)] px-2.5 py-1.5 font-mono text-[10px] tracking-[1px] text-[var(--fog1)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] border-t border-[var(--border)]" />
    </div>
  );
};

export default Service;
