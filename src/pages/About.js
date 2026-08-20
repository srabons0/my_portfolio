import React, { useState } from "react";
import { motion } from "framer-motion";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const About = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const theme = {
    bg: isDark ? "#0f172a" : "#f8fafc",
    text: isDark ? "#f1f5f9" : "#1e293b",
    accent: isDark ? "#38bdf8" : "#0ea5e9",
    secondary: isDark ? "#94a3b8" : "#64748b",
    cardBg: isDark ? "rgba(30, 41, 59, 0.7)" : "rgba(255, 255, 255, 0.9)",
    border: isDark ? "rgba(148, 163, 184, 0.1)" : "rgba(0, 0, 0, 0.05)",
    shadow: isDark
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.5)"
      : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  };

  const styles = {
    section: {
      backgroundColor: theme.bg,
      color: theme.text,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "6rem 2rem",
      transition: "background-color 0.5s ease, color 0.5s ease",
      fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    container: {
      maxWidth: "1200px",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      gap: "5rem",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      zIndex: 1,
    },
    imageWrapper: {
      flex: "1 1 400px",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "cover",
      borderRadius: "24px",
      boxShadow: theme.shadow,
      filter: isDark ? "brightness(0.95)" : "none",
    },
    floatingCard: {
      position: "absolute",
      bottom: "30px",
      right: "-20px",
      background: theme.cardBg,
      backdropFilter: "blur(12px)",
      padding: "1rem 1.5rem",
      borderRadius: "16px",
      border: `1px solid ${theme.border}`,
      boxShadow: theme.shadow,
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      minWidth: "200px",
    },
    content: {
      flex: "1 1 400px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    label: {
      color: theme.accent,
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "3px",
      fontSize: "0.85rem",
      display: "inline-block",
    },
    title: {
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      fontWeight: "800",
      lineHeight: "1.1",
      margin: 0,
      letterSpacing: "-0.02em",
    },
    description: {
      fontSize: "1.125rem",
      lineHeight: "1.8",
      color: theme.secondary,
      margin: 0,
    },
    stats: {
      display: "flex",
      gap: "3rem",
      paddingTop: "1rem",
    },
    statItem: {
      display: "flex",
      flexDirection: "column",
    },
    statNumber: {
      fontSize: "3rem",
      fontWeight: "700",
      color: theme.accent,
      lineHeight: "1",
      marginBottom: "0.5rem",
    },
    statLabel: {
      fontSize: "0.875rem",
      color: theme.secondary,
      textTransform: "uppercase",
      fontWeight: "600",
      letterSpacing: "1px",
    },
    toggleBtn: {
      position: "absolute",
      top: "2.5rem",
      right: "2.5rem",
      background: theme.cardBg,
      border: `1px solid ${theme.border}`,
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: isDark ? "#fbbf24" : "#475569",
      transition: "all 0.2s ease",
      backdropFilter: "blur(10px)",
      zIndex: 10,
      boxShadow: theme.shadow,
    },
    ctaButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.75rem",
      backgroundColor: theme.accent,
      color: "#ffffff",
      padding: "1rem 2rem",
      borderRadius: "12px",
      fontWeight: "600",
      fontSize: "1rem",
      border: "none",
      cursor: "pointer",
      marginTop: "1rem",
      width: "fit-content",
      boxShadow: `0 10px 20px -10px ${theme.accent}80`,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  return (
    <section style={styles.section}>
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, ${theme.accent}15 0%, transparent 70%)`,
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <motion.button
        style={styles.toggleBtn}
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </motion.button>

      <motion.div
        style={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div style={styles.imageWrapper} variants={itemVariants}>
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Professional Portrait"
            style={styles.image}
          />

          <motion.div
            style={styles.floatingCard}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
          >
            <span style={{ fontSize: "2rem" }}>🚀</span>
            <div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  color: theme.text,
                }}
              >
                Open to Work
              </div>
              <div style={{ fontSize: "0.75rem", color: theme.secondary }}>
                Let's build something great
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={styles.content} variants={itemVariants}>
          <motion.span style={styles.label} variants={itemVariants}>
            About Me
          </motion.span>

          <motion.h2 style={styles.title} variants={itemVariants}>
            Transforming Ideas into{" "}
            <span style={{ color: theme.accent }}>Digital Reality</span>
          </motion.h2>

          <motion.p style={styles.description} variants={itemVariants}>
            I am a Senior Full Stack Engineer with a passion for building
            scalable, high-performance applications. With over a decade of
            experience in the tech industry, I bridge the gap between complex
            backend logic and intuitive frontend experiences.
          </motion.p>

          <motion.p style={styles.description} variants={itemVariants}>
            My expertise lies in crafting robust digital solutions that solve
            real-world problems. I focus on clean code, maintainable
            architecture, and user-centric design to deliver premium results for
            enterprise clients and startups alike.
          </motion.p>

          <motion.div style={styles.stats} variants={itemVariants}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>10+</span>
              <span style={styles.statLabel}>Years Exp.</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>50+</span>
              <span style={styles.statLabel}>Projects</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>100%</span>
              <span style={styles.statLabel}>Commitment</span>
            </div>
          </motion.div>

          <motion.button
            style={styles.ctaButton}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 15px 25px -10px ${theme.accent}66`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <DownloadIcon />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
