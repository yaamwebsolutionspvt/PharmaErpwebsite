import Seo from '../../seo/Seo';
import SectionReveal from '../../components/SectionReveal';
import FeatureCard from '../../components/FeatureCard';
import CTA from '../../components/CTA';
import {
  FaExclamationTriangle,
  FaSync,
  FaWarehouse,
  FaChartPie,
  FaTags,
  FaBoxOpen,
} from 'react-icons/fa';

const Inventory = () => {
  const features = [
    {
      icon: FaExclamationTriangle,
      title: 'Expiry Alerts',
      description:
        'Get automatic notifications for products nearing expiry to minimize losses.',
    },
    {
      icon: FaSync,
      title: 'Real-Time Stock Updates',
      description:
        'Track inventory levels in real-time across all locations and sales channels.',
    },
    {
      icon: FaWarehouse,
      title: 'Multi-Location Support',
      description:
        'Manage stock across multiple warehouses and branches from one dashboard.',
    },
    {
      icon: FaChartPie,
      title: 'Stock Analytics',
      description:
        'Analyze stock movement, identify fast-moving items, and optimize inventory.',
    },
    {
      icon: FaTags,
      title: 'Batch & Lot Tracking',
      description:
        'Track products by batch numbers and manufacturing dates for better control.',
    },
    {
      icon: FaBoxOpen,
      title: 'Auto Reorder Points',
      description:
        "Set minimum stock levels and get alerts when it's time to reorder.",
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Mediyaam Inventory Management',
    applicationCategory: 'InventoryManagementApplication',
    description:
      'Complete pharma inventory management with expiry alerts, real-time tracking, and automated reordering.',
  };

  return (
    <>
      <Seo
        title="Pharma Inventory Management — Drug Stock Tracking System"
        description="Comprehensive pharmacy inventory management software with expiry alerts, real-time stock tracking, batch management, and automated reorder points. Perfect for medical stores and pharmacy chains."
        keywords={[
          'pharma inventory management',
          'drug stock tracking system',
          'pharmacy inventory software',
          'medical store stock management',
          'pharmacy stock tracking',
        ]}
        url="https://pharmacysoftwareindia.com/product/inventory"
        canonical="https://pharmacysoftwareindia.com/product/inventory"
        type="website"
        schema={schema}
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pharmacy Inventory Management
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Complete drug stock tracking system with real-time updates,
                expiry management, and automated reordering for your pharmacy.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Inventory Management Features
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Benefits of Our Inventory System
              </h2>
            </SectionReveal>
            <div className="space-y-6">
              <SectionReveal>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Reduce Expiry Losses
                  </h3>
                  <p className="text-gray-600">
                    Proactive expiry alerts help you sell products before they
                    expire, minimizing losses and improving profitability.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Optimize Stock Levels
                  </h3>
                  <p className="text-gray-600">
                    Maintain optimal inventory levels with automated reorder
                    points. Never run out of stock or overstock items.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Complete Traceability
                  </h3>
                  <p className="text-gray-600">
                    Track every product from purchase to sale with batch and lot
                    tracking for complete inventory traceability.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Streamline Your Pharmacy Inventory Today"
        description="Take control of your stock with our advanced inventory management system."
        primaryCTA={{ path: '/contact', label: 'Get Started' }}
        secondaryCTA={{ path: '/pricing', label: 'View Plans' }}
      />
    </>
  );
};

export default Inventory;

