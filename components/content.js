/* ═══ SITE COPY — the words on the site, in one place ═══
   Source of record: TARGA Copy Guidelines v1.1 (21 Sep 2026) and the
   targa.ai concept copy v2 (19 Sep 2026). Use these strings as written.
   The eleven, the definition block, and the positioning line are locked
   language. Change them here only after a ruling from Joe. */

export const POSITIONING = "Task tools start with tasks. TARGA starts with strategy.";

export const ONE_SENTENCE = "TARGA is a leadership intelligence platform built for executives.";

/* The definition block. Ruled 21 Sep - "a name on every action", "the more you use it". */
export const DEFINITION =
  "Targatek Inc. makes TARGA, a leadership intelligence platform built for executives. Your strategic actions live in TARGA with a name on every action, the work your team does creates the status you see, and TARGA's guidance gets better the more you use it. The decisions stay yours. Task tools start with tasks. TARGA starts with strategy.";

/* The eleven top lines (10 Things baseline v3.4), grouped in Joe's 9/19 order.
   07 carries the 21 Sep wording ("the more you use TARGA"). 09 is the baseline line - Joe has not ruled on the rewrite. */
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
    "You keep the systems that run your business. TARGA gives them a place to live.",
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
  { v: "85", sfx: "%", d: "of executives cite internal barriers - not market conditions - as the top obstacle to growth.", s: "McKinsey" },
  { v: "90", sfx: "%", d: "year-over-year correlation in capital spending. The opportunity: redirect even a fraction toward value creation.", s: "Deloitte" },
  { v: "67", sfx: "%", d: "of well-formulated strategies underperform in execution. The strategy is not the problem - the infrastructure is.", s: "Bain & Company" },
];

/* Does the AI decide for me? Positive framing per Joe's 9/10 rule. */
export const AI_ANSWER =
  "TARGA watches the plan between meetings and tells you what needs you today. You act on it, or you set it aside. Every action is yours. The more your team works in TARGA, the more its guidance lines up with how you already decide, and the decisions stay yours.";

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
    "Our own company plan runs in TARGA. The demo you'll see is how we manage the company.",
    "First pilots begin in October, and you'll hear from them, not from us.",
    "TARGA runs on desktop, phone, and tablet.",
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
  { q: "What is TARGA?", a: "A leadership intelligence platform built for executives. Your strategic plan lives in it, the work your team does creates the status you see, and its guidance improves the more your team works in it." },
  { q: "How is TARGA different from project management tools?", a: "Those start with tasks and build up. TARGA starts with the strategic plan and works down, and it's built for the CEO and executive team, not the people managing tasks." },
  { q: "Is TARGA a strategy portfolio management (SPM) tool?", a: "It's in that category, which is real and funded. The difference is direction. TARGA is top-down and built for the executive, where most SPM tools assemble the picture from the work upward." },
  { q: "Does the AI act on its own?", a: "No. TARGA observes, suggests, and logs. Every action is yours, and the decisions stay yours." },
  { q: "Couldn't we do this with a chat tool?", a: "You can get an answer from a chat tool. What you can't get is the plan itself - owned, current, and shared by the whole leadership team - or status that comes from the work rather than from whoever assembled the prompt. A general tool answers the question you thought to ask. TARGA is where the plan lives between the questions, and it tells you what needs you today before you ask." },
  { q: "Do we have to replace our current systems?", a: "No. You keep the systems that run your business. TARGA gives them a place to live." },
  { q: "Who is TARGA for?", a: "The CEO and the executive team." },
  { q: "How does TARGA know the status of the work?", a: "The initiative owner's own activity - comments, status, completed actions - becomes the status the executive sees. Report writing is a thing of the past." },
  { q: "Is TARGA available now?", a: "Our own company plan runs in TARGA today. Where pilots and availability stand this month is under Where TARGA stands today, with the date on it." },
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
    dateISO: "2026-10-02",
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
