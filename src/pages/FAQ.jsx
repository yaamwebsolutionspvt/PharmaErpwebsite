import { useState } from 'react';
import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Mediyaam pharmacy ERP?',
      answer:
        'Mediyaam is a comprehensive pharmacy management software that includes POS, inventory management, billing, customer management, GST compliance, and multi-branch support. It helps pharmacies streamline operations and improve efficiency.',
    },
    {
      question: 'Do I need to install any software?',
      answer:
        'No, Mediyaam is a cloud-based solution. You can access it from any device with an internet connection through a web browser. No installation or setup required.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, we use bank-level encryption and security measures to protect your data. Regular backups ensure your information is safe and can be recovered if needed.',
    },
    {
      question: 'Can I use it for multiple branches?',
      answer:
        'Yes, our Professional and Enterprise plans support multi-branch management. You can manage all your pharmacy locations from a single dashboard.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major payment methods including credit/debit cards, UPI, net banking, and bank transfers. You can also pay via cheque or demand draft.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial.',
    },
    {
      question: 'Do you provide training?',
      answer:
        'Yes, we provide comprehensive training and onboarding support. Our team will help you get started and ensure your staff is comfortable using the system.',
    },
    {
      question: 'What kind of support do you offer?',
      answer:
        'We offer 24/7 customer support via email, phone, and chat. Enterprise customers get dedicated support with SLA guarantees.',
    },
  ];

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
        url="https://mediyaam.example.com/faq"
        canonical="https://mediyaam.example.com/faq"
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

