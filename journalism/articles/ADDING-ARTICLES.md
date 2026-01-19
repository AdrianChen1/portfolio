# Adding New Articles - Quick Guide

This guide explains how to add new articles to your portfolio website.

## Method 1: Manual HTML Creation (Current Method)

### Step 1: Create the Article HTML File

1. Navigate to `journalism/articles/`
2. Copy `the-drums-echo.html` as a template
3. Rename it to your article title (e.g., `my-new-article.html`)
4. Edit the content:
   - Update the `<title>` and meta tags
   - Change the article title, subtitle, and metadata
   - Replace the article content in the `<article class="article-content">` section

### Step 2: Add to Articles List

1. Open `journalism/articles/index.html`
2. Find the articles list section
3. Copy an existing article card
4. Update:
   - Link href
   - Image src
   - Title, description, date, and read time

### Step 3: Add Article Image

1. Place your featured image in `images/articles/`
2. Name it descriptively (e.g., `my-new-article-hero.jpg`)
3. Optimize it (under 500KB, 1200x600px recommended)

## Method 2: Markdown Workflow (Optional - For Future)

### Creating Markdown Articles

1. Create a new file in `journalism/articles/content/`
2. Name it: `article-name.md`
3. Use this template:

```markdown
---
title: "Your Article Title"
description: "A brief 1-2 sentence description for previews."
author: "Adrian Chen"
date: "2026-01-18"
readTime: "5 min"
featured: false
featuredImage: "/images/articles/your-article.jpg"
tags: ["tag1", "tag2", "tag3"]
---

# Your Article Title

Your introduction paragraph starts here...

## First Section

Content for your first section...

> "This is a blockquote for important quotes."

### Subsection

More content here...

## Second Section

Continue your article...

- Bullet point one
- Bullet point two
- Bullet point three

![Image description](/images/articles/your-image.jpg)
*Optional caption for the image*

## Conclusion

Your concluding thoughts...
```

### Converting Markdown to HTML

Currently, you need to manually create HTML from markdown. In the future, you could:

1. Use a static site generator (Jekyll, Hugo, 11ty)
2. Create a Node.js script to convert markdown to HTML
3. Use the included `markdown-parser.js` (requires additional setup)

## Article Writing Tips

### Structure
- **Hook:** Start with a compelling opening
- **Context:** Provide background information
- **Body:** Develop your main points with evidence
- **Conclusion:** Tie everything together
- **Bio:** Include a brief author note at the end

### Length
- Short articles: 500-800 words (3-5 min read)
- Medium articles: 800-1500 words (5-8 min read)
- Long-form: 1500+ words (10+ min read)

### Images
- Featured image (required): 1200x600px
- In-article images (optional): 800-1000px wide
- Always include alt text for accessibility

### SEO
- Use descriptive titles (50-60 characters)
- Write compelling descriptions (150-160 characters)
- Include relevant keywords naturally
- Add proper heading hierarchy (H2, H3)

## Checklist for New Articles

- [ ] Article HTML file created
- [ ] Featured image added and optimized
- [ ] Added to articles index page
- [ ] Title and meta tags updated
- [ ] Date and read time accurate
- [ ] Proofread for spelling/grammar
- [ ] All links work correctly
- [ ] Images have alt text
- [ ] Tested on mobile and desktop
- [ ] Related articles linked (optional)

## Example Workflow

1. **Write** your article in Google Docs or similar
2. **Edit** and proofread thoroughly
3. **Create** featured image or select from your photos
4. **Copy** the HTML template
5. **Paste** your content into the template
6. **Format** with proper HTML tags (p, h2, h3, blockquote, etc.)
7. **Add** to the articles index
8. **Test** in your browser
9. **Commit** changes to Git
10. **Push** to GitHub for deployment

## Quick Reference: HTML Tags

```html
<!-- Paragraph -->
<p>Your text here</p>

<!-- Heading 2 -->
<h2>Section Title</h2>

<!-- Heading 3 -->
<h3>Subsection Title</h3>

<!-- Blockquote -->
<blockquote>
  "Your quote here"
  <br><br>
  — Attribution
</blockquote>

<!-- Unordered List -->
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>

<!-- Image -->
<img src="../../images/articles/your-image.jpg" alt="Description">

<!-- Link -->
<a href="other-article.html">Link text</a>

<!-- Emphasis -->
<em>Italic text</em>
<strong>Bold text</strong>
```

## Need Help?

- Review existing articles as examples
- Check the HTML structure in `the-drums-echo.html`
- Test changes locally before deploying
- Keep backups of your work

---

*Last updated: January 18, 2026*
