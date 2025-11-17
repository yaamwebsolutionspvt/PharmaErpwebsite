import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';
import { FaAward, FaUsers, FaGlobe, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaUsers, value: '10,000+', label: 'Happy Customers' },
    { icon: FaGlobe, value: '50+', label: 'Cities Served' },
    { icon: FaAward, value: '15+', label: 'Years Experience' },
    { icon: FaLightbulb, value: '24/7', label: 'Support Available' },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mediyaam',
    description:
      'Leading provider of pharmacy ERP solutions for medical stores and pharmacy chains.',
    url: 'https://mediyaam.example.com',
    logo: 'https://mediyaam.example.com/assets/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
    },
  };

  return (
    <>
      <Seo
        title="About Us — Leading Pharmacy ERP Solution Provider"
        description="Learn about Mediyaam, a trusted provider of pharmacy management software, medical store billing solutions, and cloud-based pharmacy ERP systems. Serving 10,000+ pharmacies nationwide."
        keywords={[
          'pharmacy ERP provider',
          'pharmacy software company',
          'medical store software',
          'pharmacy management solutions',
        ]}
        url="https://mediyaam.example.com/about"
        canonical="https://mediyaam.example.com/about"
        type="website"
        schema={schema}
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Mediyaam
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're on a mission to revolutionize pharmacy management with
                innovative technology solutions.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded with a vision to simplify pharmacy operations, Mediyaam
                  has been at the forefront of pharmacy ERP solutions for over 15
                  years. We understand the unique challenges faced by medical store
                  owners and have built comprehensive software to address them.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our cloud-based pharmacy software helps thousands of pharmacies
                  streamline their billing, inventory, and customer management
                  processes. From small chemist shops to large pharmacy chains,
                  we provide scalable solutions that grow with your business.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, Mediyaam is trusted by over 10,000 pharmacy owners
                  across the country, helping them manage their operations more
                  efficiently and serve their customers better.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower pharmacy owners with cutting-edge technology that
                  simplifies operations, improves efficiency, and drives business
                  growth. We believe every pharmacy deserves access to professional
                  management tools.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Impact
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <stat.icon className="text-primary-600 text-4xl mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Why Choose Mediyaam?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Industry Expertise
                  </h3>
                  <p className="text-gray-600">
                    With over 15 years of experience in pharmacy management
                    software, we understand the industry inside and out.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Comprehensive Solutions
                  </h3>
                  <p className="text-gray-600">
                    From billing and inventory to POS and multi-branch
                    management, we offer everything you need in one platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Continuous Innovation
                  </h3>
                  <p className="text-gray-600">
                    We constantly update our software with new features and
                    improvements based on customer feedback and industry trends.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Reliable Support
                  </h3>
                  <p className="text-gray-600">
                    Our dedicated support team is available 24/7 to help you
                    with any questions or issues.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default About;

