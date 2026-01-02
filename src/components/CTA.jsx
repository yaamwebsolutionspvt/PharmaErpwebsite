import Link from 'next/link';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const CTA = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  className = '',
}) => {
  return (
    <section className={`bg-primary-600 text-white py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-xl text-primary-100 mb-8">{description}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Link
                href={primaryCTA.path}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.path}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

CTA.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  primaryCTA: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  secondaryCTA: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};

export default CTA;

