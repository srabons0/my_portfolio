import { useEffect, useRef } from "react";

function AuroraCanvas() {
  const cvs = useRef(null);
  useEffect(() => {
    const c = cvs.current;
    const ctx = c.getContext("2d");
    let W,
      H,
      pts = [],
      raf;
    const COLORS = [
      "#8B5CF6",
      "#06B6D4",
      "#10B981",
      "#F43F5E",
      "#F59E0B",
      "#ffffff",
    ];
    const resize = () => {
      W = c.width = c.offsetWidth;
      H = c.height = c.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 100; i++) {
      pts.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.6 + 0.15,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }
    let mx = W / 2,
      my = H / 2;
    const onMM = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMM);
   const draw = () => {
  ctx.clearRect(0, 0, W, H);

  pts.forEach((p) => {
    p.pulse += p.pulseSpeed;

    const r = Math.max(0.4, p.r + Math.sin(p.pulse) * 0.4);

    const dx = p.x - mx;
    const dy = p.y - my;
    const d = Math.sqrt(dx * dx + dy * dy);

    if (d < 140 && d > 0.001) {
      p.vx += (dx / d) * 0.045;
      p.vy += (dy / d) * 0.045;
    }

    p.vx *= 0.98;
    p.vy *= 0.98;

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = W;
    if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H;
    if (p.y > H) p.y = 0;

    if (r > 0) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle =
        p.c +
        Math.floor(p.alpha * 255)
          .toString(16)
          .padStart(2, "0");
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.c;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  });

  for (let i = 0; i < pts.length; i++)
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);

      if (d < 100) {
        const g = ctx.createLinearGradient(
          pts[i].x,
          pts[i].y,
          pts[j].x,
          pts[j].y
        );

        const alpha = Math.floor(0.1 * (1 - d / 100) * 255)
          .toString(16)
          .padStart(2, "0");

        g.addColorStop(0, pts[i].c + alpha);
        g.addColorStop(1, pts[j].c + alpha);

        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = g;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }

  raf = requestAnimationFrame(draw);
};
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMM);
    };
  }, []);
  return (
    <canvas
      ref={cvs}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.75,
      }}
    />
  );
}

export default AuroraCanvas;