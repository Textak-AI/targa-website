"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const C = {
  navy: "#1f476a", navyDark: "#162d46", navyDeep: "#0f2035",
  teal: "#0eb2af", tealHover: "#0cc7c4", gold: "#fbbf24",
  white: "#fff", g500: "#64748b", g300: "#cbd5e1", g200: "#e2e8f0",
};

/* ═══ SCROLL ANIMATION HOOK ═══ */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Reveal({ children, delay = 0, y = 30, style = {} }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(" + y + "px)", transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1) " + delay + "s, transform 0.5s cubic-bezier(0.16,1,0.3,1) " + delay + "s", ...style }}>
      {children}
    </div>
  );
}

/* ═══ REAL LOGO SVGS ═══ */
function IconMark({ height = 32, variant = "light" }) {
  const main = variant === "light" ? C.white : C.navy;
  return (
    <svg height={height} viewBox="0 0 194.4 183.8" fill="none">
      <polygon fill={C.teal} points="114.8 141.9 80 142.1 97.5 105.7 114.8 141.9" />
      <polygon fill={main} points="182.9 181 151.9 181 97.8 67.7 43.1 181 11.9 181 81 37.8 92.5 13.9 97.8 3 182.9 181" />
    </svg>
  );
}

function WordmarkAI({ height = 18, variant = "light" }) {
  const main = variant === "light" ? C.white : C.navy;
  return (
    <svg height={height} viewBox="0 0 246.2 50.1" fill="none">
      <path fill={main} d="M172.6,27.8c0,3.3-.4,6.2-1.2,8.7-.8,2.3-2.1,4.6-3.9,6.6-2.5,2.8-5.4,4.8-8.7,5.9-.2,0-.5.2-.7.2-.6.2-1.1.3-1.7.4-1.5.3-3.1.5-4.7.5-3.3,0-6.3-.6-9.1-1.8-2.5-1.1-4.9-2.8-7-4.9-4.5-4.6-6.7-10-6.7-16.4s2.2-12,6.8-16.6c4.6-4.6,10-6.8,16.6-6.8s6.1.6,8.9,1.7l-1.3,2.7c-2.3-1-4.8-1.5-7.4-1.5-5.7,0-10.5,2-14.4,5.9-3.9,3.9-5.8,8.8-5.8,14.6s2.2,11,6.5,14.9c1.7,1.5,3.5,2.7,5.3,3.6,2.5,1.2,5.2,1.8,7.9,1.8s.9,0,1.4,0c3.5-.3,6.8-1.6,9.6-4h0c3.3-2.9,5.1-6.3,5.5-10.2l.2-2.2h-6.4l1.4-2.9h8.8Z" />
      <polygon fill={main} points="220 48.5 216.6 48.5 199.3 12.3 181.7 48.7 178.2 48.7 199.3 5.1 220 48.5" />
      <polygon fill={C.teal} points="202.4 37.7 195.9 37.7 199.2 31 202.4 37.7" />
      <polygon fill={main} points="84.7 48.5 81.3 48.5 64 12.3 46.4 48.7 42.9 48.7 64 5.1 84.7 48.5" />
      <path fill={main} d="M106.3,29l10.3,20.2h-3.3l-6.4-12.6-4.7-9.8h1.5c1.6,0,2.9-.1,4.1-.4,5.4-1,8.3-4.4,8.3-9.6s-1.1-5.5-3.2-7.1c-2-1.6-4.9-2.4-8.8-2.4h-19.2l-1.4-2.9h19c1.5,0,2.9,0,4.2.2,2.6.3,4.8.8,6.4,1.7.8.4,1.4.8,2,1.3,2.7,2.3,4,5.3,4,9.2s-.8,5.5-2.5,7.7c-1.7,2.1-3.9,3.5-6.7,4.1,0,0-3.7.5-3.7.6Z" />
      <polygon fill={main} points="45.3 4.5 43.9 7.4 21.9 7.4 21.9 49.2 18.5 49.2 18.5 7.4 0 7.4 1.4 4.5 45.3 4.5" />
      <path fill={C.teal} d="M232.2,0l-7.7,16.6h2.5l1.7-3.8,1-2.2,2.4-5.3,2.3,5.3,1,2.2,1.6,3.8h2.6l-7.5-16.6Z" />
      <rect fill={C.teal} x="243.8" y="1" width="2.4" height="15.6" />
      <polygon fill={C.teal} points="67 37.7 60.6 37.7 63.8 31 67 37.7" />
    </svg>
  );
}

function Logo({ variant = "light", size = "sm" }) {
  const sepColor = variant === "light" ? "rgba(255,255,255,0.25)" : C.g300;
  const ih = size === "sm" ? 28 : 36;
  const wh = size === "sm" ? 14 : 18;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: size === "sm" ? 10 : 14, cursor: "pointer" }}>
      <IconMark height={ih} variant={variant} />
      <div style={{ width: 1, height: ih * 0.6, background: sepColor }} />
      <WordmarkAI height={wh} variant={variant} />
    </div>
  );
}

