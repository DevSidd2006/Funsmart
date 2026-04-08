# FunSmartism — Design System & Component Specifications

> A detailed design-to-development handoff guide for building the homepage

---

## 📦 COMPONENT LIBRARY

### 1. BUTTONS

#### Primary Button
```
Name: Button / Primary
Use: Main CTAs (Schedule, Learn More, Sign Up)
States: Default, Hover, Active, Disabled

Design:
├─ Background: #4F8F7F (sage green)
├─ Text: White (#FFFFFF), 14–16px, semi-bold
├─ Padding: 16px 40px (vertical × horizontal)
├─ Border-radius: 6px
├─ Border: None
├─ box-shadow: 0 2px 4px rgba(0,0,0,0.08) [default]
│           0 8px 16px rgba(0,0,0,0.12) [hover]
├─ Transition: All 200ms ease
└─ Min-width: 140px
   Min-height: 48px (touch-friendly)

Hover State:
├─ Background: #3D6B65 (darken by ~20%)
├─ box-shadow: 0 8px 16px rgba(0,0,0,0.16)
└─ Cursor: pointer

Active State:
├─ Background: #2F5551 (darker still)
└─ Transform: scale(0.98)

Disabled State:
├─ Background: #CCCCCC
├─ Text: #888888
├─ Cursor: not-allowed
└─ Opacity: 0.6

CSS Variables:
--btn-primary-bg: #4F8F7F
--btn-primary-hover: #3D6B65
--btn-primary-active: #2F5551
--btn-padding: 16px 40px
--btn-radius: 6px
--btn-transition: 200ms ease
```

#### Secondary Button (Outlined)
```
Name: Button / Secondary
Use: Alternative actions (Learn More, Skip, etc.)
States: Default, Hover, Active, Disabled

Design:
├─ Background: Transparent
├─ Text: #4F8F7F (sage green), 14–16px, semi-bold
├─ Padding: 14px 32px (slight reduction for border)
├─ Border: 2px solid #4F8F7F
├─ Border-radius: 6px
├─ box-shadow: None
├─ Transition: All 200ms ease
└─ Min-width: 120px

Hover State:
├─ Background: rgba(79, 143, 127, 0.08) [very light sage]
├─ Border-color: #3D6B65
├─ Text-color: #3D6B65
└─ Cursor: pointer

Active State:
├─ Background: rgba(79, 143, 127, 0.16)
└─ Transform: scale(0.98)

Disabled State:
├─ Border-color: #CCCCCC
├─ Text-color: #CCCCCC
└─ Cursor: not-allowed
```

---

### 2. CARDS

#### Program Card
```
Name: Card / Program
Use: 10-Day Workshop, Year-Long Program
Dimensions: Responsive (50% on desktop, 100% on mobile)

Design:
├─ Background: #FFFFFF (white)
├─ Border: 1px solid #E5E5E5
├─ Border-radius: 8px
├─ Padding: 32px 28px
├─ box-shadow: 0 2px 8px rgba(0,0,0,0.05) [default]
│           0 8px 24px rgba(0,0,0,0.12) [hover]
├─ Transition: All 300ms ease
├─ Max-width: 500px
└─ Min-height: 400px

Hover State:
├─ Border-color: #4F8F7F (sage accent)
├─ Border-left: 4px solid #4F8F7F [optional left accent]
├─ Transform: translateY(-4px)
└─ box-shadow: 0 8px 24px rgba(0,0,0,0.12)

Content Structure:
├─ Title: 20px bold, #1A1A1A, margin-bottom: 12px
├─ Subtitle: 14px semi-bold, #666666, margin-bottom: 16px
├─ List items: 15px regular, #555555, margin-bottom: 8px each
├─ Price: 18px bold, #1A1A1A, margin-top: 24px, margin-bottom: 16px
└─ CTA Button: Full-width primary button
```

