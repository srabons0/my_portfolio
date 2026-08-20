import { useState, useEffect } from "react";

export default function ScrollBar() {
  const [w, setW] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const d = document.documentElement;
      setW((d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div id="spb" style={{ width: `${w}%` }} />;
}