import { useEffect } from "react";

export default function MouseTrail() {

  useEffect(() => {
    const COLORS = ["#A78BFA",
  "#22D3EE",
  "#34D399",
  "#FBBF24",
  "#F472B6"
   ];

    const dots = Array.from({ length: 12 }, (_, i) => {
      const d = document.createElement("div");
      d.className = "trail-dot";
      d.style.cssText = `
        width:${8 - i * 0.5}px;
        height:${8 - i * 0.5}px;
        background:${COLORS[i % COLORS.length]};
        opacity:${1 - i * 0.08};
        position:fixed;
        border-radius:50%;
        pointer-events:none;
        z-index:9991;
        transform:translate(-50%,-50%);
        filter:blur(${i * 0.3}px)
      `;
      document.body.appendChild(d);
      return { el: d, x: -200, y: -200 };
    });

    let mx = -200, my = -200;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const lerp = (a, b, t) => a + (b - a) * t;

    let raf;
    const loop = () => {
      let px = mx, py = my;
      dots.forEach((d, i) => {
        d.x = lerp(d.x, px, 0.35 - 0.02 * i);
        d.y = lerp(d.y, py, 0.35 - 0.02 * i);
        d.el.style.left = d.x + "px";
        d.el.style.top = d.y + "px";
        px = d.x;
        py = d.y;
      });
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      dots.forEach((d) => d.el.remove());
    };
  }, []);

  return null;
}
