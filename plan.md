# Portfolio Website Development Plan

> **Project Owner:** Adrian Chen  
> **Target Launch:** Q1-Q2 2026 (Flexible)  
> **Deployment:** GitHub Pages  
> **Tech Stack:** HTML, CSS, JavaScript (Vanilla)

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Site Architecture](#site-architecture)
3. [Design Specifications](#design-specifications)
4. [Technical Implementation](#technical-implementation)
5. [Page Breakdown](#page-breakdown)
6. [Content Management System](#content-management-system)
7. [Development Phases](#development-phases)
8. [File Structure](#file-structure)
9. [SEO Strategy](#seo-strategy)
10. [Deployment Guide](#deployment-guide)
11. [Future Maintenance](#future-maintenance)

---

## 🎯 Project Overview

### Purpose
Create a professional, minimal portfolio website to showcase:
- **Photography** work
- **Journalism** articles and writing
- **Long-term projects** (including Fife and Drum Corps involvement)
- **Personal brand** as a well-rounded student with passion for revolutionary/historical ideals

### Target Audience
| Audience | Goal |
|----------|------|
| College Admissions | Demonstrate passion, creativity, and depth |
| Potential Employers | Showcase professional work and capabilities |
| Professors | Display academic and creative accomplishments |

### Desired Visitor Experience
- Feel **inspired** by the work presented
- Recognize Adrian as a **well-rounded individual**
- Understand the connection between **historical ideals** and **modern creativity**
- Easy navigation to explore different facets of work

### Design Inspiration
- **Primary Reference:** [Teo Crawford Photography](https://www.teocrawford.com/)
- **Style Keywords:** Minimal, Professional, Smooth, Concise, Immersive

---

## 🏗️ Site Architecture

### Navigation Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                      TOP NAVIGATION BAR                         │
├─────────┬─────────┬─────────────────┬──────────┬───────────────┤
│  HOME   │  ABOUT  │   JOURNALISM ▼  │ PHOTOGRAPHY │  PROJECTS  │
│         │         │    └─ Articles  │             │             │
└─────────┴─────────┴─────────────────┴─────────────┴─────────────┘
```

### Page Hierarchy

```
├── Home (Landing Page)
│   ├── Hero Section (Immersive, full-viewport)
│   ├── Introduction/Tagline
│   ├── Featured Work Preview
│   └── Call-to-Action
│
├── About
│   ├── Personal Bio
│   ├── Fife and Drum Corps Story
│   ├── Philosophy/Values
│   └── Contact Information
│
├── Journalism
│   ├── Overview/Introduction
│   └── Articles (Subpage)
│       ├── Article List/Grid
│       └── Individual Article Pages
│
├── Photography
│   ├── Gallery Overview
│   ├── Project Collections
│   └── Individual Photo Pages (optional)
│
└── Projects
    ├── Long-term Projects Overview
    ├── Fife and Drum Corps
    └── Other Ongoing Work
```

---

## 🎨 Design Specifications

### Color Palette (Minimal & Professional)

```css
/* Primary Colors */
--color-background: #FFFFFF;        /* Clean white background */
--color-background-alt: #F8F8F8;    /* Subtle off-white for sections */
--color-text-primary: #1A1A1A;      /* Near-black for main text */
--color-text-secondary: #666666;    /* Gray for secondary text */
--color-accent: #2C2C2C;            /* Dark accent for highlights */

/* Interactive States */
--color-hover: #000000;             /* Pure black for hover states */
--color-border: #E5E5E5;            /* Light gray borders */
--color-overlay: rgba(0,0,0,0.7);   /* Dark overlay for images */
```

### Typography

```css
/* Font Stack - Clean & Professional */
--font-heading: 'Inter', 'Helvetica Neue', sans-serif;
--font-body: 'Inter', 'Helvetica Neue', sans-serif;
--font-accent: 'Playfair Display', Georgia, serif; /* Optional for article titles */

/* Font Sizes (Responsive) */
--size-h1: clamp(2.5rem, 5vw, 4rem);
--size-h2: clamp(1.75rem, 3vw, 2.5rem);
--size-h3: clamp(1.25rem, 2vw, 1.5rem);
--size-body: clamp(1rem, 1.5vw, 1.125rem);
--size-small: 0.875rem;

/* Line Heights */
--line-height-heading: 1.2;
--line-height-body: 1.6;
```

### Spacing System

```css
/* Consistent spacing using 8px grid */
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 2rem;     /* 32px */
--space-lg: 4rem;     /* 64px */
--space-xl: 8rem;     /* 128px */

/* Section Padding */
--section-padding: clamp(4rem, 10vw, 8rem);
```

### Animation Specifications

```css
/* Scroll Reveal Animation */
--animation-duration: 0.8s;
--animation-timing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--animation-delay-increment: 0.1s;

/* Hover Transitions */
--transition-fast: 0.2s ease;
--transition-medium: 0.3s ease;
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 576px;   /* Small phones → Large phones */
--breakpoint-md: 768px;   /* Phones → Tablets */
--breakpoint-lg: 992px;   /* Tablets → Laptops */
--breakpoint-xl: 1200px;  /* Laptops → Desktops */
--breakpoint-xxl: 1400px; /* Large desktops */
```

---

## 💻 Technical Implementation

### Core Technologies

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure |
| CSS3 | Styling, animations, responsive design |
| Vanilla JavaScript | Scroll animations, navigation, dynamic content |
| Markdown | Article content authoring |
| GitHub Pages | Hosting and deployment |

### Key Features to Implement

#### 1. Scroll-Based Reveal Animations
```javascript
// Intersection Observer API for smooth text appearance
// Elements fade in and slide up as user scrolls
// Staggered animations for grouped elements
```

#### 2. Responsive Navigation
- Desktop: Horizontal navigation bar with dropdown for Journalism → Articles
- Mobile: Hamburger menu with slide-out navigation
- Sticky navigation on scroll (appears after hero section)

#### 3. Markdown Article System
- Articles written in `.md` files with YAML frontmatter
- Simple JavaScript parser converts MD to HTML
- Metadata support: title, description, author, date, tags, featured image

#### 4. Image Optimization Strategy
- Lazy loading for images
- Responsive images with `srcset`
- WebP format with fallbacks
- Placeholder blur effect while loading

---

## 📄 Page Breakdown

### 1. Home Page (index.html)

#### Hero Section
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    [Full-viewport Hero]                     │
│                                                             │
│                      ADRIAN CHEN                            │
│            Photographer · Journalist · Storyteller          │
│                                                             │
│                    [Scroll Indicator ↓]                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Content Sections (with scroll animations)
1. **Introduction** - Brief personal statement
2. **Featured Work** - Grid of 3-4 highlighted pieces
3. **Disciplines** - Visual cards for Photography, Journalism, Projects
4. **Call to Action** - "Explore my work" or "Get in touch"

### 2. About Page (about.html)

#### Sections
1. **Hero** - Portrait photo with name
2. **Bio** - Personal story, background, interests
3. **Fife and Drum Corps** - Dedicated section about this passion
4. **Philosophy** - Connection between historical ideals and creative work
5. **Skills/Interests** - Visual representation
6. **Contact** - Email, social links

### 3. Journalism Page (journalism.html)

#### Sections
1. **Hero** - "Journalism" title with tagline
2. **Introduction** - Philosophy on writing/journalism
3. **Featured Articles** - 2-3 highlighted pieces
4. **All Articles Link** - Button to Articles subpage

### 4. Articles Subpage (journalism/articles.html)

#### Article List Layout
```
┌─────────────────────────────────────────────────────────────┐
│  ARTICLES                                                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [Thumbnail]  Article Title                          │   │
│  │              Short description of the article...    │   │
│  │              Author · Date · 5 min read             │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [Thumbnail]  Article Title                          │   │
│  │              Short description of the article...    │   │
│  │              Author · Date · 5 min read             │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5. Individual Article Template (journalism/articles/[article-name].html)

#### Article Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Featured Image - Full Width]                              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Article Title                                              │
│  ───────────────────────────────────────────────────────    │
│  Short description/subtitle of the article                  │
│                                                             │
│  By Adrian Chen · January 18, 2026 · 5 min read            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Article body content goes here. This will be parsed        │
│  from the markdown file and rendered with proper            │
│  typography and spacing.                                    │
│                                                             │
│  Supports:                                                  │
│  - Headings (h2, h3, h4)                                   │
│  - Paragraphs with proper spacing                          │
│  - Block quotes                                            │
│  - Images with captions                                    │
│  - Lists (ordered and unordered)                           │
│  - Code blocks (if needed)                                 │
│  - Links                                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 6. Photography Page (photography.html)

#### Gallery Layout Options
- **Grid View**: Masonry-style image grid
- **Project View**: Collections grouped by project/theme

```
┌─────────────────────────────────────────────────────────────┐
│  PHOTOGRAPHY                                                │
│                                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                       │
│  │         │ │         │ │         │                       │
│  │ Project │ │ Project │ │ Project │                       │
│  │    1    │ │    2    │ │    3    │                       │
│  │         │ │         │ │         │                       │
│  └─────────┘ └─────────┘ └─────────┘                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 7. Projects Page (projects.html)

#### Sections
1. **Hero** - "Projects" title
2. **Long-term Projects Grid** - Cards for each project
3. **Individual Project Sections** - Expandable or linked pages

---

## 📝 Content Management System

### Article Markdown Template

Create articles using this template structure:

```markdown
<!-- File: journalism/articles/content/article-name.md -->

---
title: "Article Title Here"
description: "A brief 1-2 sentence description of the article that will appear in previews."
author: "Adrian Chen"
date: "2026-01-18"
readTime: "5 min"
featured: true
featuredImage: "/images/articles/article-name-hero.jpg"
tags: ["journalism", "history", "culture"]
---

# Article Title Here

Your article content starts here. Write naturally in Markdown format.

## Section Heading

Continue with your content...

> "This is a blockquote for important quotes or callouts."

### Subsection

- Bullet point one
- Bullet point two

![Image alt text](/images/articles/article-name-image1.jpg)
*Caption for the image*

Continue writing your article...
```

### How to Add a New Article

1. **Create the Markdown file:**
   ```
   journalism/articles/content/your-article-name.md
   ```

2. **Fill in the frontmatter** (metadata between `---` marks)

3. **Write your content** in Markdown below the frontmatter

4. **Add images** to `/images/articles/` folder

5. **Run the build script** (or it auto-updates if using watch mode):
   ```bash
   npm run build:articles
   ```

6. **Commit and push** to GitHub for deployment

### Photography Project Template

```markdown
<!-- File: photography/projects/project-name.md -->

---
title: "Project Name"
description: "Brief description of the photography project"
date: "2026-01-18"
location: "Location, State"
coverImage: "/images/photography/project-name/cover.jpg"
featured: true
---

## About This Project

Write about the project, its inspiration, and context.

<!-- Images are loaded from: /images/photography/project-name/ -->
```

---

## 🚀 Development Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Set up project structure and file organization
- [ ] Create CSS reset and base styles
- [ ] Implement CSS custom properties (variables)
- [ ] Build responsive navigation component
- [ ] Create reusable layout components

### Phase 2: Home Page (Week 2-3)
- [ ] Design and build hero section
- [ ] Implement scroll-based reveal animations
- [ ] Create introduction section
- [ ] Build featured work grid
- [ ] Add discipline cards
- [ ] Implement footer

### Phase 3: Core Pages (Week 3-4)
- [ ] Build About page with all sections
- [ ] Create Photography page and gallery system
- [ ] Build Projects page structure
- [ ] Implement consistent page transitions

### Phase 4: Journalism System (Week 4-5)
- [ ] Build Journalism landing page
- [ ] Create Articles list page
- [ ] Implement Markdown parsing system
- [ ] Design article template
- [ ] Create article generation script
- [ ] Test with sample articles

### Phase 5: Polish & Optimization (Week 5-6)
- [ ] Fine-tune all animations
- [ ] Optimize images and performance
- [ ] Implement SEO meta tags
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Accessibility audit

### Phase 6: Deployment (Week 6-7)
- [ ] Set up GitHub repository
- [ ] Configure GitHub Pages
- [ ] Set up custom domain (if applicable)
- [ ] Final testing on production
- [ ] Create documentation

---

## 📁 File Structure

```
portfolio/
├── index.html                      # Home page
├── about.html                      # About page
├── photography.html                # Photography page
├── projects.html                   # Projects page
│
├── journalism/
│   ├── index.html                  # Journalism landing page
│   └── articles/
│       ├── index.html              # Articles list page
│       ├── article-template.html   # Template for individual articles
│       └── content/                # Markdown article files
│           ├── article-one.md
│           ├── article-two.md
│           └── ...
│
├── photography/
│   └── projects/
│       ├── project-one.html
│       └── project-two.html
│
├── css/
│   ├── reset.css                   # CSS reset
│   ├── variables.css               # CSS custom properties
│   ├── base.css                    # Base typography & elements
│   ├── components.css              # Reusable components
│   ├── navigation.css              # Navigation styles
│   ├── animations.css              # Scroll & transition animations
│   ├── article.css                 # Article-specific styles
│   ├── gallery.css                 # Photography gallery styles
│   └── responsive.css              # Media queries
│
├── js/
│   ├── main.js                     # Main JavaScript file
│   ├── navigation.js               # Navigation functionality
│   ├── scroll-animations.js        # Intersection Observer animations
│   ├── markdown-parser.js          # Simple MD to HTML parser
│   └── gallery.js                  # Photography gallery functionality
│
├── images/
│   ├── hero/                       # Hero section images
│   ├── about/                      # About page images
│   ├── articles/                   # Article images
│   ├── photography/                # Photography images
│   │   ├── project-one/
│   │   └── project-two/
│   └── projects/                   # Project images
│
├── fonts/                          # Self-hosted fonts (optional)
│
├── scripts/
│   └── build-articles.js           # Script to generate article HTML
│
├── .gitignore
├── README.md                       # Project documentation
├── CNAME                           # Custom domain (if applicable)
└── plan.md                         # This file
```

---

## 🔍 SEO Strategy

### Meta Tags (Per Page)

```html
<!-- Essential Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Page-specific description (150-160 chars)">
<meta name="author" content="Adrian Chen">

<!-- Open Graph (Social Sharing) -->
<meta property="og:title" content="Page Title | Adrian Chen">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://yoursite.com/images/og-image.jpg">
<meta property="og:url" content="https://yoursite.com/page">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title | Adrian Chen">
<meta name="twitter:description" content="Page description">
<meta name="twitter:image" content="https://yoursite.com/images/twitter-image.jpg">

<!-- Canonical URL -->
<link rel="canonical" href="https://yoursite.com/page">
```

### SEO Checklist
- [ ] Unique, descriptive `<title>` for each page
- [ ] Meta descriptions for all pages
- [ ] Semantic HTML5 elements (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- [ ] Proper heading hierarchy (one `<h1>` per page)
- [ ] Alt text for all images
- [ ] Descriptive link text (avoid "click here")
- [ ] Fast loading times (optimize images)
- [ ] Mobile-friendly design
- [ ] XML sitemap
- [ ] robots.txt file
- [ ] Structured data (JSON-LD) for articles

### Structured Data for Articles

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Person",
    "name": "Adrian Chen"
  },
  "datePublished": "2026-01-18",
  "image": "https://yoursite.com/images/article-image.jpg",
  "publisher": {
    "@type": "Person",
    "name": "Adrian Chen"
  }
}
</script>
```

---

## 🌐 Deployment Guide

### GitHub Pages Setup

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Save

3. **Custom Domain (Optional)**
   - Add `CNAME` file with your domain
   - Configure DNS records with your domain provider:
     ```
     A     @     185.199.108.153
     A     @     185.199.109.153
     A     @     185.199.110.153
     A     @     185.199.111.153
     CNAME www   yourusername.github.io
     ```

### Deployment Workflow

```bash
# After making changes:
git add .
git commit -m "Description of changes"
git push origin main

# GitHub Pages automatically deploys from main branch
# Changes visible in ~1-2 minutes
```

---

## 🔧 Future Maintenance

### Adding New Content

#### New Article
1. Create `journalism/articles/content/new-article.md`
2. Add frontmatter and content
3. Add images to `images/articles/`
4. Run build script (if applicable)
5. Commit and push

#### New Photography Project
1. Create folder `images/photography/project-name/`
2. Add optimized images
3. Create `photography/projects/project-name.html`
4. Update photography index page
5. Commit and push

#### New Project
1. Add project to `projects.html`
2. Create dedicated page if needed
3. Add images to `images/projects/`
4. Commit and push

### Regular Maintenance Tasks
- [ ] Check all links monthly
- [ ] Update copyright year annually
- [ ] Review and refresh content quarterly
- [ ] Check analytics for popular content
- [ ] Optimize new images before adding
- [ ] Test on multiple browsers after changes

### Performance Monitoring
- Use [PageSpeed Insights](https://pagespeed.web.dev/) to monitor performance
- Aim for 90+ scores on mobile and desktop
- Monitor Core Web Vitals

---

## 📚 Resources & References

### Design Inspiration
- [Teo Crawford](https://www.teocrawford.com/) - Primary reference

### Tools
- [Squoosh](https://squoosh.app/) - Image optimization
- [Google Fonts](https://fonts.google.com/) - Typography
- [Coolors](https://coolors.co/) - Color palette generator
- [Favicon Generator](https://realfavicongenerator.net/) - Favicons

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [CSS-Tricks](https://css-tricks.com/) - CSS techniques
- [web.dev](https://web.dev/) - Performance & SEO

---

## ✅ Pre-Launch Checklist

### Content
- [ ] All pages have finalized content
- [ ] All images are optimized and have alt text
- [ ] Contact information is correct
- [ ] No placeholder or lorem ipsum text
- [ ] Spelling and grammar checked

### Technical
- [ ] All links work correctly
- [ ] Forms work (if applicable)
- [ ] Site works on Chrome, Firefox, Safari, Edge
- [ ] Site is responsive on mobile, tablet, desktop
- [ ] Images load properly
- [ ] No console errors

### SEO
- [ ] All pages have unique titles and descriptions
- [ ] Sitemap is generated
- [ ] robots.txt is in place
- [ ] Favicons are added
- [ ] Open Graph images are set

### Performance
- [ ] PageSpeed score > 90
- [ ] Images are lazy loaded
- [ ] CSS and JS are minified (production)
- [ ] No render-blocking resources

### Accessibility
- [ ] Keyboard navigation works
- [ ] Color contrast passes WCAG
- [ ] Focus states are visible
- [ ] Screen reader tested

---

*Last Updated: January 18, 2026*
