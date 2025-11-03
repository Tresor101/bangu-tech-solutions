// Main Application - Modern ES6 Module Architecture
import { Router } from './modules/router.js';
import { ComponentLoader } from './modules/componentLoader.js';
import { EventBus } from './modules/eventBus.js';
import { LoadingManager } from './modules/loadingManager.js';

class BanguTechApp {
    constructor() {
        this.eventBus = new EventBus();
        this.loadingManager = new LoadingManager();
        this.componentLoader = new ComponentLoader(this.eventBus);
        this.router = new Router(this.componentLoader, this.eventBus);
        
        this.init();
    }

    async init() {
        console.log('🚀 Initializing Bangu Tech Solutions App...');
        
        try {
            // Show loading screen
            this.loadingManager.show();
            
            // Wait for DOM to be ready
            await this.waitForDOM();
            
            // Initialize core components
            await this.initializeComponents();
            
            // Initialize router
            await this.router.init();
            
            // Setup global event listeners
            this.setupEventListeners();
            
            // Hide loading screen
            this.loadingManager.hide();
            
            console.log('✅ App initialization complete');
            
        } catch (error) {
            console.error('❌ App initialization failed:', error);
            this.handleInitError(error);
        }
    }

    waitForDOM() {
        return new Promise((resolve) => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });
    }

    async initializeComponents() {
        // Load navbar component first
        await this.componentLoader.loadComponent('navbar');
        
        // Load footer component
        await this.componentLoader.loadComponent('footer');
        
        console.log('📦 Core components loaded');
    }

    setupEventListeners() {
        // Handle navigation events
        this.eventBus.on('navigate', (page) => {
            this.router.navigate(page);
        });

        // Handle component loaded events
        this.eventBus.on('component:loaded', (componentName) => {
            console.log(`📦 Component loaded: ${componentName}`);
        });

        // Handle errors
        this.eventBus.on('error', (error) => {
            console.error('Application error:', error);
            this.showErrorMessage(error.message || 'An unexpected error occurred');
        });

        // Handle window resize
        window.addEventListener('resize', this.debounce(() => {
            this.eventBus.emit('window:resize');
        }, 250));

        // Handle visibility change
        document.addEventListener('visibilitychange', () => {
            this.eventBus.emit('visibility:change', !document.hidden);
        });
    }

    handleInitError(error) {
        this.loadingManager.hide();
        
        const errorMessage = document.createElement('div');
        errorMessage.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 2rem;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                text-align: center;
                max-width: 400px;
                z-index: 10000;
            ">
                <h3 style="color: #e74c3c; margin-bottom: 1rem;">
                    ⚠️ Application Error
                </h3>
                <p style="margin-bottom: 1.5rem; color: #666;">
                    Sorry, there was an error loading the application.
                </p>
                <button onclick="window.location.reload()" style="
                    background: #3498db;
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">
                    Reload Page
                </button>
            </div>
        `;
        
        document.body.appendChild(errorMessage);
    }

    showErrorMessage(message) {
        // Create or update error notification
        let notification = document.getElementById('error-notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'error-notification';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #e74c3c;
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                z-index: 10000;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                max-width: 350px;
            `;
            document.body.appendChild(notification);
        }

        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span>⚠️</span>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="background: none; border: none; color: white; margin-left: auto; cursor: pointer; font-size: 1.2rem;">
                    ×
                </button>
            </div>
        `;

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Utility function for debouncing
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize the application
new BanguTechApp();