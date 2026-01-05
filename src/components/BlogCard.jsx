import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';

const BlogCard = ({ post, delay = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
    >
      {post.image && (
        <Link href={post.path} className="block overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 sm:h-56 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-600 mb-3">
          {post.date && (
            <span className="flex items-center mr-4">
              <FaCalendar className="mr-2" />
              {post.date}
            </span>
          )}
          {post.author && (
            <span className="flex items-center">
              <FaUser className="mr-2" />
              {post.author}
            </span>
          )}
        </div>
        <Link href={post.path}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        {post.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        )}
        <Link
          href={post.path}
          className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </motion.article>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  delay: PropTypes.number,
};

export default BlogCard;

