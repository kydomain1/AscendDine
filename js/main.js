// ===================================
// Ascend & Dine - Main JavaScript
// ===================================

// === Articles Data ===
const articles = [
    {
        id: 1,
        title: "Essential Minimalist Wardrobe: Quality Over Quantity",
        category: "fashion",
        categoryName: "Fashion & Accessories",
        date: "January 15, 2025",
        excerpt: "Discover how to build a versatile wardrobe with fewer, better-quality pieces that stand the test of time.",
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop",
        content: `
            <p>In a world of fast fashion and endless trends, building a minimalist wardrobe has become more than just a style choice—it's a philosophy. The concept is simple: invest in fewer, higher-quality pieces that work seamlessly together, creating countless outfit combinations while reducing clutter and environmental impact.</p>

            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop" alt="Minimalist wardrobe essentials">

            <h2>The Foundation Pieces</h2>
            <p>Every minimalist wardrobe starts with versatile basics. A well-fitted white t-shirt, classic black trousers, and a timeless trench coat form the backbone of countless outfits. These pieces should be made from quality materials that age gracefully—think organic cotton, wool, and linen.</p>

            <p>The key is selecting items in neutral colors: black, white, grey, navy, and beige. These shades naturally complement each other, making it easier to mix and match without overthinking.</p>

            <div class="product-recommendation">
                <h3>Recommended Brand: Everlane</h3>
                <p>Everlane's transparent pricing and commitment to ethical manufacturing make them a perfect choice for minimalist wardrobes. Their basics are designed to last, with timeless cuts and premium materials.</p>
                <a href="#" class="product-link">Visit Everlane</a>
            </div>

            <h2>Quality Indicators</h2>
            <p>When investing in wardrobe staples, look for these quality markers:</p>
            <ul>
                <li>Natural, breathable fabrics like cotton, wool, and silk</li>
                <li>Reinforced seams and quality stitching</li>
                <li>Timeless designs that won't look dated next season</li>
                <li>Proper care labels and washing instructions</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=500&fit=crop" alt="Quality clothing details">

            <h2>Building Your Capsule</h2>
            <p>Start with 30-40 pieces total, including shoes and accessories. This might sound limiting, but you'll find it liberating. With carefully chosen pieces, you can create over 100 different outfits while maintaining a clutter-free closet.</p>

            <p>Focus on versatility: a blazer that works for both office meetings and weekend brunches, jeans that can be dressed up or down, and boots that transition seamlessly from season to season.</p>

            <div class="product-recommendation">
                <h3>Investment Piece: The Perfect White Shirt</h3>
                <p>A crisp white button-down is perhaps the most versatile item you can own. Look for one with a tailored fit in a premium cotton. Brands like COS and Uniqlo U offer excellent options at different price points.</p>
            </div>

            <h2>Sustainable Impact</h2>
            <p>By embracing minimalism, you're not just simplifying your life—you're making an environmental statement. The fashion industry is one of the world's largest polluters, and by choosing quality over quantity, you're reducing waste and supporting ethical manufacturing practices.</p>

            <p>Your wardrobe becomes an investment in yourself and the planet. Each piece tells a story and serves a purpose, making getting dressed each morning an intentional, mindful practice rather than a source of stress.</p>
        `,
        products: [
            {
                name: "Classic White T-Shirt",
                brand: "Everlane",
                description: "Premium organic cotton, perfect fit",
                link: "#"
            },
            {
                name: "Wool Trench Coat",
                brand: "COS",
                description: "Timeless design, excellent quality",
                link: "#"
            }
        ]
    },
    {
        id: 2,
        title: "The Science-Backed Skincare Routine That Actually Works",
        category: "health",
        categoryName: "Health & Beauty",
        date: "March 8, 2025",
        excerpt: "Cut through the marketing hype and discover the essential skincare products backed by dermatologists and scientific research.",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop",
        content: `
            <p>In the age of 10-step skincare routines and miracle products, it's easy to feel overwhelmed. The truth? Effective skincare doesn't require dozens of products or complicated rituals. Science shows that a simple, consistent routine with the right ingredients delivers the best results.</p>

            <h2>The Essential Three</h2>
            <p>Dermatologists worldwide agree on three non-negotiable steps: cleanse, moisturize, and protect. Everything else is supplementary. This minimalist approach not only saves money but also reduces the risk of irritation from layering too many active ingredients.</p>

            <img src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&h=500&fit=crop" alt="Minimalist skincare products">

            <h3>1. Cleansing</h3>
            <p>A gentle, pH-balanced cleanser removes dirt, oil, and makeup without stripping your skin's natural barrier. Look for formulas with ceramides and avoid harsh sulfates. Cleanse once in the evening—over-cleansing can cause more harm than good.</p>

            <div class="product-recommendation">
                <h3>Top Pick: CeraVe Hydrating Cleanser</h3>
                <p>This affordable, dermatologist-developed cleanser contains ceramides and hyaluronic acid. It's gentle enough for all skin types and backed by years of clinical research.</p>
                <a href="#" class="product-link">Shop CeraVe</a>
            </div>

            <h3>2. Moisturizing</h3>
            <p>Hydration is crucial for all skin types, even oily skin. A good moisturizer strengthens your skin barrier, preventing water loss and protecting against environmental stressors. Key ingredients to look for include hyaluronic acid, niacinamide, and ceramides.</p>

            <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=500&fit=crop" alt="Moisturizer application">

            <h3>3. Sun Protection</h3>
            <p>This is the single most important anti-aging step you can take. UV damage causes 80% of visible aging signs. Use a broad-spectrum SPF 30 or higher every single day, regardless of weather or season.</p>

            <div class="product-recommendation">
                <h3>Sun Protection Hero: La Roche-Posay Anthelios</h3>
                <p>Lightweight, non-greasy, and highly effective, this sunscreen offers broad-spectrum protection without the white cast. It's suitable for sensitive skin and wears beautifully under makeup.</p>
                <a href="#" class="product-link">Shop La Roche-Posay</a>
            </div>

            <h2>Optional Additions</h2>
            <p>Once you've mastered the basics, consider these evidence-based additions:</p>
            <ul>
                <li><strong>Retinol:</strong> The gold standard for anti-aging and acne treatment</li>
                <li><strong>Vitamin C:</strong> Brightening and antioxidant protection</li>
                <li><strong>Exfoliating acids:</strong> AHAs or BHAs for texture and clarity</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=500&fit=crop" alt="Skincare ingredients">

            <h2>The Consistency Factor</h2>
            <p>The most effective skincare routine is one you'll actually follow. Products need time to work—expect to wait 8-12 weeks before seeing significant results. Stick with your routine, resist the urge to constantly try new products, and trust the process.</p>

            <p>Remember: your skin is unique. What works for influencers or friends might not work for you. If you have specific concerns, consult a dermatologist for personalized advice.</p>
        `,
        products: [
            {
                name: "Hydrating Cleanser",
                brand: "CeraVe",
                description: "Gentle, ceramide-rich formula",
                link: "#"
            },
            {
                name: "Anthelios Sunscreen",
                brand: "La Roche-Posay",
                description: "SPF 50+, lightweight protection",
                link: "#"
            }
        ]
    },
    {
        id: 3,
        title: "Creating a Serene Home: Minimalist Interior Design Principles",
        category: "home",
        categoryName: "Home & Garden",
        date: "May 22, 2025",
        excerpt: "Transform your living space into a peaceful sanctuary with these timeless minimalist design principles and practical tips.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        content: `
            <p>Your home should be a refuge—a place that calms your mind and nurtures your well-being. Minimalist interior design isn't about cold, empty spaces; it's about intentional living. Every piece serves a purpose, and every surface has room to breathe.</p>

            <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=500&fit=crop" alt="Minimalist living room">

            <h2>The Foundation: Decluttering</h2>
            <p>Before adding anything new, remove the excess. Go room by room, keeping only items that serve a function or bring genuine joy. This process isn't about deprivation—it's about making space for what truly matters.</p>

            <p>Donate, sell, or recycle items you no longer need. You'll be amazed at how liberating it feels to live with less.</p>

            <h2>Color Palette</h2>
            <p>Minimalist spaces typically embrace neutral tones: whites, beiges, greys, and soft earth tones. These colors create a sense of calm and allow architectural features and key pieces to shine. Add depth through varying textures rather than colors.</p>

            <div class="product-recommendation">
                <h3>Paint Recommendation: Benjamin Moore</h3>
                <p>Their "Simply White" and "Edgecomb Gray" are perfect neutrals that work in any light. These timeless shades create a serene backdrop for minimalist living.</p>
                <a href="#" class="product-link">Explore Colors</a>
            </div>

            <h2>Furniture Selection</h2>
            <p>Choose quality over quantity. Invest in well-made pieces with clean lines and timeless designs. A perfect minimalist sofa should be comfortable, durable, and simple in form. Avoid ornate details and overly trendy styles.</p>

            <img src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=500&fit=crop" alt="Minimalist furniture">

            <ul>
                <li>Opt for furniture that serves multiple purposes</li>
                <li>Ensure pieces are proportional to your space</li>
                <li>Leave adequate breathing room between items</li>
                <li>Choose natural materials like wood, linen, and leather</li>
            </ul>

            <h2>Lighting Strategy</h2>
            <p>Natural light is the cornerstone of minimalist design. Keep windows unobstructed or dress them with simple, sheer curtains. For artificial lighting, layer ambient, task, and accent lighting to create warmth and depth.</p>

            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=500&fit=crop" alt="Natural lighting in minimalist space">

            <div class="product-recommendation">
                <h3>Lighting Pick: Flos Arco Floor Lamp</h3>
                <p>An iconic piece that combines form and function. This sculptural lamp provides excellent ambient lighting while serving as a statement piece. A true investment in design.</p>
            </div>

            <h2>The Power of Negative Space</h2>
            <p>Empty space isn't wasted space—it's essential. Allow walls to breathe, keep surfaces mostly clear, and resist the urge to fill every corner. This negative space creates visual rest and makes your home feel larger and more peaceful.</p>

            <h2>Bringing Nature Indoors</h2>
            <p>Add life to minimalist spaces with carefully chosen plants. A single sculptural fiddle leaf fig or a cluster of succulents can provide the perfect organic touch without cluttering your space.</p>

            <p>Minimalist design is ultimately about creating a home that supports your life rather than complicating it. It's a continuous practice of intentional choices, resulting in a space that truly feels like home.</p>
        `,
        products: [
            {
                name: "Minimalist Sofa",
                brand: "Muji",
                description: "Clean lines, comfortable, timeless",
                link: "#"
            },
            {
                name: "Arco Floor Lamp",
                brand: "Flos",
                description: "Iconic design, excellent lighting",
                link: "#"
            }
        ]
    },
    {
        id: 4,
        title: "Mindful Travel: Destinations That Inspire Intentional Living",
        category: "travel",
        categoryName: "Travel & Accommodation",
        date: "June 30, 2025",
        excerpt: "Explore carefully curated destinations and accommodations that embody the principles of minimalism, sustainability, and mindful living.",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=600&fit=crop",
        content: `
            <p>Travel has the power to transform us, but not all travel is created equal. Mindful travel is about quality over quantity—immersing yourself in fewer destinations, supporting local communities, and choosing accommodations that align with your values.</p>

            <h2>The Rise of Minimalist Hotels</h2>
            <p>A new wave of hotels embraces simplicity and sustainability. These spaces strip away excess, focusing on essential comforts, local craftsmanship, and environmental responsibility. They prove that luxury isn't about abundance—it's about thoughtful curation.</p>

            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop" alt="Minimalist hotel room">

            <h3>Featured Destination: Kyoto, Japan</h3>
            <p>Few places embody minimalist principles like Kyoto. This ancient city seamlessly blends tradition with modernity, offering serene temples, pristine gardens, and ryokans (traditional inns) where simplicity is elevated to an art form.</p>

            <div class="product-recommendation">
                <h3>Stay: Ace Hotel Kyoto</h3>
                <p>This thoughtfully designed hotel combines traditional Japanese aesthetics with contemporary comfort. Each room features clean lines, natural materials, and locally sourced furnishings. The hotel's commitment to sustainability and community engagement makes it a perfect choice for conscious travelers.</p>
                <a href="#" class="product-link">Book Your Stay</a>
            </div>

            <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop" alt="Kyoto temple">

            <h2>Slow Travel Philosophy</h2>
            <p>Instead of rushing through multiple countries, spend extended time in one place. This approach allows for deeper cultural immersion, reduces your carbon footprint, and eliminates the stress of constant movement.</p>

            <p>Benefits of slow travel:</p>
            <ul>
                <li>Form meaningful connections with locals</li>
                <li>Discover hidden gems beyond tourist hotspots</li>
                <li>Reduce travel-related stress and fatigue</li>
                <li>Lower environmental impact</li>
                <li>Experience authentic daily rhythms of a place</li>
            </ul>

            <h3>Featured Destination: Copenhagen, Denmark</h3>
            <p>Copenhagen exemplifies sustainable urban living. The city's design-forward approach, extensive cycling infrastructure, and commitment to green spaces make it ideal for mindful exploration.</p>

            <img src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=500&fit=crop" alt="Copenhagen street">

            <div class="product-recommendation">
                <h3>Stay: Hotel SP34</h3>
                <p>Located in the Latin Quarter, this boutique hotel embodies Danish design principles: functional beauty, natural materials, and understated elegance. Its central location allows you to explore the city entirely on foot or by bike.</p>
            </div>

            <h2>Packing Minimally</h2>
            <p>Challenge yourself to pack in a carry-on only. This forces you to bring versatile pieces and eliminates the stress of checked luggage. You'll move more freely and appreciate the simplicity.</p>

            <h2>Choosing Sustainable Accommodations</h2>
            <p>Look for hotels and guesthouses with legitimate sustainability certifications. Green Key, EarthCheck, and LEED certifications indicate genuine environmental commitment. Support accommodations that employ local staff, source food locally, and minimize waste.</p>

            <p>Mindful travel isn't about seeing everything—it's about experiencing something deeply. By choosing quality over quantity, you'll return home not just with photos, but with genuine memories and a renewed perspective on what matters most.</p>
        `,
        products: [
            {
                name: "Ace Hotel Kyoto",
                description: "Minimalist design, sustainable practices",
                link: "#"
            },
            {
                name: "Hotel SP34 Copenhagen",
                description: "Danish design, central location",
                link: "#"
            }
        ]
    },
    {
        id: 5,
        title: "Simple Investing: Building Long-Term Wealth Without Complexity",
        category: "finance",
        categoryName: "Finance & Insurance",
        date: "August 18, 2025",
        excerpt: "Learn how minimalist investment strategies outperform complex approaches, helping you build wealth with less stress and lower fees.",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
        content: `
            <p>The investment industry thrives on complexity, but the truth is simpler: low-cost index funds, consistent contributions, and patience outperform most actively managed portfolios. Minimalist investing isn't about doing less—it's about doing what actually works.</p>

            <h2>The Case for Index Funds</h2>
            <p>Decades of research prove that passive index investing beats active management over the long term. Why? Lower fees, broader diversification, and elimination of human error. Warren Buffett himself recommends index funds for most investors.</p>

            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop" alt="Simple investment strategy">

            <h3>Understanding Index Funds</h3>
            <p>An index fund mirrors a market index (like the S&P 500), giving you instant diversification across hundreds of companies. You're not trying to beat the market—you're capturing its overall growth at minimal cost.</p>

            <div class="product-recommendation">
                <h3>Recommended Platform: Vanguard</h3>
                <p>Vanguard pioneered low-cost index investing. Their Total Stock Market Index Fund (VTSAX) provides exposure to the entire U.S. stock market with an expense ratio of just 0.04%. For most investors, this single fund forms an excellent foundation.</p>
                <a href="#" class="product-link">Learn More About Vanguard</a>
            </div>

            <h2>The Three-Fund Portfolio</h2>
            <p>You can build a complete, diversified portfolio with just three funds:</p>
            <ul>
                <li><strong>U.S. Stock Index Fund:</strong> Domestic equity exposure</li>
                <li><strong>International Stock Index Fund:</strong> Global diversification</li>
                <li><strong>Bond Index Fund:</strong> Stability and income</li>
            </ul>

            <p>This simple approach covers thousands of companies across dozens of countries, with minimal overlap and maximum efficiency. Adjust the allocation based on your age and risk tolerance.</p>

            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop" alt="Portfolio allocation">

            <h2>Automation Is Key</h2>
            <p>Set up automatic monthly contributions from your paycheck. This practice, called dollar-cost averaging, removes emotion from investing and ensures you buy consistently regardless of market conditions. You'll purchase more shares when prices are low and fewer when high—a built-in advantage.</p>

            <div class="product-recommendation">
                <h3>Robo-Advisor Alternative: Wealthfront</h3>
                <p>If you want even more hands-off approach, consider Wealthfront. They automatically build and rebalance a diversified portfolio based on your goals, with tax-loss harvesting included. Perfect for busy professionals who want solid returns without ongoing management.</p>
            </div>

            <h2>The Power of Low Fees</h2>
            <p>A 1% annual fee might seem small, but over decades, it can cost you hundreds of thousands in lost returns. Index funds typically charge 0.03-0.20%, compared to 1-2% for actively managed funds. Those savings compound dramatically over time.</p>

            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop" alt="Long-term growth chart">

            <h2>What About Cryptocurrency and Individual Stocks?</h2>
            <p>If you're tempted by crypto or stock picking, limit it to 5-10% of your portfolio. Treat it as speculative play money, not your retirement strategy. The vast majority of your wealth should be in boring, reliable index funds.</p>

            <h2>Insurance: Protecting Your Wealth</h2>
            <p>Minimalist finance isn't just about investing—it's about protection. Ensure you have:</p>
            <ul>
                <li>Term life insurance (if others depend on your income)</li>
                <li>Adequate health insurance</li>
                <li>Disability insurance</li>
                <li>Umbrella liability policy (if your net worth exceeds $500k)</li>
            </ul>

            <p>Skip the gimmicks: whole life insurance, extended warranties, and most specialized policies are overpriced. Stick to essential, straightforward coverage.</p>

            <p>Minimalist investing is liberating. You're not checking stocks daily, chasing trends, or stressing over market volatility. You're simply and systematically building wealth through proven methods. Set it up once, contribute consistently, and let time do the heavy lifting.</p>
        `,
        products: [
            {
                name: "Vanguard Total Stock Market Index Fund",
                description: "Low-cost, broad diversification",
                link: "#"
            },
            {
                name: "Wealthfront Robo-Advisor",
                description: "Automated investing with tax optimization",
                link: "#"
            }
        ]
    }
];

// === State Management ===
let currentPage = 1;
let currentCategory = 'all';
let currentSearch = '';
const articlesPerPage = 6;

// === DOM Elements ===
const articlesGrid = document.getElementById('articlesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryBtns = document.querySelectorAll('.category-btn');
const pagination = document.getElementById('pagination');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumbers = document.getElementById('pageNumbers');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Search Page Elements
const searchInputLarge = document.getElementById('searchInputLarge');
const searchBtnLarge = document.getElementById('searchBtnLarge');
const searchResultsGrid = document.getElementById('searchResultsGrid');
const searchStats = document.getElementById('searchStats');
const noResults = document.getElementById('noResults');
const searchPagination = document.getElementById('searchPagination');
const prevBtnSearch = document.getElementById('prevBtnSearch');
const nextBtnSearch = document.getElementById('nextBtnSearch');
const pageNumbersSearch = document.getElementById('pageNumbersSearch');
const popularArticles = document.getElementById('popularArticles');

// === Initialize ===
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the article detail page
    if (document.getElementById('articleDetail')) {
        loadArticleDetail();
        loadRelatedArticles();
    } else if (searchResultsGrid) {
        // We're on the search page
        initSearchPage();
    } else if (articlesGrid) {
        // We're on the home page
        displayArticles();
        setupEventListeners();
    }
    
    // Setup contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        setupContactForm();
    }
    
    // Setup newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        setupNewsletterForm();
    }
    
    // Mobile navigation
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// === Display Articles ===
function displayArticles() {
    const filteredArticles = filterArticles();
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    
    // Adjust currentPage if necessary
    if (currentPage > totalPages) {
        currentPage = totalPages || 1;
    }
    
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToDisplay = filteredArticles.slice(startIndex, endIndex);
    
    // Clear grid
    articlesGrid.innerHTML = '';
    
    if (articlesToDisplay.length === 0) {
        articlesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #666;">No articles found. Try adjusting your search or filters.</p>';
        updatePagination(0);
        return;
    }
    
    // Display articles
    articlesToDisplay.forEach((article, index) => {
        const articleCard = createArticleCard(article);
        articleCard.style.animationDelay = `${index * 0.1}s`;
        articlesGrid.appendChild(articleCard);
    });
    
    // Update pagination
    updatePagination(totalPages);
}

// === Create Article Card ===
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.onclick = () => navigateToArticle(article.id);
    
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
        <div class="article-content">
            <div class="article-meta">
                <span class="article-category">${article.categoryName}</span>
                <span class="article-date">${article.date}</span>
            </div>
            <h2 class="article-title">${article.title}</h2>
            <p class="article-excerpt">${article.excerpt}</p>
            <a href="article.html?id=${article.id}" class="read-more">Read More →</a>
        </div>
    `;
    
    return card;
}

// === Filter Articles ===
function filterArticles() {
    return articles.filter(article => {
        const matchesCategory = currentCategory === 'all' || article.category === currentCategory;
        const matchesSearch = currentSearch === '' || 
            article.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(currentSearch.toLowerCase()) ||
            article.categoryName.toLowerCase().includes(currentSearch.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });
}

// === Update Pagination ===
function updatePagination(totalPages) {
    if (!pagination) return;
    
    pageNumbers.innerHTML = '';
    
    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }
    
    pagination.style.display = 'flex';
    
    // Update prev/next buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    // Create page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 ||
            i === totalPages ||
            (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'page-number';
            pageBtn.textContent = i;
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                displayArticles();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pageNumbers.appendChild(pageBtn);
        } else if (
            (i === currentPage - 2 && i > 1) ||
            (i === currentPage + 2 && i < totalPages)
        ) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0 0.5rem';
            pageNumbers.appendChild(ellipsis);
        }
    }
}

