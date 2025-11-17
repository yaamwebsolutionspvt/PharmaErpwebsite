import { useParams } from 'react-router-dom';
import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';

const BlogPost = () => {
  const { slug } = useParams();

  // In a real app, fetch post data based on slug
  const post = {
    title: '10 Essential Tips for Pharmacy Inventory Management',
    content: `
      <p>Managing pharmacy inventory efficiently is crucial for profitability and customer satisfaction. Here are 10 essential tips to help you optimize your inventory management.</p>
      <h2>1. Implement Real-Time Tracking</h2>
      <p>Use pharmacy inventory management software that provides real-time stock updates. This helps you know exactly what's in stock at any moment.</p>
      <h2>2. Set Expiry Alerts</h2>
      <p>Configure automatic alerts for products nearing expiry to minimize losses and ensure product quality.</p>
      <h2>3. Optimize Reorder Points</h2>
      <p>Set minimum stock levels based on sales history to ensure you never run out of fast-moving items.</p>
      <h2>4. Track Fast-Moving Items</h2>
      <p>Identify and prioritize high-demand products to maintain adequate stock levels.</p>
      <h2>5. Regular Stock Audits</h2>
      <p>Conduct regular physical stock audits to identify discrepancies and maintain accuracy.</p>
    `,
    author: 'Mediyaam Team',
    publishedTime: '2025-01-15T08:00:00Z',
    modifiedTime: '2025-01-15T08:00:00Z',
    image: '/assets/blog/inventory-tips.jpg',
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: 'Essential tips for pharmacy inventory management',
    image: post.image,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mediyaam',
    },
    datePublished: post.publishedTime,
    dateModified: post.modifiedTime,
  };

  return (
    <>
      <Seo
        title={`${post.title} — Mediyaam Blog`}
        description="Learn essential tips for managing pharmacy inventory efficiently, reducing expiry losses, and optimizing stock levels."
        keywords={[
          'pharmacy inventory management',
          'drug stock tracking',
          'pharmacy inventory tips',
        ]}
        url={`https://mediyaam.example.com/blog/${slug}`}
        canonical={`https://mediyaam.example.com/blog/${slug}`}
        type="article"
        publishedTime={post.publishedTime}
        modifiedTime={post.modifiedTime}
        author={post.author}
        image={post.image}
        schema={schema}
      />
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              <div className="text-gray-600 mb-8">
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <time>{new Date(post.publishedTime).toLocaleDateString()}</time>
              </div>
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full rounded-lg mb-8"
                />
              )}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </SectionReveal>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;

