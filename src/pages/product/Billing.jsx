import Seo from '../../seo/Seo';
import SectionReveal from '../../components/SectionReveal';
import FeatureCard from '../../components/FeatureCard';
import CTA from '../../components/CTA';
import {
  FaFileInvoice,
  FaRupeeSign,
  FaCheckCircle,
  FaDownload,
  FaPrint,
  FaHistory,
} from 'react-icons/fa';

const Billing = () => {
  const features = [
    {
      icon: FaFileInvoice,
      title: 'Professional Invoices',
      description:
        'Generate GST-compliant invoices with all required details and branding.',
    },
    {
      icon: FaRupeeSign,
      title: 'GST Calculation',
      description:
        'Automatic GST calculation for different tax slabs and HSN codes.',
    },
    {
      icon: FaCheckCircle,
      title: 'Multiple Payment Modes',
      description:
        'Accept cash, cards, UPI, wallets, and credit options seamlessly.',
    },
    {
      icon: FaDownload,
      title: 'Digital Invoices',
      description:
        'Send invoices via email or WhatsApp. Download PDF invoices instantly.',
    },
    {
      icon: FaPrint,
      title: 'Quick Printing',
      description:
        'Print invoices, receipts, and bills with customizable templates.',
    },
    {
      icon: FaHistory,
      title: 'Billing History',
      description:
        'Access complete billing history with advanced search and filters.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Mediyaam Billing Software',
    applicationCategory: 'BillingApplication',
    description:
      'Professional medical store billing software with GST compliance and multiple payment options.',
  };

  return (
    <>
      <Seo
        title="Best Pharmacy Billing Software India | Medical Store Billing System - Mediyaam"
        description="India's best pharmacy billing software with GST compliance. Fast medical store billing system trusted by 10,000+ chemist shops. Top-rated pharmacy billing software in India."
        keywords={[
          'best pharmacy billing software india',
          'pharmacy billing software india',
          'best billing software for pharmacy in india',
          'medical store billing software india',
          'top 10 pharmacy billing software',
          'best pharmacy billing software',
          'pharmacy billing software price',
          'medical store billing software',
          'chemist shop billing',
          'pharmacy billing system',
          'medical billing software',
          'pharmacy invoice software',
        ]}
        url="https://pharmacysoftwareindia.com/product/billing"
        canonical="https://pharmacysoftwareindia.com/product/billing"
        type="website"
        schema={schema}
      />
      <main id="main-content">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Best Pharmacy Billing Software in India for Medical Stores
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  India's top-rated pharmacy billing software with GST compliance, multiple payment options, and instant invoice generation. Trusted by 10,000+ medical stores and chemist shops across India.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Billing Features
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
                  Why Our Billing Software?
                </h2>
              </SectionReveal>
              <div className="space-y-6">
                <SectionReveal>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      GST Compliant
                    </h3>
                    <p className="text-gray-600">
                      Fully compliant with GST regulations. Automatic tax
                      calculations and HSN code management for easy filing.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal delay={0.1}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Fast & Accurate
                    </h3>
                    <p className="text-gray-600">
                      Process bills in seconds with minimal errors. Reduce billing
                      time and improve customer satisfaction.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal delay={0.2}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Customizable Templates
                    </h3>
                    <p className="text-gray-600">
                      Design invoices that match your brand. Add logo, customize
                      layout, and include all necessary information.
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title="Upgrade Your Pharmacy Billing System"
          description="Experience professional billing with GST compliance and modern features."
          primaryCTA={{ path: '/contact', label: 'Request Demo' }}
          secondaryCTA={{ path: '/pricing', label: 'See Pricing' }}
        />
      </main>
    </>
  );
};

export default Billing;

