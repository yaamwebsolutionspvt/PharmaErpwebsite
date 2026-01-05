import Seo from '../../seo/Seo';
import SectionReveal from '../../components/SectionReveal';
import FeatureCard from '../../components/FeatureCard';
import CTA from '../../components/CTA';
import {
  FaUserFriends,
  FaHandshake,
  FaCreditCard,
  FaChartLine,
  FaBell,
  FaAddressBook,
} from 'react-icons/fa';

const CustomerVendor = () => {
  const features = [
    {
      icon: FaUserFriends,
      title: 'Customer Database',
      description:
        'Maintain comprehensive customer profiles with purchase history and preferences.',
    },
    {
      icon: FaHandshake,
      title: 'Vendor Management',
      description:
        'Manage vendor relationships, track orders, and maintain supplier database.',
    },
    {
      icon: FaCreditCard,
      title: 'Credit Management',
      description:
        'Handle customer credit limits, track outstanding amounts, and send reminders.',
    },
    {
      icon: FaChartLine,
      title: 'Loyalty Programs',
      description:
        'Reward loyal customers with points, discounts, and special offers.',
    },
    {
      icon: FaBell,
      title: 'Automated Reminders',
      description:
        'Send automated reminders for payments, refills, and follow-ups.',
    },
    {
      icon: FaAddressBook,
      title: 'Contact Management',
      description:
        'Organize customer and vendor contacts with detailed information.',
    },
  ];

  return (
    <>
      <Seo
        title="Customer & Vendor Management — Pharmacy CRM System"
        description="Comprehensive customer and vendor management system for pharmacies. Manage relationships, track credit, loyalty programs, and automate communications."
        keywords={[
          'pharmacy CRM',
          'customer management pharmacy',
          'vendor management software',
          'pharmacy customer database',
        ]}
        url="https://pharmacysoftwareindia.com/product/customer-vendor"
        canonical="https://pharmacysoftwareindia.com/product/customer-vendor"
        type="website"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Customer & Vendor Management
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Build stronger relationships with customers and vendors through
                comprehensive CRM features designed for pharmacies.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Management Features
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

      <CTA
        title="Improve Your Customer Relationships"
        description="Manage customers and vendors more effectively with our CRM system."
        primaryCTA={{ path: '/contact', label: 'Learn More' }}
        secondaryCTA={{ path: '/pricing', label: 'View Pricing' }}
      />
    </>
  );
};

export default CustomerVendor;

