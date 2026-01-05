import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';
import FeatureCard from '../components/FeatureCard';
import CTA from '../components/CTA';
import {
  FaCloud,
  FaShieldAlt,
  FaMobileAlt,
  FaHeadset,
  FaSync,
  FaLock,
} from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaCloud,
      title: 'Cloud-Based',
      description:
        'Access your pharmacy data from anywhere, anytime. No installation required, works on any device.',
    },
    {
      icon: FaShieldAlt,
      title: 'Secure & Compliant',
      description:
        'Bank-level security with regular backups. Compliant with data protection regulations.',
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile Responsive',
      description:
        'Fully responsive design works seamlessly on desktop, tablet, and mobile devices.',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description:
        'Round-the-clock customer support to help you whenever you need assistance.',
    },
    {
      icon: FaSync,
      title: 'Real-Time Sync',
      description:
        'All data syncs in real-time across devices and locations for up-to-date information.',
    },
    {
      icon: FaLock,
      title: 'Role-Based Access',
      description:
        'Control who can access what with granular permissions and role-based security.',
    },
  ];

  return (
    <>
      <Seo
        title="Pharmacy Software Features | Best Pharmacy Management Software in India - Mediyaam"
        description="Explore features of India's best pharmacy management software. Cloud-based, GST-compliant, mobile-responsive pharmacy software trusted across India. Complete feature set for medical stores."
        keywords={[
          'pharmacy management software in india',
          'best pharmacy management software in india',
          'pharmacy software features india',
          'cloud pharmacy software india',
          'pharmacy ERP features',
          'pharmacy software features',
          'medical store software features',
        ]}
        url="pharmacysoftwareindia.com/features"
        canonical="pharmacysoftwareindia.com/features"
        type="website"
      />
      <main id="main-content">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Complete Feature Set
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Everything you need to run your pharmacy efficiently, all in one
                  comprehensive platform.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Platform Features
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
          title="Experience All Features"
          description="See how Mediyaam can transform your pharmacy operations."
          primaryCTA={{ path: '/contact', label: 'Request Demo' }}
          secondaryCTA={{ path: '/pricing', label: 'View Pricing' }}
        />
      </main>
    </>
  );
};

export default Features;