#### Testimonial Card
```
Name: Card / Testimonial
Use: Parent stories
Dimensions: 100% on mobile, ~480px on desktop

Design:
├─ Background: #FFFFFF
├─ Border: 1px solid #E5E5E5
├─ Border-radius: 6px
├─ Padding: 28px
├─ box-shadow: 0 1px 4px rgba(0,0,0,0.06)
├─ Transition: All 200ms ease
└─ Min-height: 220px

Hover State (optional):
├─ box-shadow: 0 4px 12px rgba(0,0,0,0.08)
└─ Transform: translateY(-2px)

Content Structure:
├─ Quote: 16px italic, #1A1A1A, line-height: 1.7
│         margin-bottom: 16px
├─ Author: 14px semi-bold, #333333
├─ Role/Relation: 13px regular, #888888
│                margin-top: 4px
└─ Optional: Avatar image (48×48px) above quote

Note: Use consistent quote marks or quotation marks. Single or double quotes are acceptable consistently.
```

#### Stat Card
```
Name: Card / Stat
Use: Trust signals (500+ Parents, etc.)
Dimensions: 160px × 160px (square)

Design:
├─ Background: #FFFFFF
├─ Border: 1px solid #E5E5E5
├─ Border-radius: 8px
├─ Display: Flex (center, column)
├─ Padding: 20px
├─ box-shadow: 0 1px 3px rgba(0,0,0,0.04)
└─ Transition: All 200ms ease

Content Structure:
├─ Icon (optional): 40×40px, #4F8F7F, margin-bottom: 12px
├─ Number: 32–40px, bold, #1A1A1A, line-height: 1
├─ Label: 13px regular, #666666, margin-top: 8px, centered

Hover State:
├─ box-shadow: 0 4px 12px rgba(0,0,0,0.08)
├─ Transform: scale(1.02)
└─ Border-color: #4F8F7F
```

---

### 3. FORMS

#### Input Field
```
Name: Input / Text
Use: Forms, search, etc.
States: Default, Focus, Filled, Error, Disabled

Design:
├─ Background: #FFFFFF
├─ Border: 1px solid #D5D5D5
├─ Border-radius: 6px
├─ Padding: 12px 16px
├─ Font: 15px regular, #555555
├─ Line-height: 1.5
├─ Transition: All 200ms ease
└─ Min-height: 44px (touch-friendly)

Focus State:
├─ Border-color: #4F8F7F
├─ box-shadow: 0 0 0 3px rgba(79, 143, 127, 0.1)
├─ Outline: None
└─ Background: #FFFFFF

Filled State:
├─ Background: #FFFFFF
└─ Border-color: #4F8F7F

Error State:
├─ Border-color: #D9534F (red)
├─ box-shadow: 0 0 0 3px rgba(217, 83, 79, 0.1)
└─ Error message: 12px regular, #D9534F, margin-top: 4px

Disabled State:
├─ Background: #F5F5F5
├─ Border-color: #E5E5E5
├─ Text-color: #AAAAAA
├─ Cursor: not-allowed
└─ Opacity: 0.6

Placeholder Text:
├─ Color: #AAAAAA
├─ Font-style: Regular (not italic)
└─ Font-size: 15px
```

#### Form Label
```
Name: Label
Use: All form fields

Design:
├─ Font: 14px semi-bold, #1A1A1A
├─ Margin-bottom: 8px
├─ Display: Block
└─ Cursor: pointer (when associated with input)

Required Indicator (if applicable):
├─ Color: #D9534F
├─ Text: " *" (space before asterisk)
└─ Font-weight: Bold
```

#### Form Checkbox
```
Name: Checkbox
Use: Options, agreements

Design:
├─ Size: 18×18px
├─ Border: 2px solid #D5D5D5
├─ Border-radius: 3px
├─ Background: White
├─ Transition: All 200ms ease
└─ Cursor: pointer

Checked State:
├─ Background: #4F8F7F
├─ Border-color: #4F8F7F
├─ Checkmark: #FFFFFF, 12px, centered

Focus State:
├─ box-shadow: 0 0 0 3px rgba(79, 143, 127, 0.2)
└─ Outline: None

Label (next to checkbox):
├─ Font: 14px regular, #555555
├─ Margin-left: 8px
└─ Vertical-align: Center
```

---

### 4. TABLES

