import React from "react";
import { motion } from "framer-motion";
import personImage from "../../../assets/person.png";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  const textContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  return (
    <section
      id="about"
      className="w-full bg-gray-100 py-20 text-white dark:bg-gray-900 dark:text-gray-200 md:py-32"
    >
      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.div
          className="relative mx-auto w-full max-w-sm md:max-w-none"
          variants={imageVariants}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-2xl dark:opacity-30"></div>
          <img
            src={personImage}
            alt="A professional headshot"
            className="relative h-auto w-full rounded-lg object-cover shadow-2xl"
          />
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          variants={textContentVariants}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            About Me
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Crafting Digital Solutions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I am a full-stack developer with a passion for building elegant,
            high-performance web applications. With a strong foundation in both
            front-end and back-end technologies, I specialize in turning complex
            problems into intuitive and beautiful user experiences.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            From architecting scalable REST APIs with Node.js and Express to
            creating dynamic, responsive UIs with React and Next.js, I thrive on
            the entire development lifecycle. My goal is to not only write clean
            and maintainable code but also to build products that make a real
            impact.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
