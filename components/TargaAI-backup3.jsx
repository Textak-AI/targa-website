"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const C = {
  navy: "#1f476a", navyDark: "#162d46", navyDeep: "#0f2035", navyMid: "#1a3a5c",
  teal: "#0eb2af", tealHover: "#0cc7c4", gold: "#fbbf24",
  white: "#fff", g500: "#9ba8b9", g300: "#dce4ec", g200: "#e2e8f0",
  /* warm alternate sections — same depth, different temperature */
  slate: "#181e2a", slateMid: "#1e2636", slateLight: "#232c3a",
};

/* ═══ RESPONSIVE HOOK ═══ */
function useMedia() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return { mobile: w < 768, tablet: w >= 768 && w < 1024, desktop: w >= 1024, w };
}

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

function Reveal({ children, delay = 0, y = 30, x = 0, style = {} }) {
  const [ref, inView] = useInView(0.1);
  const from = x !== 0 ? "translateX(" + x + "px)" : "translateY(" + y + "px)";
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translate(0,0)" : from, transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1) " + delay + "s, transform 0.6s cubic-bezier(0.16,1,0.3,1) " + delay + "s", ...style }}>
      {children}
    </div>
  );
}

function AnimatedStat({ value, suffix = "%", duration = 1600 }) {
  const [ref, inView] = useInView(0.3);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const numericPart = value.replace(/[^0-9.]/g, "");
    const num = parseFloat(numericPart);
    if (isNaN(num)) { setDisplay(value); return; }
    const prefix = value.replace(numericPart, "").replace(suffix, "");
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(num * eased);
      setDisplay(prefix + current + suffix);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value + suffix);
    };
    requestAnimationFrame(tick);
  }, [inView, value, suffix, duration]);
  return <span ref={ref}>{display}</span>;
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
    <svg height={height} viewBox="0 0 247 50.6" fill="none">
      <path fill={main} d="M173.93,27.5v.5c0,3.24-.4,5.99-1.25,8.65-.87,2.49-2.25,4.84-4,6.78-2.59,2.9-5.59,4.94-8.92,6.05l-.16.02s-.1.04-.16.06c-.13.06-.28.12-.44.13-.59.2-1.09.3-1.71.4-1.67.34-3.29.51-4.79.51-3.36,0-6.4-.6-9.29-1.84-2.52-1.11-4.99-2.83-7.16-5.01-4.61-4.71-6.85-10.19-6.85-16.75s2.34-12.34,6.95-16.95,10.35-7.02,16.96-6.95c4.91.06,7.06.69,9.12,1.76l.44.22-1.72,3.57-.44-.19c-2.23-.97-4.65-1.46-7.21-1.46-5.5,0-10.22,1.94-14.04,5.75-3.75,3.76-5.66,8.55-5.66,14.25s2.2,10.77,6.34,14.53c1.61,1.42,3.36,2.61,5.19,3.52,2.38,1.14,5.03,1.75,7.67,1.75h1.31c3.58-.3,6.72-1.61,9.37-3.88,3.19-2.8,4.93-6.03,5.33-9.87l.15-1.65h-6.65l1.88-3.9h9.74Z" />
      <polygon fill={main} points="221.6 49 217.09 49 200.1 13.45 182.82 49.2 178.21 49.2 200.11 3.95 221.6 49" />
      <polygon fill={C.teal} points="204.79 38.7 195.1 38.7 195.81 37.26 199.11 30.56 200.02 28.71 200.91 30.57 204.11 37.27 204.79 38.7" />
      <polygon fill={main} points="86.3 49 81.79 49 64.8 13.45 47.52 49.2 42.91 49.2 64.81 3.95 86.3 49" />
      <path fill={main} d="M107.17,29.15c-.08.01-.14.03-.16.04l.09-.19.07.15Z" />
      <path fill={main} d="M107.1,29l-.09.19s.08-.03.16-.04l-.07-.15Z" />
      <path fill={main} d="M110.81,29.09c2.83-.61,5.18-2.04,6.99-4.28,1.8-2.33,2.6-4.04,2.6-8.01s-1.36-7.19-4.18-9.58c-.65-.55-1.29-.97-2.07-1.36-1.53-.85-3.62-1.41-6.57-1.75-1.34-.21-2.77-.21-4.28-.21h-19.79l1.88,3.9h19.51c3.79,0,6.57.75,8.5,2.3.19.14.38.27.55.41,1.06.83,2.45,1.81,2.45,6.29,0,5-2.72,8.15-7.92,9.12-1.08.27-2.27.38-3.98.38h-2.29l5.05,10.53,6.54,12.87h4.42l-10.29-20.19c.71-.12,1.83-.28,2.88-.42ZM107.01,29.19l.09-.19.07.15c-.08.01-.14.03-.16.04Z" />
      <polygon fill={main} points="46.9 4 45.01 7.9 23.2 7.9 23.2 49.7 18.8 49.7 18.8 7.9 0 7.9 1.89 4 46.9 4" />
      <path fill={C.teal} d="M233,0l-7.7,16.6h2.5l1.7-3.8,1-2.2,2.4-5.3,2.3,5.3,1,2.2,1.6,3.8h2.6l-7.5-16.6h.1Z" />
      <rect fill={C.teal} x="244.6" y="1" width="2.4" height="15.6" />
      <polygon fill={C.teal} points="69.39 38.7 59.82 38.7 60.5 37.27 63.7 30.57 64.6 28.68 65.51 30.57 68.71 37.27 69.39 38.7" />
    </svg>
  );
}

function Logo({ variant = "light", size = "sm" }) {
  const main = variant === "light" ? C.white : C.navy;
  const h = size === "sm" ? 20 : 26;
  return (
    <div style={{ cursor: "pointer" }}>
      <svg height={h} viewBox="0 0 295.76 59.34" fill="none">
        <polygon fill={C.teal} points="84.33 45.26 72.97 45.31 78.69 33.46 84.33 45.26"/>
        <path fill={main} d="M197.54,29.8l-3.75,7.76h8.29c-.38,3.85-2.19,7.16-5.42,9.93-.03.02-.05.04-.08.06-2.86,2.39-6.03,3.73-9.53,4-.44.04-.89.05-1.35.05-2.74,0-5.37-.6-7.89-1.81-1.87-.9-3.67-2.12-5.41-3.68-4.38-3.95-6.56-8.97-6.56-15.07s1.96-10.83,5.89-14.75c3.92-3.99,8.78-5.99,14.57-5.99,3.39,0,6.51.83,9.36,2.48l3.45-7.15c-.32-.18-.64-.34-.97-.5-3.71-1.75-7.71-2.62-11.98-2.62-7.97,0-14.73,2.78-20.28,8.33-5.56,5.53-8.33,12.27-8.33,20.21s2.73,14.44,8.19,20c2.61,2.64,5.46,4.65,8.57,6.03,3.4,1.51,7.11,2.27,11.11,2.27,2.01,0,3.93-.19,5.76-.56.7-.14,1.39-.32,2.07-.52.29-.09.59-.18.88-.28,4.07-1.37,7.63-3.78,10.69-7.22,2.25-2.55,3.84-5.3,4.79-8.23.97-3.17,1.45-6.81,1.45-10.92v-1.81h-13.51Z"/>
        <polygon fill={main} points="272.16 58.05 262.11 58.1 244.42 21.08 226.49 58.25 216.31 58.3 244.42 0 272.16 58.05"/>
        <polygon fill={C.teal} points="249.89 45.17 238.7 45.21 244.33 33.54 249.89 45.17"/>
        <polygon fill={main} points="106.52 58.06 96.46 58.1 78.77 21.08 60.85 58.25 50.66 58.3 73.31 11.33 77.05 3.56 78.77 0 106.52 58.06"/>
        <path fill={main} d="M133.22,34.99l11.88,23.31h-10.11l-7.89-15.39-6.8-14.21h5.25c1.57,0,2.98-.11,4.21-.37,5-.95,7.53-3.82,7.53-8.59,0-2.72-.9-4.8-2.72-6.21-1.85-1.46-4.69-2.19-8.48-2.22h-22.94l-3.71-7.75h24.91c1.8,0,3.45.08,5,.25,3.2.34,5.87,1.04,8,2.08,1.01.51,1.91,1.1,2.67,1.74,3.54,3.03,5.31,7.02,5.31,11.99,0,3.88-1.09,7.22-3.31,10-2.22,2.78-5.17,4.58-8.79,5.36Z"/>
        <polygon fill={main} points="58.08 3.55 54.34 11.32 30.42 11.32 30.42 58.3 22.15 58.3 22.15 11.32 0 11.32 3.74 3.55 9.74 3.55 9.74 3.55 58.08 3.55"/>
        <path fill={C.teal} d="M286.18,15.18h-7.51l-1.95,4.26h-2.85l8.68-18.65,8.38,18.65h-2.9l-1.84-4.26ZM285.1,12.69l-2.6-5.97-2.73,5.97h5.33Z"/>
        <rect fill={C.teal} x="293.11" y="1.9" width="2.65" height="17.55"/>
      </svg>
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
  return (<div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ height: "100%", background: "linear-gradient(145deg,rgba(31,71,106,0.6) 0%,rgba(15,32,53,0.85) 100%)", borderRadius: 10, padding: "36px 32px", borderTop: "3px solid " + accent, borderLeft: "1px solid rgba(14,178,175,0.08)", borderRight: "1px solid rgba(14,178,175,0.08)", borderBottom: "1px solid rgba(14,178,175,0.08)", transition: "all 0.35s", transform: h ? "translateY(-4px)" : "none", boxShadow: h ? "0 16px 48px rgba(0,0,0,0.3)" : "0 4px 16px rgba(0,0,0,0.15)" }}><h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.15rem", fontWeight: 500, color: C.white, marginBottom: 12 }}>{title}</h3><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: 1.7, color: C.g300 }}>{desc}</p></div>);
}


/* ═══ 30/20 FRAMEWORK CHART ═══ */
function FrameworkChart() {
  const [ref, inView] = useInView(0.25);
  const bars = [
    { label: "Gross Margin Available", pct: 30, color: C.g500, display: "~30%" },
    { label: "Value Creation Zone", pct: 20, color: C.teal, display: "~20%" },
    { label: "Typical Allocation", pct: 6, color: C.gold, display: "~6%" },
  ];
  return (
    <div ref={ref} style={{
      background: "rgba(14,178,175,0.03)",
      border: "1px solid rgba(14,178,175,0.1)",
      borderRadius: 12, padding: "32px 28px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
        <div style={{ width: 20, height: 1, background: C.teal }} />
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "1.5px", color: C.teal, textTransform: "uppercase" }}>The 30/20 Framework</span>
      </div>
      {bars.map((bar, i) => (
        <div key={bar.label} style={{ marginBottom: i < bars.length - 1 ? 24 : 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.76rem", color: C.g300, letterSpacing: "0.02em" }}>{bar.label}</span>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.88rem", color: bar.color, fontWeight: 500 }}>{bar.display}</span>
          </div>
          <div style={{ height: 8, background: "rgba(255,255,255,0.04)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: inView ? (bar.pct / 35 * 100) + "%" : "0%",
              background: bar.color,
              borderRadius: 4,
              transition: "width 1.2s cubic-bezier(0.16,1,0.3,1) " + (0.2 + i * 0.15) + "s",
            }} />
          </div>
        </div>
      ))}
      {/* Gap callout */}
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(14,178,175,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", color: C.g500, fontStyle: "italic" }}>Source: McKinsey, Bain, OpenView</span>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: 2, border: "1px dashed " + C.gold, opacity: 0.5 }} />
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: C.gold, opacity: 0.8 }}>The gap TARGA closes</span>
        </div>
      </div>
    </div>
  );
}

/* ═══ CALLOUT DATA — three tiers, each with problem→feature→outcome ═══ */
const CALLOUTS = [
  /* Tier 1: METRIC (teal) — addresses the 85% barrier problem */
  { cid: "kpi0", tier: 1, color: C.teal,
    problem: "85% cite internal barriers to growth — McKinsey",
    feature: "Real-time pipeline visibility",
    outcome: "$4.2M across 12 initiatives. No quarterly surprises.",
    spark: [14,11,12,8,6,4,2], meta: "+18% QoQ" },
  { cid: "kpi2", tier: 1, color: C.teal,
    problem: "85% cite internal barriers to growth — McKinsey",
    feature: "Continuous alignment scoring",
    outcome: "Exec alignment measured weekly — not just at board meetings.",
    spark: [12,10,9,7,5,4,3], meta: "+12 pts this quarter" },
  { cid: "row0", tier: 1, color: C.teal,
    problem: "85% cite internal barriers to growth — McKinsey",
    feature: "Cross-functional initiative mapping",
    outcome: "See how every initiative connects across functions in real time.",
    spark: [10,9,8,6,5,3,2], meta: "4 linked initiatives" },

  /* Tier 2: AI INSIGHT (gold) — addresses the 90% inertia problem */
  { cid: "kpi1", tier: 2, color: C.gold,
    problem: "90% repeat last year's budget — Deloitte",
    feature: "AI-flagged risk detection",
    outcome: "3 initiatives share constrained engineering capacity. Budget is not the blocker — resource allocation is.",
    linked: "APAC Expansion, Product Line" },
  { cid: "row1", tier: 2, color: C.gold,
    problem: "90% repeat last year's budget — Deloitte",
    feature: "Cross-functional resource conflict",
    outcome: "This initiative shares 3 resources with APAC Expansion. Engineering capacity is the constraint — not budget.",
    linked: "APAC Expansion" },

  /* Tier 3: ACTION (teal accent on premium dark) — addresses the 67% execution problem */
  { cid: "row2", tier: 3, color: C.teal,
    problem: "67% of strategies fail in execution — Bain",
    feature: "Suggested next action",
    outcome: "Schedule 15-min alignment check with CTO and CPO on shared engineering capacity before Q2 close.",
    action: "Send invite → CTO, CPO" },
  { cid: "row3", tier: 3, color: C.teal,
    problem: "67% of strategies fail in execution — Bain",
    feature: "Delegation prompt",
    outcome: "CHRO has bandwidth. Reassign the talent pipeline review from CRO to accelerate by 2 weeks.",
    action: "Reassign → CHRO" },
];

/* ═══ DRAWN CALLOUT — problem → feature → outcome with section headlines ═══ */
function DrawnCallout({ active, callout, side, top }) {
  if (!callout) return null;
  const { tier, color } = callout;
  const isRight = side === "right";
  const lineLen = 60;
  const boxW = 255;
  const borderAlpha = color === C.gold ? "rgba(251,191,36,0.25)" : "rgba(14,178,175,0.25)";
  const borderTopColor = color === C.gold ? C.gold : C.teal;
  const dividerAlpha = color === C.gold ? "rgba(251,191,36,0.1)" : "rgba(14,178,175,0.1)";
  const labelStyle = { fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 5 };

  return (
    <div style={{
      position: "absolute", top,
      [isRight ? "right" : "left"]: 0,
      width: lineLen + boxW + 4, zIndex: 20, pointerEvents: "none",
      display: "flex", flexDirection: isRight ? "row" : "row-reverse", alignItems: "center",
      transform: "translateY(-50%)" + (isRight ? " translateX(100%)" : " translateX(-100%)"),
    }}>
      {/* Connector */}
      <div style={{ display: "flex", alignItems: "center", flexShrink: 0, width: lineLen, flexDirection: isRight ? "row" : "row-reverse" }}>
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, opacity: active ? 1 : 0, transform: active ? "scale(1)" : "scale(0)", transition: active ? "all 0.2s cubic-bezier(0.16,1,0.3,1) 0s" : "all 0.15s ease 0.1s", flexShrink: 0 }} />
        <div style={{ height: 1, background: color, flex: 1, transformOrigin: isRight ? "left center" : "right center", transform: active ? "scaleX(1)" : "scaleX(0)", transition: active ? "transform 0.3s cubic-bezier(0.16,1,0.3,1) 0.05s" : "transform 0.15s ease 0.05s" }} />
      </div>

      {/* Box */}
      <div style={{
        width: boxW, flexShrink: 0,
        background: "rgba(10,24,42,0.95)", backdropFilter: "blur(16px)",
        borderRadius: 8, border: "1px solid " + borderAlpha, borderTop: "2px solid " + borderTopColor,
        padding: "16px 18px", boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0) scale(1)" : "translateY(4px) scale(0.97)",
        transformOrigin: isRight ? "left top" : "right top",
        clipPath: active ? "inset(0 0 0 0)" : (isRight ? "inset(0 100% 100% 0)" : "inset(0 0 100% 100%)"),
        transition: active
          ? "clip-path 0.35s cubic-bezier(0.16,1,0.3,1) 0.2s, opacity 0.25s ease 0.2s, transform 0.35s cubic-bezier(0.16,1,0.3,1) 0.2s"
          : "clip-path 0.2s ease 0s, opacity 0.15s ease 0s, transform 0.2s ease 0s",
      }}>

        {/* ── SECTION 1: The problem ── */}
        <div style={{
          marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid " + dividerAlpha,
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(6px)",
          transition: active ? "all 0.3s cubic-bezier(0.16,1,0.3,1) 0.35s" : "all 0.1s ease 0s",
        }}>
          <div style={{ ...labelStyle, color: C.g500 }}>The problem</div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", color, fontWeight: 600, lineHeight: 1.45 }}>{callout.problem}</div>
        </div>

        {/* ── SECTION 2: What TARGA does ── */}
        <div style={{
          marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid " + dividerAlpha,
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(6px)",
          transition: active ? "all 0.3s cubic-bezier(0.16,1,0.3,1) 0.45s" : "all 0.1s ease 0s",
        }}>
          <div style={{ ...labelStyle, color: C.g500 }}>What TARGA does</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width={14} height={14} viewBox="0 0 43.39 45.25" fill="none" style={{ flexShrink: 0 }}>
              <polygon fill="white" points="43.39 45.05 38.88 45.05 21.89 9.5 4.61 45.25 0 45.25 21.9 0 43.39 45.05" opacity="0.25" />
              <polygon fill={color} points="26.48 34.75 16.91 34.75 17.59 33.32 20.79 26.62 21.69 24.73 22.6 26.62 25.8 33.32 26.48 34.75" opacity="0.9" />
            </svg>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: C.white, fontWeight: 700 }}>{callout.feature}</div>
          </div>
        </div>

        {/* ── SECTION 3: The outcome ── */}
        <div style={{
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(4px)",
          transition: active ? "all 0.3s cubic-bezier(0.16,1,0.3,1) 0.55s" : "all 0.1s ease 0s",
        }}>
          <div style={{ ...labelStyle, color: C.g500 }}>How it solves it</div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.74rem", color: C.g300, lineHeight: 1.6 }}>{callout.outcome}</div>
        </div>

        {/* ── Tier badge ── */}
        <div style={{
          marginTop: 12, paddingTop: 10, borderTop: "1px solid " + dividerAlpha,
          display: "flex", alignItems: "center", gap: 6,
          opacity: active ? 1 : 0,
          transition: active ? "opacity 0.3s ease 0.65s" : "opacity 0.1s ease 0s",
        }}>
          {tier === 1 && callout.spark && (
            <>
              <svg width={40} height={14} viewBox="0 0 42 14" style={{ flexShrink: 0 }}>
                <polyline points={callout.spark.map((v, i) => (i * 7) + "," + v).join(" ")} fill="none" stroke={C.teal} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: C.g500 }}>{callout.meta}</span>
            </>
          )}
          {tier === 2 && (
            <>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", fontWeight: 700, color: C.gold, background: "rgba(251,191,36,0.12)", padding: "3px 8px", borderRadius: 3, letterSpacing: "0.06em" }}>TARGA INSIGHT</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: C.g500 }}>Linked: {callout.linked}</span>
            </>
          )}
          {tier === 3 && (
            <>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", fontWeight: 700, color: C.teal, background: "rgba(14,178,175,0.12)", padding: "3px 8px", borderRadius: 3, letterSpacing: "0.06em" }}>1 CLICK</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: C.g500 }}>{callout.action}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══ 3D PERSPECTIVE DASHBOARD ═══ */
function PerspectiveDashboard({ view = "strategic" }) {
  const [ref, inView] = useInView(0.1);
  const [activeCallout, setActiveCallout] = useState(null);
  const [activeSide, setActiveSide] = useState("right");
  const [calloutY, setCalloutY] = useState(0);
  const dashRef = useRef(null);
  const { mobile } = useMedia();

  const handleHover = useCallback((cid, e) => {
    setActiveCallout(cid);
    if (dashRef.current) {
      const dashRect = dashRef.current.getBoundingClientRect();
      const midX = dashRect.left + dashRect.width / 2;
      setActiveSide(e.clientX < midX ? "left" : "right");
      // Use offsetTop chain for local coordinate positioning (immune to 3D transforms)
      let el = e.currentTarget;
      let top = el.offsetHeight / 2;
      while (el && el !== dashRef.current) {
        top += el.offsetTop;
        el = el.offsetParent;
      }
      setCalloutY(top);
    }
  }, []);

  const kpis = [
    { t: "Q2 Value Pipeline", v: "$4.2M", d: "+18% QoQ", c: C.teal, cid: "kpi0" },
    { t: "Strategic Initiatives", v: "12 Active", d: "3 At Risk", c: C.gold, cid: "kpi1" },
    { t: "Exec Alignment", v: "87%", d: "+12 pts", c: C.teal, cid: "kpi2" },
  ];

  const strategicRows = [
    { n: "APAC Market Expansion", o: "CRO", s: "On Track", p: 72, cid: "row0" },
    { n: "Product Line Extension", o: "CPO", s: "At Risk", p: 38, cid: "row1" },
    { n: "Digital Transformation", o: "CTO", s: "On Track", p: 85, cid: "row2" },
    { n: "Talent Development", o: "CHRO", s: "On Track", p: 60, cid: "row3" },
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
        onMouseLeave={() => setActiveCallout(null)}
        style={{
          position: "relative",
          transform: inView
            ? (mobile ? "none" : "rotateX(2deg) rotateY(-1deg)")
            : (mobile ? "translateY(20px) scale(0.98)" : "rotateX(12deg) rotateY(-4deg) translateY(40px) scale(0.95)"),
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
          transformStyle: "preserve-3d",
        }}
      >
        <div style={{ position: "absolute", bottom: -20, left: "10%", right: "10%", height: 40, background: "rgba(14,178,175,0.08)", filter: "blur(30px)", borderRadius: "50%", pointerEvents: "none" }} />

        <div ref={dashRef} style={{ background: "linear-gradient(145deg," + C.navy + " 0%," + C.navyDark + " 100%)", borderRadius: 12, border: "1px solid rgba(14,178,175,0.12)", padding: 28, boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(14,178,175,0.05), inset 0 1px 0 rgba(255,255,255,0.03)", position: "relative", overflow: "visible" }}>

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

          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
            {kpis.map((k, i) => (
              <div key={k.t}
                onMouseEnter={(e) => handleHover(k.cid, e)}
                onMouseLeave={() => setActiveCallout(null)}
                style={{
                  background: activeCallout === k.cid ? "rgba(14,178,175,0.06)" : "rgba(15,32,53,0.6)",
                  borderRadius: 8, padding: 20, cursor: "default",
                  border: activeCallout === k.cid ? "1px solid rgba(14,178,175,0.15)" : "1px solid rgba(14,178,175,0.05)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(16px)",
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1) " + (0.3 + i * 0.1) + "s",
                }}>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.74rem", color: C.g300, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, fontWeight: 600 }}>{k.t}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.5rem", color: C.white, fontWeight: 500 }}>{k.v}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.73rem", color: k.c, marginTop: 6 }}>{k.d}</div>
              </div>
            ))}          </div>

          {view === "strategic" ? rows.map((r, i) => (
            <div key={r.n}
              onMouseEnter={(e) => handleHover(r.cid, e)}
              onMouseLeave={() => setActiveCallout(null)}
              style={{
                display: "grid", gridTemplateColumns: mobile ? "1fr 85px 100px" : "1.5fr 70px 85px 180px", gap: mobile ? 8 : 12, alignItems: "center",
                padding: "12px 16px", cursor: "default",
                borderBottom: "1px solid rgba(14,178,175,0.04)",
                background: activeCallout === r.cid ? "rgba(14,178,175,0.03)" : "transparent",
                opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1) " + (0.5 + i * 0.08) + "s",
              }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", color: C.white, fontWeight: 400 }}>{r.n}</span>
              {!mobile && <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: C.g300, fontWeight: 600 }}>{r.o}</span>}
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: r.s === "At Risk" ? C.gold : C.teal, fontWeight: 700 }}>{r.s}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ flex: 1, height: 4, borderRadius: 2, background: "rgba(14,178,175,0.08)", overflow: "hidden" }}>
                  <div style={{
                    width: inView ? r.p + "%" : "0%", height: "100%", borderRadius: 2,
                    background: r.s === "At Risk" ? C.gold : C.teal,
                    transition: "width 1.2s cubic-bezier(0.16,1,0.3,1) " + (0.7 + i * 0.1) + "s",
                  }} />
                </div>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.76rem", color: C.g300, minWidth: 28 }}>{r.p}%</span>
              </div>
            </div>
          )) : (
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

          {/* ─── Drawn callout — inside dashRef for correct coordinate space ─── */}
          {!mobile && activeCallout && (() => {
            const co = CALLOUTS.find(c => c.cid === activeCallout);
            return co ? (
              <DrawnCallout
                key={co.cid}
                active={true}
                callout={co}
                side={activeSide}
                top={calloutY + "px"}
              />
            ) : null;
          })()}
        </div>

        </div>
    </div>
  );
}

/* ═══ NAV ═══ */
function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { mobile } = useMedia();
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 60); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  const Link = ({ children, to }) => {
    const [h, setH] = useState(false);
    const active = page === to;
    const color = (scrolled || menuOpen) ? (h || active ? C.navy : C.g500) : (h || active ? C.white : "rgba(255,255,255,0.55)");
    return <span onClick={() => { setPage(to); window.scrollTo(0, 0); setMenuOpen(false); }} style={{ fontFamily: "'Inter',sans-serif", fontSize: mobile ? "0.9rem" : "0.76rem", fontWeight: active ? 600 : 500, letterSpacing: "0.06em", color, textTransform: "uppercase", cursor: "pointer", transition: "color 0.3s", borderBottom: active ? "2px solid " + C.teal : "2px solid transparent", paddingBottom: 2 }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</span>;
  };
  const burgerColor = scrolled ? C.navy : C.white;
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: scrolled ? "8px 0" : "16px 0", background: scrolled ? "rgba(255,255,255,0.97)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid " + C.g200 : "1px solid transparent", transition: "all 0.4s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: mobile ? "0 20px" : "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div onClick={() => { setPage("home"); window.scrollTo(0, 0); setMenuOpen(false); }}><Logo variant={scrolled ? "dark" : "light"} size={mobile ? "sm" : "sm"} /></div>
        {mobile ? (
          <div onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: "pointer", padding: 8, zIndex: 110 }}>
            <div style={{ width: 22, height: 2, background: burgerColor, marginBottom: 5, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <div style={{ width: 22, height: 2, background: burgerColor, marginBottom: 5, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: 22, height: 2, background: burgerColor, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </div>
        ) : (
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <Link to="platform">Platform</Link>
            <Link to="about">About</Link>
            <Link to="ceo100">100 CEOs</Link>
            <Link to="contact">Contact</Link>
            <Btn variant={scrolled ? "outline" : "primary"} style={{ padding: "9px 20px", fontSize: "0.76rem" }} onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Request More Information</Btn>
          </div>
        )}
      </div>
      {/* Mobile menu dropdown */}
      {mobile && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid " + C.g200, padding: menuOpen ? "24px 20px" : "0 20px", maxHeight: menuOpen ? 400 : 0, overflow: "hidden", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)", display: "flex", flexDirection: "column", gap: 20 }}>
          <Link to="platform">Platform</Link>
          <Link to="about">About</Link>
          <Link to="ceo100">100 CEOs</Link>
          <Link to="contact">Contact</Link>
          <Btn variant="outline" style={{ padding: "12px 20px", fontSize: "0.82rem", width: "100%", justifyContent: "center" }} onClick={() => { setPage("contact"); window.scrollTo(0, 0); setMenuOpen(false); }}>Request More Information</Btn>
        </div>
      )}
    </nav>
  );
}

