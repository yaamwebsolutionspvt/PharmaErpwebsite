import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { path: "/product/pos", label: "POS System" },
      { path: "/product/inventory", label: "Inventory Management" },
      { path: "/product/billing", label: "Billing Software" },
      { path: "/product/multi-branch", label: "Multi-Branch" },
    ],
    company: [
      { path: "/about", label: "About Us" },
      { path: "/careers", label: "Careers" },
      { path: "/case-studies", label: "Case Studies" },
      { path: "/blog", label: "Blog" },
    ],
    support: [
      { path: "/faq", label: "FAQ" },
      { path: "/contact", label: "Contact" },
      { path: "/privacy", label: "Privacy Policy" },
      { path: "/terms", label: "Terms of Service" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">Mediyaam</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Comprehensive pharmacy ERP solution for billing, inventory, POS,
              and multi-branch management. Streamline your pharmacy operations
              with our cloud-based software.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Yaam-Web-Solutions/61577392363273/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://x.com/Yaam_Web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/yaam-web-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/yaam_web_solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="tel:+916006222304"
              className="flex items-center space-x-2 hover:text-primary-400 transition"
              rel="noopener noreferrer"
            >
              <FaPhone className="text-primary-400" />
              <span>+91 6006222304</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@yaamwebsolutions.com"
              className="flex items-center space-x-2 hover:text-primary-400 transition"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-primary-400" />
              <span>info@yaamwebsolutions.com</span>
            </a>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-primary-400 text-5xl" />

              <a
                href="https://www.google.com/maps?q=Top+Floor,+Cynosure+Tech+Near+SUMOSTAND,+opp.+Srinagar+-+Kanyakumari+Highway,+Pamposh+Mohalla,+Kanyakumari,+Bijbehara,+Jammu+and+Kashmir+192124"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition"
              >
                Top Floor, Cynosure Tech Near SUMOSTAND, opp. Srinagar -
                Kanyakumari Highway, Pamposh Mohalla, Kanyakumari, Bijbehara,
                Jammu and Kashmir 192124
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {currentYear} Made with{" "}
            <span className="text-red-500">❤️</span> by{" "}
            <a
              href="https://yaamwebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              yaamwebsolutions.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
