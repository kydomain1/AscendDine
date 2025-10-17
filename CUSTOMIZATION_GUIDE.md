# Customization Guide

## 🎨 Customizing Your Ascend & Dine Website

### Changing Colors

Edit `css/style.css` at the top of the file (lines 15-23):

```css
:root {
    /* Minimalist Color Palette */
    --color-primary: #1a1a1a;      /* Main text color */
    --color-secondary: #666;        /* Secondary text */
    --color-accent: #2c2c2c;        /* Accent color */
    --color-bg: #ffffff;            /* Background */
    --color-bg-alt: #fafafa;        /* Alternate background */
    --color-border: #e5e5e5;        /* Borders */
    --color-hover: #f5f5f5;         /* Hover states */
}
```

**Tip**: Keep colors minimal for the aesthetic. Use tools like [Coolors.co](https://coolors.co) to generate palettes.

---

## 📝 Adding New Articles

1. Open `js/main.js`
2. Find the `articles` array (starts around line 5)
3. Add a new article object:

```javascript
{
    id: 6,  // Increment the ID
    title: "Your Article Title",
    category: "fashion",  // fashion, health, home, travel, finance, or food
    categoryName: "Fashion & Accessories",
    date: "September 15, 2025",
    excerpt: "Brief description of your article...",
    image: "https://images.unsplash.com/photo-xxxxx",  // Article card image
    content: `
        <p>Your article content here...</p>
        <h2>Section Title</h2>
        <p>More content...</p>
        <img src="https://images.unsplash.com/photo-xxxxx" alt="Description">
        
        <div class="product-recommendation">
            <h3>Product Name</h3>
            <p>Product description...</p>
            <a href="#" class="product-link">View Product</a>
        </div>
    `,
    products: [
        {
            name: "Product Name",
            brand: "Brand Name",
            description: "Product description",
            link: "#"
        }
    ]
}
```

---

## 🖼️ Changing Images

### Option 1: Using Unsplash (Free)

1. Go to [Unsplash.com](https://unsplash.com)
2. Search for your topic (e.g., "minimalist fashion")
3. Click on an image
4. Copy the image URL
5. Modify it to add size parameters:
   ```
   https://images.unsplash.com/photo-[photo-id]?w=800&h=600&fit=crop
   ```

### Option 2: Using Your Own Images

1. Create an `images` folder in your project
2. Add your images there
3. Update image paths in `js/main.js`:
   ```javascript
   image: "images/my-photo.jpg"
   ```

### Recommended Image Sizes

- **Article cards**: 800x600px
- **Article featured image**: 1200x600px
- **In-article images**: 800-1000px wide

---

## ✏️ Editing Pages

### Homepage (`index.html`)
- Change hero text: Lines 33-35
- Modify navigation: Lines 18-23

### About Page (`about.html`)
- Edit content: Lines 33-90
- Add/remove sections as needed

### Contact Page (`contact.html`)
- Change email address: Line 60
- Modify form fields: Lines 36-53

---

## 🔤 Changing Fonts

Currently using **Inter** from Google Fonts. To change:

1. Visit [Google Fonts](https://fonts.google.com)
2. Select a font
3. Copy the `<link>` tag
4. Replace the font link in all HTML files (in `<head>` section)
5. Update CSS in `style.css`:
   ```css
   --font-primary: 'YourFont', sans-serif;
   ```

**Minimalist Font Recommendations:**
- Inter (current)
- Roboto
- Work Sans
- DM Sans
- Source Sans Pro

---

## 🎭 Adjusting Animations

In `css/style.css`:

**Speed up/slow down animations:**
```css
:root {
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* Change 0.3s */
}
```

**Disable animations entirely:**
```css
* {
    transition: none !important;
    animation: none !important;
}
```

---

## 📱 Mobile Menu Breakpoint

To change when mobile menu appears, edit in `css/style.css`:

```css
@media (max-width: 768px) {  /* Change 768px to your preference */
    /* Mobile styles here */
}
```

---

## 🔗 Updating Social Media Links

Edit the footer in all HTML files:

```html
<a href="https://facebook.com/yourpage" target="_blank" class="social-link">
```

Replace with your actual social media URLs.

---

## 📄 Adding New Pages

1. Copy `about.html` as a template
2. Rename it (e.g., `services.html`)
3. Update the content inside `<main>` section
4. Add link to navigation in all HTML files:
   ```html
   <li><a href="services.html" class="nav-link">Services</a></li>
   ```

---

## 🎯 SEO Optimization

Update meta tags in each HTML file's `<head>`:

```html
<title>Your Page Title - Ascend & Dine</title>
<meta name="description" content="Your page description here">
<meta name="keywords" content="fashion, lifestyle, minimalism">
```

---

## 💾 Backup Before Changes

Always keep a backup of your original files before making major changes:
1. Copy the entire project folder
2. Rename it to `Ascend-Dine-Backup`
3. Make changes to the original
4. If something breaks, restore from backup

---

## 🐛 Common Issues

**Issue**: Images not loading
- **Fix**: Check image URLs are correct and include `https://`

**Issue**: Styles not applying
- **Fix**: Clear browser cache (Ctrl+Shift+Delete)

**Issue**: JavaScript not working
- **Fix**: Open browser console (F12) to see errors

**Issue**: Mobile menu not working
- **Fix**: Check that `js/main.js` is properly linked

---

## 📚 Resources

- **Unsplash**: Free high-quality images
- **Google Fonts**: Free web fonts
- **Coolors**: Color palette generator
- **Can I Use**: Check browser compatibility
- **W3C Validator**: Validate HTML/CSS

---

**Questions?** All files are well-commented. Look for comments in:
- `css/style.css` - Design explanations
- `js/main.js` - Function descriptions

Happy customizing! 🎨

