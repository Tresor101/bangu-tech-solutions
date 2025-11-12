// Simplified Application - No ES6 Modules
console.log('🚀 Loading Bangu Tech Solutions...');

// Page content storage
const pageContent = {
    home: `
        <section class="hero section">
            <div class="container">
                <div class="hero-content grid grid-cols-2 items-center gap-8">
                    <div class="hero-text">
                        <h1 class="hero-title">
                            Building Powerful 
                            <span class="text-gradient">Web Applications</span>
                        </h1>
                        <p class="hero-subtitle">
                            Transform your ideas into cutting-edge web applications with modern technologies and expert development
                        </p>
                        <div class="hero-buttons flex gap-4 mt-8">
                            <a href="#" class="btn btn-primary" data-page="contact">Get Started</a>
                            <a href="#" class="btn btn-secondary" data-page="portfolio">View Our Work</a>
                        </div>
                    </div>
                    <div class="hero-visual">
                        <div class="hero-graphic">
                            <i class="fas fa-code"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="features section">
            <div class="container">
                <h2 class="section-title">Why Choose Bangu Tech Solutions?</h2>
                <div class="features-grid grid grid-cols-3 gap-8">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <h3>Fast Performance</h3>
                        <p>Optimized applications with lightning-fast load times and smooth user experiences.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h3>Secure & Reliable</h3>
                        <p>Enterprise-grade security and reliability built into every application we develop.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <h3>Mobile First</h3>
                        <p>Responsive designs that work perfectly on all devices and screen sizes.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    about: `
        <section class="about-hero section">
            <div class="container">
                <div class="about-content grid grid-cols-2 items-center gap-12">
                    <div class="about-text">
                        <h1 class="page-title">About Bangu Tech Solutions</h1>
                        <p class="text-lg mb-6">
                            At Bangu Tech Solutions, we specialize in creating innovative web applications that drive business success. With a passion for modern web technologies and user-centered design, we deliver scalable, secure, and high-performance solutions.
                        </p>
                        <p class="mb-8">
                            Our team combines years of experience with cutting-edge technologies to build applications that not only meet your current needs but scale with your business growth.
                        </p>
                        <div class="stats-grid grid grid-cols-3 gap-6">
                            <div class="stat-item text-center">
                                <div class="stat-number">50+</div>
                                <div class="stat-label">Projects Completed</div>
                            </div>
                            <div class="stat-item text-center">
                                <div class="stat-number">3+</div>
                                <div class="stat-label">Years Experience</div>
                            </div>
                            <div class="stat-item text-center">
                                <div class="stat-number">100%</div>
                                <div class="stat-label">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                    <div class="about-visual">
                        <div class="about-graphic">
                            <i class="fas fa-users"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    services: `
        <section class="services-hero section">
            <div class="container">
                <h1 class="page-title text-center">Our Services</h1>
                <p class="text-center text-lg mb-12">Comprehensive web development solutions to bring your vision to life</p>
                
                <div class="services-grid grid grid-cols-2 gap-8">
                    <div class="service-card">
                        <div class="service-icon">
                            <i class="fas fa-laptop-code"></i>
                        </div>
                        <h3>Full-Stack Development</h3>
                        <p>Complete web application development from frontend to backend using modern JavaScript frameworks and technologies.</p>
                    </div>
                    <div class="service-card">
                        <div class="service-icon">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <h3>Responsive Design</h3>
                        <p>Mobile-first responsive web applications that work perfectly across all devices and screen sizes.</p>
                    </div>
                    <div class="service-card">
                        <div class="service-icon">
                            <i class="fas fa-database"></i>
                        </div>
                        <h3>Database Integration</h3>
                        <p>Robust database design and integration with SQL and NoSQL databases for optimal data management.</p>
                    </div>
                    <div class="service-card">
                        <div class="service-icon">
                            <i class="fas fa-cloud"></i>
                        </div>
                        <h3>Cloud Deployment</h3>
                        <p>Seamless deployment and hosting on cloud platforms like AWS, Vercel, and Netlify for maximum performance.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    portfolio: `
        <section class="portfolio-hero section">
            <div class="container">
                <h1 class="page-title text-center">Our Portfolio</h1>
                <p class="text-center text-lg mb-12">Showcase of our recent work and successful projects</p>
                
                <div class="portfolio-grid grid grid-cols-2 gap-8">
                    <div class="portfolio-item">
                        <div class="portfolio-image">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <div class="portfolio-content">
                            <h3>E-Commerce Platform</h3>
                            <p>Full-featured online store with payment integration, inventory management, and admin dashboard.</p>
                            <div class="tech-stack flex gap-2 mt-4">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Node.js</span>
                                <span class="tech-tag">MongoDB</span>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-image">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <div class="portfolio-content">
                            <h3>Project Management Tool</h3>
                            <p>Collaborative project management application with real-time updates and team communication features.</p>
                            <div class="tech-stack flex gap-2 mt-4">
                                <span class="tech-tag">Vue.js</span>
                                <span class="tech-tag">Express</span>
                                <span class="tech-tag">Socket.io</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    contact: `
        <section class="contact-hero section">
            <div class="container">
                <h1 class="page-title text-center">Contact Us</h1>
                <p class="text-center text-lg mb-12">Let's discuss your project and bring your vision to life</p>
                
                <div class="contact-content grid grid-cols-2 gap-12">
                    <div class="contact-info">
                        <h3 class="mb-6">Get In Touch</h3>
                        <div class="contact-details">
                            <div class="contact-item mb-4">
                                <i class="fas fa-envelope mr-3"></i>
                                <span>info@bangutechsolutions.com</span>
                            </div>
                            <div class="contact-item mb-4">
                                <i class="fas fa-phone mr-3"></i>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div class="contact-item mb-4">
                                <i class="fas fa-map-marker-alt mr-3"></i>
                                <span>Tech Innovation Hub, Digital City</span>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form-container">
                        <form class="contact-form">
                            <div class="form-group mb-4">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required>
                            </div>
                            <div class="form-group mb-4">
                                <label for="email">Your Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required>
                            </div>
                            <div class="form-group mb-4">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `
};