/* ═══ FOOTER ═══ */
function Footer({ setPage }) {
  const { mobile } = useMedia();
  const FL = ({ children, to }) => { const [h, setH] = useState(false); return <span onClick={() => { setPage(to); window.scrollTo(0, 0); }} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: h ? C.teal : C.g500, cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</span>; };
  return (
    <footer style={{ background: C.navyDeep, borderTop: "1px solid rgba(14,178,175,0.06)", padding: mobile ? "40px 20px 32px" : "60px 40px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1.5fr 1fr 1fr 1fr", gap: mobile ? 32 : 40, marginBottom: mobile ? 32 : 48 }}>
          <div><Logo variant="light" /><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: C.g500, lineHeight: 1.7, marginTop: 16, maxWidth: 280 }}>Speed and clarity for enterprise value creation. The Leader Experience™.</p></div>
          <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "1.5px", color: C.g500, textTransform: "uppercase", marginBottom: 16 }}>Platform</div><div style={{ display: "flex", flexDirection: "column", gap: 10 }}><FL to="platform">Overview</FL><FL to="platform">Features</FL><FL to="platform">Security</FL></div></div>
          <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "1.5px", color: C.g500, textTransform: "uppercase", marginBottom: 16 }}>Company</div><div style={{ display: "flex", flexDirection: "column", gap: 10 }}><FL to="about">About</FL><FL to="about">Leadership</FL><FL to="ceo100">100 CEOs</FL><FL to="contact">Contact</FL></div></div>
          <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "1.5px", color: C.g500, textTransform: "uppercase", marginBottom: 16 }}>Connect</div><div style={{ display: "flex", flexDirection: "column", gap: 10 }}><a href="https://www.linkedin.com/company/targatek" target="_blank" rel="noopener" style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: C.g500, textDecoration: "none", cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={e => e.target.style.color = C.teal} onMouseLeave={e => e.target.style.color = C.g500}>LinkedIn</a><FL to="contact">Schedule a Call</FL></div></div>
        </div>
        <div style={{ borderTop: "1px solid rgba(14,178,175,0.06)", paddingTop: 24, display: "flex", flexDirection: mobile ? "column" : "row", justifyContent: "space-between", alignItems: mobile ? "flex-start" : "center", gap: mobile ? 16 : 0 }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.72rem", color: C.g500 }}>© 2026 Targatek Inc. All rights reserved.</span>
          {!mobile && <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {["Enterprise-grade security", "AWS infrastructure", "SOC 2 in progress"].map((s, i) => (
              <span key={s} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: C.g500, opacity: 0.6, display: "flex", alignItems: "center", gap: 4 }}>
                {i > 0 && <span style={{ color: "rgba(14,178,175,0.2)" }}>·</span>}
                {s}
              </span>
            ))}
          </div>}
          <div style={{ display: "flex", gap: 20 }}><FL to="home">Privacy</FL><FL to="home">Terms</FL></div>
        </div>
      </div>
    </footer>
  );
}

