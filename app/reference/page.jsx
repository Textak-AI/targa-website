const NAV_BAR = `
<div style="position:fixed;top:0;left:0;right:0;height:40px;background:#0f2035;z-index:1000;display:flex;align-items:center;padding:0 16px;gap:0;border-bottom:1px solid rgba(255,255,255,0.08);font-family:-apple-system,sans-serif;">
  <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;margin-right:24px;">
    <svg width="16" height="16" viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill="#0eb2af"/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill="#fff"/></svg>
    <span style="font-size:13px;font-weight:700;color:#fff;letter-spacing:-0.01em;">TARGA AI</span>
  </div>
  <a href="/mockup" style="padding:0 14px;height:40px;display:inline-flex;align-items:center;font-size:12px;font-weight:400;color:rgba(255,255,255,0.55);letter-spacing:0.04em;text-decoration:none;border-bottom:2px solid transparent;">Live Demo</a>
  <a href="/guide" style="padding:0 14px;height:40px;display:inline-flex;align-items:center;font-size:12px;font-weight:400;color:rgba(255,255,255,0.55);letter-spacing:0.04em;text-decoration:none;border-bottom:2px solid transparent;">Platform Guide</a>
  <a href="/reference" style="padding:0 14px;height:40px;display:inline-flex;align-items:center;font-size:12px;font-weight:600;color:#0eb2af;letter-spacing:0.04em;text-decoration:none;border-bottom:2px solid #0eb2af;">Technical Reference</a>
  <div style="margin-left:auto;font-size:9px;color:rgba(255,255,255,0.25);letter-spacing:0.12em;text-transform:uppercase;">HBC-TARGA-UX-2026</div>
</div>
<style>.sidebar{top:40px!important;height:calc(100vh - 40px)!important;width:200px!important}.main{margin-left:200px!important}</style>
`;

export const metadata = {
  title: 'TARGA AI — Technical Reference · HBC-TARGA-UX-2026',
  robots: { index: false, follow: false },
};

export default function ReferencePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

:root{
  --bg:#0f1117;--bg1:#161b22;--bg2:#1c2128;--bg3:#21262d;
  --border:#30363d;--border-s:#21262d;
  --text:#e6edf3;--text2:#8b949e;--text3:#6e7681;
  --teal:#0eb2af;--teal-d:#0a8a87;--teal-dim:rgba(14,178,175,0.15);
  --gold:#d09a2e;--gold-dim:rgba(208,154,46,0.12);
  --ok:#3fb950;--ok-dim:rgba(63,185,80,0.12);
  --warn:#d29922;--warn-dim:rgba(210,153,34,0.12);
  --danger:#f85149;--danger-dim:rgba(248,81,73,0.12);
  --purple:#bc8cff;--purple-dim:rgba(188,140,255,0.12);
  --blue:#79c0ff;--blue-dim:rgba(121,192,255,0.12);
  --font:'Inter',system-ui,sans-serif;
  --mono:'JetBrains Mono',monospace;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;font-size:14px;}
body{font-family:var(--font);background:var(--bg);color:var(--text);line-height:1.6;-webkit-font-smoothing:antialiased;}

/* ── LAYOUT ── */
.layout{display:block;min-height:100vh;}

/* ── SIDEBAR ── */
.sidebar{
  position:fixed;top:0;left:0;width:200px;height:100vh;
  background:var(--bg1);border-right:1px solid var(--border);
  overflow-y:auto;padding:0;z-index:50;
  display:flex;flex-direction:column;
}
.sidebar-header{
  padding:16px 20px;border-bottom:1px solid var(--border);
  display:flex;align-items:center;gap:10px;
  background:var(--bg);position:sticky;top:0;z-index:1;
}
.sidebar-logo{width:20px;height:20px;flex-shrink:0;}
.sidebar-brand{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--teal);}
.sidebar-sow{font-family:var(--mono);font-size:9px;color:var(--text3);padding:0 20px 12px;padding-top:10px;border-bottom:1px solid var(--border);letter-spacing:0.04em;}
.sidebar-nav{padding:8px 0;flex:1;}
.nav-section{margin-bottom:4px;}
.nav-section-label{
  font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:0.14em;
  text-transform:uppercase;color:var(--text3);
  padding:8px 20px 4px;
}
.nav-item{
  display:flex;align-items:center;gap:8px;
  padding:5px 20px;font-size:12px;color:var(--text2);
  text-decoration:none;cursor:pointer;transition:all 120ms;
  border-left:2px solid transparent;
}
.nav-item:hover{color:var(--text);background:var(--bg2);}
.nav-item.active{color:var(--teal);border-left-color:var(--teal);background:var(--teal-dim);}
.nav-item-dot{width:5px;height:5px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:0.5;}
.sidebar-footer{padding:12px 20px;border-top:1px solid var(--border);font-family:var(--mono);font-size:9px;color:var(--text3);line-height:1.6;}

/* ── MAIN ── */
.main{margin-left:200px;padding:0;min-width:0;}
.main-inner{max-width:1100px;width:100%;padding:48px 48px 96px;box-sizing:border-box;}

/* ── PAGE HEADER ── */
.page-header{margin-bottom:48px;padding-bottom:32px;border-bottom:1px solid var(--border);}
.doc-meta{display:flex;flex-wrap:wrap;gap:24px;margin-bottom:24px;}
.meta-item{display:flex;flex-direction:column;gap:3px;}
.meta-label{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--text3);}
.meta-val{font-family:var(--mono);font-size:12px;color:var(--text2);}
.meta-val.highlight{color:var(--teal);}
.page-title{font-size:24px;font-weight:700;color:var(--text);letter-spacing:-0.02em;margin-bottom:8px;}
.page-sub{font-size:14px;color:var(--text2);line-height:1.7;}

/* ── SECTIONS ── */
.section{margin-bottom:56px;scroll-margin-top:24px;}
.section-header{
  display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;
  margin-bottom:20px;padding-bottom:12px;
  border-bottom:1px solid var(--border);
}
.section-num{font-family:var(--mono);font-size:11px;color:var(--text3);font-weight:500;flex-shrink:0;}
.section-title{font-size:18px;font-weight:600;color:var(--text);letter-spacing:-0.01em;}
.section-tag{font-family:var(--mono);font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;margin-left:auto;flex-shrink:0;}
.tag-screen{background:var(--blue-dim);color:var(--blue);}
.tag-system{background:var(--purple-dim);color:var(--purple);}
.tag-proto{background:var(--teal-dim);color:var(--teal);}
.tag-token{background:var(--gold-dim);color:var(--gold);}

/* ── DESCRIPTION ── */
.desc{font-size:13px;color:var(--text2);line-height:1.75;margin-bottom:20px;max-width:100%;word-wrap:break-word;}
.desc strong{color:var(--text);font-weight:600;}

/* ── FEATURE LIST ── */
.feat-list{list-style:none;display:flex;flex-direction:column;gap:4px;margin-bottom:20px;}
.feat-list li{
  display:flex;align-items:flex-start;gap:10px;
  font-size:13px;color:var(--text2);padding:6px 10px;
  border-radius:4px;
  border:1px solid transparent;
  transition:border-color 120ms;
}
.feat-list li:hover{border-color:var(--border);background:var(--bg1);}
.feat-list li::before{
  content:'▸';color:var(--teal);font-size:10px;flex-shrink:0;margin-top:3px;
}
.feat-list li strong{color:var(--text);font-weight:600;}

/* ── COMPONENT STATES TABLE ── */
.states-table{width:100%;border-collapse:collapse;font-size:12px;margin-bottom:20px;}
.states-table th{
  font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:0.1em;
  text-transform:uppercase;color:var(--text3);
  padding:8px 12px;text-align:left;
  border-bottom:2px solid var(--border);
  background:var(--bg1);
}
.states-table td{
  padding:8px 12px;border-bottom:1px solid var(--border-s);
  vertical-align:top;color:var(--text2);
}
.states-table tr:hover td{background:var(--bg1);}
.states-table code{font-family:var(--mono);font-size:11px;color:var(--teal);}
.state-badge{
  font-family:var(--mono);font-size:9px;font-weight:700;
  padding:2px 7px;border-radius:3px;display:inline-block;
}
.state-ok{background:var(--ok-dim);color:var(--ok);}
.state-warn{background:var(--warn-dim);color:var(--warn);}
.state-danger{background:var(--danger-dim);color:var(--danger);}
.state-default{background:var(--bg3);color:var(--text3);}
.state-blue{background:var(--blue-dim);color:var(--blue);}
.state-purple{background:var(--purple-dim);color:var(--purple);}

/* ── CODE BLOCK ── */
.code-block{
  background:var(--bg1);border:1px solid var(--border);
  border-radius:6px;padding:16px 20px;margin-bottom:16px;
  font-family:var(--mono);font-size:12px;color:var(--text2);
  overflow-x:auto;line-height:1.7;
}
.code-block .cm{color:var(--text3);}/* comment */
.code-block .ky{color:var(--purple);}/* keyword */
.code-block .st{color:var(--teal);}/* string/type */
.code-block .nu{color:var(--gold);}/* number */
.code-block .fn{color:var(--blue);}/* function */
.code-block .op{color:var(--text3);}/* operator */

/* ── CALLOUT ── */
.callout{
  display:flex;gap:12px;padding:12px 16px;
  border-radius:6px;border:1px solid;margin-bottom:16px;
  font-size:13px;line-height:1.6;
}
.callout.info{border-color:rgba(121,192,255,0.2);background:var(--blue-dim);color:var(--blue);}
.callout.warn{border-color:rgba(210,153,34,0.2);background:var(--warn-dim);color:var(--warn);}
.callout.note{border-color:var(--border);background:var(--bg1);color:var(--text2);}
.callout-icon{font-size:14px;flex-shrink:0;margin-top:1px;}

/* ── TOKEN GRID ── */
.token-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;margin-bottom:20px;}
.token-card{background:var(--bg1);border:1px solid var(--border);border-radius:6px;overflow:hidden;}
.token-swatch{height:32px;}
.token-info{padding:8px 12px;}
.token-name{font-family:var(--mono);font-size:11px;color:var(--text);font-weight:500;margin-bottom:2px;}
.token-val{font-family:var(--mono);font-size:10px;color:var(--text3);}

/* ── TYPE SCALE TABLE ── */
.type-row{
  display:flex;align-items:baseline;gap:16px;
  padding:10px 0;border-bottom:1px solid var(--border-s);
}
.type-row:last-child{border-bottom:none;}
.type-spec{font-family:var(--mono);font-size:10px;color:var(--text3);flex-shrink:0;width:180px;}
.type-sample{color:var(--text);}

/* ── SYSTEM DIAGRAM ── */
.diagram-wrap{
  background:var(--bg1);border:1px solid var(--border);
  border-radius:8px;overflow:hidden;margin-bottom:24px;
}
.diagram-title{
  font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:0.1em;
  text-transform:uppercase;color:var(--text3);
  padding:10px 16px;border-bottom:1px solid var(--border);
  background:var(--bg);
}
.diagram-svg{padding:24px;overflow-x:auto;}

/* ── DATA FLOW TABLE ── */
.flow-table{width:100%;border-collapse:collapse;font-size:12px;margin-bottom:20px;}
.flow-table th{
  font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:0.1em;
  text-transform:uppercase;color:var(--text3);
  padding:8px 12px;text-align:left;border-bottom:2px solid var(--border);
  background:var(--bg1);
}
.flow-table td{padding:8px 12px;border-bottom:1px solid var(--border-s);color:var(--text2);vertical-align:top;}
.flow-table tr:hover td{background:var(--bg1);}
.flow-table code{font-family:var(--mono);font-size:11px;color:var(--teal);}
.flow-arrow{color:var(--text3);font-size:10px;}

/* ── PERMISSION MATRIX ── */
.perm-table{width:100%;border-collapse:collapse;font-size:12px;margin-bottom:20px;table-layout:fixed;}
.perm-table th{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--text3);padding:8px 10px;text-align:center;border-bottom:2px solid var(--border);background:var(--bg1);}
.perm-table th:first-child{text-align:left;}
.perm-table td{padding:7px 10px;border-bottom:1px solid var(--border-s);text-align:center;vertical-align:middle;}
.perm-table td:first-child{text-align:left;color:var(--text2);font-family:var(--mono);font-size:11px;}
.perm-table tr:hover td{background:var(--bg1);}
.perm-y{color:var(--ok);font-weight:700;}/* can edit */
.perm-r{color:var(--danger);}/* read only */
.perm-n{color:var(--text3);}/* no access */
.perm-req{color:var(--warn);}/* can request change */

/* ── API ENDPOINT ── */
.endpoint{
  display:flex;align-items:center;gap:12px;
  background:var(--bg1);border:1px solid var(--border);
  border-radius:6px;padding:10px 16px;margin-bottom:8px;
  font-family:var(--mono);font-size:12px;
}
.method{font-weight:700;font-size:10px;padding:2px 6px;border-radius:3px;flex-shrink:0;}
.method-post{background:var(--ok-dim);color:var(--ok);}
.method-get{background:var(--blue-dim);color:var(--blue);}
.endpoint-path{color:var(--text);}
.endpoint-desc{color:var(--text3);margin-left:auto;font-size:11px;}

