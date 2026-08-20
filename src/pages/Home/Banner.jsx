import { FaGlobeAmericas } from "react-icons/fa";
import person1 from "../../assets/photo/person1.png";
import { GoArrowDownRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "gsap/SplitText";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const toolbarRef = useRef();
  const bannerRef = useRef();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");

    const handleResize = () => {
      setIsMobile(media.matches);
    };

    handleResize();
    media.addEventListener("change", handleResize);

    return () => media.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const showAnim = gsap
      .from(toolbarRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    const trigger = ScrollTrigger.create({
      trigger: bannerRef.current,
      start: "30% top",
      end: "bottom top",

      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    return () => {
      trigger.kill();
      showAnim.kill();
    };
  }, []);

  /////////////////////////////////////

  const textRef = useRef(null);
  const [animation, setAnimation] = useState(null);
  const splitRef = useRef(null);

  const setup = () => {
    if (splitRef.current) splitRef.current.revert();
    if (animation) animation.revert();

    splitRef.current = new SplitText(textRef.current, {
      type: "chars",
    });
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
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 3.5,
      ease: "power4",
      stagger: 0.04,
    });

    setAnimation(anim);
  };

  useEffect(() => {
    animateChars();
  }, []);

  return (
    <div
      id="home"
      ref={bannerRef}
      className="bg-linear-to-b flex justify-center from-lightBg to-gray-50 pt-5 text-black dark:from-darkBg dark:to-gray-800 lg:min-h-screen"
    >
      <div className="relative w-full">
        <div
          ref={toolbarRef}
          className="fixed left-0 top-0 z-50 mx-auto flex h-16 w-full items-center justify-between px-3 transition-all duration-200 sm:h-20 sm:px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: 3.5,
            }}
            className="shrink-0"
          >
            <h1 className="text-[9px] font-semibold sm:text-xs">
              code by
              <span className="text-[11px] font-black sm:text-sm"> Sadman</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: 3.5,
            }}
            className="ml-4 flex max-w-[70%] items-center gap-3 overflow-x-auto whitespace-nowrap text-xs [scrollbar-width:none] sm:ml-0 sm:max-w-none sm:gap-5 sm:overflow-visible sm:text-sm [&::-webkit-scrollbar]:hidden"
          >
            <a
              className="shrink-0 hover:scale-110 hover:text-gray-600"
              href="#home"
            >
              Home
            </a>

            <a
              className="shrink-0 hover:scale-110 hover:text-gray-600"
              href="#work"
            >
              Work
            </a>

            <a
              className="shrink-0 hover:scale-110 hover:text-gray-600"
              href="#skills"
            >
              Skills
            </a>

            <a
              className="shrink-0 hover:scale-110 hover:text-gray-600"
              href="#service"
            >
              Service
            </a>

            <a
              className="shrink-0 hover:scale-110 hover:text-gray-600"
              href="#contact"
            >
              Contact
            </a>

            <div className="ml-7 mr-5 hidden sm:block" />
          </motion.div>
        </div>

        <div className="relative mx-auto flex flex-col items-start justify-between gap-8 pt-28 text-white lg:flex-row lg:items-center lg:gap-16 lg:pt-20">
          <motion.div
            initial={{
              opacity: 0,
              x: isMobile ? 40 : -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: isMobile ? 0.8 : 1.2,
              ease: "easeInOut",
              delay: 3.5,
            }}
            className="absolute right-0 flex flex-row-reverse items-center justify-between gap-2 rounded-s-full bg-black px-2 py-1 text-[9px] sm:gap-5 sm:py-3 sm:text-sm lg:static lg:flex-row lg:gap-4 lg:rounded-e-full lg:rounded-s-none lg:px-4 lg:py-2.5 lg:text-xs"
          >
            <div className="ml-2 flex-col gap-1 sm:ml-5">
              <div>located</div>
              <div>in the</div>
              <div>Bangladesh</div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 360,
              }}
              transition={{
                opacity: {
                  duration: 1,
                },
                scale: {
                  duration: 1,
                },
                rotate: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                },
              }}
              className="rounded-full bg-gray-500 p-1 sm:p-3"
            >
              <FaGlobeAmericas className="h-5 w-5 sm:h-8 sm:w-8" />
            </motion.div>
          </motion.div>

          <div className="lg:mr-25 mr-0 flex w-full items-center justify-center px-5 sm:px-0 lg:w-auto lg:justify-start">
            <div className="w-[52%] sm:w-[50%] md:w-[45%] lg:w-3/6">
              <img
                src={person1}
                alt="Sadman"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="text-sm sm:text-xl md:text-2xl">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 3.5,
                  ease: "easeInOut",
                }}
                className="font-bold"
              >
                <GoArrowDownRight className="h-5 w-5 sm:h-8 sm:w-8" />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: -40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 3.5,
                }}
                className="mt-6 font-bold sm:mt-10"
              >
                Freelance
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 3.5,
                }}
                className="font-bold"
              >
                Designer & Developer
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          animate={{
            x: [10, 0, 10],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          ref={textRef}
          className="absolute bottom-4 right-4 max-w-3xl text-xs text-[#b7b7b7] sm:bottom-5 sm:right-5 sm:text-lg lg:text-xl"
        >
          Sadman <span>Sakid</span> Srabon
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
