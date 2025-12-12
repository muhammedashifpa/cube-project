/**
 * MENU.JS
 * Handles hamburger menu functionality:
 * - Toggle mobile/tablet navigation
 * - Close menu on outside click
 * - Close menu on link click
 * - Accessibility (ARIA attributes)
 */

/**
 * Initialize hamburger menu
 */
export function initMenu() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__nav-link');

    if (!menuToggle || !nav) return;

    /**
     * Toggle menu open/closed state
     */
    function toggleMenu() {
        const isOpen = nav.classList.toggle('header__nav--open');
        
        // Update ARIA attributes
        menuToggle.setAttribute('aria-expanded', isOpen.toString());
        menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

        // Prevent body scroll when menu is open (optional)
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    /**
     * Close menu
     */
    function closeMenu() {
        nav.classList.remove('header__nav--open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
    }

    // Toggle menu on button click
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close menu when clicking outside (optional)
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('header__nav--open')) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMenu();
            }
        }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
            closeMenu();
        }
    });

    // Initialize ARIA attributes
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    menuToggle.setAttribute('aria-controls', 'header-nav');
    nav.setAttribute('id', 'header-nav');
}

