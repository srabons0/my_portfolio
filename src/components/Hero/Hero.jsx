import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [ld, setLd] = useState(false);
  const [scrollY, setSY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLd(true), 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fn = () => setSY(window.scrollY);

    window.addEventListener("scroll", fn, { passive: true });

    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");

    const fn = () => setIsMobile(media.matches);

    fn();
    media.addEventListener("change", fn);

    return () => media.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (heroRef.current) {
        const r = heroRef.current.getBoundingClientRect();

        setMouse({
          x: (e.clientX - r.left) / r.width,
          y: (e.clientY - r.top) / r.height,
        });
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", fn);
    }

    return () => window.removeEventListener("mousemove", fn);
  }, [isMobile]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-black pb-10 pt-[64px] text-white md:min-h-screen md:pt-[72px]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--rim) 1px,transparent 1px),linear-gradient(90deg,var(--rim) 1px,transparent 1px)",
          backgroundSize: isMobile ? "45px 45px" : "70px 70px",
          maskImage:
            "radial-gradient(ellipse 80% 90% at 50% 50%,black,transparent)",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      <div className="animate-scanLine pointer-events-none absolute left-0 right-0 h-[200px] bg-gradient-to-b from-transparent via-purple-500/5 to-transparent md:h-[300px]" />

      <div className="writing-mode-vertical absolute right-[5%] top-[12%] hidden select-none font-mono text-[9px] tracking-[4px] text-purple-400/20 md:block lg:text-[11px] lg:tracking-[6px]">
        CREATIVE TECHNOLOGIST 2025
      </div>

      <div className="absolute bottom-[8%] left-[5%] select-none font-mono text-[7px] tracking-[2px] text-cyan-400/20 md:bottom-[15%] md:left-[3%] md:text-[9px] md:tracking-[4px]">
        {"".split("").map((c, i) => (
          <span
            key={i}
            className={ld ? "animate-appear" : ""}
            style={{
              animationDelay: `${i * 0.04}s`,
            }}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-[40px] md:px-5 md:pt-[30px] lg:px-8 lg:pt-[50px]">
        <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-[60px]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-4 md:mb-9">
              <span className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Available · Q2 2026
              </span>
            </div>

            <div className="mb-6 md:mb-8">
              <h1 className="text-[clamp(48px,15vw,82px)] font-bold leading-[0.87] tracking-[-2px] md:text-[clamp(64px,10vw,110px)] md:tracking-[-3px] lg:text-[clamp(72px,11vw,150px)]">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isMobile ? -20 : -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: isMobile ? 0.8 : 1,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  viewport={{ once: true }}
                  className="block"
                >
                  CREATING
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: isMobile ? -25 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: isMobile ? 0.8 : 1,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="stroke-text block text-transparent"
                >
                  DIGITAL
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: isMobile ? -30 : -60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: isMobile ? 0.8 : 1,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="gt-aurora block"
                >
                  LEGENDS
                </motion.div>
              </h1>
            </div>

            <div className="mb-8 flex gap-3 md:mb-12 md:gap-5">
              <div className="min-h-[64px] w-[2px] shrink-0 bg-gradient-to-b from-purple-400 via-cyan-400 to-transparent" />

              <p className="max-w-[520px] text-[15px] italic leading-[1.7] text-gray-400 md:text-[clamp(16px,1.7vw,20px)] md:leading-[1.85]">
                Creative Technologist crafting cinematic digital experiences
                with precision and performance. 2+ years experience. 50+
                projects delivered. No compromises.
              </p>
            </div>

            <div className="mb-10 flex flex-wrap gap-3 md:mb-[72px] md:gap-4">
              <a
                href="#work"
                className="btn-aurora flex items-center gap-2 px-4 py-2.5 text-sm md:px-5 md:py-3 md:text-base"
              >
                Explore Work →
              </a>

              <a
                href="#contact"
                className="btn-outline-px px-4 py-2.5 text-sm md:px-5 md:py-3 md:text-base"
              >
                Start a Project
              </a>
            </div>
          </div>

          <div
            className="flex justify-center transition-transform duration-300 lg:w-full"
            style={{
              transform:
                ld && !isMobile
                  ? `perspective(1200px)
                 rotateY(${(mouse.x - 0.5) * -10}deg)
                 rotateX(${(mouse.y - 0.5) * 6}deg)
                 translateY(${-scrollY * 0.04}px)`
                  : isMobile
                    ? "translateY(0)"
                    : "translateY(44px)",
            }}
          >
            <div
              className="w-full transition-transform duration-300"
              style={{
                transform:
                  ld && !isMobile
                    ? `perspective(1200px)
                   rotateY(${(mouse.x - 0.5) * -10}deg)
                   rotateX(${(mouse.y - 0.5) * 6}deg)
                   translateY(${-scrollY * 0.04}px)`
                    : isMobile
                      ? "translateY(0)"
                      : "translateY(44px)",
              }}
            >
              <div className="relative mt-0 h-[240px] w-full md:mt-4 md:h-[300px] lg:mt-12 lg:h-[350px]">
                {[
                  "Frontend",
                  "Full Stack",
                  "Web",
                  "Software Developer",
                  "JavaScript",
                  "React",
                  "Digital Experience",
                  "UI/UX",
                  "Creative",
                  "Design",
                  "Motion UI",
                  "Developer",
                ].map((t, i) => {
                  const angle = Math.random() * 360;

                  const radiusX = isMobile
                    ? 80 + Math.random() * 40
                    : 220 + Math.random() * 80;

                  const radiusY = isMobile
                    ? 40 + Math.random() * 25
                    : 80 + Math.random() * 80;

                  return (
                    <div
                      key={i}
                      className="absolute left-1/3 top-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[9px] tracking-[2px] md:px-5 md:py-2 md:text-[12px] md:tracking-widest lg:left-1/2"
                      style={{
                        transform: `
                      rotate(${angle}deg)
                      translateX(${radiusX}px)
                      translateY(${radiusY}px)
                      rotate(-${angle}deg)
                    `,
                        animation: `orbit ${12 + i}s linear infinite`,
                      }}
                    >
                      {t}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
