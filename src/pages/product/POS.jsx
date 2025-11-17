import Seo from '../../seo/Seo';
import SectionReveal from '../../components/SectionReveal';
import FeatureCard from '../../components/FeatureCard';
import CTA from '../../components/CTA';
import {
  FaBarcode,
  FaPrescriptionBottle,
  FaCreditCard,
  FaHistory,
  FaSearch,
  FaPrint,
} from 'react-icons/fa';

const POS = () => {
  const features = [
    {
      icon: FaBarcode,
      title: 'Barcode Scanning',
      description:
        'Quick product lookup and billing with barcode scanner support for faster checkout.',
    },
    {
      icon: FaPrescriptionBottle,
      title: 'Prescription Management',
      description:
        'Manage prescriptions, track refills, and maintain patient medication history.',
    },
    {
      icon: FaCreditCard,
      title: 'Multiple Payment Modes',
      description:
        'Accept cash, cards, UPI, and digital wallets. Process payments seamlessly.',
    },
    {
      icon: FaHistory,
      title: 'Customer History',
      description:
        'Access complete purchase history and preferences for better customer service.',
    },
    {
      icon: FaSearch,
      title: 'Quick Search',
      description:
        'Find products instantly with smart search by name, code, or manufacturer.',
    },
    {
      icon: FaPrint,
      title: 'Instant Receipts',
      description:
        'Print professional receipts with all necessary details and GST information.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Mediyaam POS System',
    applicationCategory: 'PointOfSaleApplication',
    description:
      'Complete pharmacy POS system with barcode scanning, prescription management, and multiple payment options.',
  };

  return (
    <>
      <Seo
        title="Pharmacy POS System — Point of Sale Software for Medical Stores"
        description="Mediyaam POS system offers fast billing, barcode scanning, prescription management, and multiple payment modes for your pharmacy. Streamline checkout with our pharmacy point-of-sale software."
        keywords={[
          'pharmacy POS',
          'pharmacy point of sale',
          'medical store POS',
          'chemist shop billing software',
          'pharmacy checkout system',
        ]}
        url="https://mediyaam.example.com/product/pos"
        canonical="https://mediyaam.example.com/product/pos"
        type="website"
        schema={schema}
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pharmacy POS System
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fast, accurate, and user-friendly point-of-sale software designed
                specifically for pharmacies and medical stores.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Key Features
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
                Why Choose Our Pharmacy POS?
              </h2>
            </SectionReveal>
            <div className="space-y-6">
              <SectionReveal>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Lightning-Fast Billing
                  </h3>
                  <p className="text-gray-600">
                    Process transactions in seconds with our optimized POS system.
                    Reduce customer wait time and increase throughput.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Prescription Integration
                  </h3>
                  <p className="text-gray-600">
                    Seamlessly handle prescription-based sales, track medication
                    history, and manage refills all from the POS interface.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Offline Capability
                  </h3>
                  <p className="text-gray-600">
                    Continue billing even during internet outages. Data syncs
                    automatically when connection is restored.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Upgrade Your Pharmacy POS?"
        description="Experience the difference with Mediyaam's advanced point-of-sale system."
        primaryCTA={{ path: '/contact', label: 'Request Demo' }}
        secondaryCTA={{ path: '/pricing', label: 'View Pricing' }}
      />
    </>
  );
};

export default POS;

