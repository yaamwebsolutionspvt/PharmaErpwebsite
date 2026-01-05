# Images Directory

This directory is for storing images used throughout the Mediyaam website.

## Recommended Images

### Hero Section
- **Hero Image**: Dashboard screenshot or illustration (1920x1080px recommended)
- **Format**: PNG, JPG, or WebP
- **Location**: Use in `src/pages/Home.jsx` hero section

### Feature Images
- **Feature Icons**: Already using React Icons, but you can add custom illustrations
- **Dashboard Screenshots**: For product pages showing the software in action

### Testimonial Avatars
- **Customer Photos**: Add real customer photos (200x200px, circular)
- **Format**: JPG or PNG

## Adding Images

1. Place your images in this directory (`src/assets/images/`)
2. Import them in your components:
   ```jsx
   import heroImage from '../assets/images/hero-dashboard.png';
   ```
3. Use them in your JSX:
   ```jsx
   <img src={heroImage} alt="Mediyaam Dashboard" />
   ```

## Image Optimization Tips

- Use WebP format for better compression
- Optimize images before adding (use tools like TinyPNG, ImageOptim)
- Use appropriate sizes (don't use 4K images for thumbnails)
- Consider using `loading="lazy"` for below-the-fold images

## Placeholder Images

Currently using CSS-based placeholders. Replace with actual images for production.

## Free Image Resources

- **Unsplash**: https://unsplash.com (free stock photos)
- **Pexels**: https://pexels.com (free stock photos)
- **Undraw**: https://undraw.co (free illustrations)
- **Freepik**: https://freepik.com (free vectors and illustrations)

