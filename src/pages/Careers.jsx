import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';
import CTA from '../components/CTA';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Hybrid',
      type: 'Full-time',
    },
    {
      title: 'Customer Success Manager',
      department: 'Support',
      location: 'On-site',
      type: 'Full-time',
    },
  ];

  return (
    <>
      <Seo
        title="Careers — Join the Mediyaam Team"
        description="Join Mediyaam and help transform pharmacy management. We're looking for talented individuals to join our growing team."
        keywords={['mediyaam careers', 'pharmacy software jobs']}
        url="https://pharmacysoftwareindia.com/careers"
        canonical="https://pharmacysoftwareindia.com/careers"
        type="website"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Help us revolutionize pharmacy management. We're looking for
                passionate individuals to join our mission.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Open Positions
            </h2>
          </SectionReveal>
          <div className="max-w-3xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Don't See a Role That Fits?"
        description="We're always looking for talented people. Send us your resume."
        primaryCTA={{ path: '/contact', label: 'Contact Us' }}
      />
    </>
  );
};

export default Careers;