/* ═══ PAGE: HOME ═══ */
function HomePage({ setPage }) {
  const [vis, setVis] = useState(false);
  const { mobile, tablet } = useMedia();
  useEffect(() => { setTimeout(() => setVis(true), 150); }, []);
  const fade = (d) => ({ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.5s cubic-bezier(0.16,1,0.3,1) " + d + "s" });
  const px = mobile ? "20px" : "40px";
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: mobile ? "auto" : "100vh", display: "flex", alignItems: "center", background: "linear-gradient(165deg," + C.navyDeep + " 0%," + C.navy + " 40%," + C.navyDark + " 100%)", overflow: "hidden" }}>
        {!mobile && <div style={{ position: "absolute", right: "-2%", top: "50%", transform: "translateY(-50%)", opacity: 0.05, pointerEvents: "none" }}><IconMark height={480} variant="light" /></div>}
        {!mobile && <div style={{ position: "absolute", top: "15%", right: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(14,178,175,0.06) 0%,transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: mobile ? "120px 20px 60px" : "160px 40px 100px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24, ...fade(0.2) }}><div style={{ width: 36, height: 1, background: C.teal }} /><span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "2px", color: C.teal, textTransform: "uppercase" }}>The Leader Experience™</span></div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2.4rem,5vw,3.5rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-1px", color: C.white, maxWidth: 720, marginBottom: 24, ...fade(0.35) }}>Speed and Clarity<br />for Enterprise<br />Value Creation</h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: C.g300, maxWidth: 520, marginBottom: 40, ...fade(0.5) }}>TARGA AI gives executives cross-functional visibility — turning strategic goals into measurable outcomes with AI-driven insight into what drives enterprise value.</p>
          <div style={{ display: "flex", gap: 14, ...fade(0.65) }}>
            <Btn onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Request More Information</Btn>
            <Btn variant="secondary" onClick={() => { setPage("platform"); window.scrollTo(0, 0); }}>Learn More</Btn>
          </div>
        </div>
      </section>

      {/* HERITAGE PROOF + 100 CEO PROGRESS */}
      <section style={{ background: C.navyDark, padding: mobile ? "32px 20px" : "48px 40px 44px", borderTop: "1px solid rgba(14,178,175,0.06)", borderBottom: "1px solid rgba(14,178,175,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            {/* Heritage logos */}
            <div style={{ display: "flex", flexDirection: mobile ? "column" : "row", alignItems: mobile ? "flex-start" : "center", gap: mobile ? 16 : 20, marginBottom: mobile ? 20 : 28 }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.76rem", fontWeight: 700, letterSpacing: "1.8px", color: C.g300, textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0 }}>Forged in the C-Suite</span>
              {!mobile && <div style={{ width: 1, height: 16, background: "rgba(14,178,175,0.12)", flexShrink: 0 }} />}
              <div style={{ display: mobile ? "grid" : "flex", gridTemplateColumns: mobile ? "repeat(4, auto)" : undefined, gap: mobile ? "14px 20px" : 0, alignItems: "center", justifyItems: mobile ? "center" : undefined, flex: mobile ? undefined : 1, justifyContent: mobile ? undefined : "space-between", flexWrap: mobile ? undefined : "nowrap" }}>
                {[
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4PSJuc19leHRlbmQ7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0MjkuMDIwOSA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8cGF0aCBkPSJNNDIuNDI0MiwzNi41Nzc1Yy00LjIwNjgsMC02LjU1OTctMy45OTI5LTYuNTU5Ny0xMS4xOTQzLDAtNy4zNDQsMi4zNTI5LTExLjE5NDMsNi41NTk3LTExLjE5NDNzNi41NTk3LDMuOTIxNiw2LjU1OTcsMTEuMTk0M2MwLDcuMzQ0LTIuMzUyOSwxMS4xOTQzLTYuNTU5NywxMS4xOTQzWk00Mi40MjQyLDExLjI2NTZjLTguNTU2MSwwLTEzLjMzMzMsNi40MTcxLTEzLjMzMzMsMTQuMTg4OXM0Ljc3NzIsMTQuMTg4OSwxMy4zMzMzLDE0LjE4ODksMTMuMzMzMy02LjQxNzEsMTMuMzMzMy0xNC4xODg5YzAtNy44NDMxLTQuNzc3Mi0xNC4xODg5LTEzLjMzMzMtMTQuMTg4OVpNMTAxLjk2MDgsMTEuMjY1NmMtNC4wNjQyLDAtNi4yNzQ1LDEuNzgyNS03LjU1NzksMy45OTI5aC0uMjg1MnYtMy40MjI1aC02LjQxNzF2MjcuMzA4NGg2LjQxNzF2LTE3LjY4MjdjMC00LjA2NDIsMi4wNjc3LTYuNDE3MSw1LjQxODktNi40MTcxLDMuMjA4NiwwLDQuNjM0NiwyLjEzOSw0LjYzNDYsNS4zNDc2djE4LjY4MDloNi40MTcxdi0xOC43NTIyYzAtNS42MzI4LTIuOTk0Ny05LjA1NTMtOC42Mjc1LTkuMDU1M1pNMTI1LjIwNSwxMS4yNjU2Yy01LjkxOCwwLTEwLjQxLDIuNDk1NS0xMC40MSw3Ljg0MzEsMCw0LjU2MzMsMy4xMzczLDYuOTg3NSw2LjYzMSw3Ljg0MzFsNS40MTg5LDEuMzU0N2MyLjkyMzQuNzEzLDQuMjA2OCwxLjc4MjUsNC4yMDY4LDQuMDY0MiwwLDIuNzgwNy0xLjk5NjQsNC4zNDk0LTUuNDE4OSw0LjM0OTQtMy43MDc3LDAtNS42MzI4LTEuNzgyNS02LjIwMzItNi4zNDU4bC01Ljc3NTQsMS42Mzk5Yy4zNTY1LDQuNzA1OSw0LjcwNTksNy41NTc5LDExLjI2NTYsNy41NTc5LDcuMzQ0LDAsMTEuMzM2OS0zLjQyMjUsMTEuMzM2OS04LjkxMjcsMC01LjEzMzctMy41NjUxLTcuMjcyNy03LjI3MjctOC4xOTk2bC01LjIwNS0xLjI4MzRjLTIuNjM4MS0uNjQxNy0zLjc3OS0xLjg1MzgtMy43NzktMy42MzY0LDAtMi4yMTAzLDEuODUzOC0zLjQ5MzgsNC42MzQ2LTMuNDkzOCwzLjI3OTksMCw1LjI3NjMsMS43ODI1LDUuNTYxNSw1LjIwNWw1LjQxODktMS42Mzk5Yy0uNjQxNy0zLjcwNzctNC40MjA3LTYuMzQ1OC0xMC40MS02LjM0NThaTTE1Mi4yMjgyLDM2LjU3NzVjLTQuMjA2OCwwLTYuNTU5Ny0zLjk5MjktNi41NTk3LTExLjE5NDMsMC03LjM0NCwyLjM1MjktMTEuMTk0Myw2LjU1OTctMTEuMTk0M3M2LjU1OTcsMy45MjE2LDYuNTU5NywxMS4xOTQzYzAsNy4zNDQtMi4zNTI5LDExLjE5NDMtNi41NTk3LDExLjE5NDNaTTE1Mi4yMjgyLDExLjI2NTZjLTguNTU2MSwwLTEzLjMzMzMsNi40MTcxLTEzLjMzMzMsMTQuMTg4OXM0Ljc3NzIsMTQuMTg4OSwxMy4zMzMzLDE0LjE4ODksMTMuMzMzMy02LjQxNzEsMTMuMzMzMy0xNC4xODg5YzAtNy44NDMxLTQuNzc3Mi0xNC4xODg5LTEzLjMzMzMtMTQuMTg4OVpNMTgzLjY3MiwxMS4yNjU2Yy00LjA2NDIsMC02LjI3NDUsMS43ODI1LTcuNTU3OSwzLjk5MjloLS4zNTY1di0zLjQyMjVoLTYuNDE3MXYyNy4zMDg0aDYuNDE3MXYtMTcuNjgyN2MwLTQuMDY0MiwyLjA2NzctNi40MTcxLDUuNDE4OS02LjQxNzEsMy4yMDg2LDAsNC42MzQ2LDIuMTM5LDQuNjM0Niw1LjM0NzZ2MTguNjgwOWg2LjQxNzF2LTE4Ljc1MjJjMC01LjYzMjgtMi45MjM0LTkuMDU1My04LjU1NjEtOS4wNTUzWk0yNzkuMjg3LDM2LjU3NzVjLTQuMjA2OCwwLTYuNTU5Ny0zLjk5MjktNi41NTk3LTExLjE5NDMsMC03LjM0NCwyLjM1MjktMTEuMTk0Myw2LjU1OTctMTEuMTk0M3M2LjU1OTcsMy45MjE2LDYuNTU5NywxMS4xOTQzYy0uMDcxMyw3LjM0NC0yLjM1MywxMS4xOTQzLTYuNTU5NywxMS4xOTQzWk0yNzkuMjg3LDExLjI2NTZjLTguNTU2MSwwLTEzLjMzMzMsNi40MTcxLTEzLjMzMzMsMTQuMTg4OXM0Ljc3NzIsMTQuMTg4OSwxMy4zMzMzLDE0LjE4ODksMTMuMzMzMy02LjQxNzEsMTMuMzMzMy0xNC4xODg5Yy0uMDcxMy03Ljg0MzEtNC43NzcyLTE0LjE4ODktMTMuMzMzMy0xNC4xODg5Wk0zMzguNzUyMiwxMS4yNjU2Yy00LjA2NDIsMC02LjI3NDUsMS43ODI1LTcuNTU3OSwzLjk5MjloLS4zNTY1di0zLjQyMjVoLTYuNDE3MXYyNy4zMDg0aDYuNDE3MXYtMTcuNjgyN2MwLTQuMDY0MiwyLjA2NzctNi40MTcxLDUuNDE4OS02LjQxNzEsMy4yMDg2LDAsNC42MzQ2LDIuMTM5LDQuNjM0Niw1LjM0NzZ2MTguNjgwOWg2LjQxNzF2LTE4Ljc1MjJjLjA3MTMtNS42MzI4LTIuODUyLTkuMDU1My04LjU1NjEtOS4wNTUzWk0zNjEuOTk2NSwxMS4yNjU2Yy01LjkxOCwwLTEwLjQxLDIuNDk1NS0xMC40MSw3Ljg0MzEsMCw0LjU2MzMsMy4xMzczLDYuOTg3NSw2LjYzMSw3Ljg0MzFsNS40MTg5LDEuMzU0N2MyLjkyMzMuNzEzLDQuMjA2OCwxLjc4MjUsNC4yMDY4LDQuMDY0MiwwLDIuNzgwNy0xLjk5NjQsNC4zNDk0LTUuNDE4OSw0LjM0OTQtMy43MDc3LDAtNS42MzI4LTEuNzgyNS02LjIwMzItNi4zNDU4bC01Ljc3NTQsMS42Mzk5Yy4zNTY1LDQuNzA1OSw0LjcwNTksNy41NTc5LDExLjI2NTYsNy41NTc5LDcuMzQ0LDAsMTEuMzM2OS0zLjQyMjUsMTEuMzM2OS04LjkxMjcsMC01LjEzMzctMy41NjUxLTcuMjcyNy03LjI3MjctOC4xOTk2bC01LjIwNS0xLjI4MzRjLTIuNjM4Mi0uNjQxNy0zLjc3OS0xLjg1MzgtMy43NzktMy42MzY0LDAtMi4yMTAzLDEuODUzOC0zLjQ5MzgsNC42MzQ2LTMuNDkzOCwzLjI3OTksMCw1LjI3NjMsMS43ODI1LDUuNTYxNSw1LjIwNWw1LjQxODktMS42Mzk5Yy0uNTcwNC0zLjcwNzctNC4zNDk0LTYuMzQ1OC0xMC40MS02LjM0NThaTTM4OS4wOTA5LDM2LjU3NzVjLTQuMjA2OCwwLTYuNTU5Ny0zLjk5MjktNi41NTk3LTExLjE5NDMsMC03LjM0NCwyLjM1MjktMTEuMTk0Myw2LjU1OTctMTEuMTk0M3M2LjU1OTcsMy45MjE2LDYuNTU5NywxMS4xOTQzYy0uMDcxMyw3LjM0NC0yLjQyNDMsMTEuMTk0My02LjU1OTcsMTEuMTk0M1pNMzg5LjA5MDksMTEuMjY1NmMtOC41NTYxLDAtMTMuMzMzMyw2LjQxNzEtMTMuMzMzMywxNC4xODg5czQuNzc3MiwxNC4xODg5LDEzLjMzMzMsMTQuMTg4OSwxMy4zMzMzLTYuNDE3MSwxMy4zMzMzLTE0LjE4ODljLS4wNzEzLTcuODQzMS00Ljc3NzItMTQuMTg4OS0xMy4zMzMzLTE0LjE4ODlaTTQyMC40NjM1LDExLjI2NTZjLTQuMDY0MiwwLTYuMjc0NSwxLjc4MjUtNy41NTc5LDMuOTkyOWgtLjM1NjV2LTMuNDIyNWgtNi40MTcxdjI3LjMwODRoNi40MTcxdi0xNy42ODI3YzAtNC4wNjQyLDIuMDY3OC02LjQxNzEsNS40MTg5LTYuNDE3MSwzLjIwODYsMCw0LjYzNDYsMi4xMzksNC42MzQ2LDUuMzQ3NnYxOC42ODA5aDYuNDE3MXYtMTguNzUyMmMuMDcxMy01LjYzMjgtMi44NTItOS4wNTUzLTguNTU2MS05LjA1NTNaTTI1LjMxMTkuODU1NmgtNi43NzM2djI4LjE2NGMwLDQuNTYzMy0xLjc4MjUsNy4yNzI3LTUuOTE4LDcuMjcyNy00LjA2NDIuMDcxMy01Ljg0NjctMi43ODA3LTUuODQ2Ny03Ljc3MTh2LTUuMjA1bC02Ljc3MzYsMS42Mzk5djIuMzUyOWMwLDcuMTMwMSwzLjU2NTEsMTIuNjIwMywxMi42MjAzLDEyLjYyMDMsOS4xMjY2LDAsMTIuNjIwMy01LjQxODksMTIuNjIwMy0xMi42MjAzVi44NTU2aC4wNzEzWk02Ni4wMjUuODU1NmgtNi40MTcxdjM4LjE0NjJoNi40MTcxdi0xNy41NDAxYzAtNC4wNjQyLDIuMDY3Ny02LjQxNzEsNS40MTg5LTYuNDE3MSwzLjIwODYsMCw0LjYzNDYsMi4xMzksNC42MzQ2LDUuMzQ3NnYxOC42ODA5aDYuNDE3MXYtMTguNzUyMmMwLTUuNjMyOC0yLjkyMzQtOS4xMjY2LTguNjI3NS05LjEyNjYtNC4wNjQyLDAtNi4yNzQ1LDEuNzgyNS03LjU1NzksMy45OTI5aC0uMzU2NVYuODU1NmguMDcxM1pNMjYyLjEwMzQuODU1NmgtNi43NzM2djI4LjE2NGMwLDQuNTYzMy0xLjc4MjUsNy4yNzI3LTUuOTE4LDcuMjcyNy00LjA2NDIsMC01LjkxOC0yLjkyMzQtNS45MTgtNy44NDMxdi01LjIwNWwtNi43NzM2LDEuNzExMnYyLjM1MjljMCw3LjEzMDEsMy41NjUxLDEyLjYyMDMsMTIuNjIwMywxMi42MjAzLDkuMTI2NiwwLDEyLjYyMDMtNS40MTg5LDEyLjYyMDMtMTIuNjIwM1YuODU1NmguMTQyNlpNMzAyLjgxNjQuODU1NmgtNi40MTcxdjM4LjE0NjJoNi40MTcxdi0xNy41NDAxYzAtNC4wNjQyLDIuMDY3Ny02LjQxNzEsNS40MTg5LTYuNDE3MSwzLjIwODYsMCw0LjYzNDYsMi4xMzksNC42MzQ2LDUuMzQ3NnYxOC42ODA5aDYuNDE3MXYtMTguNzUyMmMwLTUuNjMyOC0yLjkyMzQtOS4xMjY2LTguNjI3NS05LjEyNjYtNC4wNjQyLDAtNi4yNzQ1LDEuNzgyNS03LjU1NzksMy45OTI5aC0uMzU2NVYuODU1NmguMDcxM1pNMjEzLjQ3NTksMzUuOTM1OGMtNS4yMDUsMC04LjQ4NDgtNC4yNzgxLTguNDg0OC04Ljc3MDEsMC0yLjg1MiwxLjI4MzQtNS40MTg5LDMuMzUxMi02LjkxNjJsMTIuMzM1MSwxMy40NzU5Yy0yLjI4MTYsMS4zNTQ3LTQuODQ4NSwyLjIxMDMtNy4yMDE0LDIuMjEwM1pNMjI1LjQ1NDYsMjkuMjMzNWwtMTAuNjk1Mi0xMS43NjQ3YzEuOTI1MS0uNzg0MywzLjc3OS0xLjA2OTUsNS4yNzYzLTEuMDY5NSw0LjQyMDcsMCw3LjEzMDEsMi41NjY4LDcuMTMwMSw2Ljk4NzUuMDcxMywxLjk5NjQtLjQ5OTEsMy45OTI5LTEuNzExMiw1Ljg0NjdaTTIxMy4zMzMzLDE1LjkwMDJsLTIuMzUyOS0yLjYzODFjLTIuMDY3Ny0yLjI4MTYtMi42MzgyLTMuNzA3Ny0yLjYzODItNS40MTg5LDAtMy4xMzczLDEuOTk2NC00Ljk5MTEsNS4yMDUtNC45OTExczUuMTMzNywxLjg1MzgsNS4xMzM3LDUuMjA1Yy0uMDcxMywzLjIwODYtMS41Njg2LDYuMTMxOS01LjM0NzYsNy44NDMxWk0yMTMuNjE4NSwwYy03LjU1NzksMC0xMS4yNjU2LDQuMjA2OC0xMS4yNjU2LDkuNDExOCwwLDIuODUyMSwxLjIxMjEsNS43MDQxLDQuMzQ5NCw5LjEyNjZsLjA3MTMuMTQyNmMtNS4zNDc2LDIuNTY2OC03Ljc3MTgsNi43MDIzLTcuNzcxOCwxMC45ODA0LDAsNS42MzI4LDQuMjc4MSwxMC4zMzg3LDEwLjk4MDQsMTAuMzM4NywzLjg1MDMsMCw4LjI3MDktMS41Njg2LDEyLjMzNTEtNC40MjA3bDMuMjc5OSwzLjU2NTFoOC41NTYxdi0uMjg1MmwtNi45ODc1LTcuNzAwNWMyLjkyMzQtMy40OTM4LDQuNjM0Ni03LjI3MjcsNC42MzQ2LTEwLjYyMzksMC00LjEzNTUtMi43ODA3LTYuOTE2Mi03LjEzMDEtNi45MTYyLTIuMjgxNiwwLTQuODQ4NS42NDE3LTYuNTU5NywxLjI4MzRsLS4xNDI2LS4yMTM5YzQuMTM1NS0yLjIxMDMsNS45MTgtNC4yNzgxLDUuOTE4LTcuMjAxNCwwLTQuMjA2OC0zLjcwNzctNy40ODY2LTEwLjI2NzQtNy40ODY2WiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=", alt: "Johnson & Johnson", h: 16 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0ic3ZnOTEyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTMzLjI0OSA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8c29kaXBvZGk6bmFtZWR2aWV3IGlkPSJiYXNlIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMS4wIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLXRvcD0iMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiBpbmtzY2FwZTpjeD0iNTkuNzU2MjQyIiBpbmtzY2FwZTpjeT0iMTcuOTM4MjE5IiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMjgwIiBpbmtzY2FwZTp3aW5kb3cteD0iLTQiIGlua3NjYXBlOndpbmRvdy15PSItNCIgaW5rc2NhcGU6em9vbT0iNy41MDU0OTIiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgc2hvd2dyaWQ9ImZhbHNlIiB1bml0cz0icHgiLz4KICA8ZyBpZD0ibGF5ZXIxIiBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSI+CiAgICA8ZyBpZD0iZzkxNzUiPgogICAgICA8cGF0aCBpZD0icGF0aDgwOTciIGQ9Ik0yNS4yMzIxLDQuNzk5NmMtMS42MTMsMC0zLjk0MDkuNTEyOS04LjE1MDksMS45MTMydjI2LjU1OTNjMy43MDE2LDEuMjA3MSw2LjUzOCwxLjkxMzIsOC4xNTA5LDEuOTEzMiwzLjcxNzksMCw1LjgxNC0yLjQ0ODQsNS44MTQtNi4zNzZWMTEuMTc1NWMwLTMuOTI3NS0yLjA5Ni02LjM3NTktNS44MTQtNi4zNzU5TTI2LjQ0MzYsMjguMTI3MWMwLDEuNTM3MS0uODU3OCwyLjA0ODUtMS44ODM1LDIuMDQ4NS0uNzk4MywwLTIuMDMwNi0uMzEyMi0zLjAzNTYtLjYwOFYxMC40MDdjMS4wMDQ5LS4yODUzLDIuMjM3My0uNTk3NiwzLjAzNTYtLjU5NzYsMS4wMjU4LDAsMS44ODM1LjUxMTQsMS44ODM1LDIuMDQ4NXYxNi4yNjkxWiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0icGF0aDgxMDEiIGQ9Ik03OC4zODg3LjAxODFjLTQuNzA4LS4yNDUyLTcuNTExNywxLjk5Mi03LjUxMTcsNy4xMTQ3djI1LjQ1MDRjMCw1LjQwODIsMi41MzkxLDcuNjMzNiw3LjUxMTcsNy40MDAyLDQuODY3LS4yMjc2LDcuNDA2Mi0yLjIxOTUsNy40MDYyLTcuOTY5NVY3LjcyMDFjMC01LjQ4MjUtMi4yOTY4LTcuNDM0NC03LjQwNjItNy43MDJNODAuNjYzMSwzMi4xMjgzYzAsMS41MzcxLS40NzU3LDIuMzMzOS0yLjI3NDUsMi4zOTA1LTEuODUwOC4wNTgxLTIuMzUzMy0uNzk2OC0yLjM1MzMtMi4zOTA1VjcuODczMmMwLTEuNTkzNi41MDI1LTIuNDc2NiwyLjM1MzMtMi40MTg3LDEuNzk4OC4wNTY1LDIuMjc0NS44ODE1LDIuMjc0NSwyLjQxODd2MjQuMjU1MVoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggaWQ9InBhdGg4MTA1IiBkPSJNMTI0LjE1NTYsOS45NTEydjIwLjA0OGM1Ljc3NjktMi45NTM5LDkuMDkzNC02LjM4NjQsOS4wOTM0LTEwLjA2NDIsMC0zLjYzNzctMy4zMTY2LTcuMDUyNC05LjA5MzQtOS45ODM5IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJwYXRoODEwOSIgZD0iTTAsMTkuOTM1NWMwLDMuNjcxOCwzLjMxMjEsNy4xMTA0LDkuMDg3NSwxMC4wNTgyVjkuOTU3NkMzLjMxMjEsMTIuODgzMSwwLDE2LjI5NzgsMCwxOS45MzU1IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJwYXRoODExMyIgZD0iTTQ0LjAwNTQsMzEuMjQwNGMwLDEuNTM3MS0uNDkyMSwyLjUxMDgtMi4yNzQ1LDIuMjc3NS0xLjc1MTItLjIyNzYtMi4yMjI1LTEuMDI1OC0yLjIyMjUtMi44NDY4VjEuNzY2Yy0xLjE2MjUuMTM2NS0zLjc1NTEuNTIzMy00Ljg2NTUuNjk0MnYyOS4yMzUyYzAsNC42Njc5LDIuMTA1LDYuNDg0NSw3LjA4OCw3LjA5ODQsNC41NTk0LjU2MzUsNy4zNTI3LTEuOTE3Nyw3LjM1MjctNy4wOTg0Vi44MDg2Yy0uOTUxNC4wNTc3LTQuMDczMy4zNDE4LTUuMDc4Mi40NTY0djI5Ljk3NTRaIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJwYXRoODExNyIgZD0iTTk5Ljg5MTYsMjEuNjg4NmwtNS42MzQyLTE5Ljc4MDVjLTEuNTM0MS0uMjE3LTMuMzg0OS0uNDM4NS00LjgxMzUtLjU4MTN2MzcuMzM1NmMxLjAwNDktLjEwMTEsMy41NjYzLS40MTQ3LDQuODg3OS0uNTk3NmwtLjQwMTYtMjIsNS45NjEyLDIxLjE0MDdjMS4yNjk1LS4yMTU3LDMuMTIwMy0uNTYzNCw0LjMzNzgtLjgxMzFWMy41ODY1Yy0xLjI2OTYtLjI2NzYtMy41NzY3LS42ODgzLTQuNjg3Mi0uODY5N2wuMzQ5NiwxOC45NzE4WiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0icGF0aDgxMjEiIGQ9Ik02MC4xMTguMjM0NGMtLjg4MywwLTQuMTA0NC4xMTg4LTcuMDY3Mi4zMDc2djM4LjkwNjhjMS4wMDQ5LjA1NjUsMy42NDk2LjIwNTIsNS4wNzgyLjI0NTJ2LTEzLjIxMjdsMS45ODktLjAwNDJjNS4zMjE5LS4wMTY4LDcuNTMyNS0yLjU4MzYsNy41MzI1LTcuNTI1MVY3LjQ4NzVjMC00LjgzNzMtMi40ODU2LTcuMjUxNi03LjUzMjUtNy4yNTE2TTYyLjUxODgsMTguNTQxN2MwLDEuNjczOC0uNTQ0MSwyLjUyMjctMi42MDc1LDIuNTI4NmwtMS43ODI0LjAwNDJWNS43MjI3Yy43OTM4LS4wNDQ3LDEuMjE2LS4wNTY1LDEuNjkzMy0uMDU2NSwyLjIzMTQsMCwyLjY5NjcuOTExMywyLjY5NjcsMi42MTc5djEwLjI1NzZaIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJwYXRoODEyNSIgZD0iTTEwNi43NDE4LDkuMzI1YzEuMjU3Ni4yNDIzLDIuNDk2LjUxMTQsMy43MDMxLjc5Njh2MjQuODI0NWMxLjExMDUtLjI3OTQsMy4xNzM4LS44NTkyLDQuNTQ4OS0xLjI5NzhWMTEuMjkzM2MxLjMyMDEuMzY4NywyLjU2NDMuNzM3MywzLjcwMzEsMS4wODgxdi00Ljc4NjhjLTMuNTkxNi0xLjM0OTgtNy40NDc4LTIuNDQ4NC0xMS45NTUxLTMuNDYwOHY1LjE5MTJaIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=", alt: "DuPont", h: 22 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMzcuMDM2NiA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8ZyBpZD0ibGF5ZXIxIj4KICAgIDxnIGlkPSJnMTQxODkiPgogICAgICA8cGF0aCBpZD0icGF0aDE0MTc5IiBkPSJNNjUuMDEwNyw5Ljk5OThoNi4xOTY2djE5Ljk5ODdoLTQuNTkxOHYtMTMuNDQ4NWwtNS44NzQyLDEzLjQ0ODUtNi4xODIzLTEzLjQ2NTR2MTMuNDY1NGgtNC4yODQ1VjkuOTk5OGg2LjEyNDVsNC40MTU0LDEwLjM1MTEsNC4xOTY0LTEwLjM1MTFaIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJwYXRoMTQxNzciIGQ9Ik03My40OTA3LDkuOTk5OHYxOS45OTg3aDExLjUzOTF2LTMuMzkwNGgtNy4wNjU4di01LjA4NzloNi43NzM3di0zLjQyMjRoLTYuNzczN3YtNC41ODgyaDcuMDY1OHYtMy41MDk4aC0xMS41MzkxWiIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0icGF0aDE0MTc1IiBkPSJNMTAyLjI0MDEsMjAuMDAyN2MwLDcuNDQ0Myw3Ljc2OTMsMTMuNDAxMywxNS45NTU1LDkuNDE2OXYtNC4yODQ1Yy02LjI5OSw0LjQxMjgtMTEuNzgyMy0uMDEwMS0xMS42OTIzLTQuOTYxNC4wNjEzLTMuMjkwNywyLjI3MjctNi40MjAxLDYuNTUwMi02LjY2NDEsMi4xMDM1LS4xMTk0LDMuNTI4NC40MDM0LDUuMTQyMiwxLjk0ODV2LTQuNDU1NWMtNS45MTUyLTMuNTA1My0xNS45NTU1LjM1MjctMTUuOTU1NSw5LjAwMDEiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggaWQ9InBhdGgxNDE3MyIgZD0iTTEyMC4wODM2LDI5Ljk5ODVoNC4yNTM0VjEwLjE5MjJoLTQuMjUzNHYxOS44MDYzWiIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0icGF0aDE0MTcxIiBkPSJNMTI5LjY3NDIsMTkuMjc0Mmw2LjQyNzMtOS4wMzg0aC00Ljk2NzZsLTYuMzY3Niw5LjAyMTUsNy4zOTI2LDEwLjc0MTJoNC44Nzc3bC03LjM2MjQtMTAuNzI0M1oiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggaWQ9InBhdGgxNDE2OSIgZD0iTTg3LjAxODMsOS45OTk2djE5Ljk5ODdoNC40ODl2LTEwLjc0NDNsNy40MjAzLDEwLjc0NDNoNC43ODUxbC01Ljg3NDQtOC4zOTc0YzIuNzIyNS0xLjAyOTUsMy42MDU4LTMuMzEyMywzLjYwNTgtNS41OTM5LDAtMi4yNzk5LTEuOTEzOC02LjAwNzQtNi41NTAxLTYuMDA3NGgtNy44NzU2Wk05MS41MDczLDEzLjMyNzVoMS45NTk0YzMuMzEyOCwwLDMuNDg5NywyLjE2NTcsMy40ODk3LDIuOTc0NCwwLDEuNTQ1MS0xLjMxMSwyLjg2MDktMy4wMDMxLDIuODYwOWgtMi40NDZ2LTUuODM1MloiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggaWQ9InBhdGgxMzM2NiIgZD0iTTkuOTk5MywxMC4wMDAyQzkuOTk5Myw0LjQ3NjksMTQuNDc3MSwwLDE5Ljk5OTYsMHMxMC4wMDAyLDQuNDc2OSwxMC4wMDAyLDEwLjAwMDJIOS45OTkzWk05Ljk5OTMsMjkuOTk5OGMwLTUuNTIyNCw0LjQ3NzgtMTAuMDAwMiwxMC4wMDAyLTEwLjAwMDItNS41MjI0LDAtMTAuMDAwMi00LjQ3Ni0xMC4wMDAyLTkuOTk5M0M0LjQ3NjksMTAuMDAwMywwLDE0LjQ3NzEsMCwxOS45OTk2czQuNDc2OSwxMC4wMDAyLDkuOTk5MywxMC4wMDAyTTkuOTk5MywyOS45OTk4YzAsNS41MjQyLDQuNDc3OCwxMC4wMDAyLDEwLjAwMDIsMTAuMDAwMnMxMC4wMDAyLTQuNDc2LDEwLjAwMDItMTAuMDAwMkg5Ljk5OTNaTTE5Ljk5OTYsMTkuOTk5NmM1LjUyNDIsMCwxMC4wMDAyLDQuNDc3OCwxMC4wMDAyLDEwLjAwMDIsNS41MjMzLDAsMTAuMDAxMS00LjQ3NiwxMC4wMDExLTEwLjAwMDJzLTQuNDc3OC05Ljk5OTMtMTAuMDAxMS05Ljk5OTNjMCw1LjUyMzMtNC40NzYsOS45OTkzLTEwLjAwMDIsOS45OTkzIiBmaWxsPSIjZmZmIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=", alt: "Merck", h: 24 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDAuMDE2MyA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8c29kaXBvZGk6bmFtZWR2aWV3IGlkPSJuYW1lZHZpZXczMDEwIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgZml0LW1hcmdpbi1ib3R0b209IjAiIGZpdC1tYXJnaW4tbGVmdD0iMCIgZml0LW1hcmdpbi1yaWdodD0iMCIgZml0LW1hcmdpbi10b3A9IjAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGlua3NjYXBlOmN4PSI1NTYuMDg0NTIiIGlua3NjYXBlOmN5PSI1MTMuMjcxMDYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3MDkiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM2NiIgaW5rc2NhcGU6d2luZG93LXg9Ii04IiBpbmtzY2FwZTp3aW5kb3cteT0iLTgiIGlua3NjYXBlOnpvb209IjAuNSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgcGFnZWNvbG9yPSIjZmZmZmZmIiBzaG93Z3JpZD0iZmFsc2UiLz4KICA8ZyBpZD0iZzMxNzgiPgogICAgPHBhdGggaWQ9InBhdGgzMDA4IiBkPSJNNy43Mzg4LDM1Ljc5NjVjMy4zOTIyLDIuNjI1OSw3LjY0OTksNC4yMDM1LDEyLjI2OTIsNC4yMDM1LDUuMDU1MiwwLDkuNjYzNi0xLjg3NjgsMTMuMTgwOS00Ljk1NzcuMDQyNy0uMDM3Ny4wMjE2LS4wNjI2LS4wMjA0LS4wMzc3LTEuNTc4MiwxLjA1NDEtNi4wNzY2LDMuMzU0OS0xMy4xNjAzLDMuMzU0OS02LjE1NiwwLTEwLjA0NjQtMS4zNzM2LTEyLjI0MzQtMi41OTk4LS4wNDIxLS4wMjA4LS4wNTc2LjAxMDgtLjAyNjEuMDM2N00yMS4zNjYyLDM2LjgxODdjNC45MjM3LDAsMTAuMzM0Mi0xLjM0MjIsMTMuNTcwMi0zLjk5OS44ODU1LS43MjQsMS43MjktMS42ODc0LDIuNDg0NS0yLjk4MjIuNDM0OS0uNzQ1Ljg2MDItMS42MzAyLDEuMjA2Ny0yLjUwMDIuMDE1NC0uMDQyNC0uMDEwOS0uMDYzMi0uMDQyNy0uMDE1NS0zLjAwOTIsNC40Mjg0LTExLjcyMzMsNy4xOTA2LTIwLjcyMDksNy4xOTA2LTYuMzYsMC0xMy4yMDMtMi4wMzM4LTE1Ljg4MjItNS45MTcxLS4wMjY0LS4wMzU5LS4wNTI4LS4wMjA1LS4wMzY3LjAyMDcsMi40OTU4LDUuMzA0OSwxMC4wNjc1LDguMjAyNywxOS40MjEyLDguMjAyN00xNS45ODY2LDI4LjAxODRDNS43NDYyLDI4LjAxODQuOTE3NywyMy4yNDkxLjA0MTksMTkuOTk0NGMtLjAxMDktLjA0NzItLjA0MTktLjAzNjgtLjA0MTkuMDA1NSwwLDEuMDk1Ny4xMDk2LDIuNTA5Ny4yOTg0LDMuNDQ4Mi4wOS40NTcuNDYxOCwxLjE3MzgsMS4wMDY5LDEuNzQ1MywyLjQ3OTcsMi41ODQ2LDguNjYxNyw2LjIwNjMsMTkuMzY4Miw2LjIwNjMsMTQuNTg3MSwwLDE3LjkyMjMtNC44NTksMTguNjAzNC02LjQ1NzEuNDg3LTEuMTQyOC43MzkzLTMuMjA4LjczOTMtNC45NDI5LDAtLjQxOTktLjAxMDYtLjc1NTEtLjAyNjQtMS4wODQzLDAtLjA1MzQtLjAzMS0uMDU3OC0uMDQxNi0uMDA1Ny0uNzI4OCwzLjkxMDItMTMuMTkxOCw5LjEwODYtMjMuOTYxNiw5LjEwODZNMS45Mjg5LDExLjQxOTljLS41ODY3LDEuMTY0NS0xLjIzNzIsMy4xMjkxLTEuNDMwNSw0LjE0NTktLjA4NDguNDM1Ni0uMDQ4Ny42NDQ5LjEwNDEuOTY5OSwxLjIyNzQsMi42MDQxLDcuNDM1Nyw2Ljc3MDgsMjEuOTE3Miw2Ljc3MDgsOC44MzQ4LDAsMTUuNjk3OS0yLjE3MDUsMTYuODA5Ny02LjEzMTMuMjA0OC0uNzI5MS4yMTU3LTEuNDk5LS4wNDczLTIuNTM2My0uMjkzOC0xLjE1OTItLjg0NDMtMi41MTA5LTEuMzEwMS0zLjQ2LS4wMTU0LS4wMzEtLjA0MjUtLjAyNjMtLjAzNy4wMTAzLjE3Myw1LjE5NS0xNC4zMTQyLDguNTQzMS0yMS42MjM5LDguNTQzMS03LjkxNzYsMC0xNC41MjMxLTMuMTU0Ni0xNC41MjMxLTcuMTM3OCwwLS4zODI2LjA3OTMtLjc2NTUuMTc4MS0xLjE2MzkuMDA5OS0uMDM2Ni0uMDIxMy0uMDQyNi0uMDM3My0uMDEwN00zMy4yMjEzLDUuMDQxNWMuMDg0MS4xMzE3LjEyNi4yNzIzLjEyNi40NjE2LDAsMi4yMjIyLTYuODAxMSw2LjE1MzQtMTcuNjI3Niw2LjE1MzQtNy45NTQ5LDAtOS40NDQyLTIuOTUxMS05LjQ0NDItNC44Mjc4LDAtLjY3MDguMjU3My0xLjM1NzMuODI0LTIuMDU0NC4wMzEtLjA0MTUuMDA0Ny0uMDU3NC0uMDMxMS0uMDI2Ny0xLjAzMzQuODc1OC0xLjk4MywxLjg2MTMtMi44MTYsMi45MjUtLjM5OC41MDMxLS42NDUuOTQ4OC0uNjQ1LDEuMjE1OCwwLDMuODg5MSw5Ljc1Miw2LjcwOSwxOC44NzA0LDYuNzA5LDkuNzE1OCwwLDE0LjA1Mi0zLjE3MTcsMTQuMDUyLTUuOTU5MSwwLS45OTYyLS4zODc4LTEuNTc3Ny0xLjM3OTctMi43MDUxLS42NDM5LS43MzM1LTEuMjUzLTEuMzMwNi0xLjg5NzYtMS45MTg1LS4wMzEyLS4wMjU2LS4wNTI5LS4wMDQ3LS4wMzEyLjAyNjdNMzAuMjQyNywyLjgxOThjLTIuOTk4Ni0xLjc5NzMtNi40ODA1LTIuODE5OC0xMC4yMzQ1LTIuODE5OC0zLjc4MDEsMC03LjM2NywxLjA1ODMtMTAuMzc2MywyLjkwMzItLjkwMjguNTU1NS0xLjQxMDcsMS4wMDA2LTEuNDEwNywxLjU3MywwLDEuNjg3LDMuOTQyNSwzLjUwMDgsMTAuOTM3LDMuNTAwOCw2LjkyMTksMCwxMi4yOTA3LTEuOTg2OCwxMi4yOTA3LTMuODk5Mi4wMDAxLS40NTY0LS4zOTg5LS43NzU4LTEuMjA2Mi0xLjI1NzkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPg==", alt: "AT&T", h: 24 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGlsbHlfU2NyaXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDczLjM4MDcgNDAiPgogIDwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAzMC4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiAyLjEuMSBCdWlsZCAxKSAgLS0+CiAgPHBhdGggZD0iTTUwLjY2MDgsMjMuMzUzNGMuNDI2LS4zMDU4Ljg4NDgtLjY1NTQsMS4zMTA4LS45OTQsMy4yOTg3LTIuNjQzNCw1LjgyMi01LjUzOCw2LjMyNDQtNy4xNDM2LjAyMTgtLjA1NDYuMDU0Ni0uMTk2Ni4wNTQ2LS4zMTY4LDAtLjE2MzgtLjA3NjUtLjI4NC0uMjI5NC0uMjg0LTEuNTE4MywwLTYuMzc5LDQuODM4OS03LjU1ODcsOC43NzEyaDBsLjA4NzQtLjAzMjhoLjAxMDlaTTM4LjQ3MDgsMjIuNzk2M2M0LjU5ODYtMy40NzM1LDkuNDI2NS04LjUzMDksOS45Mzk5LTEwLjYwNjIuMDEwOS0uMDY1NS4wMzI4LS4xMzExLjAzMjgtLjE5NjYsMC0uMTQyLS4wODc0LS4yNjIyLS4yNTEyLS4yNjIyLTEuNDUyOCwwLTguMTkyMiw2LjIxNTItOS43MTA1LDExLjA2NU0xMC4yNDU4LDI1Ljg0MzhjLTEuMjEyNS0uODQxMS0zLjA5MTItMS41NzI5LTQuNzczMy0xLjU3MjlzLTIuNjY1Mi42MzM1LTIuNjY1MiwxLjQ0MThjMCwuOTI4NSwxLjI2NzEsMS4zMzI2LDIuNjc2MSwxLjMzMjYsMS43MTQ5LDAsMy4yNjYtLjQ1ODgsNC43NjI0LTEuMjAxNU0yNC4zMzY0LDE0Ljk0MjdjMy4yOTg3LTEuMDU5NSw2LjQyMjctMy4yNjYsOC43NDkzLTUuNTcwNywyLjE1MTgtMi4xNDA5LDMuODc3Ny00LjY3NSwzLjg3NzctNS45MzEyLDAtLjI4NC0uMjA3NS0uNDU4OC0uNDY5Ny0uNDU4OC0uOTk0LDAtMi44OTQ2LDEuMzIxNy01LjQzOTYsMy44Nzc3LTEuOTg4LDEuOTg4LTQuMjkyNyw0LjcwNzgtNi43Mjg2LDguMDgzTTczLjM4MDcsMjIuOTE2NGMtMi44MjkxLDIuODE4MS0xMS42NDM5LDEwLjU2MjUtMTMuOTgxNCwxNy4wODM2bC0yLjg5NDYtLjc0MjhjLjk1MDMtMi42OTgsMy43OTAzLTYuOTAzMyw2Ljk1NzktMTAuMTM2NS0uNjc3Mi4yNTEyLTEuMzc2My4zNDk1LTEuOTQ0My4zNDk1LS44NTIsMC0xLjUxODMtLjI2MjItMS45MjI0LS43NDI4LS4yODQtLjM0OTUtLjQzNjktLjgwODMtLjQzNjktMS4zNDM1LDAtLjEyMDIsMC0uMjQwMy4wMjE4LS4zNzE0LTIuNzg1NCwxLjY5MzEtNS4wMjQ2LDIuNDY4Ni03LjIyMDEsMi40Njg2LTEuNzA0LDAtMy4xNDU4LS43NDI4LTMuODEyMS0yLjA1MzUtMi43NjM1LDEuMzc2My01LjQxNzgsMi4wNTM1LTcuNjM1MiwyLjA1MzUtMi4wNjQ0LDAtMy43MjQ3LS44MTkyLTQuNDg5NC0yLjMwNDgtMi43OTYzLDEuNTcyOS01LjE2NjYsMi4zMDQ4LTcuMDY3MiwyLjMwNDgtMS4wOTIzLDAtMS45NTUyLS4zMDU4LTIuNTEyMy0uODczOC0uNDA0Mi0uNDE1MS0uNjIyNi0uOTgzMS0uNjU1NC0xLjYzODQtMS43OTE0LDEuMTc5Ny00LjQxMjksMi41MTIzLTcuMDk5OSwyLjUxMjNzLTQuNTg3Ny0uOTM5NC02LjAxODYtMS44Nzg4Yy0yLjI3MiwxLjI2NzEtNC43ODQzLDEuODc4OC03LjQzODYsMS44Nzg4LTEuOTk4OSwwLTUuMjMyMS0uODMwMS01LjIzMjEtMy43MTM4LDAtMi4zMjY2LDIuNDI0OS0zLjg4ODYsNS42NTgxLTMuODg4NiwyLjc1MjYsMCw1LjQwNjksMS4xNTc4LDcuMDY3MiwyLjM3MDMsMS41ODM4LTEuMjU2MSwzLjIzMzItMy4wMTQ3LDUuMTg4NC01LjUwNTItLjQyNi4wMjE4LS44NTIuMDMyOC0xLjI2NzEuMDMyOC0zLjc0NjYsMC02Ljg3MDYtMS4xMDMyLTguNTc0NS0zLjAzNjYtLjkxNzUtMS4wNDg2LTEuMzU0NS0yLjI3Mi0xLjM1NDUtMy41OTM3LDAtNS4yMTAzLDYuNTc1Ni05LjI1MTgsMTIuMzMyMS05Ljg1MjUuMzgyMy44NjI5LjcyMDksMS41MjkyLDEuMDcwNSwyLjMxNTctNS42OTA5LjY1NTQtMTAuNDIwNSw0LjAzMDYtMTAuNDIwNSw3LjMxODQsMCwyLjE2MjgsMi40MjQ5LDQuMzM2NCw3LjU5MTUsNC4zMzY0Ljg4NDgsMCwxLjc2OTUtLjA4NzQsMi42NDM0LS4yMDc1QzI0LjUzMyw5Ljc2NTIsMzEuNTAxOSwwLDM3LjUwOTYsMGMxLjc4MDQsMCwyLjcwODksMS4wODE0LDIuNzA4OSwyLjUyMzIsMCwyLjk3MTEtMi41NTYsNi4xNzE1LTQuMjE2Myw3Ljg0MjctMi42MjE1LDIuNjMyNC03LjM1MTIsNi41NDI5LTEzLjk1OTYsNy44NDI3LTIuNTY2OSwzLjU4MjctNC42ODYsNS45NTMtNi43OTQxLDcuNjY3OSwxLjI3OC42ODgxLDIuNDc5NSwxLjExNDEsMy45MTA0LDEuMTE0MSwzLjU2MDksMCw3LjAwMTYtMy4yNTUxLDkuNjk5Ni02LjAxODZsLjA5ODMtLjA4NzQsMi4wOTcyLDEuNjM4NC0uMDk4My4xMjAyYy0xLjE5MDYsMS4zNjU0LTIuMjkzOCwyLjgwNzItMi4yOTM4LDMuNjE1NSwwLC42MTE3LjUyNDMuNzMxOC45NjEyLjczMTgsMS4zNjU0LDAsMy40NjI2LS44ODQ4LDUuOTMxMi0yLjQwMzF2LS4wMjE4Yy4yNzMxLTYuMTA2LDguNjA3My0xNS40NDUxLDEzLjY2NDctMTUuNDQ1MSwxLjQzMDksMCwyLjI1MDEuNzEsMi4yNTAxLDEuOTU1MiwwLDMuMDU4NC01LjI3NTgsOS42MjMyLTEyLjk1NDcsMTQuNjQ3N2gwYy4zOTMyLjg2MjksMS4zMTA4LDEuMjY3MSwyLjg2MTgsMS4yNjcxLDEuMjEyNSwwLDMuNTgyNy0uNTM1Miw2LjQwMDktMi4wMDk4LjMyNzctMy4xNjc3LDIuMTE5MS02LjU2NDcsNC4zOTEtOC45Nzg3LDIuMjgyOS0yLjQyNDksNC44Mzg5LTMuOTk3OCw3LjA0NTMtMy45OTc4LDEuMzY1NCwwLDIuMTYyOC43NTM3LDIuMTYyOCwxLjkzMzQsMCwyLjY3NjEtMy4xMDIxLDcuMjQxOS0xMC41NjI1LDEyLjAxNTMuMzI3Ny42NDQ1Ljk3MjEsMS4wNDg2LDEuOTY2MSwxLjA0ODYsMi4yMjgzLDAsNi4xMzg3LTIuMzcwMyw5LjE4NjItNS4yOTc3bDIuMTk1NSwxLjcwNGMtLjkzOTQsMS4xMzYtMS44Nzg4LDIuMzgxMi0xLjg1NjksMy4xMDIxLDAsLjIyOTQuMTYzOC4zOTMyLjUzNTIuMzkzMiwyLjI1MDEsMCw1Ljc4OTItMi45NzExLDguNDQzNS01LjU5MjZsMi4wOTcyLDEuNjI3NXYtLjAyMThaTTMyLjY4MTYsMTYuNzk5NmMuOTk0LDAsMS43OTE0LjgwODMsMS43OTE0LDEuODAyM3MtLjc5NzQsMS44MDIzLTEuNzkxNCwxLjgwMjMtMS44MDIzLS44MDgzLTEuODAyMy0xLjgwMjMuODA4My0xLjgwMjMsMS44MDIzLTEuODAyMyIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=", alt: "Eli Lilly", h: 22 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0ic3ZnMzc5NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDAgNDAiPgogIDwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAzMC4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiAyLjEuMSBCdWlsZCAxKSAgLS0+CiAgPGcgaWQ9ImxheWVyMSI+CiAgICA8ZyBpZD0iZzM0NjAiPgogICAgICA8cGF0aCBpZD0icGF0aDM0NjIiIGQ9Ik0yMC4wMDEyLDIuMTYxNWMtNC45MjQyLDAtOS4zODM3LDEuOTk3NC0xMi42MTI0LDUuMjI4NS0zLjIzLDMuMjIzOC01LjIyNjEsNy42ODU3LTUuMjI2MSwxMi42MTI0LDAsNC45MjMsMS45OTYxLDkuMzgxOSw1LjIyNjEsMTIuNjA2OSwzLjIyODcsMy4yMjY5LDcuNjg4Miw1LjIyNzksMTIuNjEyNCw1LjIyNzlzOS4zODc0LTIuMDAxLDEyLjYxMTItNS4yMjc5YzMuMjI4Ny0zLjIyNSw1LjIyMDUtNy42ODM5LDUuMjIwNS0xMi42MDY5LDAtNC45MjY3LTEuOTkxOC05LjM4ODYtNS4yMjA1LTEyLjYxMjQtMy4yMjM4LTMuMjMxMi03LjY4NTctNS4yMjg1LTEyLjYxMTItNS4yMjg1TTIwLjAwMTIsMEMzMS4wNDU0LDAsNDAsOC45NTU4LDQwLDIwLjAwMjVzLTguOTU0NiwxOS45OTc1LTE5Ljk5ODgsMTkuOTk3NVMwLDMxLjA0NTQsMCwyMC4wMDI1LDguOTU4MywwLDIwLjAwMTIsMCIgZmlsbD0iI2ZmZiIvPgogICAgPC9nPgogICAgPGcgaWQ9ImczNDY0Ij4KICAgICAgPHBhdGggaWQ9InBhdGgzNDY2IiBkPSJNMTAuNTQyMSwxOS44Mzk1YzAtMS4xNjU2LS43NzM0LTEuODI3Ny0xLjg2ODMtMS44Mjc3aC0uNjcwMXYzLjY1NjZoLjY1MWMxLjAxOCwwLDEuODg3My0uNTUzMywxLjg4NzMtMS44Mjg5TTIyLjQ2MTcsMjEuMTU1MWwtNC45MzY1LDMuODg3MS00LjUxMTctMy41NTIxYy0uNjUxLDEuNTY0LTIuMjI0MiwyLjY1MDItNC4wMzU5LDIuNjUwMmgtMy44NjEzdi04LjYwMTdoMy44NjEzYzIuMDI0NCwwLDMuNDgzMiwxLjI4NzMsNC4wMzQ3LDIuNjU4OGw0LjUxMy0zLjU0ODQsMS42NzE1LDEuMzE1Ni00LjEzNjEsMy4yNTA5Ljc5NDkuNjIyMSw0LjEzNDktMy4yNDksMS42NzQsMS4zMTE5LTQuMTM1NSwzLjI1NDUuNzkzNy42MjM0LDQuMTM5Mi0zLjI1NTJ2LTIuOTg0N2gzLjAwMDZ2Ni4wOTFoMi45OTMzdjIuNTIxMWgtNS45OTM5di0yLjk5NTdaTTMyLjI1NjcsMjEuNjMwOWgyLjk5MnYyLjUxOTloLTUuOTk1OHYtOC42MTIyaDMuMDAzN3Y2LjA5MjNaIiBmaWxsPSIjZmZmIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=", alt: "Dell", h: 22 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0MCA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8ZyBpZD0ic3ZnMzAwOSIgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4yIHI5ODE5IiBzb2RpcG9kaTpkb2NuYW1lPSJjMDI3MTY3OTIucGRmIj4KICAgIDxzb2RpcG9kaTpuYW1lZHZpZXcgaWQ9Im5hbWVkdmlldzMwMTEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBmaXQtbWFyZ2luLWJvdHRvbT0iMC4xIiBmaXQtbWFyZ2luLWxlZnQ9IjAuMSIgZml0LW1hcmdpbi1yaWdodD0iMC4xIiBmaXQtbWFyZ2luLXRvcD0iMC4xIiBncmlkdG9sZXJhbmNlPSIxMCIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMzAxNyIgaW5rc2NhcGU6Y3g9IjU3NC4zOTE1NCIgaW5rc2NhcGU6Y3k9Ii03OC40MTgyODIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDI4IiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOndpbmRvdy14PSItOCIgaW5rc2NhcGU6d2luZG93LXk9Ii04IiBpbmtzY2FwZTp6b29tPSIwLjY3NDI1MTMxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBwYWdlY29sb3I9IiNmZmZmZmYiIHNob3dncmlkPSJmYWxzZSIvPgogICAgPGcgaWQ9ImczMDE3IiBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiBpbmtzY2FwZTpsYWJlbD0iYzAyNzE2NzkyIj4KICAgICAgPGcgaWQ9ImczMDYxIj4KICAgICAgICA8ZyBpZD0iZzMwMjEiPgogICAgICAgICAgPHBhdGggaWQ9InBhdGgzMDIzIiBkPSJNNDAsMjBDNDAsOC45NTM5LDMxLjA0NjEsMCwyMCwwYy0uMzAxMiwwLS42MDA4LjAwNzYtLjg5OS4wMjEzbC00LjA5MSwxMS4yNDM5aDMuNTYzMWMyLjExOTYsMCwzLjI2MiwxLjYzMjEsMi41MzY0LDMuNjI1NWwtNS4wNDYyLDEzLjg2NzctNC4yMzctLjAwMDgsNS40MTUxLTE0Ljg2NDFoLTMuMTg1OWwtNS40MTUxLDE0Ljg2NDFoLTQuMjM4NWw2LjM2NzMtMTcuNDkyNWguMDAwOEwxNC42MDAxLjczODVDNi4xNzc5LDMuMDk0NiwwLDEwLjgyNTYsMCwyMGMwLDkuNDQ2Nyw2LjU1MDYsMTcuMzYzMiwxNS4zNTY5LDE5LjQ1N2wzLjcxMTUtMTAuMTk5NmguMDAzbDYuNTQ3NS0xNy45OTIyaDcuODAzOWMyLjEyMTksMCwzLjI2MzUsMS42MzIxLDIuNTM3OSwzLjYyNTVsLTQuNDM0LDEyLjE4MDFjLS4zMzc3LjkyNzktMS40MjE1LDEuNjg2OS0yLjQwODYsMS42ODY5aC01LjYyNWwtNC4wODcyLDExLjIzMzJjLjE5Ny4wMDUzLjM5NTUuMDA5MS41OTQuMDA5MSwxMS4wNDYxLDAsMjAtOC45NTQ2LDIwLTIwIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJnMzAyNSI+CiAgICAgICAgICA8cGF0aCBpZD0icGF0aDMwMjciIGQ9Ik0zMi4xMDE4LDEzLjg4M2gtMy4xODQ0bC00LjQ1OTgsMTIuMjM2NGgzLjE4NDRsNC40NTk4LTEyLjIzNjQiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==", alt: "HP", h: 22 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNDIuNzgxOCA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8cGF0aCBkPSJNMTQuMTE1NywwaDYuOTQ2NWMtMS4wODM5LDEwLjQwNTUtMi4xNzgyLDIwLjgwOTQtMy4yODI5LDMxLjIxMTUtLjA5NjIuMDc5Ni0uMjA3My4xMTEzLS4zMzMuMDk1Mi0xLjA3ODktMTAuNDQwNS0yLjE4OTEtMjAuODc2MS0zLjMzMDUtMzEuMzA2N1oiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTc5Ii8+CiAgPHBhdGggZD0iTTEyLjQ5OCwzNy42ODIyYy0uMDAyOS4wOTQ5LjA0NDcuMTU4My4xNDI3LjE5MDMuMjk5My4wODY3LjYwMDYuMTY2LjkwNC4yMzc5LS4yMzc5LjA3OTMtLjI1MzguMTkwMy0uMDQ3Ni4zMzMuMjk1OS0uMTExNi4zMTE4LS4wNjQuMDQ3Ni4xNDI3LS4wNTM0LjE0OS4wMTAxLjI3NTkuMTkwMy4zODA2LS4xMDI0LjIwMjgtLjE2NTkuNDI0OS0uMTkwMy42NjYxLS4yMDk0LjA3ODUtLjM4MzkuMDMwOS0uNTIzNC0uMTQyNy0uMTYxNy4wODYyLS4zMzYyLjExNzktLjUyMzQuMDk1Mi0zLjkxMS0uNDI5NC03LjE5MzktMi4wNzg5LTkuODQ4OC00Ljk0ODItMS4zOTk2LTEuNzQ0Ny0yLjIwODUtMy43MTEzLTIuNDI2NS01Ljg5OTcuMDI1OC0uMTc4OS0uMDM3Ny0uMzA1Ny0uMTkwMy0uMzgwNi0uMTY5LTIuNzg5MS4zMjI2LTUuNDg1MSwxLjQ3NDktOC4wODg0LDEuMTE5OC0yLjMwMjksMi4xMzQ4LTQuNjUsMy4wNDUtNy4wNDE2LjY1ODEtMS45ODg2Ljc1MzMtMy45NTUyLjI4NTUtNS44OTk3LS4zNjUzLTEuMTkxOS0uOTgzOS0yLjIyMjgtMS44NTU2LTMuMDkyNi4wMjE0LS4xNTQyLjEwMDctLjI2NTMuMjM3OS0uMzMzLDQuMzU2NiwxLjI3NjEsNi42NTYyLDQuMTc4Myw2Ljg5ODksOC43MDY5LjAxNTIsMS4zMTk4LS4xOTEsMi42MDQ0LS42MTg1LDMuODUzOS0uNzQwMywxLjk4ODEtMS41MzMzLDMuOTU0Ni0yLjM3ODksNS44OTk3LTEuMDgyNCwyLjUzMzMtMS40NjMsNS4xNjYtMS4xNDE5LDcuODk4LjczODUsMy43MzU5LDIuOTExMiw2LjIxLDYuNTE4Myw3LjQyMjNaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBkPSJNOTkuNzU3MSwzOC41Mzg2Yy00LjU3OSwxLjUyMi04LjcwMjEuODA4NC0xMi4zNzA0LTIuMTQxLTMuNjUxLTMuNTc5MS00LjkwMzktNy44NzcxLTMuNzU4Ny0xMi44OTM4LDEuNTUzMi01LjIyNTksNS4wMjY0LTguMjU1MSwxMC40MTk3LTkuMDg3NSw0LjkwMTUtLjM5OSw4Ljc1NTQsMS4zOTMyLDExLjU2MTYsNS4zNzY0LDEuNzgxMywzLjAyODIsMi4yODk1LDYuMjYzNSwxLjUyMjUsOS43MDYtLjkxNTQsNC4yOTItMy4zNzQzLDcuMzA1Mi03LjM3NDcsOS4wMzk5Wk05My44NTc0LDE1LjYwNThjMi40OTk4LS4xNTU3LDQuNTc3MS43MDA3LDYuMjMyOCwyLjU2OTIsMi4xNTA1LDIuNzIzMSwzLjIxMjUsNS44MzE2LDMuMTg3OCw5LjMyNTQuMDkwNCwyLjgxMjYtLjU5MTksNS40MTM1LTIuMDQ1OSw3LjgwMjktMi4wNjExLDIuNjAwMy00LjY3NzksMy4zNzczLTcuODUwNSwyLjMzMTMtMS43NDUyLS44MjUzLTMuMDkzMi0yLjA3ODEtNC4wNDQyLTMuNzU4Ny0yLjIzNi00LjI0ODYtMi42MTY2LTguNjU3NS0xLjE0MTktMTMuMjI2OC45MjgyLTIuNzg1LDIuODE1NC00LjQ2NjEsNS42NjE4LTUuMDQzM1oiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTY5Ii8+CiAgPHBhdGggZD0iTTE0NS4xNDcsMTQuMzY4N2MuMTI1Ni0uMDE2Mi4yMzY5LjAxNTUuMzMzLjA5NTIsMi43Nzg2LDcuNDE0OSw1LjUzODEsMTQuODM3Miw4LjI3ODcsMjIuMjY2OC4wNzMzLjEyODQuMTg0Ni4yMDc2LjMzMy4yMzc5Ljc4Ny4yMzYyLDEuNTgwNi40NDIzLDIuMzc4OS42MTg1djEuMDQ2N2gtMTAuMDg2N3YtMS4wNDY3YzEuMTEyNC0uMjA2OSwyLjIyMjktLjQyODksMy4zMzA1LS42NjYxLS43NDEzLTIuMDk3NC0xLjUwMjUtNC4xOTA4LTIuMjgzOC02LjI4MDQtMi45ODEzLS4wOTUyLTUuOTYyNS0uMTI2OC04Ljk0NDgtLjA5NTItLjcwNjEsMi4xMTExLTEuNDY3Myw0LjIwNDUtMi4yODM4LDYuMjgwNCwxLjA5OTEuMzAyMiwyLjIwODYuNTU2LDMuMzMwNS43NjEzdjEuMDQ2N2gtNy43MDc3Yy0uMDI3Ni0uMzQzMS4wMDM4LS42NzYyLjA5NTItLjk5OTEuODAzMS0uMjU3MSwxLjYxMi0uNDk1LDIuNDI2NS0uNzEzNywyLjgyNjItNy4yNTUzLDUuNTY5NS0xNC41NTA3LDguMjMxMS0yMS44ODYxLjg4NTktLjE1LDEuNzQyMy0uMzcyLDIuNTY5Mi0uNjY2MVpNMTQyLjk1ODQsMTguNTU1NmMxLjMwMzYsMy4zMjM2LDIuNTczMSw2LjY3LDMuODA2MywxMC4wMzkxLTIuNTA2NC4wNzkzLTUuMDExOS4wNjM1LTcuNTE3NC0uMDQ3NiwxLjI1NjEtMy4zMjU0LDIuNDkzMS02LjY1NTksMy43MTExLTkuOTkxNVoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTU3Ii8+CiAgPHBhdGggZD0iTTIzNC4wMjM4LDE0LjM2ODdjMi4zMzMzLS4xMjIsNC42MDE4LjE5NTIsNi44MDM3Ljk1MTYuMjQyNywxLjgzODYuNDE2OCwzLjY2MjQuNTIzNCw1LjQ3MTUtLjI3ODguMDczOS0uNTQ4MS4wNTgtLjgwODgtLjA0NzYtLjY0NDItMS40NjItMS4zMjU1LTIuOTA1MS0yLjA0NTktNC4zMjk2LTEuNzg3MS0uOTEyMS0zLjYyNzQtMS4wMzg5LTUuNTE5MS0uMzgwNi0xLjcwMzMuODUyNi0yLjQxNywyLjIzMjQtMi4xNDEsNC4xMzkzLjIxOTgsMS4wMjY3Ljc0MzIsMS44NjczLDEuNTcwMSwyLjUyMTcuNDU5Ni4zNDA4LjkzNTQuNjU4LDEuNDI3NC45NTE2LDIuMjAyOSwxLjA4NDksNC4zMjc3LDIuMjkwMiw2LjM3NTUsMy42MTYsMi40OTEyLDIuMTQ3NCwzLjE3MzUsNC43NjQyLDIuMDQ1OSw3Ljg1MDUtMS4wNjg2LDEuOTI0Mi0yLjY3MDEsMy4xNzcxLTQuODA1NCwzLjc1ODctMi41MjgzLjUzNzktNS4wNjUyLjU2OTctNy42MTI2LjA5NTItLjg2NjktLjE1NzItMS43MDgxLS4zOTUxLTIuNTIxNy0uNzEzNy0uMTkyMi0yLjA2NDUtLjM5NzgtNC4xMjYzLS42MTg1LTYuMTg1Mi4yOTIxLS4wMzAyLjU3NzYuMDAxNS44NTY0LjA5NTIuNjk3NSwxLjYxNzcsMS4zOTU5LDMuMjM1MywyLjA5MzUsNC44NTMsMS45MjQxLDEuMDQ0OCwzLjk1MzgsMS4zMTQ0LDYuMDkwMS44MDg4LDIuOTA0Mi0xLjAwMzQsMy45MzU3LTIuOTg1OCwzLjA5MjYtNS45NDczLS42MTg1LTEuMTI2LTEuNDkxMS0xLjk5ODMtMi42MTY4LTIuNjE2OC0yLjEwNjgtLjk3MzUtNC4xMDUxLTIuMTE1My01Ljk5NDktMy40MjU3LTIuOTQ4LTIuNDQ2OC0zLjUwMjctNS4zNDkxLTEuNjY1Mi04LjcwNjkuOTAwMi0xLjE1MjMsMi4wNTczLTEuOTI5MywzLjQ3MzItMi4zMzEzLjY3MjgtLjE3NTYsMS4zMzg5LS4zMTgzLDEuOTk4My0uNDI4MloiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTYxIi8+CiAgPHBhdGggZD0iTTE2MS4wMzgzLDE1LjAzNDhjMy41MzUxLS4wNDMzLDcuMDg3My4wMDQzLDEwLjY1NzYuMTQyNywxLjk0MTIuMjEyNywzLjYzNzkuOTU4MSw1LjA5MDksMi4yMzYyLDEuNDk4NywxLjgyMzIsMS44NDgsMy44NTMzLDEuMDQ2Nyw2LjA5MDEtLjc2NzksMS41MjkzLTEuOTU3NCwyLjU5MTgtMy41Njg0LDMuMTg3OC0uNDM3Ny4xNzc3LS44ODIxLjMzNjMtMS4zMzIyLjQ3NTgsMi4wODk2LDMuMTc5Nyw0LjE2NjksNi4zNjc0LDYuMjMyOCw5LjU2MzMsMS4wMTYzLjMzODUsMi4wNDY4LjYzOTgsMy4wOTI2LjkwNC4wOTEzLjMyMy4xMjI4LjY1Ni4wOTUyLjk5OTEtMi4wNjIxLjAxNTktNC4xMjQxLDAtNi4xODUyLS4wNDc2LTIuMjY0Ny0zLjUzNDctNC41MzMzLTcuMDcxNC02LjgwMzctMTAuNjEtLjg5NjQtLjA5MzctMS44MDA0LS4xMjU0LTIuNzEyLS4wOTUydjkuMDM5OWMxLjA0MzkuMjM3LDIuMDkwNi40NTkxLDMuMTQwMi42NjYxdjEuMDQ2N2gtOS43MDZjLS4wMjc2LS4zNDMxLjAwMzgtLjY3NjIuMDk1Mi0uOTk5MS44MjUtLjIzOCwxLjY1LS40NzU5LDIuNDc0MS0uNzEzNy4xMjY2LTYuNzI0NS4xMjY2LTEzLjQ0ODgsMC0yMC4xNzMzLS4wNTYxLjAxOTktLjEwMzcuMDUxNy0uMTQyNy4wOTUyLS43NzM2LS4zNDg0LTEuNTgyNS0uNjAyMS0yLjQyNjUtLjc2MTN2LS45NTE2Yy4zMzY5LjAyOTguNjU0Ny0uMDAyLjk1MTYtLjA5NTJaTTE2Ni42NTI2LDE2LjQ2MjJjMS45ODIxLS4wOTMsMy44NTM5LjI0MDEsNS42MTQzLjk5OTEsMS40NzMuOTE2MiwyLjE3MTUsMi4yNDg0LDIuMDkzNSwzLjk5NjYtLjAxOSwyLjE2MjUtMS4wMzQ0LDMuNjUzNC0zLjA0NSw0LjQ3MjQtMS41MTIuNTA2NS0zLjA2Ni43MTI3LTQuNjYyNy42MTg1di0xMC4wODY3WiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii45NjMiLz4KICA8cGF0aCBkPSJNNTUuNjA0MiwxNS4wMzQ4YzEuOTIzNi4wMjI1LDMuODQyNi4wMjI1LDUuNzU3LDAsLjA3MTQuMDU5Ni4xNTA3LjEwNzEuMjM3OS4xNDI3LDQuMjk4LDUuNjMwMiw4LjU5NTgsMTEuMjYwMiwxMi44OTM4LDE2Ljg5MDQuMDQ3Ni01LjEwNjcuMDYzNS0xMC4yMTM0LjA0NzYtMTUuMzIwMy0xLjAyNjUtLjE4MzItMi4wNDE1LS40MjExLTMuMDQ1LS43MTM3LS4wOTA1LS4yOTA5LS4xMjIyLS41OTIyLS4wOTUyLS45MDRoNy4zMjcxdi45NTE2Yy0uODUxNy4yNDE2LTEuNzA4MS40NjM3LTIuNTY5Mi42NjYxLS4wMTU5LDYuNDM5LDAsMTIuODc4LjA0NzYsMTkuMzE2OS4wMzExLjk4NDkuMDc4NywxLjk2ODEuMTQyNywyLjk0OTktLjQxNzIuMDMxLS44Mjk1LS4wMDA4LTEuMjM3LS4wOTUyLTUuMDgzMy02LjU1NTItMTAuMTQyNS0xMy4xMjEtMTUuMTc3Ni0xOS42OTc1LS4wNDc2LDUuODk5Ni0uMDYzNSwxMS43OTk0LS4wNDc2LDE3LjY5OTIsMS4wMjEuMjA3NiwyLjAzNjEuNDQ1NSwzLjA0NS43MTM3LjA5MS4zMjMuMTIyNy42NTYuMDk1Mi45OTkxLTIuNDMzNS4wMzEyLTQuODYwMS0uMDAwNS03LjI3OTUtLjA5NTItLjA3NDYtLjMxMDItLjA1ODctLjYxMTYuMDQ3Ni0uOTA0Ljc5MDctLjI0NzcsMS41ODM2LS40ODU2LDIuMzc4OS0uNzEzNy4wNjM2LTYuNDkzLjEyNy0xMi45Nzk1LjE5MDMtMTkuNDU5Ni0uODM4LS43Njc5LTEuODIxNC0xLjIyNzgtMi45NDk5LTEuMzc5OC0uMDQ0Mi0uMzgwOC4wMTkyLS43Mjk4LjE5MDMtMS4wNDY3WiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii45NjMiLz4KICA8cGF0aCBkPSJNMTA5Ljg0MzgsMTUuMDM0OGg5LjUxNTd2MS4wNDY3Yy0uOTg0OS4yMjI0LTEuOTY3OS40NjAzLTIuOTQ5OS43MTM3LDIuMTUzNCw1Ljg0NTYsNC4yOTQ0LDExLjY5NzgsNi40MjMxLDE3LjU1NjUsMi4xOTYyLTUuODUwNCw0LjMzNzMtMTEuNzE4NCw2LjQyMzEtMTcuNjA0MS0uOTUxNi0uMjIyLTEuOTAzMS0uNDQ0MS0yLjg1NDctLjY2NjF2LTEuMDQ2N2MyLjMxNjEtLjAxNTksNC42MzEzLDAsNi45NDY1LjA0NzYuMDkxMy4zMjMuMTIyOC42NTYuMDk1Mi45OTkxLS44NDMxLjE5NjMtMS42NjcyLjQ1MDEtMi40NzQxLjc2MTMtMi42ODA2LDcuMzI3MS01LjM2MDIsMTQuNjU0Mi04LjA0MDgsMjEuOTgxMy0uMzcyMS4xMjMzLS43Njg5LjE4NjgtMS4xODk1LjE5MDMtLjQyMDYtLjAwMzUtLjgxNzQtLjA2Ny0xLjE4OTUtLjE5MDMtMi43NTY3LTcuMzMxNS01LjUzMjQtMTQuNjkwNC04LjMyNjItMjIuMDc2NS0uMDU2MS4wMTk5LS4xMDM3LjA1MTctLjE0MjcuMDk1Mi0uNzA4OS0uMzQ4MS0xLjQ1NC0uNjAxOS0yLjIzNjItLjc2MTN2LTEuMDQ2N1oiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTY1Ii8+CiAgPHBhdGggZD0iTTE4NS4zOTg1LDE1LjEzaDE4Ljg0MTFjLjE2NTYsMS43NDM5LjMyNDUsMy40ODg2LjQ3NTgsNS4yMzM2LS4yOTIxLjAzMDItLjU3NzYtLjAwMTUtLjg1NjQtLjA5NTItLjU3NzYtMS4yNjc5LTEuMTQ4Ni0yLjUwNDktMS43MTI4LTMuNzExMS0xLjgwNy0uMDk1Mi0zLjYxNS0uMTI2OC01LjQyNC0uMDk1MnYyMC40NTg4YzEuMDc4MS4yMjIxLDIuMTU3Mi40NDQxLDMuMjM1My42NjYxdjEuMDQ2N2MtMy40MjU3LjAxNTktNi44NTEzLDAtMTAuMjc3LS4wNDc2LS4xMjY2LS4zMTcyLS4xMjY2LS42MzQ0LDAtLjk1MTYsMS4wNzM0LS4yNjgzLDIuMTUxNS0uNTA2MiwzLjIzNTMtLjcxMzd2LTIwLjQ1ODhjLTEuODA4LS4wMTU5LTMuNjE2LDAtNS40MjQuMDQ3Ni0uNjI1MiwxLjIzNDMtMS4yMTIzLDIuNDg3MS0xLjc2MDQsMy43NTg3LS4yOTEyLjA5MDUtLjU5MTkuMTIyMi0uOTA0LjA5NTIuMTU4LTEuNzMyNi4zNDgzLTMuNDc3MS41NzA5LTUuMjMzNloiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTQ4Ii8+CiAgPHBhdGggZD0iTTIxMC4zMjk3LDE1LjAzNDhjMy4zNDc2LjExMjcsNi42OTQzLjExMjcsMTAuMDM5MSwwLC4yMTcuMzA0NC4yOTU5LjY1MzMuMjM3OSwxLjA0NjctMS4wNzgxLjIyMi0yLjE1NzIuNDQ0MS0zLjIzNTMuNjY2MXYyMC4xNzMzYzEuMDQ5Ni4yMTk0LDIuMDk2My40NTczLDMuMTQwMi43MTM3LjA5MTMuMzIzLjEyMjguNjU2LjA5NTIuOTk5MS0zLjQyNTcuMDE1OS02Ljg1MTMsMC0xMC4yNzctLjA0NzYtLjEyNjYtLjMxNzItLjEyNjYtLjYzNDQsMC0uOTUxNiwxLjA3MzQtLjI2ODMsMi4xNTE1LS41MDYyLDMuMjM1My0uNzEzNy4wMTYyLTYuNjkyOCwwLTEzLjM4NTUtLjA0NzYtMjAuMDc4Mi0xLjA4LS4zMDU3LTIuMTc0My0uNTU5NS0zLjI4MjktLjc2MTMtLjAyNDctLjM1ODYuMDA3Ni0uNzA3Ni4wOTUyLTEuMDQ2N1oiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTYxIi8+CiAgPHBhdGggZD0iTTI5LjA1NTQsMTkuMDMxNGMyLjU5NzUsMS4wNDMzLDQuNDM3MywyLjg1MTMsNS41MTkxLDUuNDI0LjE5MzYuNzM3OC4zODQsMS40NjcyLjU3MDksMi4xODg2LjE2ODUsMS40NTQ0LjA0MTcsMi44ODE3LS4zODA2LDQuMjgyMS4wMTE4LjA1NzguMDQzNS4wODk0LjA5NTIuMDk1Mi0uMDMxNy4xMjY4LS4wNjM1LjI1MzgtLjA5NTIuMzgwNi0uMDgzNC0uMDEyNS0uMTQ2OC4wMTkyLS4xOTAzLjA5NTItLjE4NjkuNDA0OC0uMzQ1NS44MTcyLS40NzU4LDEuMjM3LS44NTQyLDEuNTY4My0yLjAyNzgsMi44NTI5LTMuNTIwOCwzLjg1MzktMS41ODQzLDEuMDYxOC0zLjI5NzEsMS44Mzg5LTUuMTM4NSwyLjMzMTMtLjg1OTMuMTc1Mi0xLjcxNTcuMzY1NS0yLjU2OTIuNTcwOS0uMTM5Ni0uMDIxMi0uMjgyMy0uMDUyOS0uNDI4Mi0uMDk1Mi0uMDMxNy4wNjM1LS4wNjM1LjEyNjgtLjA5NTIuMTkwMy0uMTIwNy0uMDExLS4yNDc2LS4wNDI3LS4zODA2LS4wOTUyLS4wNjM1LjA2MzUtLjEyNjguMTI2OC0uMTkwMy4xOTAzLS4wNzA1LS4xMDg2LS4xNDk5LS4xMDg2LS4yMzc5LDAtLjIzNjMtLjQ1NjQtLjQ5MDEtLjkwMDQtLjc2MTMtMS4zMzIyLjExMzEtLjA4ODQuMjQtLjEyMDEuMzgwNi0uMDk1Mi0uMDA4My4yOTQ4LjAzOTMuMzI2Ni4xNDI3LjA5NTIuMDMxNy4wNjM1LjA2MzUuMTI2OC4wOTUyLjE5MDMuMTQ3OC0uMzYxNS4yNzQ2LS4zNjE1LjM4MDYsMCwuMTA2NC0uMjE1NS4xODU3LS40Mzc2LjIzNzktLjY2NjEuNDEyNy0uMDg0Ni43OTMzLS4yNDMyLDEuMTQxOS0uNDc1OCwyLjcxMjQtMS4zNzI2LDQuNjQ3Mi0zLjQ2NjEsNS44MDQ2LTYuMjgwNC42MjE5LTEuNTgzLjgyODItMy4yMzI0LjYxODUtNC45NDgyLS4wMzg3LS4zMDI4LS4wODYzLS42MDQyLS4xNDI3LS45MDQtLjAxNzUtLjEzMDktLjA4MS0uMjEwMi0uMTkwMy0uMjM3OS0uNjA4MS0yLjgzNjctMi4xMzA2LTUuMDI1My00LjU2NzUtNi41NjU4LS4wNTkyLS4xNzQ2LS4xODYxLS4yODU3LS4zODA2LS4zMzMsMS42MzAzLS4wNDExLDMuMjAwNC4yOTE5LDQuNzEwMy45OTkxLjAzOC0uMDIxNy4wNTM4LS4wNTM1LjA0NzYtLjA5NTJaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBkPSJNMjkuMDU1NCwxOS4wMzE0Yy4wMDYyLjA0MTctLjAwOTYuMDczNS0uMDQ3Ni4wOTUyLTEuNTA5OS0uNzA3Mi0zLjA4LTEuMDQwMy00LjcxMDMtLjk5OTEuMTk0NS4wNDc0LjMyMTQuMTU4NC4zODA2LjMzMy0uMjg5MS0uMDUxNi0uNDMxOC0uMjEwMi0uNDI4Mi0uNDc1OCwxLjY4MS0uMDE5OSwzLjI4MjguMzI5MSw0LjgwNTQsMS4wNDY3WiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii41MTUiLz4KICA8cGF0aCBkPSJNMzQuNTc0NSwyNC40NTU0Yy4zMDI4LjYyNC40OTMxLDEuMjkwMS41NzA5LDEuOTk4M3YuMTkwM2MtLjE4Ny0uNzIxNC0uMzc3My0xLjQ1MDktLjU3MDktMi4xODg2WiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii4zOTciLz4KICA8cGF0aCBkPSJNMjkuMjQ1NywyNS4wMjYzYy4xMDkzLjAyNzcuMTcyOC4xMDcuMTkwMy4yMzc5LjA1NjQuMjk5OC4xMDQuNjAxMi4xNDI3LjkwNC4yMDk2LDEuNzE1OC4wMDM0LDMuMzY1MS0uNjE4NSw0Ljk0ODIuNjI1Ny0yLjAwNjIuNzIwOC00LjAzNjIuMjg1NS02LjA5MDFaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlzb2xhdGlvbj0iaXNvbGF0ZSIgb3BhY2l0eT0iLjI1MSIvPgogIDxwYXRoIGQ9Ik0zNS4xNDU0LDI2LjQ1MzdjLjMwOTksMS41Mzc2LjIxNDgsMy4wNjAyLS4yODU1LDQuNTY3NS0uMDUxNy0uMDA1Ny0uMDgzNC0uMDM3NC0uMDk1Mi0uMDk1Mi40MjIzLTEuNDAwMy41NDkyLTIuODI3Ny4zODA2LTQuMjgyMXYtLjE5MDNaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlzb2xhdGlvbj0iaXNvbGF0ZSIgb3BhY2l0eT0iLjQ5NSIvPgogIDxwYXRoIGQ9Ik0uMDMyNCwyOC4zNTY4Yy4xNTI3LjA3NDkuMjE2MS4yMDE3LjE5MDMuMzgwNi0uMTExNy0uMDk2NS0uMTc1MS0uMjIzMy0uMTkwMy0uMzgwNloiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuMDc1Ii8+CiAgPHBhdGggZD0iTTM0Ljc2NDgsMzEuNDAxOGMtLjE3MzUuNDczOS0uMzk1Ni45MTgtLjY2NjEsMS4zMzIyLjEzMDMtLjQxOTguMjg4OS0uODMyMi40NzU4LTEuMjM3LjA0MzUtLjA3NTkuMTA3LS4xMDc2LjE5MDMtLjA5NTJaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlzb2xhdGlvbj0iaXNvbGF0ZSIgb3BhY2l0eT0iLjQ3MSIvPgogIDxwYXRoIGQ9Ik0yMy4xNTU2LDM3LjM5NjdjLS4zNDg2LjIzMjYtLjcyOTIuMzkxMi0xLjE0MTkuNDc1OC0uMDUyMi4yMjg1LS4xMzE1LjQ1MDYtLjIzNzkuNjY2MS0uMTA2LS4zNjE1LS4yMzI5LS4zNjE1LS4zODA2LDAtLjAzMTctLjA2MzUtLjA2MzUtLjEyNjgtLjA5NTItLjE5MDMtLjEwMzQuMjMxNC0uMTUxLjE5OTYtLjE0MjctLjA5NTItLjE0MDYtLjAyNDktLjI2NzUuMDA2OC0uMzgwNi4wOTUyLjI3MTIuNDMxOC41MjUuODc1OC43NjEzLDEuMzMyMi4wODgtLjEwODYuMTY3NC0uMTA4Ni4yMzc5LDAsLjA2MzUtLjA2MzUuMTI2OC0uMTI2OC4xOTAzLS4xOTAzLjEzMy4wNTI0LjI2LjA4NDEuMzgwNi4wOTUyLjAzMTctLjA2MzUuMDYzNS0uMTI2OC4wOTUyLS4xOTAzLjE0NTkuMDQyMi4yODg2LjA3MzkuNDI4Mi4wOTUyLjg1MzYtLjIwNTQsMS43MS0uMzk1OCwyLjU2OTItLjU3MDktLjkxOC4zMjQ3LTEuODY5Ni41NjI2LTIuODU0Ny43MTM3LTIuOTAzMi40MzYtNS43ODk3LjQ4MzYtOC42NTkzLjE0MjcuMTU0NS4wMTMzLjI2NTUtLjA1MDEuMzMzLS4xOTAzLjA2MzUuMjUzOC4xMjY4LjI1MzguMTkwMywwLC4wNzY2LjIyODUuMTU1OS4yMTI2LjIzNzktLjA0NzYtLjAwODEtLjI4MzYtLjAzOTktLjU2OS0uMDk1Mi0uODU2NGwuMTQyNy0uMTQyN2MuMDA2My4yNjQyLjExNzIuNDcwMy4zMzMuNjE4NS0uMjUzOC4xOTAzLS4yNTM4LjM4MDYsMCwuNTcwOS0uMDMxNy4wMzE3LS4wNjM1LjA2MzUtLjA5NTIuMDk1Mi4xMzc0LjA3NDMuMjY0My4wNTg0LjM4MDYtLjA0NzYtLjAxODUtLjE0OTQtLjAxODUtLjI5MjEsMC0uNDI4Mi0uMDY4LS4xOTgtLjE2MzItLjQwNDEtLjI4NTUtLjYxODUuMDk3NC0uMTI4Ny4xOTI2LS4yNTU1LjI4NTUtLjM4MDYsMi42OTA5LjM2OTQsNS4yOTE4LjA1MjEsNy44MDI5LS45NTE2WiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii45NDYiLz4KICA8cGF0aCBkPSJNOTkuNzU3MSwzOC41Mzg2cS4xMjY2LjA2MzUsMCwwWiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii4wNzUiLz4KICA8cGF0aCBkPSJNMTIuNDk4LDM3LjY4MjJjLjkyOTEuMzExNSwxLjg4MDcuNTMzNSwyLjg1NDcuNjY2MS0uMDkyOS4xMjUxLS4xODguMjUyLS4yODU1LjM4MDYuMTIyMy4yMTQ0LjIxNzQuNDIwNS4yODU1LjYxODUtLjAxODUuMTM2MS0uMDE4NS4yNzg4LDAsLjQyODItLjExNjQuMTA2LS4yNDMyLjEyMTktLjM4MDYuMDQ3Ni4wMzE3LS4wMzE3LjA2MzUtLjA2MzUuMDk1Mi0uMDk1Mi0uMjUzOC0uMTkwMy0uMjUzOC0uMzgwNiwwLS41NzA5LS4yMTU4LS4xNDgzLS4zMjY4LS4zNTQ0LS4zMzMtLjYxODVsLS4xNDI3LjE0MjdjLjA1NTMuMjg3NC4wODcxLjU3MjguMDk1Mi44NTY0LS4wODIuMjYwMi0uMTYxMy4yNzYxLS4yMzc5LjA0NzYtLjA2MzUuMjUzOC0uMTI2OC4yNTM4LS4xOTAzLDAtLjA2NzYuMTQwMi0uMTc4NS4yMDM2LS4zMzMuMTkwMy0uNDk5Ni4wMTg4LS45NzU0LS4wNDQ2LTEuNDI3NC0uMTkwMy4xODcyLjAyMjcuMzYxNy0uMDA4OS41MjM0LS4wOTUyLjEzOTUuMTczNy4zMTM5LjIyMTIuNTIzNC4xNDI3LjAyNDUtLjI0MTIuMDg3OS0uNDYzMy4xOTAzLS42NjYxLS4xODAyLS4xMDQ4LS4yNDM3LS4yMzE2LS4xOTAzLS4zODA2LjI2NDMtLjIwNjguMjQ4NC0uMjU0NC0uMDQ3Ni0uMTQyNy0uMjA2Mi0uMTQyNy0uMTkwMy0uMjUzOC4wNDc2LS4zMzMtLjMwMzQtLjA3MTgtLjYwNDctLjE1MTItLjkwNC0uMjM3OS0uMDk4LS4wMzItLjE0NTYtLjA5NTQtLjE0MjctLjE5MDNaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+", alt: "Novartis", h: 18 },
                ].map(({ src, alt, h }) => (
                  <img key={alt} src={src} alt={alt} style={{ height: mobile ? Math.min(h, 16) : h, width: "auto", opacity: 0.32 }} />
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {/* Sub-line: context */}
            <div>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: C.g300, lineHeight: 1.5, fontWeight: 400 }}>
                The insights behind TARGA come from decades of transformation work with Fortune 50 leadership teams.
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section style={{ background: "linear-gradient(180deg," + C.slate + " 0%," + C.slateMid + " 100%)", padding: mobile ? "48px 20px 60px" : "60px 40px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: mobile ? "1fr" : tablet ? "1fr 1fr" : "repeat(3,1fr)", gap: 24, alignItems: "stretch", position: "relative", zIndex: 3 }}>
          {[
            { t: "Clarity", d: "Real-time executive dashboards that surface what matters — goals, gaps, and the teams driving them. See the whole picture without the quarterly scramble.", a: C.white },
            { t: "Speed to Action", d: "Accelerate value creation across every quarter. When leaders have clarity, decisions happen in days — not the two weeks before a board review.", a: C.teal },
            { t: "Accountability in Execution", d: "Every initiative tied to an owner, a timeline, and a value outcome. Progress measured in enterprise value — not tasks completed.", a: C.gold },
          ].map(({ t, d, a }, i) => (
            <Reveal key={t} delay={i * 0.1} style={{ height: "100%" }}><HoverCard title={t} desc={d} accent={a} /></Reveal>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section style={{ background: "linear-gradient(165deg," + C.navy + " 0%," + C.navyMid + " 100%)", padding: mobile ? "60px 20px" : "100px 40px", position: "relative" }}>
        {!mobile && <div style={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: "repeating-linear-gradient(45deg," + C.teal + " 0," + C.teal + " 1px,transparent 0,transparent 50%)", backgroundSize: "60px 60px", pointerEvents: "none" }} />}
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 32 : 64 }}>
          <Reveal><div><Eyebrow color={C.gold}>Why TARGA</Eyebrow><SectionTitle sub="TARGA is an intelligent strategic advisor that understands your business in context — surfacing what you need to act on, flagging what you would not think to ask about, and giving you the clarity to move with confidence.">Executive hypercollaboration — not on-the-fly leadership.</SectionTitle></div></Reveal>
          <Reveal delay={0.15}>
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: C.g300, marginBottom: 24 }}>Elite companies invest a disciplined portion of their gross margin in strategic value creation. They outperform because they have the infrastructure to identify, fund, and execute the initiatives that matter most.</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", lineHeight: 1.7, color: C.gold, marginBottom: 28, padding: "14px 18px", background: "rgba(251,191,36,0.04)", borderLeft: "2px solid rgba(251,191,36,0.3)", borderRadius: "0 6px 6px 0" }}>Most organizations know what to do. They lack the infrastructure to ensure it gets done.</p>
              <FrameworkChart />
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXECUTION GAP */}
      <section style={{ background: "linear-gradient(180deg," + C.slateMid + " 0%," + C.slate + " 100%)", padding: mobile ? "48px 20px" : "72px 40px", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent 0%,rgba(14,178,175,0.2) 50%,transparent 100%)" }} />
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
              {[
                { v: "85", sfx: "%", d: "of executives cite internal barriers — not market conditions — as the top obstacle to growth.", s: "McKinsey" },
                { v: "90", sfx: "%", d: "year-over-year correlation in capital spending. The opportunity: redirect even a fraction toward value creation.", s: "Deloitte" },
                { v: "67", sfx: "%", d: "of well-formulated strategies underperform in execution. The strategy is not the problem — the infrastructure is.", s: "Bain & Company" },
              ].map(({ v, sfx, d, s }, i) => (
                <Reveal key={v} delay={i * 0.1}>
                <div style={{ padding: "28px 20px", background: "rgba(14,178,175,0.03)", borderRadius: 10, border: "1px solid rgba(14,178,175,0.06)" }}>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "2.2rem", fontWeight: 500, color: C.teal, marginBottom: 12 }}><AnimatedStat value={v} suffix={sfx} /></div>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", lineHeight: 1.7, color: C.g300, fontWeight: 400 }}>{d}</p>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", color: C.g500, marginTop: 8, fontStyle: "italic" }}>— {s}</p>
                </div>
                </Reveal>
              ))}
            </div>
        </div>
      </section>

      {/* BRIDGE — connects the problem to the solution */}
      <section style={{ background: "linear-gradient(180deg," + C.navyDark + " 0%," + C.navyDeep + " 100%)", padding: mobile ? "48px 20px" : "80px 40px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", width: 1, height: mobile ? 32 : 48, background: "linear-gradient(180deg," + C.teal + " 0%,transparent 100%)", transform: "translateX(-50%)" }} />
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 300, color: C.white, lineHeight: 1.5, marginBottom: 12 }}>
              What if you could see it all — <span style={{ color: C.teal }}>at a glance?</span>
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", color: C.g500, lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
              Clarity of focus. Speed to action. A single view that shows you whether your highest-value initiatives are on track — or not.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3D DASHBOARD */}
      <section style={{ background: C.navyDeep, padding: mobile ? "60px 20px" : "100px 40px", overflow: "visible", position: "relative" }}>
        {!mobile && <div style={{ position: "absolute", inset: 0, opacity: 0.015, backgroundImage: "linear-gradient(rgba(14,178,175,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(14,178,175,0.5) 1px,transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />}
        <div style={{ maxWidth: 1050, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal><div style={{ textAlign: "center", marginBottom: mobile ? 32 : 48 }}><Eyebrow color={C.teal}>The Platform</Eyebrow><SectionTitle align="center">Clarity at a Glance. Speed to Action.</SectionTitle></div></Reveal>
          <PerspectiveDashboard />
          <Reveal delay={0.3}><div style={{ textAlign: "center", marginTop: 48 }}><Btn onClick={() => { setPage("platform"); window.scrollTo(0, 0); }}>Explore the Platform →</Btn></div></Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "linear-gradient(165deg," + C.slate + " 0%," + C.slateMid + " 100%)", padding: mobile ? "60px 20px" : "100px 40px", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent 0%,rgba(251,191,36,0.15) 50%,transparent 100%)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal><div style={{ textAlign: "center", marginBottom: mobile ? 32 : 48 }}><Eyebrow color={C.gold}>What Leaders Are Saying</Eyebrow></div></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr", gap: mobile ? 24 : 24 }}>
            {[
              { text: "For the first time, I can see across all my strategic initiatives in one place. No spreadsheets, no chasing updates. Just clarity.", name: "Sarah Mitchell", title: "VP Strategic Initiatives", tag: "Early Design Partner" },
              { text: "This is what I have been asking my team to build internally for years. TARGA does it out of the box — and the AI layer makes it actually useful.", name: "Dan Kowalski", title: "COO, Mid-Market Manufacturing", tag: "Pilot Participant" },
              { text: "We went from quarterly fire drills to continuous visibility in weeks. My board noticed the difference before I even told them what changed.", name: "Rachel Chen", title: "CEO, Growth-Stage SaaS", tag: "Early Adopter" },
            ].map((q, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: "rgba(14,178,175,0.03)", border: "1px solid rgba(14,178,175,0.08)", borderRadius: 12, padding: mobile ? "28px 24px" : "32px 28px", position: "relative", height: "100%" }}>
                  <div style={{ position: "absolute", top: 12, left: 20, fontFamily: "'Space Grotesk',sans-serif", fontSize: "3rem", color: "rgba(14,178,175,0.08)", lineHeight: 1, userSelect: "none" }}>"</div>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", lineHeight: 1.75, color: C.g300, fontStyle: "italic", marginBottom: 24, position: "relative", zIndex: 1 }}>"{q.text}"</p>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.85rem", color: C.white, fontWeight: 500, marginBottom: 2 }}>{q.name}</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.72rem", color: C.g500, marginBottom: 10 }}>{q.title}</div>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: C.teal, background: "rgba(14,178,175,0.08)", padding: "3px 9px", borderRadius: 4, letterSpacing: "0.3px" }}>{q.tag}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 100 CEOS TEASER */}
      <section style={{ background: C.navy, padding: mobile ? "60px 20px" : "100px 40px", textAlign: "center" }}>
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
      <section style={{ background: C.navyDeep, padding: mobile ? "60px 20px" : "100px 40px", textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1.5rem,2.5vw,2.1rem)", fontWeight: 300, color: C.white, marginBottom: 16 }}>Ready to lead differently?</h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", color: C.g300, marginBottom: 32 }}>Schedule a conversation with the TARGA AI team.</p>
          <Btn onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Schedule a Conversation</Btn>
          {/* Trust signals */}
          <div style={{ display: "flex", justifyContent: "center", gap: mobile ? 16 : 32, marginTop: mobile ? 32 : 48, paddingTop: 32, borderTop: "1px solid rgba(14,178,175,0.06)", flexWrap: mobile ? "wrap" : "nowrap" }}>
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
  const { mobile } = useMedia();
  return (
    <>
      <section style={{ background: "linear-gradient(165deg," + C.navyDeep + " 0%," + C.navy + " 100%)", padding: mobile ? "120px 20px 60px" : "160px 40px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}><Eyebrow>The Platform</Eyebrow><h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-1px", color: C.white, maxWidth: 600, marginBottom: 20 }}>Your executive team deserves better than spreadsheets and slide decks.</h1><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: C.g300, maxWidth: 520 }}>TARGA AI is a leadership platform that gives C-suite teams continuous visibility into what is creating enterprise value — and what is not.</p></div>
      </section>

      <section style={{ background: C.navy, padding: mobile ? "48px 20px" : "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 16 : 32 }}>
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

      <section style={{ background: C.navyDeep, padding: mobile ? "48px 20px" : "80px 40px", overflow: "visible" }}>
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

      <section style={{ background: C.navy, padding: mobile ? "48px 20px" : "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal><Eyebrow>How It Works</Eyebrow><SectionTitle>From strategy to execution in three steps.</SectionTitle></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr", gap: 32, marginTop: mobile ? 32 : 48 }}>
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

      <section style={{ background: C.navyDeep, padding: mobile ? "48px 20px" : "80px 40px", textAlign: "center" }}>
        <Reveal><h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1.4rem,2vw,1.8rem)", fontWeight: 300, color: C.white, marginBottom: 20 }}>See it in action.</h2><Btn onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Request More Information</Btn></Reveal>
      </section>
    </>
  );
}

