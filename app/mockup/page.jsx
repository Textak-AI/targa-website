"use client";
import { useState } from "react";

const C = { navy: "#1f476a", teal: "#0eb2af", gold: "#fbbf24", gray: "#6b7a8a", light: "#f4f7fa", white: "#fff", border: "#d6dee6", subtle: "#e6ecf2", bg2: "#f4f6f8", tealBg: "#e6f7f7", tealBd: "#b8e8e7", tealDk: "#076c69", green: "#059669", greenBg: "#ecfdf5", amber: "#d97706", amberBg: "#fef3c7", red: "#dc2626", redBg: "#fef2f2", navyLt: "#dde6ef", pinkDk: "#8a3560" };
const TML = ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill={C.teal}/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill="#fff"/></svg>;
const TM = ({ v = "i", s = 16 }) => <svg width={s} height={s} viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill={v === "a" ? C.gold : C.teal}/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill={C.navy}/></svg>;
const SI = ({ s = 11 }) => <svg width={s} height={s} viewBox="0 0 24 24"><path d="M12 2 L22 20 L2 20 Z" fill={C.teal}/><path d="M12 9 L18 18 L6 18 Z" fill="#054846"/></svg>;
const PI = () => <svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 2 L22 10 L2 10 Z" fill="#db2777"/><path d="M3 11 L21 11 L18 17 L6 17 Z" fill={C.pinkDk}/></svg>;
const Av = ({ i, bg = C.gold, fg = C.navy, s = 22 }) => <div style={{ width: s, height: s, borderRadius: "50%", background: bg, fontSize: s * 0.43, color: fg, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, flexShrink: 0 }}>{i}</div>;
const Pl = ({ children, c = "green" }) => <span style={{ fontSize: 10, fontWeight: 500, padding: "3px 8px", borderRadius: 4, letterSpacing: 0.3, whiteSpace: "nowrap", ...{ green: { color: C.green, background: C.greenBg }, amber: { color: C.amber, background: C.amberBg }, red: { color: C.red, background: C.redBg }, navy: { color: C.navy, background: C.navyLt }, teal: { color: C.tealDk, background: C.tealBg } }[c] }}>{children}</span>;
const Eye = ({ children }) => <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: 1.2, color: C.tealDk, textTransform: "uppercase", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>{children}</div>;
const NavIcon = ({ d, active }) => <div style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: active ? C.tealBg : "transparent", cursor: "pointer" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={d} stroke={active ? C.teal : C.gray} strokeWidth="1.8" strokeLinecap="square"/></svg></div>;

const bottomTabs = ["Comments", "Attachments", "History", "Hierarchy", "Relationships"];

