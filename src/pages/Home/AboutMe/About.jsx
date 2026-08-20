import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCode,
  FaDesktop,
  FaGraduationCap,
  FaRocket,
  FaLightbulb,
  FaCoffee,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createParticles = () => {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.className = "particle absolute rounded-full";

        const size = Math.random() * 2 + 1;
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.background = `hsl(210, 100%, 50%)`;
        particle.style.opacity = Math.random() * 0.3;

        containerRef.current.appendChild(particle);

        gsap.to(particle, {
          y: gsap.utils.random(-300, 300),
          x: gsap.utils.random(-300, 300),
          opacity: 0,
          duration: gsap.utils.random(10, 15),
          repeat: -1,
          ease: "power1.inOut",
          delay: Math.random() * 2,
        });
      }
    };

    createParticles();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    />
  );
};

const Counter = ({ end, duration = 2 }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    gsap.to(
      { val: 0 },
      {
        val: end,
        duration: duration,
        ease: "power2.out",
        onUpdate: function () {
          node.textContent = Math.ceil(this.targets()[0].val);
        },
      },
    );
  }, [end, duration]);

  return <span ref={nodeRef}>0</span>;
};

const About = () => {
  const imageRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.03;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.03;
    setMousePos({ x, y });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const stats = [
    {
      number: 1,
      label: "Year Experience",
      icon: <FaCoffee className="text-2xl" />,
      description: "Started my dev journey",
    },
    {
      number: 8,
      label: "Projects Built",
      icon: <FaRocket className="text-2xl" />,
      description: "From simple to complex",
    },
    {
      number: 100,
      label: "% Passion",
      icon: <FaLightbulb className="text-2xl" />,
      description: "Always learning & growing",
    },
  ];

  const journey = [
    {
      stage: "Foundation",
      skills: ["HTML5", "CSS3", "JavaScript", "Basics"],
      icon: <FaGraduationCap />,
      color: "from-blue-400 to-cyan-400",
    },
    {
      stage: "React Journey",
      skills: ["React.js", "Hooks", "Components", "State"],
      icon: <FaCode />,
      color: "from-cyan-400 to-blue-400",
    },
    {
      stage: "Advanced Tools",
      skills: ["Tailwind CSS", "Framer Motion", "GSAP", "APIs"],
      icon: <FaDesktop />,
      color: "from-blue-400 to-purple-400",
    },
  ];

  const focusAreas = [
    {
      title: "Frontend Development",
      description: "Building interactive UIs with React and modern CSS",
      icon: <FaDesktop />,
      progress: 75,
    },
    {
      title: "Web Design",
      description: "Learning responsive design and UI principles",
      icon: <FaLightbulb />,
      progress: 70,
    },
    {
      title: "Problem Solving",
      description: "Improving algorithms and debugging skills",
      icon: <FaCode />,
      progress: 65,
    },
  ];

  const achievements = [
    "Built responsive web applications",
    "Learned modern web frameworks",
    "Deployed projects to production",
    "Collaborated on team projects",
    "Contributing to open source",
    "Always eager to improve",
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 px-4 py-32 text-white md:px-8 lg:px-16">
      <AnimatedBackground />

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute right-10 top-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="pointer-events-none absolute bottom-20 left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl"
      ></motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 inline-block rounded-full border border-blue-500/50 bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300"
          >
            🚀 Junior Developer | 1 Year Experience
          </motion.span>

          <h2 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Starting My Journey
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
          ></motion.div>

          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            A passionate junior developer learning new technologies every day
            and turning ideas into interactive web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32 grid items-center gap-16 lg:grid-cols-2"
        >
          <motion.div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            variants={itemVariants}
            className="group relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px rgba(59, 130, 246, 0.3)",
                  "0 0 60px rgba(100, 200, 255, 0.4)",
                  "0 0 40px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl"
            ></motion.div>

            <motion.div
              animate={mousePos}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative overflow-hidden rounded-3xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                alt="Junior Developer"
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-6 left-6 rounded-xl border border-blue-500/30 bg-slate-800/90 p-4 backdrop-blur-xl"
              >
                <p className="text-sm font-bold text-blue-300">
                  Junior Developer
                </p>
                <p className="text-xs text-gray-400">Always Learning</p>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute right-6 top-6 h-4 w-4 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
              ></motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="mb-4 text-4xl font-bold">
                Welcome to my{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Learning Adventure
                </span>
              </h3>
              <p className="text-lg leading-relaxed text-gray-300">
                I started my journey into web development about a year ago with
                a passion to build beautiful and functional websites. Every
                project teaches me something new, and I'm committed to
                continuous learning and improvement.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors hover:bg-blue-500/10"
                >
                  <span className="text-lg text-blue-400">✓</span>
                  <span className="text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border border-blue-500/30 bg-blue-500/20 p-3 text-blue-400 transition-colors hover:bg-blue-500/30"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border border-blue-500/30 bg-blue-500/20 p-3 text-blue-400 transition-colors hover:bg-blue-500/30"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 font-bold text-white transition-all hover:shadow-xl"
            >
              View My Projects
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 text-center transition-all hover:border-blue-500/50"
              >
                <div className="mb-3 flex justify-center text-3xl text-blue-400">
                  {stat.icon}
                </div>
                <div className="mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
                  <Counter end={stat.number} />
                  <span>+</span>
                </div>
                <p className="mb-1 text-sm text-gray-400">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="mb-12 text-center text-3xl font-bold">
            My Learning Path
          </h3>

          <div className="space-y-4">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group cursor-pointer rounded-xl border border-blue-500/20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 transition-all hover:border-blue-500/50"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`bg-gradient-to-r bg-clip-text text-2xl text-transparent ${item.color} mt-1`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 text-lg font-bold text-white">
                      {item.stage}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm text-blue-300 transition-colors group-hover:bg-blue-500/30"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="mb-12 text-center text-3xl font-bold">
            Currently Focusing On
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group rounded-xl border border-blue-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 transition-all hover:border-blue-500/50"
              >
                <div className="mb-4 text-3xl text-blue-400 transition-transform group-hover:scale-110">
                  {area.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">
                  {area.title}
                </h4>
                <p className="mb-4 text-sm text-gray-400">{area.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Progress</span>
                    <span className="text-blue-400">{area.progress}%</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${area.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-10 text-center backdrop-blur"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full border border-blue-500/10"
          ></motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10"
          >
            <p className="mb-4 text-2xl font-bold">
              "Every expert was once a beginner who never gave up."
            </p>
            <p className="text-gray-400">
              I'm excited about my journey and can't wait to see where coding
              takes me!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