/* ═══ PAGE: ABOUT ═══ */
function AboutPage({ setPage }) {
  const { mobile } = useMedia();
  return (
    <>
      <section style={{ background: "linear-gradient(165deg," + C.navyDeep + " 0%," + C.navy + " 100%)", padding: mobile ? "120px 20px 60px" : "160px 40px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}><Eyebrow color={C.gold}>About TARGA AI</Eyebrow><h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-1px", color: C.white, maxWidth: 650, marginBottom: 20 }}>An intelligent advisor for the executives who create enterprise value.</h1><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: C.g300, maxWidth: 560 }}>TARGA AI exists because the gap between setting strategy and executing it is the most expensive problem in enterprise management. We are building a platform that starts at the strategic level and gives leaders the clarity, speed, and accountability to close that gap.</p></div>
      </section>
      <section style={{ background: C.navy, padding: mobile ? "48px 20px" : "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 32 : 64 }}>
          <Reveal><div><Eyebrow>Mission</Eyebrow><SectionTitle>Speed and clarity for enterprise value creation.</SectionTitle></div></Reveal>
          <Reveal delay={0.15}><div><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: C.g300, marginBottom: 20 }}>Every quarter, executive teams spend eight weeks preparing for a meeting and two weeks doing the work that actually creates value. TARGA flips that equation.</p><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: C.g300 }}>Our AI-native platform gives leaders continuous cross-functional visibility — so strategic initiatives move forward every week, not just in the sprint before a board review.</p></div></Reveal>
        </div>
      </section>

      {/* HERITAGE PROOF — expanded on About page */}
      <section style={{ background: C.navy, padding: mobile ? "0 20px 48px" : "0 40px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ background: "rgba(14,178,175,0.02)", border: "1px solid rgba(14,178,175,0.06)", borderRadius: 12, padding: mobile ? "24px 20px" : "40px 44px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 32, height: 1, background: C.g500 }} />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "1.8px", color: C.g500, textTransform: "uppercase" }}>Proven across the Fortune 500</span>
              </div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.92rem", lineHeight: 1.75, color: C.g300, maxWidth: 560, marginBottom: 32 }}>
                TARGA was built on decades of hands-on transformation work with the world's most demanding leadership teams. The methodology behind the platform was forged inside these organizations.
              </p>
              <div style={{ display: mobile ? "grid" : "flex", gridTemplateColumns: mobile ? "repeat(4, auto)" : undefined, gap: mobile ? "14px 20px" : 0, alignItems: "center", justifyItems: mobile ? "center" : undefined, justifyContent: mobile ? undefined : "space-between", paddingTop: 24, borderTop: "1px solid rgba(14,178,175,0.06)", flexWrap: mobile ? undefined : "nowrap" }}>
                {[
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4PSJuc19leHRlbmQ7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0MjkuMDIwOSA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8cGF0aCBkPSJNNDIuNDI0MiwzNi41Nzc1Yy00LjIwNjgsMC02LjU1OTctMy45OTI5LTYuNTU5Ny0xMS4xOTQzLDAtNy4zNDQsMi4zNTI5LTExLjE5NDMsNi41NTk3LTExLjE5NDNzNi41NTk3LDMuOTIxNiw2LjU1OTcsMTEuMTk0M2MwLDcuMzQ0LTIuMzUyOSwxMS4xOTQzLTYuNTU5NywxMS4xOTQzWk00Mi40MjQyLDExLjI2NTZjLTguNTU2MSwwLTEzLjMzMzMsNi40MTcxLTEzLjMzMzMsMTQuMTg4OXM0Ljc3NzIsMTQuMTg4OSwxMy4zMzMzLDE0LjE4ODksMTMuMzMzMy02LjQxNzEsMTMuMzMzMy0xNC4xODg5YzAtNy44NDMxLTQuNzc3Mi0xNC4xODg5LTEzLjMzMzMtMTQuMTg4OVpNMTAxLjk2MDgsMTEuMjY1NmMtNC4wNjQyLDAtNi4yNzQ1LDEuNzgyNS03LjU1NzksMy45OTI5aC0uMjg1MnYtMy40MjI1aC02LjQxNzF2MjcuMzA4NGg2LjQxNzF2LTE3LjY4MjdjMC00LjA2NDIsMi4wNjc3LTYuNDE3MSw1LjQxODktNi40MTcxLDMuMjA4NiwwLDQuNjM0NiwyLjEzOSw0LjYzNDYsNS4zNDc2djE4LjY4MDloNi40MTcxdi0xOC43NTIyYzAtNS42MzI4LTIuOTk0Ny05LjA1NTMtOC42Mjc1LTkuMDU1M1pNMTI1LjIwNSwxMS4yNjU2Yy01LjkxOCwwLTEwLjQxLDIuNDk1NS0xMC40MSw3Ljg0MzEsMCw0LjU2MzMsMy4xMzczLDYuOTg3NSw2LjYzMSw3Ljg0MzFsNS40MTg5LDEuMzU0N2MyLjkyMzQuNzEzLDQuMjA2OCwxLjc4MjUsNC4yMDY4LDQuMDY0MiwwLDIuNzgwNy0xLjk5NjQsNC4zNDk0LTUuNDE4OSw0LjM0OTQtMy43MDc3LDAtNS42MzI4LTEuNzgyNS02LjIwMzItNi4zNDU4bC01Ljc3NTQsMS42Mzk5Yy4zNTY1LDQuNzA1OSw0LjcwNTksNy41NTc5LDExLjI2NTYsNy41NTc5LDcuMzQ0LDAsMTEuMzM2OS0zLjQyMjUsMTEuMzM2OS04LjkxMjcsMC01LjEzMzctMy41NjUxLTcuMjcyNy03LjI3MjctOC4xOTk2bC01LjIwNS0xLjI4MzRjLTIuNjM4MS0uNjQxNy0zLjc3OS0xLjg1MzgtMy43NzktMy42MzY0LDAtMi4yMTAzLDEuODUzOC0zLjQ5MzgsNC42MzQ2LTMuNDkzOCwzLjI3OTksMCw1LjI3NjMsMS43ODI1LDUuNTYxNSw1LjIwNWw1LjQxODktMS42Mzk5Yy0uNjQxNy0zLjcwNzctNC40MjA3LTYuMzQ1OC0xMC40MS02LjM0NThaTTE1Mi4yMjgyLDM2LjU3NzVjLTQuMjA2OCwwLTYuNTU5Ny0zLjk5MjktNi41NTk3LTExLjE5NDMsMC03LjM0NCwyLjM1MjktMTEuMTk0Myw2LjU1OTctMTEuMTk0M3M2LjU1OTcsMy45MjE2LDYuNTU5NywxMS4xOTQzYzAsNy4zNDQtMi4zNTI5LDExLjE5NDMtNi41NTk3LDExLjE5NDNaTTE1Mi4yMjgyLDExLjI2NTZjLTguNTU2MSwwLTEzLjMzMzMsNi40MTcxLTEzLjMzMzMsMTQuMTg4OXM0Ljc3NzIsMTQuMTg4OSwxMy4zMzMzLDE0LjE4ODksMTMuMzMzMy02LjQxNzEsMTMuMzMzMy0xNC4xODg5YzAtNy44NDMxLTQuNzc3Mi0xNC4xODg5LTEzLjMzMzMtMTQuMTg4OVpNMTgzLjY3MiwxMS4yNjU2Yy00LjA2NDIsMC02LjI3NDUsMS43ODI1LTcuNTU3OSwzLjk5MjloLS4zNTY1di0zLjQyMjVoLTYuNDE3MXYyNy4zMDg0aDYuNDE3MXYtMTcuNjgyN2MwLTQuMDY0MiwyLjA2NzctNi40MTcxLDUuNDE4OS02LjQxNzEsMy4yMDg2LDAsNC42MzQ2LDIuMTM5LDQuNjM0Niw1LjM0NzZ2MTguNjgwOWg2LjQxNzF2LTE4Ljc1MjJjMC01LjYzMjgtMi45MjM0LTkuMDU1My04LjU1NjEtOS4wNTUzWk0yNzkuMjg3LDM2LjU3NzVjLTQuMjA2OCwwLTYuNTU5Ny0zLjk5MjktNi41NTk3LTExLjE5NDMsMC03LjM0NCwyLjM1MjktMTEuMTk0Myw2LjU1OTctMTEuMTk0M3M2LjU1OTcsMy45MjE2LDYuNTU5NywxMS4xOTQzYy0uMDcxMyw3LjM0NC0yLjM1MywxMS4xOTQzLTYuNTU5NywxMS4xOTQzWk0yNzkuMjg3LDExLjI2NTZjLTguNTU2MSwwLTEzLjMzMzMsNi40MTcxLTEzLjMzMzMsMTQuMTg4OXM0Ljc3NzIsMTQuMTg4OSwxMy4zMzMzLDE0LjE4ODksMTMuMzMzMy02LjQxNzEsMTMuMzMzMy0xNC4xODg5Yy0uMDcxMy03Ljg0MzEtNC43NzcyLTE0LjE4ODktMTMuMzMzMy0xNC4xODg5Wk0zMzguNzUyMiwxMS4yNjU2Yy00LjA2NDIsMC02LjI3NDUsMS43ODI1LTcuNTU3OSwzLjk5MjloLS4zNTY1di0zLjQyMjVoLTYuNDE3MXYyNy4zMDg0aDYuNDE3MXYtMTcuNjgyN2MwLTQuMDY0MiwyLjA2NzctNi40MTcxLDUuNDE4OS02LjQxNzEsMy4yMDg2LDAsNC42MzQ2LDIuMTM5LDQuNjM0Niw1LjM0NzZ2MTguNjgwOWg2LjQxNzF2LTE4Ljc1MjJjLjA3MTMtNS42MzI4LTIuODUyLTkuMDU1My04LjU1NjEtOS4wNTUzWk0zNjEuOTk2NSwxMS4yNjU2Yy01LjkxOCwwLTEwLjQxLDIuNDk1NS0xMC40MSw3Ljg0MzEsMCw0LjU2MzMsMy4xMzczLDYuOTg3NSw2LjYzMSw3Ljg0MzFsNS40MTg5LDEuMzU0N2MyLjkyMzMuNzEzLDQuMjA2OCwxLjc4MjUsNC4yMDY4LDQuMDY0MiwwLDIuNzgwNy0xLjk5NjQsNC4zNDk0LTUuNDE4OSw0LjM0OTQtMy43MDc3LDAtNS42MzI4LTEuNzgyNS02LjIwMzItNi4zNDU4bC01Ljc3NTQsMS42Mzk5Yy4zNTY1LDQuNzA1OSw0LjcwNTksNy41NTc5LDExLjI2NTYsNy41NTc5LDcuMzQ0LDAsMTEuMzM2OS0zLjQyMjUsMTEuMzM2OS04LjkxMjcsMC01LjEzMzctMy41NjUxLTcuMjcyNy03LjI3MjctOC4xOTk2bC01LjIwNS0xLjI4MzRjLTIuNjM4Mi0uNjQxNy0zLjc3OS0xLjg1MzgtMy43NzktMy42MzY0LDAtMi4yMTAzLDEuODUzOC0zLjQ5MzgsNC42MzQ2LTMuNDkzOCwzLjI3OTksMCw1LjI3NjMsMS43ODI1LDUuNTYxNSw1LjIwNWw1LjQxODktMS42Mzk5Yy0uNTcwNC0zLjcwNzctNC4zNDk0LTYuMzQ1OC0xMC40MS02LjM0NThaTTM4OS4wOTA5LDM2LjU3NzVjLTQuMjA2OCwwLTYuNTU5Ny0zLjk5MjktNi41NTk3LTExLjE5NDMsMC03LjM0NCwyLjM1MjktMTEuMTk0Myw2LjU1OTctMTEuMTk0M3M2LjU1OTcsMy45MjE2LDYuNTU5NywxMS4xOTQzYy0uMDcxMyw3LjM0NC0yLjQyNDMsMTEuMTk0My02LjU1OTcsMTEuMTk0M1pNMzg5LjA5MDksMTEuMjY1NmMtOC41NTYxLDAtMTMuMzMzMyw2LjQxNzEtMTMuMzMzMywxNC4xODg5czQuNzc3MiwxNC4xODg5LDEzLjMzMzMsMTQuMTg4OSwxMy4zMzMzLTYuNDE3MSwxMy4zMzMzLTE0LjE4ODljLS4wNzEzLTcuODQzMS00Ljc3NzItMTQuMTg4OS0xMy4zMzMzLTE0LjE4ODlaTTQyMC40NjM1LDExLjI2NTZjLTQuMDY0MiwwLTYuMjc0NSwxLjc4MjUtNy41NTc5LDMuOTkyOWgtLjM1NjV2LTMuNDIyNWgtNi40MTcxdjI3LjMwODRoNi40MTcxdi0xNy42ODI3YzAtNC4wNjQyLDIuMDY3OC02LjQxNzEsNS40MTg5LTYuNDE3MSwzLjIwODYsMCw0LjYzNDYsMi4xMzksNC42MzQ2LDUuMzQ3NnYxOC42ODA5aDYuNDE3MXYtMTguNzUyMmMuMDcxMy01LjYzMjgtMi44NTItOS4wNTUzLTguNTU2MS05LjA1NTNaTTI1LjMxMTkuODU1NmgtNi43NzM2djI4LjE2NGMwLDQuNTYzMy0xLjc4MjUsNy4yNzI3LTUuOTE4LDcuMjcyNy00LjA2NDIuMDcxMy01Ljg0NjctMi43ODA3LTUuODQ2Ny03Ljc3MTh2LTUuMjA1bC02Ljc3MzYsMS42Mzk5djIuMzUyOWMwLDcuMTMwMSwzLjU2NTEsMTIuNjIwMywxMi42MjAzLDEyLjYyMDMsOS4xMjY2LDAsMTIuNjIwMy01LjQxODksMTIuNjIwMy0xMi42MjAzVi44NTU2aC4wNzEzWk02Ni4wMjUuODU1NmgtNi40MTcxdjM4LjE0NjJoNi40MTcxdi0xNy41NDAxYzAtNC4wNjQyLDIuMDY3Ny02LjQxNzEsNS40MTg5LTYuNDE3MSwzLjIwODYsMCw0LjYzNDYsMi4xMzksNC42MzQ2LDUuMzQ3NnYxOC42ODA5aDYuNDE3MXYtMTguNzUyMmMwLTUuNjMyOC0yLjkyMzQtOS4xMjY2LTguNjI3NS05LjEyNjYtNC4wNjQyLDAtNi4yNzQ1LDEuNzgyNS03LjU1NzksMy45OTI5aC0uMzU2NVYuODU1NmguMDcxM1pNMjYyLjEwMzQuODU1NmgtNi43NzM2djI4LjE2NGMwLDQuNTYzMy0xLjc4MjUsNy4yNzI3LTUuOTE4LDcuMjcyNy00LjA2NDIsMC01LjkxOC0yLjkyMzQtNS45MTgtNy44NDMxdi01LjIwNWwtNi43NzM2LDEuNzExMnYyLjM1MjljMCw3LjEzMDEsMy41NjUxLDEyLjYyMDMsMTIuNjIwMywxMi42MjAzLDkuMTI2NiwwLDEyLjYyMDMtNS40MTg5LDEyLjYyMDMtMTIuNjIwM1YuODU1NmguMTQyNlpNMzAyLjgxNjQuODU1NmgtNi40MTcxdjM4LjE0NjJoNi40MTcxdi0xNy41NDAxYzAtNC4wNjQyLDIuMDY3Ny02LjQxNzEsNS40MTg5LTYuNDE3MSwzLjIwODYsMCw0LjYzNDYsMi4xMzksNC42MzQ2LDUuMzQ3NnYxOC42ODA5aDYuNDE3MXYtMTguNzUyMmMwLTUuNjMyOC0yLjkyMzQtOS4xMjY2LTguNjI3NS05LjEyNjYtNC4wNjQyLDAtNi4yNzQ1LDEuNzgyNS03LjU1NzksMy45OTI5aC0uMzU2NVYuODU1NmguMDcxM1pNMjEzLjQ3NTksMzUuOTM1OGMtNS4yMDUsMC04LjQ4NDgtNC4yNzgxLTguNDg0OC04Ljc3MDEsMC0yLjg1MiwxLjI4MzQtNS40MTg5LDMuMzUxMi02LjkxNjJsMTIuMzM1MSwxMy40NzU5Yy0yLjI4MTYsMS4zNTQ3LTQuODQ4NSwyLjIxMDMtNy4yMDE0LDIuMjEwM1pNMjI1LjQ1NDYsMjkuMjMzNWwtMTAuNjk1Mi0xMS43NjQ3YzEuOTI1MS0uNzg0MywzLjc3OS0xLjA2OTUsNS4yNzYzLTEuMDY5NSw0LjQyMDcsMCw3LjEzMDEsMi41NjY4LDcuMTMwMSw2Ljk4NzUuMDcxMywxLjk5NjQtLjQ5OTEsMy45OTI5LTEuNzExMiw1Ljg0NjdaTTIxMy4zMzMzLDE1LjkwMDJsLTIuMzUyOS0yLjYzODFjLTIuMDY3Ny0yLjI4MTYtMi42MzgyLTMuNzA3Ny0yLjYzODItNS40MTg5LDAtMy4xMzczLDEuOTk2NC00Ljk5MTEsNS4yMDUtNC45OTExczUuMTMzNywxLjg1MzgsNS4xMzM3LDUuMjA1Yy0uMDcxMywzLjIwODYtMS41Njg2LDYuMTMxOS01LjM0NzYsNy44NDMxWk0yMTMuNjE4NSwwYy03LjU1NzksMC0xMS4yNjU2LDQuMjA2OC0xMS4yNjU2LDkuNDExOCwwLDIuODUyMSwxLjIxMjEsNS43MDQxLDQuMzQ5NCw5LjEyNjZsLjA3MTMuMTQyNmMtNS4zNDc2LDIuNTY2OC03Ljc3MTgsNi43MDIzLTcuNzcxOCwxMC45ODA0LDAsNS42MzI4LDQuMjc4MSwxMC4zMzg3LDEwLjk4MDQsMTAuMzM4NywzLjg1MDMsMCw4LjI3MDktMS41Njg2LDEyLjMzNTEtNC40MjA3bDMuMjc5OSwzLjU2NTFoOC41NTYxdi0uMjg1MmwtNi45ODc1LTcuNzAwNWMyLjkyMzQtMy40OTM4LDQuNjM0Ni03LjI3MjcsNC42MzQ2LTEwLjYyMzksMC00LjEzNTUtMi43ODA3LTYuOTE2Mi03LjEzMDEtNi45MTYyLTIuMjgxNiwwLTQuODQ4NS42NDE3LTYuNTU5NywxLjI4MzRsLS4xNDI2LS4yMTM5YzQuMTM1NS0yLjIxMDMsNS45MTgtNC4yNzgxLDUuOTE4LTcuMjAxNCwwLTQuMjA2OC0zLjcwNzctNy40ODY2LTEwLjI2NzQtNy40ODY2WiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=", alt: "Johnson & Johnson", h: 16 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0ic3ZnOTEyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTMzLjI0OSA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8c29kaXBvZGk6bmFtZWR2aWV3IGlkPSJiYXNlIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMS4wIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLXRvcD0iMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiBpbmtzY2FwZTpjeD0iNTkuNzU2MjQyIiBpbmtzY2FwZTpjeT0iMTcuOTM4MjE5IiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMjgwIiBpbmtzY2FwZTp3aW5kb3cteD0iLTQiIGlua3NjYXBlOndpbmRvdy15PSItNCIgaW5rc2NhcGU6em9vbT0iNy41MDU0OTIiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgc2hvd2dyaWQ9ImZhbHNlIiB1bml0cz0icHgiLz4KICA8ZyBpZD0ibGF5ZXIxIiBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSI+CiAgICA8ZyBpZD0iZzkxNzUiPgogICAgICA8cGF0aCBpZD0icGF0aDgwOTciIGQ9Ik0yNS4yMzIxLDQuNzk5NmMtMS42MTMsMC0zLjk0MDkuNTEyOS04LjE1MDksMS45MTMydjI2LjU1OTNjMy43MDE2LDEuMjA3MSw2LjUzOCwxLjkxMzIsOC4xNTA5LDEuOTEzMiwzLjcxNzksMCw1LjgxNC0yLjQ0ODQsNS44MTQtNi4zNzZWMTEuMTc1NWMwLTMuOTI3NS0yLjA5Ni02LjM3NTktNS44MTQtNi4zNzU5TTI2LjQ0MzYsMjguMTI3MWMwLDEuNTM3MS0uODU3OCwyLjA0ODUtMS44ODM1LDIuMDQ4NS0uNzk4MywwLTIuMDMwNi0uMzEyMi0zLjAzNTYtLjYwOFYxMC40MDdjMS4wMDQ5LS4yODUzLDIuMjM3My0uNTk3NiwzLjAzNTYtLjU5NzYsMS4wMjU4LDAsMS44ODM1LjUxMTQsMS44ODM1LDIuMDQ4NXYxNi4yNjkxWiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0icGF0aDgxMDEiIGQ9Ik03OC4zODg3LjAxODFjLTQuNzA4LS4yNDUyLTcuNTExNywxLjk5Mi03LjUxMTcsNy4xMTQ3djI1LjQ1MDRjMCw1LjQwODIsMi41MzkxLDcuNjMzNiw3LjUxMTcsNy40MDAyLDQuODY3LS4yMjc2LDcuNDA2Mi0yLjIxOTUsNy40MDYyLTcuOTY5NVY3LjcyMDFjMC01LjQ4MjUtMi4yOTY4LTcuNDM0NC03LjQwNjItNy43MDJNODAuNjYzMSwzMi4xMjgzYzAsMS41MzcxLS40NzU3LDIuMzMzOS0yLjI3NDUsMi4zOTA1LTEuODUwOC4wNTgxLTIuMzUzMy0uNzk2OC0yLjM1MzMtMi4zOTA1VjcuODczMmMwLTEuNTkzNi41MDI1LTIuNDc2NiwyLjM1MzMtMi40MTg3LDEuNzk4OC4wNTY1LDIuMjc0NS44ODE1LDIuMjc0NSwyLjQxODd2MjQuMjU1MVoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggaWQ9InBhdGg4MTA1IiBkPSJNMTI0LjE1NTYsOS45NTEydjIwLjA0OGM1Ljc3NjktMi45NTM5LDkuMDkzNC02LjM4NjQsOS4wOTM0LTEwLjA2NDIsMC0zLjYzNzctMy4zMTY2LTcuMDUyNC05LjA5MzQtOS45ODM5IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJwYXRoODEwOSIgZD0iTTAsMTkuOTM1NWMwLDMuNjcxOCwzLjMxMjEsNy4xMTA0LDkuMDg3NSwxMC4wNTgyVjkuOTU3NkMzLjMxMjEsMTIuODgzMSwwLDE2LjI5NzgsMCwxOS45MzU1IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJwYXRoODExMyIgZD0iTTQ0LjAwNTQsMzEuMjQwNGMwLDEuNTM3MS0uNDkyMSwyLjUxMDgtMi4yNzQ1LDIuMjc3NS0xLjc1MTItLjIyNzYtMi4yMjI1LTEuMDI1OC0yLjIyMjUtMi44NDY4VjEuNzY2Yy0xLjE2MjUuMTM2NS0zLjc1NTEuNTIzMy00Ljg2NTUuNjk0MnYyOS4yMzUyYzAsNC42Njc5LDIuMTA1LDYuNDg0NSw3LjA4OCw3LjA5ODQsNC41NTk0LjU2MzUsNy4zNTI3LTEuOTE3Nyw3LjM1MjctNy4wOTg0Vi44MDg2Yy0uOTUxNC4wNTc3LTQuMDczMy4zNDE4LTUuMDc4Mi40NTY0djI5Ljk3NTRaIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJwYXRoODExNyIgZD0iTTk5Ljg5MTYsMjEuNjg4NmwtNS42MzQyLTE5Ljc4MDVjLTEuNTM0MS0uMjE3LTMuMzg0OS0uNDM4NS00LjgxMzUtLjU4MTN2MzcuMzM1NmMxLjAwNDktLjEwMTEsMy41NjYzLS40MTQ3LDQuODg3OS0uNTk3NmwtLjQwMTYtMjIsNS45NjEyLDIxLjE0MDdjMS4yNjk1LS4yMTU3LDMuMTIwMy0uNTYzNCw0LjMzNzgtLjgxMzFWMy41ODY1Yy0xLjI2OTYtLjI2NzYtMy41NzY3LS42ODgzLTQuNjg3Mi0uODY5N2wuMzQ5NiwxOC45NzE4WiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0icGF0aDgxMjEiIGQ9Ik02MC4xMTguMjM0NGMtLjg4MywwLTQuMTA0NC4xMTg4LTcuMDY3Mi4zMDc2djM4LjkwNjhjMS4wMDQ5LjA1NjUsMy42NDk2LjIwNTIsNS4wNzgyLjI0NTJ2LTEzLjIxMjdsMS45ODktLjAwNDJjNS4zMjE5LS4wMTY4LDcuNTMyNS0yLjU4MzYsNy41MzI1LTcuNTI1MVY3LjQ4NzVjMC00LjgzNzMtMi40ODU2LTcuMjUxNi03LjUzMjUtNy4yNTE2TTYyLjUxODgsMTguNTQxN2MwLDEuNjczOC0uNTQ0MSwyLjUyMjctMi42MDc1LDIuNTI4NmwtMS43ODI0LjAwNDJWNS43MjI3Yy43OTM4LS4wNDQ3LDEuMjE2LS4wNTY1LDEuNjkzMy0uMDU2NSwyLjIzMTQsMCwyLjY5NjcuOTExMywyLjY5NjcsMi42MTc5djEwLjI1NzZaIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJwYXRoODEyNSIgZD0iTTEwNi43NDE4LDkuMzI1YzEuMjU3Ni4yNDIzLDIuNDk2LjUxMTQsMy43MDMxLjc5Njh2MjQuODI0NWMxLjExMDUtLjI3OTQsMy4xNzM4LS44NTkyLDQuNTQ4OS0xLjI5NzhWMTEuMjkzM2MxLjMyMDEuMzY4NywyLjU2NDMuNzM3MywzLjcwMzEsMS4wODgxdi00Ljc4NjhjLTMuNTkxNi0xLjM0OTgtNy40NDc4LTIuNDQ4NC0xMS45NTUxLTMuNDYwOHY1LjE5MTJaIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=", alt: "DuPont", h: 20 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMzcuMDM2NiA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8ZyBpZD0ibGF5ZXIxIj4KICAgIDxnIGlkPSJnMTQxODkiPgogICAgICA8cGF0aCBpZD0icGF0aDE0MTc5IiBkPSJNNjUuMDEwNyw5Ljk5OThoNi4xOTY2djE5Ljk5ODdoLTQuNTkxOHYtMTMuNDQ4NWwtNS44NzQyLDEzLjQ0ODUtNi4xODIzLTEzLjQ2NTR2MTMuNDY1NGgtNC4yODQ1VjkuOTk5OGg2LjEyNDVsNC40MTU0LDEwLjM1MTEsNC4xOTY0LTEwLjM1MTFaIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJwYXRoMTQxNzciIGQ9Ik03My40OTA3LDkuOTk5OHYxOS45OTg3aDExLjUzOTF2LTMuMzkwNGgtNy4wNjU4di01LjA4NzloNi43NzM3di0zLjQyMjRoLTYuNzczN3YtNC41ODgyaDcuMDY1OHYtMy41MDk4aC0xMS41MzkxWiIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0icGF0aDE0MTc1IiBkPSJNMTAyLjI0MDEsMjAuMDAyN2MwLDcuNDQ0Myw3Ljc2OTMsMTMuNDAxMywxNS45NTU1LDkuNDE2OXYtNC4yODQ1Yy02LjI5OSw0LjQxMjgtMTEuNzgyMy0uMDEwMS0xMS42OTIzLTQuOTYxNC4wNjEzLTMuMjkwNywyLjI3MjctNi40MjAxLDYuNTUwMi02LjY2NDEsMi4xMDM1LS4xMTk0LDMuNTI4NC40MDM0LDUuMTQyMiwxLjk0ODV2LTQuNDU1NWMtNS45MTUyLTMuNTA1My0xNS45NTU1LjM1MjctMTUuOTU1NSw5LjAwMDEiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggaWQ9InBhdGgxNDE3MyIgZD0iTTEyMC4wODM2LDI5Ljk5ODVoNC4yNTM0VjEwLjE5MjJoLTQuMjUzNHYxOS44MDYzWiIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0icGF0aDE0MTcxIiBkPSJNMTI5LjY3NDIsMTkuMjc0Mmw2LjQyNzMtOS4wMzg0aC00Ljk2NzZsLTYuMzY3Niw5LjAyMTUsNy4zOTI2LDEwLjc0MTJoNC44Nzc3bC03LjM2MjQtMTAuNzI0M1oiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggaWQ9InBhdGgxNDE2OSIgZD0iTTg3LjAxODMsOS45OTk2djE5Ljk5ODdoNC40ODl2LTEwLjc0NDNsNy40MjAzLDEwLjc0NDNoNC43ODUxbC01Ljg3NDQtOC4zOTc0YzIuNzIyNS0xLjAyOTUsMy42MDU4LTMuMzEyMywzLjYwNTgtNS41OTM5LDAtMi4yNzk5LTEuOTEzOC02LjAwNzQtNi41NTAxLTYuMDA3NGgtNy44NzU2Wk05MS41MDczLDEzLjMyNzVoMS45NTk0YzMuMzEyOCwwLDMuNDg5NywyLjE2NTcsMy40ODk3LDIuOTc0NCwwLDEuNTQ1MS0xLjMxMSwyLjg2MDktMy4wMDMxLDIuODYwOWgtMi40NDZ2LTUuODM1MloiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggaWQ9InBhdGgxMzM2NiIgZD0iTTkuOTk5MywxMC4wMDAyQzkuOTk5Myw0LjQ3NjksMTQuNDc3MSwwLDE5Ljk5OTYsMHMxMC4wMDAyLDQuNDc2OSwxMC4wMDAyLDEwLjAwMDJIOS45OTkzWk05Ljk5OTMsMjkuOTk5OGMwLTUuNTIyNCw0LjQ3NzgtMTAuMDAwMiwxMC4wMDAyLTEwLjAwMDItNS41MjI0LDAtMTAuMDAwMi00LjQ3Ni0xMC4wMDAyLTkuOTk5M0M0LjQ3NjksMTAuMDAwMywwLDE0LjQ3NzEsMCwxOS45OTk2czQuNDc2OSwxMC4wMDAyLDkuOTk5MywxMC4wMDAyTTkuOTk5MywyOS45OTk4YzAsNS41MjQyLDQuNDc3OCwxMC4wMDAyLDEwLjAwMDIsMTAuMDAwMnMxMC4wMDAyLTQuNDc2LDEwLjAwMDItMTAuMDAwMkg5Ljk5OTNaTTE5Ljk5OTYsMTkuOTk5NmM1LjUyNDIsMCwxMC4wMDAyLDQuNDc3OCwxMC4wMDAyLDEwLjAwMDIsNS41MjMzLDAsMTAuMDAxMS00LjQ3NiwxMC4wMDExLTEwLjAwMDJzLTQuNDc3OC05Ljk5OTMtMTAuMDAxMS05Ljk5OTNjMCw1LjUyMzMtNC40NzYsOS45OTkzLTEwLjAwMDIsOS45OTkzIiBmaWxsPSIjZmZmIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=", alt: "Merck", h: 22 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDAuMDE2MyA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8c29kaXBvZGk6bmFtZWR2aWV3IGlkPSJuYW1lZHZpZXczMDEwIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgZml0LW1hcmdpbi1ib3R0b209IjAiIGZpdC1tYXJnaW4tbGVmdD0iMCIgZml0LW1hcmdpbi1yaWdodD0iMCIgZml0LW1hcmdpbi10b3A9IjAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGlua3NjYXBlOmN4PSI1NTYuMDg0NTIiIGlua3NjYXBlOmN5PSI1MTMuMjcxMDYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3MDkiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM2NiIgaW5rc2NhcGU6d2luZG93LXg9Ii04IiBpbmtzY2FwZTp3aW5kb3cteT0iLTgiIGlua3NjYXBlOnpvb209IjAuNSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgcGFnZWNvbG9yPSIjZmZmZmZmIiBzaG93Z3JpZD0iZmFsc2UiLz4KICA8ZyBpZD0iZzMxNzgiPgogICAgPHBhdGggaWQ9InBhdGgzMDA4IiBkPSJNNy43Mzg4LDM1Ljc5NjVjMy4zOTIyLDIuNjI1OSw3LjY0OTksNC4yMDM1LDEyLjI2OTIsNC4yMDM1LDUuMDU1MiwwLDkuNjYzNi0xLjg3NjgsMTMuMTgwOS00Ljk1NzcuMDQyNy0uMDM3Ny4wMjE2LS4wNjI2LS4wMjA0LS4wMzc3LTEuNTc4MiwxLjA1NDEtNi4wNzY2LDMuMzU0OS0xMy4xNjAzLDMuMzU0OS02LjE1NiwwLTEwLjA0NjQtMS4zNzM2LTEyLjI0MzQtMi41OTk4LS4wNDIxLS4wMjA4LS4wNTc2LjAxMDgtLjAyNjEuMDM2N00yMS4zNjYyLDM2LjgxODdjNC45MjM3LDAsMTAuMzM0Mi0xLjM0MjIsMTMuNTcwMi0zLjk5OS44ODU1LS43MjQsMS43MjktMS42ODc0LDIuNDg0NS0yLjk4MjIuNDM0OS0uNzQ1Ljg2MDItMS42MzAyLDEuMjA2Ny0yLjUwMDIuMDE1NC0uMDQyNC0uMDEwOS0uMDYzMi0uMDQyNy0uMDE1NS0zLjAwOTIsNC40Mjg0LTExLjcyMzMsNy4xOTA2LTIwLjcyMDksNy4xOTA2LTYuMzYsMC0xMy4yMDMtMi4wMzM4LTE1Ljg4MjItNS45MTcxLS4wMjY0LS4wMzU5LS4wNTI4LS4wMjA1LS4wMzY3LjAyMDcsMi40OTU4LDUuMzA0OSwxMC4wNjc1LDguMjAyNywxOS40MjEyLDguMjAyN00xNS45ODY2LDI4LjAxODRDNS43NDYyLDI4LjAxODQuOTE3NywyMy4yNDkxLjA0MTksMTkuOTk0NGMtLjAxMDktLjA0NzItLjA0MTktLjAzNjgtLjA0MTkuMDA1NSwwLDEuMDk1Ny4xMDk2LDIuNTA5Ny4yOTg0LDMuNDQ4Mi4wOS40NTcuNDYxOCwxLjE3MzgsMS4wMDY5LDEuNzQ1MywyLjQ3OTcsMi41ODQ2LDguNjYxNyw2LjIwNjMsMTkuMzY4Miw2LjIwNjMsMTQuNTg3MSwwLDE3LjkyMjMtNC44NTksMTguNjAzNC02LjQ1NzEuNDg3LTEuMTQyOC43MzkzLTMuMjA4LjczOTMtNC45NDI5LDAtLjQxOTktLjAxMDYtLjc1NTEtLjAyNjQtMS4wODQzLDAtLjA1MzQtLjAzMS0uMDU3OC0uMDQxNi0uMDA1Ny0uNzI4OCwzLjkxMDItMTMuMTkxOCw5LjEwODYtMjMuOTYxNiw5LjEwODZNMS45Mjg5LDExLjQxOTljLS41ODY3LDEuMTY0NS0xLjIzNzIsMy4xMjkxLTEuNDMwNSw0LjE0NTktLjA4NDguNDM1Ni0uMDQ4Ny42NDQ5LjEwNDEuOTY5OSwxLjIyNzQsMi42MDQxLDcuNDM1Nyw2Ljc3MDgsMjEuOTE3Miw2Ljc3MDgsOC44MzQ4LDAsMTUuNjk3OS0yLjE3MDUsMTYuODA5Ny02LjEzMTMuMjA0OC0uNzI5MS4yMTU3LTEuNDk5LS4wNDczLTIuNTM2My0uMjkzOC0xLjE1OTItLjg0NDMtMi41MTA5LTEuMzEwMS0zLjQ2LS4wMTU0LS4wMzEtLjA0MjUtLjAyNjMtLjAzNy4wMTAzLjE3Myw1LjE5NS0xNC4zMTQyLDguNTQzMS0yMS42MjM5LDguNTQzMS03LjkxNzYsMC0xNC41MjMxLTMuMTU0Ni0xNC41MjMxLTcuMTM3OCwwLS4zODI2LjA3OTMtLjc2NTUuMTc4MS0xLjE2MzkuMDA5OS0uMDM2Ni0uMDIxMy0uMDQyNi0uMDM3My0uMDEwN00zMy4yMjEzLDUuMDQxNWMuMDg0MS4xMzE3LjEyNi4yNzIzLjEyNi40NjE2LDAsMi4yMjIyLTYuODAxMSw2LjE1MzQtMTcuNjI3Niw2LjE1MzQtNy45NTQ5LDAtOS40NDQyLTIuOTUxMS05LjQ0NDItNC44Mjc4LDAtLjY3MDguMjU3My0xLjM1NzMuODI0LTIuMDU0NC4wMzEtLjA0MTUuMDA0Ny0uMDU3NC0uMDMxMS0uMDI2Ny0xLjAzMzQuODc1OC0xLjk4MywxLjg2MTMtMi44MTYsMi45MjUtLjM5OC41MDMxLS42NDUuOTQ4OC0uNjQ1LDEuMjE1OCwwLDMuODg5MSw5Ljc1Miw2LjcwOSwxOC44NzA0LDYuNzA5LDkuNzE1OCwwLDE0LjA1Mi0zLjE3MTcsMTQuMDUyLTUuOTU5MSwwLS45OTYyLS4zODc4LTEuNTc3Ny0xLjM3OTctMi43MDUxLS42NDM5LS43MzM1LTEuMjUzLTEuMzMwNi0xLjg5NzYtMS45MTg1LS4wMzEyLS4wMjU2LS4wNTI5LS4wMDQ3LS4wMzEyLjAyNjdNMzAuMjQyNywyLjgxOThjLTIuOTk4Ni0xLjc5NzMtNi40ODA1LTIuODE5OC0xMC4yMzQ1LTIuODE5OC0zLjc4MDEsMC03LjM2NywxLjA1ODMtMTAuMzc2MywyLjkwMzItLjkwMjguNTU1NS0xLjQxMDcsMS4wMDA2LTEuNDEwNywxLjU3MywwLDEuNjg3LDMuOTQyNSwzLjUwMDgsMTAuOTM3LDMuNTAwOCw2LjkyMTksMCwxMi4yOTA3LTEuOTg2OCwxMi4yOTA3LTMuODk5Mi4wMDAxLS40NTY0LS4zOTg5LS43NzU4LTEuMjA2Mi0xLjI1NzkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPg==", alt: "AT&T", h: 22 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGlsbHlfU2NyaXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDczLjM4MDcgNDAiPgogIDwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAzMC4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiAyLjEuMSBCdWlsZCAxKSAgLS0+CiAgPHBhdGggZD0iTTUwLjY2MDgsMjMuMzUzNGMuNDI2LS4zMDU4Ljg4NDgtLjY1NTQsMS4zMTA4LS45OTQsMy4yOTg3LTIuNjQzNCw1LjgyMi01LjUzOCw2LjMyNDQtNy4xNDM2LjAyMTgtLjA1NDYuMDU0Ni0uMTk2Ni4wNTQ2LS4zMTY4LDAtLjE2MzgtLjA3NjUtLjI4NC0uMjI5NC0uMjg0LTEuNTE4MywwLTYuMzc5LDQuODM4OS03LjU1ODcsOC43NzEyaDBsLjA4NzQtLjAzMjhoLjAxMDlaTTM4LjQ3MDgsMjIuNzk2M2M0LjU5ODYtMy40NzM1LDkuNDI2NS04LjUzMDksOS45Mzk5LTEwLjYwNjIuMDEwOS0uMDY1NS4wMzI4LS4xMzExLjAzMjgtLjE5NjYsMC0uMTQyLS4wODc0LS4yNjIyLS4yNTEyLS4yNjIyLTEuNDUyOCwwLTguMTkyMiw2LjIxNTItOS43MTA1LDExLjA2NU0xMC4yNDU4LDI1Ljg0MzhjLTEuMjEyNS0uODQxMS0zLjA5MTItMS41NzI5LTQuNzczMy0xLjU3MjlzLTIuNjY1Mi42MzM1LTIuNjY1MiwxLjQ0MThjMCwuOTI4NSwxLjI2NzEsMS4zMzI2LDIuNjc2MSwxLjMzMjYsMS43MTQ5LDAsMy4yNjYtLjQ1ODgsNC43NjI0LTEuMjAxNU0yNC4zMzY0LDE0Ljk0MjdjMy4yOTg3LTEuMDU5NSw2LjQyMjctMy4yNjYsOC43NDkzLTUuNTcwNywyLjE1MTgtMi4xNDA5LDMuODc3Ny00LjY3NSwzLjg3NzctNS45MzEyLDAtLjI4NC0uMjA3NS0uNDU4OC0uNDY5Ny0uNDU4OC0uOTk0LDAtMi44OTQ2LDEuMzIxNy01LjQzOTYsMy44Nzc3LTEuOTg4LDEuOTg4LTQuMjkyNyw0LjcwNzgtNi43Mjg2LDguMDgzTTczLjM4MDcsMjIuOTE2NGMtMi44MjkxLDIuODE4MS0xMS42NDM5LDEwLjU2MjUtMTMuOTgxNCwxNy4wODM2bC0yLjg5NDYtLjc0MjhjLjk1MDMtMi42OTgsMy43OTAzLTYuOTAzMyw2Ljk1NzktMTAuMTM2NS0uNjc3Mi4yNTEyLTEuMzc2My4zNDk1LTEuOTQ0My4zNDk1LS44NTIsMC0xLjUxODMtLjI2MjItMS45MjI0LS43NDI4LS4yODQtLjM0OTUtLjQzNjktLjgwODMtLjQzNjktMS4zNDM1LDAtLjEyMDIsMC0uMjQwMy4wMjE4LS4zNzE0LTIuNzg1NCwxLjY5MzEtNS4wMjQ2LDIuNDY4Ni03LjIyMDEsMi40Njg2LTEuNzA0LDAtMy4xNDU4LS43NDI4LTMuODEyMS0yLjA1MzUtMi43NjM1LDEuMzc2My01LjQxNzgsMi4wNTM1LTcuNjM1MiwyLjA1MzUtMi4wNjQ0LDAtMy43MjQ3LS44MTkyLTQuNDg5NC0yLjMwNDgtMi43OTYzLDEuNTcyOS01LjE2NjYsMi4zMDQ4LTcuMDY3MiwyLjMwNDgtMS4wOTIzLDAtMS45NTUyLS4zMDU4LTIuNTEyMy0uODczOC0uNDA0Mi0uNDE1MS0uNjIyNi0uOTgzMS0uNjU1NC0xLjYzODQtMS43OTE0LDEuMTc5Ny00LjQxMjksMi41MTIzLTcuMDk5OSwyLjUxMjNzLTQuNTg3Ny0uOTM5NC02LjAxODYtMS44Nzg4Yy0yLjI3MiwxLjI2NzEtNC43ODQzLDEuODc4OC03LjQzODYsMS44Nzg4LTEuOTk4OSwwLTUuMjMyMS0uODMwMS01LjIzMjEtMy43MTM4LDAtMi4zMjY2LDIuNDI0OS0zLjg4ODYsNS42NTgxLTMuODg4NiwyLjc1MjYsMCw1LjQwNjksMS4xNTc4LDcuMDY3MiwyLjM3MDMsMS41ODM4LTEuMjU2MSwzLjIzMzItMy4wMTQ3LDUuMTg4NC01LjUwNTItLjQyNi4wMjE4LS44NTIuMDMyOC0xLjI2NzEuMDMyOC0zLjc0NjYsMC02Ljg3MDYtMS4xMDMyLTguNTc0NS0zLjAzNjYtLjkxNzUtMS4wNDg2LTEuMzU0NS0yLjI3Mi0xLjM1NDUtMy41OTM3LDAtNS4yMTAzLDYuNTc1Ni05LjI1MTgsMTIuMzMyMS05Ljg1MjUuMzgyMy44NjI5LjcyMDksMS41MjkyLDEuMDcwNSwyLjMxNTctNS42OTA5LjY1NTQtMTAuNDIwNSw0LjAzMDYtMTAuNDIwNSw3LjMxODQsMCwyLjE2MjgsMi40MjQ5LDQuMzM2NCw3LjU5MTUsNC4zMzY0Ljg4NDgsMCwxLjc2OTUtLjA4NzQsMi42NDM0LS4yMDc1QzI0LjUzMyw5Ljc2NTIsMzEuNTAxOSwwLDM3LjUwOTYsMGMxLjc4MDQsMCwyLjcwODksMS4wODE0LDIuNzA4OSwyLjUyMzIsMCwyLjk3MTEtMi41NTYsNi4xNzE1LTQuMjE2Myw3Ljg0MjctMi42MjE1LDIuNjMyNC03LjM1MTIsNi41NDI5LTEzLjk1OTYsNy44NDI3LTIuNTY2OSwzLjU4MjctNC42ODYsNS45NTMtNi43OTQxLDcuNjY3OSwxLjI3OC42ODgxLDIuNDc5NSwxLjExNDEsMy45MTA0LDEuMTE0MSwzLjU2MDksMCw3LjAwMTYtMy4yNTUxLDkuNjk5Ni02LjAxODZsLjA5ODMtLjA4NzQsMi4wOTcyLDEuNjM4NC0uMDk4My4xMjAyYy0xLjE5MDYsMS4zNjU0LTIuMjkzOCwyLjgwNzItMi4yOTM4LDMuNjE1NSwwLC42MTE3LjUyNDMuNzMxOC45NjEyLjczMTgsMS4zNjU0LDAsMy40NjI2LS44ODQ4LDUuOTMxMi0yLjQwMzF2LS4wMjE4Yy4yNzMxLTYuMTA2LDguNjA3My0xNS40NDUxLDEzLjY2NDctMTUuNDQ1MSwxLjQzMDksMCwyLjI1MDEuNzEsMi4yNTAxLDEuOTU1MiwwLDMuMDU4NC01LjI3NTgsOS42MjMyLTEyLjk1NDcsMTQuNjQ3N2gwYy4zOTMyLjg2MjksMS4zMTA4LDEuMjY3MSwyLjg2MTgsMS4yNjcxLDEuMjEyNSwwLDMuNTgyNy0uNTM1Miw2LjQwMDktMi4wMDk4LjMyNzctMy4xNjc3LDIuMTE5MS02LjU2NDcsNC4zOTEtOC45Nzg3LDIuMjgyOS0yLjQyNDksNC44Mzg5LTMuOTk3OCw3LjA0NTMtMy45OTc4LDEuMzY1NCwwLDIuMTYyOC43NTM3LDIuMTYyOCwxLjkzMzQsMCwyLjY3NjEtMy4xMDIxLDcuMjQxOS0xMC41NjI1LDEyLjAxNTMuMzI3Ny42NDQ1Ljk3MjEsMS4wNDg2LDEuOTY2MSwxLjA0ODYsMi4yMjgzLDAsNi4xMzg3LTIuMzcwMyw5LjE4NjItNS4yOTc3bDIuMTk1NSwxLjcwNGMtLjkzOTQsMS4xMzYtMS44Nzg4LDIuMzgxMi0xLjg1NjksMy4xMDIxLDAsLjIyOTQuMTYzOC4zOTMyLjUzNTIuMzkzMiwyLjI1MDEsMCw1Ljc4OTItMi45NzExLDguNDQzNS01LjU5MjZsMi4wOTcyLDEuNjI3NXYtLjAyMThaTTMyLjY4MTYsMTYuNzk5NmMuOTk0LDAsMS43OTE0LjgwODMsMS43OTE0LDEuODAyM3MtLjc5NzQsMS44MDIzLTEuNzkxNCwxLjgwMjMtMS44MDIzLS44MDgzLTEuODAyMy0xLjgwMjMuODA4My0xLjgwMjMsMS44MDIzLTEuODAyMyIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=", alt: "Eli Lilly", h: 20 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0ic3ZnMzc5NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDAgNDAiPgogIDwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAzMC4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiAyLjEuMSBCdWlsZCAxKSAgLS0+CiAgPGcgaWQ9ImxheWVyMSI+CiAgICA8ZyBpZD0iZzM0NjAiPgogICAgICA8cGF0aCBpZD0icGF0aDM0NjIiIGQ9Ik0yMC4wMDEyLDIuMTYxNWMtNC45MjQyLDAtOS4zODM3LDEuOTk3NC0xMi42MTI0LDUuMjI4NS0zLjIzLDMuMjIzOC01LjIyNjEsNy42ODU3LTUuMjI2MSwxMi42MTI0LDAsNC45MjMsMS45OTYxLDkuMzgxOSw1LjIyNjEsMTIuNjA2OSwzLjIyODcsMy4yMjY5LDcuNjg4Miw1LjIyNzksMTIuNjEyNCw1LjIyNzlzOS4zODc0LTIuMDAxLDEyLjYxMTItNS4yMjc5YzMuMjI4Ny0zLjIyNSw1LjIyMDUtNy42ODM5LDUuMjIwNS0xMi42MDY5LDAtNC45MjY3LTEuOTkxOC05LjM4ODYtNS4yMjA1LTEyLjYxMjQtMy4yMjM4LTMuMjMxMi03LjY4NTctNS4yMjg1LTEyLjYxMTItNS4yMjg1TTIwLjAwMTIsMEMzMS4wNDU0LDAsNDAsOC45NTU4LDQwLDIwLjAwMjVzLTguOTU0NiwxOS45OTc1LTE5Ljk5ODgsMTkuOTk3NVMwLDMxLjA0NTQsMCwyMC4wMDI1LDguOTU4MywwLDIwLjAwMTIsMCIgZmlsbD0iI2ZmZiIvPgogICAgPC9nPgogICAgPGcgaWQ9ImczNDY0Ij4KICAgICAgPHBhdGggaWQ9InBhdGgzNDY2IiBkPSJNMTAuNTQyMSwxOS44Mzk1YzAtMS4xNjU2LS43NzM0LTEuODI3Ny0xLjg2ODMtMS44Mjc3aC0uNjcwMXYzLjY1NjZoLjY1MWMxLjAxOCwwLDEuODg3My0uNTUzMywxLjg4NzMtMS44Mjg5TTIyLjQ2MTcsMjEuMTU1MWwtNC45MzY1LDMuODg3MS00LjUxMTctMy41NTIxYy0uNjUxLDEuNTY0LTIuMjI0MiwyLjY1MDItNC4wMzU5LDIuNjUwMmgtMy44NjEzdi04LjYwMTdoMy44NjEzYzIuMDI0NCwwLDMuNDgzMiwxLjI4NzMsNC4wMzQ3LDIuNjU4OGw0LjUxMy0zLjU0ODQsMS42NzE1LDEuMzE1Ni00LjEzNjEsMy4yNTA5Ljc5NDkuNjIyMSw0LjEzNDktMy4yNDksMS42NzQsMS4zMTE5LTQuMTM1NSwzLjI1NDUuNzkzNy42MjM0LDQuMTM5Mi0zLjI1NTJ2LTIuOTg0N2gzLjAwMDZ2Ni4wOTFoMi45OTMzdjIuNTIxMWgtNS45OTM5di0yLjk5NTdaTTMyLjI1NjcsMjEuNjMwOWgyLjk5MnYyLjUxOTloLTUuOTk1OHYtOC42MTIyaDMuMDAzN3Y2LjA5MjNaIiBmaWxsPSIjZmZmIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=", alt: "Dell", h: 22 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0MCA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8ZyBpZD0ic3ZnMzAwOSIgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4yIHI5ODE5IiBzb2RpcG9kaTpkb2NuYW1lPSJjMDI3MTY3OTIucGRmIj4KICAgIDxzb2RpcG9kaTpuYW1lZHZpZXcgaWQ9Im5hbWVkdmlldzMwMTEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBmaXQtbWFyZ2luLWJvdHRvbT0iMC4xIiBmaXQtbWFyZ2luLWxlZnQ9IjAuMSIgZml0LW1hcmdpbi1yaWdodD0iMC4xIiBmaXQtbWFyZ2luLXRvcD0iMC4xIiBncmlkdG9sZXJhbmNlPSIxMCIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMzAxNyIgaW5rc2NhcGU6Y3g9IjU3NC4zOTE1NCIgaW5rc2NhcGU6Y3k9Ii03OC40MTgyODIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDI4IiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOndpbmRvdy14PSItOCIgaW5rc2NhcGU6d2luZG93LXk9Ii04IiBpbmtzY2FwZTp6b29tPSIwLjY3NDI1MTMxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBwYWdlY29sb3I9IiNmZmZmZmYiIHNob3dncmlkPSJmYWxzZSIvPgogICAgPGcgaWQ9ImczMDE3IiBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiBpbmtzY2FwZTpsYWJlbD0iYzAyNzE2NzkyIj4KICAgICAgPGcgaWQ9ImczMDYxIj4KICAgICAgICA8ZyBpZD0iZzMwMjEiPgogICAgICAgICAgPHBhdGggaWQ9InBhdGgzMDIzIiBkPSJNNDAsMjBDNDAsOC45NTM5LDMxLjA0NjEsMCwyMCwwYy0uMzAxMiwwLS42MDA4LjAwNzYtLjg5OS4wMjEzbC00LjA5MSwxMS4yNDM5aDMuNTYzMWMyLjExOTYsMCwzLjI2MiwxLjYzMjEsMi41MzY0LDMuNjI1NWwtNS4wNDYyLDEzLjg2NzctNC4yMzctLjAwMDgsNS40MTUxLTE0Ljg2NDFoLTMuMTg1OWwtNS40MTUxLDE0Ljg2NDFoLTQuMjM4NWw2LjM2NzMtMTcuNDkyNWguMDAwOEwxNC42MDAxLjczODVDNi4xNzc5LDMuMDk0NiwwLDEwLjgyNTYsMCwyMGMwLDkuNDQ2Nyw2LjU1MDYsMTcuMzYzMiwxNS4zNTY5LDE5LjQ1N2wzLjcxMTUtMTAuMTk5NmguMDAzbDYuNTQ3NS0xNy45OTIyaDcuODAzOWMyLjEyMTksMCwzLjI2MzUsMS42MzIxLDIuNTM3OSwzLjYyNTVsLTQuNDM0LDEyLjE4MDFjLS4zMzc3LjkyNzktMS40MjE1LDEuNjg2OS0yLjQwODYsMS42ODY5aC01LjYyNWwtNC4wODcyLDExLjIzMzJjLjE5Ny4wMDUzLjM5NTUuMDA5MS41OTQuMDA5MSwxMS4wNDYxLDAsMjAtOC45NTQ2LDIwLTIwIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJnMzAyNSI+CiAgICAgICAgICA8cGF0aCBpZD0icGF0aDMwMjciIGQ9Ik0zMi4xMDE4LDEzLjg4M2gtMy4xODQ0bC00LjQ1OTgsMTIuMjM2NGgzLjE4NDRsNC40NTk4LTEyLjIzNjQiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==", alt: "HP", h: 22 },
                  { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNDIuNzgxOCA0MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEpICAtLT4KICA8cGF0aCBkPSJNMTQuMTE1NywwaDYuOTQ2NWMtMS4wODM5LDEwLjQwNTUtMi4xNzgyLDIwLjgwOTQtMy4yODI5LDMxLjIxMTUtLjA5NjIuMDc5Ni0uMjA3My4xMTEzLS4zMzMuMDk1Mi0xLjA3ODktMTAuNDQwNS0yLjE4OTEtMjAuODc2MS0zLjMzMDUtMzEuMzA2N1oiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTc5Ii8+CiAgPHBhdGggZD0iTTEyLjQ5OCwzNy42ODIyYy0uMDAyOS4wOTQ5LjA0NDcuMTU4My4xNDI3LjE5MDMuMjk5My4wODY3LjYwMDYuMTY2LjkwNC4yMzc5LS4yMzc5LjA3OTMtLjI1MzguMTkwMy0uMDQ3Ni4zMzMuMjk1OS0uMTExNi4zMTE4LS4wNjQuMDQ3Ni4xNDI3LS4wNTM0LjE0OS4wMTAxLjI3NTkuMTkwMy4zODA2LS4xMDI0LjIwMjgtLjE2NTkuNDI0OS0uMTkwMy42NjYxLS4yMDk0LjA3ODUtLjM4MzkuMDMwOS0uNTIzNC0uMTQyNy0uMTYxNy4wODYyLS4zMzYyLjExNzktLjUyMzQuMDk1Mi0zLjkxMS0uNDI5NC03LjE5MzktMi4wNzg5LTkuODQ4OC00Ljk0ODItMS4zOTk2LTEuNzQ0Ny0yLjIwODUtMy43MTEzLTIuNDI2NS01Ljg5OTcuMDI1OC0uMTc4OS0uMDM3Ny0uMzA1Ny0uMTkwMy0uMzgwNi0uMTY5LTIuNzg5MS4zMjI2LTUuNDg1MSwxLjQ3NDktOC4wODg0LDEuMTE5OC0yLjMwMjksMi4xMzQ4LTQuNjUsMy4wNDUtNy4wNDE2LjY1ODEtMS45ODg2Ljc1MzMtMy45NTUyLjI4NTUtNS44OTk3LS4zNjUzLTEuMTkxOS0uOTgzOS0yLjIyMjgtMS44NTU2LTMuMDkyNi4wMjE0LS4xNTQyLjEwMDctLjI2NTMuMjM3OS0uMzMzLDQuMzU2NiwxLjI3NjEsNi42NTYyLDQuMTc4Myw2Ljg5ODksOC43MDY5LjAxNTIsMS4zMTk4LS4xOTEsMi42MDQ0LS42MTg1LDMuODUzOS0uNzQwMywxLjk4ODEtMS41MzMzLDMuOTU0Ni0yLjM3ODksNS44OTk3LTEuMDgyNCwyLjUzMzMtMS40NjMsNS4xNjYtMS4xNDE5LDcuODk4LjczODUsMy43MzU5LDIuOTExMiw2LjIxLDYuNTE4Myw3LjQyMjNaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBkPSJNOTkuNzU3MSwzOC41Mzg2Yy00LjU3OSwxLjUyMi04LjcwMjEuODA4NC0xMi4zNzA0LTIuMTQxLTMuNjUxLTMuNTc5MS00LjkwMzktNy44NzcxLTMuNzU4Ny0xMi44OTM4LDEuNTUzMi01LjIyNTksNS4wMjY0LTguMjU1MSwxMC40MTk3LTkuMDg3NSw0LjkwMTUtLjM5OSw4Ljc1NTQsMS4zOTMyLDExLjU2MTYsNS4zNzY0LDEuNzgxMywzLjAyODIsMi4yODk1LDYuMjYzNSwxLjUyMjUsOS43MDYtLjkxNTQsNC4yOTItMy4zNzQzLDcuMzA1Mi03LjM3NDcsOS4wMzk5Wk05My44NTc0LDE1LjYwNThjMi40OTk4LS4xNTU3LDQuNTc3MS43MDA3LDYuMjMyOCwyLjU2OTIsMi4xNTA1LDIuNzIzMSwzLjIxMjUsNS44MzE2LDMuMTg3OCw5LjMyNTQuMDkwNCwyLjgxMjYtLjU5MTksNS40MTM1LTIuMDQ1OSw3LjgwMjktMi4wNjExLDIuNjAwMy00LjY3NzksMy4zNzczLTcuODUwNSwyLjMzMTMtMS43NDUyLS44MjUzLTMuMDkzMi0yLjA3ODEtNC4wNDQyLTMuNzU4Ny0yLjIzNi00LjI0ODYtMi42MTY2LTguNjU3NS0xLjE0MTktMTMuMjI2OC45MjgyLTIuNzg1LDIuODE1NC00LjQ2NjEsNS42NjE4LTUuMDQzM1oiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTY5Ii8+CiAgPHBhdGggZD0iTTE0NS4xNDcsMTQuMzY4N2MuMTI1Ni0uMDE2Mi4yMzY5LjAxNTUuMzMzLjA5NTIsMi43Nzg2LDcuNDE0OSw1LjUzODEsMTQuODM3Miw4LjI3ODcsMjIuMjY2OC4wNzMzLjEyODQuMTg0Ni4yMDc2LjMzMy4yMzc5Ljc4Ny4yMzYyLDEuNTgwNi40NDIzLDIuMzc4OS42MTg1djEuMDQ2N2gtMTAuMDg2N3YtMS4wNDY3YzEuMTEyNC0uMjA2OSwyLjIyMjktLjQyODksMy4zMzA1LS42NjYxLS43NDEzLTIuMDk3NC0xLjUwMjUtNC4xOTA4LTIuMjgzOC02LjI4MDQtMi45ODEzLS4wOTUyLTUuOTYyNS0uMTI2OC04Ljk0NDgtLjA5NTItLjcwNjEsMi4xMTExLTEuNDY3Myw0LjIwNDUtMi4yODM4LDYuMjgwNCwxLjA5OTEuMzAyMiwyLjIwODYuNTU2LDMuMzMwNS43NjEzdjEuMDQ2N2gtNy43MDc3Yy0uMDI3Ni0uMzQzMS4wMDM4LS42NzYyLjA5NTItLjk5OTEuODAzMS0uMjU3MSwxLjYxMi0uNDk1LDIuNDI2NS0uNzEzNywyLjgyNjItNy4yNTUzLDUuNTY5NS0xNC41NTA3LDguMjMxMS0yMS44ODYxLjg4NTktLjE1LDEuNzQyMy0uMzcyLDIuNTY5Mi0uNjY2MVpNMTQyLjk1ODQsMTguNTU1NmMxLjMwMzYsMy4zMjM2LDIuNTczMSw2LjY3LDMuODA2MywxMC4wMzkxLTIuNTA2NC4wNzkzLTUuMDExOS4wNjM1LTcuNTE3NC0uMDQ3NiwxLjI1NjEtMy4zMjU0LDIuNDkzMS02LjY1NTksMy43MTExLTkuOTkxNVoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTU3Ii8+CiAgPHBhdGggZD0iTTIzNC4wMjM4LDE0LjM2ODdjMi4zMzMzLS4xMjIsNC42MDE4LjE5NTIsNi44MDM3Ljk1MTYuMjQyNywxLjgzODYuNDE2OCwzLjY2MjQuNTIzNCw1LjQ3MTUtLjI3ODguMDczOS0uNTQ4MS4wNTgtLjgwODgtLjA0NzYtLjY0NDItMS40NjItMS4zMjU1LTIuOTA1MS0yLjA0NTktNC4zMjk2LTEuNzg3MS0uOTEyMS0zLjYyNzQtMS4wMzg5LTUuNTE5MS0uMzgwNi0xLjcwMzMuODUyNi0yLjQxNywyLjIzMjQtMi4xNDEsNC4xMzkzLjIxOTgsMS4wMjY3Ljc0MzIsMS44NjczLDEuNTcwMSwyLjUyMTcuNDU5Ni4zNDA4LjkzNTQuNjU4LDEuNDI3NC45NTE2LDIuMjAyOSwxLjA4NDksNC4zMjc3LDIuMjkwMiw2LjM3NTUsMy42MTYsMi40OTEyLDIuMTQ3NCwzLjE3MzUsNC43NjQyLDIuMDQ1OSw3Ljg1MDUtMS4wNjg2LDEuOTI0Mi0yLjY3MDEsMy4xNzcxLTQuODA1NCwzLjc1ODctMi41MjgzLjUzNzktNS4wNjUyLjU2OTctNy42MTI2LjA5NTItLjg2NjktLjE1NzItMS43MDgxLS4zOTUxLTIuNTIxNy0uNzEzNy0uMTkyMi0yLjA2NDUtLjM5NzgtNC4xMjYzLS42MTg1LTYuMTg1Mi4yOTIxLS4wMzAyLjU3NzYuMDAxNS44NTY0LjA5NTIuNjk3NSwxLjYxNzcsMS4zOTU5LDMuMjM1MywyLjA5MzUsNC44NTMsMS45MjQxLDEuMDQ0OCwzLjk1MzgsMS4zMTQ0LDYuMDkwMS44MDg4LDIuOTA0Mi0xLjAwMzQsMy45MzU3LTIuOTg1OCwzLjA5MjYtNS45NDczLS42MTg1LTEuMTI2LTEuNDkxMS0xLjk5ODMtMi42MTY4LTIuNjE2OC0yLjEwNjgtLjk3MzUtNC4xMDUxLTIuMTE1My01Ljk5NDktMy40MjU3LTIuOTQ4LTIuNDQ2OC0zLjUwMjctNS4zNDkxLTEuNjY1Mi04LjcwNjkuOTAwMi0xLjE1MjMsMi4wNTczLTEuOTI5MywzLjQ3MzItMi4zMzEzLjY3MjgtLjE3NTYsMS4zMzg5LS4zMTgzLDEuOTk4My0uNDI4MloiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTYxIi8+CiAgPHBhdGggZD0iTTE2MS4wMzgzLDE1LjAzNDhjMy41MzUxLS4wNDMzLDcuMDg3My4wMDQzLDEwLjY1NzYuMTQyNywxLjk0MTIuMjEyNywzLjYzNzkuOTU4MSw1LjA5MDksMi4yMzYyLDEuNDk4NywxLjgyMzIsMS44NDgsMy44NTMzLDEuMDQ2Nyw2LjA5MDEtLjc2NzksMS41MjkzLTEuOTU3NCwyLjU5MTgtMy41Njg0LDMuMTg3OC0uNDM3Ny4xNzc3LS44ODIxLjMzNjMtMS4zMzIyLjQ3NTgsMi4wODk2LDMuMTc5Nyw0LjE2NjksNi4zNjc0LDYuMjMyOCw5LjU2MzMsMS4wMTYzLjMzODUsMi4wNDY4LjYzOTgsMy4wOTI2LjkwNC4wOTEzLjMyMy4xMjI4LjY1Ni4wOTUyLjk5OTEtMi4wNjIxLjAxNTktNC4xMjQxLDAtNi4xODUyLS4wNDc2LTIuMjY0Ny0zLjUzNDctNC41MzMzLTcuMDcxNC02LjgwMzctMTAuNjEtLjg5NjQtLjA5MzctMS44MDA0LS4xMjU0LTIuNzEyLS4wOTUydjkuMDM5OWMxLjA0MzkuMjM3LDIuMDkwNi40NTkxLDMuMTQwMi42NjYxdjEuMDQ2N2gtOS43MDZjLS4wMjc2LS4zNDMxLjAwMzgtLjY3NjIuMDk1Mi0uOTk5MS44MjUtLjIzOCwxLjY1LS40NzU5LDIuNDc0MS0uNzEzNy4xMjY2LTYuNzI0NS4xMjY2LTEzLjQ0ODgsMC0yMC4xNzMzLS4wNTYxLjAxOTktLjEwMzcuMDUxNy0uMTQyNy4wOTUyLS43NzM2LS4zNDg0LTEuNTgyNS0uNjAyMS0yLjQyNjUtLjc2MTN2LS45NTE2Yy4zMzY5LjAyOTguNjU0Ny0uMDAyLjk1MTYtLjA5NTJaTTE2Ni42NTI2LDE2LjQ2MjJjMS45ODIxLS4wOTMsMy44NTM5LjI0MDEsNS42MTQzLjk5OTEsMS40NzMuOTE2MiwyLjE3MTUsMi4yNDg0LDIuMDkzNSwzLjk5NjYtLjAxOSwyLjE2MjUtMS4wMzQ0LDMuNjUzNC0zLjA0NSw0LjQ3MjQtMS41MTIuNTA2NS0zLjA2Ni43MTI3LTQuNjYyNy42MTg1di0xMC4wODY3WiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii45NjMiLz4KICA8cGF0aCBkPSJNNTUuNjA0MiwxNS4wMzQ4YzEuOTIzNi4wMjI1LDMuODQyNi4wMjI1LDUuNzU3LDAsLjA3MTQuMDU5Ni4xNTA3LjEwNzEuMjM3OS4xNDI3LDQuMjk4LDUuNjMwMiw4LjU5NTgsMTEuMjYwMiwxMi44OTM4LDE2Ljg5MDQuMDQ3Ni01LjEwNjcuMDYzNS0xMC4yMTM0LjA0NzYtMTUuMzIwMy0xLjAyNjUtLjE4MzItMi4wNDE1LS40MjExLTMuMDQ1LS43MTM3LS4wOTA1LS4yOTA5LS4xMjIyLS41OTIyLS4wOTUyLS45MDRoNy4zMjcxdi45NTE2Yy0uODUxNy4yNDE2LTEuNzA4MS40NjM3LTIuNTY5Mi42NjYxLS4wMTU5LDYuNDM5LDAsMTIuODc4LjA0NzYsMTkuMzE2OS4wMzExLjk4NDkuMDc4NywxLjk2ODEuMTQyNywyLjk0OTktLjQxNzIuMDMxLS44Mjk1LS4wMDA4LTEuMjM3LS4wOTUyLTUuMDgzMy02LjU1NTItMTAuMTQyNS0xMy4xMjEtMTUuMTc3Ni0xOS42OTc1LS4wNDc2LDUuODk5Ni0uMDYzNSwxMS43OTk0LS4wNDc2LDE3LjY5OTIsMS4wMjEuMjA3NiwyLjAzNjEuNDQ1NSwzLjA0NS43MTM3LjA5MS4zMjMuMTIyNy42NTYuMDk1Mi45OTkxLTIuNDMzNS4wMzEyLTQuODYwMS0uMDAwNS03LjI3OTUtLjA5NTItLjA3NDYtLjMxMDItLjA1ODctLjYxMTYuMDQ3Ni0uOTA0Ljc5MDctLjI0NzcsMS41ODM2LS40ODU2LDIuMzc4OS0uNzEzNy4wNjM2LTYuNDkzLjEyNy0xMi45Nzk1LjE5MDMtMTkuNDU5Ni0uODM4LS43Njc5LTEuODIxNC0xLjIyNzgtMi45NDk5LTEuMzc5OC0uMDQ0Mi0uMzgwOC4wMTkyLS43Mjk4LjE5MDMtMS4wNDY3WiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii45NjMiLz4KICA8cGF0aCBkPSJNMTA5Ljg0MzgsMTUuMDM0OGg5LjUxNTd2MS4wNDY3Yy0uOTg0OS4yMjI0LTEuOTY3OS40NjAzLTIuOTQ5OS43MTM3LDIuMTUzNCw1Ljg0NTYsNC4yOTQ0LDExLjY5NzgsNi40MjMxLDE3LjU1NjUsMi4xOTYyLTUuODUwNCw0LjMzNzMtMTEuNzE4NCw2LjQyMzEtMTcuNjA0MS0uOTUxNi0uMjIyLTEuOTAzMS0uNDQ0MS0yLjg1NDctLjY2NjF2LTEuMDQ2N2MyLjMxNjEtLjAxNTksNC42MzEzLDAsNi45NDY1LjA0NzYuMDkxMy4zMjMuMTIyOC42NTYuMDk1Mi45OTkxLS44NDMxLjE5NjMtMS42NjcyLjQ1MDEtMi40NzQxLjc2MTMtMi42ODA2LDcuMzI3MS01LjM2MDIsMTQuNjU0Mi04LjA0MDgsMjEuOTgxMy0uMzcyMS4xMjMzLS43Njg5LjE4NjgtMS4xODk1LjE5MDMtLjQyMDYtLjAwMzUtLjgxNzQtLjA2Ny0xLjE4OTUtLjE5MDMtMi43NTY3LTcuMzMxNS01LjUzMjQtMTQuNjkwNC04LjMyNjItMjIuMDc2NS0uMDU2MS4wMTk5LS4xMDM3LjA1MTctLjE0MjcuMDk1Mi0uNzA4OS0uMzQ4MS0xLjQ1NC0uNjAxOS0yLjIzNjItLjc2MTN2LTEuMDQ2N1oiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTY1Ii8+CiAgPHBhdGggZD0iTTE4NS4zOTg1LDE1LjEzaDE4Ljg0MTFjLjE2NTYsMS43NDM5LjMyNDUsMy40ODg2LjQ3NTgsNS4yMzM2LS4yOTIxLjAzMDItLjU3NzYtLjAwMTUtLjg1NjQtLjA5NTItLjU3NzYtMS4yNjc5LTEuMTQ4Ni0yLjUwNDktMS43MTI4LTMuNzExMS0xLjgwNy0uMDk1Mi0zLjYxNS0uMTI2OC01LjQyNC0uMDk1MnYyMC40NTg4YzEuMDc4MS4yMjIxLDIuMTU3Mi40NDQxLDMuMjM1My42NjYxdjEuMDQ2N2MtMy40MjU3LjAxNTktNi44NTEzLDAtMTAuMjc3LS4wNDc2LS4xMjY2LS4zMTcyLS4xMjY2LS42MzQ0LDAtLjk1MTYsMS4wNzM0LS4yNjgzLDIuMTUxNS0uNTA2MiwzLjIzNTMtLjcxMzd2LTIwLjQ1ODhjLTEuODA4LS4wMTU5LTMuNjE2LDAtNS40MjQuMDQ3Ni0uNjI1MiwxLjIzNDMtMS4yMTIzLDIuNDg3MS0xLjc2MDQsMy43NTg3LS4yOTEyLjA5MDUtLjU5MTkuMTIyMi0uOTA0LjA5NTIuMTU4LTEuNzMyNi4zNDgzLTMuNDc3MS41NzA5LTUuMjMzNloiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTQ4Ii8+CiAgPHBhdGggZD0iTTIxMC4zMjk3LDE1LjAzNDhjMy4zNDc2LjExMjcsNi42OTQzLjExMjcsMTAuMDM5MSwwLC4yMTcuMzA0NC4yOTU5LjY1MzMuMjM3OSwxLjA0NjctMS4wNzgxLjIyMi0yLjE1NzIuNDQ0MS0zLjIzNTMuNjY2MXYyMC4xNzMzYzEuMDQ5Ni4yMTk0LDIuMDk2My40NTczLDMuMTQwMi43MTM3LjA5MTMuMzIzLjEyMjguNjU2LjA5NTIuOTk5MS0zLjQyNTcuMDE1OS02Ljg1MTMsMC0xMC4yNzctLjA0NzYtLjEyNjYtLjMxNzItLjEyNjYtLjYzNDQsMC0uOTUxNiwxLjA3MzQtLjI2ODMsMi4xNTE1LS41MDYyLDMuMjM1My0uNzEzNy4wMTYyLTYuNjkyOCwwLTEzLjM4NTUtLjA0NzYtMjAuMDc4Mi0xLjA4LS4zMDU3LTIuMTc0My0uNTU5NS0zLjI4MjktLjc2MTMtLjAyNDctLjM1ODYuMDA3Ni0uNzA3Ni4wOTUyLTEuMDQ2N1oiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuOTYxIi8+CiAgPHBhdGggZD0iTTI5LjA1NTQsMTkuMDMxNGMyLjU5NzUsMS4wNDMzLDQuNDM3MywyLjg1MTMsNS41MTkxLDUuNDI0LjE5MzYuNzM3OC4zODQsMS40NjcyLjU3MDksMi4xODg2LjE2ODUsMS40NTQ0LjA0MTcsMi44ODE3LS4zODA2LDQuMjgyMS4wMTE4LjA1NzguMDQzNS4wODk0LjA5NTIuMDk1Mi0uMDMxNy4xMjY4LS4wNjM1LjI1MzgtLjA5NTIuMzgwNi0uMDgzNC0uMDEyNS0uMTQ2OC4wMTkyLS4xOTAzLjA5NTItLjE4NjkuNDA0OC0uMzQ1NS44MTcyLS40NzU4LDEuMjM3LS44NTQyLDEuNTY4My0yLjAyNzgsMi44NTI5LTMuNTIwOCwzLjg1MzktMS41ODQzLDEuMDYxOC0zLjI5NzEsMS44Mzg5LTUuMTM4NSwyLjMzMTMtLjg1OTMuMTc1Mi0xLjcxNTcuMzY1NS0yLjU2OTIuNTcwOS0uMTM5Ni0uMDIxMi0uMjgyMy0uMDUyOS0uNDI4Mi0uMDk1Mi0uMDMxNy4wNjM1LS4wNjM1LjEyNjgtLjA5NTIuMTkwMy0uMTIwNy0uMDExLS4yNDc2LS4wNDI3LS4zODA2LS4wOTUyLS4wNjM1LjA2MzUtLjEyNjguMTI2OC0uMTkwMy4xOTAzLS4wNzA1LS4xMDg2LS4xNDk5LS4xMDg2LS4yMzc5LDAtLjIzNjMtLjQ1NjQtLjQ5MDEtLjkwMDQtLjc2MTMtMS4zMzIyLjExMzEtLjA4ODQuMjQtLjEyMDEuMzgwNi0uMDk1Mi0uMDA4My4yOTQ4LjAzOTMuMzI2Ni4xNDI3LjA5NTIuMDMxNy4wNjM1LjA2MzUuMTI2OC4wOTUyLjE5MDMuMTQ3OC0uMzYxNS4yNzQ2LS4zNjE1LjM4MDYsMCwuMTA2NC0uMjE1NS4xODU3LS40Mzc2LjIzNzktLjY2NjEuNDEyNy0uMDg0Ni43OTMzLS4yNDMyLDEuMTQxOS0uNDc1OCwyLjcxMjQtMS4zNzI2LDQuNjQ3Mi0zLjQ2NjEsNS44MDQ2LTYuMjgwNC42MjE5LTEuNTgzLjgyODItMy4yMzI0LjYxODUtNC45NDgyLS4wMzg3LS4zMDI4LS4wODYzLS42MDQyLS4xNDI3LS45MDQtLjAxNzUtLjEzMDktLjA4MS0uMjEwMi0uMTkwMy0uMjM3OS0uNjA4MS0yLjgzNjctMi4xMzA2LTUuMDI1My00LjU2NzUtNi41NjU4LS4wNTkyLS4xNzQ2LS4xODYxLS4yODU3LS4zODA2LS4zMzMsMS42MzAzLS4wNDExLDMuMjAwNC4yOTE5LDQuNzEwMy45OTkxLjAzOC0uMDIxNy4wNTM4LS4wNTM1LjA0NzYtLjA5NTJaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBkPSJNMjkuMDU1NCwxOS4wMzE0Yy4wMDYyLjA0MTctLjAwOTYuMDczNS0uMDQ3Ni4wOTUyLTEuNTA5OS0uNzA3Mi0zLjA4LTEuMDQwMy00LjcxMDMtLjk5OTEuMTk0NS4wNDc0LjMyMTQuMTU4NC4zODA2LjMzMy0uMjg5MS0uMDUxNi0uNDMxOC0uMjEwMi0uNDI4Mi0uNDc1OCwxLjY4MS0uMDE5OSwzLjI4MjguMzI5MSw0LjgwNTQsMS4wNDY3WiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii41MTUiLz4KICA8cGF0aCBkPSJNMzQuNTc0NSwyNC40NTU0Yy4zMDI4LjYyNC40OTMxLDEuMjkwMS41NzA5LDEuOTk4M3YuMTkwM2MtLjE4Ny0uNzIxNC0uMzc3My0xLjQ1MDktLjU3MDktMi4xODg2WiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii4zOTciLz4KICA8cGF0aCBkPSJNMjkuMjQ1NywyNS4wMjYzYy4xMDkzLjAyNzcuMTcyOC4xMDcuMTkwMy4yMzc5LjA1NjQuMjk5OC4xMDQuNjAxMi4xNDI3LjkwNC4yMDk2LDEuNzE1OC4wMDM0LDMuMzY1MS0uNjE4NSw0Ljk0ODIuNjI1Ny0yLjAwNjIuNzIwOC00LjAzNjIuMjg1NS02LjA5MDFaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlzb2xhdGlvbj0iaXNvbGF0ZSIgb3BhY2l0eT0iLjI1MSIvPgogIDxwYXRoIGQ9Ik0zNS4xNDU0LDI2LjQ1MzdjLjMwOTksMS41Mzc2LjIxNDgsMy4wNjAyLS4yODU1LDQuNTY3NS0uMDUxNy0uMDA1Ny0uMDgzNC0uMDM3NC0uMDk1Mi0uMDk1Mi40MjIzLTEuNDAwMy41NDkyLTIuODI3Ny4zODA2LTQuMjgyMXYtLjE5MDNaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlzb2xhdGlvbj0iaXNvbGF0ZSIgb3BhY2l0eT0iLjQ5NSIvPgogIDxwYXRoIGQ9Ik0uMDMyNCwyOC4zNTY4Yy4xNTI3LjA3NDkuMjE2MS4yMDE3LjE5MDMuMzgwNi0uMTExNy0uMDk2NS0uMTc1MS0uMjIzMy0uMTkwMy0uMzgwNloiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaXNvbGF0aW9uPSJpc29sYXRlIiBvcGFjaXR5PSIuMDc1Ii8+CiAgPHBhdGggZD0iTTM0Ljc2NDgsMzEuNDAxOGMtLjE3MzUuNDczOS0uMzk1Ni45MTgtLjY2NjEsMS4zMzIyLjEzMDMtLjQxOTguMjg4OS0uODMyMi40NzU4LTEuMjM3LjA0MzUtLjA3NTkuMTA3LS4xMDc2LjE5MDMtLjA5NTJaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlzb2xhdGlvbj0iaXNvbGF0ZSIgb3BhY2l0eT0iLjQ3MSIvPgogIDxwYXRoIGQ9Ik0yMy4xNTU2LDM3LjM5NjdjLS4zNDg2LjIzMjYtLjcyOTIuMzkxMi0xLjE0MTkuNDc1OC0uMDUyMi4yMjg1LS4xMzE1LjQ1MDYtLjIzNzkuNjY2MS0uMTA2LS4zNjE1LS4yMzI5LS4zNjE1LS4zODA2LDAtLjAzMTctLjA2MzUtLjA2MzUtLjEyNjgtLjA5NTItLjE5MDMtLjEwMzQuMjMxNC0uMTUxLjE5OTYtLjE0MjctLjA5NTItLjE0MDYtLjAyNDktLjI2NzUuMDA2OC0uMzgwNi4wOTUyLjI3MTIuNDMxOC41MjUuODc1OC43NjEzLDEuMzMyMi4wODgtLjEwODYuMTY3NC0uMTA4Ni4yMzc5LDAsLjA2MzUtLjA2MzUuMTI2OC0uMTI2OC4xOTAzLS4xOTAzLjEzMy4wNTI0LjI2LjA4NDEuMzgwNi4wOTUyLjAzMTctLjA2MzUuMDYzNS0uMTI2OC4wOTUyLS4xOTAzLjE0NTkuMDQyMi4yODg2LjA3MzkuNDI4Mi4wOTUyLjg1MzYtLjIwNTQsMS43MS0uMzk1OCwyLjU2OTItLjU3MDktLjkxOC4zMjQ3LTEuODY5Ni41NjI2LTIuODU0Ny43MTM3LTIuOTAzMi40MzYtNS43ODk3LjQ4MzYtOC42NTkzLjE0MjcuMTU0NS4wMTMzLjI2NTUtLjA1MDEuMzMzLS4xOTAzLjA2MzUuMjUzOC4xMjY4LjI1MzguMTkwMywwLC4wNzY2LjIyODUuMTU1OS4yMTI2LjIzNzktLjA0NzYtLjAwODEtLjI4MzYtLjAzOTktLjU2OS0uMDk1Mi0uODU2NGwuMTQyNy0uMTQyN2MuMDA2My4yNjQyLjExNzIuNDcwMy4zMzMuNjE4NS0uMjUzOC4xOTAzLS4yNTM4LjM4MDYsMCwuNTcwOS0uMDMxNy4wMzE3LS4wNjM1LjA2MzUtLjA5NTIuMDk1Mi4xMzc0LjA3NDMuMjY0My4wNTg0LjM4MDYtLjA0NzYtLjAxODUtLjE0OTQtLjAxODUtLjI5MjEsMC0uNDI4Mi0uMDY4LS4xOTgtLjE2MzItLjQwNDEtLjI4NTUtLjYxODUuMDk3NC0uMTI4Ny4xOTI2LS4yNTU1LjI4NTUtLjM4MDYsMi42OTA5LjM2OTQsNS4yOTE4LjA1MjEsNy44MDI5LS45NTE2WiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii45NDYiLz4KICA8cGF0aCBkPSJNOTkuNzU3MSwzOC41Mzg2cS4xMjY2LjA2MzUsMCwwWiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBpc29sYXRpb249Imlzb2xhdGUiIG9wYWNpdHk9Ii4wNzUiLz4KICA8cGF0aCBkPSJNMTIuNDk4LDM3LjY4MjJjLjkyOTEuMzExNSwxLjg4MDcuNTMzNSwyLjg1NDcuNjY2MS0uMDkyOS4xMjUxLS4xODguMjUyLS4yODU1LjM4MDYuMTIyMy4yMTQ0LjIxNzQuNDIwNS4yODU1LjYxODUtLjAxODUuMTM2MS0uMDE4NS4yNzg4LDAsLjQyODItLjExNjQuMTA2LS4yNDMyLjEyMTktLjM4MDYuMDQ3Ni4wMzE3LS4wMzE3LjA2MzUtLjA2MzUuMDk1Mi0uMDk1Mi0uMjUzOC0uMTkwMy0uMjUzOC0uMzgwNiwwLS41NzA5LS4yMTU4LS4xNDgzLS4zMjY4LS4zNTQ0LS4zMzMtLjYxODVsLS4xNDI3LjE0MjdjLjA1NTMuMjg3NC4wODcxLjU3MjguMDk1Mi44NTY0LS4wODIuMjYwMi0uMTYxMy4yNzYxLS4yMzc5LjA0NzYtLjA2MzUuMjUzOC0uMTI2OC4yNTM4LS4xOTAzLDAtLjA2NzYuMTQwMi0uMTc4NS4yMDM2LS4zMzMuMTkwMy0uNDk5Ni4wMTg4LS45NzU0LS4wNDQ2LTEuNDI3NC0uMTkwMy4xODcyLjAyMjcuMzYxNy0uMDA4OS41MjM0LS4wOTUyLjEzOTUuMTczNy4zMTM5LjIyMTIuNTIzNC4xNDI3LjAyNDUtLjI0MTIuMDg3OS0uNDYzMy4xOTAzLS42NjYxLS4xODAyLS4xMDQ4LS4yNDM3LS4yMzE2LS4xOTAzLS4zODA2LjI2NDMtLjIwNjguMjQ4NC0uMjU0NC0uMDQ3Ni0uMTQyNy0uMjA2Mi0uMTQyNy0uMTkwMy0uMjUzOC4wNDc2LS4zMzMtLjMwMzQtLjA3MTgtLjYwNDctLjE1MTItLjkwNC0uMjM3OS0uMDk4LS4wMzItLjE0NTYtLjA5NTQtLjE0MjctLjE5MDNaIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+", alt: "Novartis", h: 18 },
                ].map(({ src, alt, h }) => (
                  <img key={alt} src={src} alt={alt} style={{ height: mobile ? Math.min(h, 16) : h, width: "auto", opacity: 0.3 }} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: C.navyDeep, padding: mobile ? "48px 20px" : "80px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal><Eyebrow color={C.gold}>Leadership</Eyebrow><SectionTitle>The team behind the platform.</SectionTitle></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3,1fr)", gap: 24, marginTop: mobile ? 24 : 40 }}>
            {[
              { name: "Joseph Thompson", role: "CEO", desc: "Enterprise software executive with deep experience in strategic planning, capital allocation, and value creation across Fortune 500 and PE-backed organizations." },
              { name: "Mark Sternberger", role: "CTO / CPO", desc: "Technology leader focused on AI-native architecture, enterprise security, and building platforms that give leaders real-time cross-functional visibility." },
              { name: "Kyle Moyer", role: "Fractional CMO", desc: "Brand strategist and marketing executive specializing in enterprise SaaS positioning, digital presence, and go-to-market strategy for high-growth companies." },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}><div style={{ padding: mobile ? 24 : 28, minHeight: mobile ? "auto" : 320, background: "rgba(14,178,175,0.04)", border: "1px solid rgba(14,178,175,0.1)", borderRadius: 10 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(14,178,175,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}><span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.1rem", color: C.teal, fontWeight: 500 }}>{p.name.split(" ").map(n => n[0]).join("")}</span></div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.05rem", fontWeight: 500, color: C.white, marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: C.teal, marginBottom: 12 }}>{p.role}</div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: C.g500, lineHeight: 1.6 }}>{p.desc}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: C.navy, padding: mobile ? "40px 20px" : "60px 40px", textAlign: "center" }}><Reveal><h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.3rem", fontWeight: 300, color: C.white, marginBottom: 10 }}>A Targatek Inc. Company</h2><p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: C.g500, maxWidth: 420, margin: "0 auto" }}>TARGA AI is the flagship product of Targatek Inc., a software company focused on enterprise value creation infrastructure.</p></Reveal></section>
      <section style={{ background: C.navyDeep, padding: mobile ? "48px 20px" : "80px 40px", textAlign: "center" }}><Reveal><div style={{ display: "flex", gap: 14, justifyContent: "center", flexDirection: mobile ? "column" : "row" }}><Btn onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Get in Touch</Btn><Btn variant="secondary" onClick={() => { setPage("ceo100"); window.scrollTo(0, 0); }}>Join 100 CEOs</Btn></div></Reveal></section>
    </>
  );
}

