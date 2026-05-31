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
- **Position:** Fixed at top, white background with subtle shadow
- **Content:** 
  - Left: Name/logo text
  - Right: Navigation links (About, Work, Lab, Contact)
- **Behavior:** Smooth scroll to section anchors on click
- **Responsive:** Hamburger menu on mobile (< 768px)

#### Hero
- **Layout:** Centered content, full viewport height
- **Content:**
  - Large headline: "I'm a designer who turns ideas into real, working products with AI."
  - Subtitle: "交互设计师 · 前腾讯 · 用 AI 独立完成产品从 0 到 1"
  - Two CTA buttons: "Contact me" (primary, purple) + "Download CV" (secondary, outline)
- **Responsive:** Stack buttons vertically on mobile

#### Stats
- **Layout:** Three columns (stack on mobile)
- **Content:** Each stat has:
  - Large number in accent color (#6B4E9E)
  - Small gray description below
- **Data:**
  1. "3" — Products built end-to-end with AI
  2. "3.5 yrs" — Interaction design at Tencent
  3. "2" — Countries studied in · Bilingual (EN/CN)

#### About
- **Layout:** Single column, max-width container
- **Content:**
  - Section header: "About"
  - Bio paragraph (placeholder text)
  - Experience timeline (placeholder text)

#### Work
- **Layout:** Grid of 3 project cards (1 column on mobile, 3 on desktop)
- **Card Structure:**
  - Project name (bold)
  - One-line description
  - "View details →" link (placeholder, no actual detail pages yet)
- **Projects:**
  1. Genesis · A particle-evolution mini-game built with AI
  2. Auto-Sign Tool · A working document-signing utility, shipped end-to-end
  3. Ski Mini-Program · 0-to-1 product planning for a complex app

#### Lab
- **Layout:** Single column, centered
- **Content:**
  - Section header: "Lab"
  - Description: "Experiments in code and craft — including this website, built entirely with AI."

#### Contact
- **Layout:** Centered content
- **Content:**
  - Large CTA text: "Let's talk."
  - Links: Email, GitHub, LinkedIn (placeholder URLs)

#### Footer
- **Layout:** Centered, small text
- **Content:**
  - Copyright notice
  - Social links (repeat from contact)

### Animation Specification

**Scroll-Triggered Animations (Framer Motion):**
- Applied to each major section (Hero, Stats, About, Work, Lab, Contact)
- **Effect:**
  - Initial state: `opacity: 0`, `translateY: 20px`
  - Final state: `opacity: 1`, `translateY: 0`
  - Duration: 0.6s
  - Easing: ease-out
- **Trigger:** When section enters viewport (using `useInView` hook)
- **Philosophy:** Subtle, professional motion — not flashy

### Responsive Design

**Breakpoints:**
- Mobile: < 768px
- Desktop: ≥ 768px

**Mobile Adaptations:**
- Navbar: Hamburger menu
- Hero: Smaller text, stacked buttons
- Stats: Single column
- Work: Single column cards
- Reduced padding/margins throughout

### Smooth Scrolling
- Implemented via CSS: `html { scroll-behavior: smooth; }`
- Navigation links use anchor hrefs (#about, #work, etc.)

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
- Placeholder bio text
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
- Inter font loaded via Google Fonts CDN in index.html
- Applied globally via Tailwind config

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
