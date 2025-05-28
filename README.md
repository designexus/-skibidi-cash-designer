# Skibidi Brand Assets

This repository contains code versions of Skibidi brand assets optimized for web use.

## Assets Included

1. **Skibidi 3D Logo** - A 3D logo with metallic effects and Bitcoin symbol
   - Implementation: CSS/HTML with 3D effects
   - Files: `/css/skibidi_3d_logo.css` and `/html/skibidi_3d_logo.html`

2. **Skibidi 2D Vector Logo** - A flat vector version of the logo
   - Implementation: SVG
   - File: `/svg/skibidi_2d_vector_logo.svg`

3. **Skibidi Text Logo** - Black and white text logo
   - Implementation: SVG
   - File: `/svg/skibidi_text_bw.svg`

## Usage Instructions

### SVG Assets

SVG assets can be used directly in your HTML:

```html
<!-- Using the 2D vector logo -->
<img src="svg/skibidi_2d_vector_logo.svg" alt="Skibidi Logo">

<!-- Using the text logo -->
<img src="svg/skibidi_text_bw.svg" alt="Skibidi Text">
```

Or embedded inline for more control:

```html
<!-- Embedding SVG directly -->
<object type="image/svg+xml" data="svg/skibidi_2d_vector_logo.svg">
  Your browser does not support SVG
</object>
```

### 3D CSS Logo

To use the 3D CSS logo:

1. Include the CSS file in your HTML:
```html
<link rel="stylesheet" href="css/skibidi_3d_logo.css">
```

2. Add the HTML structure:
```html
<div class="skibidi-3d-container">
  <div class="skibidi-3d-logo">
    <div class="skibidi-3d-background"></div>
    <div class="skibidi-3d-letter"></div>
    <div class="skibidi-3d-lightning"></div>
    <div class="skibidi-3d-bitcoin"></div>
  </div>
</div>
```

## Customization

### SVG Customization

SVG files can be customized by editing the SVG code directly:
- Change colors by modifying the fill attributes or gradient definitions
- Adjust sizes by changing the viewBox or width/height attributes
- Add animations with CSS or SMIL

### 3D CSS Logo Customization

The 3D CSS logo can be customized by modifying the CSS variables:
- Change colors in the gradient definitions
- Adjust 3D depth by modifying transform values
- Change hover effects by editing the transition properties

## Browser Compatibility

- SVG assets are compatible with all modern browsers
- The 3D CSS implementation works best in Chrome, Firefox, Safari, and Edge
- For older browsers, consider using the 2D SVG version as a fallback

## License

These assets are provided for demonstration purposes only.
