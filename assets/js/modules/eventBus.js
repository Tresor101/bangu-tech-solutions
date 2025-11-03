// Event Bus Module - Global event management system
export class EventBus {
    constructor() {
        this.events = new Map();
    }

    // Subscribe to an event
    on(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        
        this.events.get(eventName).push(callback);
        
        // Return unsubscribe function
        return () => this.off(eventName, callback);
    }

    // Subscribe to an event only once
    once(eventName, callback) {
        const unsubscribe = this.on(eventName, (...args) => {
            unsubscribe();
            callback(...args);
        });
        
        return unsubscribe;
    }

    // Unsubscribe from an event
    off(eventName, callback) {
        if (!this.events.has(eventName)) {
            return;
        }

        const callbacks = this.events.get(eventName);
        const index = callbacks.indexOf(callback);
        
        if (index > -1) {
            callbacks.splice(index, 1);
        }

        // Remove event if no callbacks left
        if (callbacks.length === 0) {
            this.events.delete(eventName);
        }
    }

    // Emit an event
    emit(eventName, ...args) {
        if (!this.events.has(eventName)) {
            return;
        }

        const callbacks = this.events.get(eventName).slice(); // Create copy to avoid issues if callbacks modify the array
        
        callbacks.forEach(callback => {
            try {
                callback(...args);
            } catch (error) {
                console.error(`Error in event callback for '${eventName}':`, error);
            }
        });
    }

    // Clear all events or specific event
    clear(eventName = null) {
        if (eventName) {
            this.events.delete(eventName);
        } else {
            this.events.clear();
        }
    }

    // Get list of all event names
    getEventNames() {
        return Array.from(this.events.keys());
    }

    // Get number of listeners for an event
    getListenerCount(eventName) {
        return this.events.has(eventName) ? this.events.get(eventName).length : 0;
    }

    // Debug method to log all events
    debug() {
        console.log('📡 Event Bus State:');
        this.events.forEach((callbacks, eventName) => {
            console.log(`  ${eventName}: ${callbacks.length} listeners`);
        });
    }
}