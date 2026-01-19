# Portfolio Website - Quick Start Guide

Welcome to your new portfolio website! This guide will help you get started with customizing and deploying your site.

## 🚀 Getting Started

### 1. View Your Website Locally

Simply open `index.html` in your web browser to view the site. All pages should work locally without a server.

### 2. Replace Placeholder Content

#### Update Personal Information

Search and replace the following across all HTML files:

- `your.email@example.com` → Your actual email
- `[Your Location]` → Your city/state
- `[Corps Name]` → Your Fife and Drum Corps name
- Social media links in footers (currently placeholders)

#### Files to Update:
- All HTML files (search for "Your" or "your.email")
- About page: Add your actual location and details
- Footer sections on every page

### 3. Add Your Images

See `images/IMAGE-GUIDE.md` for detailed instructions.

**Quick tip:** Use placeholder images initially:
- Visit https://placehold.co/800x600 for simple placeholders
- Or use https://picsum.photos/800/600 for stock photos

### 4. Customize Content

#### Home Page (`index.html`)
- Update hero title/subtitle
- Modify introduction text
- Change featured work descriptions
- Update call-to-action text

#### About Page (`about.html`)
- Write your personal bio
- Describe your Fife and Drum Corps experience
- Update skills and interests
- Add contact information

#### Photography (`photography.html`)
- Replace project descriptions
- Update image paths
- Add your own photo projects

#### Projects (`projects.html`)
- Describe your actual projects
- Update project details
- Link to related work

#### Journalism (`journalism/index.html` and articles)
- Add your writing samples
- Follow `journalism/articles/ADDING-ARTICLES.md` guide

## 🎨 Customization

### Colors

Edit `css/variables.css` to change the color scheme:

```css
:root {
  --color-background: #FFFFFF;     /* Change background color */
  --color-text-primary: #1A1A1A;   /* Change text color */
  --color-accent: #2C2C2C;         /* Change accent/button color */
}
```

### Fonts

Current fonts are Inter and Playfair Display from Google Fonts. To change:

1. Visit https://fonts.google.com/
2. Select new fonts
3. Copy the `<link>` tag
4. Replace in `css/base.css` (line 2)
5. Update font variables in `css/variables.css`

### Layout

- Spacing: Edit values in `css/variables.css` (--space-xs through --space-xl)
- Max width: Change `--max-width` in variables
- Section padding: Adjust `--section-padding`

## 📱 Testing

### Browser Testing

Test your site in:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari (especially on Mac/iOS)

### Mobile Testing

- Open site in mobile browsers
- Use browser DevTools (F12 → Toggle Device Toolbar)
- Test navigation menu on mobile
- Verify all images load properly

### Check These Items:

- [ ] All navigation links work
- [ ] Mobile menu opens and closes
- [ ] Scroll animations appear smoothly
- [ ] Images load without broken links
- [ ] Footer social links point to correct profiles
- [ ] Contact email works
- [ ] All pages are responsive

## 🌐 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

```bash
cd /Users/adrianchen/code/projects/portfolio
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

### Step 2: Push to GitHub

```bash
# Create a new repository on GitHub.com first, then:
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://YOUR-USERNAME.github.io/portfolio/`

### Step 4: Custom Domain (Optional)

1. Buy a domain from any provider
2. Add a `CNAME` file to your repository root with your domain name
3. Configure DNS records at your domain provider:
   ```
   Type: A     Name: @    Value: 185.199.108.153
   Type: A     Name: @    Value: 185.199.109.153
   Type: A     Name: @    Value: 185.199.110.153
   Type: A     Name: @    Value: 185.199.111.153
   ```

## 📝 Making Updates

### Adding New Content

1. Edit HTML files locally
2. Test changes in browser
3. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
4. Changes appear on GitHub Pages in 1-2 minutes

### Adding New Articles

Follow the detailed guide in `journalism/articles/ADDING-ARTICLES.md`

### Adding New Photos