// === Setup Event Listeners ===
function setupEventListeners() {
    // Category filter
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            currentPage = 1;
            displayArticles();
        });
    });
    
    // Search - redirect to search page
    if (searchBtn) {
        searchBtn.addEventListener('click', performHomeSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performHomeSearch();
            }
        });
    }
    
    // Pagination
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayArticles();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filterArticles().length / articlesPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                displayArticles();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
}

// === Perform Home Search - Redirect to Search Page ===
function performHomeSearch() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // Redirect to search page with query parameter
        window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
    } else {
        // If empty, just go to search page
        window.location.href = 'search.html';
    }
}

// === Navigate to Article ===
function navigateToArticle(articleId) {
    window.location.href = `article.html?id=${articleId}`;
}

// === Load Article Detail ===
function loadArticleDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));
    
    const article = articles.find(a => a.id === articleId);
    
    if (!article) {
        document.getElementById('articleDetail').innerHTML = '<p>Article not found.</p>';
        return;
    }
    
    // Update page title
    document.title = `${article.title} - Ascend & Dine`;
    
    // Display article
    const articleDetail = document.getElementById('articleDetail');
    articleDetail.innerHTML = `
        <div class="article-header">
            <span class="article-category">${article.categoryName}</span>
            <h1 class="article-title">${article.title}</h1>
            <div class="article-meta">
                <span class="article-date">${article.date}</span>
            </div>
        </div>
        <img src="${article.image}" alt="${article.title}" class="article-featured-image">
        <div class="article-body">
            ${article.content}
        </div>
    `;
}

