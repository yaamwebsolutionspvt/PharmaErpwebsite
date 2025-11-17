import Seo from '../../seo/Seo';
import SectionReveal from '../../components/SectionReveal';
import FeatureCard from '../../components/FeatureCard';
import CTA from '../../components/CTA';
import {
  FaCalculator,
  FaFileAlt,
  FaCheckDouble,
  FaDownload,
  FaChartBar,
  FaShieldAlt,
} from 'react-icons/fa';

const GSTTaxation = () => {
  const features = [
    {
      icon: FaCalculator,
      title: 'Auto GST Calculation',
      description:
        'Automatic GST calculation for different tax slabs (5%, 12%, 18%, 28%) based on product category.',
    },
    {
      icon: FaFileAlt,
      title: 'GST Reports',
      description:
        'Generate GSTR-1, GSTR-2, GSTR-3B, and other required GST reports with one click.',
    },
    {
      icon: FaCheckDouble,
      title: 'HSN Code Management',
      description:
        'Maintain HSN codes for all products and ensure accurate tax classification.',
    },
    {
      icon: FaDownload,
      title: 'Export for Filing',
      description:
        'Export GST data in required formats for easy filing on GST portal.',
    },
    {
      icon: FaChartBar,
      title: 'Tax Analytics',
      description:
        'Analyze tax liability, input credit, and output tax with detailed reports.',
    },
    {
      icon: FaShieldAlt,
      title: 'Compliance Assurance',
      description:
        'Stay compliant with latest GST rules and regulations automatically updated.',
    },
  ];

  return (
    <>
      <Seo
        title="GST/Taxation — Pharmacy Tax Management Software"
        description="Complete GST and taxation management for pharmacies. Auto GST calculation, GSTR reports, HSN code management, and compliance features for medical stores."
        keywords={[
          'pharmacy GST software',
          'GST for medical stores',
          'pharmacy tax software',
          'GSTR reports pharmacy',
        ]}
        url="https://mediyaam.example.com/product/gst-taxation"
        canonical="https://mediyaam.example.com/product/gst-taxation"
        type="website"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                GST & Taxation Management
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Simplify GST compliance with automatic tax calculations, GSTR
                reports, and seamless filing integration for your pharmacy.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              GST Features
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
        title="Simplify Your GST Compliance"
        description="Make tax management easy with our automated GST features."
        primaryCTA={{ path: '/contact', label: 'Get Started' }}
        secondaryCTA={{ path: '/pricing', label: 'View Plans' }}
      />
    </>
  );
};

export default GSTTaxation;

