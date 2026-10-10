/* ═══ SITE COPY — the words on the site, in one place ═══
   Source of record: TARGA Copy Guidelines v1.1 (21 Sep 2026) and the
   targa.ai concept copy v2 (19 Sep 2026). Use these strings as written.
   The eleven, the definition block, and the positioning line are locked
   language. Change them here only after a ruling from Joe. */

export const POSITIONING = "Task tools start with tasks. TARGA starts with strategy.";

export const ONE_SENTENCE = "TARGA is a leadership intelligence platform built for executives.";

/* The definition block. Company paragraph approved by Joe and Bill, 7 Oct 2026. Also the Organization schema description and the opening of llms.txt. */
export const DEFINITION =
  "Targatek Inc. makes TARGA, a leadership intelligence platform built for executives. Your strategy lives in TARGA with a name on every action, and the work your team does creates the status you see, so the whole leadership team is working from the same picture. TARGA's guidance gets better the more you use it, and the decisions stay yours. Every company has AI now. TARGA uses it where it changes results: watching the plan between meetings and flagging what needs attention, so your team acts sooner.";

/* The eleven top lines (10 Things baseline v3.4), grouped in Joe's 9/19 order.
   07 carries the 21 Sep wording ("the more you use TARGA"). 09 is the 19 Sep rewrite ("shows what they mean for the plan"). */
export const VALUE_GROUPS = [
  { title: "Better decisions", lines: [
    "The more you use TARGA, the better its guidance gets. The decisions stay yours.",
    "You can ask your plan directly, so you get to an informed decision faster.",
  ] },
  { title: "Seeing the business", lines: [
    "Every day, the whole team can see where attention is needed before anyone has to ask.",
    "You see whether your attention is going where it creates value.",
    "Everyone can see how their work connects to what the business is trying to accomplish.",
  ] },
  { title: "One team on one plan", lines: [
    "Your plan is where the company runs, so it's always current.",
    "When someone says At Risk, everyone knows what it means and what happens next.",
  ] },
  { title: "Time back", lines: [
    "You see the whole business at a glance, and get your time back for the work that sets your company apart.",
    "The work creates the status. Report writing is a thing of the past.",
  ] },
  { title: "Keep what you have", lines: [
    "You keep the systems that run your business. TARGA shows what they mean for the plan.",
  ] },
];

/* The comparison table. TARGA leads. The SPM column describes the category, never a named competitor's copy. */
export const COMPARE_ANSWER =
  "TARGA is a leadership intelligence platform. It starts with the strategic plan and works down to the work, which is why it is built for the CEO and the executive team. Project and portfolio tools start with tasks and build up. The difference is direction.";

export const COMPARE_COLS = ["TARGA", "Task and project tools", "Strategy portfolio (SPM) tools"];

export const COMPARE_ROWS = [
  { label: "Starts from", cells: ["The strategic plan, top-down", "Tasks", "Portfolios of projects"] },
  { label: "Built for", cells: ["The CEO and executive team", "The team doing the work", "The PMO and strategy staff"] },
  { label: "Status comes from", cells: ["The work itself - owners' own activity", "Manual updates", "Roll-up reporting"] },
  { label: "The AI", cells: ["Observes and suggests. Every action is yours.", "Add-on assistant", "Reporting and analysis"] },
  { label: "The claim", cells: ["\"Your plan is where the company runs\"", "\"Everything starts with a task\"", "A reporting layer on top of the work"] },
];

export const COMPARE_KICKER = "If you hear \"everything starts with a task,\" you're not talking to us.";

/* Third-party stats, as they run on the live site today. Numbers are Joe's to confirm. */
export const STATS = [
  { v: "85", sfx: "%", d: "of executives cite internal barriers - not market conditions - as the top obstacle to growth.", s: "Bain, Founder's Mentality" },
  { v: "67", sfx: "%", d: "of well-formulated strategies underperform in execution. The strategy is not the problem - the infrastructure is.", s: "Bain & Company" },
];

/* Does the AI decide for me? Positive framing per Joe's 9/10 rule. */
export const AI_ANSWER =
  "TARGA watches the plan between meetings and flags what needs your attention today. Every action is yours: you take a suggestion or dismiss it. The more you use TARGA, the closer its guidance gets to how you already decide, and the decisions stay yours.";

