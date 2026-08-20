function Footer() {
  return (
    <footer className="border-t border-[var(--rim)] bg-[var(--ink2)] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-[6%] lg:py-[60px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-8 sm:mb-12 sm:gap-7 md:flex-row md:flex-wrap md:items-center md:justify-between lg:gap-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-[var(--g-aurora)] text-lg font-[var(--fd)] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              S
            </div>

            <span className="text-xl font-[var(--fd)] font-normal tracking-[0.5px] text-[var(--snow)] sm:text-2xl">
              SADMAN<span className="text-[var(--aurora2)]">.</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-7">
            {["Home", "Work", "Skills", "Service", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-[12px] font-[var(--fb)] font-medium text-[#bcb9be] transition-colors duration-200 hover:text-[var(--aurora2)] sm:text-[13px]"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="relative flex gap-2.5">
            {[
              {
                icon: "𝖂",
                label: "WhatsApp",
                url: "https://wa.me/01882034254",
              },
              {
                icon: "𝕀𝕟",
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/sadman-sakid-13a11b3b0",
              },
              {
                icon: "𝔉",
                label: "Facebook",
                url: "https://www.facebook.com/sadman8sakid",
              },
            ].map((s, i) => (
              <div key={i} className="group relative">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--rim)] bg-[var(--glass)] text-sm font-[var(--fd)] text-[#bcb9be] transition-all duration-300 hover:border-[var(--aurora)] hover:bg-[rgba(139,92,246,0.1)] hover:text-[var(--aurora2)]"
                >
                  {s.icon}
                </a>

                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#2B0D3E] px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hl mb-6 sm:mb-7" />

        <div className="flex flex-col gap-4 text-left sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3">
          <span className="text-[9px] font-[var(--fm)] text-[#bcb9be] sm:text-[10px]">
            © 2025 Sadman Sakid Srabon. All rights reserved.
          </span>

          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--emerald2)]" />

            <span className="text-[9px] font-[var(--fm)] text-[var(--emerald2)] sm:text-[10px]">
              Open to new projects
            </span>
          </div>

          <span className="text-[9px] font-[var(--fm)] text-[#bcb9be] sm:text-[10px]">
            Crafted with obsession · React + CSS
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
