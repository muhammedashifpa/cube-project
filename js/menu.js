/**
 * MENU.JS
 * Handles mobile/tablet drawer functionality:
 * - Toggle drawer open/closed
 * - Close drawer on overlay click
 * - Close drawer on link click
 * - Accessibility (ARIA attributes)
 */

/**
 * Initialize drawer menu
 */
export function initMenu() {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const drawer = document.querySelector(".drawer");
  const drawerOverlay = document.querySelector(".drawer__overlay");
  const drawerLinks = document.querySelectorAll(".drawer__nav-link");

  if (!menuToggle || !drawer) return;

  /**
   * Close drawer
   */
  function closeDrawer() {
    drawer.classList.remove("drawer--open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  /**
   * Toggle drawer open/closed state
   */
  function toggleDrawer() {
    const isOpen = drawer.classList.toggle("drawer--open");

    // Update ARIA attributes
    menuToggle.setAttribute("aria-expanded", isOpen.toString());
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

    // Prevent body scroll when drawer is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  // Toggle drawer on button click
  menuToggle.addEventListener("click", toggleDrawer);

  // Close drawer when clicking on overlay
  if (drawerOverlay) {
    drawerOverlay.addEventListener("click", closeDrawer);
  }

  // Close drawer when clicking on a nav link
  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // Close drawer on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("drawer--open")) {
      closeDrawer();
    }
  });

  // Initialize ARIA attributes
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
  menuToggle.setAttribute("aria-controls", "mobile-drawer");
  drawer.setAttribute("id", "mobile-drawer");
}
