import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';

const Privacy = () => {
  return (
    <>
      <Seo
        title="Privacy Policy — Mediyaam"
        description="Read Mediyaam's privacy policy to understand how we collect, use, and protect your data."
        keywords={['privacy policy', 'data protection']}
        url="https://mediyaam.example.com/privacy"
        canonical="https://mediyaam.example.com/privacy"
        type="website"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy
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
              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as
                when you create an account, use our services, or contact us for
                support.
              </p>
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, process transactions, and communicate with
                you.
              </p>
              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at privacy@mediyaam.com.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;

