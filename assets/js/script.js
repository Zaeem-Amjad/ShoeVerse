// Product Data
const products = [
    {
        id: 1,
        name: "AirFlex Runner Pro",
        category: "Running",
        brand: "Nike",
        gender: "Men",
        price: 120,
        discount: 10,
        sizes: [40, 41, 42, 43, 44],
        description: "Lightweight breathable running shoe designed for maximum comfort and performance",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 2,
        name: "Urban Street Glide",
        category: "Casual",
        brand: "Adidas",
        gender: "Men",
        price: 95,
        discount: 5,
        sizes: [41, 42, 43, 44],
        description: "Premium streetwear design with superior style and comfort",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
    },
    {
        id: 3,
        name: "Classic Comfort Walk",
        category: "Casual",
        brand: "Bata",
        gender: "Men",
        price: 60,
        discount: 15,
        sizes: [40, 41, 42, 43],
        description: "Soft sole daily wear perfect for all-day comfort",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500"
    },
    {
        id: 4,
        name: "Storm X Track",
        category: "Training",
        brand: "Puma",
        gender: "Women",
        price: 110,
        discount: 12,
        sizes: [37, 38, 39, 40],
        description: "High grip training shoe for intense workouts",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"
    },
    {
        id: 5,
        name: "SkyLite Jogger",
        category: "Running",
        brand: "Skechers",
        gender: "Women",
        price: 105,
        discount: 8,
        sizes: [37, 38, 39],
        description: "Extra soft foam for cloud-like comfort",
        stock: "Low Stock",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500"
    },
    {
        id: 6,
        name: "Royal Leather Elite",
        category: "Formal",
        brand: "Clarks",
        gender: "Men",
        price: 150,
        discount: 20,
        sizes: [41, 42, 43, 44],
        description: "Fine leather premium formal shoes",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500"
    },
    {
        id: 7,
        name: "Retro Court ACE",
        category: "Sports",
        brand: "Nike",
        gender: "Women",
        price: 130,
        discount: 10,
        sizes: [37, 38, 39, 40],
        description: "Classic retro tennis inspired design",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500"
    },
    {
        id: 8,
        name: "Gravity Bounce Neo",
        category: "Running",
        brand: "Adidas",
        gender: "Men",
        price: 115,
        discount: 15,
        sizes: [40, 41, 42, 43],
        description: "Boost cushioning for ultimate energy return",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500"
    },
    {
        id: 9,
        name: "ComfortEase Daily",
        category: "Casual",
        brand: "Service",
        gender: "Women",
        price: 55,
        discount: 5,
        sizes: [36, 37, 38, 39],
        description: "Soft, lightweight everyday casual wear",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500"
    },
    {
        id: 10,
        name: "FlexSharp Velocity",
        category: "Training",
        brand: "Under Armour",
        gender: "Men",
        price: 125,
        discount: 6,
        sizes: [41, 42, 43],
        description: "Responsive performance for training",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500"
    },
    {
        id: 11,
        name: "SparkleLite Girls",
        category: "Kids",
        brand: "Disney",
        gender: "Girls",
        price: 40,
        discount: 10,
        sizes: [30, 31, 32, 33],
        description: "Animated light-up sole for fun",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500"
    },
    {
        id: 12,
        name: "Speedster Turbo Kid",
        category: "Kids",
        brand: "Nike",
        gender: "Boys",
        price: 45,
        discount: 7,
        sizes: [31, 32, 33, 34],
        description: "Sports inspired design for active kids",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500"
    },
    {
        id: 13,
        name: "AquaSlip Beach Shoe",
        category: "Beach",
        brand: "Generic",
        gender: "Unisex",
        price: 25,
        discount: 0,
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
        description: "Quick dry beach shoe for summer",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500"
    },
    {
        id: 14,
        name: "WinterFur Cozy Boot",
        category: "Winter",
        brand: "Hush Puppies",
        gender: "Women",
        price: 95,
        discount: 10,
        sizes: [36, 37, 38],
        description: "Fur-lined comfort for cold weather",
        stock: "Low Stock",
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500"
    },
    {
        id: 15,
        name: "SteelGrip Safety Boot",
        category: "Safety",
        brand: "Bata",
        gender: "Men",
        price: 130,
        discount: 10,
        sizes: [41, 42, 43],
        description: "Steel toe protection for workplace safety",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500"
    },
    {
        id: 16,
        name: "NeonWave Runner",
        category: "Sports",
        brand: "Puma",
        gender: "Men",
        price: 118,
        discount: 5,
        sizes: [40, 41, 42],
        description: "Neon modern running shoes",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500"
    },
    {
        id: 17,
        name: "LuxeFlat Sandal",
        category: "Casual",
        brand: "Gucci Style",
        gender: "Women",
        price: 140,
        discount: 18,
        sizes: [37, 38, 39],
        description: "Premium fashion sandal for elegance",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500"
    },
    {
        id: 18,
        name: "PowerKick Football",
        category: "Football",
        brand: "Adidas",
        gender: "Men",
        price: 160,
        discount: 15,
        sizes: [41, 42, 43],
        description: "Football grip studs for performance",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500"
    },
    {
        id: 19,
        name: "FeatherLite Foam",
        category: "Training",
        brand: "Generic",
        gender: "Women",
        price: 85,
        discount: 10,
        sizes: [37, 38, 39],
        description: "Ultra-light foam for training",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500"
    },
    {
        id: 20,
        name: "PartyShine Heels",
        category: "Heels",
        brand: "Stylo",
        gender: "Women",
        price: 70,
        discount: 8,
        sizes: [36, 37, 38],
        description: "Glossy heels for parties",
        stock: "Low Stock",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadProducts();
    initializeEventListeners();
    initializeCustomCursor();
    initializeHeader();
    initializeCountdown();
    loadCart();
    loadRecentlyViewed();
}

// Load Products
function loadProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? products 
        : products.filter(p => p.gender.toLowerCase() === filter || p.category.toLowerCase() === filter);
    
    filtered.forEach((product, index) => {
        const card = createProductCard(product);
        card.style.animationDelay = `${index * 0.1}s`;
        grid.appendChild(card);
    });
    
    // Load flash sale
    loadFlashSale();
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = product.id;
    
    const discountedPrice = product.price - (product.price * product.discount / 100);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.discount > 0 ? `<span class="product-badge">-${product.discount}%</span>` : ''}
            <button class="wishlist-btn"><i class="fas fa-heart"></i></button>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">
                <span class="current-price">$${discountedPrice.toFixed(2)}</span>
                ${product.discount > 0 ? `<span class="original-price">$${product.price}</span>` : ''}
            </div>
            <div class="product-rating">
                <div class="stars">★★★★★</div>
                <span>(${Math.floor(Math.random() * 500) + 50})</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openProductModal(product));
    return card;
}

