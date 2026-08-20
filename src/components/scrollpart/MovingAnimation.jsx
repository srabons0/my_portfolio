import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PanelScroll() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");


      if (!document.querySelector(".panel.clone")) {
        const copy = panels[0].cloneNode(true);
        copy.classList.add("clone");
        panels[0].parentNode.appendChild(copy);
      }


      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });

      let maxScroll;
      const pageScrollTrigger = ScrollTrigger.create({
        snap: (value) => {
          const snapped = gsap.utils.snap(1 / panels.length, value);
          if (snapped <= 0) return 0.001;
          if (snapped >= 1) return 0.999;
          return snapped;
        },
      });

      function onResize() {
        maxScroll = ScrollTrigger.maxScroll(window);
      }
      onResize();
      window.addEventListener("resize", onResize);

      const onScroll = (e) => {
        const scroll = pageScrollTrigger.scroll();
        if (scroll >= maxScroll) {
          pageScrollTrigger.scroll(1);
          e.preventDefault();
        } else if (scroll <= 0) {
          pageScrollTrigger.scroll(maxScroll - 1);
          e.preventDefault();
        }
      };

      window.addEventListener("scroll", onScroll, { passive: false });

      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", onScroll);
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <section className="panel description">
        <h1>Layered pinning with infinite looping</h1>
      </section>

      <section className="panel green"><h2>1</h2></section>
      <section className="panel"><h2>2</h2></section>
      <section className="panel purple"><h2>3</h2></section>
      <section className="panel"><h2>4</h2></section>
      <section className="panel blue"><h2>5</h2></section>
    </div>
  );
}
