# Mediyaam - Pharmacy ERP Website

A complete, professional React website for Mediyaam - a comprehensive pharmacy ERP system. Built with React, TailwindCSS, Framer Motion, and modern SEO practices.

## 🚀 Features

- **Modern React Architecture**: Built with React 19, React Router, and Framer Motion
- **Custom SEO Component**: Idempotent DOM manipulation for meta tags, Open Graph, Twitter Cards, and JSON-LD
- **Responsive Design**: Mobile-first design with TailwindCSS
- **Smooth Animations**: Page transitions and micro-interactions with Framer Motion
- **Lazy Loading**: Route-level code splitting for optimal performance
- **SEO Optimized**: Keyword-rich content, structured data, and proper meta tags
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 📁 Project Structure

```
src/
  ├── assets/          # Images and static assets
  ├── components/      # Reusable React components
  │   ├── Navbar.jsx
  │   ├── Footer.jsx
  │   ├── Hero.jsx
  │   ├── FeatureCard.jsx
  │   ├── PricingTable.jsx
  │   ├── TestimonialCarousel.jsx
  │   ├── CTA.jsx
  │   ├── BlogCard.jsx
  │   ├── PageTransition.jsx
  │   ├── SectionReveal.jsx
  │   └── ScrollToTop.jsx
  ├── pages/           # Page components
  │   ├── Home.jsx
  │   ├── About.jsx
  │   ├── Product.jsx
  │   ├── Features.jsx
  │   ├── Pricing.jsx
  │   ├── Blog.jsx
  │   ├── BlogPost.jsx
  │   ├── CaseStudies.jsx
  │   ├── FAQ.jsx
  │   ├── Contact.jsx
  │   ├── Careers.jsx
  │   ├── Privacy.jsx
  │   ├── Terms.jsx
  │   └── product/     # Product sub-pages
  │       ├── POS.jsx
  │       ├── Inventory.jsx
  │       ├── Billing.jsx
  │       ├── CustomerVendor.jsx
  │       ├── GSTTaxation.jsx
  │       ├── Reports.jsx
  │       └── MultiBranch.jsx
  ├── layout/          # Layout components
  │   └── MainLayout.jsx
  ├── router/          # Routing configuration
  │   └── AppRouter.jsx
  ├── seo/             # SEO components and config
  │   ├── Seo.js
  │   ├── seoConfig.js
  │   └── __tests__/
  │       └── Seo.test.js
  ├── hooks/           # Custom React hooks
  │   └── useScrollToTop.js
  ├── utils/           # Utility functions
  │   └── api.js       # API abstraction layer
  ├── styles/          # Global styles
  └── animations/      # Animation configurations
```

## 🛠️ Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd my-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install TailwindCSS dependencies** (if not already installed):
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Run tests**:
   ```bash
   npm test
   ```

## 📝 Using the SEO Component

The custom SEO component (`src/seo/Seo.js`) provides idempotent DOM manipulation for meta tags without using React Helmet.

### Basic Usage

```jsx
import Seo from '../seo/Seo';

function MyPage() {
  return (
    <>
      <Seo
        title="Page Title"
        description="Page description for SEO"
        keywords={['keyword1', 'keyword2']}
        url="https://mediyaam.example.com/page"
        canonical="https://mediyaam.example.com/page"
      />
      {/* Page content */}
    </>
  );
}
```

### Advanced Usage (Article/Blog Post)

```jsx
<Seo
  title="Blog Post Title"
  description="Blog post description"
  type="article"
  publishedTime="2025-01-15T08:00:00Z"
  modifiedTime="2025-01-16T08:00:00Z"
  author="Author Name"
  image="https://mediyaam.example.com/blog-image.jpg"
  schema={{
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Blog Post Title',
    // ... more schema properties
  }}
/>
```

### SEO Component Features

