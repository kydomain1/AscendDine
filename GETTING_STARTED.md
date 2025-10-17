# Getting Started with Ascend & Dine

## 🎉 Your minimalist blog website is ready!

## How to View Your Website

**Method 1: Double-Click**
Simply double-click on `index.html` in your file explorer, and it will open in your default web browser.

**Method 2: Drag and Drop**
Drag `index.html` into any web browser window.

**Method 3: Right-Click**
Right-click `index.html` → "Open with" → Select your preferred browser

## Website Structure

```
Ascend & Dine/
├── index.html          # Homepage with all articles
├── search.html         # Dedicated search page
├── article.html        # Article detail page (dynamic)
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   └── style.css      # All styles (minimalist design)
├── js/
│   └── main.js        # All functionality + 5 blog articles
└── README.md          # Project documentation
```

## ✨ Features Implemented

### Design
- ✅ Minimalist aesthetic with ample white space
- ✅ Limited color palette (black, white, grays)
- ✅ Clean lines and simple typography
- ✅ Smooth animations and transitions
- ✅ Fully responsive (mobile, tablet, desktop)

### Functionality
- ✅ **6 Categories**: Fashion, Health & Beauty, Home & Garden, Travel, Finance, Food & Beverage
- ✅ **Dedicated Search Page**: Full-featured search interface with URL parameters
- ✅ **Real-time Filtering**: Category-based filtering on both home and search pages
- ✅ **Search Statistics**: Display result counts and search queries
- ✅ **Pagination**: 6 articles per page with navigation
- ✅ **Individual Article Pages**: Full content with images
- ✅ **Product Recommendations**: Embedded in articles
- ✅ **Social Media Links**: Facebook, Twitter, Instagram, Pinterest
- ✅ **Contact Form**: With validation and feedback
- ✅ **Newsletter Signup**: In contact page

### Content
- ✅ **5 Complete Articles** (January - August 2025):
  1. **Fashion**: Essential Minimalist Wardrobe
  2. **Health & Beauty**: Science-Backed Skincare Routine
  3. **Home & Garden**: Creating a Serene Home
  4. **Travel**: Mindful Travel Destinations
  5. **Finance**: Simple Investing Strategies

- ✅ All articles include:
  - Professional images from Unsplash (3-4 per article)
  - Medium-length content (800-1200 words)
  - Product recommendations with descriptions
  - Proper formatting with headings and lists

## 🎨 Design Philosophy

The website embodies minimalism through:
- **Large white space** for visual breathing room
- **Limited color palette** for focus and clarity
- **Simple lines** and geometric layouts
- **Function-first** approach - no unnecessary elements
- **Typography-focused** design using Inter font

## 🔍 Using the Search Feature

### Two Ways to Search:

#### 1. **Quick Search from Homepage**
- Enter your search term in the search box on the homepage
- Click "Search" or press Enter
- You'll be redirected to the search page with results

#### 2. **Advanced Search Page**
The dedicated search page (`search.html`) offers advanced capabilities:

- **Direct Access**: Click "Search" in the navigation menu
- **Search by Keyword**: Enter any term to search article titles, excerpts, and categories
- **Filter by Category**: Click category buttons to filter results
- **URL Parameters**: Share specific searches using URLs like:
  - `search.html?q=minimalist` - Search for "minimalist"
  - `search.html?category=fashion` - Filter by fashion category
  - `search.html?q=travel&category=travel` - Combined search

## 🚀 Next Steps

### To Deploy Online:
1. Upload all files to a web hosting service (GitHub Pages, Netlify, Vercel)
2. Ensure folder structure remains intact
3. Your site will be live!

### To Customize:
- **Add more articles**: Edit `js/main.js` - add objects to the `articles` array
- **Change colors**: Edit CSS variables in `css/style.css` (lines 15-23)
- **Modify content**: Edit HTML files directly
- **Add real images**: Replace Unsplash URLs with your own images

## 📱 Testing

Make sure to test:
- ✅ Homepage with all categories
- ✅ Dedicated search page (`search.html`)
- ✅ Search functionality with keywords
- ✅ Category filtering on search page
- ✅ Search result statistics
- ✅ URL parameter persistence
- ✅ Pagination on both home and search pages
- ✅ Article detail pages (click any article)
- ✅ About page
- ✅ Contact form
- ✅ Mobile responsiveness (resize browser window)

## 💡 Tips

1. **Images**: All images are from Unsplash and load from CDN - no local files needed
2. **Fonts**: Google Fonts (Inter) loads automatically
3. **No Backend Needed**: Everything runs in the browser
4. **Fast Loading**: Optimized CSS and JavaScript

## 🌟 Key Interactions

- **Search from Homepage**: Enter keywords in the search box and press Enter to jump to search results
- Hover over article cards to see lift animation
- Click category buttons to filter articles (home and search pages)
- Use the dedicated search page for advanced filtering
- Search results update with statistics
- Navigate between pages using pagination
- Click articles to read full content
- Try the contact form (simulated submission)
- Share search URLs with specific queries

---

**Enjoy your minimalist blog!** 

For questions or customization, refer to the code comments in each file.