/* ═══ DURABLE vs DATED ═══
   Everything above this line is durable: it says what TARGA is and stays true for years.
   AI engines freeze what they read into the next model release, so dated sentences - a month,
   a stage, a count, "coming", "under way" - live ONLY in STATUS below. STATUS renders in one
   block on home (Where TARGA stands today) with a visible "As of" stamp. It is never in the
   FAQ, the schema, the page titles, llms.txt, or a briefing.
   Monthly swap: edit STATUS and nothing else. */
export const STATUS = {
  asOf: "As of October 2026",
  lines: [
    "Our own company plan runs in TARGA, and first pilots begin in October.",
    "TARGA runs on desktop, phone and tablet.",
  ],
};

export const PROOF = {
  heading: "Where TARGA stands today",
  asOf: STATUS.asOf,
  body: STATUS.lines.join(" "),
  disclaimer: "Forward looking guidance subject to change.",
  /* The durable version of the proof, for pages that must not carry a date. */
  durable: "Our own company plan runs in TARGA.",
};

export const HOME_FAQ = [
  { q: "What is TARGA?", a: "A leadership intelligence platform built for executives. Your strategy lives in TARGA with a name on every action, the work your team does creates the status you see, and its guidance gets better the more you use it." },
  { q: "How is TARGA different from project management tools?", a: "Those start with tasks and build up. TARGA starts with the strategic plan and works down, and it's built for the CEO and the executive team." },
  { q: "Is TARGA a strategy portfolio management (SPM) tool?", a: "It's in that category, which is real and funded. The difference is direction. TARGA works top-down and is built for the executive, where most SPM tools assemble the picture from the work upward." },
  { q: "Does the AI act on its own?", a: "TARGA observes, suggests and logs. Every action is yours: a person decides, every time." },
  { q: "Couldn't we do this with ChatGPT or Claude?", a: "A chat tool will answer the question you thought to ask. TARGA is where the plan lives between the questions: owned, current, and shared by the whole leadership team, with status that comes from the work itself. It flags what needs you today before you think to ask." },
  { q: "Do we have to replace our current systems?", a: "You keep the systems that run your business, and TARGA shows what they mean for the plan." },
  { q: "Who is TARGA for?", a: "The CEO and the executive team, and in larger companies, the general manager who runs a division with a leadership team of their own." },
  { q: "How does TARGA know the status of the work?", a: "The owner's own activity - comments, status changes, completed actions - becomes the status the executive sees. Report writing is a thing of the past." },
  { q: "Is TARGA available now?", a: "Our own company plan runs in TARGA today. Where pilots and availability stand this month is under Where TARGA stands today, with the date on it." },
  { q: "Every tool has AI now. What's different about TARGA?", a: "Almost every software product has AI in it today. The question is whether it changed how your plan gets executed. TARGA uses it where it changes results: watching the plan between meetings and flagging what needs attention, so your team acts sooner. McKinsey's State of AI survey puts the companies seeing real bottom-line impact at about 6 percent, and what sets them apart is that they redesigned how the work gets done rather than adding AI to what they already had. A person decides every time." },
  { q: "Why can't we do this in our ERP?", a: "Your ERP runs the transactions of the business, and it should keep doing that. TARGA holds the strategic plan above it: the goals, who owns each one, and how the work is tracking against them, so the leadership team sees the same picture." },
];

/* ═══ BRIEFINGS ═══ */
export const BRIEFINGS = [
  {
    slug: "leadership-intelligence-vs-ppm",
    live: true,
    title: "What is a leadership intelligence platform, and how is it different from project and portfolio management?",
    short: "Leadership intelligence vs project and portfolio management",
    answer: "One word: direction. Task tools start with tasks and build up. A leadership intelligence platform starts with the strategic plan and works down.",
    updated: "October 2026",
    publishedISO: "2026-09-30",
    dateISO: "2026-10-07",
  },
  /* Planned briefings stay in the editorial calendar, not on the page. A hub with one live
     piece and three "Coming" cards reads to an engine as "they have one article". Add each
     piece here the day it publishes, with live: true. */
];

/* The hub and the sitemap list live briefings only. */
export const LIVE_BRIEFINGS = BRIEFINGS.filter((b) => b.live && b.slug);

export const BRIEFING_FAQ = [
  HOME_FAQ[0], HOME_FAQ[1], HOME_FAQ[2], HOME_FAQ[3], HOME_FAQ[5],
];
