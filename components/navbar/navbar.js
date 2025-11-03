// Navbar Component JavaScript
export function init(container) {
    console.log('🧭 Initializing navbar component');
    
    const navbar = container || document.getElementById('main-navbar');
    if (!navbar) {
        console.error('Navbar element not found');
        return;
    }

    const hamburger = navbar.querySelector('.hamburger');
    const navMenu = navbar.querySelector('.nav-menu');
    
    // Setup hamburger menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking on nav links
        navMenu.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Handle scroll effect
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add scrolled class for styling
        navbar.classList.toggle('scrolled', currentScrollY > 50);
        
        lastScrollY = currentScrollY;
    });

    console.log('✅ Navbar component initialized');
}