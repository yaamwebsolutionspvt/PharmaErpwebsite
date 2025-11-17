import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const PricingTable = ({ plans }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`bg-white rounded-xl shadow-lg p-8 ${
            plan.featured
              ? 'border-2 border-primary-600 transform scale-105'
              : 'border border-gray-200'
          }`}
        >
          {plan.featured && (
            <div className="bg-primary-600 text-white text-center py-2 rounded-t-lg -mt-8 -mx-8 mb-4">
              <span className="font-semibold">Most Popular</span>
            </div>
          )}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
          <p className="text-gray-600 mb-6">{plan.description}</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
            {plan.period && (
              <span className="text-gray-600 ml-2">/{plan.period}</span>
            )}
          </div>
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
            to={plan.ctaPath}
            className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
              plan.featured
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