- **Idempotent**: Updates existing tags or creates new ones (no duplicates)
- **Open Graph**: Automatically generates og:title, og:description, og:url, og:image
- **Twitter Cards**: Creates Twitter Card meta tags
- **JSON-LD**: Supports structured data for better search engine understanding
- **Article Support**: Auto-generates Article schema for blog posts
- **Defaults**: Uses global config for missing values

## 📄 Adding New Pages

1. **Create the page component** in `src/pages/`:
   ```jsx
   import Seo from '../seo/Seo';
   import SectionReveal from '../components/SectionReveal';

   const NewPage = () => {
     return (
       <>
         <Seo
           title="New Page Title"
           description="Page description"
           keywords={['relevant', 'keywords']}
           url="https://mediyaam.example.com/new-page"
           canonical="https://mediyaam.example.com/new-page"
         />
         <section className="py-20">
           <div className="container mx-auto px-4">
             <SectionReveal>
               <h1>New Page</h1>
             </SectionReveal>
           </div>
         </section>
       </>
     );
   };

   export default NewPage;
   ```

2. **Add the route** in `src/router/AppRouter.jsx`:
   ```jsx
   const NewPage = lazy(() => import('../pages/NewPage'));

   // In Routes:
   <Route
     path="/new-page"
     element={
       <PageTransition>
         <NewPage />
       </PageTransition>
     }
   />
   ```

3. **Add navigation link** in `src/components/Navbar.jsx` (if needed)

## 🔄 Backend Integration

The project includes an API abstraction layer in `src/utils/api.js` with placeholder functions. To integrate with a real backend:

1. **Update API base URL** in `src/utils/api.js`:
   ```javascript
   const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.mediyaam.com';
   ```

2. **Replace placeholder functions** with actual API calls:
   ```javascript
   export const submitContactForm = async (formData) => {
     return request('/contact', {
       method: 'POST',
       body: JSON.stringify(formData),
     });
   };
   ```

3. **Add environment variables** (create `.env` file):
   ```
   VITE_API_URL=https://api.mediyaam.com
   ```
   
   **Note**: In Vite, environment variables must be prefixed with `VITE_` to be exposed to the client. Use `import.meta.env.VITE_*` instead of `process.env.REACT_APP_*`.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  },
}
```

### Typography

Update font imports in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

### SEO Configuration

Modify `src/seo/seoConfig.js` to update default SEO values:
```javascript
export const seoConfig = {
  siteName: 'Mediyaam',
  titlePrefix: 'Mediyaam — ',
  defaultDescription: 'Your default description',
  // ... more config
};
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Watch mode for development:
```bash
npm run test:watch
```

The SEO component includes comprehensive tests in `src/seo/__tests__/Seo.test.js`.

## 🚀 Deployment

### Static Hosting (Vercel, Netlify, etc.)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

3. Configure redirects for SPA routing (create `_redirects` or `vercel.json`):
   ```
   /*    /index.html   200
   ```

### Server-Side Rendering (SSR)

To convert to SSR with Next.js or similar:

1. Install Next.js:
   ```bash
   npm install next react react-dom
   ```

2. Migrate pages to Next.js `pages/` directory
3. Update routing to use Next.js router
4. The SEO component will work with SSR as it manipulates the DOM directly

## 📊 Performance Optimization

- **Lazy Loading**: Routes are lazy-loaded for code splitting
- **Image Optimization**: Use modern formats (WebP) and lazy loading
- **Critical CSS**: TailwindCSS purges unused styles in production
- **Bundle Analysis**: Use `npm run build -- --analyze` (with vite-bundle-analyzer)

## 🔒 Security

- Environment variables for sensitive data
- API abstraction layer for secure API calls
- Input validation in forms
- XSS protection via React's built-in escaping

## 📚 Key Technologies

- **React 19**: UI library
- **React Router 7**: Client-side routing
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **PropTypes**: Type checking for props
- **Jest + React Testing Library**: Testing framework

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Add tests for new features
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

[Your License Here]

## 📞 Support

For questions or support, contact:
- Email: info@mediyaam.com
- Website: https://mediyaam.example.com

---

**Built with ❤️ for Mediyaam**
