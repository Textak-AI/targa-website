"use client";
import { SiteFrame, useNavigate, C, useMedia, Reveal, Eyebrow, SectionTitle, GlowCard, PremiumBg, Btn, IconMark, CompareTable, FaqList, BriefingCard } from "./TargaAI";
import { BRIEFINGS, BRIEFING_FAQ, COMPARE_KICKER, AI_ANSWER, PROOF, STATS } from "./content";

const H = { fontFamily: "'Space Grotesk',sans-serif", fontWeight: 300, color: C.white, letterSpacing: "-0.5px", lineHeight: 1.25 };
const P = { fontFamily: "'Inter',sans-serif", fontSize: "1rem", lineHeight: 1.85, color: C.g300, marginBottom: 18 };
const H2 = { fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1.3rem,2vw,1.7rem)", fontWeight: 400, color: C.white, letterSpacing: "-0.3px", lineHeight: 1.3, marginTop: 48, marginBottom: 16 };

function PageHero({ eyebrow, title, sub, byline }) {
  const { mobile } = useMedia();
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(165deg," + C.navyDeep + " 0%," + C.navy + " 100%)", padding: mobile ? "120px 20px 48px" : "160px 40px 80px" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(2,6,14,0.8) 0%, rgba(8,14,26,0.5) 50%, rgba(8,14,26,0.2) 72%, transparent 88%, rgba(31,71,106,0.12) 100%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Eyebrow color={C.gold}>{eyebrow}</Eyebrow>
        <h1 style={{ ...H, fontSize: "clamp(1.9rem,3.6vw,2.7rem)", marginBottom: 20, maxWidth: 800 }}>{title}</h1>
        {sub && <p style={{ ...P, fontSize: "1.05rem", maxWidth: 680, marginBottom: byline ? 22 : 0 }}>{sub}</p>}
        {byline && <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: C.g500, letterSpacing: "0.04em" }}>{byline}</p>}
      </div>
    </section>
  );
}

/* ═══ /briefings ═══ */
export function BriefingsHub() {
  const setPage = useNavigate();
  const { mobile, tablet } = useMedia();
  return (
    <SiteFrame page="briefings">
      <PageHero eyebrow="Briefings" title="TARGA Briefings - strategy execution, explained for executives" sub="Straight answers to the questions executives ask about running the company from the plan down - how leadership intelligence differs from project and portfolio management, what to look for in a platform, and how strategy actually gets executed. Written for leaders, sourced, and updated as the category moves." />
      <PremiumBg style={{ padding: mobile ? "48px 20px 72px" : "72px 40px 110px" }} orb1="rgba(251,191,36,0.05)" orb2="rgba(14,178,175,0.05)">
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: mobile ? "1fr" : tablet ? "1fr 1fr" : "1fr 1fr", gap: 24, position: "relative", zIndex: 3 }}>
          {BRIEFINGS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} style={{ height: "100%" }}><BriefingCard b={b} setPage={setPage} /></Reveal>
          ))}
        </div>
      </PremiumBg>
    </SiteFrame>
  );
}

