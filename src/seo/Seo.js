import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { seoConfig } from './seoConfig';

/**
 * Custom SEO component that updates document head directly
 * Idempotent: updates existing tags or creates new ones
 * No external dependencies (no Helmet)
 */
const Seo = ({
  title,
  description,
  keywords = [],
  canonical,
  url,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  schema
}) => {
  useEffect(() => {
    // Validate required props in development
    if (import.meta.env.DEV) {
      if (!title) {
        console.warn('Seo: title prop is required');
      }
      if (!description) {
        console.warn('Seo: description prop is required');
      }
    }

    // Build full title
    const fullTitle = title ? `${seoConfig.titlePrefix}${title}` : seoConfig.siteName;
    
    // Use provided values or fallback to config defaults
    const metaDescription = description || seoConfig.defaultDescription;
    const metaKeywords = keywords.length > 0 ? keywords : seoConfig.defaultKeywords;
    const canonicalUrl = canonical || url || seoConfig.defaultUrl;
    const ogUrl = url || canonicalUrl || seoConfig.defaultUrl;
    const ogImage = image || seoConfig.defaultImage;
    const metaAuthor = author || seoConfig.author;

    // Helper function to upsert meta tag
    const upsertMetaTag = (name, content, property = false) => {
      const attr = property ? 'property' : 'name';
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        tag.setAttribute('data-mediyaam', name.replace(/[:.]/g, '-'));
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Helper function to upsert link tag
    const upsertLinkTag = (rel, href) => {
      const selector = `link[rel="${rel}"]`;
      let tag = document.querySelector(selector);
      
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        tag.setAttribute('data-mediyaam', `link-${rel}`);
        document.head.appendChild(tag);
      }
      tag.setAttribute('href', href);
    };

    // Set document title
    document.title = fullTitle;

    // Basic meta tags
    upsertMetaTag('description', metaDescription);
    upsertMetaTag('keywords', metaKeywords.join(', '));

    // Canonical URL
    upsertLinkTag('canonical', canonicalUrl);

    // Open Graph tags
    upsertMetaTag('og:title', fullTitle, true);
    upsertMetaTag('og:description', metaDescription, true);
    upsertMetaTag('og:type', type, true);
    upsertMetaTag('og:url', ogUrl, true);
    upsertMetaTag('og:image', ogImage, true);
    upsertMetaTag('og:site_name', seoConfig.siteName, true);

    // Twitter Card tags
    upsertMetaTag('twitter:card', 'summary_large_image');
    upsertMetaTag('twitter:title', fullTitle);
    upsertMetaTag('twitter:description', metaDescription);
    upsertMetaTag('twitter:image', ogImage);
    if (seoConfig.twitterHandle) {
      upsertMetaTag('twitter:site', seoConfig.twitterHandle);
    }

    // Article-specific tags
    if (type === 'article') {
      if (publishedTime) {
        upsertMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        upsertMetaTag('article:modified_time', modifiedTime, true);
      }
      if (metaAuthor) {
        upsertMetaTag('article:author', metaAuthor, true);
      }
    }

    // JSON-LD Schema
    let jsonLdScript = document.querySelector('script[data-mediyaam="json-ld"]');
    
    // Generate schema if type is article and no custom schema provided
    let finalSchema = schema;
    if (type === 'article' && !schema) {
      finalSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: fullTitle,
        description: metaDescription,
        image: ogImage,
        author: {
          '@type': 'Organization',
          name: metaAuthor
        },
        publisher: {
          '@type': 'Organization',
          name: seoConfig.siteName,
          logo: {
            '@type': 'ImageObject',
            url: ogImage
          }
        },
        datePublished: publishedTime || new Date().toISOString(),
        dateModified: modifiedTime || publishedTime || new Date().toISOString()
      };
    }

    // Insert or update JSON-LD script
    if (finalSchema) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.setAttribute('type', 'application/ld+json');
        jsonLdScript.setAttribute('data-mediyaam', 'json-ld');
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(finalSchema);
    } else if (jsonLdScript) {
      // Remove JSON-LD script if schema is not provided
      jsonLdScript.remove();
    }

    // Cleanup function
    return () => {
      // Note: We don't remove tags on unmount as they should persist
      // Only remove JSON-LD if component is unmounting and no schema was provided
      if (!finalSchema && jsonLdScript) {
        jsonLdScript.remove();
      }
    };
  }, [
    title,
    description,
    keywords,
    canonical,
    url,
    image,
    type,
    publishedTime,
    modifiedTime,
    author,
    schema
  ]);

  // This component doesn't render anything
  return null;
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  canonical: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.oneOf(['website', 'article']),
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  author: PropTypes.string,
  schema: PropTypes.object
};

export default Seo;