#### Comparison Table
```
Name: Table / Comparison
Use: Traditional vs Thinking Lab

Design:
├─ Width: 100%
├─ Border-collapse: collapse
├─ Background: #FFFFFF
└─ Border: 1px solid #E5E5E5 on all cells

Header Row:
├─ Background: #1A1A1A (dark)
├─ Color: #FFFFFF (white text)
├─ Font: 15px semi-bold
├─ Padding: 16px 20px
├─ Border-bottom: 2px solid #1A1A1A
└─ Text-align: Left

Body Rows (alternating):
├─ Row 1 (even): Background #FFFFFF
├─ Row 2 (odd): Background #F8FBFA (light sage)
├─ Font: 15px regular, #555555
├─ Padding: 20px
├─ Border: 1px solid #E5E5E5
├─ Vertical-align: Top
└─ Line-height: 1.6

Hover Row (optional):
├─ Background: rgba(79, 143, 127, 0.05)
└─ Transition: 200ms ease

Cell Spacing:
├─ Padding: 20px (consistent)
├─ Column 1 (label): 40% width
└─ Column 2 (content): 60% width
```

---

### 5. ACCORDION (FAQ)

#### Accordion Item
```
Name: Accordion / FAQ
Use: Common questions

Design:
├─ Background: #FFFFFF
├─ Border: 1px solid #E5E5E5
├─ Border-radius: 6px
├─ Margin-bottom: 12px
└─ Overflow: Hidden

Header (Trigger):
├─ Background: #F9F9F9 (light)
├─ Padding: 16px 20px
├─ Font: 15px semi-bold, #1A1A1A
├─ Cursor: pointer
├─ Display: Flex (space-between, items-center)
├─ Transition: All 200ms ease
└─ User-select: None

Arrow Icon:
├─ Size: 20×20px
├─ Color: #4F8F7F
├─ Rotation: 0deg (closed) → 180deg (open)
├─ Transition: 300ms ease
└─ Alignment: Right, center

Header Hover:
├─ Background: #F0F0F0
└─ Text-color: #4F8F7F

Header Active/Expanded:
├─ Background: #F5F8F7
├─ Text-color: #4F8F7F
├─ Arrow: Rotated 180deg
└─ Box-shadow: Inset light shadow (optional)

Body (Content):
├─ Background: #FFFFFF
├─ Padding: 20px
├─ Font: 15px regular, #555555
├─ Line-height: 1.6
├─ Max-height: 0 (collapsed) → auto (expanded)
├─ Overflow: Hidden
├─ Transition: max-height 300ms ease, opacity 200ms ease
│           padding 300ms ease
└─ Border-top: 1px solid #E5E5E5
```

---

### 6. NAVIGATION / HEADER

#### Main Navigation Bar
```
Name: Header / Navigation
Use: Site-wide header

Design:
├─ Position: Sticky (top)
├─ Background: #FFFFFF
├─ Border-bottom: 1px solid #E5E5E5
├─ Height: 70px (desktop), 60px (mobile)
├─ Padding: 0 40px (desktop), 0 20px (mobile)
├─ Display: Flex (justify-content: space-between, align-items: center)
├─ z-index: 100
└─ box-shadow: 0 2px 4px rgba(0,0,0,0.04) [on scroll]

Logo/Brand:
├─ Font: 18px bold, #1A1A1A
├─ Margin-right: auto
└─ Cursor: pointer

Nav Links:
├─ Font: 15px regular, #555555
├─ Margin: 0 24px (desktop)
├─ Cursor: pointer
├─ Transition: color 200ms ease
└─ Hover: color #4F8F7F, text-decoration underline

CTA Button (Desktop):
├─ Position: Right-aligned
├─ Style: Primary button (small)
└─ Padding: 12px 28px
```

#### Mobile Navigation (Hamburger)
```
Name: Header / Mobile Nav
Use: Mobile screens (<768px)

Hamburger Icon:
├─ Size: 24×24px
├─ Color: #1A1A1A
├─ Cursor: pointer
├─ Position: Right-aligned
└─ Display: None on desktop

Mobile Menu:
├─ Position: Fixed, full-screen or slide-in
├─ Background: #FFFFFF
├─ z-index: 1000 (above all)
├─ Animation: Slide from right (300ms ease)
├─ Close button: Top-right (X icon)
└─ Content:
   ├─ Links: Full-width, 16px padding, 48px height (touch)
   ├─ Link hover: Background #F5F5F5
   ├─ CTA button: Full-width, bottom of menu
   └─ Font: 16px regular, #555555
```

