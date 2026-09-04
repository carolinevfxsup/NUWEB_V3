# NuStudios Design System

This document outlines the visual language and design patterns used across the NuStudios website and showcase pages (e.g., O Palmeiral).

## 1. Typography

### Fonts
- **Display Font:** `Space Grotesk`
  - Used for headlines, titles, and high-impact text.
  - Characteristics: Tracking-tighter, bold, often uppercase in showcase titles.
- **Sans Font:** `Inter`
  - Used for body text, labels, and UI elements.
  - Characteristics: Clean, legible, variable weights (300-700).
- **Serif Font:** Default System Serif (e.g., Georgia, Times New Roman)
  - Used for editorial quotes and specific stylistic accents.
  - Characteristics: Italicized, elegant.
- **Mono Font:** Default System Mono
  - Used for technical data or specific labels (if applicable).

### Heading Styles
| Level | Font | Case | Characteristics |
| :--- | :--- | :--- | :--- |
| **H1 (Hero)** | Sans | Bold Italic | `text-4xl sm:text-5xl md:text-[10vw] lg:text-[12vw]`, tracking-tighter, white, mixed case. *Note: Automation page uses custom sizing to fit "Autonomous" on one line.* |
| **H2 (Showcase)** | Display | Uppercase | `text-4xl md:text-6xl`, tracking-tight, **Black Text Only**, **Red Full Stop at End** |
| **H2 (Home)** | Display | Normal/Mixed | `text-5xl md:text-7xl`, tracking-tighter |
| **H3** | Display | Uppercase | `text-xl md:text-2xl`, tracking-tight |

### Page Titles (Results, Services, Contact)
All main page titles should be standardized to `text-5xl md:text-7xl` with uppercase tracking-tighter and a red full stop.

### Hero Title Consistency
All hero section titles on showcase, blog, and automation pages must be consistent in casing (mixed case) and sizing. Titles must respect the max-width of their container. If a single word is too long, the font size should scale down to fit (using responsive units like `vw` or `clamp`). **ALL CAPS titles are strictly forbidden.**

### Video Controls
All video controls across the site MUST be visible and styled in **Primary Red** (`red-600`).
- **LazyVideo Props:** `showControls={true}`, `controlsColor="red-600"`.
- **Background Videos:** Should typically be muted, autoplay, and loop without controls, but if controls are needed, they must follow the red styling.

### Special Text Patterns
- **Section Labels:** `font-sans text-xs uppercase tracking-widest text-text/60`
- **Quotes:** `font-serif italic text-3xl md:text-5xl leading-tight`
- **Rail Text:** `text-[10px] font-bold uppercase tracking-[0.5em] text-white/20` (Vertical in Hero)
- **Hero Subtitle:** `text-white/60 text-sm md:text-base font-medium uppercase tracking-widest`

---

## 2. Color Palette

### Brand Colors
- **Primary Red:** `#E11D48` (Tailwind `red-600`)
  - Used for: Full stops at the end of titles, active icons, primary buttons, and accents.

### Neutral Colors
- **Background (bg):** `#FFFFFF`
- **Text (text):** `#000000`
- **Neutral:** `#F9F9F9`
- **Border:** `#EEEEEE`

### Section Backgrounds
- **Pure White:** `bg-white` (#FFFFFF)
- **Off-White / Light Grey:** `bg-[#F9F9F7]` or `bg-[#F5F5F0]`
- **Deep Dark:** `bg-black` (#000000) or `bg-[#0A0A0A]`
- **Soft Grey:** `bg-[#f8f8f8]`

---

## 3. Component Patterns

### The "Red Full Stop" Pattern
All major showcase titles and results headings (H2) must use black text with only the trailing period in red. This applies to all showcase pages except the Hero section.
```tsx
<h2 className="text-black font-display uppercase">
  TITLE TEXT<span className="text-primary">.</span>
</h2>
```
*Note: `text-primary` or `text-red-600` is used for the red color. The text itself must be explicitly `text-black` on light backgrounds.*

### Bento Grids
Used for results and infographics.
- **Grid:** `grid grid-cols-1 md:grid-cols-3 gap-4`
- **Item:** `p-6 border border-border bg-neutral rounded-md`

### Buttons
- **Primary:** `bg-red-600 text-white rounded-none px-10 py-4 uppercase tracking-widest font-bold text-xs`
- **Secondary:** `bg-black text-white rounded-none` or `border border-black text-black rounded-none`
- **Rule:** All buttons **MUST** be square (`rounded-none`). Rounded or pill-shaped buttons are strictly forbidden.
- **Navigation Rule:**
  - "Inquire Now" buttons should link to the onboarding process (`/onboarding`).
  - "Automate" buttons on showcase pages should link to the automation service page (`/automation`).

### Dark Mode / Contrast Rules
- **Color Inversion:** On dark backgrounds (`bg-black`, `bg-[#0A0A0A]`), all primary text and titles **MUST** invert to white for maximum contrast.
- **Title Pattern:** The "Red Full Stop" pattern still applies: White text with a Primary Red period.

---

## 4. Showcase Specifics (O Palmeiral)

### Layout Patterns
- **Hero:** `ShowcaseHero` component with right-aligned image.
- **Alternating Sections:**
  - Image Left / Text Right
  - Text Left / Image Right
- **Human Checkpoint:** A specific pattern for showing a "human-in-the-loop" step, often with a light background (`bg-[#F9F9F7]`).

### Iconography
- **Library:** `lucide-react`
- **Color:** Often used with `text-red-600` for emphasis or `text-primary`.
- **Sizing:** `w-6 h-6` for list items, `w-10 h-10` for feature blocks.

---

## 5. Implementation Notes
- **Transitions:** Use `framer-motion` for `fadeInUp` effects on sections.
- **Borders:** Use `border-black/5` or `border-white/10` for extremely subtle separation.
- **Images:** Always use `referrerPolicy="no-referrer"` and `object-cover`.
