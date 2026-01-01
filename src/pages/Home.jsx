import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../seo/Seo';
import FeatureCard from '../components/FeatureCard';
import SectionReveal from '../components/SectionReveal';
import CTA from '../components/CTA';
import TestimonialCarousel from '../components/TestimonialCarousel';
const dashimage1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1767250974/dashboard_screen_2_bio3us.webp";
const dashimage2 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1767250967/dashboard_screen_1_bgwjjw.webp";
const heroImage1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1767251001/contactBg_chdnbd.webp";
import faqs from '../data/faqs';

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
  const heroImages = [
    { id: 'heroImage1', label: 'Hero Image 1', src: heroImage1 },
  ];

  const dashImages = [
    { id: 'dashImage1', label: 'Dashboard Overview', src: dashimage1 },
    { id: 'dashImage2', label: 'POS Screen', src: dashimage2 },
  ];

  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return undefined;
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const [currentDashImage, setCurrentDashImage] = useState(0);

  useEffect(() => {
    if (dashImages.length <= 1) return undefined;
    const interval = setInterval(() => {
      setCurrentDashImage((prev) => (prev + 1) % dashImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dashImages.length]);

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

  const faqPreview = faqs.slice(0, 6);

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
      <section
        className="relative py-16 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.475), rgba(240,249,255,0.45)), url(${heroImages[currentHeroImage].src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.8s ease-in-out',
        }}
      >
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

            {/* Hero Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={dashImages[currentDashImage].id}
                      src={dashImages[currentDashImage].src}
                      alt={`${dashImages[currentDashImage].label} showcasing Mediyaam pharmacy ERP`}
                      className="w-full h-[380px] object-cover rounded-2xl"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      loading="eager"
                    />
                  </AnimatePresence>
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={floatingAnimation}
                  >
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 rounded-full shadow-lg text-sm font-semibold text-primary-700 backdrop-blur">
                      Live Dashboard
                    </div>
                    <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/80 rounded-full shadow-lg text-sm font-semibold text-primary-700 backdrop-blur">
                      AI Insights
                    </div>
                  </motion.div>
                </div>
                <div className="flex items-center justify-between mt-6 px-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-sm uppercase tracking-wide">Screens</span>
                    <div className="flex gap-2">
                      {dashImages.map((dash, index) => (
                        <button
                          key={dash.id}
                          onClick={() => setCurrentDashImage(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentDashImage === index ? 'bg-primary-600 w-6' : 'bg-gray-300'
                            }`}
                          aria-label={`View ${dash.label}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setCurrentDashImage((prev) =>
                          prev === 0 ? dashImages.length - 1 : prev - 1
                        )
                      }
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary-200 hover:text-primary-600 transition-colors"
                      aria-label="Previous dash image"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() =>
                        setCurrentDashImage((prev) => (prev + 1) % dashImages.length)
                      }
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary-200 hover:text-primary-600 transition-colors"
                      aria-label="Next dash image"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
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

      {/* FAQ Preview Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            <SectionReveal className="flex-1">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary-500 font-semibold mb-3">
                  Questions we hear most
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  FAQ highlights
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Buyers often ask about compliance, onboarding, integrations,
                  and support. Here are the top answers—explore the full
                  knowledge base for more detail.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition-colors"
              >
                View all FAQs
              </Link>
            </SectionReveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqPreview.map((faq, index) => (
              <SectionReveal key={faq.question} delay={index * 0.05}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100 hover:border-primary-200 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </SectionReveal>
            ))}
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
