/**
 * CART.JS
 * Handles Add to Cart functionality:
 * - Updates cart URL based on selected subscription type and fragrances
 * - Shows cart URL in alert when button is clicked
 */

/**
 * Get the selected subscription type (single or double)
 * @returns {string|null} The selected subscription type value or null
 */
function getSelectedSubscriptionType() {
  const subscriptionRadio = document.querySelector(
    'input[name="subscription-type"]:checked'
  );
  return subscriptionRadio ? subscriptionRadio.value : null;
}

/**
 * Get the selected fragrance for single subscription
 * @returns {string|null} The selected fragrance value or null
 */
function getSelectedFragranceSingle() {
  const fragranceRadio = document.querySelector(
    'input[name="fragrance"]:checked'
  );
  return fragranceRadio ? fragranceRadio.value : null;
}

/**
 * Get the selected fragrances for double subscription
 * @returns {Object|null} Object with fragrance1 and fragrance2, or null
 */
function getSelectedFragrancesDouble() {
  const fragrance1Radio = document.querySelector(
    'input[name="fragrance-double-1"]:checked'
  );
  const fragrance2Radio = document.querySelector(
    'input[name="fragrance-double-2"]:checked'
  );

  if (fragrance1Radio && fragrance2Radio) {
    return {
      fragrance1: fragrance1Radio.value,
      fragrance2: fragrance2Radio.value,
    };
  }
  return null;
}

/**
 * Generate cart URL based on selected options
 * @returns {string} The generated cart URL
 */
function generateCartURL() {
  const subscriptionType = getSelectedSubscriptionType();
  let baseURL = "https://example.com/cart/add?";

  if (!subscriptionType) {
    return baseURL + "error=no_selection";
  }

  if (subscriptionType === "single") {
    const fragrance = getSelectedFragranceSingle();
    if (fragrance) {
      return `${baseURL}subscription=single&fragrance=${fragrance}`;
    }
    return baseURL + "subscription=single&error=no_fragrance";
  } else if (subscriptionType === "double") {
    const fragrances = getSelectedFragrancesDouble();
    if (fragrances) {
      return `${baseURL}subscription=double&fragrance1=${fragrances.fragrance1}&fragrance2=${fragrances.fragrance2}`;
    }
    return baseURL + "subscription=double&error=no_fragrances";
  }

  return baseURL + "error=unknown_subscription";
}

/**
 * Update the Add to Cart button href
 */
function updateCartButton() {
  const cartButton = document.getElementById("add-to-cart-btn");
  if (cartButton) {
    const cartURL = generateCartURL();
    cartButton.href = cartURL;
  }
}

/**
 * Handle Add to Cart button click - show alert with URL
 */
function handleCartButtonClick(event) {
  event.preventDefault(); // Prevent default link behavior
  const cartURL = generateCartURL();
  alert(`Cart URL:\n${cartURL}`);
}

/**
 * Initialize cart functionality
 */
export function initCart() {
  const cartButton = document.getElementById("add-to-cart-btn");

  if (!cartButton) {
    console.warn("Add to Cart button not found");
    return;
  }

  // Update cart URL initially
  updateCartButton();

  // Add click event listener to show alert
  cartButton.addEventListener("click", handleCartButtonClick);

  // Listen for changes in subscription type
  const subscriptionRadios = document.querySelectorAll(
    'input[name="subscription-type"]'
  );
  subscriptionRadios.forEach((radio) => {
    radio.addEventListener("change", updateCartButton);
  });

  // Listen for changes in single subscription fragrance
  const fragranceRadios = document.querySelectorAll('input[name="fragrance"]');
  fragranceRadios.forEach((radio) => {
    radio.addEventListener("change", updateCartButton);
  });

  // Listen for changes in double subscription fragrances
  const fragranceDouble1Radios = document.querySelectorAll(
    'input[name="fragrance-double-1"]'
  );
  fragranceDouble1Radios.forEach((radio) => {
    radio.addEventListener("change", updateCartButton);
  });

  const fragranceDouble2Radios = document.querySelectorAll(
    'input[name="fragrance-double-2"]'
  );
  fragranceDouble2Radios.forEach((radio) => {
    radio.addEventListener("change", updateCartButton);
  });
}

