# TARGA UI Starter

Foundation-layer React components and design tokens for the TARGA AI platform. This package contains the elements of the design system that are **locked and approved** — colors, typography, icons, brand marks, and atomic UI primitives. Higher-level compositions (page layouts, goal cards, metric cards, detail page structure) are still being finalized and will be delivered in a subsequent release.

**Delivered by:** HyperBrand Creative
**Version:** 0.1.0 — Starter
**Target consumer:** Sigma Solve development team

---

## Installation

This is a file-based starter, not a published npm package. Drop the `targa-ui-starter` folder into your project's `src/` tree (or wherever your design system lives) and import from it:

```jsx
import { GoalIcon, Avatar, StatusPill, colors } from './targa-ui-starter';
```

At your app root, also import the CSS tokens once:

```jsx
import './targa-ui-starter/tokens/tokens.css';
```

### Fonts

The components reference two font families that must be loaded in your app shell:

- **Space Grotesk** (display — headlines, large numbers)
- **Inter** (body — everything else)

Load them via Google Fonts, self-host, or your preferred method. Example CDN link for quick setup:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## What's in this package

### Design tokens (`tokens/`)

Two parallel token files. Use the CSS one for styles, the JS one for runtime logic.

- `tokens.css` — CSS custom properties. Import once at the app root.
- `tokens.js` — JavaScript exports for runtime access (chart colors, dynamic styles, etc.).

Both files cover: brand colors, category tier colors, semantic status colors, neutrals, typography (font families and size scale), spacing (4-point grid), radius scale, elevation, and motion.

**Never hardcode token values in component files.** Always reference the variables. If a new token is needed, add it to both files and submit a PR.

### Icons (`icons/`)

Six object-type icons plus the TARGA brand mark. All accept a `size` prop (default 24) and are pure SVG — no external dependencies.

| Icon | Represents | Tier color |
|---|---|---|
| `GoalIcon` | Goals (top-level objectives) | Teal |
| `InitiativeIcon` | Initiatives (workstreams under goals) | Magenta |
| `ActionIcon` | Actions (tasks, decisions) | Gold |
| `MetricIcon` | Metrics (KPIs) | Navy |
| `TimelineIcon` | Date-based items | Navy neutral |
| `ExternalIcon` | External links | Teal |
| `TargaMark` | The TARGA brand triangle | Three variants |

**Object taxonomy note:** In an earlier version of the concept, Goals were called "Strategic Plans" and Initiatives were called "Projects." The terminology has been updated to read as an executive platform rather than a project management tool. If you encounter older references, they should be treated as deprecated.

**`TargaMark` usage principle:** This mark signals *"TARGA is speaking or acting here."* Use it for AI-authored content, TARGA Intelligence panels, Ask TARGA surfaces, and brand anchors. Do not use it as decoration — its scarcity is what preserves its meaning.

Three variants:
- `variant="intelligence"` (default) — teal + navy. For AI/insight surfaces.
- `variant="ask"` — gold + navy. For Ask TARGA conversational surfaces.
- `variant="on-dark"` — teal + white. For use on navy or dark backgrounds.

### Primitives (`primitives/`)

Atomic UI pieces. All use token values for colors and spacing.

- **`Avatar`** — Circular initials badge. Props: `initials`, `size`, `bg`, `fg`.
- **`StatusPill`** — Color-coded status badge. Props: `variant` (`success` | `warning` | `danger` | `navy` | `teal`), `children`, `hidden`.
- **`ProgressBar`** — Horizontal fill bar with smooth animation. Props: `pct`, `height`, `color`.
- **`SourceLogo`** — Chip badge for external system identification (NetSuite, SAP, Salesforce, Google Sheets, Confluence). Props: `source`, `size`.

See JSDoc in each file for full API documentation and usage examples.

---

## What is NOT in this package (yet)

The following higher-level components are still being validated with stakeholders and will be delivered once finalized:

- **Page layouts** — Home, Cascade, Detail, Dashboard, Board Pulse
- **Composite cards** — Goal card, Initiative card, Metric card (with logo and sparkline), Action card
- **Navigation chrome** — Left rail / bottom bar responsive shell
- **TARGA Intelligence panel** — Suggestions list, pattern detection cards
- **Ask TARGA surface** — Chat interface with streaming and triangle loading animation
- **Cascade map** — Tree visualization with SVG connectors
- **Focal card** — The navy-header goal card used on the detail page
- **Odometer numeric** — Animated counter for transitioning numbers

Do not build these yet. If your team needs to prototype internal integrations, use the primitives above and simple placeholder layouts. We'll deliver the composed versions once the final structure is approved.

---

## Conventions

**Inline styles vs. classNames.** The primitives in this package use inline styles for their internal implementation because they're self-contained. In your application code, you're welcome to use any styling approach — the tokens are available as CSS variables, so Tailwind, CSS Modules, styled-components, and plain CSS all work.

**TypeScript.** These files use JSDoc type annotations rather than TypeScript. If your codebase is TypeScript, you can either (a) use these as-is — JSDoc types are recognized by TS in `allowJs` mode — or (b) convert to `.tsx`. If you convert, please keep the type signatures identical so the API remains stable.

**Accessibility.** All icons include `aria-label` and `role="img"`. The `ProgressBar` includes full ARIA attributes. If you compose these into interactive components, ensure focus management and keyboard navigation are handled at the composition level.

**What to avoid.** Do not monkey-patch token values, do not duplicate icon SVGs, do not build components that have hardcoded color values. If something is missing, ask — extending the tokens file is easier than patching downstream.

---

## Questions or changes

Kyle Moyer — jkyle@hyperbrandcreative.com

For design questions (spacing, behavior, extensions), reach out before implementing. For bugs or inconsistencies between this package and the demo prototype, please flag them — the prototype is the reference for visual behavior.

---

*This starter package represents approximately 30% of the full TARGA UI component library. The remaining 70% — page layouts and composed cards — will follow once design direction is locked with the client.*
