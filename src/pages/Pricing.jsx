import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';
import PricingTable from '../components/PricingTable';
import CTA from '../components/CTA';

const Pricing = () => {
  const plans = [
    {
      name: 'Enterprise',
      description: 'For large pharmacy chains & hospital stores',
      price: '₹9,999',
      period: 'year',
      pricePerMonth: '₹1,250/month',
      featured: true,
      implementation: '₹5,000',
      amc: '₹0',
      features: [
        { text: 'Everything in Professional', included: true },
        { text: 'ONDC Connectivity', included: true },
        { text: 'ABDM Compliance (Ayushman Bharat)', included: true },
        { text: 'AI-Powered Demand Forecasting', included: true },
        { text: 'Supplier API Integration', included: true },
        { text: 'Rack Management System', included: true },
        { text: 'Dedicated Account Management', included: true },
        { text: 'On-Site Training & Custom Integration', included: true },
        { text: 'Priority 24/7 Support', included: true },
        { text: 'Unlimited Branches', included: true },
      ],
      ctaPath: '/contact',
      ctaLabel: 'Contact Sales',
    },
    {
      name: 'Professional',
      description: 'For busy retail chemists in Tier-2 cities',
      price: '₹6,999',
      period: 'year',
      pricePerMonth: '₹666/month',
      featured: false,
      implementation: '₹2,500',
      amc: '₹0',
      features: [
        { text: 'Unlimited Billing', included: true },
        { text: 'WhatsApp Integration for Digital Bills', included: true },
        { text: 'Salt/Substitute Search', included: true },
        { text: 'Automated Low-Stock Alerts', included: true },
        { text: 'GSTR-1 & GSTR-3B Report Generation', included: true },
        { text: 'Multi-Device Sync', included: true },
        { text: 'Staff Training Included', included: true },
        { text: 'Hardware Integration', included: true },
      ],
      ctaPath: '/contact',
      ctaLabel: 'Get Started',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Mediyaam Pharmacy ERP',
    description: 'Pricing plans for pharmacy ERP software',
    offers: [
      {
        '@type': 'Offer',
        name: 'Professional',
        price: '6999',
        priceCurrency: 'INR',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise',
        price: '9999',
        priceCurrency: 'INR',
      },
    ],
  };

  return (
    <>
      <Seo
        title="Pharmacy Software Price in India | Affordable Billing Software Pricing - Mediyaam"
        description="Transparent pharmacy billing software pricing starting at ₹999/month. Best pharmacy software in India with affordable plans for medical stores. Compare top 10 pharmacy billing software prices."
        keywords={[
          'pharmacy billing software price',
          'pharmacy software price in india',
          'cheapest medical billing software',
          'best billing software for pharmacy in india',
          'pharmacy billing software india',
          'pharmacy software india',
          'which is the best billing software',
          'top 10 pharmacy billing software',
          'pharmacy ERP pricing',
          'pharmacy software cost',
          'medical store software price',
        ]}
        url="pharmacysoftwareindia.com/pricing"
        canonical="pharmacysoftwareindia.com/pricing"
        type="website"
        schema={schema}
      />
      <main id="main-content">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Pharmacy Software Price in India - Affordable Plans for Every Medical Store
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Choose the best pharmacy billing software in India. Transparent pricing from ₹999/month for small pharmacies to enterprise solutions for chains. Compare with top 10 pharmacy software in India. All plans include free trial and no setup fees.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                Choose Your Perfect Plan
              </h2>
            </SectionReveal>
            <PricingTable plans={plans} />
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  All Plans Include
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Free Trial
                    </h3>
                    <p className="text-gray-600">
                      14-day free trial with full access to all features.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      No Setup Fees
                    </h3>
                    <p className="text-gray-600">
                      Get started immediately with zero setup or installation costs.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Regular Updates
                    </h3>
                    <p className="text-gray-600">
                      Automatic updates with new features and improvements.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Data Security
                    </h3>
                    <p className="text-gray-600">
                      Bank-level security with regular backups and encryption.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        <CTA
          title="Ready to Get Started?"
          description="Start your free trial today. No credit card required."
          primaryCTA={{ path: '/contact', label: 'Start Free Trial' }}
          secondaryCTA={{ path: '/contact', label: 'Contact Sales' }}
        />
      </main>
    </>
  );
};

export default Pricing;