/* ═══ SHARED UI ═══ */
function Btn({ children, variant = "primary", style: sx = {}, onClick }) {
  const [h, setH] = useState(false);
  const base = { fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", fontWeight: 600, padding: "14px 32px", borderRadius: 8, cursor: "pointer", transition: "all 0.3s", border: "none", letterSpacing: "0.02em", display: "inline-flex", alignItems: "center", gap: 6 };
  const v = {
    primary: { background: h ? C.tealHover : C.teal, color: C.white, boxShadow: h ? "0 8px 24px rgba(14,178,175,0.3)" : "none", transform: h ? "translateY(-1px)" : "none" },
    secondary: { background: "transparent", color: h ? C.white : C.g300, border: h ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(255,255,255,0.15)" },
    outline: { background: "transparent", color: h ? C.navy : C.g500, border: "1px solid " + (h ? C.navy : C.g300) },
  };
  return <button style={{ ...base, ...v[variant], ...sx }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>{children}</button>;
}

function Eyebrow({ children, color = C.teal }) {
  return (<div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}><div style={{ width: 32, height: 1, background: color }} /><span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "2px", color, textTransform: "uppercase" }}>{children}</span></div>);
}

function SectionTitle({ children, sub, align = "left" }) {
  return (<div style={{ textAlign: align }}><h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1.5rem,2.5vw,2.1rem)", fontWeight: 300, color: C.white, letterSpacing: "-0.5px", lineHeight: 1.3, marginBottom: sub ? 16 : 0, textWrap: "balance" }}>{children}</h2>{sub && <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: C.g300, maxWidth: align === "center" ? 580 : 640, margin: align === "center" ? "0 auto" : 0, textWrap: "pretty" }}>{sub}</p>}</div>);
}

function HoverCard({ title, desc, accent }) {
  const [h, setH] = useState(false);
  return (<div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: "linear-gradient(145deg,rgba(31,71,106,0.6) 0%,rgba(15,32,53,0.85) 100%)", borderRadius: 10, padding: "36px 32px", borderTop: "3px solid " + accent, borderLeft: "1px solid rgba(14,178,175,0.08)", borderRight: "1px solid rgba(14,178,175,0.08)", borderBottom: "1px solid rgba(14,178,175,0.08)", transition: "all 0.35s", transform: h ? "translateY(-4px)" : "none", boxShadow: h ? "0 16px 48px rgba(0,0,0,0.3)" : "0 4px 16px rgba(0,0,0,0.15)" }}><h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.15rem", fontWeight: 500, color: C.white, marginBottom: 12 }}>{title}</h3><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: 1.7, color: C.g300 }}>{desc}</p></div>);
}

