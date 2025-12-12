/**
 * CART.JS
 * Handles cart functionality:
 * - Subscription radio group updates
 * - Dynamic Add to Cart URL updates
 * - Expandable subscription options
 */

/**
 * Initialize cart functionality
 */
export function initCart() {
    const subscriptionRadios = document.querySelectorAll('.subscription__radio');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const expandBtn = document.querySelector('.subscription__expand');
    const subscriptionOptions = document.querySelector('.subscription__options');

    if (!addToCartBtn) return;

    // Base cart URL - update this with your actual cart endpoint
    const baseCartUrl = '/cart/add';
    
    /**
     * Update Add to Cart URL based on selected subscription
     * @param {string} subscriptionValue - Selected subscription value
     */
    function updateCartUrl(subscriptionValue) {
        const url = new URL(baseCartUrl, window.location.origin);
        url.searchParams.set('subscription', subscriptionValue);
        addToCartBtn.href = url.toString();
    }

    /**
     * Handle subscription radio change
     */
    subscriptionRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                updateCartUrl(e.target.value);
            }
        });
    });

    /**
     * Toggle expanded subscription options
     */
    if (expandBtn && subscriptionOptions) {
        expandBtn.addEventListener('click', () => {
            const isExpanded = subscriptionOptions.classList.toggle('subscription__options--expanded');
            const expandText = expandBtn.querySelector('.subscription__expand-text');
            const expandIcon = expandBtn.querySelector('.subscription__expand-icon');
            
            if (expandText) {
                expandText.textContent = isExpanded ? 'Less Options' : 'More Options';
            }
            
            // Update icon/arrow direction if needed
            if (expandIcon) {
                expandIcon.classList.toggle('subscription__expand-icon--rotated', isExpanded);
            }
        });
    }

    // Initialize with default selected subscription
    const selectedRadio = document.querySelector('.subscription__radio:checked');
    if (selectedRadio) {
        updateCartUrl(selectedRadio.value);
    }
}