export default function ReconciledLayout() {
  const [bTab, setBTab] = useState("History");

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: C.navy, padding: "16px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: 1.5, color: C.teal, textTransform: "uppercase", marginBottom: 4 }}>Reconciled layout — Joe's wireframe + our UX</div>
        <div style={{ fontSize: 12, color: C.gray }}>Every component Joe requested, plus TARGA Intelligence, sparklines, and cascade effects</div>
      </div>

      <div style={{ display: "flex", maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ width: 48, flexShrink: 0, background: C.white, borderRight: `1px solid ${C.border}`, padding: "16px 6px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, borderRadius: "12px 0 0 12px" }}>
          <div style={{ marginBottom: 12 }}><svg width="22" height="22" viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill={C.teal}/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill={C.navy}/></svg></div>
          <NavIcon d="M3 9 L12 3 L21 9 L21 21 L3 21 Z" />
          <NavIcon d="M4 5 L20 5 M4 12 L20 12 M4 19 L16 19" active />
          <NavIcon d="M4 5 L4 19 L12 19 L20 5 Z" />
          <NavIcon d="M12 3 L12 21 M3 12 L21 12" />
          <div style={{ flex: 1 }} />
          <NavIcon d="M12 12 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M19 19 A7 7 0 0 0 5 19" />
        </div>

        <div style={{ flex: 1, background: C.light, borderRadius: "0 12px 12px 0", padding: 20, minWidth: 0 }}>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, borderBottom: `1px solid ${C.border}`, marginBottom: 14, gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: C.gray }}><span>Business Plan</span><span style={{ color: "#b0bcc9" }}>/</span><span>Enterprise Value</span><span style={{ color: "#b0bcc9" }}>/</span><span style={{ color: C.navy, fontWeight: 500 }}>Expand gross margin by 300bps</span></div>
            <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>{["360 Cascade", "Kanban", "Timeline"].map((v, i) => <div key={v} style={{ padding: "4px 8px", background: i === 0 ? "#fff" : "transparent", border: i === 0 ? `1px solid ${C.border}` : "none", borderRadius: 6, fontSize: 11, color: i === 0 ? C.navy : C.gray, fontWeight: i === 0 ? 500 : 400 }}>{v}</div>)}</div>
          </div>

          <div style={{ background: C.tealBg, border: `1px solid ${C.tealBd}`, borderLeft: `3px solid ${C.teal}`, borderRadius: 8, padding: "8px 12px", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
            <SI s={12} />
            <span style={{ fontSize: 11, fontWeight: 500, color: C.tealDk }}>PARENT</span>
            <span style={{ fontSize: 12, fontWeight: 500, color: C.navy }}>Drive enterprise value creation — FY26</span>
            <Pl c="green">{"\u2197"} ON TRACK</Pl>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4 }}><Av i="JT" s={18} /><span style={{ fontSize: 10, color: C.gray }}>Joe Thompson</span></div>
          </div>

          <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>

            <div style={{ width: 200, flexShrink: 0 }}>
              <Eye><svg width="12" height="12" viewBox="0 0 24 24"><path d="M2 22 L2 16 L7 16 L7 22 Z" fill={C.navy}/><path d="M9 22 L9 10 L14 10 L14 22 Z" fill={C.navy}/><path d="M16 22 L16 4 L21 4 L21 22 Z" fill="#0a1929"/></svg> Metrics <span style={{ color: C.gray, fontWeight: 400 }}>· 3</span></Eye>

              {[{ l: "Gross margin %", v: "39.8%", tg: "42.3%", p: 62, tr: "\u2197 +80bps", tc: C.teal, src: "NetSuite", type: "External" },
                { l: "COGS reduction", v: "-$3.2M", tg: "-$8M", p: 40, tr: "\u2198 Behind", tc: C.amber, src: "SAP", type: "External" },
                { l: "Price realization", v: "+1.4%", tg: "+2.1%", p: 66, tr: "\u2197 On track", tc: C.teal, src: "Salesforce", type: "External" }
              ].map(m => (
                <div key={m.l} style={{ background: "#fff", border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.navy}`, borderRadius: 8, padding: 9, marginBottom: 5 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                    <span style={{ fontSize: 10, color: C.gray }}>{m.l}</span>
                    <span style={{ fontSize: 8, color: m.type === "Manual" ? C.amber : C.tealDk, background: m.type === "Manual" ? C.amberBg : C.tealBg, padding: "1px 5px", borderRadius: 3, fontWeight: 500, letterSpacing: 0.3 }}>{m.type}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}><span style={{ fontSize: 16, fontWeight: 500, color: C.navy }}>{m.v}</span><span style={{ fontSize: 9, color: C.gray }}>{"\u2192"} {m.tg}</span></div>
                  <div style={{ height: 3, background: "#e6ecf2", borderRadius: 2, overflow: "hidden", marginBottom: 4 }}><div style={{ width: `${m.p}%`, height: "100%", background: m.tc }} /></div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9 }}><span style={{ color: m.tc === C.amber ? C.amber : C.green, fontWeight: 500 }}>{m.tr}</span><span style={{ color: C.gray }}>{m.src}</span></div>
                </div>
              ))}

              <div style={{ marginTop: 10 }}>
                <Eye><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M10 2 L14 2 L14 6 L18 6 L18 10 L22 10 L22 14 L18 14 L18 18 L14 18 L14 22 L10 22 L10 18 L6 18 L6 14 L2 14 L2 10 L6 10 L6 6 L10 6 Z" stroke="currentColor" strokeWidth="1.5"/></svg> External links</Eye>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 8, padding: 9, marginBottom: 4 }}>
                  <div style={{ fontSize: 11, color: C.navy, fontWeight: 500 }}>Q1 Margin Analysis</div>
                  <div style={{ fontSize: 9, color: C.gray }}>Google Sheets · Updated 2d ago</div>
                </div>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 8, padding: 9 }}>
                  <div style={{ fontSize: 11, color: C.navy, fontWeight: 500 }}>Pricing Model v3</div>
                  <div style={{ fontSize: 9, color: C.gray }}>Confluence · Updated 5d ago</div>
                </div>
              </div>
            </div>

            <div style={{ flex: "1 1 0", minWidth: 0 }}>
              <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden", boxShadow: "0 2px 6px rgba(31,71,106,0.08)" }}>
                <div style={{ background: C.navy, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                  <TML s={16} /><span style={{ fontSize: 11, fontWeight: 500, letterSpacing: 1, color: "#fff", textTransform: "uppercase" }}>Strategic Plan</span><span style={{ marginLeft: "auto", fontSize: 10, color: "#8ad8d7" }}>TGT-SP-0142</span>
                </div>
                <div style={{ padding: 16 }}>
                  <div style={{ display: "flex", gap: 5, marginBottom: 10, flexWrap: "wrap" }}>
                    <Pl c="navy">OPERATIONAL</Pl><Pl c="teal">Q1 2026</Pl><Pl c="amber">{"\u25B3"} RISK</Pl><Pl c="green">{"\u2197"} ON TRACK</Pl>
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 500, color: C.navy, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 10 }}>Expand gross margin by 300bps</div>
                  <div style={{ fontSize: 13, color: "#4a5868", lineHeight: 1.6, marginBottom: 12 }}>Drive 300 basis points of gross margin expansion across tier-1 product lines through COGS reduction, price realization, and channel mix optimization.</div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                    <div style={{ background: C.bg2, borderRadius: 6, padding: "8px 10px", display: "flex", alignItems: "center", gap: 8 }}>
                      <Av i="JT" s={28} />
                      <div><div style={{ fontSize: 9, color: C.gray }}>Owner</div><div style={{ fontSize: 12, fontWeight: 500, color: C.navy }}>Joe Thompson</div></div>
                    </div>
                    <div style={{ background: C.bg2, borderRadius: 6, padding: "8px 10px" }}>
                      <div style={{ fontSize: 9, color: C.gray }}>Dates</div>
                      <div style={{ fontSize: 12, fontWeight: 500, color: C.navy }}>Jan 6 — Mar 31, 2026</div>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, padding: 10, background: C.bg2, borderRadius: 8, marginBottom: 12 }}>
                    {[["Impact", "$24M EBITDA", C.navy], ["Confidence", "72%", C.navy], ["Progress", "54%", C.navy], ["Review in", "11 days", C.amber]].map(([l, v, c]) => <div key={l}><div style={{ fontSize: 9, color: C.gray, marginBottom: 1 }}>{l}</div><div style={{ fontSize: 14, fontWeight: 500, color: c }}>{v}</div></div>)}
                  </div>

                  <div style={{ height: 6, background: "#e6ecf2", borderRadius: 3, overflow: "hidden" }}><div style={{ width: "54%", height: "100%", background: C.teal, borderRadius: 3 }} /></div>
                </div>
              </div>
            </div>

            <div style={{ width: 230, flexShrink: 0 }}>
              <Eye><svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 5 L12 5 L20 12 L12 19 L3 19 L11 12 Z" fill="#d49a0f"/><path d="M7 9 L12 9 L15 12 L12 15 L7 15 L10 12 Z" fill="#6c5006"/></svg> Actions <span style={{ color: C.gray, fontWeight: 400 }}>· 4</span></Eye>

              {[{ t: "Approve pricing model changes", i: "JT", bg: C.gold, fg: C.navy, d: "Apr 18 · overdue", s: "BLOCKER", sc: "red", bc: C.red },
                { t: "Review Q1 margin variance", i: "KM", bg: C.teal, fg: "#fff", d: "Apr 22", s: "ON TRACK", sc: "green", bc: "#d49a0f" },
                { t: "Interview 3 channel partners", i: "SD", bg: C.navy, fg: "#fff", d: "May 1", s: "ON TRACK", sc: "green", bc: "#d49a0f" },
                { t: "Validate supplier renegotiation", i: "MS", bg: C.navy, fg: "#fff", d: "May 8", s: "AT RISK", sc: "amber", bc: "#d49a0f" }
              ].map(a => (
                <div key={a.t} style={{ background: "#fff", border: `1px solid ${C.border}`, borderLeft: `3px solid ${a.bc}`, borderRadius: 8, padding: 9, marginBottom: 5 }}>
                  <div style={{ fontSize: 11, fontWeight: 500, color: C.navy, lineHeight: 1.3, marginBottom: 5 }}>{a.t}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <Av i={a.i} bg={a.bg} fg={a.fg} s={16} />
                    <span style={{ fontSize: 9, color: a.d.includes("overdue") ? C.red : C.gray, fontWeight: a.d.includes("overdue") ? 500 : 400 }}>{a.d}</span>
                    <span style={{ marginLeft: "auto" }}><Pl c={a.sc}>{a.s}</Pl></span>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 10 }}>
                <Eye><TM s={14} /> TARGA Intelligence</Eye>
                <div style={{ background: C.tealBg, border: `1px solid ${C.tealBd}`, borderRadius: 8, padding: 8 }}>
                  {[["COGS reduction is behind target", "Blocker on tier-1 lines."], ["EMEA pricing cross-dependency", "Review assumptions."], ["2 external signals", "Supply chain headwind Q2."]].map(([t, d]) => (
                    <div key={t} style={{ background: "#fff", border: `1px solid ${C.tealBd}`, borderRadius: 6, padding: 8, marginBottom: 4 }}>
                      <div style={{ fontSize: 10, fontWeight: 500, color: C.navy, lineHeight: 1.4, marginBottom: 2 }}>{t}</div>
                      <div style={{ fontSize: 9, color: C.gray, lineHeight: 1.4 }}>{d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div style={{ display: "flex", gap: 12, marginBottom: 14, marginTop: 14 }}>
            <div style={{ flex: 1 }}>
              <Eye><PI /> Child items <span style={{ color: C.gray, fontWeight: 400 }}>· 3</span></Eye>
              <div style={{ display: "flex", gap: 8 }}>
                {[["Reduce COGS tier-1 lines", "BLOCKER", "red", "KM"], ["Price realization program", "ON TRACK", "green", "SD"], ["Channel mix optimization", "BEHIND", "amber", "MS"]].map(([t, s, sc, av]) => (
                  <div key={t} style={{ flex: 1, background: "#fff", border: `1px solid ${C.border}`, borderLeft: `3px solid #db2777`, borderRadius: 8, padding: 9 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4 }}><PI /><span style={{ fontSize: 9, fontWeight: 500, color: C.pinkDk }}>PROJECT</span></div>
                    <div style={{ fontSize: 11, fontWeight: 500, color: C.navy, lineHeight: 1.3, marginBottom: 5 }}>{t}</div>
                    <div style={{ display: "flex", alignItems: "center" }}><Pl c={sc}>{s}</Pl><div style={{ marginLeft: "auto" }}><Av i={av} bg={C.navy} fg="#fff" s={16} /></div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", borderBottom: `1px solid ${C.border}` }}>
              {bottomTabs.map(t => (
                <div key={t} onClick={() => setBTab(t)} style={{ flex: 1, padding: "10px 0", textAlign: "center", fontSize: 11, fontWeight: bTab === t ? 500 : 400, color: bTab === t ? C.teal : C.gray, borderBottom: bTab === t ? `2px solid ${C.teal}` : "2px solid transparent", cursor: "pointer", transition: "all 0.2s" }}>{t}</div>
              ))}
            </div>

            <div style={{ padding: 16, minHeight: 180 }}>
              {bTab === "Comments" && (
                <div>
                  {[{ i: "JT", bg: C.gold, n: "Joe Thompson", t: "2d ago", m: "Let's make sure the pricing model is approved before the board review. This is the critical path item." },
                    { i: "KM", bg: C.teal, n: "Kyle Moyer", t: "2d ago", m: "Agreed. I've scheduled a sync with finance for Thursday." },
                    { i: "MS", bg: C.red, n: "Mark Sternberger", t: "5h ago", m: "Supplier contract negotiations are taking longer than expected. May need to escalate." }
                  ].map((c, idx) => (
                    <div key={idx} style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                      <Av i={c.i} bg={c.bg} fg={c.bg === C.gold ? C.navy : "#fff"} s={28} />
                      <div style={{ flex: 1 }}><div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 3 }}><span style={{ fontSize: 12, fontWeight: 500, color: C.navy }}>{c.n}</span><span style={{ fontSize: 10, color: "#8b99a8" }}>{c.t}</span></div><div style={{ fontSize: 13, color: "#4a5868", lineHeight: 1.6 }}>{c.m}</div></div>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: 8, marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.subtle}` }}>
                    <div style={{ flex: 1, background: C.bg2, borderRadius: 8, padding: "10px 12px", fontSize: 12, color: "#8b99a8" }}>Add a comment...</div>
                    <div style={{ padding: "10px 16px", background: C.teal, color: "#fff", borderRadius: 8, fontSize: 12, fontWeight: 500 }}>Send</div>
                  </div>
                </div>
              )}

              {bTab === "Attachments" && (
                <div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                    {[["Q1 Margin Analysis.xlsx", "12 KB · Kyle Moyer · Apr 10"], ["Pricing Model v3.pdf", "2.4 MB · Joe Thompson · Apr 5"], ["Supplier Terms Draft.docx", "340 KB · Mark Sternberger · Apr 2"]].map(([n, d]) => (
                      <div key={n} style={{ background: C.bg2, borderRadius: 8, padding: 12 }}>
                        <div style={{ width: 32, height: 32, background: C.navyLt, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 3 L14 3 L19 8 L19 21 L6 21 Z" stroke={C.navy} strokeWidth="1.5"/><path d="M14 3 L14 8 L19 8" stroke={C.navy} strokeWidth="1.5"/></svg>
                        </div>
                        <div style={{ fontSize: 12, fontWeight: 500, color: C.navy, marginBottom: 3 }}>{n}</div>
                        <div style={{ fontSize: 10, color: C.gray }}>{d}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 12, padding: "10px 0", border: `1px dashed ${C.border}`, borderRadius: 8, textAlign: "center", fontSize: 11, color: C.gray, cursor: "pointer" }}>+ Attach file</div>
                </div>
              )}

              {bTab === "History" && (
                <div>
                  {[{ i: "MS", bg: C.red, fg: "#fff", n: "Mark S.", a: "flagged blocker on COGS tier-1", t: "2h ago" },
                    { i: "JT", bg: C.gold, fg: C.navy, n: "Joe T.", a: "updated target to 300bps", t: "Yesterday" },
                    { i: "KM", bg: C.teal, fg: "#fff", n: "Kyle M.", a: 'added action "Review Q1 margin"', t: "2d ago" },
                    { i: "", bg: "#eaf0f6", fg: C.navy, n: "", a: "Gross margin synced from NetSuite", t: "Today" },
                    { i: "JT", bg: C.gold, fg: C.navy, n: "Joe T.", a: "changed status to At Risk", t: "Apr 10" },
                    { i: "MS", bg: C.red, fg: "#fff", n: "Mark S.", a: 'commented on "Price realization"', t: "Apr 8" },
                    { i: "KM", bg: C.teal, fg: "#fff", n: "Kyle M.", a: "created this strategic plan", t: "Mar 28" }
                  ].map((e, idx, arr) => (
                    <div key={idx} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: idx < arr.length - 1 ? `1px solid #f0f3f6` : "none" }}>
                      <Av i={e.i} bg={e.bg} fg={e.fg} s={22} />
                      <div style={{ fontSize: 12, lineHeight: 1.5 }}>{e.n && <span style={{ fontWeight: 500 }}>{e.n} </span>}<span style={{ color: C.gray }}>{e.a}</span><span style={{ fontSize: 10, color: "#8b99a8", marginLeft: 8 }}>{e.t}</span></div>
                    </div>
                  ))}
                </div>
              )}

              {bTab === "Hierarchy" && (
                <div style={{ position: "relative", paddingLeft: 20 }}>
                  <div style={{ position: "absolute", left: 8, top: 10, bottom: 10, width: 1.5, background: C.teal, opacity: 0.4 }} />
                  {[{ icon: <SI s={11} />, t: "Drive enterprise value — FY26", label: "PARENT", lc: C.tealDk, s: "ON TRACK", sc: "green", bg: C.tealBg, bd: C.tealBd, highlight: false },
                    { icon: <TM s={11} />, t: "Expand gross margin by 300bps", label: "CURRENT", lc: C.tealDk, bg: "#fff", bd: C.teal, highlight: true },
                    { icon: <PI />, t: "Reduce COGS tier-1 lines", label: "CHILD", lc: C.pinkDk, s: "BLOCKER", sc: "red", bg: "#fff", bd: C.border },
                    { icon: <PI />, t: "Price realization program", label: "CHILD", lc: C.pinkDk, s: "ON TRACK", sc: "green", bg: "#fff", bd: C.border },
                    { icon: <PI />, t: "Channel mix optimization", label: "CHILD", lc: C.pinkDk, s: "BEHIND", sc: "amber", bg: "#fff", bd: C.border }
                  ].map((n, idx) => (
                    <div key={idx} style={{ marginBottom: 6, position: "relative" }}>
                      <div style={{ position: "absolute", left: -16, top: 10, width: 7, height: 7, borderRadius: "50%", background: n.highlight ? C.teal : C.teal, opacity: n.highlight ? 1 : 0.5 }} />
                      <div style={{ background: n.bg, border: `${n.highlight ? "2px" : "1px"} solid ${n.bd}`, borderRadius: 8, padding: "7px 12px", display: "flex", alignItems: "center", gap: 8, boxShadow: n.highlight ? "0 2px 8px rgba(14,178,175,0.15)" : "none" }}>
                        {n.icon}
                        <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: 11, fontWeight: 500, color: C.navy, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{n.t}</div><div style={{ fontSize: 9, color: n.lc }}>{n.label}</div></div>
                        {n.s && <Pl c={n.sc}>{n.s}</Pl>}
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: 10, marginLeft: -8, display: "flex", alignItems: "center", gap: 6 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M4 12 L20 12" stroke={C.teal} strokeWidth="1.5" strokeDasharray="3 3"/></svg>
                    <span style={{ fontSize: 9, color: C.gray }}>1 DEPENDENCY</span>
                  </div>
                  <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.teal}`, borderRadius: 8, padding: "7px 12px", display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                    <SI s={10} />
                    <div style={{ flex: 1, fontSize: 11, color: C.navy, fontWeight: 500 }}>Accelerate revenue growth</div>
                    <Pl c="green">ON TRACK</Pl>
                  </div>
                </div>
              )}

              {bTab === "Relationships" && (
                <div>
                  <div style={{ fontSize: 12, color: "#4a5868", marginBottom: 12 }}>Cross-dependencies and linked items outside the direct hierarchy.</div>
                  <div style={{ background: C.bg2, borderRadius: 8, padding: 12, marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 32, height: 32, background: C.tealBg, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}><SI s={14} /></div>
                    <div style={{ flex: 1 }}><div style={{ fontSize: 12, fontWeight: 500, color: C.navy }}>Accelerate revenue growth</div><div style={{ fontSize: 10, color: C.gray }}>EMEA pricing decisions impact price realization metric</div></div>
                    <div style={{ fontSize: 9, color: C.tealDk, background: C.tealBg, border: `1px solid ${C.tealBd}`, padding: "3px 8px", borderRadius: 12, fontWeight: 500 }}>DEPENDS ON</div>
                  </div>
                  <div style={{ background: C.bg2, borderRadius: 8, padding: 12, display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 32, height: 32, background: C.amberBg, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="14" height="14" viewBox="0 0 24 24"><path d="M3 5 L12 5 L20 12 L12 19 L3 19 L11 12 Z" fill="#d49a0f"/></svg></div>
                    <div style={{ flex: 1 }}><div style={{ fontSize: 12, fontWeight: 500, color: C.navy }}>FY26 Board Review — Q1</div><div style={{ fontSize: 10, color: C.gray }}>Milestone requiring gross margin update presentation</div></div>
                    <div style={{ fontSize: 9, color: C.amber, background: C.amberBg, border: `1px solid ${C.amber}33`, padding: "3px 8px", borderRadius: 12, fontWeight: 500 }}>MILESTONE</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div style={{ marginTop: 12, background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, padding: "11px 14px", display: "flex", alignItems: "center", gap: 10 }}>
            <TM v="a" s={18} />
            <div style={{ flex: 1, fontSize: 13, color: "#8b99a8" }}>Ask TARGA about this strategy...</div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12 L19 12 M12 5 L19 12 L12 19" stroke={C.teal} strokeWidth="2"/></svg>
          </div>

        </div>
      </div>
    </div>
  );
}