/* ═══ 3D PERSPECTIVE DASHBOARD WITH CALLOUTS ═══ */
function PerspectiveDashboard({ view = "strategic" }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  const kpis = [
    { t: "Q2 Value Pipeline", v: "$4.2M", d: "+18% QoQ", c: C.teal },
    { t: "Strategic Initiatives", v: "12 Active", d: "3 At Risk", c: C.gold },
    { t: "Exec Alignment", v: "87%", d: "+12 pts", c: C.teal },
  ];

  const strategicRows = [
    { n: "APAC Market Expansion", o: "CRO", s: "On Track", p: 72 },
    { n: "Product Line Extension", o: "CPO", s: "At Risk", p: 38 },
    { n: "Digital Transformation", o: "CTO", s: "On Track", p: 85 },
    { n: "Talent Development", o: "CHRO", s: "On Track", p: 60 },
  ];

  const timelineRows = [
    { n: "Q1", items: [{ l: "APAC Research", w: "35%", x: "5%", c: C.teal }, { l: "Talent Audit", w: "25%", x: "10%", c: C.teal }] },
    { n: "Q2", items: [{ l: "Market Entry", w: "40%", x: "40%", c: C.teal }, { l: "Digital MVP", w: "30%", x: "35%", c: C.gold }, { l: "New Product Scope", w: "20%", x: "45%", c: C.gold }] },
    { n: "Q3", items: [{ l: "Scale Ops", w: "25%", x: "70%", c: C.teal }, { l: "Platform Launch", w: "30%", x: "65%", c: C.teal }] },
  ];

  const rows = strategicRows;

  return (
    <div ref={ref} style={{ perspective: "1200px", perspectiveOrigin: "50% 40%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          transform: inView
            ? (hovered ? "rotateX(0deg) rotateY(0deg) scale(1.01)" : "rotateX(2deg) rotateY(-1deg)")
            : "rotateX(12deg) rotateY(-4deg) translateY(40px) scale(0.95)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow under the card */}
        <div style={{ position: "absolute", bottom: -20, left: "10%", right: "10%", height: 40, background: "rgba(14,178,175,0.08)", filter: "blur(30px)", borderRadius: "50%", pointerEvents: "none" }} />

        {/* Dashboard card */}
        <div style={{ background: "linear-gradient(145deg," + C.navy + " 0%," + C.navyDark + " 100%)", borderRadius: 12, border: "1px solid rgba(14,178,175,0.12)", padding: 28, boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(14,178,175,0.05), inset 0 1px 0 rgba(255,255,255,0.03)" }}>

          {/* Window chrome */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid rgba(14,178,175,0.06)" }}>
            <div style={{ display: "flex", gap: 7 }}>
              {["#ff5f57", "#febc2e", "#28c840"].map(bg => <div key={bg} style={{ width: 10, height: 10, borderRadius: "50%", background: bg }} />)}
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {["Strategic View", "Timeline"].map((label, i) => (
                <span key={label} style={{
                  fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", padding: "4px 12px", borderRadius: 4, cursor: "pointer",
                  background: (view === "strategic" ? i === 0 : i === 1) ? "rgba(14,178,175,0.12)" : "transparent",
                  color: (view === "strategic" ? i === 0 : i === 1) ? C.teal : C.g500,
                  border: "1px solid " + ((view === "strategic" ? i === 0 : i === 1) ? "rgba(14,178,175,0.2)" : "transparent"),
                }}>{label}</span>
              ))}
            </div>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: C.g500 }}>app.targa.ai</span>
          </div>

          {/* KPI row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
            {kpis.map((k, i) => (
              <div key={k.t} style={{
                background: "rgba(15,32,53,0.6)", borderRadius: 8, padding: 20,
                border: "1px solid rgba(14,178,175,0.05)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.6s cubic-bezier(0.16,1,0.3,1) " + (0.3 + i * 0.1) + "s",
              }}>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", color: C.g500, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{k.t}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.5rem", color: C.white, fontWeight: 500 }}>{k.v}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.73rem", color: k.c, marginTop: 6 }}>{k.d}</div>
              </div>
            ))}
          </div>

          {/* Rows with staggered animation */}
          {view === "strategic" ? rows.map((r, i) => (
            <div key={r.n} style={{
              display: "grid", gridTemplateColumns: "1.5fr 70px 85px 180px", gap: 12, alignItems: "center",
              padding: "12px 16px", borderBottom: "1px solid rgba(14,178,175,0.04)",
              opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-20px)",
              transition: "all 0.5s cubic-bezier(0.16,1,0.3,1) " + (0.5 + i * 0.08) + "s",
            }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: C.g200 }}>{r.n}</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.73rem", color: C.g500 }}>{r.o}</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: r.s === "At Risk" ? C.gold : C.teal, fontWeight: 500 }}>{r.s}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ flex: 1, height: 4, borderRadius: 2, background: "rgba(14,178,175,0.08)", overflow: "hidden" }}>
                  <div style={{
                    width: inView ? r.p + "%" : "0%", height: "100%", borderRadius: 2,
                    background: r.s === "At Risk" ? C.gold : C.teal,
                    transition: "width 1.2s cubic-bezier(0.16,1,0.3,1) " + (0.7 + i * 0.1) + "s",
                  }} />
                </div>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: C.g500, minWidth: 28 }}>{r.p}%</span>
              </div>
            </div>
          )) : (
            /* Timeline view */
            <div style={{ padding: "8px 0" }}>
              {timelineRows.map((q, qi) => (
                <div key={q.n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 16px", borderBottom: "1px solid rgba(14,178,175,0.04)", opacity: inView ? 1 : 0, transition: "opacity 0.5s " + (0.5 + qi * 0.1) + "s" }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: C.g500, minWidth: 24 }}>{q.n}</span>
                  <div style={{ flex: 1, position: "relative", height: 32 }}>
                    {q.items.map((item, ii) => (
                      <div key={ii} style={{
                        position: "absolute", left: item.x, width: inView ? item.w : "0%", height: 8, borderRadius: 4,
                        background: item.c, opacity: 0.7, top: ii * 12,
                        transition: "width 1s cubic-bezier(0.16,1,0.3,1) " + (0.6 + qi * 0.1 + ii * 0.05) + "s",
                      }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CALLOUT ANNOTATIONS */}
        <Callout inView={inView} delay={0.8} top={80} right={-140} label="Cross-functional KPIs" arrow="left" />
        <Callout inView={inView} delay={1.0} bottom={100} left={-120} label="Risk flagged by AI" arrow="right" color={C.gold} />
        <Callout inView={inView} delay={1.2} top={200} right={-100} label="Progress bars animate in real-time" arrow="left" />
      </div>
    </div>
  );
}

/* ═══ CALLOUT ICON: Inner capstone nudges, outer shell follows ═══ */
function CalloutIcon({ size = 22, color = C.teal, direction = "left" }) {
  const shell = C.white;
  const nudgeClass = direction === "left" ? "nudge-left" : "nudge-right";
  const followClass = direction === "left" ? "follow-left" : "follow-right";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ flexShrink: 0, overflow: "visible" }}>
      <g className={followClass}>
        <polygon fill={shell} points="44,42 4,42 24,4" opacity="0.6" />
      </g>
      <g className={nudgeClass}>
        <polygon fill={color} points="32,34 16,34 24,18" opacity="0.95" />
      </g>
    </svg>
  );
}

/* ═══ CALLOUT ANNOTATION ═══ */
function Callout({ inView, delay = 0, top, bottom, left, right, label, arrow = "left", color = C.teal }) {
  const pos = {};
  if (top !== undefined) pos.top = top;
  if (bottom !== undefined) pos.bottom = bottom;
  if (left !== undefined) pos.left = left;
  if (right !== undefined) pos.right = right;

  const fromX = arrow === "left" ? 30 : -30;

  return (
    <div style={{
      position: "absolute", ...pos,
      display: "flex", alignItems: "center", gap: 6,
      flexDirection: arrow === "right" ? "row-reverse" : "row",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0) scale(1)" : "translateX(" + fromX + "px) scale(0.9)",
      transition: "all 0.6s cubic-bezier(0.16,1,0.3,1) " + delay + "s",
      pointerEvents: "none", zIndex: 10,
    }}>
      {/* Thin connector line */}
      <div style={{ width: 16, height: 1, background: color, opacity: 0.35 }} />
      {/* TARGA icon mark with nudge animation */}
      <CalloutIcon size={20} color={color} direction={arrow} />
      {/* Label */}
      <div style={{
        background: "rgba(15,32,53,0.92)", border: "1px solid " + color + "22",
        borderRadius: 6, padding: "6px 12px", backdropFilter: "blur(8px)",
        whiteSpace: "nowrap",
      }}>
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", color, fontWeight: 500 }}>{label}</span>
      </div>
    </div>
  );
}

/* ═══ NAV ═══ */
function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 60); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  const Link = ({ children, to }) => {
    const [h, setH] = useState(false);
    const active = page === to;
    const color = scrolled ? (h || active ? C.navy : C.g500) : (h || active ? C.white : "rgba(255,255,255,0.55)");
    return <span onClick={() => { setPage(to); window.scrollTo(0, 0); }} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.76rem", fontWeight: active ? 600 : 500, letterSpacing: "0.06em", color, textTransform: "uppercase", cursor: "pointer", transition: "color 0.3s", borderBottom: active ? "2px solid " + C.teal : "2px solid transparent", paddingBottom: 2 }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</span>;
  };
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: scrolled ? "8px 0" : "16px 0", background: scrolled ? "rgba(255,255,255,0.97)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid " + C.g200 : "1px solid transparent", transition: "all 0.4s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div onClick={() => { setPage("home"); window.scrollTo(0, 0); }}><Logo variant={scrolled ? "dark" : "light"} /></div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <Link to="platform">Platform</Link>
          <Link to="about">About</Link>
          <Link to="ceo100">100 CEOs</Link>
          <Link to="contact">Contact</Link>
          <Btn variant={scrolled ? "outline" : "primary"} style={{ padding: "9px 20px", fontSize: "0.76rem" }} onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Request a Demo</Btn>
        </div>
      </div>
    </nav>
  );
}

/* ═══ FOOTER ═══ */
function Footer({ setPage }) {
  const FL = ({ children, to }) => { const [h, setH] = useState(false); return <span onClick={() => { setPage(to); window.scrollTo(0, 0); }} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: h ? C.teal : C.g500, cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</span>; };
  return (
    <footer style={{ background: C.navyDeep, borderTop: "1px solid rgba(14,178,175,0.06)", padding: "60px 40px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div><Logo variant="light" /><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: C.g500, lineHeight: 1.7, marginTop: 16, maxWidth: 280 }}>Speed and clarity for enterprise value creation. The Leader Experience™.</p></div>
          <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "1.5px", color: C.g500, textTransform: "uppercase", marginBottom: 16 }}>Platform</div><div style={{ display: "flex", flexDirection: "column", gap: 10 }}><FL to="platform">Overview</FL><FL to="platform">Features</FL><FL to="platform">Security</FL></div></div>
          <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "1.5px", color: C.g500, textTransform: "uppercase", marginBottom: 16 }}>Company</div><div style={{ display: "flex", flexDirection: "column", gap: 10 }}><FL to="about">About</FL><FL to="about">Leadership</FL><FL to="ceo100">100 CEOs</FL><FL to="contact">Contact</FL></div></div>
          <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "1.5px", color: C.g500, textTransform: "uppercase", marginBottom: 16 }}>Connect</div><div style={{ display: "flex", flexDirection: "column", gap: 10 }}><FL to="contact">LinkedIn</FL><FL to="contact">Schedule a Call</FL></div></div>
        </div>
        <div style={{ borderTop: "1px solid rgba(14,178,175,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.72rem", color: C.g500 }}>© 2026 Targatek Inc. All rights reserved.</span>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {["Enterprise-grade security", "AWS infrastructure", "SOC 2 in progress"].map((s, i) => (
              <span key={s} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: C.g500, opacity: 0.6, display: "flex", alignItems: "center", gap: 4 }}>
                {i > 0 && <span style={{ color: "rgba(14,178,175,0.2)" }}>·</span>}
                {s}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 20 }}><FL to="home">Privacy</FL><FL to="home">Terms</FL></div>
        </div>
      </div>
    </footer>
  );
}

