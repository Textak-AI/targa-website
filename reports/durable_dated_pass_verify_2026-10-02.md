# Verify report - durable / dated copy pass on staging

Kyle Moyer, HBC. 10/2/26. Applied to the `staging` branch as received (targa-staging.zip).

## What changed

| File | Change |
|---|---|
| components/content.js | New `STATUS` constant (the "As of" stamp and the dated sentences). `PROOF` now reads from it and carries a `durable` version. FAQ item 9 rewritten with no stage or month. The three planned "Coming" briefings removed from `BRIEFINGS`; new `LIVE_BRIEFINGS` export. Briefing `dateISO` bumped to 2026-10-02 with `publishedISO` 2026-09-30 kept separate. |
| components/TargaAI.jsx | Home proof block renders the "As of" stamp under the heading. Footer strip drops "SOC 2 in progress" (appeared on every page, off canon - "under way" is the only sayable form - and dated). About lineage line drops "TARGA's own first pilots begin in October" for "Our own company plan runs in TARGA." |
| components/Briefings.jsx | Hub lists `LIVE_BRIEFINGS` only; single-card grid centred at 640px until a second piece is live. Briefing close is the durable proof line, no pilots line, no forward-looking disclaimer (no forward-looking sentence remains on the page). |
| app/briefings/[slug]/page.jsx | Article schema: `datePublished` from `publishedISO`, `dateModified` from `dateISO`, so edits move one and not the other. |
| public/llms.txt | Replaced with the 10/2 version (dated lines removed, points at Where TARGA stands today). |

Untouched: the definition block, the eleven, the comparison table, the AI answer, the stats, Organization and Product schema (already clean - no dates, stage, or availability), page titles and meta descriptions.

## What I checked

- `next build` passes (with `RESEND_API_KEY` set, as on Vercel).
- Server HTML of every route scanned for: october, on the verge, MVP, SOC 2, under way, since this quarter, coming, pilots begin. Result: one match on the whole site, the stamped block on home. Zero on /briefings, the briefing, /platform, /about, /100-ceos, /contact, /privacy, /terms.
- FAQPage schema on home: nine questions, none dated. Where TARGA stands today is not in it.
- Article schema on the briefing: datePublished 2026-09-30, dateModified 2026-10-02.
- Rendered at 1440 and 390: home proof block, home FAQ open on item 9, briefings hub, briefing close, footer. No horizontal overflow. Console clean apart from Google Fonts, which the build box cannot reach - loads normally on Vercel.

## The monthly swap

Edit `STATUS` in components/content.js. Nothing else. First swap is November: pilots are no longer "begin in October," and the first buyer sentence, with permission, goes in as a line.

## Still outside this pass

- Platform, 100 CEOs, and the rest of About carry live copy from before the concept. 100 CEOs has "Participants who commit to a pilot get priority access and favorable terms" and "Co-creation, not a sales pitch" - both for the canon pass once home direction is confirmed.
- Footer still says "AWS infrastructure." Canon bans naming a vendor as what we run on; that rule was written about AI vendors. Joe's call whether infrastructure gets the same treatment.
- The four staging defaults stand: 30/20 figures, item 09, the chat-tool FAQ, the logo strip wording.