1. Optimize images (use https://squoosh.app/)
2. Add to appropriate folder in `images/`
3. Update HTML to reference new images
4. Commit and push

## 🛠️ Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure image files are committed to Git
- Verify file extensions match (jpg vs jpeg)

### Navigation Not Working
- Check JavaScript files are loading
- Open browser console (F12) for errors
- Ensure all JS files are in `js/` folder

### Mobile Menu Not Opening
- Check `js/navigation.js` is loaded
- Verify nav-toggle class is on button
- Clear browser cache

### Animations Not Working
- Check `js/scroll-animations.js` is loaded
- Ensure elements have reveal classes
- Test in different browsers

### GitHub Pages Not Updating
- Wait 2-5 minutes after pushing
- Check GitHub Actions tab for build status
- Clear browser cache
- Try incognito/private window

## 📚 Project Structure

```
portfolio/
├── index.html              # Home page ⭐
├── about.html             # About page
├── photography.html       # Photography gallery
├── projects.html          # Projects showcase
├── css/                   # All stylesheets
│   ├── reset.css         # CSS reset
│   ├── variables.css     # Theme variables (CUSTOMIZE HERE)
│   ├── base.css          # Base styles
│   ├── navigation.css    # Navigation styles
│   ├── components.css    # Reusable components
│   ├── animations.css    # Scroll animations
│   ├── article.css       # Article styles
│   ├── gallery.css       # Gallery styles
│   └── responsive.css    # Mobile responsive
├── js/                    # JavaScript
│   ├── main.js           # Main script
│   ├── navigation.js     # Navigation functionality
│   ├── scroll-animations.js  # Scroll effects
│   ├── gallery.js        # Photo gallery
│   └── markdown-parser.js    # Article parsing (future)
├── journalism/           # Journalism section
│   ├── index.html       # Journalism landing
│   └── articles/        # Articles
│       ├── index.html   # Articles list
│       ├── the-drums-echo.html  # Sample article
│       ├── content/     # Markdown source files
│       └── ADDING-ARTICLES.md   # Guide
├── images/              # All images
│   ├── hero/           # Home page images
│   ├── about/          # About page images
│   ├── articles/       # Article images
│   ├── photography/    # Photography images
│   ├── projects/       # Project images
│   └── IMAGE-GUIDE.md  # Image guide
└── README.md           # Project overview
```

## ✨ Features

### Implemented
- ✅ Responsive navigation with mobile menu
- ✅ Smooth scroll animations
- ✅ Photography gallery with lightbox
- ✅ Article system with sample content
- ✅ SEO-optimized meta tags
- ✅ Mobile-first responsive design
- ✅ Minimal, professional aesthetic
- ✅ Easy content management

### Future Enhancements
- [ ] Contact form functionality
- [ ] Automated markdown to HTML conversion
- [ ] Image lazy loading optimization
- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Blog RSS feed
- [ ] Analytics integration

## 💡 Tips for Success

1. **Start Small:** Replace placeholders gradually
2. **Test Often:** Check changes in browser after each edit
3. **Backup:** Commit to Git regularly
4. **Optimize Images:** Keep file sizes under 500KB
5. **Get Feedback:** Share with friends/family for testing
6. **Update Regularly:** Add new content consistently
7. **Track Analytics:** Use Google Analytics to see visitor behavior

## 🆘 Getting Help

- **HTML/CSS Questions:** https://developer.mozilla.org/
- **Git Issues:** https://docs.github.com/
- **Design Inspiration:** https://www.awwwards.com/
- **Image Optimization:** https://squoosh.app/

## 📞 Checklist Before Launch

- [ ] All placeholder text replaced
- [ ] Personal information updated
- [ ] Real images added (or quality placeholders)
- [ ] Email links work
- [ ] Social media links added
- [ ] Tested on mobile devices
- [ ] Tested in multiple browsers
- [ ] All pages spell-checked
- [ ] Meta descriptions written
- [ ] Favicon added (optional)
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site loads successfully online

---

## 🎉 You're Ready!

Your portfolio website is fully functional and ready for customization. Take your time adding your actual content, and don't hesitate to experiment with the design.

Remember: This is a framework for your work. The real magic happens when you fill it with your photography, writing, and projects!

**Good luck with your portfolio, Adrian!** 📸✍️🎵

---

*Created: January 18, 2026*