// === Load Related Articles ===
function loadRelatedArticles() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));
    
    const article = articles.find(a => a.id === articleId);
    if (!article) return;
    
    // Get related articles from the same category
    const relatedArticles = articles
        .filter(a => a.id !== articleId && a.category === article.category)
        .slice(0, 3);
    
    // If not enough related articles in same category, add from other categories
    if (relatedArticles.length < 3) {
        const moreArticles = articles
            .filter(a => a.id !== articleId && a.category !== article.category)
            .slice(0, 3 - relatedArticles.length);
        relatedArticles.push(...moreArticles);
    }
    
    const relatedGrid = document.getElementById('relatedArticles');
    relatedGrid.innerHTML = '';
    
    relatedArticles.forEach(related => {
        const card = createArticleCard(related);
        relatedGrid.appendChild(card);
    });
}

// === Contact Form ===
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
        formMessage.className = 'form-message success';
        
        // Reset form
        form.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    });
}

// === Newsletter Form ===
function setupNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        const input = form.querySelector('input');
        const originalPlaceholder = input.placeholder;
        input.value = '';
        input.placeholder = 'Thanks for subscribing!';
        input.style.borderColor = '#2e7d32';
        
        // Reset after 3 seconds
        setTimeout(() => {
            input.placeholder = originalPlaceholder;
            input.style.borderColor = '';
        }, 3000);
    });
}

