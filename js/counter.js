/**
 * COUNTER.JS
 * Handles percentage counter animations:
 * - Uses IntersectionObserver for performance
 * - Animated counting from 0 to target value
 * - Triggers when element enters viewport
 */

/**
 * Animate counter from start to target value
 * @param {HTMLElement} element - Counter element
 * @param {number} target - Target value
 * @param {number} duration - Animation duration in milliseconds
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    /**
     * Animation frame function
     */
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Ensure final value is set
            element.textContent = target;
        }
    }

    requestAnimationFrame(updateCounter);
}

/**
 * Initialize counter animations with IntersectionObserver
 */
export function initCounter() {
    const counters = document.querySelectorAll('.counter__value');

    if (counters.length === 0) return;

    /**
     * IntersectionObserver callback
     */
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'), 10);

                if (!isNaN(target) && !counter.classList.contains('counter__value--animated')) {
                    counter.classList.add('counter__value--animated');
                    animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            }
        });
    }

    // Create IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of element is visible
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all counters
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

