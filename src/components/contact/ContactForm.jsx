import { useState, useEffect } from "react";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/01882034254",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    color: "bg-[#25D366] text-white",
    label: "+1 234 567 890",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sadman-sakid-13a11b3b0",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "bg-[#0A66C2] text-white",
    label: "linkedin.com/in/you",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sadman8sakid",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "bg-[#1877F2] text-white",
    label: "facebook.com/you",
  },
];

export default function ContactForm() {
  return (
    <div
      id="contact"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080810] px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32 lg:px-10 lg:py-40"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

    .orb1 {
      background: radial-gradient(
        circle,
        rgba(99,102,241,0.3) 0%,
        transparent 70%
      );
      animation: orbMove 8s ease-in-out infinite;
    }

    .orb2 {
      background: radial-gradient(
        circle,
        rgba(168,85,247,0.2) 0%,
        transparent 70%
      );
      animation: orbMove 12s ease-in-out infinite reverse;
    }
  `}</style>

      <div className="orb1 pointer-events-none absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-80 sm:w-80 md:h-96 md:w-96" />

      <div className="orb2 pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full sm:h-80 sm:w-80 md:h-96 md:w-96" />

      <div className="noise" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="card-glow overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0d0d1a]/80 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-5">
            <div className="relative flex flex-col justify-between border-b border-white/[0.06] p-6 sm:p-8 md:p-10 lg:border-b-0 lg:border-r">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, transparent 60%)",
                }}
              />

              <div className="relative">
                <div className="anim-fadeup anim-delay-1 mb-7 sm:mb-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 sm:h-16 sm:w-16">
                    <span className="text-xl font-black tracking-tighter text-white sm:text-2xl">
                      S
                    </span>
                  </div>

                  <span className="tag-pill inline-flex rounded-full px-3 py-1 text-[11px] font-medium text-indigo-300 sm:text-xs">
                    ✦ Available for work
                  </span>
                </div>

                <div className="anim-fadeup anim-delay-2 mb-7 sm:mb-8 lg:mb-6">
                  <h1 className="mb-2 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                    Let's build
                    <br />
                    <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      something great
                    </span>
                  </h1>

                  <p
                    className="max-w-md text-sm leading-relaxed text-white/40"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Have a project in mind or just want to say hi? My inbox is
                    always open.
                  </p>
                </div>

                <div className="anim-fadeup anim-delay-3 mb-7 space-y-4 sm:mb-8 sm:space-y-3">
                  {[
                    {
                      icon: "📍",
                      label: "Based in",
                      value: "Uttara, Dhaka, Bangladesh",
                    },
                    {
                      icon: "⚡",
                      label: "Response time",
                      value: "Within 24 hours",
                    },
                    {
                      icon: "🌐",
                      label: "Timezone",
                      value: "BST (UTC+6)",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="flex-shrink-0 text-base">
                        {item.icon}
                      </span>

                      <div className="min-w-0">
                        <p
                          className="text-xs text-white/25"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {item.label}
                        </p>

                        <p
                          className="break-words text-sm font-medium text-white/70"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="divider-line mb-7 h-px w-full sm:mb-8" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-5 lg:grid-cols-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl border border-white/5 bg-[#151922] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 sm:p-6 lg:p-8"
                >
                  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 sm:h-11 sm:w-11 ${item.color} `}
                  >
                    {item.icon}
                  </div>

                  <h3 className="mt-5 font-medium tracking-wide text-white sm:mt-6">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-500">
                    Connect professionally
                  </p>

                  <div className="mt-5 flex items-center text-sm text-neutral-400 transition group-hover:text-white sm:mt-6">
                    Get in touch
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
