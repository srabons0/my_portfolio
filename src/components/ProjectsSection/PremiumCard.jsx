import { useState, useRef, useEffect, useCallback } from "react";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap');

  :root {
    --bg: #080a0f;
    --snow: #f0f2f8;
    --mist: #7a8099;
    --fog1: #3a3f52;
    --rim: rgba(255,255,255,0.07);
    --fm: 'DM Mono', monospace;
    --fd: 'Instrument Serif', serif;
    --fb: 'Syne', sans-serif;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--fb);
    overflow-x: hidden;
  }

  @keyframes hologram {
    0%,100% { background-position: 200% 0%; }
    50% { background-position: 0% 100%; }
  }
  @keyframes streak {
    0%   { left: -80%; opacity: 0; }
    10%  { opacity: 1; }
    80%  { opacity: 1; }
    100% { left: 120%; opacity: 0; }
  }
  @keyframes modalIn {
    from { opacity: 0; transform: scale(.92) translateY(28px) rotateX(4deg); filter: blur(8px); }
    to   { opacity: 1; transform: scale(1) translateY(0) rotateX(0deg); filter: blur(0px); }
  }
  @keyframes modalOut {
    from { opacity: 1; transform: scale(1) translateY(0) rotateX(0deg); filter: blur(0px); }
    to   { opacity: 0; transform: scale(.92) translateY(28px) rotateX(4deg); filter: blur(8px); }
  }
  @keyframes backdropIn {
    from { opacity: 0; backdrop-filter: blur(0px); }
    to   { opacity: 1; backdrop-filter: blur(24px); }
  }
  @keyframes backdropOut {
    from { opacity: 1; backdrop-filter: blur(24px); }
    to   { opacity: 0; backdrop-filter: blur(0px); }
  }
  @keyframes shimmerOut {
    0%   { opacity: 1; transform: scaleX(1); }
    60%  { opacity: 1; transform: scaleX(1.05); }
    100% { opacity: 0; transform: scaleX(0); transform-origin: right; }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes lineGrow {
    from { width: 0; }
    to   { width: 100%; }
  }
  @keyframes scanline {
    0%   { top: -10%; }
    100% { top: 110%; }
  }
  @keyframes pulse {
    0%,100% { opacity:.4; transform: scale(1); }
    50%      { opacity:.8; transform: scale(1.05); }
  }
  @keyframes floatIn {
    from { opacity: 0; transform: translateX(-12px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

const SAMPLE = {
  id: "001",
  cat: "IDENTITY",
  title: "Brand\nArchitecture",
  desc: "A comprehensive visual language system built around the principles of clarity, motion, and emotional resonance. Designed to scale across every touchpoint.",
  tags: ["BRANDING", "STRATEGY", "SYSTEMS"],
  ac: "#7DF9C0",
  bg: ["#0d1117", "#0a1520"],
  stats: [
    { label: "DELIVERABLES", val: "48" },
    { label: "DURATION", val: "12 WK" },
    { label: "TEAM SIZE", val: "06" },
    { label: "YEAR", val: "2024" },
  ],
  details: [
    {
      title: "The Challenge",
      body: "The client needed a brand system capable of expressing authority in enterprise contexts while remaining warm and approachable at the consumer level — a tension rarely resolved elegantly.",
    },
    {
      title: "The Approach",
      body: "We built from a single geometric primitive: an asymmetric arc that evolves across all brand expressions. This motif creates recognition without rigidity, breathing identity into motion, type, and space.",
    },
    {
      title: "The Outcome",
      body: "A 48-piece deliverable suite — spanning mark, type system, color architecture, motion guidelines, and campaign templates — deployed across 14 markets within 8 weeks of handoff.",
    },
  ],
  gallery: [
    { label: "MARK / PRIMARY" },
    { label: "TYPE SYSTEM" },
    { label: "COLOR ARCH." },
    { label: "MOTION LANG." },
  ],
};

function Card({ p, onView }) {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const [vis, setVis] = useState(false);
  const [hov, setHov] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const onMM = useCallback((e) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -1,
      y: (e.clientX - r.left) / r.width - 0.5,
    });
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(32px)",
        transition:
          "opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)",
        maxWidth: 680,
        width: "100%",
      }}
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
          borderRadius: 22,
          overflow: "hidden",
          background: `linear-gradient(155deg,${p.bg[0]},${p.bg[1]})`,
          border: `1px solid ${hov ? p.ac + "50" : "var(--rim)"}`,
          cursor: "default",
          transform: `perspective(1100px) rotateX(${tilt.x * 14}deg) rotateY(${tilt.y * 14}deg) ${hov ? "translateY(-7px) scale(1.01)" : "scale(1)"}`,
          transition: "transform .25s ease,border-color .4s,box-shadow .4s",
          boxShadow: hov
            ? `0 30px 80px rgba(0,0,0,.5),0 0 0 1px ${p.ac}25,0 0 100px ${p.ac}12`
            : "none",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(105deg,transparent 40%,${p.ac}08 50%,transparent 60%)`,
            backgroundSize: "200% 200%",
            animation: hov ? "hologram 3s ease infinite" : "none",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            height: 2.5,
            background: `linear-gradient(90deg,${p.ac},transparent)`,
            opacity: hov ? 1 : 0.3,
            transition: "opacity .4s",
            boxShadow: hov ? `0 0 12px ${p.ac}` : "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-80%",
            width: "55%",
            height: "100%",
            background: `linear-gradient(90deg,transparent,${p.ac}06,transparent)`,
            animation: "streak 4s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: `radial-gradient(circle,${p.ac}12 0%,transparent 70%)`,
            left: "20%",
            top: "-40%",
            opacity: hov ? 1 : 0,
            transition: "opacity .5s",
            pointerEvents: "none",
          }}
        />

        <div style={{ padding: 42 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 24,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--fm)",
                  fontSize: 10,
                  color: p.ac,
                  letterSpacing: 3,
                  marginBottom: 10,
                }}
              >
                {p.id} / {p.cat}
              </div>
              <h3
                style={{
                  fontFamily: "var(--fd)",
                  fontSize: "clamp(28px,3.5vw,50px)",
                  color: "var(--snow)",
                  letterSpacing: "-1px",
                  lineHeight: 0.95,
                  fontWeight: 400,
                  whiteSpace: "pre-line",
                }}
              >
                {p.title}
              </h3>
            </div>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                border: `1.5px solid ${p.ac}50`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: p.ac,
                transform: hov ? "rotate(45deg)" : "none",
                transition: "transform .4s cubic-bezier(.16,1,.3,1)",
                flexShrink: 0,
                background: hov ? `${p.ac}10` : "transparent",
              }}
            >
              ↗
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--fb)",
              fontSize: 14,
              color: "var(--mist)",
              lineHeight: 1.8,
              marginBottom: 28,
              maxWidth: 500,
            }}
          >
            {p.desc}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: 10,
                    letterSpacing: 1,
                    color: hov ? p.ac : "var(--fog1)",
                    border: `1px solid ${hov ? p.ac + "50" : "var(--rim)"}`,
                    padding: "5px 13px",
                    borderRadius: 4,
                    transition: "all .3s",
                    background: hov ? `${p.ac}08` : "transparent",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() => onView(p)}
              style={{
                padding: "0 28px",
                height: 46,
                borderRadius: 8,
                border: `1.5px solid ${p.ac}60`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontSize: 13,
                fontFamily: "var(--fm)",
                letterSpacing: 2,
                color: p.ac,
                flexShrink: 0,
                background: hov ? `${p.ac}12` : "transparent",
                cursor: "pointer",
                transition: "all .3s",
                backdropFilter: "blur(8px)",
              }}
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
              VIEW <span style={{ fontSize: 16 }}>↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Modal({ p, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const [hovGallery, setHovGallery] = useState(null);
  const [closing, setClosing] = useState(false);
  const DURATION = 420;

  const handleClose = useCallback(() => {
    if (closing) return;
    setClosing(true);
    setTimeout(onClose, DURATION);
  }, [closing, onClose]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [handleClose]);

  if (!p) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "rgba(4,6,12,0.85)",
        backdropFilter: "blur(24px)",
        animation: `${closing ? "backdropOut" : "backdropIn"} ${DURATION}ms cubic-bezier(.16,1,.3,1) forwards`,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 860,
          maxHeight: "90vh",
          borderRadius: 28,
          overflow: "hidden",
          background: `linear-gradient(145deg, #0d1117 0%, #080c14 60%, #060a10 100%)`,
          border: `1px solid ${p.ac}30`,
          boxShadow: `0 60px 120px rgba(0,0,0,.8), 0 0 0 1px ${p.ac}20, 0 0 80px ${p.ac}08`,
          animation: `${closing ? "modalOut" : "modalIn"} ${DURATION}ms cubic-bezier(.16,1,.3,1) forwards`,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          transformOrigin: "center bottom",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 1,
            borderRadius: 28,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: 1,
              background: `linear-gradient(90deg,transparent,${p.ac}15,transparent)`,
              animation: "scanline 6s linear infinite",
              top: "-10%",
            }}
          />
        </div>

        <div
          style={{
            height: 3,
            background: `linear-gradient(90deg,${p.ac},${p.ac}80,transparent)`,
            animation: closing
              ? `shimmerOut ${DURATION}ms ease forwards`
              : "lineGrow .8s .2s cubic-bezier(.16,1,.3,1) both",
            flexShrink: 0,
          }}
        />

        <div
          style={{
            padding: "32px 40px 0",
            flexShrink: 0,
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ animation: "slideUp .5s .1s both" }}>
              <div
                style={{
                  fontFamily: "var(--fm)",
                  fontSize: 10,
                  color: p.ac,
                  letterSpacing: 4,
                  marginBottom: 12,
                  opacity: 0.8,
                }}
              >
                {p.id} / {p.cat} / OVERVIEW
              </div>
              <h2
                style={{
                  fontFamily: "var(--fd)",
                  fontSize: "clamp(36px,5vw,64px)",
                  color: "var(--snow)",
                  letterSpacing: "-2px",
                  lineHeight: 0.9,
                  fontWeight: 400,
                  whiteSpace: "pre-line",
                }}
              >
                {p.title}
              </h2>
            </div>

            <button
              onClick={handleClose}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: `1px solid ${p.ac}30`,
                background: "transparent",
                color: "var(--mist)",
                fontSize: 18,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all .3s",
                marginTop: 4,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${p.ac}15`;
                e.currentTarget.style.color = p.ac;
                e.currentTarget.style.borderColor = `${p.ac}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--mist)";
                e.currentTarget.style.borderColor = `${p.ac}30`;
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: 0,
              marginTop: 28,
              borderTop: `1px solid ${p.ac}12`,
              borderBottom: `1px solid ${p.ac}12`,
              animation: "slideUp .5s .2s both",
            }}
          >
            {p.stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  padding: "16px 0",
                  borderRight:
                    i < p.stats.length - 1 ? `1px solid ${p.ac}12` : "none",
                  paddingLeft: i === 0 ? 0 : 24,
                  paddingRight: 24,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: 9,
                    color: "var(--fog1)",
                    letterSpacing: 3,
                    marginBottom: 4,
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--fd)",
                    fontSize: "clamp(22px,3vw,32px)",
                    color: "var(--snow)",
                    letterSpacing: "-1px",
                    fontWeight: 400,
                  }}
                >
                  {s.val}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: 0,
              marginTop: 0,
              animation: "slideUp .5s .25s both",
            }}
          >
            {["Details", "Gallery", "Info"].map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: "14px 24px",
                  fontFamily: "var(--fm)",
                  fontSize: 11,
                  letterSpacing: 2,
                  color: activeTab === i ? p.ac : "var(--fog1)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  borderBottom:
                    activeTab === i
                      ? `1.5px solid ${p.ac}`
                      : "1.5px solid transparent",
                  transition: "all .3s",
                  marginBottom: 0,
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            overflowY: "auto",
            flex: 1,
            padding: "28px 40px 40px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {activeTab === 0 && (
            <div>
              <p
                style={{
                  fontFamily: "var(--fb)",
                  fontSize: 15,
                  color: "var(--mist)",
                  lineHeight: 1.85,
                  marginBottom: 32,
                  maxWidth: 600,
                  animation: "slideUp .4s .05s both",
                }}
              >
                {p.desc}
              </p>

              <div
                style={{
                  display: "grid",
                  gap: 20,
                  animation: "slideUp .4s .1s both",
                }}
              >
                {p.details.map((d, i) => (
                  <div
                    key={d.title}
                    style={{
                      borderLeft: `2px solid ${p.ac}40`,
                      paddingLeft: 20,
                      animation: `floatIn .4s ${i * 0.08 + 0.15}s both`,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--fm)",
                        fontSize: 10,
                        color: p.ac,
                        letterSpacing: 3,
                        marginBottom: 8,
                      }}
                    >
                      {d.title.toUpperCase()}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--fb)",
                        fontSize: 14,
                        color: "var(--mist)",
                        lineHeight: 1.8,
                      }}
                    >
                      {d.body}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginTop: 32,
                  flexWrap: "wrap",
                  animation: "slideUp .4s .4s both",
                }}
              >
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--fm)",
                      fontSize: 10,
                      letterSpacing: 1,
                      color: p.ac,
                      border: `1px solid ${p.ac}40`,
                      padding: "6px 16px",
                      borderRadius: 4,
                      background: `${p.ac}08`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                animation: "fadeIn .4s both",
              }}
            >
              {p.gallery.map((g, i) => (
                <div
                  key={g.label}
                  onMouseEnter={() => setHovGallery(i)}
                  onMouseLeave={() => setHovGallery(null)}
                  style={{
                    borderRadius: 14,
                    border: `1px solid ${hovGallery === i ? p.ac + "50" : p.ac + "18"}`,
                    background:
                      hovGallery === i ? `${p.ac}06` : "rgba(255,255,255,0.02)",
                    height: 180,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    cursor: "pointer",
                    transition: "all .35s cubic-bezier(.16,1,.3,1)",
                    transform: hovGallery === i ? "translateY(-4px)" : "none",
                    boxShadow:
                      hovGallery === i
                        ? `0 20px 40px rgba(0,0,0,.4),0 0 30px ${p.ac}10`
                        : "none",
                    animation: `floatIn .4s ${i * 0.08}s both`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {hovGallery === i && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg,${p.ac}05,transparent)`,
                        pointerEvents: "none",
                      }}
                    />
                  )}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: `1px solid ${p.ac}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: p.ac,
                      fontSize: 16,
                      animation:
                        hovGallery === i
                          ? "spin 4s linear infinite"
                          : "pulse 2s ease infinite",
                    }}
                  >
                    ◈
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--fm)",
                      fontSize: 10,
                      letterSpacing: 2,
                      color: hovGallery === i ? p.ac : "var(--fog1)",
                      transition: "color .3s",
                    }}
                  >
                    {g.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div style={{ animation: "fadeIn .4s both" }}>
              {[
                ["Client", "Confidential — Series C Startup"],
                ["Scope", "Full Brand Identity System"],
                ["Deliverables", "48-piece asset suite"],
                ["Format", "Figma, AI, PDF, Motion files"],
                ["Status", "Completed — Live in Production"],
                ["Recognition", "Shortlisted — Brand Impact Awards 2024"],
              ].map(([label, val], i) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 0",
                    borderBottom: `1px solid ${p.ac}10`,
                    animation: `floatIn .35s ${i * 0.05}s both`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--fm)",
                      fontSize: 10,
                      letterSpacing: 3,
                      color: "var(--fog1)",
                    }}
                  >
                    {label.toUpperCase()}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--fb)",
                      fontSize: 14,
                      color: "var(--mist)",
                      textAlign: "right",
                      maxWidth: "60%",
                    }}
                  >
                    {val}
                  </span>
                </div>
              ))}

              <div
                style={{
                  marginTop: 32,
                  padding: 24,
                  borderRadius: 14,
                  border: `1px solid ${p.ac}20`,
                  background: `${p.ac}05`,
                  animation: `floatIn .35s .35s both`,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: 10,
                    letterSpacing: 3,
                    color: p.ac,
                    marginBottom: 12,
                  }}
                >
                  INTERESTED IN THIS WORK?
                </div>
                <p
                  style={{
                    fontFamily: "var(--fb)",
                    fontSize: 14,
                    color: "var(--mist)",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  This case study is available for detailed review. Reach out to
                  discuss the methodology and outcomes.
                </p>
                <button
                  style={{
                    padding: "10px 24px",
                    borderRadius: 8,
                    border: `1px solid ${p.ac}50`,
                    background: `${p.ac}12`,
                    color: p.ac,
                    fontFamily: "var(--fm)",
                    fontSize: 11,
                    letterSpacing: 2,
                    cursor: "pointer",
                    transition: "all .3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${p.ac}22`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${p.ac}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${p.ac}12`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  GET IN TOUCH ↗
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <style>{CSS}</style>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: 40,
          background: "var(--bg)",
        }}
      >
        <Card p={SAMPLE} onView={setModal} />
      </div>
      {modal && <Modal p={modal} onClose={() => setModal(null)} />}
    </>
  );
}