function loadFlashSale() {
    const flashGrid = document.getElementById('flashProducts');
    const flashProducts = products.filter(p => p.discount >= 10).slice(0, 4);
    
    flashGrid.innerHTML = '';
    flashProducts.forEach(product => {
        const card = createProductCard(product);
        flashGrid.appendChild(card);
    });
}

// Product Modal
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    
    document.getElementById('modalMainImage').src = product.image;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalBrand').textContent = product.brand;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalStock').textContent = product.stock;
    document.getElementById('modalDescription').textContent = product.description;
    
    const discountedPrice = product.price - (product.price * product.discount / 100);
    document.getElementById('modalPrice').textContent = `$${discountedPrice.toFixed(2)}`;
    document.getElementById('modalOriginalPrice').textContent = product.discount > 0 ? `$${product.price}` : '';
    document.getElementById('modalDiscount').textContent = product.discount > 0 ? `-${product.discount}%` : '';
    
    // Load sizes
    const sizesContainer = document.getElementById('modalSizes');
    sizesContainer.innerHTML = '';
    product.sizes.forEach(size => {
        const btn = document.createElement('button');
        btn.className = 'size-btn';
        btn.textContent = size;
        btn.onclick = function() {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        };
        sizesContainer.appendChild(btn);
    });
    
    // Load thumbnails
    const thumbnails = modal.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.src = product.image;
        thumb.onclick = function() {
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('modalMainImage').src = this.src;
        };
    });
    
    modal.classList.add('active');
    modal.dataset.productId = product.id;
    
    // Add to recently viewed
    addToRecentlyViewed(product);
}

// Cart Functionality
let cart = [];

