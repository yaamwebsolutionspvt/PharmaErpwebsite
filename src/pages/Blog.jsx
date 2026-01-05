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
                        url="pharmacysoftwareindia.com/blog"
                        canonical="pharmacysoftwareindia.com/blog"
                        type="website"
                  />

                  <main id="main-content">
                        {/* Hero Section - Enhanced Styling */}
                        <section className="py-16 md:py-20 bg-gradient-to-br from-primary-50 via-white to-indigo-50">
                              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                    <SectionReveal>
                                          <div className="max-w-4xl mx-auto text-center">
                                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                                                      Pharmacy Management <span className="text-primary-600">Blog</span> 💊
                                                </h1>
                                                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                                                      Your source for tips, insights, and best practices for running a successful, profitable, and compliant pharmacy business.
                                                </p>
                                          </div>
                                    </SectionReveal>
                              </div>
                        </section>

                        {/* Blog Grid Section - Enhanced Layout and Cards */}
                        <section className="py-12 md:py-20 bg-white">
                              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                                          {blogPosts.map((post, index) => (
                                                <BlogCard
                                                      key={post.path}
                                                      post={post}
                                                      delay={index * 0.1}
                                                />
                                          ))}
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      );
};

export default Blog;