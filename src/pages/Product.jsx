import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';
import FeatureCard from '../components/FeatureCard';
import {
  FaCashRegister,
  FaBoxes,
  FaFileInvoice,
  FaUsers,
  FaReceipt,
  FaChartBar,
  FaNetworkWired,
} from 'react-icons/fa';

const Product = () => {
  const productFeatures = [
    {
      icon: FaCashRegister,
      title: 'POS System',
      description:
        'Complete point-of-sale solution for fast and accurate billing.',
      path: '/product/pos',
    },
    {
      icon: FaBoxes,
      title: 'Inventory Management',
      description:
        'Real-time stock tracking with expiry alerts and automated reordering.',
      path: '/product/inventory',
    },
    {
      icon: FaFileInvoice,
      title: 'Billing Software',
      description:
        'Professional billing with GST compliance and multiple payment modes.',
      path: '/product/billing',
    },
    {
      icon: FaUsers,
      title: 'Customer & Vendor',
      description:
        'Comprehensive CRM for managing customer and vendor relationships.',
      path: '/product/customer-vendor',
    },
    {
      icon: FaReceipt,
      title: 'GST/Taxation',
      description:
        'Automated tax calculations and GST filing made simple.',
      path: '/product/gst-taxation',
    },
    {
      icon: FaChartBar,
      title: 'Reports & Analytics',
      description:
        'Detailed insights into sales, inventory, and business performance.',
      path: '/product/reports',
    },
    {
      icon: FaNetworkWired,
      title: 'Multi-Branch',
      description:
        'Manage multiple pharmacy locations from a single dashboard.',
      path: '/product/multi-branch',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Mediyaam Pharmacy ERP',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Comprehensive pharmacy ERP solution with POS, inventory, billing, and multi-branch management.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
  };

  return (
    <>
      <Seo
        title="Pharmacy ERP Product — Complete Management Solution"
        description="Explore Mediyaam's comprehensive pharmacy ERP product features: POS system, inventory management, billing software, customer management, GST compliance, reports, and multi-branch support."
        keywords={[
          'pharmacy ERP product',
          'pharmacy management software',
          'medical store ERP',
          'pharmacy POS system',
          'pharma inventory software',
        ]}
        url="https://mediyaam.example.com/product"
        canonical="https://mediyaam.example.com/product"
        type="website"
        schema={schema}
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Pharmacy ERP Solution
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Everything you need to manage your pharmacy operations efficiently.
                From billing and inventory to customer management and analytics.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Product Features
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productFeatures.map((feature, index) => (
              <Link key={index} to={feature.path}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Why Mediyaam Pharmacy ERP?
              </h2>
            </SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SectionReveal>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    All-in-One Solution
                  </h3>
                  <p className="text-gray-600">
                    No need for multiple software. Our pharmacy ERP includes
                    everything from POS and billing to inventory and reports.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Cloud-Based & Secure
                  </h3>
                  <p className="text-gray-600">
                    Access your pharmacy data from anywhere, anytime. Our
                    cloud-based system ensures data security and backup.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Easy to Use
                  </h3>
                  <p className="text-gray-600">
                    Intuitive interface designed for pharmacy staff. Minimal
                    training required to get started.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Scalable & Flexible
                  </h3>
                  <p className="text-gray-600">
                    Whether you run a single medical store or a pharmacy chain,
                    our software scales with your business.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

