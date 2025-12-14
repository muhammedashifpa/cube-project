/**
 * SLIDER.JS
 * Handles image slider functionality:
 * - Arrow navigation
 * - Dot navigation
 * - Thumbnail navigation
 * - Auto-play (optional)
 */

/**
 * Initialize the slider component
 */
export function initSlider() {
  const slider = document.querySelector(".slider");
  if (!slider) return;

  const track = slider.querySelector(".slider__track");
  const slides = slider.querySelectorAll(".slider__slide");
  const prevArrow = slider.querySelector(".slider__arrow--prev");
  const nextArrow = slider.querySelector(".slider__arrow--next");
  const dots = slider.querySelectorAll(".slider__dot");
  const thumbnails = slider.querySelectorAll(".slider__thumbnail");

  if (!track || slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;

  /**
   * Update slider to show specific slide
   * @param {number} index - Slide index (0-based)
   */
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;

    currentSlide = index;

    // Update slide position
    const translateX = -index * 100;
    track.style.transform = `translateX(${translateX}%)`;

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("slider__dot--active", i === currentSlide);
    });

    // Update thumbnails - only highlight the first thumbnail that matches the current slide
    thumbnails.forEach((thumbnail, i) => {
      // Map thumbnail index to slide index (0-3 map to slide 0, 4-7 map to slide 1, etc.)
      const thumbnailSlideIndex = i % totalSlides;
      // Only highlight if it matches current slide AND it's the first matching thumbnail
      const isFirstMatch =
        thumbnailSlideIndex === currentSlide && i < totalSlides;
      thumbnail.classList.toggle("slider__thumbnail--active", isFirstMatch);
    });
  }

  /**
   * Go to next slide
   */
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
  }

  /**
   * Go to previous slide
   */
  function prevSlide() {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prevIndex);
  }

  // Arrow navigation
  if (nextArrow) {
    nextArrow.addEventListener("click", nextSlide);
  }

  if (prevArrow) {
    prevArrow.addEventListener("click", prevSlide);
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => goToSlide(index));
  });

  // Thumbnail navigation - map thumbnail index to slide index
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      const slideIndex = index % totalSlides;
      goToSlide(slideIndex);
    });
  });

  // Keyboard navigation
  slider.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  // Initialize first slide
  goToSlide(0);
}
