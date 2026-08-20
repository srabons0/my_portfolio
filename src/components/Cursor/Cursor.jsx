import { useEffect, useRef } from "react";

function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const rp = useRef({ x: -200, y: -200 });
  useEffect(() => {
    const onMM = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top = e.clientY + "px";
      }
    };
    const onE = (e) => {
      const t = e.currentTarget;
      if (ring.current) {
        ring.current.classList.remove("XL", "SQ", "HID");
        if (t.dataset.cr === "sq") ring.current.classList.add("SQ");
        else ring.current.classList.add("XL");
      }
    };
    const onL = () => {
      ring.current?.classList.remove("XL", "SQ", "HID");
    };
    window.addEventListener("mousemove", onMM);
    document.querySelectorAll("a,button,[data-cr]").forEach((el) => {
      el.addEventListener("mouseenter", onE);
      el.addEventListener("mouseleave", onL);
    });
    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const loop = () => {
      rp.current.x = lerp(rp.current.x, pos.current.x, 0.1);
      rp.current.y = lerp(rp.current.y, pos.current.y, 0.1);
      if (ring.current) {
        ring.current.style.left = rp.current.x + "px";
        ring.current.style.top = rp.current.y + "px";
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      window.removeEventListener("mousemove", onMM);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div ref={dot} className="cr-dot" />
      <div ref={ring} className="cr-ring" />
    </>
  );
}
export default Cursor;