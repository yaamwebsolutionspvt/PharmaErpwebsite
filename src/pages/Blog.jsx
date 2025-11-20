import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';
import BlogCard from '../components/BlogCard';
import BlogPost from './BlogPost';

const Blog = () => {
  // Renamed image paths to match the downloaded image file names
  const blogPosts = [
    {
      path: '/blog/pharmacy-inventory-management-tips',
      title: '10 Essential Tips for Pharmacy Inventory Management',
      excerpt:
        'Learn best practices for managing pharmacy inventory, reducing expiry losses, and optimizing stock levels for better profitability.',
      date: '2025-01-15',
      author: 'Mediyaam Team',
      image: '/inventory-tips.webp',
    },
    {
      // 🚨 CORRECTION MADE HERE: The path/slug must match the 'case' in BlogPost.jsx
      path: '/blog/gst-compliance-guide-for-pharmacies', 
      title: 'GST Compliance Guide for Pharmacies',
      excerpt:
        'Complete guide to GST compliance for medical stores, including filing requirements, HSN codes, and tax calculations.',
      date: '2025-01-10',
      author: 'Mediyaam Team',
      image: '/gst-guide.webp',
    },
    {
      // Ensure this also matches the slug in BlogPost.jsx
      path: '/blog/how-to-choose-the-right-pharmacy-pos-system', 
      title: 'How to Choose the Right Pharmacy POS System',
      excerpt:
        'Key factors to consider when selecting a point-of-sale system for your pharmacy, including features, pricing, and support.',
      date: '2025-01-05',
      author: 'Mediyaam Team',
      image: '/pos-selection.webp',
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
          'inventory', 
          'GST', 
          'POS'
        ]}
        url="https://mediyaam.example.com/blog"
        canonical="https://mediyaam.example.com/blog"
        type="website"
      />

      {/* Hero Section - Enhanced Styling */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white shadow-inner">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Pharmacy Management <span className="text-indigo-600">Blog</span> 💊
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                Your source for tips, insights, and best practices for running a successful, profitable, and compliant pharmacy business.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Blog Grid Section - Enhanced Layout and Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <BlogCard 
                  key={post.path} 
                  post={post} 
                  delay={index * 0.1}
              />
            ))}
          </div>
          
          {/* Note: This div containing BlogPost is likely for local testing/demonstration and should typically be removed 
              in a fully routed production environment. */}
          {/* <div className="hidden"> <BlogPost /></div> */}
        </div>
      </section>

    </>
  );
};

export default Blog;