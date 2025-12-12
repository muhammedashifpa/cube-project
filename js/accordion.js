/**
 * ACCORDION.JS
 * Handles accordion functionality:
 * - Expand/collapse accordion items
 * - Smooth animations
 * - Accessibility (ARIA attributes)
 */

/**
 * Initialize accordion functionality
 */
export function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach((item, index) => {
        const header = item.querySelector('.accordion__header');
        const content = item.querySelector('.accordion__content');
        const icon = item.querySelector('.accordion__icon');

        if (!header || !content) return;

        // Set ARIA attributes for accessibility
        const itemId = `accordion-item-${index}`;
        const contentId = `accordion-content-${index}`;

        header.setAttribute('id', itemId);
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', contentId);
        content.setAttribute('id', contentId);
        content.setAttribute('aria-labelledby', itemId);

        /**
         * Toggle accordion item
         */
        function toggleAccordion() {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;

            // Update ARIA attributes
            header.setAttribute('aria-expanded', newState.toString());

            // Toggle active class
            item.classList.toggle('accordion__item--active', newState);

            // Update icon if present
            if (icon) {
                icon.classList.toggle('accordion__icon--rotated', newState);
            }

            // Handle content visibility
            if (newState) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        }

        // Add click event listener
        header.addEventListener('click', toggleAccordion);

        // Initialize closed state
        content.style.maxHeight = '0';
    });
}

