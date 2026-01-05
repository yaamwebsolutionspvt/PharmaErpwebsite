import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const PricingTable = ({ plans }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 relative ${plan.featured
              ? 'border-2 border-primary-600 md:transform md:scale-105 ring-4 ring-primary-100'
              : 'border border-gray-200'
            }`}
        >
          {plan.featured && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-full shadow-lg">
                <span className="font-bold text-sm">🏆 MOST POPULAR</span>
              </div>
            </div>
          )}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
          <p className="text-gray-600 mb-6">{plan.description}</p>
          <div className="mb-6">
            <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
            {plan.period && (
              <span className="text-gray-600 ml-2">/{plan.period}</span>
            )}
            {plan.pricePerMonth && (
              <div className="text-sm text-gray-500 mt-1">({plan.pricePerMonth})</div>
            )}
          </div>
          {(plan.implementation || plan.amc) && (
            <div className="mb-6 p-3 bg-gray-50 rounded-lg text-sm">
              {plan.implementation && (
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Implementation:</span>
                  <span className="font-semibold text-gray-900">{plan.implementation}</span>
                </div>
              )}
              {plan.amc && (
                <div className="flex justify-between">
                  <span className="text-gray-600">AMC:</span>
                  <span className="font-semibold text-green-600">{plan.amc}</span>
                </div>
              )}
            </div>
          )}
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                {feature.included ? (
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                ) : (
                  <FaTimes className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                )}
                <span
                  className={
                    feature.included ? 'text-gray-700' : 'text-gray-400'
                  }
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href={plan.ctaPath}
            className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${plan.featured
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
          >
            {plan.ctaLabel}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

PricingTable.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      period: PropTypes.string,
      pricePerMonth: PropTypes.string,
      implementation: PropTypes.string,
      amc: PropTypes.string,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          included: PropTypes.bool.isRequired,
        })
      ).isRequired,
      ctaPath: PropTypes.string.isRequired,
      ctaLabel: PropTypes.string.isRequired,
      featured: PropTypes.bool,
    })
  ).isRequired,
};

export default PricingTable;

