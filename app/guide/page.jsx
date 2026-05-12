'use client';

const NAV_BAR = `
<div style="position:fixed;top:0;left:0;right:0;height:40px;background:#0f2035;z-index:1000;display:flex;align-items:center;padding:0 16px;gap:0;border-bottom:1px solid rgba(255,255,255,0.08);font-family:-apple-system,sans-serif;">
  <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;margin-right:24px;">
    <svg width="16" height="16" viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill="#0eb2af"/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill="#fff"/></svg>
    <span style="font-size:13px;font-weight:700;color:#fff;letter-spacing:-0.01em;">TARGA AI</span>
  </div>
  <a href="/mockup" style="padding:0 14px;height:40px;display:inline-flex;align-items:center;font-size:12px;font-weight:400;color:rgba(255,255,255,0.55);letter-spacing:0.04em;text-decoration:none;border-bottom:2px solid transparent;">Live Demo</a>
  <a href="/guide" style="padding:0 14px;height:40px;display:inline-flex;align-items:center;font-size:12px;font-weight:600;color:#0eb2af;letter-spacing:0.04em;text-decoration:none;border-bottom:2px solid #0eb2af;">Platform Guide</a>
  <a href="/reference" style="padding:0 14px;height:40px;display:inline-flex;align-items:center;font-size:12px;font-weight:400;color:rgba(255,255,255,0.55);letter-spacing:0.04em;text-decoration:none;border-bottom:2px solid transparent;">Technical Reference</a>
  <div style="margin-left:auto;font-size:9px;color:rgba(255,255,255,0.25);letter-spacing:0.12em;text-transform:uppercase;">HBC-TARGA-UX-2026</div>
</div>
<div style="height:40px;"></div>
`;

export const metadata = {
  title: 'TARGA AI — Platform Feature Guide',
  robots: { index: false, follow: false },
};

export default function GuidePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

/* ── TARGA Design System v1.0.1 ── */
:root {
  --navy:#0f2035; --navy-d:#0c1424; --navy-deep:#060e1a; --navy-mid:#1a3a5c;
  --teal:#0eb2af; --teal-h:#0cc7c4; --teal-300:#7adcd2;
  --gold:#fbbf24; --gold-d:#d09a2e;
  --ok:#2c8a5e; --warn:#b07f1f; --danger:#b53a3a;
  --advisor:#8a5e10;
  --bg:#eef1f5; --surface:#fff; --raised:#fafbfc; --sunken:#e4e9f0;
  --border:rgba(12,20,36,0.08); --border-md:rgba(12,20,36,0.14);
  --text-1:#0c1424; --text-2:#1e3052; --text-3:#3a5278; --text-4:rgba(12,20,36,0.4);
  --font-d:'Space Grotesk',sans-serif;
  --font-m:'JetBrains Mono',monospace;
  --r-sm:4px; --r-md:8px; --r-lg:12px; --r-xl:18px; --r-pill:999px;
  --shadow:0 1px 2px rgba(12,20,36,0.04),0 4px 16px rgba(12,20,36,0.07);
  --shadow-lg:0 8px 40px rgba(12,20,36,0.12);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:var(--font-d);background:var(--bg);color:var(--text-1);-webkit-font-smoothing:antialiased;overflow-x:hidden;}

/* ── PROGRESS BAR ── */
.progress-bar{position:fixed;top:0;left:0;height:2px;background:var(--teal);z-index:999;transition:width 0.1s;width:0%;}

/* ── NAV ── */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(9,18,31,0.95);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,0.07);padding:0 40px;display:flex;align-items:center;justify-content:space-between;height:56px;}
.nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none;}
.nav-logo-mark{width:24px;height:24px;}
.nav-logo-name{font-family:var(--font-d);font-size:15px;font-weight:700;color:#fff;letter-spacing:-0.01em;}
.nav-links{display:flex;align-items:center;gap:6px;}
.nav-link{font-family:var(--font-m);font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.5);text-decoration:none;padding:5px 12px;border-radius:var(--r-pill);transition:all 140ms;border:1px solid transparent;}
.nav-link:hover{color:#fff;background:rgba(255,255,255,0.06);}
.nav-link.active{color:var(--teal-300);border-color:rgba(14,178,175,0.3);background:rgba(14,178,175,0.08);}
.nav-cta{padding:7px 18px;background:var(--teal);color:#fff;border-radius:var(--r-pill);font-family:var(--font-m);font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;transition:background 140ms;}
.nav-cta:hover{background:var(--teal-h);}

/* ── HERO ── */
.hero{min-height:100vh;background:linear-gradient(160deg,var(--navy-deep) 0%,#0a1628 60%,#0f2035 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 40px 60px;position:relative;overflow:hidden;text-align:center;}
.hero::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,0.008) 0,rgba(255,255,255,0.008) 1px,transparent 1px,transparent 3px);pointer-events:none;}
.hero-orb{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;}
.hero-orb-1{width:600px;height:600px;background:radial-gradient(circle,rgba(14,178,175,0.1) 0%,transparent 70%);top:-200px;right:-200px;}
.hero-orb-2{width:400px;height:400px;background:radial-gradient(circle,rgba(251,191,36,0.06) 0%,transparent 70%);bottom:-100px;left:-100px;}
.hero-eyebrow{font-family:var(--font-m);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--teal-300);margin-bottom:20px;opacity:0.8;}
.hero-title{font-size:clamp(42px,6vw,72px);font-weight:800;color:#fff;letter-spacing:-0.035em;line-height:1;margin-bottom:20px;}
.hero-title span{color:var(--teal-300);}
.hero-sub{font-size:18px;color:rgba(255,255,255,0.55);line-height:1.7;max-width:56ch;margin:0 auto 40px;}
.hero-count{display:flex;align-items:center;gap:32px;justify-content:center;margin-bottom:60px;}
.hero-stat{text-align:center;}
.hero-stat-n{font-size:36px;font-weight:800;color:#fff;letter-spacing:-0.03em;display:block;}
.hero-stat-l{font-family:var(--font-m);font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.35);display:block;margin-top:4px;}
.hero-stat-div{width:1px;height:40px;background:rgba(255,255,255,0.1);}
.hero-scroll{font-family:var(--font-m);font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.25);display:flex;align-items:center;gap:8px;}
.hero-scroll::after{content:'↓';animation:bounce 2s ease-in-out infinite;}
@keyframes bounce{0%,100%{transform:translateY(0);}50%{transform:translateY(4px);}}

/* ── SECTION WRAPPER ── */
.section{padding:100px 0;position:relative;}
.section-inner{max-width:1200px;margin:0 auto;padding:0 40px;}
.section-alt{background:var(--surface);}
.section-dark{background:var(--navy-d);}

/* ── FEATURE NUMBER ── */
.feat-number{font-family:var(--font-m);font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--teal);margin-bottom:12px;display:flex;align-items:center;gap:10px;}
.feat-number::before{content:'';flex:0 0 24px;height:1px;background:var(--teal);opacity:0.5;}

/* ── FEATURE LAYOUTS ── */
.feat-split{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
.feat-split.reverse{direction:rtl;}
.feat-split.reverse > *{direction:ltr;}
.feat-text{}
.feat-eyebrow{font-family:var(--font-m);font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:var(--teal);margin-bottom:10px;opacity:0.8;}
.feat-title{font-size:clamp(28px,3.5vw,42px);font-weight:800;letter-spacing:-0.03em;line-height:1.05;margin-bottom:16px;color:var(--text-1);}
.feat-title.light{color:#fff;}
.feat-body{font-size:16px;color:var(--text-3);line-height:1.75;margin-bottom:24px;}
.feat-body.light{color:rgba(255,255,255,0.6);}
.feat-body strong{color:var(--text-1);font-weight:600;}
.feat-body.light strong{color:#fff;}
.feat-callout{padding:16px 20px;border-radius:var(--r-lg);margin-bottom:20px;}
.feat-callout.teal{background:rgba(14,178,175,0.08);border-left:3px solid var(--teal);}
.feat-callout.gold{background:rgba(251,191,36,0.07);border-left:3px solid var(--gold);}
.feat-callout.danger{background:rgba(181,58,58,0.07);border-left:3px solid var(--danger);}
.feat-callout.dark-teal{background:rgba(14,178,175,0.1);border-left:3px solid var(--teal);}
.feat-callout-label{font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:5px;}
.feat-callout.teal .feat-callout-label,.feat-callout.dark-teal .feat-callout-label{color:var(--teal);}
.feat-callout.gold .feat-callout-label{color:var(--gold);}
.feat-callout.danger .feat-callout-label{color:var(--danger);}
.feat-callout-text{font-size:13px;color:var(--text-2);line-height:1.65;}
.feat-callout.dark-teal .feat-callout-text{color:rgba(255,255,255,0.8);}

/* ── MOCK SCREEN ── */
.mock{border-radius:var(--r-xl);overflow:hidden;box-shadow:var(--shadow-lg),0 0 0 1px rgba(255,255,255,0.06);position:relative;background:var(--surface);}
.mock-bar{height:40px;background:var(--navy-d);display:flex;align-items:center;padding:0 16px;gap:8px;}
.mock-dot{width:10px;height:10px;border-radius:50%;}
.mock-dot-r{background:#ff5f57;} .mock-dot-g{background:#28c840;} .mock-dot-y{background:#febc2e;}
.mock-url{font-family:var(--font-m);font-size:10px;color:rgba(255,255,255,0.3);margin:0 auto;letter-spacing:0.04em;}
.mock-content{padding:0;}

/* ── MOCK: CEO DASHBOARD ── */
.mock-header{background:var(--navy-deep);padding:12px 20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.06);}
.mock-logo{display:flex;align-items:center;gap:7px;font-family:var(--font-d);font-size:13px;font-weight:700;color:#fff;}
.mock-logo-mark{width:18px;height:18px;}
.mock-persona-bar{background:#0c1a2e;padding:8px 20px;display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(255,255,255,0.05);}
.mock-chip{display:flex;align-items:center;gap:6px;padding:5px 12px;border-radius:var(--r-pill);font-size:11px;font-weight:600;color:rgba(255,255,255,0.5);cursor:pointer;}
.mock-chip.active{background:rgba(14,178,175,0.15);color:var(--teal-300);border:1px solid rgba(14,178,175,0.25);}
.mock-chip-av{width:18px;height:18px;border-radius:50%;font-family:var(--font-m);font-size:7px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.mock-body{padding:20px;background:var(--bg);}
.mock-greeting{font-family:var(--font-d);font-size:22px;font-weight:700;color:var(--text-1);margin-bottom:4px;}
.mock-sub{font-size:12px;color:var(--text-3);margin-bottom:16px;}
.mock-kpi-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px;}
.mock-kpi{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:14px 16px;box-shadow:var(--shadow);}
.mock-kpi-eye{font-family:var(--font-m);font-size:8px;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-4);margin-bottom:6px;}
.mock-kpi-val{font-size:22px;font-weight:700;color:var(--text-1);letter-spacing:-0.02em;line-height:1;}
.mock-kpi-sub{font-size:10px;color:var(--text-4);margin-top:3px;}
.mock-kpi-trend{font-size:10px;font-weight:600;margin-top:6px;}
.mock-kpi-bar{height:2px;background:var(--sunken);border-radius:999px;margin-top:8px;overflow:hidden;}
.mock-kpi-fill{height:100%;border-radius:999px;}
.mock-two-col{display:grid;grid-template-columns:1fr 360px;gap:10px;}
.mock-goals-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}
.mock-goals-label{font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-4);}
.mock-goal-row{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);margin-bottom:6px;box-shadow:var(--shadow);}
.mock-goal-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.mock-goal-name{font-size:12px;font-weight:600;color:var(--text-1);flex:1;}
.mock-goal-sub{font-size:10px;color:var(--text-4);}
.mock-goal-badge{font-family:var(--font-m);font-size:8px;font-weight:700;padding:2px 8px;border-radius:var(--r-pill);}
.badge-risk{background:rgba(176,127,31,0.1);color:var(--warn);}
.badge-ok{background:rgba(44,138,94,0.1);color:var(--ok);}
.badge-danger{background:rgba(181,58,58,0.1);color:var(--danger);}
.mock-intel-panel{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:14px;box-shadow:var(--shadow);}
.mock-intel-head{font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-4);margin-bottom:10px;}
.mock-intel-card{padding:10px 12px;border-radius:var(--r-md);margin-bottom:8px;border:1px solid;}
.mock-intel-card.critical{background:rgba(181,58,58,0.05);border-color:rgba(181,58,58,0.2);}
.mock-intel-card.insight{background:rgba(251,191,36,0.05);border-color:rgba(251,191,36,0.2);}
.mock-intel-tag{font-family:var(--font-m);font-size:8px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;}
.mock-intel-card.critical .mock-intel-tag{color:var(--danger);}
.mock-intel-card.insight .mock-intel-tag{color:var(--gold-d);}
.mock-intel-text{font-size:11px;color:var(--text-2);line-height:1.5;}