---

### 7. TYPOGRAPHY COMPONENTS

#### Heading Hierarchy
```
H1 (Hero Title)
├─ Font-size: 48–56px (desktop), 32–36px (mobile)
├─ Font-weight: Bold (700)
├─ Font-family: Poppins, Inter (sans-serif or serif blend)
├─ Color: #1A1A1A
├─ Line-height: 1.2
├─ Margin-bottom: 16px
└─ Letter-spacing: -0.5px (optional for headings)

H2 (Section Title)
├─ Font-size: 32–36px (desktop), 24–28px (mobile)
├─ Font-weight: Bold (700)
├─ Color: #1A1A1A
├─ Line-height: 1.3
├─ Margin-bottom: 24px
└─ Letter-spacing: -0.3px (optional)

H3 (Card Title)
├─ Font-size: 18–20px
├─ Font-weight: Semi-bold (600)
├─ Color: #1A1A1A
├─ Line-height: 1.4
├─ Margin-bottom: 12px
└─ Letter-spacing: 0

Body Text (Paragraph)
├─ Font-size: 15–16px
├─ Font-weight: Regular (400)
├─ Color: #555555
├─ Line-height: 1.6–1.8
└─ Margin-bottom: 16px

Small Text (Captions, Labels)
├─ Font-size: 13–14px
├─ Font-weight: Regular (400)
├─ Color: #888888
├─ Line-height: 1.5
└─ Letter-spacing: 0.3px (optional)

Bold/Strong
├─ Font-weight: Semi-bold (600)
├─ Color: Inherit or #1A1A1A
└─ No color change unless emphasis needed

Italic/Emphasis
├─ Font-style: Italic
├─ Color: Inherit
└─ Used for quotes, attributions

Link (within text)
├─ Color: #4F8F7F
├─ Text-decoration: None (default)
├─ Border-bottom: 1px solid transparent
├─ Transition: All 200ms ease
└─ Hover: text-decoration underline, border-bottom-color #4F8F7F
```

---

### 8. ICONS

#### Icon Specifications
```
Name: Icon Library
Use: Feature callouts, buttons, arrows

General Rules:
├─ Style: Line-drawn, minimalist
├─ Stroke-width: 2–2.5px (consistent)
├─ Fill: None (stroke only)
├─ Viewbox: 64×64px (or 48×48px)
├─ Colors: 
│  ├─ Primary: #4F8F7F (sage)
│  ├─ Dark: #1A1A1A (dark usage)
│  ├─ Light: #CCCCCC (disabled)
│  └─ White: #FFFFFF (on dark backgrounds)
├─ Sizes:
│  ├─ Extra Small: 20×20px (inline, small buttons)
│  ├─ Small: 32×32px (button icons)
│  ├─ Medium: 48×48px (section icons)
│  ├─ Large: 64×64px (feature callouts)
│  └─ Extra Large: 80×80px (hero/landing accents)
└─ Padding: 4–6px internal padding for breathing room

Icon Set Needed:
├─ Eye (observation)
├─ Compass (approach/direction)
├─ Growth chart (resilience/progress)
├─ Lightbulb (insight/idea)
├─ Checkmark (confirmation)
├─ Arrow right (forward/next)
├─ Arrow down (expand/scroll)
└─ Close/X (dismiss/close)

Usage Guidelines:
├─ Always pair with label text (for accessibility)
├─ Don't use color alone to convey meaning
├─ Maintain consistent stroke weight across set
├─ Ensure 48×48px minimum clickable area for interactive icons
└─ Test at all sizes before finalizing
```

---

### 9. SPACING SYSTEM

