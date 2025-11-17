import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'City Medical Store Increases Efficiency by 40%',
      description:
        'How a small medical store streamlined operations with Mediyaam pharmacy ERP.',
      results: [
        '40% reduction in billing time',
        '30% reduction in inventory costs',
        'Zero expiry losses',
      ],
    },
    {
      title: 'HealthCare Chain Manages 10 Branches Seamlessly',
      description:
        'Multi-branch pharmacy chain improves coordination and reduces operational costs.',
      results: [
        'Centralized management of 10 branches',
        'Real-time inventory visibility',
        '50% reduction in reporting time',
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Case Studies — Pharmacy Success Stories"
        description="Read success stories from pharmacies using Mediyaam ERP. Learn how our pharmacy management software helps businesses grow and succeed."
        keywords={[
          'pharmacy case studies',
          'pharmacy success stories',
          'medical store case study',
        ]}
        url="https://mediyaam.example.com/case-studies"
        canonical="https://mediyaam.example.com/case-studies"
        type="website"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                See how pharmacies are transforming their operations with
                Mediyaam.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <SectionReveal key={index} delay={index * 0.2}>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Results:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {study.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;

