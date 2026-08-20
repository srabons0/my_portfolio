import { useEffect, useRef } from "react";
import Banner from "../../pages/Home/Banner";

const panels = [
  <Banner></Banner>,
  { number: "2", color: "#0d0d0d", label: "dark" },
  { number: "3", color: "#2d1b69", label: "purple" },
  { number: "4", color: "#0d0d0d", label: "dark" },
  { number: "5", color: "#0a2540", label: "blue" },
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default function LayeredPinning() {
  const containerRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    async function init() {
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
      );
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",
      );

      const { gsap } = window;
      const { ScrollTrigger } = window;

      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      if (!container) return;

      const panelEls = gsap.utils.toArray(".lp-panel", container);
      const copy = panelEls[0].cloneNode(true);
      panelEls[0].parentNode.appendChild(copy);

      panelEls.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });

      let maxScroll;

      const pageScrollTrigger = ScrollTrigger.create({
        snap(value) {
          const snappedValue = gsap.utils.snap(1 / panelEls.length, value);
          if (snappedValue <= 0) return 1.05 / maxScroll;
          if (snappedValue >= 1) return maxScroll / (maxScroll + 1.05);
          return snappedValue;
        },
      });

      function onResize() {
        maxScroll = ScrollTrigger.maxScroll(window) - 1;
      }
      onResize();
      window.addEventListener("resize", onResize);

      window.addEventListener(
        "scroll",
        (e) => {
          const scroll = pageScrollTrigger.scroll();
          if (scroll > maxScroll) {
            pageScrollTrigger.scroll(1);
            e.preventDefault();
          } else if (scroll < 1) {
            pageScrollTrigger.scroll(maxScroll - 1);
            e.preventDefault();
          }
        },
        { passive: false },
      );

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        window.removeEventListener("resize", onResize);
      };
    }

    init();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #0d0d0d;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        .lp-description {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #0d0d0d;
          text-align: center;
          z-index: 10;
          padding: 2rem;
        }

        .lp-description h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 8vw, 7rem);
          letter-spacing: 0.04em;
          color: #f0ede6;
          line-height: 1;
          text-transform: uppercase;
          background: linear-gradient(135deg, #f0ede6 30%, #8a7f6e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .lp-description p {
          margin-top: 1.5rem;
          color: #888;
          font-size: 1.05rem;
          font-weight: 300;
          letter-spacing: 0.06em;
          max-width: 360px;
        }

        .lp-scroll-hint {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #555;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          animation: bounce 2s infinite;
        }

        .lp-scroll-hint::after {
          content: '';
          display: block;
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, #555, transparent);
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(8px); opacity: 1; }
        }

        .lp-panel {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .lp-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .lp-panel-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(12rem, 30vw, 26rem);
          color: rgba(255, 255, 255, 0.06);
          line-height: 1;
          user-select: none;
          position: absolute;
        }

        .lp-panel-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 12vw, 10rem);
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          z-index: 1;
          mix-blend-mode: overlay;
        }

        .lp-panel-line {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 60px;
          background: rgba(255,255,255,0.15);
        }

        .lp-panel[data-label="green"] { background: #1a472a; }
        .lp-panel[data-label="dark"]  { background: #121212; }
        .lp-panel[data-label="purple"]{ background: #2d1b69; }
        .lp-panel[data-label="blue"]  { background: #0a2540; }
      `}</style>

      <div ref={containerRef}>
        <div className="lp-description">
          <h1>Layered Pinning</h1>
          <p>
            Panels stack on top of each other as you scroll — and loop
            infinitely.
          </p>
          <div className="lp-scroll-hint">scroll</div>
        </div>

        {panels.map((p) => (
          <section
            key={p.number}
            className="lp-panel"
            data-label={p.label}
            style={{ background: p.color }}
          >
            <span className="lp-panel-number">{p.number}</span>
            <h2 className="lp-panel-label">{p.number}</h2>
            <div className="lp-panel-line" />
          </section>
        ))}
      </div>
    </>
  );
}