/* ── MOCK: FOCUS VIEW ── */
.mock-focus-ribbon{background:var(--navy-deep);padding:12px 20px;display:flex;align-items:center;gap:20px;}
.mock-rn{display:flex;flex-direction:column;align-items:center;gap:4px;opacity:0.5;}
.mock-rn.active{opacity:1;}
.mock-rn-chip{width:28px;height:28px;border-radius:8px;border:1.5px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;}
.mock-rn.active .mock-rn-chip{border-color:var(--teal);background:rgba(14,178,175,0.12);}
.mock-rn-label{font-family:var(--font-m);font-size:8px;color:rgba(255,255,255,0.4);text-align:center;max-width:70px;}
.mock-rn.active .mock-rn-label{color:#fff;font-weight:600;}
.mock-focus-grid{display:grid;grid-template-columns:180px 1fr 240px;gap:0;padding:16px;background:var(--bg);}
.mock-focus-panel{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:12px;margin-bottom:10px;box-shadow:var(--shadow);}
.mock-panel-title{font-family:var(--font-m);font-size:8px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-4);margin-bottom:8px;}
.mock-metric-row{margin-bottom:8px;}
.mock-metric-name{font-size:10px;font-weight:600;color:var(--text-1);margin-bottom:2px;}
.mock-metric-val{font-size:18px;font-weight:700;color:var(--text-1);letter-spacing:-0.02em;}
.mock-metric-bar{height:3px;background:var(--sunken);border-radius:999px;margin-top:4px;overflow:hidden;}
.mock-metric-fill{height:100%;border-radius:999px;}
.mock-hero-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);box-shadow:var(--shadow);overflow:hidden;margin:0 12px;}
.mock-lcd{height:40px;background:var(--navy-deep);display:flex;align-items:center;justify-content:space-between;padding:0 14px;}
.mock-lcd-label{font-family:var(--font-m);font-size:9px;color:var(--teal-300);letter-spacing:0.12em;}
.mock-lcd-segs{display:flex;gap:4px;}
.mock-lcd-seg{font-family:var(--font-m);font-size:8px;padding:3px 8px;border-radius:3px;border:1px solid rgba(255,255,255,0.06);color:rgba(180,195,220,0.25);}
.mock-lcd-seg.on{color:#e0903a;border-color:rgba(224,144,58,0.3);background:rgba(224,144,58,0.08);}
.mock-hero-body{padding:14px;}
.mock-hero-title{font-size:15px;font-weight:700;color:var(--text-1);margin-bottom:4px;line-height:1.2;}
.mock-hero-desc{font-size:10px;color:var(--text-3);line-height:1.5;margin-bottom:10px;}
.mock-hero-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;border-top:1px solid var(--border);padding-top:10px;}
.mock-hkpi-l{font-family:var(--font-m);font-size:7px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-4);margin-bottom:3px;}
.mock-hkpi-v{font-size:18px;font-weight:700;color:var(--text-1);letter-spacing:-0.02em;}
.mock-tn{background:rgba(138,94,16,0.06);border-left:3px solid var(--advisor);border-radius:0 var(--r-md) var(--r-md) 0;padding:10px 12px;margin-top:10px;}
.mock-tn-badge{font-family:var(--font-m);font-size:8px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--advisor);margin-bottom:4px;}
.mock-tn-text{font-size:10px;color:var(--text-1);line-height:1.5;font-weight:500;}
.mock-action-item{padding:8px 0;border-bottom:1px solid var(--border);}
.mock-action-item:last-child{border-bottom:none;}
.mock-action-name{font-size:10px;font-weight:600;color:var(--text-1);margin-bottom:2px;}
.mock-action-meta{font-size:9px;color:var(--text-4);}
.mock-action-badge{font-family:var(--font-m);font-size:7px;font-weight:700;padding:1px 6px;border-radius:3px;display:inline-block;margin-bottom:3px;}

/* ── MOCK: EQUATION CARD ── */
.mock-eq-card{background:var(--navy-deep);border-radius:var(--r-xl);padding:20px;border:1px solid rgba(255,255,255,0.08);}
.mock-eq-eye{font-family:var(--font-m);font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:var(--teal-300);margin-bottom:6px;}
.mock-eq-name{font-size:14px;font-weight:700;color:#fff;margin-bottom:14px;}
.mock-eq-header{display:grid;grid-template-columns:1fr 1fr;font-family:var(--font-m);font-size:8px;color:rgba(255,255,255,0.25);padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.07);margin-bottom:4px;}
.mock-eq-row{display:grid;grid-template-columns:1fr 1fr;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);}
.mock-eq-row:last-of-type{border-bottom:none;}
.mock-eq-contrib{font-family:var(--font-m);font-size:11px;color:rgba(255,255,255,0.6);}
.mock-eq-math{font-family:var(--font-m);font-size:10px;color:rgba(255,255,255,0.4);}
.mock-eq-math span{color:var(--gold-d);font-weight:700;}
.mock-eq-owner{font-family:var(--font-m);font-size:8px;font-weight:700;background:rgba(14,178,175,0.15);color:var(--teal-300);padding:1px 6px;border-radius:3px;margin-right:5px;}
.mock-eq-total{display:flex;align-items:center;justify-content:space-between;margin-top:12px;padding-top:12px;border-top:2px solid rgba(255,255,255,0.12);}
.mock-eq-formula{font-family:var(--font-m);font-size:10px;color:rgba(255,255,255,0.3);}
.mock-eq-result{font-size:28px;font-weight:800;color:var(--gold-d);letter-spacing:-0.02em;}

/* ── MOCK: WHAT CHANGED ── */
.mock-ra-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}
.mock-ra-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:12px;box-shadow:var(--shadow);}
.mock-ra-head{display:flex;align-items:center;gap:6px;margin-bottom:6px;}
.mock-ra-av{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--font-m);font-size:7px;font-weight:700;color:#fff;flex-shrink:0;}
.mock-ra-who{font-size:11px;font-weight:600;color:var(--text-1);}
.mock-ra-when{font-size:10px;color:var(--text-4);margin-left:auto;}
.mock-ra-text{font-size:11px;color:var(--text-2);line-height:1.5;margin-bottom:5px;}
.mock-ra-type{font-family:var(--font-m);font-size:8px;font-weight:700;padding:2px 7px;border-radius:3px;display:inline-block;}
.ra-blocker{background:rgba(181,58,58,0.1);color:var(--danger);}
.ra-update{background:rgba(13,139,130,0.08);color:var(--teal);}
.ra-done{background:rgba(44,138,94,0.1);color:var(--ok);}

/* ── MOCK: PACING MODELS ── */
.mock-pace-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
.mock-pace-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:14px;box-shadow:var(--shadow);}
.mock-pace-title{font-size:13px;font-weight:700;color:var(--text-1);margin-bottom:4px;}
.mock-pace-sub{font-size:10px;color:var(--text-4);margin-bottom:10px;line-height:1.4;}
.mock-pace-chart{height:48px;background:var(--sunken);border-radius:var(--r-md);position:relative;overflow:hidden;}
.mock-pace-bar{position:absolute;bottom:0;left:0;height:100%;border-radius:var(--r-sm) var(--r-sm) 0 0;}
.mock-pace-formula{font-family:var(--font-m);font-size:10px;color:var(--teal);margin-top:6px;}

