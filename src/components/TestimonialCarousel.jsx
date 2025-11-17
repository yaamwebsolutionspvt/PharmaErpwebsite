import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const TestimonialCarousel = ({ testimonials, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(nextTestimonial, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlayInterval, testimonials.length]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-xl shadow-lg"
        >
          <FaQuoteLeft className="text-primary-600 text-4xl mb-6" />
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            {testimonials[currentIndex].quote}
          </p>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
              {testimonials[currentIndex].avatar && (
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-600 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-gray-100 hover:bg-primary-600 hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-gray-100 hover:bg-primary-600 hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

TestimonialCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    })
  ).isRequired,
  autoPlayInterval: PropTypes.number,
};

export default TestimonialCarousel;