// Simple Router
class SimpleRouter {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

    init() {
        // Setup navigation
        this.setupNavigation();
        
        // Load initial page
        this.loadPage('home');
        
        console.log('✅ Router initialized');
    }

    setupNavigation() {
        document.addEventListener('click', (e) => {
            const navLink = e.target.closest('[data-page]');
            if (navLink) {
                e.preventDefault();
                const page = navLink.dataset.page;
                this.loadPage(page);
            }
        });
    }

    loadPage(page) {
        if (!pageContent[page]) {
            console.warn(`Page not found: ${page}`);
            return;
        }

        console.log(`🧭 Loading page: ${page}`);

        // Update navigation state
        this.updateNavState(page);

        // Load content
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            // Add fade effect
            mainContent.style.opacity = '0';
            
            setTimeout(() => {
                mainContent.innerHTML = pageContent[page];
                mainContent.style.opacity = '1';
                
                // Initialize page-specific functionality
                this.initializePage(page);
                
                // Update current page
                this.currentPage = page;
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                console.log(`✅ Page loaded: ${page}`);
            }, 150);
        }
    }

    updateNavState(activePage) {
        const navLinks = document.querySelectorAll('[data-page]');
        navLinks.forEach(link => {
            const page = link.dataset.page;
            link.classList.toggle('active', page === activePage);
        });
    }

    initializePage(page) {
        // Add page-specific initialization here
        if (page === 'home') {
            this.initializeHome();
        } else if (page === 'contact') {
            this.initializeContact();
        }
    }

    initializeHome() {
        // Add any home page specific functionality
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.classList.add('animate-fade-in');
        }
    }

    initializeContact() {
        // Setup contact form
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! We\'ll get back to you soon.');
                contactForm.reset();
            });
        }
    }
}

// Navbar functionality
class SimpleNavbar {
    constructor() {
        this.init();
    }

    init() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.navbar')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }

        // Add scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            }
        });

        console.log('✅ Navbar initialized');
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 DOM loaded, initializing application...');
    
    try {
        // Initialize components
        new SimpleNavbar();
        new SimpleRouter();
        
        console.log('🎉 Application initialized successfully!');
        
    } catch (error) {
        console.error('❌ Application initialization failed:', error);
        document.body.innerHTML = `
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                text-align: center;
                padding: 2rem;
            ">
                <div>
                    <h2 style="color: #e74c3c; margin-bottom: 1rem;">Application Error</h2>
                    <p style="color: #666; margin-bottom: 1rem;">There was an error loading the application.</p>
                    <button onclick="window.location.reload()" style="
                        background: #3498db;
                        color: white;
                        border: none;
                        padding: 0.5rem 1rem;
                        border-radius: 4px;
                        cursor: pointer;
                    ">Reload Page</button>
                </div>
            </div>
        `;
    }
});