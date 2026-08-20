import { useEffect, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function useScramble(text, active, dur = 1200) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!active) return;

    const chars = text.split("");
    let frame = 0;
    const total = Math.ceil(dur / 16);

    const iv = setInterval(() => {
      frame++;
      const p = frame / total;

      setDisplay(
        chars
          .map((c, i) => {
            if (c === " ") return " ";
            const reveal = i / chars.length < p * 1.4;
            return reveal ? c : CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (frame >= total) {
        setDisplay(text);
        clearInterval(iv);
      }
    }, 16);

    return () => clearInterval(iv);
  }, [active, text, dur]);

  return display;
}