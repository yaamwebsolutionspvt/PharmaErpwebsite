import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const blogPosts = [
    {
      path: '/blog/pharmacy-inventory-management-tips',
      title: '10 Essential Tips for Pharmacy Inventory Management',
      excerpt:
        'Learn best practices for managing pharmacy inventory, reducing expiry losses, and optimizing stock levels for better profitability.',
      date: '2025-01-15',
      author: 'Mediyaam Team',
      image: '/assets/blog/inventory-tips.jpg',
    },
    {
      path: '/blog/gst-compliance-pharmacy',
      title: 'GST Compliance Guide for Pharmacies',
      excerpt:
        'Complete guide to GST compliance for medical stores, including filing requirements, HSN codes, and tax calculations.',
      date: '2025-01-10',
      author: 'Mediyaam Team',
      image: '/assets/blog/gst-guide.jpg',
    },
    {
      path: '/blog/choosing-pharmacy-pos',
      title: 'How to Choose the Right Pharmacy POS System',
      excerpt:
        'Key factors to consider when selecting a point-of-sale system for your pharmacy, including features, pricing, and support.',
      date: '2025-01-05',
      author: 'Mediyaam Team',
      image: '/assets/blog/pos-selection.jpg',
    },
  ];

  return (
    <>
      <Seo
        title="Blog — Pharmacy Management Tips & Insights"
        description="Read articles about pharmacy management, inventory tips, GST compliance, POS systems, and best practices for running a successful pharmacy business."
        keywords={[
          'pharmacy management blog',
          'pharmacy tips',
          'medical store advice',
        ]}
        url="https://mediyaam.example.com/blog"
        canonical="https://mediyaam.example.com/blog"
        type="website"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pharmacy Management Blog
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Tips, insights, and best practices for running a successful
                pharmacy business.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

