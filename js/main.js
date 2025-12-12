/**
 * MAIN.JS
 * Main entry point for the application
 * Imports and initializes all modules
 */

import { initSlider } from './slider.js';
import { initCart } from './cart.js';
import { initAccordion } from './accordion.js';
import { initCounter } from './counter.js';
import { initMenu } from './menu.js';

/**
 * Initialize all modules when DOM is ready
 */
function init() {
    // Initialize slider functionality
    initSlider();
    
    // Initialize cart functionality (subscription updates)
    initCart();
    
    // Initialize accordion functionality
    initAccordion();
    
    // Initialize counter animations
    initCounter();
    
    // Initialize hamburger menu
    initMenu();
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already loaded
    init();
}

