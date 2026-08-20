import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestScroll() {
  const headingRef = useRef();
  const subheadingRef = useRef();
  const recentWorkRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });

    gsap.to(subheadingRef.current, {
      scrollTrigger: {
        trigger: subheadingRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });

    gsap.to(recentWorkRef.current, {
      scrollTrigger: {
        trigger: recentWorkRef.current,
        start: "top center",
        end: "top 20%",
        scrub: 1,
      },
      opacity: 1,
      duration: 1,
    });

    gsap.to(profileRef.current, {
      scrollTrigger: {
        trigger: profileRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
      opacity: 1,
      scale: 1,
      duration: 1,
    });
  }, []);

  return (
    <div className="w-full bg-white dark:bg-gray-950">
      <section className="flex min-h-screen items-center px-8 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1
                ref={headingRef}
                className="translate-y-10 transform text-5xl font-bold leading-tight text-gray-900 opacity-0 dark:text-white lg:text-6xl"
              >
                Helping brands to stand out in the digital era. Together we will
                set the new status quo. No nonsense, always on the cutting edge.
              </h1>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <p
                ref={subheadingRef}
                className="mb-16 max-w-xs translate-y-10 transform text-lg text-gray-600 opacity-0 dark:text-gray-300"
              >
                The combination of my passion for design, code & interaction
                positions me in a unique place in the web design world.
              </p>

              <div
                ref={profileRef}
                className="flex h-40 w-40 scale-75 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-black to-blue-600 opacity-0 shadow-2xl transition-shadow hover:shadow-blue-500/50"
              >
                <button className="font-semibold text-white hover:underline">
                  About me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen flex-col items-start px-8 py-20 lg:px-16">
        <h2
          ref={recentWorkRef}
          className="mb-20 text-sm font-semibold uppercase tracking-widest text-gray-400 opacity-0 dark:text-gray-500"
        >
          Recent Work
        </h2>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group h-80 cursor-pointer overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              <div className="flex h-full w-full items-center justify-center text-lg text-gray-400 transition-transform duration-300 group-hover:scale-105 dark:text-gray-500">
                Project {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-gray-50 px-8 dark:bg-gray-900 lg:px-16">
        <div className="max-w-3xl text-center">
          <h3 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            More About My Work
          </h3>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I create beautiful, functional digital experiences that help brands
            connect with their audience. My approach combines strategic thinking
            with cutting-edge design and development practices.
          </p>
        </div>
      </section>
    </div>
  );
}