/* ── SECTION DIVIDER ── */
.h3{font-size:14px;font-weight:600;color:var(--text);margin:24px 0 10px;letter-spacing:-0.005em;}
.h3::before{content:'§ ';color:var(--text3);font-weight:400;}
hr.thin{border:none;border-top:1px solid var(--border-s);margin:24px 0;}

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: NAV_BAR + `
<div class="layout">

<!-- SIDEBAR -->
<nav class="sidebar">
  <div class="sidebar-header">
    <svg class="sidebar-logo" viewBox="0 0 55.86 58.3"><polygon fill="#1f476a" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/><polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/></svg>
    <span class="sidebar-brand">TARGA AI</span>
  </div>
  <div class="sidebar-sow">HBC-TARGA-UX-2026 · Technical Reference</div>
  <div class="sidebar-nav">

    <div class="nav-section">
      <div class="nav-section-label">Overview</div>
      <a class="nav-item active" href="#overview"><span class="nav-item-dot"></span>Document scope</a>
      <a class="nav-item" href="#system-diagram"><span class="nav-item-dot"></span>§1.1 — System diagram</a>
      <a class="nav-item" href="#data-model"><span class="nav-item-dot"></span>§1.2 — Data model</a>
    </div>

    <div class="nav-section">
      <div class="nav-section-label">Screens</div>
      <a class="nav-item" href="#s01"><span class="nav-item-dot"></span>§2.1 — CEO Portfolio</a>
      <a class="nav-item" href="#s02"><span class="nav-item-dot"></span>§2.2 — Focus View</a>
      <a class="nav-item" href="#s03"><span class="nav-item-dot"></span>§2.3 — 360 Cascade</a>
      <a class="nav-item" href="#s04"><span class="nav-item-dot"></span>§2.4 — Plan Builder</a>
      <a class="nav-item" href="#s05"><span class="nav-item-dot"></span>§2.5 — Mobile</a>
      <a class="nav-item" href="#s06"><span class="nav-item-dot"></span>§2.6 — Error/empty states</a>
      <a class="nav-item" href="#s07"><span class="nav-item-dot"></span>§2.7 — Event model</a>
    </div>

    <div class="nav-section">
      <div class="nav-section-label">Overlays &amp; Drawers</div>
      <a class="nav-item" href="#o01"><span class="nav-item-dot"></span>§3.1 — IM Drawer</a>
      <a class="nav-item" href="#o02"><span class="nav-item-dot"></span>§3.2 — Quick Add</a>
      <a class="nav-item" href="#s04"><span class="nav-item-dot"></span>New Plan (see §2.4)</a>
    </div>

    <div class="nav-section">
      <div class="nav-section-label">Intelligence</div>
      <a class="nav-item" href="#intel-layer"><span class="nav-item-dot"></span>§4.1 — TARGA intelligence</a>
      <a class="nav-item" href="#ask-targa"><span class="nav-item-dot"></span>§4.2 — Ask TARGA (API)</a>
      <a class="nav-item" href="#s03"><span class="nav-item-dot"></span>Cascade (see §2.3)</a>
    </div>

    <div class="nav-section">
      <div class="nav-section-label">Token System</div>
      <a class="nav-item" href="#tokens-color"><span class="nav-item-dot"></span>§5.1 — Color tokens</a>
      <a class="nav-item" href="#tokens-type"><span class="nav-item-dot"></span>§5.2 — Typography</a>
      <a class="nav-item" href="#tokens-component"><span class="nav-item-dot"></span>§5.3 — Components</a>
    </div>

    <div class="nav-section">
      <div class="nav-section-label">Permissions</div>
      <a class="nav-item" href="#roles"><span class="nav-item-dot"></span>§6.1 — Role definitions</a>
      <a class="nav-item" href="#perm-matrix"><span class="nav-item-dot"></span>§6.2 — Permission matrix</a>
    </div>

    <div class="nav-section">
      <div class="nav-section-label">Prototype</div>
      <a class="nav-item" href="#proto"><span class="nav-item-dot"></span>§7.1 — Demo dataset</a>
      <a class="nav-item" href="#proto-nav"><span class="nav-item-dot"></span>§7.2 — Navigation map</a>
    </div>

  </div>
  <div class="sidebar-footer">
    Prepared by HyperBrand Creative<br>
    Kyle Moyer · HBC-TARGA-UX-2026<br>
    Rev. May 2026
  </div>
</nav>

<!-- MAIN -->
<main class="main">
<div class="main-inner">

<!-- PAGE HEADER -->
<div class="page-header" id="overview">
  <div class="doc-meta">
    <div class="meta-item"><div class="meta-label">SOW Reference</div><div class="meta-val highlight">HBC-TARGA-UX-2026</div></div>
    <div class="meta-item"><div class="meta-label">Client</div><div class="meta-val">Targatek Inc.</div></div>
    <div class="meta-item"><div class="meta-label">Prepared for</div><div class="meta-val">Joseph Thompson, CEO</div></div>
    <div class="meta-item"><div class="meta-label">Prepared by</div><div class="meta-val">Kyle Moyer, HyperBrand Creative Ltd.</div></div>
    <div class="meta-item"><div class="meta-label">Revision</div><div class="meta-val">May 2026</div></div>
  </div>
  <div class="page-title">TARGA AI Platform — Technical Feature Reference</div>
  <p class="page-sub">Complete specification for all screens, components, data flows, and design tokens delivered under HBC-TARGA-UX-2026. Intended audience: Sigma Solve development team (Glenn), Targatek engineering. Not a marketing document.</p>
</div>

<!-- ══ SYSTEM DIAGRAM ══ -->
<section class="section" id="system-diagram">
  <div class="section-header">
    <span class="section-num">§1.1</span>
    <span class="section-title">System diagram — screens &amp; connections</span>
    <span class="section-tag tag-system">ARCHITECTURE</span>
  </div>
  <p class="desc">All screens delivered under this SOW, their relationships, and the data flows between them. Every arrow represents a navigable route or a data dependency. <strong>Prototype files:</strong> <code style="font-family:var(--mono);color:var(--teal)">targa_demo_v2.html</code> (desktop — all role views, Focus view, overlays) and <code style="font-family:var(--mono);color:var(--teal)">targa_mobile.html</code> (mobile — standalone, separate state). FOCUS_DATA subtype shapes are defined inline in <code style="font-family:var(--mono);color:var(--teal)">targa_demo_v2.html</code>.</p>

  <div class="diagram-wrap">
    <div class="diagram-title">TARGA AI — Screen &amp; Data Flow Map · HBC-TARGA-UX-2026</div>
    <div class="diagram-svg">
      <svg viewBox="0 0 900 620" xmlns="http://www.w3.org/2000/svg" font-family="'JetBrains Mono',monospace" font-size="11">

        <!-- DEFS -->
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#30363d"/></marker>
          <marker id="arr-teal" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#0eb2af"/></marker>
          <marker id="arr-gold" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#d09a2e"/></marker>
          <marker id="arr-purple" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#bc8cff"/></marker>
        </defs>

        <!-- BACKGROUND ZONES -->
        <!-- Data layer zone -->
        <rect x="10" y="10" width="880" height="40" rx="4" fill="#161b22" stroke="#30363d" stroke-width="1"/>
        <text x="20" y="34" fill="#6e7681" font-size="9" font-weight="700" letter-spacing="2">TARGA STATE · VALIDATED DATASET · 26 ITEMS · LIVE CASCADE</text>

        <!-- Desktop zone -->
        <rect x="10" y="64" width="620" height="340" rx="6" fill="#0a0d11" stroke="#21262d" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="20" y="82" fill="#6e7681" font-size="9" letter-spacing="1.5">DESKTOP</text>

        <!-- Overlays zone -->
        <rect x="10" y="418" width="620" height="190" rx="6" fill="#0a0d11" stroke="#21262d" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="20" y="436" fill="#6e7681" font-size="9" letter-spacing="1.5">OVERLAYS &amp; DRAWERS</text>

        <!-- Mobile zone -->
        <rect x="644" y="64" width="246" height="544" rx="6" fill="#0a0d11" stroke="#21262d" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="654" y="82" fill="#6e7681" font-size="9" letter-spacing="1.5">MOBILE</text>

        <!-- Intelligence zone -->
        <rect x="644" y="120" width="246" height="200" rx="4" fill="#0d1117" stroke="#1c2128"/>
        <text x="654" y="135" fill="#6e7681" font-size="8" letter-spacing="1">INTELLIGENCE LAYER</text>

        <!-- ── ARROWS (behind cards) ── -->
        <!-- ── ARROWS ── -->

        <!-- CEO Portfolio → Focus View (click goal row) -->
        <line x1="200" y1="118" x2="218" y2="118" stroke="#0eb2af" stroke-width="1.5" marker-end="url(#arr-teal)"/>
        <text x="204" y="114" fill="#0eb2af" font-size="8">click goal</text>

        <!-- Focus View → 360 Cascade -->
        <line x1="390" y1="118" x2="408" y2="118" stroke="#30363d" stroke-width="1" marker-end="url(#arr)"/>
        <text x="394" y="114" fill="#6e7681" font-size="8">nav</text>

        <!-- CEO Portfolio → Role Views -->
        <line x1="115" y1="146" x2="115" y2="173" stroke="#30363d" stroke-width="1" marker-end="url(#arr)"/>
        <text x="118" y="162" fill="#6e7681" font-size="8">persona chip</text>

        <!-- Focus View → IM Drawer (TARGA NOTICED btn) -->
        <line x1="305" y1="146" x2="125" y2="443" stroke="#d09a2e" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arr-gold)"/>

        <!-- CEO Portfolio → New Plan Modal -->
        <line x1="115" y1="146" x2="513" y2="443" stroke="#bc8cff" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arr-purple)"/>

        <!-- Any screen → Quick Add -->
        <line x1="305" y1="146" x2="314" y2="443" stroke="#3fb950" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arr)"/>

        <!-- Focus → Milestone Focus (ribbon nav) -->
        <path d="M 305 90 Q 305 70 370 70 Q 435 70 435 90" stroke="#0eb2af" stroke-width="1" fill="none" stroke-dasharray="3,3" marker-end="url(#arr-teal)"/>
        <text x="340" y="67" fill="#0eb2af" font-size="8">ribbon nav · openFocus()</text>

        <!-- Desktop → Intelligence -->
        <line x1="640" y1="220" x2="652" y2="220" stroke="#30363d" stroke-width="1" stroke-dasharray="3,3" marker-end="url(#arr)"/>


        <!-- ── SCREEN NODES ── -->

        <!-- CEO Portfolio (rv0) -->
        <rect x="30" y="90" width="170" height="56" rx="5" fill="#161b22" stroke="#0eb2af" stroke-width="1.5"/>
        <text x="40" y="110" fill="#0eb2af" font-size="9" font-weight="700">S01 · CEO PORTFOLIO</text>
        <text x="40" y="124" fill="#8b949e" font-size="10">Good morning, Joe.</text>
        <text x="40" y="137" fill="#6e7681" font-size="9">rv0 · default view</text>

        <!-- Focus View (rv6) -->
        <rect x="220" y="90" width="170" height="56" rx="5" fill="#161b22" stroke="#0eb2af" stroke-width="1.5"/>
        <text x="230" y="110" fill="#0eb2af" font-size="9" font-weight="700">S02 · FOCUS VIEW</text>
        <text x="230" y="124" fill="#8b949e" font-size="10">Single item command center</text>
        <text x="230" y="137" fill="#6e7681" font-size="9">rv6 · drill-down</text>

        <!-- 360 Cascade (rv5) -->
        <rect x="410" y="90" width="200" height="56" rx="5" fill="#161b22" stroke="#79c0ff" stroke-width="1.5"/>
        <text x="420" y="110" fill="#79c0ff" font-size="9" font-weight="700">S03 · 360 CASCADE VIEW</text>
        <text x="420" y="124" fill="#8b949e" font-size="10">Hierarchy drill-down · tree</text>
        <text x="420" y="137" fill="#6e7681" font-size="9">rv5 · plan page</text>

        <!-- Role views -->
        <rect x="30" y="175" width="360" height="38" rx="5" fill="#161b22" stroke="#30363d"/>
        <text x="40" y="192" fill="#8b949e" font-size="9" font-weight="700">ROLE VIEWS (rv1–rv4) · CFO, CTO, CMO, VP SALES</text>
        <text x="40" y="205" fill="#6e7681" font-size="9">Same layout · filtered to role-owned goals · different data</text>

        <!-- Focus sub-sections diagram -->
        <rect x="30" y="235" width="580" height="150" rx="5" fill="#0d1117" stroke="#21262d"/>
        <text x="40" y="252" fill="#6e7681" font-size="9" letter-spacing="1">S02 · FOCUS VIEW ANATOMY</text>

        <!-- Hierarchy ribbon -->
        <rect x="40" y="260" width="560" height="24" rx="3" fill="#0c1424" stroke="#21262d"/>
        <text x="50" y="276" fill="#0eb2af" font-size="9" font-weight="700">HIERARCHY RIBBON</text>
        <text x="165" y="276" fill="#6e7681" font-size="9">Objective → Goal [FOCUS] → Milestone → Milestone</text>
        <text x="480" y="276" fill="#30363d" font-size="9">navigable · click to openFocus(id)</text>

        <!-- Three columns -->
        <rect x="40" y="292" width="128" height="80" rx="3" fill="#161b22" stroke="#30363d"/>
        <text x="50" y="308" fill="#8b949e" font-size="9" font-weight="700">LEFT PANEL</text>
        <text x="50" y="320" fill="#6e7681" font-size="9">Metrics (3)</text>
        <text x="50" y="332" fill="#6e7681" font-size="9">External Links</text>
        <text x="50" y="344" fill="#6e7681" font-size="9">Add link</text>
        <text x="50" y="356" fill="#6e7681" font-size="9">240px wide</text>

        <rect x="178" y="292" width="240" height="80" rx="3" fill="#161b22" stroke="#0eb2af" stroke-width="1"/>
        <text x="188" y="308" fill="#0eb2af" font-size="9" font-weight="700">CENTER · HERO CARD</text>
        <text x="188" y="320" fill="#6e7681" font-size="9">LCD gauge · KPI band · progress</text>
        <text x="188" y="332" fill="#6e7681" font-size="9">TARGA NOTICED card</text>
        <text x="188" y="344" fill="#6e7681" font-size="9">Ask TARGA · Children grid</text>
        <text x="188" y="356" fill="#6e7681" font-size="9">What changed · History tabs</text>

        <rect x="428" y="292" width="152" height="80" rx="3" fill="#161b22" stroke="#30363d"/>
        <text x="438" y="308" fill="#8b949e" font-size="9" font-weight="700">RIGHT PANEL</text>
        <text x="438" y="320" fill="#6e7681" font-size="9">Actions list</text>
        <text x="438" y="332" fill="#6e7681" font-size="9">Intelligence feed</text>
        <text x="438" y="344" fill="#6e7681" font-size="9">NOTICED / CONSIDER</text>
        <text x="438" y="356" fill="#6e7681" font-size="9">320px wide</text>

        <!-- ── OVERLAYS ── -->

        <!-- IM Drawer -->
        <rect x="30" y="445" width="190" height="148" rx="5" fill="#161b22" stroke="#d09a2e" stroke-width="1.5"/>
        <text x="40" y="462" fill="#d09a2e" font-size="9" font-weight="700">O01 · IM DRAWER</text>
        <text x="40" y="476" fill="#6e7681" font-size="9">Intelligence Metric panel</text>
        <text x="40" y="490" fill="#8b949e" font-size="9">· Actual / Expected / Health</text>
        <text x="40" y="502" fill="#8b949e" font-size="9">· Status toggle (role-locked)</text>
        <text x="40" y="514" fill="#8b949e" font-size="9">· Weight slider (role-locked)</text>
        <text x="40" y="526" fill="#8b949e" font-size="9">· Pacing model select</text>
        <text x="40" y="538" fill="#8b949e" font-size="9">· Cascade impact preview</text>
        <text x="40" y="550" fill="#8b949e" font-size="9">· 30d trajectory</text>
        <text x="40" y="562" fill="#8b949e" font-size="9">· Data source</text>
        <text x="40" y="574" fill="#8b949e" font-size="9">· Metric suggestions (AI)</text>
        <text x="40" y="586" fill="#6e7681" font-size="9">position:fixed · z-index:200</text>

        <!-- Quick Add -->
        <rect x="234" y="445" width="160" height="80" rx="5" fill="#161b22" stroke="#3fb950" stroke-width="1.5"/>
        <text x="244" y="462" fill="#3fb950" font-size="9" font-weight="700">O02 · QUICK ADD</text>
        <text x="244" y="476" fill="#6e7681" font-size="9">Context-aware item creation</text>
        <text x="244" y="490" fill="#8b949e" font-size="9">· Type select (role-aware)</text>
        <text x="244" y="502" fill="#8b949e" font-size="9">· Title / Owner / Due / Note</text>
        <text x="244" y="514" fill="#8b949e" font-size="9">· Confirm → intel feed update</text>

        <!-- New Plan Modal -->
        <rect x="408" y="445" width="210" height="100" rx="5" fill="#161b22" stroke="#bc8cff" stroke-width="1.5"/>
        <text x="418" y="462" fill="#bc8cff" font-size="9" font-weight="700">O03 · NEW PLAN MODAL</text>
        <text x="418" y="476" fill="#6e7681" font-size="9">Thesis-driven plan creation</text>
        <text x="418" y="490" fill="#8b949e" font-size="9">· Free-text thesis input</text>
        <text x="418" y="502" fill="#8b949e" font-size="9">· TARGA parse + stream</text>
        <text x="418" y="514" fill="#8b949e" font-size="9">· Clarification Q step</text>
        <text x="418" y="526" fill="#8b949e" font-size="9">· Plan preview → confirm</text>
        <text x="418" y="538" fill="#8b949e" font-size="9">· Cascade + intel feed update</text>

        <!-- ── MOBILE ── -->

        <!-- Mobile panels -->
        <rect x="654" y="90" width="226" height="24" rx="3" fill="#0c1424" stroke="#21262d"/>
        <text x="664" y="106" fill="#0eb2af" font-size="9" font-weight="700">MOBILE · TORUS NAVIGATION</text>

        <rect x="654" y="122" width="226" height="24" rx="3" fill="#0d8b82" fill-opacity="0.2" stroke="#0d8b82" stroke-width="1"/>
        <text x="664" y="138" fill="#0eb2af" font-size="9" font-weight="700">● HOME (center)</text>

        <rect x="654" y="150" width="226" height="18" rx="3" fill="#161b22" stroke="#21262d"/>
        <text x="664" y="163" fill="#d09a2e" font-size="9">↑ INTEL PANEL</text>
        <rect x="654" y="172" width="226" height="18" rx="3" fill="#161b22" stroke="#21262d"/>
        <text x="664" y="185" fill="#3fb950" font-size="9">→ METRICS PANEL</text>
        <rect x="654" y="194" width="226" height="18" rx="3" fill="#161b22" stroke="#21262d"/>
        <text x="664" y="207" fill="#bc8cff" font-size="9">← CONNECTIONS PANEL</text>
        <rect x="654" y="216" width="226" height="18" rx="3" fill="#161b22" stroke="#21262d"/>
        <text x="664" y="229" fill="#79c0ff" font-size="9">↓ ACTIONS PANEL</text>

        <rect x="654" y="242" width="226" height="18" rx="3" fill="#161b22" stroke="#21262d"/>
        <text x="664" y="255" fill="#6e7681" font-size="9">D-PAD RAIL · role switcher</text>

        <rect x="654" y="264" width="226" height="18" rx="3" fill="#161b22" stroke="#21262d"/>
        <text x="664" y="277" fill="#6e7681" font-size="9">PANEL COLOR IDENTITY · border-top 2px</text>

        <rect x="654" y="286" width="226" height="18" rx="3" fill="#161b22" stroke="#21262d"/>
        <text x="664" y="299" fill="#6e7681" font-size="9">PANEL INDICATOR DOTS · 5 positions</text>

        <!-- Intelligence details -->
        <text x="664" y="326" fill="#8b949e" font-size="9" font-weight="700">TARGA INTELLIGENCE LAYER</text>
        <text x="664" y="342" fill="#6e7681" font-size="9">· calcExpected(item) → f(t) pacing</text>
        <text x="664" y="356" fill="#6e7681" font-size="9">· calcWeightedHealth(id) → cascade</text>
        <text x="664" y="370" fill="#6e7681" font-size="9">· calcTrajectory(item) → 30d delta</text>
        <text x="664" y="384" fill="#6e7681" font-size="9">· TARGA_STATE · 24 items live</text>
        <text x="664" y="398" fill="#6e7681" font-size="9">· Ask TARGA → Anthropic API</text>
        <text x="664" y="412" fill="#6e7681" font-size="9">  claude-sonnet-4-20250514</text>

        <!-- ── LEGEND ── -->
        <rect x="30" y="600" width="600" height="16" rx="2" fill="none"/>
        <line x1="30" y1="608" x2="60" y2="608" stroke="#0eb2af" stroke-width="1.5" marker-end="url(#arr-teal)"/>
        <text x="64" y="612" fill="#8b949e" font-size="9">primary navigation</text>
        <line x1="160" y1="608" x2="190" y2="608" stroke="#30363d" stroke-width="1" stroke-dasharray="3,3" marker-end="url(#arr)"/>
        <text x="194" y="612" fill="#8b949e" font-size="9">overlay trigger</text>
        <rect x="290" y="602" width="10" height="10" rx="2" fill="none" stroke="#0eb2af" stroke-width="1.5"/>
        <text x="304" y="612" fill="#8b949e" font-size="9">SOW-scope screen</text>
        <rect x="420" y="602" width="10" height="10" rx="2" fill="none" stroke="#79c0ff" stroke-width="1.5"/>
        <text x="434" y="612" fill="#8b949e" font-size="9">SOW-scope screen (alt)</text>
        <rect x="560" y="602" width="10" height="10" rx="2" fill="none" stroke="#d09a2e" stroke-width="1.5"/>
        <text x="574" y="612" fill="#8b949e" font-size="9">overlay</text>

      </svg>
    </div>
  </div>

  <div class="callout note">
    <span class="callout-icon">ℹ</span>
    <span>All screens share a single <code style="font-family:var(--mono);color:var(--teal)">TARGA_STATE</code> object. Role views (rv0–rv4) display filtered subsets. The IM drawer and modals operate as <code style="font-family:var(--mono);color:var(--teal)">position:fixed</code> overlays with z-index 200, rendering above all role views simultaneously.</span>
  </div>
</section>

<!-- ══ DATA MODEL ══ -->
<section class="section" id="data-model">
  <div class="section-header">
    <span class="section-num">§1.2</span>
    <span class="section-title">Data model</span>
    <span class="section-tag tag-system">DATA</span>
  </div>
  <p class="desc">The platform uses a single recursive item structure. Every node in the hierarchy — board objective, goal, milestone, metric — is the same object type with the same fields. The <code style="font-family:var(--mono);color:var(--teal)">type</code> field and <code style="font-family:var(--mono);color:var(--teal)">children</code> array determine its position in the tree.</p>

  <div class="code-block"><span class="cm">// Core item structure — same shape at all hierarchy levels</span>
<span class="st">Item</span> <span class="op">{</span>
  id:            <span class="st">string</span>          <span class="cm">// e.g. 'goal-platform', 'ms-arch'</span>
  name:          <span class="st">string</span>
  parent:        <span class="st">string | null</span>   <span class="cm">// id of parent item</span>
  children:      <span class="st">string[]</span>        <span class="cm">// ids of child items</span>
  type:          <span class="st">'objective' | 'goal' | 'milestone' | 'metric'</span>

  actual:        <span class="nu">number</span>          <span class="cm">// 0–100 reported progress %</span>
  actual_30d:    <span class="nu">number</span>          <span class="cm">// actual 30 days ago (trajectory)</span>
  weight:        <span class="nu">number</span>          <span class="cm">// 0–100 weight within parent</span>
  pace:          <span class="st">'linear' | 'front' | 'back'</span>
  status:        <span class="st">'not-started' | 'in-progress' | 'at-risk' | 'complete'</span>

  startDate:     <span class="st">Date</span>
  endDate:       <span class="st">Date</span>
  dataSource:    <span class="st">string</span>          <span class="cm">// e.g. 'Quickbooks · Monthly · Linda Adams'</span>

  <span class="cm">// Role-lock fields — which roleIndex (0–4) can edit each field</span>
  lockedStatus:  <span class="nu">number</span>          <span class="cm">// 0=CEO, 1=CFO, 2=CTO, 3=CMO, 4=VPSales</span>
  lockedWeight:  <span class="nu">number</span>
  lockedPace:    <span class="nu">number</span>
<span class="op">}</span></div>

  <div class="h3">FOCUS_DATA — prototype authored-content layer</div>
  <p class="desc"><code style="font-family:var(--mono);color:var(--teal)">FOCUS_DATA</code> is a separate JS object in the prototype, keyed by item id. It is <strong>not</strong> part of the <code style="font-family:var(--mono);color:var(--teal)">Item</code> type — it is a parallel authored layer used to populate rich content in the Focus view that would, in production, be generated by the TARGA agent. The two layers never merge — <code>TARGA_STATE</code> is computed truth, <code>FOCUS_DATA</code> is authored content for demo purposes.</p>
  <div class="code-block"><span class="cm">// FOCUS_DATA[itemId] — authored per-item demo content (NOT the Item type)</span>
<span class="st">FocusContent</span> <span class="op">{</span>
  <span class="cm">// Navigation / display</span>
  breadcrumb:    <span class="st">string</span>        <span class="cm">// topbar breadcrumb text</span>
  title:         <span class="st">string</span>        <span class="cm">// page h1</span>
  desc:          <span class="st">string</span>        <span class="cm">// hero description</span>
  owner:         <span class="st">string</span>        <span class="cm">// display name + role</span>
  ownerAv:       <span class="st">string</span>        <span class="cm">// 2-char avatar initials</span>
  dates:         <span class="st">string</span>        <span class="cm">// display date range</span>
  impact:        <span class="st">string</span>        <span class="cm">// impact label</span>

  <span class="cm">// Health display (mirrors computed values for demo reliability)</span>
  progress:      <span class="st">string</span>        <span class="cm">// e.g. '72%' — matches item.actual</span>
  progressColor: <span class="st">'ok' | 'warn' | 'risk'</span>
  progressSub:   <span class="st">string</span>        <span class="cm">// trend label</span>
  health:        <span class="st">string</span>        <span class="cm">// e.g. '65%' — matches calcWeightedHealth()</span>
  lcdActive:     <span class="st">'ahead' | 'on-track' | 'at-risk' | 'behind' | 'blocked'</span>

  <span class="cm">// Hierarchy ribbon</span>
  ribbonNodes:   <span class="st">RibbonNode[]</span>  <span class="cm">// { label, type, status, focus, mod }</span>

  <span class="cm">// Intelligence (authored — agent-generated in production)</span>
  tnText:        <span class="st">string</span>        <span class="cm">// TARGA NOTICED main text (HTML allowed)</span>
  tnConsider:    <span class="st">string</span>        <span class="cm">// WHAT I'D CONSIDER body</span>
  tnFooter:      <span class="st">string</span>        <span class="cm">// escalation/monitoring note</span>
  tnConf:        <span class="st">string</span>        <span class="cm">// confidence display e.g. '91% confidence'</span>
  tnPrimary:     <span class="st">string</span>        <span class="cm">// CTA button label</span>
  askChips:      <span class="st">string[]</span>      <span class="cm">// seeded question chips</span>

  <span class="cm">// Panels</span>
  metrics:       <span class="st">MetricDisplay[]</span>
  children:      <span class="st">ChildDisplay[]</span>
  actions:       <span class="st">ActionDisplay[]</span>
  intel:         <span class="st">IntelCard[]</span>
  history:       <span class="st">HistoryEntry[]</span>
<span class="op">}</span>

<span class="cm">// Subtype shapes — defined inline in prototype source (see §1.1 for filenames)</span>
<span class="cm">// Reference the FOCUS_DATA definitions in targa_demo_v2.html for concrete examples.</span>
<span class="cm">// Key shapes:</span>
<span class="st">RibbonNode</span>    <span class="op">{</span> label:<span class="st">string</span>, type:<span class="st">string</span>, status:<span class="st">'ok'|'warn'|'risk'</span>, focus:<span class="st">boolean</span>, mod:<span class="st">'objective'|'goal'|'milestone'|'metric'</span> <span class="op">}</span>
<span class="st">MetricDisplay</span> <span class="op">{</span> name:<span class="st">string</span>, src:<span class="st">string</span>, srcColor:<span class="st">string</span>, val:<span class="st">string</span>, target:<span class="st">string</span>, pct:<span class="nu">number</span>, state:<span class="st">'ok'|'warn'|'risk'</span>, trend:<span class="st">string</span>, targa:<span class="st">string</span> <span class="op">}</span>
<span class="st">ChildDisplay</span>  <span class="op">{</span> label:<span class="st">string</span>, type:<span class="st">string</span>, state:<span class="st">string</span>, impact:<span class="st">string</span>, progress:<span class="st">string</span>, ofGoal:<span class="st">string</span>, ownerAv:<span class="st">string</span>, ownerColor:<span class="st">string</span>, ownerName:<span class="st">string</span>, foot:<span class="st">string</span>, targa:<span class="st">string</span> <span class="op">}</span>
<span class="st">ActionDisplay</span> <span class="op">{</span> title:<span class="st">string</span>, badge:<span class="st">'blocker'|'risk'|'ok'</span>, due:<span class="st">string</span>, owner:<span class="st">string</span>, targa:<span class="st">string|null</span> <span class="op">}</span>
<span class="st">IntelCard</span>     <span class="op">{</span> title:<span class="st">string</span>, conf:<span class="st">string</span>, tag:<span class="st">'noticed'|'consider'</span>, text:<span class="st">string</span> <span class="op">}</span>
<span class="st">HistoryEntry</span>  <span class="op">{</span> av:<span class="st">string</span>, avColor:<span class="st">string</span>, text:<span class="st">string</span>, when:<span class="st">string</span> <span class="op">}</span> | <span class="op">{</span> system:<span class="st">true</span>, text:<span class="st">string</span>, when:<span class="st">string</span> <span class="op">}</span>

<span class="cm">// getFocusData(itemId) — falls back to computed content for any item</span>
<span class="cm">// not in FOCUS_DATA. Derives ribbon, tnText, lcdActive from TARGA_STATE.</span>
<span class="cm">// Rich authored content exists for: goal-platform, goal-pipeline,</span>
<span class="cm">// goal-pilots, ms-arch, ms-build, ms-design.</span></div>

  <div class="h3">Hierarchy rules</div>
  <table class="states-table">
    <tr><th>Level</th><th>Type</th><th>Max children</th><th>Can have parent</th><th>Demo count</th></tr>
    <tr><td><code>board-obj</code></td><td><span class="state-badge state-blue">OBJECTIVE</span></td><td>Unlimited goals</td><td>None (root)</td><td>1</td></tr>
    <tr><td><code>goal-*</code></td><td><span class="state-badge state-default">GOAL</span></td><td>Unlimited milestones</td><td>Objective</td><td>5</td></tr>
    <tr><td><code>ms-*</code> (type:milestone)</td><td><span class="state-badge state-default">MILESTONE</span></td><td>0 (leaf)</td><td>Goal</td><td>10 — time-bound deliverables: arch, design, build, qa, infra, apex, meridian, tradeshow, pricing, targatek-page</td></tr>
    <tr><td><code>ms-*</code> (type:metric)</td><td><span class="state-badge state-default">METRIC</span></td><td>0 (leaf)</td><td>Goal</td><td>8 — ongoing measurement: linkedin, outbound, content, webinar, burn, revenue, linkedin-brand, press</td></tr>
  </table>

  <div class="h3">Demo dataset — 24 items</div>
  <div class="code-block"><span class="cm">// TARGA_STATE.items — full validated dataset</span>
board-obj        <span class="cm">// Trade Show Ready + 3 Pilots · weight:100 · actual:83</span>
  goal-platform  <span class="cm">// Platform Delivery · weight:40 · actual:72 · AT RISK</span>
    ms-arch      <span class="cm">// (milestone) Item Architecture CR · weight:20 · actual:0 · OVERDUE</span>
    ms-design    <span class="cm">// (milestone) UX Design System (HBC) · weight:15 · actual:100 · COMPLETE</span>
    ms-build     <span class="cm">// (milestone) Sigma Solve Build · weight:35 · actual:34</span>
    ms-qa        <span class="cm">// (milestone) QA Complete · weight:20 · actual:0 · back-loaded</span>
    ms-infra     <span class="cm">// (milestone) Cloud Infrastructure · weight:10 · actual:0 · back-loaded</span>
  goal-pipeline  <span class="cm">// Pipeline to 50 Demos · weight:20 · actual:78</span>
    ms-linkedin  <span class="cm">// (metric) LinkedIn Demand Gen · weight:40 · actual:76</span>
    ms-outbound  <span class="cm">// (metric) Outbound Conversion · weight:30 · actual:30 · front-loaded</span>
    ms-content   <span class="cm">// (metric) Content Cadence · weight:20 · actual:82</span>
    ms-webinar   <span class="cm">// (metric) Webinar Registrations · weight:10 · actual:38 · front-loaded</span>
  goal-pilots    <span class="cm">// 3 Pilot Customers Q3 · weight:25 · actual:34 (health:97%) · back-loaded</span>
    ms-apex      <span class="cm">// (milestone) Apex Dynamics · weight:35 · actual:28 · back-loaded</span>
    ms-meridian  <span class="cm">// (milestone) Meridian Capital · weight:30 · actual:18 · back-loaded</span>
    ms-tradeshow <span class="cm">// (milestone) Trade Show Appts · weight:25 · actual:52</span>
    ms-pricing   <span class="cm">// (milestone) Pilot Pricing Model · weight:10 · actual:60</span>
  goal-runway    <span class="cm">// 18-Month Runway · weight:10 · actual:100 · CFO locked</span>
    ms-burn      <span class="cm">// (metric) Burn Rate $142K vs $160K · weight:60 · actual:91</span>
    ms-revenue   <span class="cm">// (metric) Runway Extension 21mo · weight:40 · actual:82</span>
  goal-brand     <span class="cm">// C-Suite Brand Awareness · weight:5 · actual:92</span>
    ms-linkedin-brand <span class="cm">// (metric) Joe LinkedIn · weight:60 · actual:72</span>
    ms-press     <span class="cm">// (metric) Earned Media · weight:25 · actual:45 · front-loaded</span>
    ms-targatek-page  <span class="cm">// (milestone) Company Page optimization · weight:15 · actual:65</span></div>
</section>

<hr class="thin"/>

<!-- ══ SCREEN 01: CEO PORTFOLIO ══ -->
<section class="section" id="s01">
  <div class="section-header">
    <span class="section-num">§2.1</span>
    <span class="section-title">S01 — CEO Portfolio (Executive Dashboard)</span>
    <span class="section-tag tag-screen">SCREEN</span>
  </div>
  <p class="desc">Default landing view for all roles. Content is role-filtered — <code style="font-family:var(--mono);color:var(--teal)">currentRole</code> (0–4) determines which goals and KPIs are visible. Joe Thompson (role 0) sees the full board-level portfolio.</p>

  <div class="h3">Layout structure</div>
  <div class="code-block">TopBar         <span class="cm">// sticky · 56px · TARGA logo + breadcrumb context + Quick Add btn</span>
PersonaBar     <span class="cm">// 48px · persona chips · switchRole(n) · active chip stays lit in Focus</span>
ViewScroll     <span class="cm">// flex:1 · overflow-y:auto · 28px 32px padding</span>
  ViewHeader   <span class="cm">// greeting + AI sub-headline + New Plan button</span>
  KPIStrip     <span class="cm">// 4-column grid · flip cards · equation view on click</span>
  TwoColumn    <span class="cm">// 1fr + 360px · Goals list + Intelligence feed</span>
    GoalList   <span class="cm">// item-rows · onclick → openFocus(goalId)</span>
    IntelFeed  <span class="cm">// 3 intel cards · CRITICAL + TARGA INSIGHT types</span>
  AskTARGA     <span class="cm">// live API · seeded chips · context = TARGA_CTX</span></div>

  <div class="h3">KPI flip cards</div>
  <table class="states-table">
    <tr><th>Card</th><th>Front value</th><th>Source</th><th>Equation contributors</th></tr>
    <tr><td>July Readiness</td><td><code>calcWeightedHealth('goal-platform')</code></td><td>TARGA cascade</td><td>ms-arch, ms-design, ms-build, ms-qa, ms-infra</td></tr>
    <tr><td>Pilot Pipeline</td><td><code>calcWeightedHealth('goal-pipeline')</code></td><td>TARGA cascade</td><td>ms-linkedin, ms-outbound, ms-content, ms-webinar</td></tr>
    <tr><td>Runway</td><td><code>item.actual</code> · goal-runway</td><td>Quickbooks/manual</td><td>ms-burn, ms-revenue</td></tr>
    <tr><td>Pilots Closed</td><td><code>calcWeightedHealth('goal-pilots')</code></td><td>Salesforce CRM</td><td>ms-apex, ms-meridian, ms-tradeshow, ms-pricing</td></tr>
  </table>

  <div class="h3">Component states — item-row</div>
  <table class="states-table">
    <tr><th>State</th><th>Visual</th><th>Trigger</th></tr>
    <tr><td><span class="state-badge state-default">DEFAULT</span></td><td>White background, 1px border</td><td>Idle</td></tr>
    <tr><td><span class="state-badge state-blue">HOVER</span></td><td>Teal border-left, translateX(3px), shadow</td><td>mouseenter</td></tr>
    <tr><td><span class="state-badge state-warn">AT RISK</span></td><td><code>data-risk</code> → 3px gold left border</td><td>Automatic from health</td></tr>
    <tr><td><span class="state-badge state-danger">BLOCKED</span></td><td><code>data-blocked</code> → 3px red left border</td><td>Automatic from status</td></tr>
  </table>
</section>

<!-- ══ SCREEN 02: FOCUS VIEW ══ -->
<section class="section" id="s02">
  <div class="section-header">
    <span class="section-num">§2.2</span>
    <span class="section-title">S02 — Focus View (Item Management Screen)</span>
    <span class="section-tag tag-screen">SCREEN</span>
  </div>
  <p class="desc">Primary working screen. Renders for any item in <code style="font-family:var(--mono);color:var(--teal)">TARGA_STATE</code> via <code style="font-family:var(--mono);color:var(--teal)">openFocus(itemId)</code>. Rich data provided for goals <code>goal-platform</code>, <code>goal-pipeline</code>, <code>goal-pilots</code> and milestones <code>ms-arch</code>, <code>ms-build</code>, <code>ms-design</code>. All other items use <code style="font-family:var(--mono);color:var(--teal)">getFocusData()</code> fallback which derives content from TARGA_STATE.</p>

  <div class="h3">Layout — three zones</div>
  <div class="code-block">FocusTopBar          <span class="cm">// sticky · ← Back to portfolio btn + breadcrumb + Quick Add badge</span>
HierarchyRibbon      <span class="cm">// LCD panel bg · fv-ribbon-track · navigable nodes</span>
  RibbonNode[]       <span class="cm">// click parent → closeFocus() / click child → openFocus(id)</span>
FocusPage            <span class="cm">// flex:1 · overflow-y:auto</span>
  FocusPageHeader    <span class="cm">// FOCUS badge + eyebrow sub + h1 title</span>
  FocusGrid          <span class="cm">// CSS grid: 240px | 1fr | 320px</span>
    LeftPanel        <span class="cm">// Metrics panel + External Links panel</span>
    HeroShell        <span class="cm">// Hero card (LCD stripe + hero body + altitude block)</span>
    RightPanel       <span class="cm">// Actions panel + Intelligence panel</span>
  WhatChanged        <span class="cm">// fv-recent-activity · 3-col grid · period toggle 24h/7d/30d</span>
  AskTARGA           <span class="cm">// fv-ask-block · grounded to Focus item · live API</span>
  ChildrenSection    <span class="cm">// fv-child-row · MAP/KANBAN/TIMELINE/PEOPLE tabs (MAP only active)</span>
  HistoryTabs        <span class="cm">// Comments / Attachments / History (active) / Hierarchy / Relationships</span></div>

  <div class="h3">Hero card — subcomponents</div>
  <div class="code-block">LCDStripe            <span class="cm">// 56px dark bar · item type label + 5-segment LCD gauge</span>
  LCDGauge           <span class="cm">// Ahead / On Track / At Risk / Behind / Blocked · one .is-on active</span>
HeroBody             <span class="cm">// 22px 24px padding</span>
  HeroTags           <span class="cm">// impact tag + period tag (fv-hero-tag)</span>
  HeroTitle          <span class="cm">// Space Grotesk 22px 700</span>
  HeroDesc           <span class="cm">// Inter 13px color:text-3</span>
  HeroMetaRow        <span class="cm">// Owner av + name · Dates · Impact (flex row)</span>
  KPIBand            <span class="cm">// 4-col grid: PROGRESS · ACTIONS · HEALTH · REVIEW</span>
  ProgressTrack      <span class="cm">// 4px bar · fill color driven by progressColor field</span>
AltitudeBlock        <span class="cm">// border-top · YOUR VIEW eyebrow · depth meter + TARGA NOTICED card</span>
  DepthMeter         <span class="cm">// vertical rail · 5 stops: BOARD · GOAL · MILESTONE · ACTION · ASSIST</span>
  TARGANoticed       <span class="cm">// gold left-border card · confidence % · text · WHAT I'D CONSIDER</span>
  TARGANoticedCTA    <span class="cm">// primary btn → openIM(itemId) or openFocus(child) · _justOpened guard</span></div>

  <div class="h3">Hierarchy ribbon — node types &amp; icons</div>
  <table class="states-table">
    <tr><th>Type</th><th>Icon SVG</th><th>Click behavior</th><th>Status dot</th></tr>
    <tr><td>Objective</td><td><code>polygon points="12,2 22,12 12,22 2,12"</code> — diamond</td><td><code>closeFocus()</code> → portfolio</td><td>warn/risk</td></tr>
    <tr><td>Goal</td><td><code>circle r=9 + circle r=3</code> — ring</td><td>Focus node (no action) OR <code>openFocus(siblingId)</code></td><td>ok/warn/risk</td></tr>
    <tr><td>Milestone</td><td>Double chevron (two downward paths)</td><td><code>openFocus(milestoneId)</code></td><td>ok/warn/risk</td></tr>
    <tr><td>Metric</td><td>Bar chart (3 rects)</td><td><code>openFocus(metricId)</code></td><td>ok/warn</td></tr>
  </table>

  <div class="h3">Back navigation behavior</div>
  <div class="code-block"><span class="fn">closeFocus</span><span class="op">() {</span>
  <span class="cm">// If viewing a leaf item (milestone/metric), navigate UP to parent goal focus</span>
  <span class="ky">if</span> (item.parent !== <span class="st">'board-obj'</span> && item.children.length === <span class="nu">0</span>) <span class="op">{</span>
    <span class="fn">openFocus</span>(item.parent)    <span class="cm">// one level up</span>
  <span class="op">}</span> <span class="ky">else</span> <span class="op">{</span>
    <span class="fn">switchRole</span>(<span class="nu">0</span>)             <span class="cm">// goal level → back to portfolio</span>
  <span class="op">}</span>
<span class="op">}</span>
<span class="cm">// window._currentFocusId tracks current item for back navigation</span></div>

  <div class="h3">Child activity signals</div>
  <table class="states-table">
    <tr><th>Signal state</th><th>Dot color</th><th>Example text</th><th>CSS class</th></tr>
    <tr><td>fresh</td><td>Green (#3aa776)</td><td>"COO meeting logged yesterday"</td><td><code>fv-child-activity-dot.fresh</code></td></tr>
    <tr><td>stale</td><td>Gold (#e0903a)</td><td>"No update in 3 days — overdue"</td><td><code>fv-child-activity-dot.stale</code></td></tr>
    <tr><td>none</td><td>Gray</td><td>"No recent activity"</td><td><code>fv-child-activity-dot.none</code></td></tr>
  </table>
</section>

<!-- ══ SCREEN 03: 360 CASCADE ══ -->
<section class="section" id="s03">
  <div class="section-header">
    <span class="section-num">§2.3</span>
    <span class="section-title">S03 — 360 Cascade View</span>
    <span class="section-tag tag-screen">SCREEN</span>
  </div>
  <p class="desc">Hierarchical drill-down view — plan page (rv5). Displays the full objective tree with cascade algorithm visualization, algorithm explainer toggle, data source panel, and accountability map. Entry point: plan rows from CEO portfolio or the New Plan modal creation flow.</p>

  <div class="h3">Layout structure</div>
  <div class="code-block">PlanTopBar         <span class="cm">// ← Back to portfolio · plan title</span>
PlanBody           <span class="cm">// padding 28px 32px</span>
  CascadeTree      <span class="cm">// connector lines · indented item rows with health gauges</span>
  AlgoExplainer    <span class="cm">// toggleAlgoExplainer() · collapse/expand · pacing model cards</span>
  DataSources      <span class="cm">// toggleDataSources() · per-item data source list</span>
  AccountabilityMap <span class="cm">// owner × goal matrix · visual ownership grid</span></div>

  <div class="h3">Cascade algorithm</div>
  <div class="code-block"><span class="cm">// Three pacing models — f(t) where t = elapsed time ratio</span>
<span class="fn">calcExpected</span>(item):
  t = (now - startDate) / (endDate - startDate)     <span class="cm">// 0.0 → 1.0</span>
  <span class="ky">switch</span>(item.pace):
    <span class="st">'linear'</span>: <span class="ky">return</span> Math.round(t × <span class="nu">100</span>)                <span class="cm">// f(t) = t</span>
    <span class="st">'front'</span>:  <span class="ky">return</span> Math.round(Math.sqrt(t) × <span class="nu">100</span>)       <span class="cm">// f(t) = √t</span>
    <span class="st">'back'</span>:   <span class="ky">return</span> Math.round(t × t × <span class="nu">100</span>)              <span class="cm">// f(t) = t²</span>

<span class="cm">// Recursive weighted health — leaf to root cascade</span>
<span class="fn">calcWeightedHealth</span>(itemId):
  item = TARGA_STATE.items[itemId]
  <span class="ky">if</span> item.children.length === <span class="nu">0</span>:                        <span class="cm">// leaf node</span>
    exp = calcExpected(item)
    <span class="ky">return</span> exp > <span class="nu">0</span> ? min((item.actual / exp) × <span class="nu">100</span>, <span class="nu">100</span>) : <span class="nu">100</span>
  <span class="ky">else</span>:                                                  <span class="cm">// container node</span>
    wSum = Σ (child.weight / <span class="nu">100</span>) × calcWeightedHealth(child.id)
    wTot = Σ (child.weight / <span class="nu">100</span>)
    <span class="ky">return</span> Math.round(wSum / wTot)

<span class="cm">// 30-day trajectory delta</span>
<span class="cm">// calcExpected30d — identical to calcExpected but uses a reference date</span>
<span class="cm">// 30 days in the past instead of Date.now()</span>
<span class="fn">calcExpected30d</span>(item):
  ref30 = <span class="ky">new</span> Date(Date.<span class="fn">now</span>() - <span class="nu">30</span> × <span class="nu">24</span> × <span class="nu">60</span> × <span class="nu">60</span> × <span class="nu">1000</span>)
  total = item.endDate - item.startDate
  elapsed = <span class="fn">clamp</span>(ref30 - item.startDate, <span class="nu">0</span>, total)
  t = elapsed / total
  <span class="cm">// same f(t) switch as calcExpected</span>
  <span class="ky">return</span> Math.<span class="fn">round</span>((<span class="op">{</span> linear: t, front: Math.<span class="fn">sqrt</span>(t), back: t×t <span class="op">}[</span>item.pace<span class="op">]</span>) × <span class="nu">100</span>)

<span class="fn">calcTrajectory</span>(item):
  hNow = min((item.actual / <span class="fn">calcExpected</span>(item)) × <span class="nu">100</span>, <span class="nu">100</span>)
  h30d = min((item.actual_30d / <span class="fn">calcExpected30d</span>(item)) × <span class="nu">100</span>, <span class="nu">100</span>)
  delta = hNow - h30d
  <span class="ky">return</span> <span class="op">{</span> label, color, icon, trend <span class="op">}</span>
  <span class="cm">// delta > 10  → IMPROVING</span>
  <span class="cm">// -10 to 10  → STABLE</span>
  <span class="cm">// < -10      → DECLINING</span></div>
</section>

<!-- ══ SCREEN 04: PLAN BUILDER ══ -->
<section class="section" id="s04">
  <div class="section-header">
    <span class="section-num">§2.4</span>
    <span class="section-title">S04 — Plan Builder (New Plan Modal)</span>
    <span class="section-tag tag-screen">SCREEN</span>
  </div>
  <p class="desc">Thesis-driven plan creation. Entry: "New Plan" button on CEO portfolio. Three-step flow: thesis input → TARGA parse stream → clarification → preview → confirm. On confirm, populates intelligence feed and creates cascade items.</p>

  <div class="h3">Step flow</div>
  <table class="states-table">
    <tr><th>Step</th><th>UI state</th><th>Function</th><th>Visible elements</th></tr>
    <tr><td>1. Input</td><td><code>#npInputWrap</code> visible</td><td>—</td><td>Textarea + suggestion chips + Analyze btn</td></tr>
    <tr><td>2. Stream</td><td><code>#npStream</code> visible</td><td><code>runNewPlanParse()</code></td><td>5 animated parse lines · 600ms each</td></tr>
    <tr><td>3. Clarify</td><td><code>#npClarify</code> visible</td><td><code>npSubmitClarify()</code></td><td>"TARGA needs one more thing" + input</td></tr>
    <tr><td>4. Preview</td><td><code>#npPreview</code> visible</td><td><code>npConfirm()</code></td><td>Proposed plan card · name + meta</td></tr>
    <tr><td>5. Created</td><td>Modal closes</td><td><code>npCreate()</code></td><td>Intel feed updated · toast shown</td></tr>
  </table>

  <div class="callout warn">
    <span class="callout-icon">⚠</span>
    <span>The New Plan flow is demo-scripted. Steps 2–4 are simulated (no live AI call in the parse stream). Only step 5 triggers the intelligence feed update. The clarification question is hardcoded.</span>
  </div>
</section>

<!-- ══ SCREEN 05: MOBILE ══ -->
<section class="section" id="s05">
  <div class="section-header">
    <span class="section-num">§2.5</span>
    <span class="section-title">S05 — Mobile (Four-Panel Torus)</span>
    <span class="section-tag tag-screen">SCREEN</span>
  </div>
  <p class="desc">Separate standalone HTML file (<code style="font-family:var(--mono);color:var(--teal)">targa_mobile.html</code>). State machine with 5 panels navigable via D-pad buttons. Each panel has a distinct color identity via <code style="font-family:var(--mono);color:var(--teal)">border-bottom</code> on the topbar and active D-pad button fill.</p>
  <div class="callout warn">
    <span class="callout-icon">⚠</span>
    <span><strong>State sync — production gap:</strong> The mobile prototype is a standalone file with its own hardcoded data, independent of the desktop prototype. In production, mobile and desktop must share backend state with real-time sync. The integration approach (native app, PWA, or shared API) is TBD and is a significant architectural decision for Sigma Solve. See §8.1 for scope classification.</span>
  </div>

  <div class="h3">Panel map</div>
  <table class="states-table">
    <tr><th>Panel</th><th>Direction</th><th>Color token</th><th>Content</th></tr>
    <tr><td>center</td><td>Home / origin</td><td><code>#0eb2af</code> teal</td><td>KPI cards + greeting + TARGA intel</td></tr>
    <tr><td>intel</td><td>↑ swipe up</td><td><code>#fbbf24</code> gold</td><td>Intelligence feed + confidence scores</td></tr>
    <tr><td>metrics</td><td>→ swipe right</td><td><code>#2c8a5e</code> green</td><td>Goal health grid + pacing indicators</td></tr>
    <tr><td>connections</td><td>← swipe left</td><td><code>#6b3fa0</code> purple</td><td>Team dependencies + external links</td></tr>
    <tr><td>actions</td><td>↓ swipe down</td><td><code>#1a2f5a</code> navy</td><td>Action queue + status badges</td></tr>
  </table>

  <div class="h3">Navigation state machine</div>
  <div class="code-block"><span class="cm">// State object</span>
S <span class="op">=</span> <span class="op">{</span> panel: <span class="st">'center'</span>, role: <span class="nu">0</span> <span class="op">}</span>

<span class="cm">// Panel adjacency (D-pad mapping)</span>
panelMap <span class="op">=</span> <span class="op">{</span>
  center:      <span class="op">{</span> up:<span class="st">'intel'</span>, right:<span class="st">'metrics'</span>, down:<span class="st">'actions'</span>, left:<span class="st">'connections'</span> <span class="op">}</span>,
  intel:       <span class="op">{</span> down:<span class="st">'center'</span> <span class="op">}</span>,
  metrics:     <span class="op">{</span> left:<span class="st">'center'</span> <span class="op">}</span>,
  connections: <span class="op">{</span> right:<span class="st">'center'</span> <span class="op">}</span>,
  actions:     <span class="op">{</span> up:<span class="st">'center'</span> <span class="op">}</span>
<span class="op">}</span>

<span class="cm">// Color identity — applied to topbar accent strip + active D-pad button</span>
panelColors <span class="op">=</span> <span class="op">{</span>
  center: <span class="st">'#0eb2af'</span>, intel: <span class="st">'#fbbf24'</span>, metrics: <span class="st">'#2c8a5e'</span>,
  connections: <span class="st">'#6b3fa0'</span>, actions: <span class="st">'#1a2f5a'</span>
<span class="op">}</span></div>
</section>

<hr class="thin"/>

<!-- ══ §2.6 ERROR / EMPTY / LOADING STATES ══ -->
<section class="section" id="s06">
  <div class="section-header">
    <span class="section-num">§2.6</span>
    <span class="section-title">Error, empty, and loading states</span>
    <span class="section-tag tag-screen">STATES</span>
  </div>
  <p class="desc">All states that are not the happy path. Not currently implemented in the prototype — these are production requirements. Specified here to prevent omission during implementation.</p>

  <div class="h3">Ask TARGA — API failure</div>
  <table class="states-table">
    <tr><th>Scenario</th><th>Trigger</th><th>UI behavior</th><th>Fallback content</th></tr>
    <tr>
      <td>Network error / timeout</td>
      <td>fetch() throws, or response takes &gt;10s. <em>Note: fetch() has no built-in timeout — the 10s threshold is a production target, not current prototype behavior. Prototype falls back to hardcoded string on any catch().</em></td>
      <td>Loading dots stop. Response area shows error state.</td>
      <td>Hardcoded fallback string in prototype: <code>"The Item Architecture CR is the apex blocker — resolving it this week preserves the July deadline."</code> Production should show: <code>"TARGA is unavailable. Try again or check your connection."</code></td>
    </tr>
    <tr>
      <td>API rate limit (429)</td>
      <td>Anthropic returns 429</td>
      <td>Same as network error. Do not expose status code to user.</td>
      <td>Same fallback. Log error server-side.</td>
    </tr>
    <tr>
      <td>Empty input</td>
      <td>User clicks send with blank input</td>
      <td>No action. Input border pulses (warn color). No API call made.</td>
      <td>—</td>
    </tr>
  </table>

  <div class="h3">openFocus() — missing item</div>
  <table class="states-table">
    <tr><th>Scenario</th><th>Trigger</th><th>UI behavior</th></tr>
    <tr>
      <td>itemId not in TARGA_STATE</td>
      <td><code>openFocus('nonexistent-id')</code></td>
      <td>Prototype: <code>getFocusData()</code> returns null, function returns early, screen does not navigate. Production: navigate to Focus view showing an empty state — "Item not found or you don't have access." with back button.</td>
    </tr>
    <tr>
      <td>itemId in TARGA_STATE but no FOCUS_DATA</td>
      <td>Any item without authored content</td>
      <td>Prototype: <code>getFocusData()</code> fallback derives content from TARGA_STATE. Production: same pattern — derive from live item data. No error state needed.</td>
    </tr>
  </table>

  <div class="h3">CEO Portfolio — empty states</div>
  <table class="states-table">
    <tr><th>Component</th><th>Empty condition</th><th>Empty state content</th></tr>
    <tr>
      <td>Goal list</td>
      <td>No goals assigned to this role</td>
      <td>"No goals assigned to your role. Contact your administrator." — no item-rows rendered.</td>
    </tr>
    <tr>
      <td>Intelligence feed</td>
      <td>No intel cards generated</td>
      <td>"No alerts. All items are within normal parameters." — empty panel, no cards.</td>
    </tr>
    <tr>
      <td>KPI strip</td>
      <td>No items to compute health from</td>
      <td>Cards render with <code>—</code> placeholder values. No computation attempted.</td>
    </tr>
    <tr>
      <td>What Changed feed</td>
      <td>No history entries in past 24h</td>
      <td>"No activity in the last 24 hours." — period buttons still functional.</td>
    </tr>
  </table>

  <div class="h3">Focus view — empty panels</div>
  <table class="states-table">
    <tr><th>Panel</th><th>Empty condition</th><th>Empty state content</th></tr>
    <tr>
      <td>Metrics (left)</td>
      <td><code>FOCUS_DATA.metrics.length === 0</code></td>
      <td>"No metrics connected. + Add metric" affordance.</td>
    </tr>
    <tr>
      <td>Actions (right)</td>
      <td><code>FOCUS_DATA.actions.length === 0</code></td>
      <td>"No actions. + Add action" affordance (already present in prototype).</td>
    </tr>
    <tr>
      <td>Children grid</td>
      <td><code>item.children.length === 0</code></td>
      <td>Section collapses — do not render the "+ CHILDREN" header for leaf items with no children. Prototype currently renders empty grid.</td>
    </tr>
    <tr>
      <td>History tab</td>
      <td>No history entries</td>
      <td>"No history yet." — single muted line, no event rows.</td>
    </tr>
  </table>

  <div class="h3">Loading states</div>
  <table class="states-table">
    <tr><th>Component</th><th>Loading trigger</th><th>Loading UI</th><th>Duration</th></tr>
    <tr>
      <td>Ask TARGA response</td>
      <td>API call in flight</td>
      <td>Three animated dots (<code>.fv-ld</code> — teal, pulse animation, 1.2s loop). Text: "TARGA is thinking…"</td>
      <td>Until response or error</td>
    </tr>
    <tr>
      <td>New Plan parse stream</td>
      <td><code>runNewPlanParse()</code> called</td>
      <td>Five parse lines appear sequentially, 600ms apart. Animated pulse on "TARGA is reading your plan" label.</td>
      <td>~3s total (scripted)</td>
    </tr>
    <tr>
      <td>Cascade update</td>
      <td><code>imSave()</code> triggers <code>cascadeUpdate()</code></td>
      <td>Prototype: synchronous, no loading state (fast enough in-memory). Production: may need skeleton/shimmer on parent goal health values during async recalculation.</td>
      <td>Prototype: &lt;16ms. Production: TBD.</td>
    </tr>
    <tr>
      <td>Role switch</td>
      <td><code>switchRole(n)</code></td>
      <td>Prototype: instantaneous DOM toggle. Production with data fetching: show skeleton on KPI strip and goal list while role data loads.</td>
      <td>Prototype: 0ms. Production: TBD.</td>
    </tr>
  </table>

  <div class="h3">IM drawer — permission error</div>
  <table class="states-table">
    <tr><th>Scenario</th><th>Trigger</th><th>UI behavior</th></tr>
    <tr>
      <td>Locked field edit attempt</td>
      <td><code>canEdit(item, field)</code> returns false, user interacts</td>
      <td>Toast notification: "This field is locked to [Role Name]". Field remains disabled. "Request change from owner →" link shown below field.</td>
    </tr>
    <tr>
      <td>Cascade compute error</td>
      <td><code>cascadeUpdate()</code> encounters null parent</td>
      <td>Prototype: function returns early (guard in place). Production: show toast "Changes saved but cascade could not complete. Contact administrator." Log error.</td>
    </tr>
  </table>
</section>

<!-- ══ §2.7 EVENT MODEL ══ -->
<section class="section" id="s07">
  <div class="section-header">
    <span class="section-num">§2.7</span>
    <span class="section-title">Event model — when cascade runs</span>
    <span class="section-tag tag-screen">EVENTS</span>
  </div>
  <p class="desc">Specifies what triggers data updates, cascade recalculation, and UI refresh. The prototype uses an explicit save model. Production intent is documented below — final decision is a product call between Targatek and Sigma Solve.</p>

  <div class="h3">Prototype event model (current)</div>
  <div class="code-block"><span class="cm">// All edits are staged in TARGA_STATE.pendingChanges</span>
<span class="cm">// Nothing persists or cascades until explicit user action</span>

User edits status/weight/pacing in IM drawer
  <span class="op">→</span> stored in TARGA_STATE.pendingChanges (not applied)
  <span class="op">→</span> cascade impact preview updates live (weight slider only)

User clicks "Apply changes"
  <span class="op">→</span> imSave() applies pendingChanges to TARGA_STATE.items[id]
  <span class="op">→</span> cascadeUpdate(itemId) walks tree upward
  <span class="op">→</span> updateItemDOM() refreshes percent displays in DOM
  <span class="op">→</span> closeIM() dismisses drawer
  <span class="op">→</span> showToast("Changes applied — cascading to parent objectives")
  <span class="op">→</span> pendingChanges reset to {}

User clicks backdrop / X without saving
  <span class="op">→</span> closeIM() dismisses drawer
  <span class="op">→</span> pendingChanges discarded
  <span class="op">→</span> TARGA_STATE unchanged</div>

  <div class="h3">Production event model — recommendation</div>
  <table class="states-table">
    <tr><th>Edit type</th><th>Recommended trigger</th><th>Cascade timing</th><th>Rationale</th></tr>
    <tr>
      <td>Status change</td>
      <td>Explicit save (button or keyboard shortcut)</td>
      <td>On save — optimistic UI update, server confirms</td>
      <td>Status changes are significant — accidental changes should require confirmation</td>
    </tr>
    <tr>
      <td>Weight change</td>
      <td>Explicit save</td>
      <td>On save — not optimistic (affects all sibling weights)</td>
      <td>Weight changes affect other items' relative importance — should not be live-updated</td>
    </tr>
    <tr>
      <td>Pacing model change</td>
      <td>Explicit save</td>
      <td>On save — recalculate expected and health for item only</td>
      <td>Pacing is a configuration change, not a progress update</td>
    </tr>
    <tr>
      <td>Actual progress update</td>
      <td>On blur or explicit save</td>
      <td>On save — cascade immediately</td>
      <td>Most frequent edit — should feel responsive but not fire on every keystroke</td>
    </tr>
    <tr>
      <td>Item created (Quick Add)</td>
      <td>On confirm step</td>
      <td>Immediate — item appears in portfolio and intel feed</td>
      <td>Creation is a discrete action with clear intent</td>
    </tr>
    <tr>
      <td>Plan created (New Plan)</td>
      <td>On "Create plan →" confirm</td>
      <td>Immediate — full plan structure created and cascaded</td>
      <td>Plan creation is a high-intent action</td>
    </tr>
  </table>

  <div class="callout warn">
    <span class="callout-icon">⚠</span>
    <span><strong>Optimistic vs server-confirmed updates:</strong> The prototype has no server. In production, decide whether cascade runs optimistically on the client before server confirmation, or waits for server confirmation before updating the UI. Optimistic is faster but requires rollback on server error. Recommended: optimistic for status/actual updates, server-confirmed for weight changes (affects other items).</span>
  </div>
</section>


<hr class="thin"/>

<!-- ══ OVERLAY 01: IM DRAWER ══ -->
<section class="section" id="o01">
  <div class="section-header">
    <span class="section-num">§3.1</span>
    <span class="section-title">O01 — Intelligence Metric (IM) Drawer</span>
    <span class="section-tag tag-system">OVERLAY</span>
  </div>
  <p class="desc">Slides in from right. <code style="font-family:var(--mono);color:var(--teal)">position:fixed;inset:0;z-index:200</code>. Backdrop <code style="font-family:var(--mono);color:var(--teal)">onclick</code> closes — guarded by <code style="font-family:var(--mono);color:var(--teal)">_justOpened</code> flag (100ms) to prevent same-click close.</p>

  <div class="h3">Fields and edit permissions</div>
  <table class="states-table">
    <tr><th>Field</th><th>Display</th><th>Edit locked to</th><th>Lock field</th></tr>
    <tr><td>Actual progress</td><td>Reported % — display only. Not editable in prototype or IM drawer. <strong>Prototype:</strong> <code>item.actual</code> is dataset-only; updated only via <code>imSave()</code> cascade recalculation on parent items, never directly. <strong>Production:</strong> actual updated via data source sync (Quickbooks, Salesforce, etc.) or direct edit on a separate "Update progress" control TBD by Sigma Solve.</td><td>— (not editable)</td><td>—</td></tr>
    <tr><td>Expected by now</td><td>Calculated from pace model</td><td>—</td><td>—</td></tr>
    <tr><td>Weighted health</td><td>Recursive cascade result</td><td>—</td><td>—</td></tr>
    <tr><td>Trajectory</td><td>30-day delta icon + label</td><td>—</td><td>—</td></tr>
    <tr><td>Status</td><td>4-option strip toggle</td><td><code>lockedStatus</code> role</td><td><code>item.lockedStatus</code></td></tr>
    <tr><td>Weight</td><td>Range slider 0–100</td><td><code>lockedWeight</code> role</td><td><code>item.lockedWeight</code></td></tr>
    <tr><td>Pacing model</td><td>3-option selector</td><td><code>lockedPace</code> role</td><td><code>item.lockedPace</code></td></tr>
    <tr><td>Cascade impact</td><td>Live preview (computed)</td><td>—</td><td>—</td></tr>
    <tr><td>30d trajectory</td><td>actual_30d → actual delta</td><td>—</td><td>—</td></tr>
    <tr><td>Data source</td><td>Plain text badge</td><td>—</td><td>—</td></tr>
    <tr><td>Metric suggestions</td><td>Leading/lagging chips (AI)</td><td>—</td><td>—</td></tr>
  </table>

  <div class="h3">canEdit() logic</div>
  <div class="code-block"><span class="fn">canEdit</span>(item, field):
  lockField = <span class="op">{</span> status:<span class="st">'lockedStatus'</span>, weight:<span class="st">'lockedWeight'</span>, pace:<span class="st">'lockedPace'</span> <span class="op">}[</span>field<span class="op">]</span>
  <span class="ky">return</span> item[lockField] === currentRole    <span class="cm">// exact match required</span>

<span class="cm">// If canEdit() returns false:</span>
<span class="cm">// · field is grayed · disabled attribute applied</span>
<span class="cm">// · "Request change from [owner]" link shown</span>
<span class="cm">// · imRequestChange() → showToast()</span></div>

  <div class="h3">Save behavior</div>
  <div class="code-block"><span class="fn">imSave</span>():
  Object.assign(item, TARGA_STATE.pendingChanges)   <span class="cm">// apply pending</span>
  TARGA_STATE.items[itemId] = item
  <span class="fn">cascadeUpdate</span>(itemId)                           <span class="cm">// walk tree upward</span>
  <span class="fn">closeIM</span>()
  <span class="fn">showToast</span>(<span class="st">'Changes applied — cascading to parent objectives'</span>, ok)

<span class="fn">cascadeUpdate</span>(itemId):
  <span class="fn">updateItemDOM</span>(itemId)                           <span class="cm">// refresh DOM percent</span>
  parent = TARGA_STATE.items[item.parent]
  <span class="cm">// Recalculate parent actual from weighted child actuals</span>
  parent.actual = Σ (child.weight/100 × child.actual) / Σ (child.weight/100)
  <span class="fn">cascadeUpdate</span>(parent.id)                        <span class="cm">// recurse to root</span></div>
</section>

<!-- ══ OVERLAY 02: QUICK ADD ══ -->
<section class="section" id="o02">
  <div class="section-header">
    <span class="section-num">§3.2</span>
    <span class="section-title">O02 — Quick Add (Desktop)</span>
    <span class="section-tag tag-system">OVERLAY</span>
  </div>
  <p class="desc">Context-aware item creation. Item type options are role-specific. Three steps: type select → form → confirm. On confirm, injects a card into the active role view's intel feed.</p>

  <div class="h3">Type options per role</div>
  <table class="states-table">
    <tr><th>Role</th><th>Type A</th><th>Type B</th><th>Type C</th><th>Type D</th></tr>
    <tr><td>CEO (0)</td><td>Goal</td><td>Initiative</td><td>Action</td><td>Metric</td></tr>
    <tr><td>CFO (1)</td><td>Budget item</td><td>OpEx item</td><td>Approval</td><td>KPI</td></tr>
    <tr><td>CTO (2)</td><td>Milestone</td><td>Sprint</td><td>Blocker</td><td>Metric</td></tr>
    <tr><td>CMO (3)</td><td>Campaign</td><td>Content</td><td>Action</td><td>Lead metric</td></tr>
    <tr><td>VP Sales (4)</td><td>Prospect</td><td>Meeting</td><td>Follow-up</td><td>Pipeline metric</td></tr>
  </table>
</section>

<!-- ══ INTELLIGENCE LAYER ══ -->
<section class="section" id="intel-layer">
  <div class="section-header">
    <span class="section-num">§4.1</span>
    <span class="section-title">TARGA Intelligence layer</span>
    <span class="section-tag tag-system">INTELLIGENCE</span>
  </div>
  <p class="desc">Computed intelligence surfaced across all screens. Not stored — all values derived at render time from TARGA_STATE. Two output types: NOTICED (actionable alert, gold) and CONSIDER (recommendation, teal).</p>

  <div class="h3">Intelligence outputs per screen</div>
  <table class="states-table">
    <tr><th>Surface</th><th>Location</th><th>Source</th><th>Behavior</th></tr>
    <tr><td>CEO portfolio</td><td>Right rail intel feed</td><td>Hardcoded FOCUS_DATA.intel[]</td><td>3 cards, static per demo</td></tr>
    <tr><td>Focus view</td><td>Right panel · TARGA NOTICED card</td><td>FOCUS_DATA[itemId].tnText</td><td>Per-item authored content</td></tr>
    <tr><td>Focus view</td><td>What changed feed</td><td>FOCUS_DATA[itemId].history[]</td><td>Derived activity cards + TARGA card</td></tr>
    <tr><td>IM drawer</td><td>Metric suggestions block</td><td>getMetricSuggestions(item)</td><td>Leading/lagging/health/risk chips</td></tr>
    <tr><td>IM drawer</td><td>Cascade impact panel</td><td>calcWeightedHealth() live</td><td>Updates on weight slider change</td></tr>
    <tr><td>Flip cards</td><td>Equation view back face</td><td>FLIP_DATA.kpis[roleIdx-kpiIdx].calc()</td><td>Live calculation from TARGA_STATE</td></tr>
  </table>
</section>

<!-- ══ ASK TARGA ══ -->
<section class="section" id="ask-targa">
  <div class="section-header">
    <span class="section-num">§4.2</span>
    <span class="section-title">Ask TARGA — Anthropic API integration</span>
    <span class="section-tag tag-system">API</span>
  </div>
  <p class="desc">Live AI chat grounded to the TARGA_CTX system prompt. Four surfaces. Falls back to hardcoded demo response on API error.</p>

  <div class="h3">API call spec</div>
  <div class="callout warn">
    <span class="callout-icon">⚠</span>
    <span><strong>Security — production requirement:</strong> The prototype calls Anthropic directly from the browser. This requires the API key to be accessible in client-side code, which is acceptable only in a controlled demo environment. <strong>Production must route through a backend proxy.</strong> Targatek / Sigma Solve to implement a <code style="font-family:var(--mono);color:var(--text)">POST /api/ask</code> endpoint that forwards the request to Anthropic server-side. The API key must never appear in client JS in production.</span>
  </div>
  <div class="code-block">POST https://api.anthropic.com/v1/messages
<span class="op">{</span>
  model:      <span class="st">"claude-sonnet-4-20250514"</span>,
  max_tokens: <span class="nu">200</span>,
  system:     TARGA_CTX,      <span class="cm">// 400-char context string · role data · constraints</span>
  messages:   [<span class="op">{</span> role:<span class="st">"user"</span>, content: userQuery <span class="op">}</span>]
<span class="op">}</span>

<span class="cm">// TARGA_CTX includes: company name, 5 executive roles with their goal state,</span>
<span class="cm">// platform health metrics, key blockers, voice constraints (max 3 sentences,</span>
<span class="cm">// no bullets, authoritative peer tone)</span></div>

  <div class="h3">Ask TARGA surfaces</div>
  <table class="states-table">
    <tr><th>Surface</th><th>Element ID</th><th>Context addition</th><th>Seeded chips</th></tr>
    <tr><td>CEO portfolio</td><td><code>askCEO</code></td><td>Base TARGA_CTX</td><td>3 portfolio-level questions</td></tr>
    <tr><td>Focus view</td><td><code>fvAskInput</code></td><td>TARGA_CTX + "grounded to Focus item"</td><td>4 per-item questions from FOCUS_DATA</td></tr>
    <tr><td>CTO view</td><td>Inline on rv2</td><td>Base TARGA_CTX</td><td>Platform delivery questions</td></tr>
    <tr><td>CMO view</td><td>Inline on rv3</td><td>Base TARGA_CTX</td><td>Pipeline questions</td></tr>
  </table>
</section>

<hr class="thin"/>

<!-- ══ COLOR TOKENS ══ -->
<section class="section" id="tokens-color">
  <div class="section-header">
    <span class="section-num">§5.1</span>
    <span class="section-title">Design token system — color</span>
    <span class="section-tag tag-token">TOKENS</span>
  </div>
  <p class="desc">All color values in the design token system. Semantic assignments are the authoritative source for component implementation. Raw hex values should not be used directly in component code — always reference the token name.</p>

  <div class="h3">Brand tokens</div>
  <div class="token-grid">
    <div class="token-card"><div class="token-swatch" style="background:#0f2035"></div><div class="token-info"><div class="token-name">--navy</div><div class="token-val">#0f2035</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#162d46"></div><div class="token-info"><div class="token-name">--navyDark</div><div class="token-val">#162d46</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#060e1a"></div><div class="token-info"><div class="token-name">--navyDeep</div><div class="token-val">#060e1a</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#1a3a5c"></div><div class="token-info"><div class="token-name">--navyMid</div><div class="token-val">#1a3a5c</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#0eb2af"></div><div class="token-info"><div class="token-name">--teal (primary)</div><div class="token-val">#0eb2af</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#0cc7c4"></div><div class="token-info"><div class="token-name">--tealHover</div><div class="token-val">#0cc7c4</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#fbbf24"></div><div class="token-info"><div class="token-name">--gold</div><div class="token-val">#fbbf24</div></div></div>
  </div>

  <div class="h3">Semantic — status colors</div>
  <div class="token-grid">
    <div class="token-card"><div class="token-swatch" style="background:#2c8a5e"></div><div class="token-info"><div class="token-name">--ok</div><div class="token-val">#2c8a5e · On Track / Ahead</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#b07f1f"></div><div class="token-info"><div class="token-name">--warn</div><div class="token-val">#b07f1f · At Risk / Behind</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#b53a3a"></div><div class="token-info"><div class="token-name">--danger</div><div class="token-val">#b53a3a · Blocked / Failed</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#8a5e10"></div><div class="token-info"><div class="token-name">--advisor</div><div class="token-val">#8a5e10 · TARGA NOTICED</div></div></div>
  </div>

  <div class="h3">Semantic — surfaces (Focus view · light theme)</div>
  <div class="token-grid">
    <div class="token-card"><div class="token-swatch" style="background:#eef1f5;border:1px solid #dce4ec"></div><div class="token-info"><div class="token-name">--bg-base</div><div class="token-val">#eef1f5 · page background</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#ffffff;border:1px solid #dce4ec"></div><div class="token-info"><div class="token-name">--surface</div><div class="token-val">#ffffff · card surface</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#dce4ec;border:1px solid #dce4ec"></div><div class="token-info"><div class="token-name">--sunken</div><div class="token-val">#dce4ec · recessed area</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#9ba8b9"></div><div class="token-info"><div class="token-name">--g500</div><div class="token-val">#9ba8b9 · muted text</div></div></div>
  </div>

  <div class="h3">Spacing &amp; animation tokens</div>
  <div class="code-block"><span class="cm">// Spacing — used throughout component padding and gap</span>
spacing-xs:  <span class="nu">4px</span>
spacing-sm:  <span class="nu">8px</span>
spacing-md:  <span class="nu">12px</span>
spacing-lg:  <span class="nu">16px</span>
spacing-xl:  <span class="nu">24px</span>
spacing-2xl: <span class="nu">32px</span>
spacing-3xl: <span class="nu">48px</span>

<span class="cm">// Animation — single duration + easing used throughout prototype</span>
<span class="cm">// Note: no CSS variable defined in prototype — hardcoded values below</span>
duration-fast:   <span class="nu">120ms</span>   <span class="cm">// nav item transitions, hover states</span>
duration-base:   <span class="nu">140ms</span>   <span class="cm">// most component transitions (buttons, borders)</span>
duration-slow:   <span class="nu">260ms</span>   <span class="cm">// ribbon node transforms, 3D effects</span>
duration-page:   <span class="nu">600ms</span>   <span class="cm">// scroll-triggered fade-up on guide page</span>
easing-base:     <span class="st">cubic-bezier(0.4, 0, 0.2, 1)</span>   <span class="cm">// standard ease-in-out</span>
easing-spring:   <span class="st">cubic-bezier(0.34, 1.56, 0.64, 1)</span>  <span class="cm">// ribbon node spring</span>
easing-cascade:  <span class="st">cubic-bezier(0.4, 0.2, 0.2, 1)</span>  <span class="cm">// rubik cube rotation</span></div>

  <div class="h3">Semantic — dark surfaces (dashboard · ribbon)</div>
  <div class="token-grid">
    <div class="token-card"><div class="token-swatch" style="background:#181e2a"></div><div class="token-info"><div class="token-name">--slate</div><div class="token-val">#181e2a</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#1e2636"></div><div class="token-info"><div class="token-name">--slateMid</div><div class="token-val">#1e2636</div></div></div>
    <div class="token-card"><div class="token-swatch" style="background:#232c3a"></div><div class="token-info"><div class="token-name">--slateLight</div><div class="token-val">#232c3a</div></div></div>
  </div>

  <div class="h3">Module border colors — semantic rule</div>
  <table class="states-table">
    <tr><th>Color</th><th>Hex</th><th>Applies to</th></tr>
    <tr><td><span class="state-badge" style="background:rgba(14,178,175,0.15);color:#0eb2af">TEAL</span></td><td><code>#0eb2af</code></td><td>System doing something certain: Trigger, Actions, Communications, Metrics, Strategy</td></tr>
    <tr><td><span class="state-badge" style="background:rgba(251,191,36,0.12);color:#d09a2e">GOLD</span></td><td><code>#fbbf24</code></td><td>System making a judgment: Rules, AI modules</td></tr>
  </table>
</section>

<!-- ══ TYPOGRAPHY ══ -->
<section class="section" id="tokens-type">
  <div class="section-header">
    <span class="section-num">§5.2</span>
    <span class="section-title">Design token system — typography</span>
    <span class="section-tag tag-token">TOKENS</span>
  </div>

  <table class="states-table" style="margin-bottom:20px;">
    <tr><th>Role</th><th>Family</th><th>Weights used</th><th>Variable</th></tr>
    <tr><td>Display / headings</td><td>Space Grotesk</td><td>700, 800</td><td><code>--font-d</code></td></tr>
    <tr><td>UI / body</td><td>Inter</td><td>400, 500, 600</td><td><code>--font-body</code></td></tr>
    <tr><td>Mono / labels / code</td><td>JetBrains Mono</td><td>400, 500, 600, 700</td><td><code>--font-m</code></td></tr>
  </table>

  <div class="h3">Type scale — Focus view</div>
  <div class="type-row"><div class="type-spec">Space Grotesk 700 28px / -0.02em</div><div class="type-sample" style="font-size:24px;font-weight:700;letter-spacing:-0.02em;">Page title — fv-page-title</div></div>
  <div class="type-row"><div class="type-spec">Space Grotesk 700 22px / -0.015em</div><div class="type-sample" style="font-size:18px;font-weight:700;letter-spacing:-0.015em;">Hero card title — fv-hero-title</div></div>
  <div class="type-row"><div class="type-spec">Inter 13px / 1.65 / text-3</div><div class="type-sample" style="font-size:13px;color:var(--text2);">Body description — fv-hero-desc / fv-tn-consider</div></div>
  <div class="type-row"><div class="type-spec">JetBrains Mono 700 9px / 0.16em UC</div><div class="type-sample" style="font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text2);">PANEL TITLE — fv-panel-title</div></div>
  <div class="type-row"><div class="type-spec">Space Grotesk 700 24px / -0.02em</div><div class="type-sample" style="font-size:20px;font-weight:700;letter-spacing:-0.02em;">72%</div></div>
  <div class="type-row"><div class="type-spec">JetBrains Mono 600 9px / 0.08em UC</div><div class="type-sample" style="font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0eb2af;">NOTICED BADGE</div></div>
</section>

<!-- ══ COMPONENT SPECS ══ -->
<section class="section" id="tokens-component">
  <div class="section-header">
    <span class="section-num">§5.3</span>
    <span class="section-title">Component specifications</span>
    <span class="section-tag tag-token">TOKENS</span>
  </div>

  <div class="h3">Border radius scale</div>
  <div class="code-block">--r-sm:   4px    <span class="cm">// badge, code block</span>
--r-md:   8px    <span class="cm">// action item, metric bar</span>
--r-lg:   12px   <span class="cm">// panel card, focus panel</span>
--r-xl:   18px   <span class="cm">// hero card, modal</span>
--r-pill: 999px  <span class="cm">// button, badge, status chip, chip</span></div>

  <div class="h3">Shadow scale</div>
  <div class="code-block">--shadow:    0 1px 2px rgba(12,20,36,0.04), 0 4px 12px rgba(12,20,36,0.07)  <span class="cm">// panel card</span>
--shadow-lg: 0 8px 40px rgba(12,20,36,0.12)                               <span class="cm">// modal, drawer</span></div>

  <div class="h3">Status badge — component spec</div>
  <table class="states-table">
    <tr><th>Status</th><th>Background</th><th>Text color</th><th>Border</th><th>Class</th></tr>
    <tr><td><span class="state-badge state-ok">ON TRACK</span></td><td>rgba(44,138,94,0.1)</td><td>#2c8a5e</td><td>none</td><td><code>.badge-ok</code></td></tr>
    <tr><td><span class="state-badge state-warn">AT RISK</span></td><td>rgba(176,127,31,0.1)</td><td>#b07f1f</td><td>none</td><td><code>.badge-warn</code></td></tr>
    <tr><td><span class="state-badge state-danger">BLOCKED</span></td><td>rgba(181,58,58,0.1)</td><td>#b53a3a</td><td>none</td><td><code>.badge-danger</code></td></tr>
    <tr><td><span class="state-badge state-blue">AHEAD</span></td><td>rgba(44,138,94,0.1)</td><td>#2c8a5e</td><td>none</td><td><code>.badge-ahead</code></td></tr>
    <tr><td><span class="state-badge state-default">NOT STARTED</span></td><td>rgba(12,20,36,0.06)</td><td>#6e7681</td><td>none</td><td><code>.badge-default</code></td></tr>
  </table>

  <div class="h3">LCD gauge — segment states</div>
  <table class="states-table">
    <tr><th>Segment</th><th>Inactive style</th><th>Active — color</th><th>Active — bg</th><th>Active — glow</th></tr>
    <tr><td>AHEAD</td><td>rgba(180,195,220,0.25)</td><td>#3aa776</td><td>rgba(58,167,118,0.08)</td><td>0 0 8px rgba(58,167,118,0.2)</td></tr>
    <tr><td>ON TRACK</td><td>rgba(180,195,220,0.25)</td><td>#3aa776</td><td>rgba(58,167,118,0.08)</td><td>0 0 8px rgba(58,167,118,0.2)</td></tr>
    <tr><td>AT RISK</td><td>rgba(180,195,220,0.25)</td><td>#e0903a</td><td>rgba(224,144,58,0.08)</td><td>0 0 8px rgba(224,144,58,0.2)</td></tr>
    <tr><td>BEHIND</td><td>rgba(180,195,220,0.25)</td><td>#e0903a</td><td>rgba(224,144,58,0.08)</td><td>0 0 8px rgba(224,144,58,0.2)</td></tr>
    <tr><td>BLOCKED</td><td>rgba(180,195,220,0.25)</td><td>#d44a4a</td><td>rgba(212,74,74,0.08)</td><td>0 0 8px rgba(212,74,74,0.2)</td></tr>
  </table>

  <div class="h3">Progress bar — fill colors</div>
  <div class="code-block"><span class="cm">// progressColor field on FOCUS_DATA drives gradient</span>
<span class="st">'ok'</span>:   <span class="fn">linear-gradient</span>(90deg, #0d8b82, #3ec5bb)  <span class="cm">// on-track or ahead</span>
<span class="st">'warn'</span>: <span class="fn">linear-gradient</span>(90deg, #b07f1f, #e0903a)  <span class="cm">// at-risk or behind</span>
<span class="st">'risk'</span>: <span class="fn">linear-gradient</span>(90deg, #b53a3a, #d44a4a)  <span class="cm">// blocked</span></div>
</section>

<hr class="thin"/>

<!-- ══ ROLES ══ -->
<section class="section" id="roles">
  <div class="section-header">
    <span class="section-num">§6.1</span>
    <span class="section-title">Role definitions</span>
    <span class="section-tag tag-system">PERMISSIONS</span>
  </div>

  <table class="states-table">
    <tr><th>Index</th><th>Name</th><th>Title</th><th>Primary goal</th><th>Default KPI 1</th></tr>
    <tr><td><code>0</code></td><td>Joe Thompson</td><td>CEO</td><td>board-obj (full portfolio)</td><td>July Readiness</td></tr>
    <tr><td><code>1</code></td><td>Linda Adams</td><td>CFO</td><td>goal-runway</td><td>Cash Runway</td></tr>
    <tr><td><code>2</code></td><td>Mark Sternberger</td><td>CTO</td><td>goal-platform</td><td>July Readiness</td></tr>
    <tr><td><code>3</code></td><td>Kyle Moyer</td><td>CMO</td><td>goal-pipeline</td><td>Demo Pipeline</td></tr>
    <tr><td><code>4</code></td><td>Dana Park</td><td>VP Sales</td><td>goal-pilots</td><td>Pilots Closed</td></tr>
  </table>
</section>

<!-- ══ PERMISSION MATRIX ══ -->
<section class="section" id="perm-matrix">
  <div class="section-header">
    <span class="section-num">§6.2</span>
    <span class="section-title">Permission matrix — edit rights per item</span>
    <span class="section-tag tag-system">PERMISSIONS</span>
  </div>
  <p class="desc">Each item field has a <code style="font-family:var(--mono);color:var(--teal)">locked*</code> value indicating which role index can edit. All other roles get read-only + "Request change" affordance. Weights are CEO-controlled by default (strategic importance must be set from the top). <strong>Representative sample only</strong> — full matrix covers all 24 items. Expand from the pattern shown below: item owner role gets edit rights on status and pace; weight is CEO (role 0) unless explicitly delegated.</p>

  <table class="perm-table">
    <tr><th style="width:200px">Item / field</th><th>Status</th><th>Weight</th><th>Pacing</th></tr>
    <tr><td><code>ms-arch</code></td><td><span class="perm-y">✓ CTO (2)</span></td><td><span class="perm-req">REQ → CEO</span></td><td><span class="perm-y">✓ CTO (2)</span></td></tr>
    <tr><td><code>ms-design</code></td><td><span class="perm-y">✓ CMO (3)</span></td><td><span class="perm-req">REQ → CEO</span></td><td><span class="perm-y">✓ CMO (3)</span></td></tr>
    <tr><td><code>ms-build</code></td><td><span class="perm-y">✓ CTO (2)</span></td><td><span class="perm-req">REQ → CEO</span></td><td><span class="perm-y">✓ CTO (2)</span></td></tr>
    <tr><td><code>ms-linkedin</code></td><td><span class="perm-y">✓ CMO (3)</span></td><td><span class="perm-y">✓ CMO (3)</span></td><td><span class="perm-y">✓ CMO (3)</span></td></tr>
    <tr><td><code>ms-burn</code></td><td><span class="perm-y">✓ CFO (1)</span></td><td><span class="perm-y">✓ CFO (1)</span></td><td><span class="perm-y">✓ CFO (1)</span></td></tr>
    <tr><td><code>ms-apex</code></td><td><span class="perm-y">✓ VP Sales (4)</span></td><td><span class="perm-req">REQ → CEO</span></td><td><span class="perm-y">✓ VP Sales (4)</span></td></tr>
    <tr><td><code>goal-runway</code></td><td><span class="perm-y">✓ CFO (1)</span></td><td><span class="perm-y">✓ CFO (1)</span></td><td><span class="perm-y">✓ CFO (1)</span></td></tr>
  </table>

  <div class="callout note">
    <span class="callout-icon">ℹ</span>
    <span>In the demo, <code style="font-family:var(--mono);color:var(--teal)">canEdit(item, field)</code> returns <code style="font-family:var(--mono);color:var(--teal)">item[lockField] === currentRole</code>. Attempting to edit a locked field shows a toast: "This field is locked to [role name]". The weight slider is disabled via HTML <code>disabled</code> attribute.</span>
  </div>
</section>

<hr class="thin"/>

<!-- ══ DEMO DATASET ══ -->
<section class="section" id="proto">
  <div class="section-header">
    <span class="section-num">§7.1</span>
    <span class="section-title">Interactive prototype — demo dataset</span>
    <span class="section-tag tag-proto">PROTOTYPE</span>
  </div>
  <p class="desc">The prototype runs on a validated in-memory dataset. All health scores, trajectories, and cascade values are computed live from TARGA_STATE at render time. See §8.2 for the complete live-vs-scripted breakdown.</p>

  <div class="h3">Key narrative moments in the dataset</div>
  <table class="states-table">
    <tr><th>Story</th><th>Items</th><th>What it demonstrates</th></tr>
    <tr><td>The CR crisis</td><td>ms-arch, goal-platform</td><td>0% health leaf item dragging a goal from 100% to 72% — cascade impact, role-locked status, escalation timer</td></tr>
    <tr><td>Velocity recovery</td><td>ms-build</td><td>actual_30d:12 → actual:34 — 30-day trajectory IMPROVING, pacing model context</td></tr>
    <tr><td>HBC complete</td><td>ms-design</td><td>100% leaf with back-dated delivery — closes the HBC dependency loop</td></tr>
    <tr><td>Back-loaded pilot</td><td>ms-apex, ms-meridian, goal-pilots</td><td>5% actual showing 97% health — back-loaded pacing model validation</td></tr>
    <tr><td>Demand gen healthy</td><td>ms-linkedin, goal-pipeline</td><td>funnel breaks at demo scheduling, not at top of funnel — leading vs lagging distinction</td></tr>
    <tr><td>Runway ahead</td><td>goal-runway, ms-burn</td><td>$142K actual vs $160K budget — CFO-locked, Quickbooks source, 100% health</td></tr>
  </table>
</section>

<!-- ══ NAVIGATION MAP ══ -->
<section class="section" id="proto-nav">
  <div class="section-header">
    <span class="section-num">§7.2</span>
    <span class="section-title">Navigation map — all routes</span>
    <span class="section-tag tag-proto">PROTOTYPE</span>
  </div>

  <div class="code-block"><span class="cm">// Entry points → screens</span>
<span class="fn">enterAs</span>(n)                <span class="op">→</span> switchRole(n) <span class="op">→</span> rv0–rv4 (role views)
Persona chip click        <span class="op">→</span> switchRole(n)
Goal row click (rv0)      <span class="op">→</span> openFocus('goal-*')  <span class="op">→</span> rv6
Ribbon node click         <span class="op">→</span> openFocus(targetId) or closeFocus()
← Back to portfolio       <span class="op">→</span> closeFocus() <span class="op">→</span> up one level or switchRole(0)
Plan row click (rv0)      <span class="op">→</span> openPlanPage(name) <span class="op">→</span> rv5
TARGA NOTICED btn         <span class="op">→</span> openIM(itemId)       <span class="cm">// _justOpened guard</span>
Metric card click         <span class="op">→</span> openIM(itemId)
KPI card click            <span class="op">→</span> kpi.classList.toggle('flipped')
+ Quick Add               <span class="op">→</span> openDesktopQA()    <span class="op">→</span> dqaOverlay
+ New Plan                <span class="op">→</span> openNewPlan()      <span class="op">→</span> npOverlay
Ask TARGA send            <span class="op">→</span> sendAsk(role)      <span class="op">→</span> Anthropic API

<span class="cm">// Role views with custom Ask TARGA</span>
rv0 (CEO)   <span class="op">→</span> #askCEO
rv3 (CMO)   <span class="op">→</span> Ask TARGA on metric cards
rv4 (Sales) <span class="op">→</span> Ask TARGA on prospect cards

<span class="cm">// Milestone Focus entries (from Platform Delivery ribbon)</span>
openFocus('ms-arch')   <span class="op">→</span> Item Architecture CR · full Focus data
openFocus('ms-build')  <span class="op">→</span> Sigma Solve Build · full Focus data
openFocus('ms-design') <span class="op">→</span> UX Design System · full Focus data</div>

  <div class="callout info">
    <span class="callout-icon">→</span>
    <span>All <code style="font-family:var(--mono);color:var(--text)">openFocus(id)</code> calls work for any item in TARGA_STATE. Items without explicit FOCUS_DATA entries use <code style="font-family:var(--mono);color:var(--text)">getFocusData()</code> which derives content from the item's TARGA_STATE data and computed metrics. Rich authored content exists for: goal-platform, goal-pipeline, goal-pilots, ms-arch, ms-build, ms-design.</span>
  </div>
</section>

<hr class="thin"/>

<!-- ══ §8.1 PRODUCTION SCOPE DELTA ══ -->
<section class="section" id="prod-delta">
  <div class="section-header">
    <span class="section-num">§8.1</span>
    <span class="section-title">Production scope delta</span>
    <span class="section-tag tag-system">PRODUCTION</span>
  </div>
  <p class="desc">What the prototype does today vs what production requires. This table is the primary handoff guide for Sigma Solve. Items marked <span class="state-badge state-danger">BUILD</span> are not in the prototype and must be implemented. Items marked <span class="state-badge state-warn">EXTEND</span> exist in prototype but require production hardening. Items marked <span class="state-badge state-ok">DONE</span> are validated in the prototype and can be implemented as-is.</p>

  <table class="states-table">
    <tr><th>Feature</th><th>Prototype today</th><th>Production requirement</th><th>Status</th></tr>
    <tr>
      <td>Data layer</td>
      <td>In-memory <code>TARGA_STATE</code> JS object, hardcoded</td>
      <td>Backend API, persistent DB, real-time sync</td>
      <td><span class="state-badge state-danger">BUILD</span></td>
    </tr>
    <tr>
      <td>Ask TARGA</td>
      <td>Direct Anthropic API call from browser (key in env)</td>
      <td>Backend proxy endpoint <code>/api/ask</code> — Targatek/Sigma Solve to implement. Key must never be in client JS.</td>
      <td><span class="state-badge state-danger">BUILD</span></td>
    </tr>
    <tr>
      <td>Authentication / roles</td>
      <td>Persona chip switcher — no auth, no session</td>
      <td>Auth (SSO or email), role assignment per user, session management</td>
      <td><span class="state-badge state-danger">BUILD</span></td>
    </tr>
    <tr>
      <td>Data source integrations</td>
      <td>Hardcoded <code>dataSource</code> string label only</td>
      <td>Live connectors: Quickbooks, Salesforce, LinkedIn Analytics, HubSpot, Calendly, Google Sheets</td>
      <td><span class="state-badge state-danger">BUILD</span></td>
    </tr>
    <tr>
      <td>Mobile — state sync</td>
      <td>Standalone HTML file, duplicate hardcoded state</td>
      <td>Shared backend state with desktop, real-time sync, native app or PWA</td>
      <td><span class="state-badge state-danger">BUILD</span></td>
    </tr>
    <tr>
      <td>FOCUS_DATA authoring</td>
      <td>Hardcoded per-item authored content (tnText, intel[], history[], askChips[])</td>
      <td>TARGA agent generates this content dynamically from live item data. No manual authoring in production.</td>
      <td><span class="state-badge state-danger">BUILD</span></td>
    </tr>
    <tr>
      <td>New Plan — parse stream</td>
      <td>Steps 2–4 simulated (scripted animation, no AI call)</td>
      <td>Live TARGA parse via Anthropic API with structured output → real item creation</td>
      <td><span class="state-badge state-warn">EXTEND</span></td>
    </tr>
    <tr>
      <td>Cascade algorithm</td>
      <td>Fully implemented in JS, validated against dataset</td>
      <td>Mirror in backend. Client-side version is reference implementation.</td>
      <td><span class="state-badge state-warn">EXTEND</span></td>
    </tr>
    <tr>
      <td>Permission system</td>
      <td><code>canEdit(item, field)</code> — role-lock enforced in prototype</td>
      <td>Backend enforcement required. Frontend enforcement is UX only — cannot be trusted for security.</td>
      <td><span class="state-badge state-warn">EXTEND</span></td>
    </tr>
    <tr>
      <td>Focus view layout</td>
      <td>Three-column grid, hierarchy ribbon, LCD gauge, TARGA NOTICED, What Changed, Ask TARGA, children, history</td>
      <td>Implement per spec. Token system covers all values. No additional design work required.</td>
      <td><span class="state-badge state-ok">DONE</span></td>
    </tr>
    <tr>
      <td>CEO portfolio layout</td>
      <td>KPI strip, goal list, intel feed, persona switcher, Ask TARGA</td>
      <td>Implement per spec. Role views for CFO, CTO, CMO, VP Sales follow same pattern.</td>
      <td><span class="state-badge state-ok">DONE</span></td>
    </tr>
    <tr>
      <td>Design token system</td>
      <td>Validated in prototype — all colors, type, radii, shadows</td>
      <td>Export from Tokens Studio (Figma). JSON token file provided by HBC.</td>
      <td><span class="state-badge state-ok">DONE</span></td>
    </tr>
    <tr>
      <td>Accessibility</td>
      <td>Not implemented — no ARIA, no focus traps, no keyboard nav</td>
      <td>Focus trap required on IM drawer (position:fixed modal). ARIA roles on LCD gauge, D-pad, persona chips. Keyboard nav for all interactive elements. Contrast audit required on dark theme. Full a11y pass TBD.</td>
      <td><span class="state-badge state-danger">BUILD</span></td>
    </tr>
  </table>
</section>

<!-- ══ §8.2 LIVE VS SCRIPTED ══ -->
<section class="section" id="live-vs-scripted">
  <div class="section-header">
    <span class="section-num">§8.2</span>
    <span class="section-title">Live vs scripted — prototype behavior reference</span>
    <span class="section-tag tag-system">PRODUCTION</span>
  </div>
  <p class="desc">Single source of truth for what is live in the prototype vs what is authored/scripted. <span class="state-badge state-ok">LIVE</span> = computed or API-driven at runtime. <span class="state-badge state-warn">AUTHORED</span> = hardcoded content in JS. <span class="state-badge state-default">SCRIPTED</span> = simulated behavior (no real computation or API).</p>

  <table class="states-table">
    <tr><th>Feature</th><th>Status</th><th>Implementation detail</th></tr>
    <tr>
      <td>Health scores (all items)</td>
      <td><span class="state-badge state-ok">LIVE</span></td>
      <td><code>calcWeightedHealth(id)</code> — recursive, runs at render time from TARGA_STATE actuals</td>
    </tr>
    <tr>
      <td>Pacing / expected %</td>
      <td><span class="state-badge state-ok">LIVE</span></td>
      <td><code>calcExpected(item)</code> — f(t) per pace model, uses real Date.now()</td>
    </tr>
    <tr>
      <td>30-day trajectory</td>
      <td><span class="state-badge state-ok">LIVE</span></td>
      <td><code>calcTrajectory(item)</code> — compares actual vs actual_30d, both in TARGA_STATE</td>
    </tr>
    <tr>
      <td>Cascade on save (IM drawer)</td>
      <td><span class="state-badge state-ok">LIVE</span></td>
      <td><code>cascadeUpdate(itemId)</code> — walks tree upward, recomputes parent actuals and health in DOM</td>
    </tr>
    <tr>
      <td>Equation view (KPI flip cards)</td>
      <td><span class="state-badge state-ok">LIVE</span></td>
      <td><code>FLIP_DATA[key].calc()</code> — reads TARGA_STATE at flip time, contributors and weights are live</td>
    </tr>
    <tr>
      <td>Ask TARGA (chat)</td>
      <td><span class="state-badge state-ok">LIVE</span></td>
      <td>Direct <code>POST /v1/messages</code> to Anthropic API. Falls back to hardcoded response on error.</td>
    </tr>
    <tr>
      <td>TARGA NOTICED text</td>
      <td><span class="state-badge state-warn">AUTHORED</span></td>
      <td>Hardcoded in <code>FOCUS_DATA[itemId].tnText</code>. In production: generated by TARGA agent from live item state.</td>
    </tr>
    <tr>
      <td>Intelligence feed (CEO right rail)</td>
      <td><span class="state-badge state-warn">AUTHORED</span></td>
      <td>Hardcoded HTML in rv0. In production: agent-generated from pattern detection across TARGA_STATE.</td>
    </tr>
    <tr>
      <td>What Changed feed</td>
      <td><span class="state-badge state-warn">AUTHORED</span></td>
      <td>Populated from <code>FOCUS_DATA[itemId].history[]</code>. In production: event log from backend.</td>
    </tr>
    <tr>
      <td>Metric suggestions (IM drawer)</td>
      <td><span class="state-badge state-warn">AUTHORED</span></td>
      <td><code>getMetricSuggestions(item)</code> — authored JS lookup by item id. Not an AI call.</td>
    </tr>
    <tr>
      <td>Ask chips (seeded questions)</td>
      <td><span class="state-badge state-warn">AUTHORED</span></td>
      <td>Hardcoded in <code>FOCUS_DATA[itemId].askChips[]</code>. Chips send real API calls when clicked.</td>
    </tr>
    <tr>
      <td>New Plan — parse stream (steps 2–4)</td>
      <td><span class="state-badge state-default">SCRIPTED</span></td>
      <td>Five lines appear with 600ms delays. No AI call. Clarification question is hardcoded. Only step 5 (confirm) triggers a real intel feed update.</td>
    </tr>
    <tr>
      <td>New Plan — thesis suggestions</td>
      <td><span class="state-badge state-default">SCRIPTED</span></td>
      <td>Three hardcoded suggestion chips. No AI generation.</td>
    </tr>
    <tr>
      <td>Activity signals on child cards</td>
      <td><span class="state-badge state-default">SCRIPTED</span></td>
      <td>Hardcoded JS lookup by label substring match. Not computed from item history.</td>
    </tr>
  </table>
</section>

<!-- ══ §9 GLOSSARY ══ -->
<section class="section" id="glossary">
  <div class="section-header">
    <span class="section-num">§9</span>
    <span class="section-title">Glossary</span>
    <span class="section-tag tag-system">REFERENCE</span>
  </div>
  <p class="desc">Project-internal terms used throughout this document and the prototype codebase.</p>

  <table class="states-table">
    <tr><th style="width:200px">Term</th><th>Definition</th></tr>
    <tr><td><strong>Altitude</strong></td><td>The depth level in the item hierarchy at which a user is currently working. "High altitude" = board/objective level. "Low altitude" = milestone/action level. Renamed "Your View" in the current UI per CEO direction.</td></tr>
    <tr><td><strong>Ask TARGA</strong></td><td>Conversational AI interface grounded to a specific screen or item. Powered by Anthropic API. Responds in under 3 sentences in an authoritative peer tone.</td></tr>
    <tr><td><strong>Back-loaded</strong></td><td>A pacing model where expected progress follows f(t)=t². Progress is expected to be low early and accelerate near the deadline. Used for enterprise sales cycles, QA sprints, contract closings.</td></tr>
    <tr><td><strong>Cascade</strong></td><td>The automatic propagation of a child item's progress change upward through the hierarchy. When a milestone's actual changes, its parent goal's actual and health recalculate, and the board objective recalculates in turn.</td></tr>
    <tr><td><strong>CONSIDER</strong></td><td>An intelligence card type (teal border). A recommendation or observation that does not require immediate action. Contrast: NOTICED.</td></tr>
    <tr><td><strong>D-pad</strong></td><td>The directional pad UI element on the mobile right rail. Four directional buttons + center home button. Used to navigate between the five torus panels.</td></tr>
    <tr><td><strong>FOCUS_DATA</strong></td><td>A parallel authored-content layer in the prototype (JS object), keyed by item id. Contains rich per-item content: tnText, tnConsider, intel[], history[], askChips[], metrics[], children[], actions[]. In production this will be generated by the TARGA agent, not authored manually.</td></tr>
    <tr><td><strong>Focus view</strong></td><td>The single-item command center screen (rv6). Shows everything about one item: metrics, hero card, TARGA NOTICED, What Changed, Ask TARGA, child items, history. Joe Thompson's term: "base camp."</td></tr>
    <tr><td><strong>Front-loaded</strong></td><td>A pacing model where expected progress follows f(t)=√t. Progress is expected to be high early and flatten as the item matures. Used for discovery, design, and outbound sequence work.</td></tr>
    <tr><td><strong>Hierarchy ribbon</strong></td><td>The dark LCD-style navigation bar at the top of the Focus view. Shows the item's position in the tree (parent → current → children). Each node is clickable — navigates to that item's Focus view.</td></tr>
    <tr><td><strong>IM drawer</strong></td><td>Intelligence Metric drawer. A <code>position:fixed</code> overlay that shows all computed intelligence for a single item: actual, expected, health, trajectory, status/weight/pacing controls, cascade impact, 30-day delta, data source, metric suggestions.</td></tr>
    <tr><td><strong>LCD gauge</strong></td><td>The five-segment status indicator at the top of the Focus view hero card (AHEAD / ON TRACK / AT RISK / BEHIND / BLOCKED). One segment is illuminated per item state. Visual reference: LCD alarm clock display.</td></tr>
    <tr><td><strong>Linear</strong></td><td>A pacing model where expected progress follows f(t)=t. 50% of time elapsed = 50% expected progress. Default for most build and operational metrics.</td></tr>
    <tr><td><strong>NOTICED</strong></td><td>An intelligence card type (gold border). Requires attention or action. Surfaced in the TARGA NOTICED card in the Focus view and in the CEO intel feed. Contrast: CONSIDER.</td></tr>
    <tr><td><strong>Pacing model</strong></td><td>The mathematical shape of expected progress accumulation over time. Three options: linear, front-loaded, back-loaded. Set per item, role-locked, determines whether a given actual% is healthy or behind.</td></tr>
    <tr><td><strong>Persona chip</strong></td><td>The role-switcher UI element in the top navigation bar. Each chip represents one executive. Clicking switches the entire platform to that role's view. Stays active (highlighted) in the Focus view to maintain navigation context.</td></tr>
    <tr><td><strong>TARGA_STATE</strong></td><td>The single JS object containing all 24 items in the prototype demo dataset. All health scores, cascade values, and trajectories are computed from this object at render time. No values are stored separately.</td></tr>
    <tr><td><strong>Torus navigation</strong></td><td>The mobile navigation model. Five panels arranged around a center home panel. Navigation in any direction returns to home from that direction. Named for the mathematical torus topology — no dead ends.</td></tr>
    <tr><td><strong>Weighted health</strong></td><td>The recursive computed health score for any item. For leaf items: min(actual/expected×100, 100). For container items: weighted average of child health scores, using each child's weight field. Distinct from <code>item.actual</code>.</td></tr>
  </table>
</section>

<!-- ══ §10 CHANGELOG ══ -->
<section class="section" id="changelog">
  <div class="section-header">
    <span class="section-num">§10</span>
    <span class="section-title">Changelog</span>
    <span class="section-tag tag-system">REFERENCE</span>
  </div>

  <table class="states-table">
    <tr><th style="width:120px">Date</th><th style="width:100px">Rev</th><th>Changes</th></tr>
    <tr>
      <td>May 11, 2026</td>
      <td>Rev 1.0 — Initial release</td>
      <td>System diagram, data model (Item type + FOCUS_DATA schema + subtype definitions), all 5 screens (§2.1–2.5), §2.6 error/empty/loading states, §2.7 event model, 3 overlays (§3.1–3.2), intelligence layer (§4.1–4.2) with calcExpected30d() defined, design token system including spacing and animation (§5.1–5.3), permission matrix (§6.1–6.2, representative sample), demo dataset with milestone/metric annotations, narrative moments table, navigation map (§7.1–7.2), production scope delta BUILD/EXTEND/DONE (§8.1), live-vs-scripted matrix (§8.2), glossary (§9), changelog (§10). Section numbering §1–§10. Item count 24. API proxy production requirement documented. FOCUS_DATA as authored demo layer clarified. Mobile state sync gap documented. actual field documented as not user-editable in prototype.</td>
    </tr>
  </table>
</section>


</div><!-- /main-inner -->
</main><!-- /main -->
</div><!-- /layout -->

<script>
/* Active nav on scroll */
var allSections = document.querySelectorAll('.section[id]');
var allNavItems = document.querySelectorAll('.nav-item');
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      allNavItems.forEach(function(n) {
        n.classList.toggle('active', n.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { rootMargin:'-10% 0px -80% 0px' });
allSections.forEach(function(s) { obs.observe(s); });
</script>
      ` }} />
    </>
  );
}
