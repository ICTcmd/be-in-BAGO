# BE IN BAGO - CONTENT UPDATE GUIDE

**Quick Reference for Adding and Updating Website Content**

---

## 📝 TABLE OF CONTENTS

1. [Adding New Images](#adding-new-images)
2. [Updating Homepage Text](#updating-homepage-text)
3. [Adding Destinations](#adding-destinations)
4. [Updating Experiences](#updating-experiences)
5. [Managing Gallery](#managing-gallery)
6. [Updating Contact Information](#updating-contact-information)
7. [SEO & Social Media](#seo--social-media)

---

## 📸 ADDING NEW IMAGES

### Step 1: Prepare Your Image

**Before uploading, optimize your image:**

- **Format**: JPG (or WebP for better compression)
- **Size limits**:
  - Hero images: Max 200 KB
  - Destination images: Max 150 KB
  - Gallery images: Max 100 KB
- **Dimensions**:
  - Hero: 1920x1080px (landscape)
  - Destinations: 1200x900px (4:3 ratio)
  - Gallery: 800x800px (square) or 800x600px
- **Quality**: 80-85% compression

**Tools for optimization:**
- Online: https://squoosh.app/
- Desktop: Adobe Photoshop, GIMP
- Bulk: ImageOptim (Mac), FileOptimizer (Windows)

### Step 2: Place Image in Correct Folder

```
assets/images/
├── hero/          → Large hero section images
├── destinations/  → Destination feature photos
├── gallery/       → Gallery grid images
├── brand/         → Logos and brand assets
└── og/            → Social media sharing images
```

### Step 3: Reference in HTML or JSON

**For hero images** (`index.html`):
```html
<img src="assets/images/hero/new-hero.jpg" alt="Description" class="hero-bg">
```

**For destinations** (`assets/data/destinations.json`):
```json
"image": "assets/images/destinations/new-destination.jpg"
```

**For gallery** (`index.html`):
```html
<div class="gallery-item">
  <img src="assets/images/gallery/new-image.jpg" alt="Description">
</div>
```

---

## ✏️ UPDATING HOMEPAGE TEXT

### Discover Bago Section

**Location**: `index.html` → Line ~174

```html
<section class="section discover" id="discover">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Welcome to Bago City</h2>
      <p class="section-description">
        <!-- UPDATE THIS TEXT -->
        Your introduction text here...
      </p>
      <p class="section-description">
        <!-- SECOND PARAGRAPH -->
        Additional details here...
      </p>
    </div>
  </div>
</section>
```

### Hero Tagline

**Location**: `index.html` → Line ~150

```html
<p class="hero-tagline">
  More Than a Destination.<br>It's a Journey of the Heart.
</p>
```

⚠️ **Note**: This is the official brand line. Only change if officially updated.

### Section Titles

**Pattern to find and update**:
```html
<p class="section-subtitle">SUBTITLE</p>
<h2 class="section-title">Main Title</h2>
<p class="section-description">Description text...</p>
```

---

## 🏖️ ADDING DESTINATIONS

### Method 1: Using JSON (Recommended for Multiple Destinations)

**Edit**: `assets/data/destinations.json`

**Add new destination**:
```json
{
  "id": "sugar-cane-farms",
  "name": "Sugar Cane Heritage Farms",
  "slug": "sugar-cane-farms",
  "category": "Agriculture & Heritage",
  "shortDescription": "Explore the agricultural roots of Bago City through guided tours of historic sugar cane plantations.",
  "fullDescription": "Bago City's identity is deeply rooted in its sugar cane industry. Visit working farms where you can learn about traditional farming methods, the harvest process, and the sweet legacy that shaped our community. Seasonal tours available.",
  "image": "assets/images/destinations/sugar-farm.jpg",
  "visitorInfo": {
    "status": "confirmed",
    "schedule": "Tours by appointment",
    "note": "Best visited during harvest season (November to May)"
  },
  "tags": ["agriculture", "heritage", "tours", "educational"]
}
```

### Method 2: Adding Directly to Homepage

**Edit**: `index.html` → `.destinations-grid` section (Line ~200)

```html
<article class="destination-card">
  <img src="assets/images/destinations/YOUR-IMAGE.jpg" alt="Destination name" class="destination-img">
  <div class="destination-overlay">
    <p class="destination-category">Category</p>
    <h3 class="destination-name">Destination Name</h3>
    <p class="destination-description">
      Brief description that appears on hover...
    </p>
  </div>
</article>
```

**Categories to use**:
- Nature & Adventure
- Culture & Heritage
- Shopping & Markets
- Agriculture & Farms
- Food & Dining
- Religious & Spiritual
- Arts & Entertainment

---

## 🎨 UPDATING EXPERIENCES

**Edit**: `assets/data/experiences.json`

**Current categories**:
1. Nature & Adventure
2. Culture & Heritage
3. Food & Flavors
4. Festivals & Events
5. Community Encounters
6. Arts & Crafts

**To add specific experiences to a category**:
```json
{
  "id": "nature-adventure",
  "name": "Nature & Adventure",
  "icon": "🏞️",
  "description": "Explore lush landscapes...",
  "experiences": [
    {
      "name": "Mountain Hiking Trail",
      "description": "Scenic 3-hour hike through...",
      "image": "assets/images/experiences/hiking.jpg",
      "difficulty": "Moderate",
      "duration": "3 hours",
      "bestTime": "Early morning"
    }
  ]
}
```

**Emoji icons available**:
- 🏞️ Nature
- 🏛️ Heritage
- 🍽️ Food
- 🎉 Festivals
- ❤️ Community
- 🎨 Arts
- 🏖️ Beach/Water
- 🚶 Walking Tours
- 📸 Photography
- 🛍️ Shopping

---

## 🖼️ MANAGING GALLERY

### Adding Images to Gallery Grid

**Edit**: `index.html` → `.gallery-grid` section (Line ~325)

**Add new item**:
```html
<div class="gallery-item">
  <img src="assets/images/gallery/new-image.jpg" alt="Descriptive caption">
  <div class="gallery-item-overlay">
    <span class="text-white">View Image</span>
  </div>
</div>
```

### Gallery Best Practices:

✅ **Do**:
- Use high-quality, authentic photos
- Include diverse content (nature, people, culture, food)
- Write descriptive alt text
- Optimize images before uploading
- Maintain consistent aspect ratios where possible

❌ **Don't**:
- Use generic stock photos
- Upload images without permission
- Forget to optimize (large files slow the site)
- Use copyrighted images without authorization

### Recommended Gallery Layout:

- **8-12 images**: 2x4 grid (mobile: 2x2, show first 4)
- **12-20 images**: 4x5 grid (mobile: 2x column)
- **20+ images**: Consider creating dedicated gallery page

---

## 📞 UPDATING CONTACT INFORMATION

### Footer Contact Details

**Edit**: `index.html` → `.footer` section (Line ~385)

**Current setup**:
```html
<div class="footer-col">
  <h3 class="footer-section-title">Connect</h3>
  <ul class="footer-links">
    <li><a href="https://www.facebook.com/..." target="_blank">Facebook Page</a></li>
    <!-- ADD MORE CONTACT OPTIONS HERE -->
  </ul>
</div>
```

**To add email**:
```html
<li><a href="mailto:tourism@bagocity.gov.ph">Email Us</a></li>
```

**To add phone**:
```html
<li><a href="tel:+639123456789">+63 912 345 6789</a></li>
```

**To add tourism office**:
```html
<li>
  <p style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.6;">
    <strong>Tourism Office</strong><br>
    Bago City Hall, Ground Floor<br>
    Bago City, Negros Occidental<br>
    Office Hours: Monday - Friday, 8:00 AM - 5:00 PM
  </p>
</li>
```

---

## 🔍 SEO & SOCIAL MEDIA

### Updating Page Title & Description

**Edit**: `index.html` → `<head>` section (Line ~6)

```html
<!-- Primary Meta Tags -->
<title>Be In Bago | Discover Bago City, Negros Occidental</title>
<meta name="description" content="More than a destination. It's a journey of the heart. Experience Bago City's natural beauty, rich culture, local flavors, and warm Filipino hospitality.">
```

**SEO Tips**:
- Title: 50-60 characters
- Description: 150-160 characters
- Include target keywords: "Bago City", "tourism", "Negros Occidental"
- Make it compelling and accurate

### Facebook Open Graph (Link Preview)

**Edit**: `index.html` → `<head>` section (Line ~14)

```html
<!-- Open Graph / Facebook -->
<meta property="og:title" content="Be In Bago | Discover Bago City">
<meta property="og:description" content="More than a destination. It's a journey of the heart.">
<meta property="og:image" content="https://beinbago.vercel.app/assets/images/og/og-image.jpg">
```

**⚠️ Important**: 
- Update `og:image` URL after deployment
- Image should be 1200x630px for best Facebook display
- Test with Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/

### Keywords

**Edit**: `index.html` → `<head>` section (Line ~10)

```html
<meta name="keywords" content="Bago City, Negros Occidental, Philippines tourism, travel Bago, Bago attractions, weekend market, Be In Bago">
```

**Relevant keywords to include**:
- Bago City tourism
- Negros Occidental attractions
- Philippines travel destinations
- Bago City weekend market
- Bago cultural heritage
- Visit Bago City
- Bago City guide

---

## 🚀 QUICK UPDATE WORKFLOW

### Making Simple Text Changes:

1. **Open the file** in any text editor (Notepad++, VS Code, Sublime)
2. **Find the section** using Ctrl+F (search for unique text)
3. **Make your changes** (keep HTML tags intact)
4. **Save the file**
5. **Test locally** (open in browser)
6. **Deploy** (commit and push to GitHub)

### Adding New Content:

1. **Prepare assets** (images, text, details)
2. **Optimize images** (compress to recommended sizes)
3. **Update JSON files** (for structured content)
4. **Edit HTML** (for immediate homepage changes)
5. **Test all changes** (mobile and desktop)
6. **Deploy** (Git commit and push)

---

## ⚠️ IMPORTANT REMINDERS

### Before Making Changes:

1. **Backup first**: Copy the file before editing
2. **Test locally**: Open `index.html` in browser after changes
3. **Check mobile**: Resize browser or use mobile device
4. **Verify links**: Click all links to ensure they work
5. **Validate HTML**: Use https://validator.w3.org/ if unsure

### HTML Editing Tips:

✅ **Safe to edit**:
- Text between `>` and `</`
- Image alt attributes
- URLs in `href=""` and `src=""`
- CSS classes (if you know what you're doing)

❌ **Be careful with**:
- HTML tags `<div>`, `<section>`, etc.
- CSS class names (may break styling)
- JavaScript file references
- Closing tags (always match opening tags)

### When in Doubt:

- Start with JSON files (safer than HTML)
- Make small changes and test
- Keep original files as backup
- Ask for help if something breaks

---

## 📋 CONTENT CHECKLIST

Before publishing new content:

- [ ] All images optimized (under size limits)
- [ ] All text proofread (spelling, grammar)
- [ ] All links tested (open correctly)
- [ ] Mobile view checked (no overflow, readable text)
- [ ] Desktop view checked (proper layout)
- [ ] Alt text added to new images
- [ ] SEO metadata updated (if new page)
- [ ] Contact information verified (accurate)
- [ ] No fabricated data (stats, reviews, prices)
- [ ] Facebook link preview tested (after deployment)

---

## 🆘 TROUBLESHOOTING

### Images Not Showing:

1. Check file path is correct (case-sensitive)
2. Verify image is in the right folder
3. Ensure image file name matches exactly (no spaces)
4. Try: Ctrl+F5 (hard refresh browser)

### Layout Broken:

1. Check you didn't accidentally delete a closing tag
2. Verify HTML structure is intact
3. Look for missing `>` or `</div>`
4. Restore from backup if needed

### Changes Not Visible After Deployment:

1. Wait 30 seconds for Vercel to deploy
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check Vercel dashboard for deployment status
4. Verify you pushed changes to GitHub

---

## 📞 NEED HELP?

**For content updates**: Message via Facebook  
**For technical issues**: Check README.md  
**For urgent fixes**: Contact directly

---

**Last Updated**: October 16, 2026  
**Version**: 1.0
