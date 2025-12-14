/**
 * MAIN.JS
 * Main entry point for the application
 * Imports and initializes all modules
 */

import { initSlider } from "./slider.js";
import { initAccordion } from "./accordion.js";
import { initCounter } from "./counter.js";
import { initMenu } from "./menu.js";
import { initSubscription } from "./subscription.js";
import { initCart } from "./cart.js";
import { initHeader } from "./header.js";

/**
 * Initialize all modules when DOM is ready
 */
function init() {
  // Initialize slider functionality
  initSlider();

  // Initialize accordion functionality
  initAccordion();

  // Initialize counter animations
  initCounter();

  // Initialize hamburger menu
  initMenu();

  // Initialize subscription expand/collapse
  initSubscription();

  // Initialize cart functionality
  initCart();

  // Initialize header scroll behavior
  initHeader();
}

// Wait for DOM to be fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is already loaded
  init();
}
