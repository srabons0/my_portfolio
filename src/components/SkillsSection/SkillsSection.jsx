import Reveal from "../../hooks/Reveal";
import useInView from "../../hooks/useInView";

const SKILLS = [
  {
    cat: "Design & Creative",
    color: "var(--aurora2)",
    gc: "#8B5CF6",
    items: [
      { n: "UI/UX Design", v: 95 },
      { n: "Motion Design", v: 90 },
      { n: "Creative Design", v: 92 },
      { n: "Digital Experience", v: 94 },
    ],
  },
  {
    cat: "Engineering",
    color: "var(--plasma2)",
    gc: "#06B6D4",
    items: [
      { n: "React / Next.js", v: 98 },
      { n: "Node.js / Express", v: 93 },
      { n: "MongoDB / Firebase", v: 90 },
      { n: "JavaScript ", v: 96 },
    ],
  },
];
function SkillsSection() {
  const [ref, vis] = useInView(0.2);
  return (
    <section id="skills" className="bg-[var(--ink3)] px-[6%] py-[140px]">
      <div ref={ref} className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 items-start gap-[80px] md:grid-cols-2">
          <div>
            <Reveal>
              <span className="sl mb-5 inline-flex">Technical Stack</span>
              <h2 className="mb-8 mt-4 text-[clamp(44px,6vw,90px)] font-[var(--fd)] leading-[0.9] tracking-[-2px] text-[var(--snow)]">
                UNDER
                <br />
                <span className="gt-ice">THE HOOD</span>
              </h2>
              <p className="mb-10 text-[17px] font-[var(--fb)] italic leading-[1.9] text-[var(--mist)]">
                A decade of obsessive refinement. Every tool chosen with
                purpose. Every technique mastered through thousands of hours of
                deliberate practice.
              </p>
            </Reveal>

            <Reveal d={0.2}>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "Firebase",
                  "Node.js",
                  "Express",
                  "Figma",
                  "Framer",
                  "GSAP",
                  "motion",
                  "Bootstrap",
                  "Tailwind",
                ].map((t) => (
                  <div
                    key={t}
                    className="cursor-none rounded-lg border border-[var(--rim)] px-4 py-2 text-[11px] font-[var(--fm)] tracking-wide text-[var(--mist)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--aurora)] hover:bg-[rgba(139,92,246,0.08)] hover:text-[var(--aurora2)]"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            {SKILLS.map((g, gi) => (
              <Reveal key={gi} d={gi * 0.12}>
                <div className="mb-11">
                  <div
                    className="mb-6 text-[9px] uppercase tracking-widest"
                    style={{ fontFamily: "var(--fm)", color: g.color }}
                  >
                    {g.cat}
                  </div>
                  {g.items.map((s, si) => (
                    <div key={si} className="mb-5">
                      <div className="mb-2 flex justify-between">
                        <span className="text-[14px] font-[var(--fb)] text-[var(--snow)]">
                          {s.n}
                        </span>
                        <span
                          className="text-[11px] font-[var(--fm)]"
                          style={{ color: g.color }}
                        >
                          {s.v}%
                        </span>
                      </div>
                      <div className="relative h-[3px] overflow-hidden rounded-[2px] bg-[var(--rim)]">
                        <div
                          className="relative h-full rounded-[2px] transition-all duration-[1.5s]"
                          style={{
                            width: vis ? `${s.v}%` : "0%",
                            background: `linear-gradient(90deg,${g.gc},${g.gc}88)`,
                            boxShadow: `0 0 12px ${g.gc}60`,
                            transitionDelay: `${si * 0.1 + gi * 0.4}s`,
                          }}
                        >
                          <div
                            className="absolute right-0 top-1/2 h-[9px] w-[9px] rounded-full"
                            style={{
                              transform: "translateY(-50%)",
                              background: g.color,
                              boxShadow: `0 0 14px ${g.gc}`,
                            }}
                          />
                          <div
                            className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] bg-[length:200px_100%]"
                            style={{
                              animation: vis
                                ? `shimmer 2s ${si * 0.1}s ease-in-out infinite`
                                : "none",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
