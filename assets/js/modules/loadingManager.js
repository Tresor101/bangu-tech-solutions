// Loading Manager Module - Handle loading states and animations
export class LoadingManager {
    constructor() {
        this.loadingElement = null;
        this.isVisible = false;
    }

    show(message = 'Loading...') {
        if (this.isVisible) return;

        this.loadingElement = document.getElementById('loader');
        
        if (this.loadingElement) {
            // Update message if provided
            const messageElement = this.loadingElement.querySelector('p');
            if (messageElement && message) {
                messageElement.textContent = message;
            }
            
            this.loadingElement.style.display = 'flex';
            this.isVisible = true;
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
    }

    hide() {
        if (!this.isVisible || !this.loadingElement) return;

        // Add fade out animation
        this.loadingElement.style.opacity = '0';
        
        setTimeout(() => {
            if (this.loadingElement) {
                this.loadingElement.style.display = 'none';
                this.loadingElement.style.opacity = '1'; // Reset for next time
            }
            
            // Restore body scroll
            document.body.style.overflow = '';
            
            this.isVisible = false;
        }, 300);
    }

    updateMessage(message) {
        if (this.loadingElement) {
            const messageElement = this.loadingElement.querySelector('p');
            if (messageElement) {
                messageElement.textContent = message;
            }
        }
    }

    isLoading() {
        return this.isVisible;
    }
}