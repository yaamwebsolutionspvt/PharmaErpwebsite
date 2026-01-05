import { useState } from 'react';
import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import faqs from '../data/faqs';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Seo
        title="FAQ — Frequently Asked Questions"
        description="Find answers to common questions about Mediyaam pharmacy ERP software, pricing, features, support, and more."
        keywords={[
          'pharmacy ERP FAQ',
          'pharmacy software questions',
          'medical store software FAQ',
        ]}
        url="pharmacysoftwareindia.com/faq"
        canonical="pharmacysoftwareindia.com/faq"
        type="website"
        schema={schema}
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Find answers to common questions about Mediyaam pharmacy ERP.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <SectionReveal key={index} delay={index * 0.05}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      {openIndex === index ? (
                        <FaChevronUp className="text-primary-600" />
                      ) : (
                        <FaChevronDown className="text-gray-400" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="px-6 py-4 bg-gray-50">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