/* ═══ PAGE: 100 CEOS ═══ */
function CEO100Page({ setPage }) {
  const { mobile } = useMedia();
  return (
    <>
      <section style={{ background: "linear-gradient(165deg," + C.navyDeep + " 0%," + C.navy + " 100%)", padding: mobile ? "120px 20px 60px" : "160px 40px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <IconMark height={52} variant="light" />
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-1px", color: C.white, marginTop: 28, marginBottom: 20 }}>100 CEO Conversations</h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "2px", color: C.teal, textTransform: "uppercase", marginBottom: 24 }}>Building the Future of the Leader Experience</p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: C.g300, maxWidth: 560, margin: "0 auto" }}>We are having 100 conversations with enterprise CEOs about how they create value, where they lose visibility, and what tools they wish existed.</p>
        </div>
      </section>
      <section style={{ background: C.navy, padding: mobile ? "48px 20px" : "80px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal><Eyebrow color={C.gold}>Why Participate</Eyebrow><SectionTitle>What you get from the conversation.</SectionTitle></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr", gap: 28, marginTop: mobile ? 24 : 40 }}>
            {[
              { t: "Executive Peer Insight", d: "Aggregated findings from leaders across industries — patterns, blind spots, opportunities." },
              { t: "Early Platform Access", d: "Participants who commit to a pilot get priority access and favorable terms." },
              { t: "Shape the Product", d: "Your input directly influences features and AI capabilities. Co-creation, not a sales pitch." },
            ].map(({ t, d }, i) => (
              <Reveal key={t} delay={i * 0.1}><div style={{ padding: "28px 24px", minHeight: 180, background: "rgba(14,178,175,0.03)", border: "1px solid rgba(14,178,175,0.08)", borderRadius: 10 }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1rem", fontWeight: 500, color: C.white, marginBottom: 10 }}>{t}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", lineHeight: 1.7, color: C.g300 }}>{d}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: C.navyDeep, padding: mobile ? "48px 20px" : "80px 40px" }}>
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
      <section style={{ background: C.navy, padding: mobile ? "48px 20px" : "80px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ display: "flex", gap: mobile ? 32 : 48, justifyContent: "center", marginBottom: 40, flexWrap: mobile ? "wrap" : "nowrap" }}>
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
  const { mobile } = useMedia();
  return (
    <section style={{ background: "linear-gradient(165deg," + C.navyDeep + " 0%," + C.navy + " 100%)", padding: mobile ? "120px 20px 60px" : "160px 40px 100px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 32 : 80 }}>
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
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.1rem", fontWeight: 500, color: C.white, marginBottom: 24 }}>Request More Information</h3>
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