/* ═══ PAGE: HOME ═══ */
function HomePage({ setPage }) {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 150); }, []);
  const fade = (d) => ({ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.5s cubic-bezier(0.16,1,0.3,1) " + d + "s" });
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: "linear-gradient(165deg," + C.navyDeep + " 0%," + C.navy + " 40%," + C.navyDark + " 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-2%", top: "50%", transform: "translateY(-50%)", opacity: 0.05, pointerEvents: "none" }}><IconMark height={480} variant="light" /></div>
        <div style={{ position: "absolute", top: "15%", right: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(14,178,175,0.06) 0%,transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "160px 40px 100px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24, ...fade(0.2) }}><div style={{ width: 36, height: 1, background: C.teal }} /><span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "2px", color: C.teal, textTransform: "uppercase" }}>The Leader Experience™</span></div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2.4rem,5vw,3.5rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-1px", color: C.white, maxWidth: 720, marginBottom: 24, ...fade(0.35) }}>Speed and Clarity<br />for Enterprise<br />Value Creation</h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: C.g300, maxWidth: 520, marginBottom: 40, ...fade(0.5) }}>TARGA AI gives executives cross-functional visibility — turning strategic goals into measurable outcomes with AI-driven insight into what drives enterprise value.</p>
          <div style={{ display: "flex", gap: 14, ...fade(0.65) }}>
            <Btn onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Request a Demo</Btn>
            <Btn variant="secondary" onClick={() => { setPage("platform"); window.scrollTo(0, 0); }}>Learn More</Btn>
          </div>
        </div>
      </section>

      {/* HERITAGE PROOF + 100 CEO PROGRESS */}
      <section style={{ background: C.navyDark, padding: "48px 40px 44px", borderTop: "1px solid rgba(14,178,175,0.06)", borderBottom: "1px solid rgba(14,178,175,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            {/* Heritage logos */}
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "1.8px", color: C.g500, textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0 }}>Forged in the C-Suite</span>
              <div style={{ width: 1, height: 16, background: "rgba(14,178,175,0.12)", flexShrink: 0 }} />
              <div style={{ display: "flex", gap: 0, alignItems: "center", flex: 1, justifyContent: "space-between" }}>
                {[
                  { src: "/logos/jnj.svg", alt: "Johnson & Johnson", h: 14 },
                  { src: "/logos/dupont.svg", alt: "DuPont", h: 18 },
                  { src: "/logos/merck.svg", alt: "Merck", h: 14 },
                  { src: null, alt: "AT&T", text: "AT&T" },
                  { src: null, alt: "IBM", text: "IBM" },
                  { src: "/logos/hermanmiller.svg", alt: "Herman Miller", h: 16 },
                  { src: "/logos/cigna.svg", alt: "Cigna", h: 16 },
                  { src: "/logos/lilly.svg", alt: "Eli Lilly", h: 18 },
                ].map(({ src, alt, h, text }) => (
                  src ? (
                    <img key={alt} src={src} alt={alt} style={{ height: h, width: "auto", opacity: 0.22 }} />
                  ) : (
                    <span key={alt} style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.16em", color: C.white, opacity: 0.22, textTransform: "uppercase" }}>{text}</span>
                  )
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {/* Sub-line: context + progress */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: C.g500, lineHeight: 1.5 }}>
                The insights behind TARGA come from decades of transformation work with Fortune 50 leadership teams.
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, marginLeft: 32 }}>
                <div style={{ width: 48, height: 4, borderRadius: 2, background: "rgba(14,178,175,0.12)", overflow: "hidden" }}>
                  <div style={{ width: "25%", height: "100%", borderRadius: 2, background: C.teal }} />
                </div>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", color: C.teal, whiteSpace: "nowrap" }}>25 of 100 CEO conversations</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section style={{ background: "linear-gradient(180deg," + C.navyDark + " 0%," + C.navy + " 100%)", padding: "0 40px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: -40, position: "relative", zIndex: 3 }}>
          {[
            { t: "Clarity", d: "Real-time executive dashboards that surface what matters — goals, gaps, and the teams driving them.", a: C.teal },
            { t: "Speed", d: "Accelerate value creation across every quarter — not just the two weeks before a board meeting.", a: C.teal },
            { t: "Value", d: "Enterprise value creation management — not task tracking. Outcomes measured in dollars, not checkboxes.", a: C.gold },
          ].map(({ t, d, a }, i) => (
            <Reveal key={t} delay={i * 0.1}><HoverCard title={t} desc={d} accent={a} /></Reveal>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section style={{ background: C.navy, padding: "100px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <Reveal><div><Eyebrow color={C.gold}>Why TARGA</Eyebrow><SectionTitle sub="Every task platform starts with a checklist. TARGA starts with your strategic objectives and works down — because that is how leaders actually think.">Not another project management tool.</SectionTitle></div></Reveal>
          <Reveal delay={0.15}>
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: C.g300, marginBottom: 20 }}>Your executive team costs millions. Strategic initiatives stall when visibility is limited to quarterly meetings. TARGA gives you continuous, cross-functional clarity — so your highest-paid talent creates value every week.</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", lineHeight: 1.7, color: C.gold, marginBottom: 28, padding: "14px 18px", background: "rgba(251,191,36,0.04)", borderLeft: "2px solid rgba(251,191,36,0.3)", borderRadius: "0 6px 6px 0" }}>Every quarter without cross-functional visibility costs your executive team six weeks of strategic output. That is time your competitors are using.</p>
              <div style={{ display: "flex", gap: 32 }}>
                {[{ v: "4x", l: "Faster Value Creation" }, { v: "$350K+", l: "Avg. Enterprise Value" }].map(x => (
                  <div key={x.l}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.8rem", fontWeight: 500, color: C.gold }}>{x.v}</div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", letterSpacing: "0.08em", color: C.g500, textTransform: "uppercase", marginTop: 4 }}>{x.l}</div></div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3D DASHBOARD */}
      <section style={{ background: C.navyDeep, padding: "100px 40px", overflow: "visible" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto" }}>
          <Reveal><div style={{ textAlign: "center", marginBottom: 48 }}><Eyebrow color={C.teal}>The Platform</Eyebrow><SectionTitle align="center">Built for How Leaders Think</SectionTitle></div></Reveal>
          <PerspectiveDashboard />
          <Reveal delay={0.3}><div style={{ textAlign: "center", marginTop: 48 }}><Btn onClick={() => { setPage("platform"); window.scrollTo(0, 0); }}>Explore the Platform →</Btn></div></Reveal>
        </div>
      </section>

      {/* 100 CEOS TEASER */}
      <section style={{ background: C.navy, padding: "100px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <IconMark height={48} variant="light" />
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1.5rem,2.5vw,2.1rem)", fontWeight: 300, color: C.white, letterSpacing: "-0.5px", marginTop: 24, marginBottom: 12 }}>100 CEO Conversations</h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "2px", color: C.teal, textTransform: "uppercase", marginBottom: 20 }}>Building the Future of the Leader Experience</p>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: C.g300, maxWidth: 520, margin: "0 auto 32px" }}>We are talking to 100 enterprise CEOs to ensure every capability is grounded in real executive needs. Your perspective shapes what we build.</p>
            <Btn onClick={() => { setPage("ceo100"); window.scrollTo(0, 0); }}>Learn More →</Btn>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ background: C.navyDeep, padding: "100px 40px", textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1.5rem,2.5vw,2.1rem)", fontWeight: 300, color: C.white, marginBottom: 16 }}>Ready to lead differently?</h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", color: C.g300, marginBottom: 32 }}>Schedule a conversation with the TARGA AI team.</p>
          <Btn onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Schedule a Conversation</Btn>
          {/* Trust signals */}
          <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(14,178,175,0.06)" }}>
            {[
              { icon: "⊡", label: "Siloed enterprise infrastructure" },
              { icon: "◈", label: "Role-based access controls" },
              { icon: "△", label: "No third-party model training" },
            ].map(({ icon, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: "0.85rem", color: C.teal, opacity: 0.6 }}>{icon}</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.72rem", color: C.g500 }}>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

/* ═══ PAGE: PLATFORM ═══ */
function PlatformPage({ setPage }) {
  const [activeView, setActiveView] = useState("strategic");
  return (
    <>
      <section style={{ background: "linear-gradient(165deg," + C.navyDeep + " 0%," + C.navy + " 100%)", padding: "160px 40px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}><Eyebrow>The Platform</Eyebrow><h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-1px", color: C.white, maxWidth: 600, marginBottom: 20 }}>Your executive team deserves better than spreadsheets and slide decks.</h1><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: C.g300, maxWidth: 520 }}>TARGA AI is a leadership platform that gives C-suite teams continuous visibility into what is creating enterprise value — and what is not.</p></div>
      </section>

      <section style={{ background: C.navy, padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {[
            { t: "Strategic Visibility", d: "See all value-creating initiatives across functions in one view.", i: "◎" },
            { t: "AI-Native Architecture", d: "Agentic AI that understands business context and responds to natural language.", i: "⟐" },
            { t: "Multi-View Intelligence", d: "Flip between Kanban, timeline, and functional views of the same data.", i: "⬡" },
            { t: "Cross-Functional Clarity", d: "Every executive sees how their function connects to the whole.", i: "◈" },
            { t: "Value-Based Metrics", d: "Progress measured in enterprise value — not tasks completed.", i: "△" },
            { t: "Enterprise Security", d: "Siloed infrastructure, role-based access, no third-party model training.", i: "⊡" },
          ].map(({ t, d, i }, idx) => (
            <Reveal key={t} delay={idx * 0.06}><div style={{ padding: "32px 28px", background: "rgba(14,178,175,0.03)", border: "1px solid rgba(14,178,175,0.08)", borderRadius: 10 }}>
              <div style={{ fontSize: "1.4rem", color: C.teal, marginBottom: 16, opacity: 0.7 }}>{i}</div>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.05rem", fontWeight: 500, color: C.white, marginBottom: 10 }}>{t}</h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", lineHeight: 1.7, color: C.g300 }}>{d}</p>
            </div></Reveal>
          ))}
        </div>
      </section>

      <section style={{ background: C.navyDeep, padding: "80px 40px", overflow: "visible" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto" }}>
          <Reveal><div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow color={C.gold}>Preview</Eyebrow>
            <SectionTitle align="center">Strategic Command Center</SectionTitle>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 20 }}>
              {["strategic", "timeline"].map(v => (
                <button key={v} onClick={() => setActiveView(v)} style={{
                  fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", fontWeight: 500, padding: "8px 20px", borderRadius: 6, cursor: "pointer", transition: "all 0.3s", border: "none",
                  background: activeView === v ? "rgba(14,178,175,0.12)" : "transparent",
                  color: activeView === v ? C.teal : C.g500,
                  border: "1px solid " + (activeView === v ? "rgba(14,178,175,0.25)" : "rgba(100,116,139,0.2)"),
                }}>{v === "strategic" ? "Strategic View" : "Timeline View"}</button>
              ))}
            </div>
          </div></Reveal>
          <PerspectiveDashboard view={activeView} />
        </div>
      </section>

      <section style={{ background: C.navy, padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal><Eyebrow>How It Works</Eyebrow><SectionTitle>From strategy to execution in three steps.</SectionTitle></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, marginTop: 48 }}>
            {[
              { n: "01", t: "Define Strategic Objectives", d: "Set the enterprise-level goals that matter. TARGA structures them into a framework your whole team can see." },
              { n: "02", t: "Assign and Align", d: "Map initiatives to executives. Cross-functional dependencies surface automatically." },
              { n: "03", t: "Track Value Creation", d: "AI monitors progress, flags risks, and gives you clarity to intervene before quarterly surprises." },
            ].map(({ n, t, d }, i) => (
              <Reveal key={n} delay={i * 0.1}><div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "2.5rem", fontWeight: 300, color: "rgba(14,178,175,0.2)", marginBottom: 12 }}>{n}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1rem", fontWeight: 500, color: C.white, marginBottom: 8 }}>{t}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", lineHeight: 1.7, color: C.g300 }}>{d}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.navyDeep, padding: "80px 40px", textAlign: "center" }}>
        <Reveal><h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1.4rem,2vw,1.8rem)", fontWeight: 300, color: C.white, marginBottom: 20 }}>See it in action.</h2><Btn onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Request a Demo</Btn></Reveal>
      </section>
    </>
  );
}

