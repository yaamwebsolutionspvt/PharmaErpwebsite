import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';

const Terms = () => {
  return (
    <>
      <Seo
        title="Terms of Service — Mediyaam"
        description="Read Mediyaam's terms of service to understand the terms and conditions for using our pharmacy ERP software."
        keywords={['terms of service', 'terms and conditions']}
        url="https://mediyaam.example.com/terms"
        canonical="https://mediyaam.example.com/terms"
        type="website"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-gray-600">Last updated: January 2025</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <SectionReveal>
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using Mediyaam, you accept and agree to be bound
                by the terms and provision of this agreement.
              </p>
              <h2>Use License</h2>
              <p>
                Permission is granted to temporarily use Mediyaam for personal,
                non-commercial transitory viewing only.
              </p>
              <h2>Disclaimer</h2>
              <p>
                The materials on Mediyaam are provided on an 'as is' basis.
                Mediyaam makes no warranties, expressed or implied.
              </p>
              <h2>Limitations</h2>
              <p>
                In no event shall Mediyaam or its suppliers be liable for any
                damages arising out of the use or inability to use the materials
                on Mediyaam.
              </p>
              <h2>Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us at
                legal@mediyaam.com.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;

