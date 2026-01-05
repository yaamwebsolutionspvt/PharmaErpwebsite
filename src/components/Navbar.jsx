"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    {
      path: '/product',
      label: 'Product',
      submenu: [
        { path: '/product/pos', label: 'POS' },
        { path: '/product/inventory', label: 'Inventory' },
        { path: '/product/billing', label: 'Billing' },
        { path: '/product/customer-vendor', label: 'Customer & Vendor' },
        { path: '/product/gst-taxation', label: 'GST/Taxation' },
        { path: '/product/reports', label: 'Reports' },
        { path: '/product/multi-branch', label: 'Multi-Branch' },
      ],
    },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/case-studies', label: 'Case Studies' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white shadow-md py-3'
        : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Mediyaam Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-primary-600">Mediyaam</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.path} className="relative group">
                    <Link
                      href={link.path}
                      className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.path}
                            href={sub.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-gray-700 hover:text-primary-600 transition-colors font-medium ${pathname === link.path ? 'text-primary-600' : ''
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pb-4 max-h-[calc(100vh-100px)] overflow-y-auto">
                {navLinks.map((link) => {
                  if (link.submenu) {
                    return (
                      <div key={link.path}>
                        <button
                          onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                          className="flex items-center justify-between w-full text-gray-700 hover:text-primary-600 font-medium"
                        >
                          <span>{link.label}</span>
                          {mobileSubmenuOpen ? (
                            <FaChevronUp className="text-sm" />
                          ) : (
                            <FaChevronDown className="text-sm" />
                          )}
                        </button>
                        <AnimatePresence>
                          {mobileSubmenuOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-2 space-y-2">
                                {link.submenu.map((sub) => (
                                  <Link
                                    key={sub.path}
                                    href={sub.path}
                                    className="block text-gray-600 hover:text-primary-600 text-sm py-1"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`text-gray-700 hover:text-primary-600 font-medium ${pathname === link.path ? 'text-primary-600' : ''
                        }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
