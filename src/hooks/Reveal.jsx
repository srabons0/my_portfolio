import { useEffect, useRef, useState } from "react";

function Reveal({ children, d = 0, style = {} }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold: 0.07 },
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(32px)",
        transition: `opacity .9s ${d}s cubic-bezier(.16,1,.3,1),transform .9s ${d}s cubic-bezier(.16,1,.3,1)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Reveal