import { useState } from "react";
import Seo from "../seo/Seo";
import SectionReveal from "../components/SectionReveal";
import { submitContactForm } from "../utils/api";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xovreekj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "Mediyaam",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        email: "info@mediyaam.com",
        contactType: "Customer Service",
      },
    },
  };

  return (
    <>
      <Seo
        title="Contact Us — Get in Touch"
        description="Contact Mediyaam for pharmacy ERP software inquiries, demos, support, or sales. We're here to help you transform your pharmacy operations."
        keywords={[
          "contact pharmacy software",
          "pharmacy ERP support",
          "medical store software contact",
        ]}
        url="https://mediyaam.example.com/contact"
        canonical="https://mediyaam.example.com/contact"
        type="website"
        schema={schema}
      />
      <section
        className="relative py-48 md:py-60 bg-center bg-cover bg-no-repeat bg-gray-900"
        style={{
          backgroundImage: `url(${"https://res.cloudinary.com/dw1sh368y/image/upload/v1767250970/contactbg_ubhkyz.webp"})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-white leading-relaxed">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SectionReveal>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaPhone className="text-primary-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+916006222304</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-primary-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@yaamwebsolutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        Top Floor, Cynosure Tech Near SUMOSTAND, opp. Srinagar -
                        Kanyakumari Highway, Pamposh Mohalla, Kanyakumari,
                        Bijbehara, Jammu and Kashmir 192124
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Find Us on Map
                </h2>
                <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9378.784365495563!2d75.10091848240981!3d33.78905430893889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e21b4c284ee32f%3A0x6861cb8d1bb6e74b!2sYAAM%20Web%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1763528078390!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                {status === "success" && (
                  <div className="bg-green-50 text-green-800 p-4 rounded-lg">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {status === "error" && (
                  <div className="bg-red-50 text-red-800 p-4 rounded-lg">
                    Something went wrong. Please try again.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
