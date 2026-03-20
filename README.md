# ATM Network Operations Prototype

This is a lightweight UI prototype for a system administrator monitoring and responding to ATM network issues.

## Screens

- `Dashboard`: overview of system health and the highest-priority anomaly
- `Alert queue`: list view for prioritizing investigation
- `ATM detail`: evidence, timeline, impact, and recommended action
- `Action center`: response selection and confirmation state

## Accessibility choices

- Semantic landmarks and heading structure
- Skip link for keyboard users
- Visible focus states
- Text labels and severity words in addition to color
- High-contrast text and controls
- Mobile-friendly single-column fallback

## WCAG-aware color mapping

Requested palette:

- `#942222`
- `#801c1c`
- `#cbbdaf`
- `#9bb9a8`
- `#b2d5c9`

Recommended semantic use:

- `Primary action / critical emphasis`: `#801c1c`
- `Primary action hover / stronger emphasis`: `#942222`
- `Borders / dividers / soft containers`: `#cbbdaf`
- `Secondary accents / data bars / input borders`: `#9bb9a8`
- `Soft background tint / support highlights`: `#b2d5c9`

Use with caution:

- Do not use `#cbbdaf`, `#9bb9a8`, or `#b2d5c9` as body text on light backgrounds.
- Keep body text dark for WCAG 2.1 AA contrast.
- Use severity words like `Critical`, `High`, or `Offline` alongside color.
- Keep focus indicators separate from status color; this prototype uses a dedicated blue focus ring.

## Run locally

Open `index.html` in a browser.
