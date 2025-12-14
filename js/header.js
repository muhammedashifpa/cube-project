/**
 * HEADER.JS
 * Handles header scroll behavior:
 * - Transparent header at top (in hero section)
 * - Disappears when scrolling a little bit (position absolute)
 * - Reappears when scrolling down further (white background)
 */

/**
 * Initialize header scroll functionality
 */
export function initHeader() {
  const header = document.querySelector(".header");

  if (!header) {
    console.warn("Header element not found");
    return;
  }

  /**
   * Handle scroll event
   */
  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Remove scroll class first
    header.classList.remove("header--scrolled");

    if (scrollY > 96) {
      // Scrolled past 96px: Show header with white background
      header.classList.add("header--scrolled");
    } else {
      // At top (0-96px): Transparent header
      header.classList.remove("header--scrolled");
    }
  }

  // Use requestAnimationFrame for better performance
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Listen for scroll events
  window.addEventListener("scroll", onScroll, { passive: true });

  // Check initial scroll position
  handleScroll();
}