```
Spacing Scale (Base: 8px):
├─ 4px (micro-spacing, internal padding)
├─ 8px (XS)
├─ 12px (S — small gaps)
├─ 16px (M — standard gaps)
├─ 20px (L — card padding)
├─ 24px (XL — common padding)
├─ 32px (XXL — card padding)
├─ 40px (XXXL)
├─ 48px (section spacing)
├─ 64px (large section spacing)
└─ 80px (hero/full-width spacing)

Common Applications:
├─ Button padding: 16px 40px (vertical × horizontal)
├─ Card padding: 24–32px
├─ Section gap: 32–64px (top/bottom)
├─ Grid gap: 24–32px
├─ Line-height: 
│  ├─ Headings: 1.2–1.3
│  ├─ Body: 1.6–1.8
│  └─ Captions: 1.5
└─ Letter-spacing:
   ├─ Headings: -0.3px to -0.5px
   └─ Body: 0 (normal)
```

---

### 10. SHADOWS & DEPTH

```
Shadow Scale:

Elevation 1 (Subtle):
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06)
Use: Hover on small elements, dividers

Elevation 2 (Light):
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08)
Use: Default card state, button default

Elevation 3 (Medium):
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.10)
Use: Hovered cards, floating elements

Elevation 4 (Strong):
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12)
Use: Hovered buttons, modals, dropdowns

Elevation 5 (Heavy):
box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15)
Use: Modals, popovers, expanded sections

Focus Ring (for accessibility):
box-shadow: 0 0 0 3px rgba(79, 143, 127, 0.2)
Use: Keyboard focus on interactive elements
```

---

### 11. TRANSITIONS & ANIMATIONS

```
Standard Easing Functions:
├─ Ease (default): cubic-bezier(0.25, 0.46, 0.45, 0.94)
├─ Ease-in: cubic-bezier(0.42, 0, 1, 1)
├─ Ease-out: cubic-bezier(0, 0, 0.58, 1)
├─ Ease-in-out: cubic-bezier(0.42, 0, 0.58, 1)
└─ Linear: cubic-bezier(0, 0, 1, 1)

Duration Guidelines:
├─ Micro-interactions (color, hover): 150–200ms
├─ Medium interactions (slide, fade): 300–400ms
├─ Major transitions (page load, reveal): 500–800ms
└─ Animations (loading, counting): 1000–2000ms

Common Transitions:
├─ Color changes: All 200ms ease
├─ Shadow changes: All 200ms ease
├─ Transform (hover): All 200ms ease
├─ Size changes: All 300ms ease
├─ Opacity (fade): All 200–300ms ease
├─ Slide (direction): All 300ms ease
└─ Expand/collapse: max-height 300ms ease, opacity 200ms ease

Recommended Animation Examples:

Hover Button:
```
transition: all 200ms ease;
&:hover {
  transform: translateY(-1px);
  box-shadow: [elevation-4];
}
```

Fade In On Scroll:
```
opacity: 0;
animation: fadeIn 600ms ease-out forwards;
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

