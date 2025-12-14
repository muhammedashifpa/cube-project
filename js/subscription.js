/**
 * SUBSCRIPTION.JS
 * Handles subscription option expand/collapse functionality:
 * - Expand/collapse subscription content when option is selected
 * - Smooth animations
 * - Accessibility (ARIA attributes)
 */

/**
 * Initialize subscription functionality
 */
export function initSubscription() {
  const subscriptionOptions = document.querySelectorAll(".product__subscription-option");
  const subscriptionTypeRadios = document.querySelectorAll("input[name='subscription-type']");

  subscriptionOptions.forEach((option, index) => {
    const radio = option.querySelector("input[name='subscription-type']");
    const content = option.querySelector(".product__subscription-content");
    
    if (!radio || !content) return;

    // Set ARIA attributes for accessibility
    const optionId = `subscription-option-${index}`;
    const contentId = `subscription-content-${index}`;

    option.setAttribute("id", optionId);
    radio.setAttribute("aria-expanded", "false");
    radio.setAttribute("aria-controls", contentId);
    content.setAttribute("id", contentId);
    content.setAttribute("aria-labelledby", optionId);

    /**
     * Update subscription content visibility
     */
    function updateSubscriptionContent() {
      const isChecked = radio.checked;

      // Update ARIA attributes
      radio.setAttribute("aria-expanded", isChecked.toString());

      // Toggle active class
      option.classList.toggle("product__subscription-option--active", isChecked);

      // Handle content visibility with smooth animation
      if (isChecked) {
        // Expand: set max-height to scrollHeight for smooth expansion
        // Temporarily remove max-height to measure true content height
        content.style.maxHeight = "none";
        const scrollHeight = content.scrollHeight;
        content.style.maxHeight = "0";
        
        // Force reflow
        void content.offsetHeight;
        
        // Set final max-height
        requestAnimationFrame(() => {
          content.style.maxHeight = scrollHeight + "px";
        });
      } else {
        // Collapse: set max-height to 0
        content.style.maxHeight = content.scrollHeight + "px";
        // Force reflow
        void content.offsetHeight;
        content.style.maxHeight = "0";
      }
    }

    // Add change event listener to radio button
    radio.addEventListener("change", () => {
      // Collapse all other options
      subscriptionOptions.forEach((otherOption) => {
        if (otherOption !== option) {
          const otherRadio = otherOption.querySelector("input[name='subscription-type']");
          const otherContent = otherOption.querySelector(".product__subscription-content");
          if (otherRadio && otherContent) {
            otherRadio.setAttribute("aria-expanded", "false");
            otherOption.classList.remove("product__subscription-option--active");
            otherContent.style.maxHeight = "0";
          }
        }
      });
      
      // Update current option
      updateSubscriptionContent();
    });

    // Initialize state based on checked status
    if (radio.checked) {
      updateSubscriptionContent();
    } else {
      content.style.maxHeight = "0";
    }
  });
}