/* ═══ PAGE: ABOUT ═══ */
function AboutPage({ setPage }) {
  return (
    <>
      <section style={{ background: "linear-gradient(165deg," + C.navyDeep + " 0%," + C.navy + " 100%)", padding: "160px 40px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}><Eyebrow color={C.gold}>About TARGA AI</Eyebrow><h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-1px", color: C.white, maxWidth: 650, marginBottom: 20 }}>Enterprise leaders deserve a platform built for how they actually work.</h1><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: C.g300, maxWidth: 560 }}>TARGA AI exists because the tools executives rely on were designed for project managers. We are building something different — a platform that starts with strategic value creation and gives leaders the speed and clarity to outpace the competition.</p></div>
      </section>
      <section style={{ background: C.navy, padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <Reveal><div><Eyebrow>Mission</Eyebrow><SectionTitle>Speed and clarity for enterprise value creation.</SectionTitle></div></Reveal>
          <Reveal delay={0.15}><div><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: C.g300, marginBottom: 20 }}>Every quarter, executive teams spend eight weeks preparing for a meeting and two weeks doing the work that actually creates value. TARGA flips that equation.</p><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: C.g300 }}>Our AI-native platform gives leaders continuous cross-functional visibility — so strategic initiatives move forward every week, not just in the sprint before a board review.</p></div></Reveal>
        </div>
      </section>

      {/* HERITAGE PROOF — expanded on About page */}
      <section style={{ background: C.navy, padding: "0 40px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ background: "rgba(14,178,175,0.02)", border: "1px solid rgba(14,178,175,0.06)", borderRadius: 12, padding: "40px 44px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 32, height: 1, background: C.g500 }} />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "1.8px", color: C.g500, textTransform: "uppercase" }}>Proven across the Fortune 500</span>
              </div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.92rem", lineHeight: 1.75, color: C.g300, maxWidth: 560, marginBottom: 32 }}>
                TARGA was built on decades of hands-on transformation work with the world's most demanding leadership teams. The methodology behind the platform was forged inside these organizations.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid rgba(14,178,175,0.06)" }}>
                {[
                  { src: "/logos/jnj.svg", alt: "Johnson & Johnson", h: 12 },
                  { src: "/logos/dupont.svg", alt: "DuPont", h: 16 },
                  { src: "/logos/merck.svg", alt: "Merck", h: 12 },
                  { src: null, alt: "AT&T", text: "AT&T" },
                  { src: null, alt: "IBM", text: "IBM" },
                  { src: "/logos/hermanmiller.svg", alt: "Herman Miller", h: 14 },
                  { src: "/logos/cigna.svg", alt: "Cigna", h: 14 },
                  { src: "/logos/lilly.svg", alt: "Eli Lilly", h: 16 },
                ].map(({ src, alt, h, text }) => (
                  src ? (
                    <img key={alt} src={src} alt={alt} style={{ height: h, width: "auto", opacity: 0.2 }} />
                  ) : (
                    <span key={alt} style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", color: C.white, opacity: 0.2, textTransform: "uppercase" }}>{text}</span>
                  )
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: C.navyDeep, padding: "80px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal><Eyebrow color={C.gold}>Leadership</Eyebrow><SectionTitle>[Workshop: headline TBD]</SectionTitle></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 40 }}>
            {[
              { name: "Joe Thompson", role: "CEO", desc: "[Workshop: bio TBD]" },
              { name: "Mark Sternberger", role: "CTO / CPO", desc: "[Workshop: bio TBD]" },
              { name: "Bill Adams", role: "Founder, Board", desc: "[Workshop: bio TBD]" },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}><div style={{ padding: 28, background: "rgba(14,178,175,0.04)", border: "1px solid rgba(14,178,175,0.1)", borderRadius: 10 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(14,178,175,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}><span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.1rem", color: C.teal, fontWeight: 500 }}>{p.name.split(" ").map(n => n[0]).join("")}</span></div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.05rem", fontWeight: 500, color: C.white, marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: C.teal, marginBottom: 12 }}>{p.role}</div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: C.g500, lineHeight: 1.6 }}>{p.desc}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: C.navy, padding: "60px 40px", textAlign: "center" }}><Reveal><h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.3rem", fontWeight: 300, color: C.white, marginBottom: 10 }}>A Targatek Inc. Company</h2><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: C.g500, maxWidth: 420, margin: "0 auto" }}>TARGA AI is the flagship product of Targatek Inc.</p></Reveal></section>
      <section style={{ background: C.navyDeep, padding: "80px 40px", textAlign: "center" }}><Reveal><div style={{ display: "flex", gap: 14, justifyContent: "center" }}><Btn onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Get in Touch</Btn><Btn variant="secondary" onClick={() => { setPage("ceo100"); window.scrollTo(0, 0); }}>Join 100 CEOs</Btn></div></Reveal></section>
    </>
  );
}

