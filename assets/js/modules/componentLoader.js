// Component Loader Module - Dynamic component loading system
export class ComponentLoader {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.loadedComponents = new Map();
        this.loadedPages = new Map();
        this.loadingPromises = new Map();
    }

    async loadComponent(componentName) {
        // Check if component is already loaded
        if (this.loadedComponents.has(componentName)) {
            return this.loadedComponents.get(componentName);
        }

        // Check if component is currently loading
        if (this.loadingPromises.has(componentName)) {
            return this.loadingPromises.get(componentName);
        }

        console.log(`📦 Loading component: ${componentName}`);

        // Create loading promise
        const loadingPromise = this.loadComponentFiles(componentName);
        this.loadingPromises.set(componentName, loadingPromise);

        try {
            const component = await loadingPromise;
            this.loadedComponents.set(componentName, component);
            this.eventBus.emit('component:loaded', componentName);
            return component;
        } catch (error) {
            console.error(`❌ Failed to load component ${componentName}:`, error);
            throw error;
        } finally {
            this.loadingPromises.delete(componentName);
        }
    }

    async loadComponentFiles(componentName) {
        const componentPath = `components/${componentName}`;
        
        try {
            // Load HTML, CSS, and JS files in parallel
            const [htmlContent, cssContent] = await Promise.all([
                this.loadHTML(`${componentPath}/${componentName}.html`),
                this.loadCSS(`${componentPath}/${componentName}.css`)
            ]);

            // Try to load JavaScript (optional)
            let jsModule = null;
            try {
                jsModule = await this.loadJS(`${componentPath}/${componentName}.js`);
            } catch (error) {
                // JS file is optional, don't fail if it doesn't exist
                console.log(`📝 No JS file for component: ${componentName}`);
            }

            return {
                name: componentName,
                html: htmlContent,
                css: cssContent,
                js: jsModule
            };
        } catch (error) {
            throw new Error(`Failed to load component files for ${componentName}: ${error.message}`);
        }
    }

    async loadPage(pageName) {
        // Check if page is already loaded
        if (this.loadedPages.has(pageName)) {
            return this.loadedPages.get(pageName);
        }

        console.log(`📄 Loading page: ${pageName}`);

        try {
            const pageContent = await this.loadHTML(`pages/${pageName}/${pageName}.html`);
            this.loadedPages.set(pageName, pageContent);
            return pageContent;
        } catch (error) {
            console.error(`❌ Failed to load page ${pageName}:`, error);
            throw error;
        }
    }

    async initializePage(pageName) {
        try {
            // Try to load and execute page-specific JavaScript
            const pageModule = await this.loadJS(`pages/${pageName}/${pageName}.js`);
            if (pageModule && typeof pageModule.init === 'function') {
                await pageModule.init();
                console.log(`🎬 Initialized page script: ${pageName}`);
            }
        } catch (error) {
            // Page JS is optional
            console.log(`📝 No JS initialization for page: ${pageName}`);
        }
    }

    async loadHTML(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return await response.text();
        } catch (error) {
            throw new Error(`Failed to load HTML from ${url}: ${error.message}`);
        }
    }

    async loadCSS(url) {
        return new Promise((resolve, reject) => {
            // Check if CSS is already loaded
            const existingLink = document.querySelector(`link[href="${url}"]`);
            if (existingLink) {
                resolve();
                return;
            }

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            
            link.onload = () => {
                console.log(`🎨 CSS loaded: ${url}`);
                resolve();
            };
            
            link.onerror = () => {
                reject(new Error(`Failed to load CSS: ${url}`));
            };

            document.head.appendChild(link);
        });
    }

    async loadJS(url) {
        try {
            // Use dynamic import for ES6 modules
            const module = await import(url);
            console.log(`📜 JS module loaded: ${url}`);
            return module;
        } catch (error) {
            throw new Error(`Failed to load JS module from ${url}: ${error.message}`);
        }
    }

    // Method to insert component HTML into a container
    async insertComponent(componentName, containerId) {
        try {
            const container = document.getElementById(containerId);
            if (!container) {
                throw new Error(`Container not found: ${containerId}`);
            }

            const component = await this.loadComponent(componentName);
            container.innerHTML = component.html;

            // Initialize component if it has a JS module with init function
            if (component.js && typeof component.js.init === 'function') {
                await component.js.init(container);
            }

            console.log(`✅ Component inserted: ${componentName} -> ${containerId}`);
        } catch (error) {
            console.error(`❌ Failed to insert component ${componentName}:`, error);
            throw error;
        }
    }

    // Get loaded component
    getComponent(componentName) {
        return this.loadedComponents.get(componentName);
    }

    // Clear cache
    clearCache() {
        this.loadedComponents.clear();
        this.loadedPages.clear();
        console.log('🗑️ Component cache cleared');
    }
}