import React, { useState } from "react";
import { HiDownload, HiMail } from "react-icons/hi";

const Demo = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      className={`${isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} min-h-screen transition-colors duration-300`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute -left-20 -top-40 opacity-30"
          width="720"
          height="720"
          viewBox="0 0 720 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <circle cx="360" cy="360" r="300" fill="url(#g1)" />
        </svg>
      </div>

      <div className="fixed right-6 top-6 z-50">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur transition-transform hover:scale-105"
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/10">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1b3f9d8a3d4b6a9e6b5f6b8c3f2a1e6a"
                alt="Professional developer working"
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/80 p-6 backdrop-blur dark:bg-black/60">
                <h4 className="text-sm font-semibold text-indigo-600">
                  Senior Software Engineer
                </h4>
                <p className="mt-2 max-w-xs text-sm text-gray-700 dark:text-gray-300">
                  Specializing in scalable web apps, modern UI, and
                  performance-first engineering.
                </p>

                <div className="mt-4 flex gap-6">
                  <div>
                    <div className="text-2xl font-extrabold text-indigo-600">
                      10+
                    </div>
                    <div className="text-xs uppercase text-gray-500">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-teal-500">
                      50+
                    </div>
                    <div className="text-xs uppercase text-gray-500">
                      Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/60 to-white/30 p-6 shadow backdrop-blur dark:from-black/60 dark:to-black/40">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                "I partner with product teams to design and build high-impact
                solutions — from prototyping to production. I prioritize
                clarity, speed, and measurable outcomes."
              </p>
              <div className="mt-4 text-sm font-semibold">
                — Alex Morgan, Product Lead
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 rounded bg-gradient-to-r from-indigo-500 to-teal-400" />
              <span className="text-sm font-semibold uppercase text-gray-400">
                About Me
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight lg:text-5xl">
              Crafting elegant, high-performance digital products
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a product-minded engineer with a decade of experience building
              delightful web experiences for startups and enterprises. I blend
              rigorous engineering with strong visual sensibility to deliver
              interfaces that perform and convert.
            </p>

            <p className="text-base text-gray-600 dark:text-gray-300">
              Current focus: Frontend architecture, design systems,
              accessibility, and measurable performance improvements. I also
              mentor teams and help shape product strategy.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Tailwind",
                "AWS",
                "Next.js",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-teal-400 px-5 py-3 font-semibold text-white shadow transition hover:scale-105"
              >
                <HiMail className="h-5 w-5" /> Contact Me
              </a>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/30 px-4 py-3 text-sm font-semibold transition hover:shadow dark:border-gray-700 dark:bg-black/30"
              >
                <HiDownload className="h-5 w-5" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 pb-20 pt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} — Built with focus on design, performance
        and product outcomes.
      </footer>
    </div>
  );
};

export default Demo;