// =======================================
// === SEARCH PAGE FUNCTIONS ===
// =======================================

// === Initialize Search Page ===
function initSearchPage() {
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('q');
    const categoryParam = urlParams.get('category');
    
    if (queryParam) {
        currentSearch = queryParam;
        searchInputLarge.value = queryParam;
    }
    
    if (categoryParam && categoryParam !== 'all') {
        currentCategory = categoryParam;
        // Update active category button
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === categoryParam);
        });
    }
    
    // Display initial results (all articles or filtered)
    displaySearchResults();
    loadPopularArticles();
    setupSearchEventListeners();
}

// === Display Search Results ===
function displaySearchResults() {
    const filteredArticles = filterArticles();
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    
    // Adjust currentPage if necessary
    if (currentPage > totalPages) {
        currentPage = totalPages || 1;
    }
    
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToDisplay = filteredArticles.slice(startIndex, endIndex);
    
    // Clear grid
    searchResultsGrid.innerHTML = '';
    
    // Update stats
    updateSearchStats(filteredArticles.length);
    
    if (articlesToDisplay.length === 0) {
        // Show no results message
        searchResultsGrid.style.display = 'none';
        noResults.style.display = 'flex';
        searchPagination.style.display = 'none';
        return;
    }
    
    // Hide no results, show grid
    searchResultsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    // Display articles
    articlesToDisplay.forEach((article, index) => {
        const articleCard = createArticleCard(article);
        articleCard.style.animationDelay = `${index * 0.1}s`;
        searchResultsGrid.appendChild(articleCard);
    });
    
    // Update pagination
    updateSearchPagination(totalPages);
}

