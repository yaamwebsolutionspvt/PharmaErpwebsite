import Seo from '../../seo/Seo';
import SectionReveal from '../../components/SectionReveal';
import FeatureCard from '../../components/FeatureCard';
import CTA from '../../components/CTA';
import {
  FaChartLine,
  FaDollarSign,
  FaBoxes,
  FaUsers,
  FaFileExport,
  FaMobileAlt,
} from 'react-icons/fa';

const Reports = () => {
  const features = [
    {
      icon: FaChartLine,
      title: 'Sales Reports',
      description:
        'Detailed sales reports by date, product, category, and customer with visual charts.',
    },
    {
      icon: FaDollarSign,
      title: 'Profit & Loss',
      description:
        'Complete P&L statements showing revenue, costs, and profitability analysis.',
    },
    {
      icon: FaBoxes,
      title: 'Inventory Reports',
      description:
        'Stock reports, slow-moving items, expiry analysis, and stock valuation.',
    },
    {
      icon: FaUsers,
      title: 'Customer Analytics',
      description:
        'Customer purchase patterns, top customers, and customer lifetime value.',
    },
    {
      icon: FaFileExport,
      title: 'Export Options',
      description:
        'Export reports to PDF, Excel, or CSV for further analysis and sharing.',
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile Dashboard',
      description:
        'Access key reports and analytics on mobile devices anytime, anywhere.',
    },
  ];

  return (
    <>
      <Seo
        title="Reports & Analytics — Pharmacy Business Intelligence"
        description="Comprehensive reporting and analytics for pharmacies. Sales reports, P&L statements, inventory analysis, and customer insights to drive business growth."
        keywords={[
          'pharmacy reports',
          'pharmacy analytics',
          'medical store reports',
          'pharmacy business intelligence',
        ]}
        url="https://pharmacysoftwareindia.com/product/reports"
        canonical="https://pharmacysoftwareindia.com/product/reports"
        type="website"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Reports & Analytics
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Make data-driven decisions with comprehensive reports and
                analytics designed for pharmacy businesses.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Reporting Features
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
        title="Get Insights Into Your Pharmacy Business"
        description="Make informed decisions with our comprehensive reporting system."
        primaryCTA={{ path: '/contact', label: 'Request Demo' }}
        secondaryCTA={{ path: '/pricing', label: 'View Pricing' }}
      />
    </>
  );
};

export default Reports;

