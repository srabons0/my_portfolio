import { useRef, useState, useEffect } from "react";

export default function ServiceCard({ icon, title, desc, tags }) {
  const cardRef = useRef(null);
  const [hov, setHov] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const raf = useRef(null);
  const rect = useRef(null);

  const onMouseMove = (e) => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      if (!rect.current) return;
      const cx = rect.current.left + rect.current.width / 2;
      const cy = rect.current.top + rect.current.height / 2;
      const dx = (e.clientX - cx) / (rect.current.width / 2);
      const dy = (e.clientY - cy) / (rect.current.height / 2);
      setTilt({ x: dy * -7, y: dx * 9 });
    });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => {
        rect.current = cardRef.current.getBoundingClientRect();
        setHov(true);
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        setHov(false);
        resetTilt();
      }}
      className="relative cursor-none rounded-xl border bg-[var(--surface)] p-8 transition-all duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-6px) scale(1.02)" : "scale(1)"}`,
        boxShadow: hov
          ? `0 ${-tilt.y * 22}px 50px rgba(0,0,0,0.5), 0 0 60px rgba(0,112,243,0.1)`
          : "",
        borderColor: hov ? "rgba(0,112,243,0.2)" : "var(--border)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: hov
            ? "linear-gradient(105deg, transparent 40%, rgba(0,112,243,0.08) 50%, transparent 60%)"
            : "none",
        }}
      />

      <div
        className="absolute left-0 top-0 h-[2px] w-full rounded-sm"
        style={{
          background: "linear-gradient(90deg, var(--blue), var(--cyan))",
          opacity: hov ? 1 : 0.3,
        }}
      />

      <div className="w-13 h-13 relative mb-4 flex items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface2)]">
        {icon}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.07)] to-transparent" />
      </div>

      <div>
        <div
          className="mb-2 text-lg font-bold text-white transition-colors duration-300"
          style={{ color: hov ? "var(--cyan)" : "white" }}
        >
          {title}
        </div>
        <div className="text-sm font-light leading-6 text-[var(--gray1)]">
          {desc}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border px-2 py-1 font-mono text-[9px] transition-all duration-200"
            style={{
              borderColor: hov ? "rgba(0,112,243,0.25)" : "var(--border)",
              color: hov ? "var(--blue)" : "var(--gray3)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