function loadCart() {
    const saved = localStorage.getItem('shoeverse_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

function saveCart() {
    localStorage.setItem('shoeverse_cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart() {
    const modal = document.getElementById('productModal');
    const productId = parseInt(modal.dataset.productId);
    const product = products.find(p => p.id === productId);
    
    const selectedSize = document.querySelector('.size-btn.active');
    if (!selectedSize) {
        showToast('Please select a size', 'warning');
        return;
    }
    
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    
    const cartItem = {
        ...product,
        selectedSize: selectedSize.textContent,
        quantity: quantity,
        cartId: Date.now()
    };
    
    cart.push(cartItem);
    saveCart();
    showToast('Added to cart successfully!', 'success');
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

function openCart() {
    const modal = document.getElementById('cartModal');
    const itemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started</p>
            </div>
        `;
    } else {
        itemsContainer.innerHTML = '';
        cart.forEach(item => {
            const itemEl = createCartItem(item);
            itemsContainer.appendChild(itemEl);
        });
    }
    
    updateCartSummary();
    modal.classList.add('active');
}

function createCartItem(item) {
    const div = document.createElement('div');
    div.className = 'cart-item';
    
    const discountedPrice = item.price - (item.price * item.discount / 100);
    const total = discountedPrice * item.quantity;
    
    div.innerHTML = `
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
            <h4>${item.name}</h4>
            <div class="cart-item-price">$${discountedPrice.toFixed(2)}</div>
            <div class="cart-item-qty">
                <span>Size: ${item.selectedSize}</span> | 
                <span>Qty: ${item.quantity}</span>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.cartId})">
                Remove
            </button>
        </div>
        <div>
            <strong>$${total.toFixed(2)}</strong>
        </div>
    `;
    
    return div;
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
    openCart();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => {
        const price = item.price - (item.price * item.discount / 100);
        return sum + (price * item.quantity);
    }, 0);
    
    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `$${subtotal.toFixed(2)}`;
}

// Checkout
function openCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty', 'warning');
        return;
    }
    
    const modal = document.getElementById('checkoutModal');
    const itemsContainer = document.getElementById('checkoutItems');
    
    itemsContainer.innerHTML = '';
    cart.forEach(item => {
        const discountedPrice = item.price - (item.price * item.discount / 100);
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div>Size: ${item.selectedSize} | Qty: ${item.quantity}</div>
            </div>
            <div>$${(discountedPrice * item.quantity).toFixed(2)}</div>
        `;
        itemsContainer.appendChild(div);
    });
    
    const subtotal = cart.reduce((sum, item) => {
        const price = item.price - (item.price * item.discount / 100);
        return sum + (price * item.quantity);
    }, 0);
    
    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${subtotal.toFixed(2)}`;
    
    document.getElementById('cartModal').classList.remove('active');
    modal.classList.add('active');
}

// Recently Viewed
function addToRecentlyViewed(product) {
    let recent = JSON.parse(localStorage.getItem('shoeverse_recent') || '[]');
    recent = recent.filter(p => p.id !== product.id);
    recent.unshift(product);
    recent = recent.slice(0, 6);
    localStorage.setItem('shoeverse_recent', JSON.stringify(recent));
}

function loadRecentlyViewed() {
    // Can be displayed in a section if needed
}

// Event Listeners
function initializeEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadProducts(this.dataset.filter);
        });
    });
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
                if (filterBtn) filterBtn.click();
            }, 500);
        });
    });
    
    // Modal closes
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
        });
    });
    
    // Click outside modal
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
    
    // Cart button
    document.getElementById('cartBtn').addEventListener('click', openCart);
    
    // Add to cart
    document.getElementById('addToCartBtn').addEventListener('click', addToCart);
    
    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
    
    // Quantity controls
    document.getElementById('decreaseQty').addEventListener('click', function() {
        const input = document.getElementById('modalQuantity');
        if (input.value > 1) input.value = parseInt(input.value) - 1;
    });
    
    document.getElementById('increaseQty').addEventListener('click', function() {
        const input = document.getElementById('modalQuantity');
        input.value = parseInt(input.value) + 1;
    });
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);
    
    // Checkout form
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckoutSubmit);
    
    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('Thank you for subscribing!', 'success');
        this.reset();
    });
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', function() {
        document.getElementById('nav').classList.toggle('active');
    });
    
    // Nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('nav').classList.remove('active');
        });
    });
    
    // Scroll to top
    document.getElementById('scrollTop').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Chat toggle
    document.getElementById('chatToggle').addEventListener('click', function() {
        document.getElementById('chatBox').classList.toggle('active');
    });
    
    document.querySelector('.chat-close').addEventListener('click', function() {
        document.getElementById('chatBox').classList.remove('active');
    });
}

// Custom Cursor
function initializeCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const glow = document.querySelector('.cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        glow.style.left = e.clientX - 10 + 'px';
        glow.style.top = e.clientY - 10 + 'px';
    });
    
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Sticky Header
function initializeHeader() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const scrollTop = document.getElementById('scrollTop');
        
        if (currentScroll > 300) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
        
        lastScroll = currentScroll;
    });
}

// Countdown Timer
function initializeCountdown() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    function updateCountdown() {
        let hours = parseInt(hoursEl.textContent);
        let minutes = parseInt(minutesEl.textContent);
        let seconds = parseInt(secondsEl.textContent);
        
        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        
        if (hours < 0) {
            hours = 23;
            minutes = 59;
            seconds = 59;
        }
        
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    }
    
    setInterval(updateCountdown, 1000);
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('#themeToggle i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('shoeverse_theme', 'dark');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('shoeverse_theme', 'light');
    }
}

// Load saved theme
const savedTheme = localStorage.getItem('shoeverse_theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('#themeToggle i').className = 'fas fa-sun';
}

// Contact Form
// Improved Contact Form Handler with Debugging
// FIXED Contact Form Handler
function handleContactSubmit(e) {
    e.preventDefault();
    
    console.log('Form submitted!');
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Log form data for debugging
    console.log('Form data:', {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message')
    });
    
    // Disable submit button
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // IMPORTANT: Use relative path from index.html location
    // If index.html is in ShoeVerse/ folder, and PHP is in ShoeVerse/php/
    fetch('./php/contact_submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log('Response status:', response.status);
        console.log('Response URL:', response.url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Get response as text first
        return response.text();
    })
    .then(text => {
        console.log('Raw response:', text);
        
        // Try to parse JSON
        try {
            const data = JSON.parse(text);
            console.log('Parsed data:', data);
            
            if (data.success) {
                showToast(data.message || 'Message sent successfully!', 'success');
                form.reset();
            } else {
                showToast(data.message || 'Error sending message.', 'error');
            }
        } catch (e) {
            console.error('JSON parse error:', e);
            console.error('Response text:', text);
            
            // Check if response contains HTML error
            if (text.includes('<!DOCTYPE') || text.includes('<html')) {
                showToast('Server returned HTML instead of JSON. Check PHP file path.', 'error');
            } else {
                showToast('Invalid server response: ' + text.substring(0, 100), 'error');
            }
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        
        if (error.message.includes('Failed to fetch')) {
            showToast('Cannot connect. Check: 1) XAMPP running 2) File path correct 3) PHP file exists', 'error');
        } else if (error.message.includes('404')) {
            showToast('PHP file not found at: ./php/contact_submit.php', 'error');
        } else {
            showToast('Error: ' + error.message, 'error');
        }
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    });
}

// Make sure to attach the handler when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Remove any existing listeners
        contactForm.removeEventListener('submit', handleContactSubmit);
        // Add the handler
        contactForm.addEventListener('submit', handleContactSubmit);
        console.log('✓ Contact form handler attached successfully!');
    } else {
        console.error('✗ Contact form element not found! Check if id="contactForm" exists in HTML');
    }
});

// Add this to your initialization
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
        console.log('Contact form handler attached!'); // Debug log
    } else {
        console.error('Contact form not found!'); // Debug log
    }
});

// Checkout Form
function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    showToast('Order placed successfully!', 'success');
    
    setTimeout(() => {
        cart = [];
        saveCart();
        document.getElementById('checkoutModal').classList.remove('active');
        
        // Show order confirmation
        alert('Thank you for your order!\n\nOrder Details:\n- Order Number: #' + Date.now() + '\n- Payment: Cash on Delivery\n- Estimated Delivery: 3-5 business days\n\nYou will receive a confirmation email shortly.');
    }, 1000);
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.background = type === 'success' ? 'var(--success-color)' : 
                             type === 'warning' ? 'var(--warning-color)' : 
                             'var(--danger-color)';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}