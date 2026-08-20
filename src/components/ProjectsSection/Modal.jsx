import { useCallback, useEffect, useState } from "react";

export default function Modal({ p, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const [hovGallery, setHovGallery] = useState(null);
  const [closing, setClosing] = useState(false);
  const DURATION = 420;
  const [hov, setHov] = useState(false);

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
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => {
          setHov(false);
        }}
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
            {p?.stats?.map((s, i) => (
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
                {p?.details?.map((d, i) => (
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
              <div className="flex items-center justify-between gap-10">
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginTop: 32,
                    flexWrap: "wrap",
                    animation: "slideUp .4s .4s both",
                  }}
                >
                  {p?.tags?.map((t) => (
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
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Visit <span style={{ fontSize: 16 }}>↗</span>
                </a>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 16,
                animation: "fadeIn .4s both",
              }}
            >
              {p?.gallery?.map((g, i) => (
                <div
                  key={g.label}
                  onMouseEnter={() => setHovGallery(i)}
                  onMouseLeave={() => setHovGallery(null)}
                  style={{
                    borderRadius: 14,
                    border: `1px solid ${hovGallery === i ? p.ac + "50" : p.ac + "18"}`,
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
                  <img
                    src={g}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div style={{ animation: "fadeIn .4s both" }}>
              {p?.info?.map(([label, val], i) => (
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
