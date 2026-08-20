/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightText: "#213547",
        lightHover: "#747bff",
        darkText: "#f0f0f0",
        darkHover: "#90a0ff",
        lightBg: "#ffffff",
        darkBg: "#121212",
        lightBtn: "#ffffff",
        darkBtn: "#000000",
        lightBtnHover: "#f0f0f0",
        darkBtnHover: "#1f1f1f",
        ink: "var(--ink)",
        aurora2: "var(--aurora2)",
        plasma2: "var(--plasma2)",
        emerald2: "var(--emerald2)",
        snow: "var(--snow)",
        mist: "var(--mist)",
        rim: "var(--rim)",
        gAurora: "var(--g-aurora)",
        fog: "var(--fog)",
      },
      animation: {
        spinR: "spinR 18s linear infinite",
        blob: "blob 8s ease-in-out infinite",
        liftUp: "liftUp 0.6s cubic-bezier(.16,1,.3,1) both",
        fadeIn: "fadeIn 0.8s 0.8s both",
        
      },
      keyframes: {
        spinR: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blob: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        liftUp: {
        "0%": { transform: "translateY(100%)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
      },
    },
  },
  plugins: [],
};
