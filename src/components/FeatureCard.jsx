import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon: Icon, title, description, delay = 0, headingLevel = 'h3' }) => {
  // Dynamic heading tag based on context
  const HeadingTag = headingLevel;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
    >
      {Icon && (
        <motion.div
          className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="text-primary-600 group-hover:text-white text-2xl transition-colors duration-300" />
        </motion.div>
      )}
      <HeadingTag className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
        {title}
      </HeadingTag>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

export default FeatureCard;