Stat Counter:
```
animation: countUp 1500ms ease-out forwards;
@keyframes countUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```
```

---

## 🎨 COLOR USAGE GUIDE

### Primary Brand Colors
| Color | Hex | Usage | Notes |
|-------|-----|-------|-------|
| **Sage Green** | #4F8F7F | CTAs, highlights, hover states | Main brand color |
| **Dark Sage** | #3D6B65 | Button hover, active states | Darker variant |
| **Light Sage** | #F0F4F3 | Section backgrounds, accents | Very light tint |

### Neutral Colors
| Color | Hex | Usage | Notes |
|-------|-----|-------|-------|
| **Dark Text** | #1A1A1A | Headlines, primary text | High contrast |
| **Body Text** | #555555 | Paragraph text, descriptions | Readable but softer |
| **Light Gray** | #888888 | Secondary text, captions | Less emphasis |
| **Border Gray** | #D5D5D5 | Borders, dividers | Subtle separation |
| **Light BG** | #F9F9F9 | Section backgrounds | Very subtle |
| **Dark BG** | #2A2A2A | Footer, dark sections | High contrast |

### Semantic/Status Colors
| Color | Hex | Usage | Notes |
|-------|-----|-------|-------|
| **Error** | #D9534F | Form errors, alerts | Red tint |
| **Success** | #5CB85C | Confirmations, success states | Green tint |
| **Warning** | #F0AD4E | Warnings, cautions | Orange tint |
| **Info** | #5BC0DE | Information, tips | Blue tint |

### Color Combinations (Accessible)
```
✓ Dark Text (#1A1A1A) on White (#FFFFFF) — 16.5:1 contrast
✓ Dark Text (#1A1A1A) on Light Bg (#F9F9F9) — 14.8:1 contrast
✓ Body Text (#555555) on White (#FFFFFF) — 8.5:1 contrast
✓ Sage Green (#4F8F7F) on White (#FFFFFF) for links — 6.3:1 contrast
✓ White text on Sage Green (#4F8F7F) — 5.5:1 contrast (acceptable for large text)
✗ Light Gray (#888888) on White — 4.8:1 contrast (use only for labels, not critical text)
```

---

## 📐 LAYOUT GRID

### Desktop Grid (1200px base)
```
Container: max-width: 1200px, margin: 0 auto
Padding: 40px (sides)
Columns: 12-column grid
Column-gap: 24px
Row gap: 40–64px (section spacing)
```

### Tablet Grid (768px)
```
Container: max-width: 100%, padding: 24px
Columns: 12-column grid (collapses to 6-column for some)
Column-gap: 20px
Row gap: 32px–48px
```

### Mobile Grid (480px)
```
Container: max-width: 100%, padding: 16px
Columns: Single column (100% width)
Column-gap: N/A
Row gap: 24px–32px
```

---

## 🎯 BREAKPOINTS & MEDIA QUERIES

```css
/* Desktop-first approach */

/* Extra Large (1400px and up) */
@media (min-width: 1400px) {
  /* Larger spacing, expanded content areas */
}

/* Large (1200px and up) — DEFAULT */
/* All designs above use this as base */

/* Medium (768px to 1199px) — TABLET */
@media (max-width: 1199px) {
  font-sizes: Reduce by 5–10%
  padding: Reduce by 10–20%
  layout: 2-3 columns instead of 4+
}

/* Small (481px to 767px) — MOBILE/TABLET */
@media (max-width: 767px) {
  font-sizes: Reduce by 10–20%
  padding: Reduce by 20–30%
  layout: Single column
  touch-targets: Minimum 48×48px
}

/* Extra Small (480px and below) — MOBILE */
@media (max-width: 480px) {
  font-sizes: Reduce by 15–25%
  padding: Minimal (12–16px)
  layout: Full-width single column
  margins: Tight (4–8px overrides)
  buttons: Full-width CTAs
}
```

---

## ✅ ACCESSIBILITY REQUIREMENTS

### Color Contrast
- **Normal text**: 4.5:1 minimum (WCAG AA)
- **Large text** (18px+, 14px+ bold): 3:1 minimum
- **Graphics/UI**: 3:1 minimum
- **Test**: Use tools like WebAIM Contrast Checker

### Touch Targets
- **Minimum size**: 44×44px (mobile), 48×48px (recommended)
- **Spacing**: 8px minimum between targets
- **Hit area**: Include padding in calculation

### Focus States
- **Visible focus indicator**: 2–3px outline or ring
- **Color**: Not color alone (use outline + color)
- **Code**: Use `:focus-visible` (not `:focus` which affects all interactions)

### Keyboard Navigation
- **Tab order**: Logical, left-to-right, top-to-bottom
- **Skip links**: Allow skipping nav, jumping to content
- **Escape key**: Close modals, menus
- **Enter/Space**: Activate buttons, accordions

### ARIA & Semantic HTML
```
Use proper semantic tags:
- <header>, <nav>, <main>, <section>, <footer>
- <button> for buttons (not <div> or <a>)
- <label> associated with <input>
- <h1>–<h6> for heading hierarchy

Add ARIA only when needed:
- aria-label: Label interactive elements
- aria-expanded: State of accordions, toggles
- aria-hidden="true": Hide decorative elements
- aria-live: Announce dynamic content
```

### Images
- **Alt text**: Descriptive, concise (under 125 characters)
- **Decorative images**: `alt=""` (empty alt)
- **Linked images**: Include purpose in alt

### Form Accessibility
- **Labels**: Always use `<label>` associated with inputs
- **Error messages**: Linked to inputs via `aria-describedby`
- **Required fields**: Marked with `aria-required="true"`

---

## 📋 DESIGN QA CHECKLIST

### Colors
- [ ] All text meets 4.5:1 contrast (except decorative)
- [ ] No information conveyed by color alone
- [ ] Color palette tested with colorblindness simulators

### Typography
- [ ] Font sizes are readable (min 14px for body)
- [ ] Line heights are comfortable (1.5–1.8)
- [ ] Heading hierarchy is correct and semantic
- [ ] Font weights are consistent

### Spacing
- [ ] Consistent use of spacing scale
- [ ] Padding matches design system
- [ ] Margins are predictable
- [ ] Gaps between elements are intentional

### Components
- [ ] All buttons have hover, active, disabled states
- [ ] Form inputs have focus states
- [ ] Accordions reveal/collapse smoothly
- [ ] Cards have shadow elevation

### Interactions
- [ ] Transitions are smooth (200–300ms standard)
- [ ] Hover states are clear
- [ ] No flickering or jank
- [ ] Load animations are subtle

### Responsiveness
- [ ] Layout tested at 320px, 480px, 768px, 1200px
- [ ] Touch targets are 48×48px minimum
- [ ] Text is readable on mobile
- [ ] Horizontal scrolling is avoided

### Accessibility
- [ ] All form fields have labels
- [ ] Focus states are visible
- [ ] Keyboard navigation works
- [ ] Images have alt text
- [ ] ARIA roles used appropriately
- [ ] Color contrast passed

### Performance
- [ ] No layout shifts (CLS)
- [ ] Images are optimized & lazy-loaded
- [ ] Animations don't block interactions
- [ ] No unnecessary animations on mobile

---

## 💻 CSS VARIABLES TEMPLATE

```css
/* Colors */
--color-primary: #4F8F7F;
--color-primary-hover: #3D6B65;
--color-primary-active: #2F5551;
--color-dark-text: #1A1A1A;
--color-body-text: #555555;
--color-light-text: #888888;
--color-border: #D5D5D5;
--color-bg-light: #F9F9F9;
--color-bg-sage: #F0F4F3;
--color-bg-dark: #2A2A2A;
--color-error: #D9534F;
--color-success: #5CB85C;

/* Typography */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-serif: 'Poppins', serif; /* If using for headings */
--font-size-h1: 56px;
--font-size-h2: 36px;
--font-size-h3: 20px;
--font-size-body: 16px;
--font-size-small: 14px;
--font-weight-regular: 400;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--line-height-headings: 1.2;
--line-height-body: 1.6;

/* Spacing */
--spacing-xs: 8px;
--spacing-sm: 12px;
--spacing-base: 16px;
--spacing-md: 20px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-xxl: 40px;
--spacing-xxxl: 64px;

/* Border & Radius */
--border-radius-sm: 3px;
--border-radius-md: 6px;
--border-radius-lg: 8px;
--border-width: 1px;

/* Shadows */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
--shadow-md: 0 2px 4px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 4px 8px rgba(0, 0, 0, 0.10);
--shadow-xl: 0 8px 16px rgba(0, 0, 0, 0.12);
--shadow-xxl: 0 16px 32px rgba(0, 0, 0, 0.15);

/* Transitions */
--transition-quick: 150ms ease;
--transition-base: 200ms ease;
--transition-medium: 300ms ease;
--transition-slow: 500ms ease;

/* Breakpoints */
--bp-mobile: 480px;
--bp-tablet: 768px;
--bp-desktop: 1200px;
```

---

## 🚀 IMPLEMENTATION PRIORITY

1. **Phase 1 (Foundation)**
   - [ ] CSS variables & utility classes
   - [ ] Typography system
   - [ ] Color system
   - [ ] Button component

2. **Phase 2 (Core Components)**
   - [ ] Card variants
   - [ ] Form components
   - [ ] Navigation/Header
   - [ ] Footer

3. **Phase 3 (Complex)**
   - [ ] Accordion/FAQ
   - [ ] Comparison table
   - [ ] Testimonial carousel
   - [ ] Hero section

4. **Phase 4 (Refinement)**
   - [ ] Animations & transitions
   - [ ] Accessibility audit
   - [ ] Performance optimization
   - [ ] Cross-browser testing

