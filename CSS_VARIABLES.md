# CSS Variables Documentation

This document provides a comprehensive guide to all CSS variables used in the GTG Perfumes project. All values are extracted from the Figma design and organized for easy reference.

## Table of Contents

- [Colors](#colors)
- [Gradients](#gradients)
- [Typography](#typography)
- [Spacing](#spacing)
- [Border & Radius](#border--radius)
- [Shadows](#shadows)
- [Transitions](#transitions)
- [Z-Index Layers](#z-index-layers)
- [Usage Examples](#usage-examples)

---

## Colors

### Primary Colors

```scss
--color-primary: #032E15              // Dark green - main brand color
--color-primary-light: #016630        // Lighter green - gradient end
--color-primary-mid: #008236          // Mid green - badge gradient
--color-primary-bright: #00C950       // Bright green - star rating, badge gradient end
```

### Secondary Colors

```scss
--color-secondary: #032E15             // Secondary text (same as primary)
--color-accent: #0D542B                // Accent color (e.g., "power" label)
--color-star: #00C950                  // Star rating color
```

### Text Colors

```scss
--color-text: #032E15                  // Main text color
--color-text-nav: #162456              // Navigation text color
--color-text-light: #919798            // Light text color
--color-text-muted: #B8B8B8            // Muted text (strikethrough prices)
--color-text-white: #FFFFFF             // White text
--color-footer-text: #FFFFFF           // Footer text color
--color-newsletter-title: #FEF3E4      // Newsletter title (cream/beige)
```

### Background Colors

```scss
--color-bg: #ffffff                     // Main background (white)
--color-bg-light: #f8fafc              // Light background
--color-bg-dark: #0f172a               // Dark background
```

### Border Colors

```scss
--color-border: #919798                 // Standard border color
--color-border-light: #B8B8B8          // Light border color
```

### Button Colors

```scss
--color-subscribe-btn: #653b09; // Subscribe button background (dark brown)
```

### Status Colors

```scss
--color-error: #ef4444                  // Error messages
--color-success: #10b981                // Success messages
```

---

## Gradients

### Primary Gradient (Shop Now Button)

```scss
--gradient-primary: linear-gradient(180deg, #032e15 0%, #016630 100%);
```

**Usage:** Main CTA buttons, "Shop Now" buttons

### Primary Gradient (Transparent - Award Badge)

```scss
--gradient-primary-transparent: linear-gradient(
  180deg,
  rgba(3, 46, 21, 0.6) 0%,
  rgba(1, 102, 48, 0.6) 100%
);
```

**Usage:** Award badge background, stat number backgrounds

### Badge Gradient (Most Popular)

```scss
--gradient-badge: linear-gradient(
  270deg,
  #032e15 0%,
  #008236 51.92%,
  #00c950 100%
);
```

**Usage:** "Most Popular" badge background

---

## Typography

### Font Families

```scss
--font-family-primary: 'Inter', sans-serif      // Main font - used for most content
--font-family-secondary: 'Oxanium', sans-serif // Secondary font - footer navigation, privacy text
```

**Note:** Make sure to include these fonts in your HTML (Google Fonts or self-hosted).

### Font Sizes

All font sizes are in `rem` units (base: 16px = 1rem).

| Variable                  | Value        | Pixel Equivalent | Usage                                        |
| ------------------------- | ------------ | ---------------- | -------------------------------------------- |
| `--font-size-xs`          | `0.759rem`   | 12.14px          | Privacy text                                 |
| `--font-size-sm`          | `0.8125rem`  | 13px             | Review text                                  |
| `--font-size-base`        | `0.875rem`   | 14px             | Subscription description                     |
| `--font-size-nav-footer`  | `0.885rem`   | 14.16px          | Footer navigation links                      |
| `--font-size-body`        | `1.01125rem` | 16.18px          | Body text, nav, newsletter, subscribe button |
| `--font-size-md`          | `1.125rem`   | 18px             | Standard medium size                         |
| `--font-size-lg`          | `1.25rem`    | 20px             | Subscription label, price                    |
| `--font-size-xl`          | `1.264rem`   | 20.23px          | Most Popular badge                           |
| `--font-size-2xl`         | `1.375rem`   | 22px             | "power" label                                |
| `--font-size-3xl`         | `2.25rem`    | 36px             | Main logo "GTG Perfumes"                     |
| `--font-size-logo-footer` | `2.645rem`   | 42.32px          | Footer "GTG" logo                            |
| `--font-size-hero`        | `3.5rem`     | 56px             | Hero headline "Live your best life"          |
| `--font-size-stat`        | `4.5rem`     | 72px             | Stat numbers "10x"                           |

### Font Weights

```scss
--font-weight-light: 300      // Light - footer nav, privacy, reviews, labels
--font-weight-normal: 400     // Regular - nav text, body text
--font-weight-medium: 500     // Medium - standard weight
--font-weight-semibold: 600  // Semi Bold - logo
--font-weight-bold: 700       // Bold - headlines, badges, buttons, newsletter title
```

### Line Heights

| Variable                | Value   | Usage                                       |
| ----------------------- | ------- | ------------------------------------------- |
| `--line-height-none`    | `1.0`   | Logo, stats, reviews (100%)                 |
| `--line-height-tight`   | `1.04`  | "power" label (104%)                        |
| `--line-height-normal`  | `1.2`   | Most Popular badge                          |
| `--line-height-body`    | `1.5`   | Nav, footer nav, newsletter, privacy (150%) |
| `--line-height-relaxed` | `1.12`  | Hero headline (112%)                        |
| `--line-height-loose`   | `1.875` | Description text                            |

### Letter Spacing

```scss
--letter-spacing-tight: -0.083rem   // -1.33px - Hero headline
--letter-spacing-normal: 0          // 0px - Most text
--letter-spacing-wide: 0.056rem     // 0.9px - Subscription text, prices
```

---

## Spacing

All spacing values use an 8px base scale (0.5rem increments).

```scss
--spacing-xs: 0.25rem    // 4px
--spacing-sm: 0.5rem     // 8px
--spacing-md: 1rem       // 16px
--spacing-lg: 1.5rem     // 24px
--spacing-xl: 2rem       // 32px
--spacing-2xl: 3rem      // 48px
--spacing-3xl: 4rem      // 64px
```

### Button Padding

```scss
--button-padding-y: 0.759rem   // 12.14px - top/bottom padding
--button-padding-x: 1.517rem   // 24.27px - left/right padding
--button-gap: 0.506rem         // 8.09px - gap between button elements
```

---

## Border & Radius

### Border Width

```scss
--border-width: 1.01px;
```

### Border Colors

```scss
--border-color: #b8b8b8;
```

### Border Radius

```scss
--radius-sm: 0.25rem     // 4px - small elements
--radius-md: 0.5rem      // 8px - buttons, badges
--radius-lg: 1rem        // 16px - large cards
--radius-full: 9999px    // Full circle - avatars, pills
```

---

## Shadows

```scss
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
```

**Usage:**

- `--shadow-sm`: Subtle elevation for small elements
- `--shadow-md`: Standard elevation for cards, buttons
- `--shadow-lg`: Strong elevation for modals, dropdowns

---

## Transitions

```scss
--transition-fast: 150ms ease-in-out    // Quick interactions
--transition-normal: 300ms ease-in-out  // Standard transitions
--transition-slow: 500ms ease-in-out    // Slow, deliberate animations
```

---

## Z-Index Layers

```scss
--z-index-base: 1          // Base elements
--z-index-dropdown: 10      // Dropdown menus
--z-index-sticky: 20       // Sticky headers
--z-index-fixed: 30         // Fixed elements
--z-index-modal: 40         // Modals, overlays
--z-index-tooltip: 50       // Tooltips (highest)
```

---

## Usage Examples

### Hero Headline

```scss
.hero__title {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-hero);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-text);
}
```

### Stat Number ("10x")

```scss
.stat__value {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-stat);
  line-height: var(--line-height-none);
  background: var(--gradient-primary-transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Stat Label ("power")

```scss
.stat__label {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-tight);
  color: var(--color-accent);
}
```

### Navigation Text

```scss
.nav__link {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-text-nav);
}
```

### Shop Now Button

```scss
.btn--primary {
  background: var(--gradient-primary);
  color: var(--color-text-white);
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--radius-md);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-body);
  transition: var(--transition-normal);
}
```

### Most Popular Badge

```scss
.badge--popular {
  background: var(--gradient-badge);
  border: var(--border-width) solid var(--border-color);
  color: var(--color-text-white);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  line-height: var(--line-height-normal);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
}
```

### Footer Logo

```scss
.footer__logo {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-logo-footer);
  line-height: var(--line-height-none);
  color: var(--color-footer-text);
}
```

### Footer Navigation Links

```scss
.footer__nav-link {
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-nav-footer);
  line-height: var(--line-height-body);
  color: var(--color-footer-text);
}
```

### Newsletter Title

```scss
.newsletter__title {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-newsletter-title);
}
```

### Subscribe Button

```scss
.btn--subscribe {
  background-color: var(--color-subscribe-btn);
  color: var(--color-footer-text);
  padding: var(--button-padding-y) var(--button-padding-x);
  gap: var(--button-gap);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  border-radius: var(--radius-md);
}
```

### Privacy Policy Text

```scss
.privacy-text {
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-body);
  color: var(--color-footer-text);
}

.privacy-text a {
  text-decoration: underline;
}
```

### Price

```scss
.price {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-body);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-text);
}

.price--strikethrough {
  font-weight: var(--font-weight-light);
  text-decoration: line-through;
  color: var(--color-text-muted);
}
```

---

## Notes

1. **Rem Units**: All font sizes and spacing use `rem` units for scalability. The base font size is set to `16px` on the `html` element.

2. **Font Loading**: Make sure to include the Inter and Oxanium fonts in your HTML:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oxanium:wght@300;400;500;600;700&display=swap"
     rel="stylesheet"
   />
   ```

3. **Color Accessibility**: Ensure sufficient contrast ratios when using these colors. The primary dark green (#032E15) on white provides good contrast.

4. **Gradient Text**: For gradient text effects (like the stat numbers), use:

   ```scss
   background: var(--gradient-primary-transparent);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   ```

5. **Responsive Design**: These variables work with the mobile-first approach. Adjust font sizes at breakpoints if needed.

---

## Version History

- **v1.0** - Initial CSS variables extracted from Figma design
- All values verified against Figma specifications

---

**Last Updated:** 2024
