import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../seo/Seo';
import FeatureCard from '../components/FeatureCard';
import SectionReveal from '../components/SectionReveal';
import CTA from '../components/CTA';
import TestimonialCarousel from '../components/TestimonialCarousel';
import {
  FaCashRegister,
  FaBoxes,
  FaFileInvoice,
  FaUsers,
  FaChartLine,
  FaNetworkWired,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: FaCashRegister,
      title: 'Pharmacy POS System',
      description:
        'Streamline your point-of-sale operations with our intuitive pharmacy POS software. Fast billing, prescription management, and customer history tracking.',
    },
    {
      icon: FaBoxes,
      title: 'Inventory Management',
      description:
        'Complete pharma inventory management solution with real-time stock tracking, expiry alerts, and automated reorder points for your medical store.',
    },
    {
      icon: FaFileInvoice,
      title: 'Medical Store Billing',
      description:
        'Professional billing software for chemist shops with GST compliance, multiple payment modes, and instant invoice generation.',
    },
    {
      icon: FaUsers,
      title: 'Customer & Vendor Management',
      description:
        'Manage customer relationships and vendor partnerships efficiently with comprehensive CRM features built for pharmacy operations.',
    },
    {
      icon: FaChartLine,
      title: 'Advanced Reports & Analytics',
      description:
        'Get insights into your pharmacy business with detailed reports on sales, inventory, profits, and customer behavior.',
    },
    {
      icon: FaNetworkWired,
      title: 'Multi-Branch Management',
      description:
        'Manage multiple pharmacy branches from a single dashboard. Cloud-based pharmacy software that scales with your business.',
    },
  ];

  const benefits = [
    'Save 10+ hours per week on manual tasks',
    'Reduce inventory costs by up to 30%',
    'Zero expiry losses with smart alerts',
    'GST compliance made simple',
    'Real-time insights and analytics',
    '24/7 cloud access from anywhere',
  ];

  const stats = [
    { value: '10,000+', label: 'Happy Customers' },
    { value: '50+', label: 'Cities Served' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.8/5', label: 'Customer Rating' },
  ];

  const testimonials = [
    {
      quote:
        'Mediyaam has transformed our pharmacy operations. The inventory management system alone has saved us hours every day, and the billing software is incredibly fast and accurate.',
      name: 'Dr. Rajesh Kumar',
      role: 'Owner, City Medical Store',
    },
    {
      quote:
        'The multi-branch feature is a game-changer. We can now manage all our locations seamlessly. The cloud pharmacy software is reliable and user-friendly.',
      name: 'Priya Sharma',
      role: 'Operations Manager, HealthCare Pharmacy Chain',
    },
    {
      quote:
        'Best pharmacy ERP solution we\'ve used. The GST compliance features make tax filing so much easier, and the reports help us make better business decisions.',
      name: 'Amit Patel',
      role: 'CEO, MedLife Pharmaceuticals',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Mediyaam',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  };

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <>
      <Seo
        title="Pharmacy ERP: Pharmacy Management Software"
        description="Mediyaam is a comprehensive pharmacy ERP solution for billing, inventory, POS, and multi-branch management. Streamline your pharmacy operations with our cloud-based medical store billing software."
        keywords={[
          'pharmacy ERP',
          'pharmacy POS',
          'medical store billing software',
          'pharma inventory management',
          'chemist shop billing',
          'cloud pharmacy software',
          'drug stock tracking system',
          'pharmacy management software',
        ]}
        url="https://mediyaam.example.com"
        canonical="https://mediyaam.example.com"
        type="website"
        schema={schema}
      />
      
      {/* Hero Section with Enhanced Animations */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary-600 font-semibold mb-4 text-lg"
              >
                Pharmacy Management Software
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Complete Pharmacy ERP Solution for{' '}
                <span className="text-primary-600">Modern Medical Stores</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Streamline your pharmacy operations with Mediyaam's comprehensive ERP system. From billing and inventory to POS and multi-branch management, we've got everything you need.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Get Started Free
                    <FaArrowRight />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/pricing"
                    className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-center flex items-center justify-center"
                  >
                    View Pricing
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hero Image/Illustration Area */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Placeholder for hero image - Replace with actual image */}
              <div className="relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-2xl">
                <motion.div
                  animate={floatingAnimation}
                  className="bg-white rounded-xl p-6 shadow-lg mb-4"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <FaCashRegister className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                  </div>
                </motion.div>
                <motion.div
                  animate={floatingAnimation}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <FaChartLine className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="h-24 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg"></div>
                </motion.div>
              </div>
              {/* Decorative floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-400 rounded-full opacity-30 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Animations */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Everything You Need to Run Your Pharmacy
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Our pharmacy ERP software combines powerful features to help you
                manage billing, inventory, customers, and more—all in one place.
              </motion.p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Mediyaam?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join thousands of pharmacy owners who have transformed their
                  operations with our comprehensive ERP solution.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                      >
                        <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                      </motion.div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-xl">
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Sales</span>
                      <span className="text-green-600 font-semibold">+25%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-primary-50 rounded-lg">
                        <div className="text-2xl font-bold text-primary-600">₹2.5L</div>
                        <div className="text-sm text-gray-600">Monthly Revenue</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">98%</div>
                        <div className="text-sm text-gray-600">Efficiency</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Pharmacy Owners Nationwide
              </h2>
              <p className="text-xl text-gray-600">
                See what our customers have to say about Mediyaam
              </p>
            </div>
          </SectionReveal>
          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Pharmacy Operations?"
        description="Join thousands of pharmacy owners who trust Mediyaam for their business management needs."
        primaryCTA={{ path: '/contact', label: 'Start Free Trial' }}
        secondaryCTA={{ path: '/pricing', label: 'View Plans' }}
      />
    </>
  );
};

export default Home;
