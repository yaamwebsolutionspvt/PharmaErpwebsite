# Mediyaam - Pharmacy ERP Software

Professional pharmacy management software for billing, inventory, POS, and multi-branch operations.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
PharmaErpwebsite/
├── public/              # Static files
│   ├── assets/         # Images, fonts
│   ├── icons/          # App icons
│   ├── .htaccess       # Apache configuration
│   ├── robots.txt      # Search engine directives
│   ├── sitemap.xml     # SEO sitemap
│   └── manifest.json   # PWA manifest
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── seo/            # SEO utilities
│   └── data/           # Static data
└── package.json
```

## 🌐 Deployment

### Prerequisites
- Node.js 18+ installed
- Domain: pharmacysoftwareindia.com
- SSL certificate configured

### Production Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files to server**
   - Upload entire project to server
   - Ensure `.htaccess` is in the public directory

3. **Configure Apache/Nginx**
   - Point document root to `/public` or `/out` directory
   - Enable mod_rewrite (Apache)
   - Configure SSL certificate

4. **Verify deployment**
   - Check https://pharmacysoftwareindia.com
   - Test robots.txt: https://pharmacysoftwareindia.com/robots.txt
   - Test sitemap: https://pharmacysoftwareindia.com/sitemap.xml

## 🔧 Configuration Files

### robots.txt
- Controls search engine crawling
- Located: `/public/robots.txt`
- Includes sitemap reference

### sitemap.xml
- Lists all website pages
- Located: `/public/sitemap.xml`
- Update when adding new pages

### .htaccess
- Apache server configuration
- HTTPS redirect
- Security headers
- Caching rules
- Compression

### manifest.json
- PWA configuration
- App icons and metadata
- Located: `/public/manifest.json`

## 🔒 Security Features

- ✅ HTTPS enforcement
- ✅ Security headers (CSP, HSTS, X-Frame-Options)
- ✅ XSS protection
- ✅ Clickjacking prevention
- ✅ Bot protection
- ✅ Hotlink protection

## 📊 SEO Features

- ✅ Meta tags on all pages
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Schema.org structured data
- ✅ XML sitemap
- ✅ robots.txt
- ✅ Optimized images

## 🎨 Technologies

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **SEO:** Custom SEO component

## 📞 Support

- **Email:** info@yaamwebsolutions.com
- **Phone:** +91 6006222304
- **Website:** https://yaamwebsolutions.com

## 📝 License

© 2026 Yaam Web Solutions Pvt Ltd. All rights reserved.

## 🔄 Updates

### Version 1.0.0 (2026-01-05)
- Initial release
- Complete pharmacy ERP website
- SEO optimized
- Mobile responsive
- Production ready

---

**Made with ❤️ by Yaam Web Solutions**