/* ═══ /briefings/leadership-intelligence-vs-ppm ═══ */
export function BriefingLIvsPPM() {
  const setPage = useNavigate();
  const { mobile } = useMedia();
  const b = BRIEFINGS[0];
  const leaders = [
    { who: "The CEO", need: "needs to see whether attention - and capital - is going where it creates value.", how: "TARGA puts the whole strategic portfolio in one view, with status computed from the work underneath it." },
    { who: "The VP of Sales", need: "needs to know what's behind before it's a fire drill.", how: "The Lightning Line shows calendar status at a glance. Left of the line is behind, right is ahead." },
    { who: "The VP of Engineering", need: "needs the team working from one plan.", how: "The work creates the status. Report writing is a thing of the past." },
    { who: "The initiative owner", need: "needs their work to connect visibly to the goal it serves.", how: "Everyone can see how their work connects to what the business is trying to accomplish." },
  ];
  const checks = [
    "You can't see, in one place, whether your strategy is on track this week.",
    "Status arrives as reports someone had to write.",
    "You find out something slipped after it's already a problem.",
    "Work happens that you can't trace up to a goal.",
    "You're not sure your capital and attention are going where they create the most value.",
    "Your leadership team is managing tasks instead of leading.",
  ];
  const lookFor = [
    "Built top-down for the executive, from the strategic plan.",
    "Status that comes from the work itself, so it is always current.",
    "A strict, shared status language everyone reads the same way. TARGA uses four: On Track, At Risk, Blocked, Complete.",
    "AI that advises, with every action yours to take.",
    "Works with the systems you already run, and gives them a place to live.",
  ];
  return (
    <SiteFrame page="briefings">
      <article>
        <PageHero eyebrow="Briefing" title={b.title} byline={"Targatek · Last updated " + b.updated} />

        <section style={{ background: C.navyDeep, padding: mobile ? "48px 20px" : "72px 40px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            {/* Answer-first opening */}
            <Reveal>
              <p style={{ ...P, fontSize: mobile ? "1.05rem" : "1.15rem", color: C.white, padding: mobile ? "20px" : "26px 30px", background: "rgba(251,191,36,0.04)", borderLeft: "2px solid rgba(251,191,36,0.45)", borderRadius: "0 8px 8px 0", marginBottom: 32 }}>
                A leadership intelligence platform is software built for executives - the CEO and the executive team - that holds the strategic plan, shows the health of the work against it, and gets more useful the more the team works in it. It differs from project and portfolio management in one word: direction. Task tools start with tasks and build up. A leadership intelligence platform starts with the strategic plan and works down. TARGA is a leadership intelligence platform.
              </p>
            </Reveal>
            <Reveal>
              <p style={P}>Most executives will tell you the obstacle to growth is inside the building. Consider the numbers below. The problem is rarely the strategy. It's the gap between the plan and the work, and the tool a company uses to close that gap is usually built for the wrong seat.</p>
              <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3,1fr)", gap: 16, margin: "28px 0 8px" }}>
                {STATS.map(({ v, sfx, d, s }) => (
                  <GlowCard key={s} glowColor="rgba(14,178,175,0.1)" style={{ padding: "22px 20px" }}>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.8rem", fontWeight: 500, color: C.teal, marginBottom: 8 }}>{v}{sfx}</div>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.84rem", lineHeight: 1.6, color: C.g300 }}>{d}</p>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", color: C.g500, marginTop: 6 }}>- {s}</p>
                  </GlowCard>
                ))}
              </div>
            </Reveal>

            <Reveal><h2 style={H2}>The three categories, side by side</h2>
              <p style={P}>Three kinds of software claim the strategy-execution problem. They differ in where they start, who they are built for, and where status comes from. TARGA starts with the plan. Task and project tools start with the task. Strategy portfolio tools start with a portfolio of projects and roll it up for the staff who manage it.</p>
              <CompareTable />
              <p style={{ ...P, fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.15rem", color: C.white, marginTop: 24 }}>{COMPARE_KICKER}</p>
            </Reveal>

            <Reveal><h2 style={H2}>What each leader gets</h2>
              <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: 16 }}>
                {leaders.map((l) => (
                  <GlowCard key={l.who} glowColor="rgba(14,178,175,0.08)" style={{ padding: "24px 22px" }}>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.05rem", fontWeight: 500, color: C.white, marginBottom: 8 }}>{l.who}</h3>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: 1.7, color: C.g300, marginBottom: 8 }}>{l.who} {l.need}</p>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: 1.7, color: C.white }}>{l.how}</p>
                  </GlowCard>
                ))}
              </div>
            </Reveal>

            <Reveal><h2 style={H2}>Does the AI make the decisions?</h2>
              <p style={P}>{AI_ANSWER}</p>
            </Reveal>

            <Reveal><h2 style={H2}>Do you need a leadership intelligence layer? A self-check.</h2>
              <p style={P}>Tick the ones that are true.</p>
              <div style={{ border: "1px solid rgba(14,178,175,0.12)", borderRadius: 12, background: "rgba(15,32,53,0.55)", padding: mobile ? "8px 18px" : "10px 26px", marginBottom: 18 }}>
                {checks.map((c, i) => (
                  <div key={c} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 0", borderBottom: i < checks.length - 1 ? "1px solid rgba(14,178,175,0.08)" : "none" }}>
                    <span aria-hidden="true" style={{ width: 16, height: 16, marginTop: 4, borderRadius: 3, border: "1px solid rgba(14,178,175,0.5)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", lineHeight: 1.6, color: C.g300 }}>{c}</span>
                  </div>
                ))}
              </div>
              <p style={{ ...P, color: C.white }}>If three or more are true, the gap isn't your strategy. It's the layer between the plan and the work.</p>
            </Reveal>

            <Reveal><h2 style={H2}>What to look for in a platform</h2>
              {lookFor.map((l) => (
                <p key={l} style={{ ...P, paddingLeft: 16, borderLeft: "1px solid rgba(14,178,175,0.35)", marginBottom: 12 }}>{l}</p>
              ))}
            </Reveal>

            <Reveal><h2 style={H2}>Frequently asked</h2>
              <FaqList items={BRIEFING_FAQ} />
            </Reveal>
          </div>
        </section>

        <section style={{ background: C.navy, padding: mobile ? "56px 20px" : "80px 40px", textAlign: "center" }}>
          <Reveal>
            <div style={{ maxWidth: 640, margin: "0 auto" }}>
              <IconMark height={40} variant="light" />
              <h2 style={{ ...H, fontSize: "clamp(1.4rem,2.2vw,1.9rem)", marginTop: 20, marginBottom: 14 }}>{PROOF.heading}</h2>
              <p style={{ ...P, marginBottom: 26 }}>Our own company plan has lived inside TARGA since this quarter. First pilots begin in October.</p>
              <Btn onClick={() => setPage("contact")}>Schedule a Conversation</Btn>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.72rem", color: C.g500, letterSpacing: "0.04em", marginTop: 26 }}>{PROOF.disclaimer}</p>
            </div>
          </Reveal>
        </section>
      </article>
    </SiteFrame>
  );
}
