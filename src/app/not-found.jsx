'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaArrowLeft } from 'react-icons/fa';
import Seo from '../seo/Seo';

const NotFound = () => {
    return (
        <>
            <Seo
                title="404 - Page Not Found | Mediyaam"
                description="The page you're looking for doesn't exist. Return to Mediyaam pharmacy software homepage."
                url="https://pharmacysoftwareindia.com/404"
                canonical="https://pharmacysoftwareindia.com/404"
                type="website"
            />

            <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-indigo-50 flex items-center justify-center px-4 pt-24">
                <div className="max-w-2xl w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* 404 Number */}
                        <motion.h1
                            className="text-7xl md:text-8xl font-bold text-primary-600 mb-4"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            404
                        </motion.h1>

                        {/* Error Message */}
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Oops! Page Not Found
                        </motion.h2>

                        <motion.p
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            The page you're looking for doesn't exist or has been moved. Let's get you back on track!
                        </motion.p>

                        {/* Illustration */}
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="text-8xl mb-4">💊</div>
                            <p className="text-gray-500 text-sm">Lost in the pharmacy aisles?</p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                href="/"
                                className="flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                            >
                                <FaHome />
                                Back to Home
                            </Link>

                            <Link
                                href="/contact"
                                className="flex items-center gap-2 bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                            >
                                <FaSearch />
                                Contact Support
                            </Link>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            className="mt-12 pt-8 border-t border-gray-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <p className="text-gray-600 mb-4 font-semibold">Quick Links:</p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link
                                    href="/product"
                                    className="text-primary-600 hover:text-primary-700 hover:underline"
                                >
                                    Products
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="text-primary-600 hover:text-primary-700 hover:underline"
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="/features"
                                    className="text-primary-600 hover:text-primary-700 hover:underline"
                                >
                                    Features
                                </Link>
                                <Link
                                    href="/blog"
                                    className="text-primary-600 hover:text-primary-700 hover:underline"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-primary-600 hover:text-primary-700 hover:underline"
                                >
                                    About Us
                                </Link>
                            </div>
                        </motion.div>

                        {/* Go Back Button */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                            >
                                <FaArrowLeft />
                                <span>Go back to previous page</span>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
