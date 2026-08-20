import { use, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(SplitText);

export default function Test() {
  const textRef = useRef(null);
  const [animation, setAnimation] = useState(null);
  const splitRef = useRef(null);

  
  const setup = () => {
    if (splitRef.current) splitRef.current.revert();
    if (animation) animation.revert();

    splitRef.current = new SplitText(textRef.current, { type: "chars" });
  };

  useEffect(() => {
    setup();
    window.addEventListener("resize", setup);
    return () => window.removeEventListener("resize", setup);
  }, []);

  const animateChars = () => {
    if (animation) animation.revert();

    const anim = gsap.from(splitRef.current.chars, {
      x: 150,
      opacity: 0,
      duration: 0.7,
      ease: "power4",
      stagger: 0.04,
    });

    setAnimation(anim);
  };
useEffect(() => {
  animateChars();
}, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <div className="mb-6">
        <button
          onClick={animateChars}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Characters
        </button>
      </div>


    </div>
  );
}
