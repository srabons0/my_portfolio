import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollMenu({ scroll = 420 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const target = document.getElementById("cart-trigger");
    if (!target) return;
    console.log("target", target);
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("entry.isIntersecting", entry.isIntersecting);
        setIsBottom(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const menuItems = ["Home", "Work", "Skills", "Service", "Contact"];


  const overlayVariants = {
    closed: { y: "-100%", opacity: 0 },
    open: {
      y: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };


  const itemVariants = {
    closed: { y: -50, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };

  return (
    <div
      id="cart-trigger"
      className="absolute right-0 top-0 z-[10000]"
      style={{ height: `${scroll}px` }}
    >
      
      <AnimatePresence>
        {isBottom && (
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            initial={{
              x: -100,
              opacity: 0,
              scale: 0.8,
              rotate: 90,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              x: 80,
              opacity: 0,
              scale: 0.8,
              rotate: 90,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 80,
            }}
            className="fixed right-4 top-4 z-[50] flex h-10 w-10 flex-col items-center justify-center gap-1 lg:gap-2 rounded-full border-2 border-[#646464] bg-black shadow-lg transition-colors duration-200 hover:bg-[#868686] focus:outline-none md:right-6 md:top-6 lg:h-12 lg:w-12 lg:p-3"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`block h-0.5 w-4 rounded bg-white transition-transform duration-300 lg:h-1 lg:w-6 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-4 rounded bg-white transition-opacity duration-300 lg:h-1 lg:w-6 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`block h-0.5 w-4 rounded bg-white transition-transform duration-300 lg:h-1 lg:w-6 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </motion.button>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 top-0 z-[40] flex h-[70vh] w-full flex-col items-center justify-center gap-4 bg-black/[.83] backdrop-blur-md md:h-screen"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                onClick={() => setIsOpen(false)}
                href={`#${item.toLowerCase()}`}
                className="mx-auto w-10/12 cursor-pointer rounded-lg p-1 text-center text-3xl font-bold text-white transition duration-100 hover:scale-110 hover:text-[#d1d1d1]"
                variants={itemVariants}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
