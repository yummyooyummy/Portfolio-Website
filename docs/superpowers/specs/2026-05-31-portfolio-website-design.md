# Portfolio Website Design Specification

**Date:** 2026-05-31  
**Project:** Personal Portfolio / Resume Website  
**Tech Stack:** React + Vite + Tailwind CSS + Framer Motion

## Overview

A minimalist, professional single-page portfolio website inspired by the design philosophy of benroachdesign.com. The site emphasizes extreme simplicity, generous whitespace, clear typographic hierarchy, and structured value narrative.

## Design Philosophy

### Visual Principles
- **Minimalism:** No decorative elements, pure content focus
- **Whitespace:** Generous spacing between sections and elements
- **Typography:** Strong hierarchy with large, bold headlines and restrained body text
- **Professional:** Clean, structured presentation suitable for design/tech professionals

### Color Palette
- **Primary:** Black (#000000) and White (#FFFFFF)
- **Secondary Gray:** #6B7280 (for secondary text)
- **Background Gray:** #F3F4F6 (for subtle section backgrounds)
- **Accent:** Deep Purple #6B4E9E (used sparingly for links, buttons, and emphasis numbers)

### Typography
- **Font Family:** Inter (via Google Fonts CDN)
- **Hierarchy:**
  - Hero headline: 3xl-6xl, bold
  - Section headers: 2xl-4xl, bold
  - Body text: base-lg, normal weight
  - Secondary text: sm-base, lighter color

## Technical Architecture

### Build System
- **Tool:** Vite
- **Framework:** React 18 (functional components + hooks)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (scroll-triggered fade-in + slide-up only)

### Project Structure
```
src/
├── App.jsx                 # Main container, imports all components
├── components/
│   ├── Navbar.jsx         # Fixed top navigation with smooth scroll
│   ├── Hero.jsx           # Hero section with headline + CTAs
│   ├── Stats.jsx          # Three big numbers with descriptions
│   ├── About.jsx          # About section with bio
│   ├── Work.jsx           # Project showcase (3 cards)
│   ├── Lab.jsx            # Lab/experiments section
│   ├── Contact.jsx        # Contact CTA with links
│   └── Footer.jsx         # Footer with copyright + social links
├── index.css              # Tailwind imports + global styles
└── main.jsx               # Entry point
```

### Component Specifications

#### Navbar
- **Position:** Fixed at top, white background with `shadow-sm`
- **Height:** 64px (h-16)
- **Content:** 
  - Left: Name/logo text "Your Name"
  - Right: Navigation links (About, Work, Lab, Contact)
- **Behavior:** 
  - Smooth scroll to section anchors on click
  - Scroll offset: -80px to account for fixed navbar height
  - Links have hover state (text color changes to accent purple)
- **Responsive:** 
  - Desktop (≥768px): Horizontal nav links
  - Mobile (<768px): Hamburger menu (three horizontal lines icon)
    - Menu opens as slide-down overlay with white background
    - Links stacked vertically with py-4 spacing
    - Menu closes automatically when link is clicked
    - Toggle animation: 0.3s ease-in-out
    - Z-index: 50

#### Hero
- **Layout:** Centered content, full viewport height (min-h-screen)
- **Content:**
  - Large headline: "I'm a designer who turns ideas into real, working products with AI."
    - Desktop: text-5xl or text-6xl, font-bold
    - Mobile: text-3xl or text-4xl, font-bold
  - Subtitle: "交互设计师 · 前腾讯 · 用 AI 独立完成产品从 0 到 1"
    - Desktop: text-xl, text-gray-600
    - Mobile: text-lg, text-gray-600
  - Two CTA buttons:
    - "Contact me" (primary): bg-purple (#6B4E9E), white text, smooth scroll to #contact section
    - "Download CV" (secondary): border-purple, purple text, downloads `/cv.pdf` (placeholder file)
    - Both buttons: px-8 py-3, rounded-lg, hover states with opacity change
- **Responsive:** 
  - Desktop: Buttons side-by-side with gap-4
  - Mobile: Stack buttons vertically with gap-3, full width

#### Stats
- **Layout:** Three columns (stack on mobile)
  - Desktop: grid-cols-3 with gap-12
  - Mobile: grid-cols-1 with gap-8
- **Spacing:** 
  - Desktop: py-20
  - Mobile: py-12
- **Content:** Each stat has:
  - Large number in accent color (#6B4E9E)
    - Desktop: text-6xl, font-bold
    - Mobile: text-5xl, font-bold
  - Small gray description below (text-gray-600, text-sm or text-base)
- **Data:**
  1. "3" — Products built end-to-end with AI
  2. "3.5 yrs" — Interaction design at Tencent
  3. "2" — Countries studied in · Bilingual (EN/CN)

#### About
- **Layout:** Single column, max-width container (max-w-3xl)
- **Spacing:**
  - Desktop: py-20
  - Mobile: py-12
- **Content:**
  - Section header: "About" (text-4xl, font-bold, mb-8)
  - Bio paragraph: "I'm a designer who believes AI is the ultimate creative tool. I use it to turn ideas into working products — from concept to code. My background spans game planning, interaction design, and hands-on development."
  - Experience section (mt-6):
    - Text: "Tencent (game planning → interaction design) · Master's in Interaction Design · studied in Canada & Australia."
    - Style: text-gray-600, text-lg
    - Format: Single paragraph with · separators

#### Work
- **Layout:** Grid of 3 project cards
  - Desktop: grid-cols-3 with gap-8
  - Mobile: grid-cols-1 with gap-6
- **Spacing:**
  - Desktop: py-20
  - Mobile: py-12
- **Card Structure:**
  - White background with border (border-gray-200)
  - Padding: p-6
  - Hover state: subtle shadow increase (hover:shadow-lg transition)
  - Project name (text-xl, font-bold, mb-2)
  - One-line description (text-gray-600, mb-4)
  - "View details →" link styled as text (text-purple, hover:underline)
    - **Behavior:** Non-functional placeholder, styled as disabled (cursor-not-allowed, opacity-50)
    - **Future:** Will link to project detail pages
- **Projects:**
  1. Genesis · A particle-evolution mini-game built with AI
  2. Auto-Sign Tool · A working document-signing utility, shipped end-to-end
  3. Ski Mini-Program · 0-to-1 product planning for a complex app

#### Lab
- **Layout:** Single column, centered, max-width container (max-w-2xl)
- **Spacing:**
  - Desktop: py-20
  - Mobile: py-12
- **Content:**
  - Section header: "Lab" (text-4xl, font-bold, mb-6)
  - Description: "Experiments in code and craft — including this website, built entirely with AI."
    - Style: text-lg, text-gray-600
- **Note:** Intentionally minimal section, serves as a statement about the site itself

#### Contact
- **Layout:** Centered content, max-width container (max-w-2xl)
- **Spacing:**
  - Desktop: py-20
  - Mobile: py-12
- **Content:**
  - Large CTA text: "Let's talk." (text-4xl or text-5xl, font-bold, mb-8)
  - Links container (flex gap-6):
    - Email: `mailto:placeholder@example.com` link
    - GitHub: `https://github.com/placeholder` (opens in new tab: `target="_blank" rel="noopener noreferrer"`)
    - LinkedIn: `https://linkedin.com/in/placeholder` (opens in new tab: `target="_blank" rel="noopener noreferrer"`)
  - Link styling: text-purple, hover:underline, text-lg

#### Footer
- **Layout:** Centered, small text
- **Spacing:** py-8, border-top (border-gray-200)
- **Content:**
  - Copyright notice: "© 2026 Your Name. Built with AI."
    - Style: text-sm, text-gray-600
  - Social links (same as Contact section, same order):
    - Email, GitHub, LinkedIn
    - Style: text-sm, text-purple, hover:underline
    - Layout: flex gap-4, mt-4
    - Same target="_blank" behavior for external links

### Animation Specification

**Scroll-Triggered Animations (Framer Motion):**
- Applied to each major section (Hero, Stats, About, Work, Lab, Contact)
- **Effect:**
  - Initial state: `opacity: 0`, `translateY: 20px`
  - Final state: `opacity: 1`, `translateY: 0`
  - Duration: 0.6s
  - Easing: ease-out
- **Trigger Configuration:**
  - Hook: `useInView` from framer-motion
  - Threshold: `0.1` (trigger when 10% of section is visible)
  - Trigger once: `true` (animation plays only once, not on every scroll)
  - Root margin: `"-50px"` (trigger slightly before section enters viewport)
- **Implementation Pattern:**
  ```jsx
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });
  ```
- **Philosophy:** Subtle, professional motion — not flashy

### Responsive Design

**Breakpoints:**
- Mobile: < 768px
- Desktop: ≥ 768px

**Mobile Adaptations:**
- Navbar: Hamburger menu (detailed in Navbar section)
- Hero: Smaller text (text-3xl vs text-6xl), stacked buttons (flex-col vs flex-row)
- Stats: Single column (grid-cols-1 vs grid-cols-3)
- Work: Single column cards (grid-cols-1 vs grid-cols-3)
- Spacing adjustments:
  - Desktop sections: py-20
  - Mobile sections: py-12
  - Desktop container padding: px-8
  - Mobile container padding: px-4

### Smooth Scrolling
- Implemented via CSS: `html { scroll-behavior: smooth; }`
- Navigation links use anchor hrefs (#about, #work, #lab, #contact)
- **Scroll offset:** CSS `scroll-padding-top: 80px;` to account for fixed navbar height (prevents content from being hidden behind navbar)

## Content (Placeholder)

All content is placeholder text provided by the user. Real content will be added later.

### Hero
- Headline: "I'm a designer who turns ideas into real, working products with AI."
- Subtitle: "交互设计师 · 前腾讯 · 用 AI 独立完成产品从 0 到 1"

### Stats
1. 3 — Products built end-to-end with AI
2. 3.5 yrs — Interaction design at Tencent
3. 2 — Countries studied in · Bilingual (EN/CN)

### About
- Placeholder bio text: "I'm a designer who believes AI is the ultimate creative tool. I use it to turn ideas into working products — from concept to code. My background spans game planning, interaction design, and hands-on development."
- Experience: "Tencent (game planning → interaction design) · Master's in Interaction Design · studied in Canada & Australia."

### Work Projects
1. Genesis · A particle-evolution mini-game built with AI
2. Auto-Sign Tool · A working document-signing utility, shipped end-to-end
3. Ski Mini-Program · 0-to-1 product planning for a complex app

### Lab
"Experiments in code and craft — including this website, built entirely with AI."

### Contact
- Email: placeholder@example.com
- GitHub: github.com/placeholder
- LinkedIn: linkedin.com/in/placeholder

## Implementation Notes

### Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "framer-motion": "^11.x",
  "tailwindcss": "^3.x"
}
```

### Font Loading
- Inter font loaded via Google Fonts CDN in index.html: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">`
- Applied globally via Tailwind config:
  ```js
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          purple: '#6B4E9E',
        },
      },
    },
  }
  ```

### HTML Meta Tags
Basic meta tags to include in index.html:
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Portfolio of [Your Name] - Designer who turns ideas into real products with AI" />
<title>Your Name - Portfolio</title>
```

### Accessibility Notes
- All interactive elements (buttons, links) have hover and focus states
- Focus states use Tailwind's `focus:ring-2 focus:ring-purple focus:outline-none`
- Mobile menu includes `aria-label="Toggle menu"` on hamburger button
- External links include `rel="noopener noreferrer"` for security
- Color contrast verified: Purple #6B4E9E on white background meets WCAG AA standards

### File Organization
- Each component is self-contained in its own file
- No shared utility files needed for this simple site
- All styling via Tailwind utility classes

### Future Extensibility
- Project detail pages can be added later (currently placeholders)
- Content can be easily swapped by editing component files
- Additional sections can be added by creating new components and importing into App.jsx

## Success Criteria

1. **Visual Quality:** Site matches the minimalist, professional aesthetic of the reference
2. **Responsiveness:** Looks good on both mobile and desktop
3. **Performance:** Fast load times, smooth animations
4. **Code Quality:** Clean component structure, easy to modify
5. **Functionality:** All navigation works, smooth scrolling, animations trigger correctly

## Out of Scope

- Project detail pages (placeholders only)
- CMS or dynamic content management
- Backend/API integration
- Contact form functionality (links only)
- Blog or additional content types
- SEO optimization beyond basic meta tags
- Analytics integration
