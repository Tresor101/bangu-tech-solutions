// Router Module - Modern SPA routing system
export class Router {
    constructor(componentLoader, eventBus) {
        this.componentLoader = componentLoader;
        this.eventBus = eventBus;
        this.currentPage = 'home';
        this.pages = ['home', 'about', 'services', 'portfolio', 'contact'];
        this.isNavigating = false;
    }

    async init() {
        console.log('🧭 Initializing router...');
        
        // Setup navigation event listeners
        this.setupNavigation();
        
        // Load initial page
        await this.navigate('home', false);
        
        console.log('✅ Router initialized');
    }

    setupNavigation() {
        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            const navLink = e.target.closest('[data-page]');
            if (navLink) {
                e.preventDefault();
                const page = navLink.dataset.page;
                this.navigate(page);
            }
        });

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            const page = e.state?.page || 'home';
            this.navigate(page, false);
        });
    }

    async navigate(page, updateHistory = true) {
        // Validate page
        if (!this.pages.includes(page)) {
            console.warn(`⚠️ Invalid page: ${page}`);
            page = 'home';
        }

        // Prevent navigation if already navigating
        if (this.isNavigating) {
            console.log('⏳ Navigation in progress, skipping...');
            return;
        }

        // Skip if already on the page
        if (page === this.currentPage) {
            console.log(`📍 Already on page: ${page}`);
            return;
        }

        console.log(`🧭 Navigating to: ${page}`);
        
        try {
            this.isNavigating = true;
            
            // Update browser history
            if (updateHistory) {
                window.history.pushState({ page }, '', `#${page}`);
            }

            // Update navigation state
            this.updateNavState(page);
            
            // Load page content
            await this.loadPage(page);
            
            // Update current page
            this.currentPage = page;
            
            // Emit navigation event
            this.eventBus.emit('page:changed', page);
            
            console.log(`✅ Navigation complete: ${page}`);
            
        } catch (error) {
            console.error(`❌ Navigation failed: ${error.message}`);
            this.eventBus.emit('error', error);
        } finally {
            this.isNavigating = false;
        }
    }

    async loadPage(page) {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) {
            throw new Error('Main content container not found');
        }

        // Add loading state
        mainContent.classList.add('content-loading');
        
        try {
            // Load page component
            const pageContent = await this.componentLoader.loadPage(page);
            
            // Add transition effect
            mainContent.style.opacity = '0';
            
            await new Promise(resolve => setTimeout(resolve, 150));
            
            // Update content
            mainContent.innerHTML = pageContent;
            
            // Initialize page-specific JavaScript
            await this.componentLoader.initializePage(page);
            
            // Show content with animation
            mainContent.style.opacity = '1';
            mainContent.classList.add('animate-fade-in');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        } finally {
            // Remove loading state
            mainContent.classList.remove('content-loading');
        }
    }

    updateNavState(activePage) {
        // Update navigation links
        const navLinks = document.querySelectorAll('[data-page]');
        navLinks.forEach(link => {
            const page = link.dataset.page;
            link.classList.toggle('active', page === activePage);
        });
    }

    getCurrentPage() {
        return this.currentPage;
    }

    getPages() {
        return [...this.pages];
    }
}