/* ═══ PAGE: 100 CEOS ═══ */
function CEO100Page({ setPage }) {
  return (
    <>
      <section style={{ background: "linear-gradient(165deg," + C.navyDeep + " 0%," + C.navy + " 100%)", padding: "160px 40px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <IconMark height={52} variant="light" />
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-1px", color: C.white, marginTop: 28, marginBottom: 20 }}>100 CEO Conversations</h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "2px", color: C.teal, textTransform: "uppercase", marginBottom: 24 }}>Building the Future of the Leader Experience</p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: C.g300, maxWidth: 560, margin: "0 auto" }}>We are having 100 conversations with enterprise CEOs about how they create value, where they lose visibility, and what tools they wish existed.</p>
        </div>
      </section>
      <section style={{ background: C.navy, padding: "80px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal><Eyebrow color={C.gold}>Why Participate</Eyebrow><SectionTitle>What you get from the conversation.</SectionTitle></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28, marginTop: 40 }}>
            {[
              { t: "Executive Peer Insight", d: "Aggregated findings from leaders across industries — patterns, blind spots, opportunities." },
              { t: "Early Platform Access", d: "Participants who commit to a pilot get priority access and favorable terms." },
              { t: "Shape the Product", d: "Your input directly influences features and AI capabilities. Co-creation, not a sales pitch." },
            ].map(({ t, d }, i) => (
              <Reveal key={t} delay={i * 0.1}><div style={{ padding: "28px 24px", background: "rgba(14,178,175,0.03)", border: "1px solid rgba(14,178,175,0.08)", borderRadius: 10 }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1rem", fontWeight: 500, color: C.white, marginBottom: 10 }}>{t}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", lineHeight: 1.7, color: C.g300 }}>{d}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: C.navyDeep, padding: "80px 40px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal><Eyebrow>The Conversation</Eyebrow><SectionTitle sub="A 30-minute conversation with our CEO, Joe Thompson. No pitch deck. No demo. Just a direct conversation about how you manage value creation.">What to expect.</SectionTitle></Reveal>
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 20 }}>
            {["How do you currently track strategic initiatives across functions?", "Where do alignment gaps show up — and when do you find out?", "What would continuous executive visibility look like for your organization?"].map((q, i) => (
              <Reveal key={i} delay={i * 0.1}><div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.2rem", color: C.teal, fontWeight: 500, minWidth: 28 }}>{"0" + (i + 1)}</div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: C.g300, lineHeight: 1.6 }}>{q}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: C.navy, padding: "80px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ display: "flex", gap: 48, justifyContent: "center", marginBottom: 40 }}>
            {[{ v: "100", l: "Target" }, { v: "25", l: "By June" }, { v: "50", l: "By August" }].map(x => (
              <div key={x.l}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "2.2rem", fontWeight: 500, color: C.gold }}>{x.v}</div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", letterSpacing: "0.08em", color: C.g500, textTransform: "uppercase", marginTop: 4 }}>{x.l}</div></div>
            ))}
          </div>
          <Btn onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Schedule Your Conversation</Btn>
        </Reveal>
      </section>
    </>
  );
}

/* ═══ PAGE: CONTACT ═══ */
function ContactPage() {
  return (
    <section style={{ background: "linear-gradient(165deg," + C.navyDeep + " 0%," + C.navy + " 100%)", padding: "160px 40px 100px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        <Reveal><div>
          <Eyebrow>Contact</Eyebrow>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-1px", color: C.white, marginBottom: 20 }}>Start the conversation.</h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: C.g300, marginBottom: 40 }}>Whether you want a demo, want to join the 100 CEO initiative, or just want to learn more — we would like to hear from you.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "1.5px", color: C.g500, textTransform: "uppercase", marginBottom: 6 }}>Email</div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", color: C.teal }}>info@targa.ai</div></div>
            <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "1.5px", color: C.g500, textTransform: "uppercase", marginBottom: 6 }}>LinkedIn</div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", color: C.teal }}>linkedin.com/company/targa-ai</div></div>
          </div>
        </div></Reveal>
        <Reveal delay={0.15}><div style={{ background: "rgba(14,178,175,0.04)", border: "1px solid rgba(14,178,175,0.1)", borderRadius: 12, padding: 32 }}>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.1rem", fontWeight: 500, color: C.white, marginBottom: 24 }}>Request a Demo</h3>
          {["Full Name", "Email", "Company", "Title"].map(label => (
            <div key={label} style={{ marginBottom: 16 }}><label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", fontWeight: 600, color: C.g500, letterSpacing: "0.05em", display: "block", marginBottom: 6 }}>{label}</label><input type="text" style={{ width: "100%", padding: "12px 14px", background: "rgba(15,32,53,0.6)", border: "1px solid rgba(14,178,175,0.1)", borderRadius: 6, color: C.white, fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", outline: "none" }} /></div>
          ))}
          <div style={{ marginBottom: 16 }}><label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", fontWeight: 600, color: C.g500, letterSpacing: "0.05em", display: "block", marginBottom: 6 }}>Interest</label><select style={{ width: "100%", padding: "12px 14px", background: "rgba(15,32,53,0.6)", border: "1px solid rgba(14,178,175,0.1)", borderRadius: 6, color: C.g300, fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", outline: "none" }}><option>Platform Demo</option><option>100 CEO Conversation</option><option>Partnership Inquiry</option><option>Other</option></select></div>
          <Btn style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>Submit</Btn>
        </div></Reveal>
      </div>
    </section>
  );
}

/* ═══ MAIN ═══ */
export default function TargaAI() {
  const [page, setPage] = useState("home");
  const pages = { home: HomePage, platform: PlatformPage, about: AboutPage, ceo100: CEO100Page, contact: ContactPage };
  const Page = pages[page] || HomePage;
  return (
    <div style={{ background: C.navyDeep, minHeight: "100vh" }}>
      <Nav page={page} setPage={setPage} />
      <Page setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}