/* ── MOCK: MOBILE ── */
.mock-mobile{width:260px;height:480px;border-radius:28px;border:6px solid var(--navy-d);overflow:hidden;position:relative;box-shadow:var(--shadow-lg);}
.mock-mobile-screen{background:var(--bg);height:100%;display:flex;flex-direction:column;}
.mock-mobile-topbar{background:var(--navy-deep);padding:8px 12px;display:flex;align-items:center;justify-content:space-between;}
.mock-mobile-logo{font-family:var(--font-d);font-size:11px;font-weight:700;color:#fff;}
.mock-mobile-panel{flex:1;padding:12px;display:flex;flex-direction:column;gap:8px;}
.mock-mobile-kpi{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:10px 12px;box-shadow:var(--shadow);}
.mock-mobile-kpi-l{font-family:var(--font-m);font-size:7px;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-4);margin-bottom:4px;}
.mock-mobile-kpi-v{font-size:20px;font-weight:700;color:var(--text-1);letter-spacing:-0.02em;}
.mock-mobile-kpi-t{font-size:10px;font-weight:600;margin-top:4px;}
.mock-mobile-rail{position:absolute;right:8px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:4px;align-items:center;padding:8px;background:rgba(255,255,255,0.9);border-radius:var(--r-lg);box-shadow:var(--shadow);}
.mock-dpad{display:grid;grid-template-columns:repeat(3,16px);grid-template-rows:repeat(3,16px);gap:2px;}
.mock-dpad-btn{width:16px;height:16px;border-radius:4px;background:rgba(12,20,36,0.08);display:flex;align-items:center;justify-content:center;font-size:8px;color:var(--text-3);}
.mock-dpad-btn.active{background:var(--teal);color:#fff;}
.mock-dpad-btn.blank{background:transparent;}
.mock-panel-indicator{display:flex;gap:3px;margin-top:6px;}
.mock-panel-dot{width:6px;height:6px;border-radius:50%;background:rgba(12,20,36,0.1);}
.mock-panel-dot.active{background:var(--teal);}

/* ── FEATURE CHIP LIST ── */
.feat-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;}
.feat-chip{display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:var(--r-pill);font-family:var(--font-m);font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;border:1px solid;}
.feat-chip.teal{color:var(--teal);border-color:rgba(14,178,175,0.3);background:rgba(14,178,175,0.06);}
.feat-chip.gold{color:var(--gold-d);border-color:rgba(251,191,36,0.3);background:rgba(251,191,36,0.06);}
.feat-chip.ok{color:var(--ok);border-color:rgba(44,138,94,0.3);background:rgba(44,138,94,0.06);}

/* ── TIMELINE SECTION ── */
.timeline{position:relative;padding-left:32px;}
.timeline::before{content:'';position:absolute;left:7px;top:4px;bottom:4px;width:2px;background:linear-gradient(180deg,var(--teal),rgba(14,178,175,0.1));}
.timeline-item{position:relative;margin-bottom:32px;}
.timeline-dot{position:absolute;left:-32px;top:3px;width:16px;height:16px;border-radius:50%;background:var(--teal);border:3px solid var(--bg);box-shadow:0 0 0 2px var(--teal);}
.timeline-day{font-family:var(--font-m);font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;}
.timeline-action{font-size:15px;font-weight:600;color:var(--text-1);margin-bottom:4px;}
.timeline-desc{font-size:13px;color:var(--text-3);line-height:1.6;}

/* ── BENEFIT GRID ── */
.benefit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.benefit-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:24px;box-shadow:var(--shadow);}
.benefit-icon{width:40px;height:40px;border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:14px;}
.benefit-title{font-size:16px;font-weight:700;color:var(--text-1);margin-bottom:8px;letter-spacing:-0.01em;}
.benefit-desc{font-size:13px;color:var(--text-3);line-height:1.65;}

/* ── CLOSING CTA ── */
.cta-block{background:linear-gradient(160deg,var(--navy-deep),#0a1628);padding:100px 40px;text-align:center;position:relative;overflow:hidden;}
.cta-block::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,0.006) 0,rgba(255,255,255,0.006) 1px,transparent 1px,transparent 3px);}
.cta-title{font-size:clamp(32px,4vw,52px);font-weight:800;color:#fff;letter-spacing:-0.03em;margin-bottom:16px;position:relative;}
.cta-title span{color:var(--teal-300);}
.cta-sub{font-size:16px;color:rgba(255,255,255,0.5);max-width:48ch;margin:0 auto 32px;line-height:1.7;position:relative;}
.cta-btn{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:var(--teal);color:#fff;border-radius:var(--r-pill);font-family:var(--font-m);font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;transition:background 140ms;position:relative;}
.cta-btn:hover{background:var(--teal-h);}

/* ── RUBIK'S CUBE ── */
.rubik-scene { width:140px; height:140px; perspective:400px; margin:0 auto; }
.rubik-cube {
  width:100%; height:100%; position:relative;
  transform-style:preserve-3d;
  transform:rotateX(-20deg) rotateY(30deg);
  transition:transform 0.7s cubic-bezier(0.4,0.2,0.2,1);
}
.rubik-face {
  position:absolute; width:140px; height:140px;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  gap:6px; border:2px solid rgba(255,255,255,0.15);
  backface-visibility:visible;
}
.rubik-front   { transform:translateZ(70px); background:rgba(13,139,130,0.85); }
.rubik-back    { transform:rotateY(180deg) translateZ(70px); background:rgba(176,127,31,0.75); }
.rubik-right   { transform:rotateY(90deg) translateZ(70px); background:rgba(44,138,94,0.75); }
.rubik-left    { transform:rotateY(-90deg) translateZ(70px); background:rgba(107,63,160,0.75); }
.rubik-top     { transform:rotateX(90deg) translateZ(70px); background:rgba(176,127,31,0.7); }
.rubik-bottom  { transform:rotateX(-90deg) translateZ(70px); background:rgba(26,47,90,0.85); }
.rubik-face-label {
  font-family:var(--font-m); font-size:10px; font-weight:700; letter-spacing:0.14em;
  text-transform:uppercase; color:#fff; position:absolute; top:10px;
}
.rubik-grid { display:grid; grid-template-columns:repeat(3,28px); gap:3px; margin-top:18px; }
.rg-cell { width:28px; height:28px; border-radius:3px; background:rgba(255,255,255,0.2); }
.rg-center { background:rgba(255,255,255,0.45); }
.rg-b { background:rgba(251,191,36,0.3); }
.rg-g { background:rgba(44,138,94,0.4); }
.rg-p { background:rgba(107,63,160,0.4); }
.rg-y { background:rgba(251,191,36,0.4); }
.rg-n { background:rgba(26,47,90,0.5); }

/* Cube rotations per face */
.rubik-cube[data-face="home"]        { transform:rotateX(-20deg) rotateY(30deg); }
.rubik-cube[data-face="intel"]       { transform:rotateX(-90deg) rotateY(0deg); }
.rubik-cube[data-face="actions"]     { transform:rotateX(90deg) rotateY(0deg); }
.rubik-cube[data-face="metrics"]     { transform:rotateX(-20deg) rotateY(-90deg); }
.rubik-cube[data-face="connections"] { transform:rotateX(-20deg) rotateY(90deg); }

/* Face legend rows */
.cube-face-row {
  display:flex; align-items:center; gap:8px;
  padding:5px 8px; border-radius:6px; transition:background 140ms;
}
.cube-face-row:hover, .cube-face-row.active { background:rgba(12,20,36,0.06); }
.cube-face-swatch { width:12px; height:12px; border-radius:3px; flex-shrink:0; }
.cube-face-name { font-family:var(--font-m); font-size:10px; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; color:var(--text-3); }

/* ── JOE'S VOICE SECTION ── */
.jv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.jv-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-xl); padding:24px;
  box-shadow:var(--shadow); position:relative; overflow:hidden;
}
.jv-card::before {
  content:''; position:absolute; top:0; left:0; right:0; height:3px;
}
.jv-card.teal::before { background:var(--teal); }
.jv-card.gold::before { background:var(--gold); }
.jv-card.ok::before { background:var(--ok); }
.jv-quote-mark {
  font-family:'Georgia',serif; font-size:64px; line-height:0.7;
  color:var(--teal); opacity:0.15; position:absolute; top:16px; right:16px;
}
.jv-quote { font-size:14px; color:var(--text-1); line-height:1.7; font-style:italic; margin-bottom:16px; position:relative; }
.jv-quote strong { font-style:normal; color:var(--teal); }
.jv-card.gold .jv-quote strong { color:var(--gold-d); }
.jv-card.ok .jv-quote strong { color:var(--ok); }
.jv-attribution { font-family:var(--font-m); font-size:10px; color:var(--text-4); letter-spacing:0.06em; }
.jv-feature-tag { display:inline-flex; align-items:center; gap:5px; padding:3px 10px; border-radius:var(--r-pill); font-family:var(--font-m); font-size:9px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-top:10px; }
.jv-feature-tag.teal { background:rgba(14,178,175,0.08); color:var(--teal); }
.jv-feature-tag.gold { background:rgba(251,191,36,0.08); color:var(--gold-d); }
.jv-feature-tag.ok   { background:rgba(44,138,94,0.08); color:var(--ok); }

@media(max-width:900px){ .jv-grid { grid-template-columns:1fr; } }
opacity:0;transform:translateY(24px);transition:opacity 0.6s cubic-bezier(0.4,0,0.2,1),transform 0.6s cubic-bezier(0.4,0,0.2,1);}
.fade-up.visible{opacity:1;transform:translateY(0);}
.fade-up-delay-1{transition-delay:0.1s;}
.fade-up-delay-2{transition-delay:0.2s;}
.fade-up-delay-3{transition-delay:0.3s;}

/* ── DIVIDER ── */
.divider{height:1px;background:linear-gradient(90deg,transparent,var(--border),transparent);margin:0 40px;}