// === Update Search Stats ===
function updateSearchStats(totalResults) {
    const statsText = searchStats.querySelector('.stats-text');
    
    if (!statsText) {
        const p = document.createElement('p');
        p.className = 'stats-text';
        searchStats.appendChild(p);
    }
    
    const text = searchStats.querySelector('.stats-text');
    
    if (currentSearch) {
        text.textContent = `Found ${totalResults} article${totalResults !== 1 ? 's' : ''} for "${currentSearch}"`;
    } else if (currentCategory !== 'all') {
        const categoryName = articles.find(a => a.category === currentCategory)?.categoryName || currentCategory;
        text.textContent = `Showing ${totalResults} article${totalResults !== 1 ? 's' : ''} in ${categoryName}`;
    } else {
        text.textContent = `Showing all ${totalResults} article${totalResults !== 1 ? 's' : ''}`;
    }
}

// === Update Search Pagination ===
function updateSearchPagination(totalPages) {
    if (!searchPagination) return;
    
    pageNumbersSearch.innerHTML = '';
    
    if (totalPages <= 1) {
        searchPagination.style.display = 'none';
        return;
    }
    
    searchPagination.style.display = 'flex';
    
    // Update prev/next buttons
    prevBtnSearch.disabled = currentPage === 1;
    nextBtnSearch.disabled = currentPage === totalPages;
    
    // Create page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 ||
            i === totalPages ||
            (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'page-number';
            pageBtn.textContent = i;
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                displaySearchResults();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pageNumbersSearch.appendChild(pageBtn);
        } else if (
            (i === currentPage - 2 && i > 1) ||
            (i === currentPage + 2 && i < totalPages)
        ) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0 0.5rem';
            pageNumbersSearch.appendChild(ellipsis);
        }
    }
}

