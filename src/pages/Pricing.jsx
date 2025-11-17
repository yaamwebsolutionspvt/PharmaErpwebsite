import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';
import PricingTable from '../components/PricingTable';
import CTA from '../components/CTA';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small pharmacies',
      price: '₹999',
      period: 'month',
      featured: false,
      features: [
        { text: 'POS System', included: true },
        { text: 'Basic Inventory', included: true },
        { text: 'Billing Software', included: true },
        { text: 'GST Compliance', included: true },
        { text: 'Basic Reports', included: true },
        { text: 'Email Support', included: true },
        { text: 'Multi-Branch', included: false },
        { text: 'Advanced Analytics', included: false },
      ],
      ctaPath: '/contact',
      ctaLabel: 'Get Started',
    },
    {
      name: 'Professional',
      description: 'For growing pharmacies',
      price: '₹2,499',
      period: 'month',
      featured: true,
      features: [
        { text: 'Everything in Starter', included: true },
        { text: 'Advanced Inventory', included: true },
        { text: 'Customer Management', included: true },
        { text: 'Vendor Management', included: true },
        { text: 'Advanced Reports', included: true },
        { text: 'Multi-Branch (up to 3)', included: true },
        { text: 'Priority Support', included: true },
        { text: 'API Access', included: false },
      ],
      ctaPath: '/contact',
      ctaLabel: 'Get Started',
    },
    {
      name: 'Enterprise',
      description: 'For pharmacy chains',
      price: 'Custom',
      period: '',
      featured: false,
      features: [
        { text: 'Everything in Professional', included: true },
        { text: 'Unlimited Branches', included: true },
        { text: 'Custom Integrations', included: true },
        { text: 'Dedicated Support', included: true },
        { text: 'Custom Reports', included: true },
        { text: 'Training & Onboarding', included: true },
        { text: 'API Access', included: true },
        { text: 'SLA Guarantee', included: true },
      ],
      ctaPath: '/contact',
      ctaLabel: 'Contact Sales',
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
        name: 'Starter',
        price: '999',
        priceCurrency: 'INR',
      },
      {
        '@type': 'Offer',
        name: 'Professional',
        price: '2499',
        priceCurrency: 'INR',
      },
    ],
  };

  return (
    <>
      <Seo
        title="Pricing — Affordable Pharmacy ERP Plans"
        description="Choose the perfect plan for your pharmacy. Flexible pricing from ₹999/month for small pharmacies to enterprise solutions for chains. Start free trial."
        keywords={[
          'pharmacy ERP pricing',
          'pharmacy software cost',
          'medical store software price',
        ]}
        url="https://mediyaam.example.com/pricing"
        canonical="https://mediyaam.example.com/pricing"
        type="website"
        schema={schema}
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Choose the plan that fits your pharmacy. All plans include free
                trial and no setup fees.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
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
    </>
  );
};

export default Pricing;

