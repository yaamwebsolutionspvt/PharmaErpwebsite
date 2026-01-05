'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaRedo, FaExclamationTriangle } from 'react-icons/fa';
import Seo from '../seo/Seo';

const ServerError = () => {
    return (
        <>
            <Seo
                title="500 - Server Error | Mediyaam"
                description="Something went wrong on our end. We're working to fix it. Please try again later."
                url="https://pharmacysoftwareindia.com/500"
                canonical="https://pharmacysoftwareindia.com/500"
                type="website"
            />

            <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4 pt-24">
                <div className="max-w-2xl w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* 500 Number */}
                        <motion.h1
                            className="text-7xl md:text-8xl font-bold text-red-600 mb-4"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            500
                        </motion.h1>

                        {/* Error Message */}
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Internal Server Error
                        </motion.h2>

                        <motion.p
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Oops! Something went wrong on our end. Our team has been notified and we're working to fix it.
                        </motion.p>

                        {/* Illustration */}
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="text-8xl mb-4">
                                <FaExclamationTriangle className="inline-block text-orange-500" />
                            </div>
                            <p className="text-gray-500 text-sm">We're experiencing technical difficulties</p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <button
                                onClick={() => window.location.reload()}
                                className="flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                            >
                                <FaRedo />
                                Try Again
                            </button>

                            <Link
                                href="/"
                                className="flex items-center gap-2 bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                            >
                                <FaHome />
                                Back to Home
                            </Link>
                        </motion.div>

                        {/* Support Information */}
                        <motion.div
                            className="mt-12 pt-8 border-t border-gray-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <p className="text-gray-600 mb-4">
                                If the problem persists, please contact our support team:
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                                <a
                                    href="mailto:info@yaamwebsolutions.com"
                                    className="text-primary-600 hover:text-primary-700 hover:underline font-semibold"
                                >
                                    📧 info@yaamwebsolutions.com
                                </a>
                                <a
                                    href="tel:+916006222304"
                                    className="text-primary-600 hover:text-primary-700 hover:underline font-semibold"
                                >
                                    📞 +91 6006222304
                                </a>
                            </div>
                        </motion.div>

                        {/* Error Code */}
                        <motion.div
                            className="mt-8 text-xs text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <p>Error Code: 500 - Internal Server Error</p>
                            <p className="mt-1">Timestamp: {new Date().toISOString()}</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default ServerError;