// === Setup Search Event Listeners ===
function setupSearchEventListeners() {
    // Search button
    searchBtnLarge.addEventListener('click', performSearchOnPage);
    
    // Enter key in search input
    searchInputLarge.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearchOnPage();
        }
    });
    
    // Category filter buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            currentPage = 1;
            displaySearchResults();
            
            // Update URL
            updateSearchURL();
        });
    });
    
    // Pagination
    prevBtnSearch.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displaySearchResults();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    nextBtnSearch.addEventListener('click', () => {
        const totalPages = Math.ceil(filterArticles().length / articlesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displaySearchResults();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// === Perform Search on Search Page ===
function performSearchOnPage() {
    currentSearch = searchInputLarge.value.trim();
    currentPage = 1;
    displaySearchResults();
    
    // Update URL with search query
    updateSearchURL();
}

// === Update Search URL ===
function updateSearchURL() {
    const params = new URLSearchParams();
    
    if (currentSearch) {
        params.set('q', currentSearch);
    }
    
    if (currentCategory !== 'all') {
        params.set('category', currentCategory);
    }
    
    const newURL = params.toString() 
        ? `${window.location.pathname}?${params.toString()}`
        : window.location.pathname;
    
    window.history.replaceState({}, '', newURL);
}

// === Load Popular Articles ===
function loadPopularArticles() {
    if (!popularArticles) return;
    
    // Show first 3 articles as "popular"
    const popular = articles.slice(0, 3);
    
    popular.forEach(article => {
        const card = createArticleCard(article);
        popularArticles.appendChild(card);
    });
}

