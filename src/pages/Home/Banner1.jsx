import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Banner1() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;

    
   gsap.to(el, {
  x: ["-110vw", "110vw"], 
  ease: "sine.inOut",
  scrollTrigger: {
    trigger: el,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
  }, []);

  return (
    <div>

      <div className=" h-[200vh] bg-black flex items-center overflow-hidden">
        <h1
          ref={textRef}
          className=" ml-100 text-6xl font-bold text-white whitespace-nowrap"
        >
          PREMIUM PORTFOLIO DESIGN
        </h1>
      </div>
    </div>
  );
}
