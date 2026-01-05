import { render } from '@testing-library/react';
import Seo from '../Seo';

describe('Seo Component', () => {
  beforeEach(() => {
    // Clear document head before each test
    document.head.innerHTML = '';
    document.title = '';
  });

  afterEach(() => {
    // Clean up after each test
    document.head.innerHTML = '';
    document.title = '';
  });

  it('should set document title', () => {
    render(
      <Seo
        title="Test Page"
        description="Test description"
      />
    );

    expect(document.title).toBe('Mediyaam — Test Page');
  });

  it('should create meta description tag', () => {
    render(
      <Seo
        title="Test Page"
        description="Test description for SEO"
      />
    );

    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription.getAttribute('content')).toBe('Test description for SEO');
  });

  it('should create canonical link', () => {
    render(
      <Seo
        title="Test Page"
        description="Test description"
        canonical="pharmacysoftwareindia.com/test"
      />
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical).toBeTruthy();
    expect(canonical.getAttribute('href')).toBe('pharmacysoftwareindia.com/test');
  });

  it('should create Open Graph tags', () => {
    render(
      <Seo
        title="Test Page"
        description="Test description"
        url="pharmacysoftwareindia.com/test"
        image="pharmacysoftwareindia.com/test-image.jpg"
      />
    );

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    expect(ogTitle).toBeTruthy();
    expect(ogTitle.getAttribute('content')).toBe('Mediyaam — Test Page');
    expect(ogDescription).toBeTruthy();
    expect(ogUrl).toBeTruthy();
    expect(ogImage).toBeTruthy();
    expect(ogImage.getAttribute('content')).toBe('pharmacysoftwareindia.com/test-image.jpg');
  });

  it('should create Twitter Card tags', () => {
    render(
      <Seo
        title="Test Page"
        description="Test description"
      />
    );

    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    expect(twitterCard).toBeTruthy();
    expect(twitterCard.getAttribute('content')).toBe('summary_large_image');
    expect(twitterTitle).toBeTruthy();
    expect(twitterDescription).toBeTruthy();
  });

  it('should create article tags when type is article', () => {
    render(
      <Seo
        title="Test Article"
        description="Test article description"
        type="article"
        publishedTime="2025-01-15T08:00:00Z"
        modifiedTime="2025-01-16T08:00:00Z"
        author="Test Author"
      />
    );

    const publishedTime = document.querySelector('meta[property="article:published_time"]');
    const modifiedTime = document.querySelector('meta[property="article:modified_time"]');
    const author = document.querySelector('meta[property="article:author"]');

    expect(publishedTime).toBeTruthy();
    expect(publishedTime.getAttribute('content')).toBe('2025-01-15T08:00:00Z');
    expect(modifiedTime).toBeTruthy();
    expect(author).toBeTruthy();
    expect(author.getAttribute('content')).toBe('Test Author');
  });

  it('should create JSON-LD schema script', () => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Test Page',
    };

    render(
      <Seo
        title="Test Page"
        description="Test description"
        schema={schema}
      />
    );

    const jsonLdScript = document.querySelector('script[type="application/ld+json"][data-mediyaam="json-ld"]');
    expect(jsonLdScript).toBeTruthy();
    expect(JSON.parse(jsonLdScript.textContent)).toEqual(schema);
  });

  it('should update existing meta tags (idempotent)', () => {
    // Create initial meta tag
    const initialMeta = document.createElement('meta');
    initialMeta.setAttribute('name', 'description');
    initialMeta.setAttribute('content', 'Initial description');
    document.head.appendChild(initialMeta);

    render(
      <Seo
        title="Test Page"
        description="Updated description"
      />
    );

    const metaTags = document.querySelectorAll('meta[name="description"]');
    expect(metaTags.length).toBe(1);
    expect(metaTags[0].getAttribute('content')).toBe('Updated description');
  });

  it('should use default values from config when props are not provided', () => {
    render(
      <Seo
        title="Test Page"
        description="Test description"
      />
    );

    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    expect(ogSiteName).toBeTruthy();
    expect(ogSiteName.getAttribute('content')).toBe('Mediyaam');
  });
});