@media(max-width:900px){
  .feat-split,.mock-two-col{grid-template-columns:1fr;}
  .feat-split.reverse{direction:ltr;}
  .benefit-grid{grid-template-columns:1fr;}
  .mock-kpi-strip{grid-template-columns:repeat(2,1fr);}
  .mock-focus-grid{grid-template-columns:1fr;}
  .mock-ra-grid{grid-template-columns:1fr;}
  .mock-pace-grid{grid-template-columns:1fr;}
}

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: NAV_BAR + `
<div class="progress-bar" id="progressBar"></div>

<!-- NAV -->
<nav class="nav">
  <a href="#top" class="nav-logo">
    <svg class="nav-logo-mark" viewBox="0 0 55.86 58.3"><polygon fill="#1f476a" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/><polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/></svg>
    <span class="nav-logo-name">TARGA AI</span>
  </a>
  <div class="nav-links">
    <a href="#portfolio" class="nav-link">Portfolio</a>
    <a href="#focus" class="nav-link">Focus</a>
    <a href="#intelligence" class="nav-link">Intelligence</a>
    <a href="#metrics" class="nav-link">Metrics</a>
    <a href="#mobile" class="nav-link">Mobile</a>
    <a href="#workflow" class="nav-link">Workflow</a>
  </div>
  <a href="#demo" class="nav-cta">View demo →</a>
</nav>

<!-- HERO -->
<section class="hero" id="top">
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="hero-eyebrow">Platform Feature Guide · HyperBrand Creative</div>
  <h1 class="hero-title">The <span>Leader Experience.</span><br>How it works.</h1>
  <p class="hero-sub">A guided walkthrough of every feature in the TARGA AI platform — built for executives who need speed and clarity, not another dashboard to manage.</p>
  <div class="hero-count">
    <div class="hero-stat">
      <span class="hero-stat-n">6</span>
      <span class="hero-stat-l">Core features</span>
    </div>
    <div class="hero-stat-div"></div>
    <div class="hero-stat">
      <span class="hero-stat-n">5</span>
      <span class="hero-stat-l">Executive roles</span>
    </div>
    <div class="hero-stat-div"></div>
    <div class="hero-stat">
      <span class="hero-stat-n">1</span>
      <span class="hero-stat-l">Source of truth</span>
    </div>
  </div>
  <div class="hero-scroll">Scroll to explore</div>
</section>

<!-- ══ FEATURE 1: EXECUTIVE PORTFOLIO ══ -->
<section class="section" id="portfolio">
  <div class="section-inner">
    <div class="feat-number fade-up">Feature 01</div>
    <div class="feat-split">
      <div class="feat-text fade-up">
        <div class="feat-eyebrow">CEO Portfolio View</div>
        <h2 class="feat-title">Your entire operation. One screen.</h2>
        <p class="feat-body">When Joe logs in every morning, this is what he sees. Four KPI cards at the top — the numbers that matter most right now. Below that, every executive goal with its owner, health score, and status in one list. To the right, the intelligence feed — TARGA's active monitoring, surfacing what changed and what needs attention.</p>
        <p class="feat-body"><strong>Every role sees a different version of this screen.</strong> Linda sees financial health. Mark sees platform delivery. Kyle sees pipeline. Dana sees pilot acquisition. The same platform, filtered to what each person owns.</p>
        <div class="feat-callout teal">
          <div class="feat-callout-label">How it works</div>
          <div class="feat-callout-text">Click any goal row and the platform drills into a full Focus view for that item. The portfolio is the map. The Focus view is where the work happens.</div>
        </div>
        <div class="feat-chips">
          <div class="feat-chip teal">Role-aware views</div>
          <div class="feat-chip teal">Live KPI cards</div>
          <div class="feat-chip gold">Intelligence feed</div>
        </div>
      </div>
      <div class="fade-up fade-up-delay-1">
        <!-- CEO Dashboard Mock -->
        <div class="mock">
          <div class="mock-bar">
            <div class="mock-dot mock-dot-r"></div><div class="mock-dot mock-dot-y"></div><div class="mock-dot mock-dot-g"></div>
            <div class="mock-url">targa.ai · CEO Portfolio · Joe Thompson</div>
          </div>
          <div class="mock-content">
            <div class="mock-header">
              <div class="mock-logo">
                <svg class="mock-logo-mark" viewBox="0 0 55.86 58.3"><polygon fill="#1f476a" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/><polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/></svg>
                TARGA AI
              </div>
            </div>
            <div class="mock-persona-bar">
              <div class="mock-chip active"><div class="mock-chip-av" style="background:linear-gradient(135deg,#0d8b82,#1a3a5c)">JT</div>Joe Thompson <span style="font-family:var(--font-m);font-size:9px;opacity:0.6">CEO</span></div>
              <div class="mock-chip"><div class="mock-chip-av" style="background:linear-gradient(135deg,#1a6091,#1a2945)">LA</div>Linda Adams</div>
              <div class="mock-chip"><div class="mock-chip-av" style="background:linear-gradient(135deg,#6b54b3,#1a2945)">MS</div>Mark S.</div>
              <div class="mock-chip"><div class="mock-chip-av" style="background:linear-gradient(135deg,#0d8b82,#26395f)">KM</div>Kyle M.</div>
              <div class="mock-chip"><div class="mock-chip-av" style="background:linear-gradient(135deg,#c25a1a,#1a2945)">DP</div>Dana P.</div>
            </div>
            <div class="mock-body">
              <div class="mock-greeting">Good morning, Joe.</div>
              <div class="mock-sub" style="margin-bottom:12px">2 items need your attention. Platform delivery is the risk to watch.</div>
              <div class="mock-kpi-strip">
                <div class="mock-kpi"><div class="mock-kpi-eye">July Readiness</div><div class="mock-kpi-val">68%</div><div class="mock-kpi-trend" style="color:var(--warn)">↓ Behind 9-day pace</div><div class="mock-kpi-bar"><div class="mock-kpi-fill" style="width:68%;background:var(--warn)"></div></div></div>
                <div class="mock-kpi"><div class="mock-kpi-eye">Pilot Pipeline</div><div class="mock-kpi-val">18</div><div class="mock-kpi-sub">Qualified demos · Target: 50</div><div class="mock-kpi-trend" style="color:var(--ok)">↑ +4 this month</div><div class="mock-kpi-bar"><div class="mock-kpi-fill" style="width:36%;background:var(--teal)"></div></div></div>
                <div class="mock-kpi"><div class="mock-kpi-eye">Runway</div><div class="mock-kpi-val">21mo</div><div class="mock-kpi-sub">At current burn</div><div class="mock-kpi-trend" style="color:var(--ok)">↑ Ahead of plan</div><div class="mock-kpi-bar"><div class="mock-kpi-fill" style="width:88%;background:var(--ok)"></div></div></div>
                <div class="mock-kpi"><div class="mock-kpi-eye">Pilots Closed</div><div class="mock-kpi-val">0</div><div class="mock-kpi-sub">Target: 3 by Q3</div><div class="mock-kpi-trend" style="color:var(--text-4)">→ Demo-ready first</div><div class="mock-kpi-bar"><div class="mock-kpi-fill" style="width:5%;background:var(--text-4)"></div></div></div>
              </div>
              <div class="mock-two-col">
                <div>
                  <div class="mock-goals-head"><span class="mock-goals-label">Executive Goals — H1 2026</span></div>
                  <div class="mock-goal-row" style="border-left:3px solid var(--warn)"><div class="mock-goal-dot" style="background:var(--warn)"></div><div style="flex:1"><div class="mock-goal-name">Platform delivery — trade show ready</div><div class="mock-goal-sub">Mark S. · 3 milestones · 1 overdue · Sigma Solve</div></div><span style="font-family:var(--font-m);font-size:9px;color:var(--text-4)">CTO</span><span style="font-family:var(--font-m);font-size:11px;font-weight:700;color:var(--text-1)">68%</span><span class="mock-goal-badge badge-risk">At Risk</span></div>
                  <div class="mock-goal-row"><div class="mock-goal-dot" style="background:var(--teal)"></div><div style="flex:1"><div class="mock-goal-name">Pipeline to 50 qualified demos</div><div class="mock-goal-sub">Kyle M. · LinkedIn + outbound + content</div></div><span style="font-family:var(--font-m);font-size:9px;color:var(--text-4)">CMO</span><span style="font-family:var(--font-m);font-size:11px;font-weight:700;color:var(--text-1)">78%</span><span class="mock-goal-badge badge-ok">On Track</span></div>
                  <div class="mock-goal-row"><div class="mock-goal-dot" style="background:var(--ok)"></div><div style="flex:1"><div class="mock-goal-name">18-month runway maintained</div><div class="mock-goal-sub">Linda A. · Cash position · Burn rate</div></div><span style="font-family:var(--font-m);font-size:9px;color:var(--text-4)">CFO</span><span style="font-family:var(--font-m);font-size:11px;font-weight:700;color:var(--text-1)">100%</span><span class="mock-goal-badge badge-ok">Ahead</span></div>
                </div>
                <div class="mock-intel-panel">
                  <div class="mock-intel-head">Intelligence Feed</div>
                  <div class="mock-intel-card critical"><div class="mock-intel-tag">✦ Critical · 3 days ago</div><div class="mock-intel-text">Sigma Solve missed the Item Architecture milestone (due May 3). Mark has not updated the item. <strong style="color:var(--danger)">This is on the July critical path.</strong></div></div>
                  <div class="mock-intel-card insight"><div class="mock-intel-tag">✦ TARGA Insight</div><div class="mock-intel-text">Pilot pipeline is at 36% of target but the conversion rate from demo to pilot is <strong>unknown — no closed demos yet.</strong> Platform delivery is the blocker.</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ FEATURE 2: FOCUS VIEW ══ -->
<section class="section section-alt" id="focus">
  <div class="section-inner">
    <div class="feat-number fade-up">Feature 02</div>
    <div class="feat-split reverse">
      <div class="feat-text fade-up">
        <div class="feat-eyebrow">Focus View — Single Item Command Center</div>
        <h2 class="feat-title">Every goal has its own command center.</h2>
        <p class="feat-body">Click any goal from the portfolio and the platform zooms in. The Focus view shows everything about that one item — its metrics on the left, the hero card with full context in the center, actions and intelligence on the right. Below: what changed in the last 24 hours, Ask TARGA grounded to this specific item, the child milestones, and the full history.</p>
        <p class="feat-body"><strong>The hierarchy ribbon at the top is navigable.</strong> Click the parent to go up. Click a child milestone to zoom in. The platform tracks where you are so the back button always returns you one level up, not all the way to the start.</p>
        <div class="feat-callout gold">
          <div class="feat-callout-label">TARGA NOTICED</div>
          <div class="feat-callout-text">Every Focus view surfaces a TARGA intelligence card — what the system has noticed about this item, and what it would consider doing next. This isn't a report. It's a recommendation from an agent that's been watching continuously.</div>
        </div>
        <div class="feat-chips">
          <div class="feat-chip teal">Navigable hierarchy</div>
          <div class="feat-chip gold">TARGA intelligence</div>
          <div class="feat-chip ok">Activity feed</div>
        </div>
      </div>
      <div class="fade-up fade-up-delay-1">
        <!-- Focus Mock -->
        <div class="mock">
          <div class="mock-bar">
            <div class="mock-dot mock-dot-r"></div><div class="mock-dot mock-dot-y"></div><div class="mock-dot mock-dot-g"></div>
            <div class="mock-url">targa.ai &middot; Focus &middot; Platform Delivery</div>
          </div>

          <!-- Hierarchy Ribbon - constrained, no wrapping -->
          <div style="background:var(--navy-deep);padding:14px 20px;display:flex;align-items:center;gap:10px;overflow:hidden;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:3px;opacity:0.55;flex-shrink:0;">
              <div style="width:28px;height:28px;border-radius:7px;border:1.5px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;"><svg width="12" height="12" viewBox="0 0 24 24"><polygon points="12,2 22,12 12,22 2,12" fill="rgba(180,195,220,0.4)"/></svg></div>
              <div style="font-family:var(--font-m);font-size:7px;color:rgba(255,255,255,0.4);white-space:nowrap;">Trade Show + Pilots</div>
              <div style="font-family:var(--font-m);font-size:6px;color:rgba(255,255,255,0.2);text-transform:uppercase;letter-spacing:0.1em;">Objective</div>
            </div>
            <div style="color:rgba(255,255,255,0.2);font-size:13px;flex-shrink:0;">&rsaquo;</div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;">
              <div style="font-family:var(--font-m);font-size:7px;color:var(--teal-300);letter-spacing:0.1em;">&bull; FOCUS</div>
              <div style="width:28px;height:28px;border-radius:7px;border:1.5px solid var(--teal);background:rgba(13,139,130,0.15);display:flex;align-items:center;justify-content:center;"><svg width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#0d8b82"/><circle cx="12" cy="12" r="3" fill="#eef1f5"/></svg></div>
              <div style="font-family:var(--font-m);font-size:8px;color:#fff;font-weight:700;white-space:nowrap;">Platform Delivery</div>
              <div style="font-family:var(--font-m);font-size:6px;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;">Goal</div>
            </div>
            <div style="color:rgba(255,255,255,0.2);font-size:13px;flex-shrink:0;">&rsaquo;</div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:3px;opacity:0.55;flex-shrink:0;">
              <div style="width:28px;height:28px;border-radius:7px;border:1.5px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M3 6L12 15L21 6" stroke="rgba(180,195,220,0.5)" stroke-width="2.5" stroke-linecap="round"/><path d="M3 12L12 21L21 12" stroke="rgba(180,195,220,0.5)" stroke-width="2.5" stroke-linecap="round"/></svg></div>
              <div style="font-family:var(--font-m);font-size:7px;color:rgba(255,255,255,0.4);white-space:nowrap;">Architecture CR</div>
              <div style="font-family:var(--font-m);font-size:6px;color:rgba(255,255,255,0.2);text-transform:uppercase;letter-spacing:0.1em;">Milestone</div>
            </div>
            <div style="color:rgba(255,255,255,0.2);font-size:13px;flex-shrink:0;">&rsaquo;</div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:3px;opacity:0.55;flex-shrink:0;">
              <div style="width:28px;height:28px;border-radius:7px;border:1.5px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M3 6L12 15L21 6" stroke="rgba(180,195,220,0.5)" stroke-width="2.5" stroke-linecap="round"/><path d="M3 12L12 21L21 12" stroke="rgba(180,195,220,0.5)" stroke-width="2.5" stroke-linecap="round"/></svg></div>
              <div style="font-family:var(--font-m);font-size:7px;color:rgba(255,255,255,0.4);white-space:nowrap;">Sigma Solve Build</div>
              <div style="font-family:var(--font-m);font-size:6px;color:rgba(255,255,255,0.2);text-transform:uppercase;letter-spacing:0.1em;">Milestone</div>
            </div>
          </div>

          <!-- Hero card full width -->
          <div style="padding:14px;background:var(--bg);">
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);overflow:hidden;box-shadow:var(--shadow);margin-bottom:10px;">
              <div style="height:38px;background:var(--navy-deep);display:flex;align-items:center;justify-content:space-between;padding:0 14px;">
                <div style="font-family:var(--font-m);font-size:9px;color:var(--teal-300);letter-spacing:0.12em;">GOAL &middot; FOCUS &middot; Mark Sternberger</div>
                <div style="display:flex;gap:4px;">
                  <div style="font-family:var(--font-m);font-size:8px;padding:3px 8px;border-radius:3px;border:1px solid rgba(255,255,255,0.06);color:rgba(180,195,220,0.25);">AHEAD</div>
                  <div style="font-family:var(--font-m);font-size:8px;padding:3px 8px;border-radius:3px;border:1px solid rgba(255,255,255,0.06);color:rgba(180,195,220,0.25);">ON TRACK</div>
                  <div style="font-family:var(--font-m);font-size:8px;padding:3px 8px;border-radius:3px;color:#e0903a;border-color:rgba(224,144,58,0.3);background:rgba(224,144,58,0.08);">AT RISK</div>
                  <div style="font-family:var(--font-m);font-size:8px;padding:3px 8px;border-radius:3px;border:1px solid rgba(255,255,255,0.06);color:rgba(180,195,220,0.25);">BEHIND</div>
                  <div style="font-family:var(--font-m);font-size:8px;padding:3px 8px;border-radius:3px;border:1px solid rgba(255,255,255,0.06);color:rgba(180,195,220,0.25);">BLOCKED</div>
                </div>
              </div>
              <div style="padding:14px;">
                <div style="font-size:16px;font-weight:700;color:var(--text-1);margin-bottom:10px;letter-spacing:-0.01em;">Platform Delivery &mdash; Demo Ready by July 1</div>
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;border-top:1px solid var(--border);padding-top:10px;margin-bottom:12px;">
                  <div><div style="font-family:var(--font-m);font-size:7px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-4);margin-bottom:3px;">PROGRESS</div><div style="font-size:20px;font-weight:700;color:var(--warn);letter-spacing:-0.02em;">72%</div></div>
                  <div><div style="font-family:var(--font-m);font-size:7px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-4);margin-bottom:3px;">ACTIONS</div><div style="font-size:20px;font-weight:700;color:var(--text-1);letter-spacing:-0.02em;">4</div></div>
                  <div><div style="font-family:var(--font-m);font-size:7px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-4);margin-bottom:3px;">HEALTH</div><div style="font-size:20px;font-weight:700;color:var(--warn);letter-spacing:-0.02em;">65%</div></div>
                  <div><div style="font-family:var(--font-m);font-size:7px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-4);margin-bottom:3px;">REVIEW</div><div style="font-size:20px;font-weight:700;color:var(--text-1);letter-spacing:-0.02em;">55d</div></div>
                </div>
                <div style="background:rgba(138,94,16,0.07);border-left:3px solid var(--advisor);border-radius:0 8px 8px 0;padding:10px 14px;">
                  <div style="font-family:var(--font-m);font-size:8px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--advisor);margin-bottom:5px;">&starf; TARGA NOTICED &middot; 91% confidence</div>
                  <div style="font-size:12px;color:var(--text-1);line-height:1.6;font-weight:500;">The Item Architecture CR is the primary risk. 3 days overdue. Glenn cannot begin sprint planning without the artifact definitions document. <strong>This is on the July critical path.</strong></div>
                  <div style="display:flex;gap:8px;margin-top:10px;">
                    <div style="padding:5px 14px;background:var(--teal);color:#fff;border-radius:999px;font-size:11px;font-weight:600;">Open CR item &rarr;</div>
                    <div style="padding:5px 12px;border:1px solid rgba(12,20,36,0.15);border-radius:999px;font-size:11px;color:var(--text-3);">Not now</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Metrics + Actions two-column -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:12px;box-shadow:var(--shadow);">
                <div style="font-family:var(--font-m);font-size:8px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-4);margin-bottom:10px;">Metrics</div>
                <div style="margin-bottom:8px;"><div style="font-size:11px;font-weight:600;color:var(--text-1);margin-bottom:2px;">July Readiness</div><div style="font-size:17px;font-weight:700;color:var(--warn);">72%</div><div style="font-size:9px;color:var(--warn);margin-bottom:3px;">&darr; Declining &minus;28pts vs 30d</div><div style="height:3px;background:var(--sunken);border-radius:999px;overflow:hidden;"><div style="width:72%;height:100%;background:var(--warn);border-radius:999px;"></div></div></div>
                <div style="margin-bottom:8px;"><div style="font-size:11px;font-weight:600;color:var(--text-1);margin-bottom:2px;">Sprint Velocity</div><div style="font-size:17px;font-weight:700;color:var(--text-1);">34%</div><div style="font-size:9px;color:var(--ok);margin-bottom:3px;">&uarr; +22pts in 4 weeks</div><div style="height:3px;background:var(--sunken);border-radius:999px;overflow:hidden;"><div style="width:40%;height:100%;background:var(--warn);border-radius:999px;"></div></div></div>
                <div><div style="font-size:11px;font-weight:600;color:var(--text-1);margin-bottom:2px;">Design Handoff</div><div style="font-size:17px;font-weight:700;color:var(--ok);">100%</div><div style="font-size:9px;color:var(--ok);margin-bottom:3px;">&check; Delivered Apr 30</div><div style="height:3px;background:var(--sunken);border-radius:999px;overflow:hidden;"><div style="width:100%;height:100%;background:var(--ok);border-radius:999px;"></div></div></div>
              </div>
              <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:12px;box-shadow:var(--shadow);">
                <div style="font-family:var(--font-m);font-size:8px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-4);margin-bottom:10px;">Actions</div>
                <div style="padding:8px 0;border-bottom:1px solid var(--border);"><div style="font-family:var(--font-m);font-size:8px;font-weight:700;background:rgba(181,58,58,0.1);color:var(--danger);padding:2px 7px;border-radius:3px;display:inline-block;margin-bottom:4px;">BLOCKER</div><div style="font-size:11px;font-weight:600;color:var(--text-1);margin-bottom:2px;">Respond to Glenn &mdash; artifact definitions</div><div style="font-size:10px;color:var(--text-4);">Due Today &middot; Mark S.</div></div>
                <div style="padding:8px 0;border-bottom:1px solid var(--border);"><div style="font-family:var(--font-m);font-size:8px;font-weight:700;background:rgba(176,127,31,0.1);color:var(--warn);padding:2px 7px;border-radius:3px;display:inline-block;margin-bottom:4px;">RISK</div><div style="font-size:11px;font-weight:600;color:var(--text-1);margin-bottom:2px;">Brief Joe on July status</div><div style="font-size:10px;color:var(--text-4);">Due May 9 &middot; Mark S.</div></div>
                <div style="padding:8px 0;"><div style="font-family:var(--font-m);font-size:8px;font-weight:700;background:rgba(44,138,94,0.1);color:var(--ok);padding:2px 7px;border-radius:3px;display:inline-block;margin-bottom:4px;">OK</div><div style="font-size:11px;font-weight:600;color:var(--text-1);margin-bottom:2px;">Joint review Glenn + Kyle</div><div style="font-size:10px;color:var(--text-4);">Due May 9 &middot; Mark + Kyle</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ FEATURE 3: METRIC INTELLIGENCE ══ -->
<section class="section section-dark" id="intelligence">
  <div class="section-inner">
    <div class="feat-number fade-up" style="color:var(--teal)">Feature 03</div>
    <div class="feat-split">
      <div class="feat-text fade-up">
        <div class="feat-eyebrow" style="color:var(--teal-300)">Metric Intelligence — Equation View</div>
        <h2 class="feat-title light">Click any KPI card.<br>See exactly where the number came from.</h2>
        <p class="feat-body light">Every KPI card on the CEO dashboard can be flipped to show the equation behind the number. It's not just a score — it's a live calculation from every contributor, their weight, their health, and their contribution to the total. The math is transparent and auditable by anyone in the room.</p>
        <p class="feat-body light"><strong style="color:#fff">Platform Delivery at 68% is calculated from three milestones</strong> — the overdue CR at 0% health dragging 35% weight, the Sigma Solve build at 76% health carrying 45% weight, and QA at 100% health (back-loaded, not yet started) at 20% weight. Joe can see exactly which item to fix and by how much.</p>
        <div class="feat-callout dark-teal">
          <div class="feat-callout-label">Why this matters</div>
          <div class="feat-callout-text">A score you can't inspect is a score you don't trust. TARGA makes the math visible so executives can argue with the number on first principles — and adjust when they disagree.</div>
        </div>
        <div class="feat-chips">
          <div class="feat-chip teal">Live calculation</div>
          <div class="feat-chip teal">Multi-contributor</div>
          <div class="feat-chip gold">Weighted rollup</div>
        </div>
      </div>
      <div class="fade-up fade-up-delay-1">
        <!-- Equation Card Mock -->
        <div class="mock-eq-card">
          <div class="mock-eq-eye">Equation view · live</div>
          <div class="mock-eq-name">Platform Delivery — July Readiness</div>
          <div class="mock-eq-header">
            <span>Contributor</span>
            <span>actual / exp = health × wt = contrib</span>
          </div>
          <div class="mock-eq-row">
            <div class="mock-eq-contrib"><span class="mock-eq-owner">MARK</span>Item Architecture CR</div>
            <div class="mock-eq-math">0% / 100% = <span style="color:#e87878">0%</span> × 20% = <span>0.0</span></div>
          </div>
          <div class="mock-eq-row">
            <div class="mock-eq-contrib"><span class="mock-eq-owner">KYLE</span>UX Design System</div>
            <div class="mock-eq-math">100% / 100% = <span style="color:#3aa776">100%</span> × 15% = <span>15.0</span></div>
          </div>
          <div class="mock-eq-row">
            <div class="mock-eq-contrib"><span class="mock-eq-owner">MARK</span>Sigma Solve Build</div>
            <div class="mock-eq-math">34% / 45% = <span style="color:#e0903a">76%</span> × 35% = <span>26.5</span></div>
          </div>
          <div class="mock-eq-row">
            <div class="mock-eq-contrib"><span class="mock-eq-owner">MARK</span>QA Complete</div>
            <div class="mock-eq-math">not started · back-loaded · <span style="color:#3aa776">100%</span> × 20% = <span>20.0</span></div>
          </div>
          <div class="mock-eq-row">
            <div class="mock-eq-contrib"><span class="mock-eq-owner">MARK</span>Cloud Infra</div>
            <div class="mock-eq-math">not started · back-loaded · <span style="color:#3aa776">100%</span> × 10% = <span>10.0</span></div>
          </div>
          <div class="mock-eq-total">
            <div class="mock-eq-formula">(0.0 + 15.0 + 26.5 + 20.0 + 10.0) / 1.00</div>
            <div class="mock-eq-result">72%</div>
          </div>
        </div>

        <div style="margin-top:16px;padding:16px;background:rgba(14,178,175,0.08);border-radius:var(--r-lg);border:1px solid rgba(14,178,175,0.2);">
          <div style="font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal-300);margin-bottom:6px;">What this tells Joe</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.7);line-height:1.6;">The CR is at 0% health with 20% weight — dragging the goal down by 20 points on its own. Fixing it alone would move the goal score from <strong style="color:#fff">72% to 92%</strong>. That single conversation between Mark and Glenn is worth 20 points on the board health score.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ FEATURE 4: PACING MODELS ══ -->
<section class="section section-alt" id="metrics">
  <div class="section-inner">
    <div class="feat-number fade-up">Feature 04</div>
    <div style="max-width:760px;margin-bottom:56px;" class="fade-up">
      <div class="feat-eyebrow">Pacing Models — Leading vs Lagging</div>
      <h2 class="feat-title">Progress percentage means nothing without knowing how it was supposed to accumulate.</h2>
      <p class="feat-body">Dana's pilot acquisition goal at 5% completion could be perfectly on track, catastrophically behind, or actually ahead — depending entirely on whether the work is front-loaded, linear, or back-loaded. TARGA encodes that domain knowledge into every metric so the health score reflects reality, not just a raw percentage.</p>
    </div>
    <div class="mock-pace-grid fade-up">
      <div class="mock-pace-card">
        <div class="mock-pace-title">Linear</div>
        <div class="mock-pace-sub">Steady accumulation. 50% of time elapsed = 50% expected. Appropriate for most build and operational metrics.</div>
        <div class="mock-pace-chart">
          <div class="mock-pace-bar" style="width:55%;background:linear-gradient(90deg,var(--teal),var(--teal-h))"></div>
        </div>
        <div class="mock-pace-formula">f(t) = t</div>
        <div style="font-size:11px;color:var(--text-4);margin-top:6px;">Sigma Solve build, LinkedIn reach, content cadence</div>
      </div>
      <div class="mock-pace-card">
        <div class="mock-pace-title">Front-loaded</div>
        <div class="mock-pace-sub">Most work happens early. Discovery and design phases. Expected progress is high early and flattens as the work matures.</div>
        <div class="mock-pace-chart">
          <div class="mock-pace-bar" style="width:76%;background:linear-gradient(90deg,var(--gold-d),var(--gold))"></div>
        </div>
        <div class="mock-pace-formula">f(t) = √t</div>
        <div style="font-size:11px;color:var(--text-4);margin-top:6px;">Outbound conversion sequences, webinar registrations</div>
      </div>
      <div class="mock-pace-card">
        <div class="mock-pace-title">Back-loaded</div>
        <div class="mock-pace-sub">Work accelerates near the deadline. Enterprise sales cycles, legal reviews, QA sprints. Low early progress is expected and correct.</div>
        <div class="mock-pace-chart">
          <div class="mock-pace-bar" style="width:34%;background:linear-gradient(90deg,var(--ok),#3aa776)"></div>
        </div>
        <div class="mock-pace-formula">f(t) = t²</div>
        <div style="font-size:11px;color:var(--text-4);margin-top:6px;">Pilot closes, QA completion, trade show appointments</div>
      </div>
    </div>
    <div style="margin-top:32px;padding:20px 24px;background:var(--navy-d);border-radius:var(--r-xl);display:flex;align-items:center;gap:20px;" class="fade-up">
      <svg width="32" height="32" viewBox="0 0 55.86 58.3" style="flex-shrink:0"><polygon fill="#1f476a" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/><polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/></svg>
      <div>
        <div style="font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal);margin-bottom:5px;">Example — Pilot Acquisition</div>
        <div style="font-size:14px;color:#fff;line-height:1.6;">Dana's 3 pilot customers goal shows <strong>97% health</strong> with <strong>5% actual completion</strong>. Under a back-loaded model, 5% actual at 39% of time elapsed is ahead of expected. With linear pacing, this would show as catastrophically behind. The pacing model encodes the domain knowledge so Joe doesn't have to explain it every week.</div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ FEATURE 5: MOBILE ══ -->
<section class="section" id="mobile">
  <div class="section-inner">
    <div class="feat-number fade-up">Feature 05</div>
    <div class="feat-split">
      <div class="feat-text fade-up">
        <div class="feat-eyebrow">Mobile — Four-Panel Torus Navigation</div>
        <h2 class="feat-title">Your entire operation is one swipe away.</h2>
        <p class="feat-body">The mobile experience is built around a four-direction swipe model. Home is the center. Swipe right for metrics. Swipe left for connections. Swipe down for the action queue. Swipe up for intelligence. <strong>You never have to exist on the home screen.</strong></p>
        <p class="feat-body"><strong>Each panel has a distinct color identity</strong> — so you always know which face you're on. The D-pad in the rail lets you navigate directly without swiping. Role switching is one tap.</p>
        <div class="feat-callout gold" style="border-left-color:var(--gold);">
          <div class="feat-callout-label" style="color:var(--gold-d);">Joe's words</div>
          <div class="feat-callout-text" style="font-style:italic;color:var(--text-2);">"Slight color change every time you rotate... so you know basically how to get back home. Maybe goals is written there sideways — I know that's always goal."<br><span style="font-style:normal;font-family:var(--font-m);font-size:9px;color:var(--text-4);margin-top:6px;display:block;">— Joe Thompson, May 7, 2026</span></div>
        </div>
        <div class="feat-chips">
          <div class="feat-chip teal">Gesture navigation</div>
          <div class="feat-chip teal">Panel color identity</div>
          <div class="feat-chip gold">Role switching</div>
        </div>
      </div>
      <div class="fade-up fade-up-delay-1" style="display:flex;justify-content:center;gap:40px;align-items:flex-start;">

        <!-- Mobile mock -->
        <div class="mock-mobile">
          <div class="mock-mobile-screen">
            <div class="mock-mobile-topbar" style="border-bottom:2px solid var(--teal)">
              <div class="mock-mobile-logo">TARGA AI</div>
              <div style="font-family:var(--font-m);font-size:9px;color:rgba(255,255,255,0.4)">Joe Thompson · CEO</div>
            </div>
            <div class="mock-mobile-panel">
              <div style="font-family:var(--font-m);font-size:8px;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">HOME</div>
              <div style="font-size:13px;font-weight:700;color:var(--text-1);margin-bottom:12px;">Good morning, Joe.</div>
              <div class="mock-mobile-kpi"><div class="mock-mobile-kpi-l">July Readiness</div><div class="mock-mobile-kpi-v" style="color:var(--warn)">68%</div><div class="mock-mobile-kpi-t" style="color:var(--warn)">↓ Behind pace</div></div>
              <div class="mock-mobile-kpi"><div class="mock-mobile-kpi-l">Pilot Pipeline</div><div class="mock-mobile-kpi-v">18</div><div class="mock-mobile-kpi-t" style="color:var(--ok)">↑ +4 this month</div></div>
              <div class="mock-mobile-kpi"><div class="mock-mobile-kpi-l">Cash Runway</div><div class="mock-mobile-kpi-v" style="color:var(--ok)">21mo</div><div class="mock-mobile-kpi-t" style="color:var(--ok)">↑ Ahead of plan</div></div>
            </div>
            <div class="mock-mobile-rail">
              <div style="font-family:var(--font-m);font-size:7px;color:var(--text-4);margin-bottom:4px;">PANELS</div>
              <div class="mock-dpad">
                <div class="mock-dpad-btn blank"></div>
                <div class="mock-dpad-btn" style="font-size:9px;color:var(--gold-d)">↑</div>
                <div class="mock-dpad-btn blank"></div>
                <div class="mock-dpad-btn">←</div>
                <div class="mock-dpad-btn active">●</div>
                <div class="mock-dpad-btn">→</div>
                <div class="mock-dpad-btn blank"></div>
                <div class="mock-dpad-btn">↓</div>
                <div class="mock-dpad-btn blank"></div>
              </div>
              <div class="mock-panel-indicator">
                <div class="mock-panel-dot" style="background:var(--gold-d)"></div>
                <div class="mock-panel-dot" style="background:#6b3fa0"></div>
                <div class="mock-panel-dot active"></div>
                <div class="mock-panel-dot" style="background:#2c8a5e"></div>
                <div class="mock-panel-dot" style="background:#1a2f5a"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Rubik's cube navigation indicator -->
        <div style="padding-top:20px;display:flex;flex-direction:column;align-items:center;gap:16px;">
          <div style="font-family:var(--font-m);font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-4);text-align:center;">Navigation cube</div>

          <!-- 3D CSS cube — shows which face is active -->
          <div class="rubik-scene">
            <div class="rubik-cube" id="rubikCube">
              <div class="rubik-face rubik-front">
                <div class="rubik-face-label">HOME</div>
                <div class="rubik-grid">
                  <div class="rg-cell"></div><div class="rg-cell"></div><div class="rg-cell"></div>
                  <div class="rg-cell"></div><div class="rg-cell rg-center"></div><div class="rg-cell"></div>
                  <div class="rg-cell"></div><div class="rg-cell"></div><div class="rg-cell"></div>
                </div>
              </div>
              <div class="rubik-face rubik-back">
                <div class="rubik-face-label" style="color:rgba(255,255,255,0.6)">INTEL</div>
                <div class="rubik-grid">
                  <div class="rg-cell rg-b"></div><div class="rg-cell rg-b"></div><div class="rg-cell rg-b"></div>
                  <div class="rg-cell rg-b"></div><div class="rg-cell rg-b"></div><div class="rg-cell rg-b"></div>
                  <div class="rg-cell rg-b"></div><div class="rg-cell rg-b"></div><div class="rg-cell rg-b"></div>
                </div>
              </div>
              <div class="rubik-face rubik-right">
                <div class="rubik-face-label" style="color:rgba(255,255,255,0.6)">METRICS</div>
                <div class="rubik-grid">
                  <div class="rg-cell rg-g"></div><div class="rg-cell rg-g"></div><div class="rg-cell rg-g"></div>
                  <div class="rg-cell rg-g"></div><div class="rg-cell rg-g"></div><div class="rg-cell rg-g"></div>
                  <div class="rg-cell rg-g"></div><div class="rg-cell rg-g"></div><div class="rg-cell rg-g"></div>
                </div>
              </div>
              <div class="rubik-face rubik-left">
                <div class="rubik-face-label" style="color:rgba(255,255,255,0.6)">LINKS</div>
                <div class="rubik-grid">
                  <div class="rg-cell rg-p"></div><div class="rg-cell rg-p"></div><div class="rg-cell rg-p"></div>
                  <div class="rg-cell rg-p"></div><div class="rg-cell rg-p"></div><div class="rg-cell rg-p"></div>
                  <div class="rg-cell rg-p"></div><div class="rg-cell rg-p"></div><div class="rg-cell rg-p"></div>
                </div>
              </div>
              <div class="rubik-face rubik-top">
                <div class="rubik-face-label" style="color:rgba(255,255,255,0.6);font-size:9px;">INTEL ↑</div>
                <div class="rubik-grid">
                  <div class="rg-cell rg-y"></div><div class="rg-cell rg-y"></div><div class="rg-cell rg-y"></div>
                  <div class="rg-cell rg-y"></div><div class="rg-cell rg-y"></div><div class="rg-cell rg-y"></div>
                  <div class="rg-cell rg-y"></div><div class="rg-cell rg-y"></div><div class="rg-cell rg-y"></div>
                </div>
              </div>
              <div class="rubik-face rubik-bottom">
                <div class="rubik-face-label" style="color:rgba(255,255,255,0.6);font-size:9px;">ACTIONS ↓</div>
                <div class="rubik-grid">
                  <div class="rg-cell rg-n"></div><div class="rg-cell rg-n"></div><div class="rg-cell rg-n"></div>
                  <div class="rg-cell rg-n"></div><div class="rg-cell rg-n"></div><div class="rg-cell rg-n"></div>
                  <div class="rg-cell rg-n"></div><div class="rg-cell rg-n"></div><div class="rg-cell rg-n"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Face labels -->
          <div style="display:flex;flex-direction:column;gap:6px;width:100%;">
            <div class="cube-face-row" data-face="home" onclick="setCubeFace('home')" style="cursor:pointer;">
              <div class="cube-face-swatch" style="background:var(--teal)"></div>
              <div class="cube-face-name">Home — base camp</div>
            </div>
            <div class="cube-face-row" data-face="intel" onclick="setCubeFace('intel')" style="cursor:pointer;">
              <div class="cube-face-swatch" style="background:var(--gold-d)"></div>
              <div class="cube-face-name">↑ Intelligence</div>
            </div>
            <div class="cube-face-row" data-face="actions" onclick="setCubeFace('actions')" style="cursor:pointer;">
              <div class="cube-face-swatch" style="background:#1a2f5a"></div>
              <div class="cube-face-name">↓ Actions</div>
            </div>
            <div class="cube-face-row" data-face="metrics" onclick="setCubeFace('metrics')" style="cursor:pointer;">
              <div class="cube-face-swatch" style="background:#2c8a5e"></div>
              <div class="cube-face-name">→ Metrics</div>
            </div>
            <div class="cube-face-row" data-face="connections" onclick="setCubeFace('connections')" style="cursor:pointer;">
              <div class="cube-face-swatch" style="background:#6b3fa0"></div>
              <div class="cube-face-name">← Connections</div>
            </div>
          </div>
          <div style="font-family:var(--font-m);font-size:9px;color:var(--text-4);text-align:center;margin-top:4px;">Click to rotate</div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ FEATURE 6: WORKFLOW — MON-FRI ══ -->
<section class="section section-alt" id="workflow">
  <div class="section-inner">
    <div class="feat-number fade-up">Feature 06</div>
    <div style="max-width:600px;margin-bottom:56px;" class="fade-up">
      <div class="feat-eyebrow">The First Week — Joe's Use Case</div>
      <h2 class="feat-title">Monday signed. Friday, you see what everyone did.</h2>
      <p class="feat-body">Joe described the first week of use in the demo meeting. This is exactly the flow the platform supports.</p>
    </div>
    <div class="fade-up" style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;">
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-day">Monday</div>
          <div class="timeline-action">Sign the platform. Create the plan.</div>
          <div class="timeline-desc">Joe logs into TARGA for the first time. He types the company thesis in plain language. TARGA parses it and proposes a goal structure — owners, milestones, monitoring thresholds. One click to confirm.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-day">Tuesday</div>
          <div class="timeline-action">The plan cascades to every executive.</div>
          <div class="timeline-desc">When Joe creates the plan, it appears in Linda's portfolio, Mark's portfolio, Kyle's portfolio, and Dana's portfolio — each with their own goals highlighted. No meetings required. The plan is live.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-day">Wednesday</div>
          <div class="timeline-action">Everyone fleshes out their initiatives.</div>
          <div class="timeline-desc">Mark adds milestone dates. Kyle connects LinkedIn analytics. Dana links Salesforce. Linda connects Quickbooks. TARGA starts pulling live data and calculating health scores automatically.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-day">Thursday</div>
          <div class="timeline-action">Joe logs in and sees what everyone did.</div>
          <div class="timeline-desc">The "What changed" feed shows every update from the last 24 hours — who logged progress, what moved, what TARGA noticed. No status meetings. No update requests. The information is already there.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-day">Friday</div>
          <div class="timeline-action">Joe sees progress. Assigns an action. Done.</div>
          <div class="timeline-desc">Platform delivery is behind. Joe opens the Focus view, sees the CR blocker, and assigns an action to Mark directly from the platform. Mark gets notified. TARGA tracks the resolution.</div>
        </div>
      </div>
      <div>
        <!-- What changed mock -->
        <div style="margin-bottom:12px;">
          <div style="font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-4);margin-bottom:10px;">What changed · last 24 hours</div>
          <div class="mock-ra-grid">
            <div class="mock-ra-card">
              <div class="mock-ra-head"><div class="mock-ra-av" style="background:linear-gradient(135deg,#6b54b3,#1a2945)">MS</div><div class="mock-ra-who">MS</div><div class="mock-ra-when">2h ago</div></div>
              <div class="mock-ra-text">Mark S. flagged blocker on <strong>Item Architecture CR</strong></div>
              <div class="mock-ra-type ra-blocker">BLOCKER</div>
            </div>
            <div class="mock-ra-card">
              <div class="mock-ra-head"><div class="mock-ra-av" style="background:linear-gradient(135deg,#0d8b82,#26395f)">JT</div><div class="mock-ra-who">JT</div><div class="mock-ra-when">Yesterday</div></div>
              <div class="mock-ra-text">Joe T. updated goal status to <strong>At Risk</strong></div>
              <div class="mock-ra-type ra-update">UPDATE</div>
            </div>
            <div class="mock-ra-card">
              <div class="mock-ra-head"><div class="mock-ra-av" style="background:linear-gradient(135deg,#0d8b82,#26395f)">KM</div><div class="mock-ra-who">KM</div><div class="mock-ra-when">Apr 30</div></div>
              <div class="mock-ra-text">Kyle M. delivered <strong>UX Design System — all 3 screens</strong></div>
              <div class="mock-ra-type ra-done">COMPLETED</div>
            </div>
          </div>
        </div>

        <!-- New Plan mock -->
        <div style="background:var(--navy-d);border-radius:var(--r-xl);padding:20px;margin-top:20px;">
          <div style="font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--teal-300);margin-bottom:10px;">New Plan — thesis-driven setup</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:10px;">Type what you want to build. TARGA proposes the structure.</div>
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:var(--r-md);padding:12px;font-size:13px;color:rgba(255,255,255,0.7);margin-bottom:12px;font-style:italic;">"Get the platform demo-ready by July 1, owned by Mark. Three milestones: CR signed off, build complete, QA done. Alert me if any milestone slips more than 2 weeks."</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:rgba(255,255,255,0.5)"><svg width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="var(--teal)" fill="none" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="var(--teal)" fill="none" stroke-width="2"/></svg>Parsing goal structure…</div>
            <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:rgba(255,255,255,0.5)"><svg width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="var(--teal)" fill="none" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="var(--teal)" fill="none" stroke-width="2"/></svg>Identifying milestone dependencies…</div>
            <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:rgba(255,255,255,0.5)"><svg width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="var(--teal)" fill="none" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="var(--teal)" fill="none" stroke-width="2"/></svg>Assigning ownership from org model…</div>
            <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:rgba(255,255,255,0.5)"><svg width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="var(--teal)" fill="none" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="var(--teal)" fill="none" stroke-width="2"/></svg>Configuring monitoring thresholds…</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ JOE'S VOICE ══ -->
<section class="section section-dark">
  <div class="section-inner">
    <div style="text-align:center;max-width:640px;margin:0 auto 56px;" class="fade-up">
      <div class="feat-eyebrow" style="color:var(--teal-300);justify-content:center;">Joe's voice in the product</div>
      <h2 class="feat-title light" style="font-size:clamp(28px,3.5vw,44px);">Every design decision comes from a specific conversation.</h2>
      <p class="feat-body light">These aren't interpretations. They're direct translations of what Joe said — his words, his concepts, built into the platform.</p>
    </div>
    <div class="jv-grid fade-up">

      <div class="jv-card teal">
        <div class="jv-quote-mark">"</div>
        <div class="jv-quote">"Slight color change every time you rotate... so you know basically <strong>how to get back home.</strong> Maybe goals is written there sideways in letters — I know that's always goal."</div>
        <div class="jv-attribution">Joe Thompson · May 7, 2026</div>
        <div class="jv-feature-tag teal">→ Panel color identity on mobile</div>
      </div>

      <div class="jv-card gold">
        <div class="jv-quote-mark" style="color:var(--gold)">"</div>
        <div class="jv-quote">"CEO signs something, then look, see, <strong>it pops up in Linda's.</strong> Then Linda actions it or says Mark needs to do this. And then it pops up on Mark's."</div>
        <div class="jv-attribution">Joe Thompson · May 7, 2026</div>
        <div class="jv-feature-tag gold">→ Cascade on save — plan page</div>
      </div>

      <div class="jv-card ok">
        <div class="jv-quote-mark" style="color:var(--ok)">"</div>
        <div class="jv-quote">"You never really have to exist on the home screen. You can always just be swiping down to get where you need. <strong>The home screen is like your home base.</strong>"</div>
        <div class="jv-attribution">Joe Thompson · May 7, 2026</div>
        <div class="jv-feature-tag ok">→ Torus navigation · four-panel mobile</div>
      </div>

      <div class="jv-card teal">
        <div class="jv-quote-mark">"</div>
        <div class="jv-quote">"I think a lot of people are linear. But I do like the idea of <strong>going down into a lower level of detail or going back up.</strong> It makes sense to me."</div>
        <div class="jv-attribution">Joe Thompson · May 7, 2026</div>
        <div class="jv-feature-tag teal">→ Hierarchy ribbon · Focus view navigation</div>
      </div>

      <div class="jv-card gold">
        <div class="jv-quote-mark" style="color:var(--gold)">"</div>
        <div class="jv-quote">"Monday signed, Tuesday planned, Wednesday fleshed out initiative, Thursday log in and see <strong>what everybody did,</strong> Friday see progress, create an action, assign to Kyle."</div>
        <div class="jv-attribution">Joe Thompson · May 7, 2026</div>
        <div class="jv-feature-tag gold">→ First week workflow · What changed feed</div>
      </div>

      <div class="jv-card ok">
        <div class="jv-quote-mark" style="color:var(--ok)">"</div>
        <div class="jv-quote">"The metric definition is important. <strong>Template out of the box says leading indicator</strong> to drive you to think — oh yeah, I need a leading indicator here."</div>
        <div class="jv-attribution">Joe Thompson · May 7, 2026</div>
        <div class="jv-feature-tag ok">→ Metric type suggestions · IM drawer</div>
      </div>

    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ BENEFITS ══ -->
<section class="section" id="benefits">
  <div class="section-inner">
    <div style="text-align:center;max-width:600px;margin:0 auto 56px;" class="fade-up">
      <div class="feat-eyebrow" style="justify-content:center">Why it's different</div>
      <h2 class="feat-title" style="font-size:clamp(28px,3.5vw,42px);">Not project management.<br>Not another dashboard.</h2>
      <p class="feat-body" style="text-align:left;">This is a leadership intelligence platform, designed from the top down. If you hear "everything starts with a task," you're not talking about TARGA.</p>
    </div>
    <div class="benefit-grid fade-up">
      <div class="benefit-card">
        <div class="benefit-icon" style="background:rgba(14,178,175,0.1)">🎯</div>
        <div class="benefit-title">Designed for C-suite altitude</div>
        <div class="benefit-desc">The CEO view shows goals, health scores, and intelligence — not tasks. You manage at your altitude. Your team manages at theirs. TARGA keeps both in sync.</div>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon" style="background:rgba(251,191,36,0.1)">⚡</div>
        <div class="benefit-title">Cascade on save</div>
        <div class="benefit-desc">When Dana updates her pilot progress, the cascade runs automatically — her goal health updates, the board objective health updates, and Joe's dashboard reflects it. No manual rollups. No reporting cycles.</div>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon" style="background:rgba(44,138,94,0.1)">🔍</div>
        <div class="benefit-title">The math is transparent</div>
        <div class="benefit-desc">Every score is an equation. Every equation is auditable. Executives can flip any KPI card to see exactly which contributors are dragging the number and by how much. No mystery algorithm.</div>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon" style="background:rgba(14,178,175,0.1)">🤖</div>
        <div class="benefit-title">TARGA watches continuously</div>
        <div class="benefit-desc">The agent monitors pace deviation, status staleness, and cascade risk across every item in every plan. It surfaces signals before humans notice them — and routes them to the right altitude.</div>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon" style="background:rgba(251,191,36,0.1)">🔒</div>
        <div class="benefit-title">Role-locked permissions</div>
        <div class="benefit-desc">The CEO controls strategic weights. Owners control their own status and pacing. Nobody can adjust their own strategic importance. The accountability structure is enforced by the platform, not by meetings.</div>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon" style="background:rgba(44,138,94,0.1)">📱</div>
        <div class="benefit-title">One thumb away</div>
        <div class="benefit-desc">The mobile experience puts every view one swipe away from home. Intel, metrics, actions, connections — navigable by gesture, colored by panel so you always know where you are. No drilling through menus.</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ CTA ══ -->
<section class="cta-block" id="demo">
  <h2 class="cta-title">Ready to see it <span>live?</span></h2>
  <p class="cta-sub">The interactive demo runs in your browser. Five roles, live metrics, real cascade math, Ask TARGA — all running on the validated Targatek dataset.</p>
  <a href="targa_demo_v2.html" class="cta-btn">Open interactive demo →</a>
</section>

<script>
/* Progress bar */
window.addEventListener('scroll', function() {
  var scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('progressBar').style.width = scrolled + '%';
});

/* Fade-up on scroll */
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up').forEach(function(el) { obs.observe(el); });

/* Rubik's cube rotation */
function setCubeFace(face) {
  var cube = document.getElementById('rubikCube');
  if (!cube) return;
  cube.dataset.face = face;
  document.querySelectorAll('.cube-face-row').forEach(function(r) {
    r.classList.toggle('active', r.dataset.face === face);
  });
}
/* Auto-rotate the cube slowly on load */
var faceSequence = ['home','metrics','intel','connections','actions'];
var faceIdx = 0;
setInterval(function() {
  faceIdx = (faceIdx + 1) % faceSequence.length;
  setCubeFace(faceSequence[faceIdx]);
}, 2800);

window.addEventListener('scroll', function() {
  var scrollY = window.scrollY + 100;
  sections.forEach(function(id) {
    var el = document.getElementById(id);
    var link = document.querySelector('.nav-link[href="#'+id+'"]');
    if (!el || !link) return;
    var top = el.offsetTop;
    var bottom = top + el.offsetHeight;
    link.classList.toggle('active', scrollY >= top && scrollY < bottom);
  });
});
</script>
      ` }} />
    </>
  );
}
