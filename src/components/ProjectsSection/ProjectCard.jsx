import { useCallback, useRef, useState } from "react";
import useInView from "../../hooks/useInView";
import Modal from "./Modal";

function ProjectCard({ p }) {
  const [modal, setModal] = useState(null);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);
  const [ref, vis] = useInView(0.08);
  const mobileLimit = p.span > 1 ? 3 : 2;

  const desktopLimit =
    p.span === 1
      ? 2
      : p.span === 2
        ? Math.ceil(p.tags.length / 1)
        : p.tags.length;

  const hiddenMobile = Math.max(p.tags.length - mobileLimit, 0);
  const hiddenDesktop = Math.max(p.tags.length - desktopLimit, 0);
  const onMM = useCallback((e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setTilt({
      x: (e.clientY - r.top) / r.height - 0.5,
      y: -((e.clientX - r.left) / r.width - 0.5),
    });
  }, []);
const spanClass =
  {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
  }[p.span] || "lg:col-span-1";
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(32px)",
      }}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${spanClass}`}
    >
      <div
        ref={cardRef}
        onMouseMove={onMM}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => {
          setHov(false);
          setTilt({ x: 0, y: 0 });
        }}
        style={{
          background: `linear-gradient(155deg, ${p.bg[0]}, ${p.bg[1]})`,
          borderColor: hov ? `${p.ac}50` : "var(--rim)",
          transform: `
        perspective(1100px)
        rotateX(${tilt.x * 14}deg)
        rotateY(${tilt.y * 14}deg)
        ${hov ? "translateY(-7px) scale(1.01)" : "scale(1)"}
      `,
          boxShadow: hov
            ? `0 30px 80px rgba(0,0,0,.5),
           0 0 0 1px ${p.ac}25,
           0 0 100px ${p.ac}12`
            : "none",
        }}
        className="group relative overflow-hidden rounded-[22px] border transition-[transform,border-color,box-shadow] duration-300 ease-out"
      >
        <div
          style={{
            background: `linear-gradient(
          105deg,
          transparent 40%,
          ${p.ac}08 50%,
          transparent 60%
        )`,
            backgroundSize: "200% 200%",
            animation: hov ? "hologram 3s ease infinite" : "none",
          }}
          className="pointer-events-none absolute inset-0"
        />

        <div
          style={{
            background: `linear-gradient(90deg, ${p.ac}, transparent)`,
            opacity: hov ? 1 : 0.3,
            boxShadow: hov ? `0 0 12px ${p.ac}` : "none",
          }}
          className="h-[2.5px] transition-all duration-500"
        />

        <div
          style={{
            background: `linear-gradient(
          90deg,
          transparent,
          ${p.ac}06,
          transparent
        )`,
            animation: "streak 4s ease-in-out infinite",
          }}
          className="pointer-events-none absolute left-[-80%] top-0 h-full w-[55%]"
        />

        <div
          style={{
            background: `radial-gradient(
          circle,
          ${p.ac}12 0%,
          transparent 70%
        )`,
            opacity: hov ? 1 : 0,
          }}
          className="pointer-events-none absolute left-[20%] top-[-40%] h-[350px] w-[350px] rounded-full transition-opacity duration-500"
        />

        <div className="relative p-6 sm:p-8 lg:p-[42px]">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span
                  style={{ color: p.ac }}
                  className="font-mono text-[10px] uppercase tracking-[3px]"
                >
                  {p.id} / {p.cat}
                </span>

                {p.status && (
                  <span
                    style={{
                      color: p.status === "Live" ? "#4ade80" : "#ffffff",
                      borderColor:
                        p.status === "Live" ? "#4ade8050" : "#ffffff",
                      background:
                        p.status === "Live" ? "#4ade800d" : "#ef44440d",
                    }}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[1.5px]"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: p.status === "Live" ? "#4ade80" : "#ef4444",
                        boxShadow:
                          p.status === "Live"
                            ? "0 0 8px #4ade80"
                            : "0 0 8px #ef4444",
                      }}
                    />

                    {p.status}
                  </span>
                )}
              </div>

              <h3
                style={{
                  color: "var(--snow)",
                }}
                className="text-[clamp(28px,3.5vw,50px)] font-[var(--fd)] font-normal leading-[0.95] tracking-[-1px]"
              >
                {p.title}
              </h3>
            </div>

            <div
              style={{
                borderColor: `${p.ac}50`,
                color: p.ac,
                background: hov ? `${p.ac}10` : "transparent",
                transform: hov ? "rotate(45deg)" : "none",
              }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] text-xl transition-all duration-500 sm:h-[50px] sm:w-[50px]"
            >
              ↗
            </div>
          </div>

          <p
            style={{ color: "var(--mist)" }}
            className="mb-7 max-w-[500px] text-[13px] font-[var(--fb)] leading-[1.8] sm:text-sm"
          >
            {p.desc.length <= 200 ? p.desc : `${p.desc.slice(0, 200)}...`}
          </p>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {p.tags.map((t, i) => {
                const showMobile = i < mobileLimit;
                const showDesktop = i < desktopLimit;

                return (
                  <span
                    key={t}
                    style={{
                      color: hov ? p.ac : "var(--fog1)",
                      borderColor: hov ? `${p.ac}50` : "var(--rim)",
                      background: hov ? `${p.ac}08` : "transparent",
                    }}
                    className={` ${showMobile ? "inline-flex" : "hidden"} ${showDesktop ? "lg:inline-flex" : "lg:hidden"} rounded border px-2.5 py-1.5 font-mono text-[10px] tracking-[1px] transition-all duration-300`}
                  >
                    {t}
                  </span>
                );
              })}

              {hiddenMobile > 0 && (
                <span
                  style={{
                    color: hov ? p.ac : "var(--fog1)",
                    borderColor: hov ? `${p.ac}50` : "var(--rim)",
                    background: hov ? `${p.ac}08` : "transparent",
                  }}
                  className="inline-flex rounded border px-2.5 py-1.5 font-mono text-[10px] tracking-[1px] lg:hidden"
                >
                  +{hiddenMobile}
                </span>
              )}

              {hiddenDesktop > 0 && (
                <span
                  style={{
                    color: hov ? p.ac : "var(--fog1)",
                    borderColor: hov ? `${p.ac}50` : "var(--rim)",
                    background: hov ? `${p.ac}08` : "transparent",
                  }}
                  className="hidden rounded border px-2.5 py-1.5 font-mono text-[10px] tracking-[1px] lg:inline-flex"
                >
                  +{hiddenDesktop}
                </span>
              )}
            </div>

            <button
              onClick={() => setModal(p)}
              style={{
                color: p.ac,
                borderColor: `${p.ac}60`,
                background: hov ? `${p.ac}12` : "transparent",
              }}
              className="flex h-[46px] w-full shrink-0 items-center justify-center gap-2 rounded-lg border-[1.5px] px-7 font-mono text-[13px] tracking-[2px] backdrop-blur-lg transition-all duration-300 hover:shadow-[0_0_20px_var(--shadow-color)] sm:w-auto"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${p.ac}22`;
                e.currentTarget.style.boxShadow = `0 0 20px ${p.ac}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = hov
                  ? `${p.ac}12`
                  : "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              VIEW
              <span className="text-base">↗</span>
            </button>
          </div>
        </div>
      </div>

      {modal && <Modal p={modal} onClose={() => setModal(null)} />}
    </div>
  );
}

export default ProjectCard;
