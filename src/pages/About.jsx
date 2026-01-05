import Seo from "../seo/Seo";
import SectionReveal from "../components/SectionReveal";
import { FaAward, FaUsers, FaGlobe, FaLightbulb } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: FaGlobe, value: "50+", label: "Cities Served" },
    { icon: FaAward, value: "15+", label: "Years Experience" },
    { icon: FaLightbulb, value: "24/7", label: "Support Available" },
    { icon: FaUsers, value: "10k+", label: "Pharmacies Served" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mediyaam",
    description:
      "Leading provider of pharmacy ERP solutions for medical stores and pharmacy chains.",
    url: "pharmacysoftwareindia.com",
    logo: "pharmacysoftwareindia.com/assets/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-6006222304",
      contactType: "Customer Service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near SUMOSTAND Stand Bijbehara",
      addressLocality: "Anantnag",
      addressRegion: "Jammu and Kashmir",
      postalCode: "192124",
      addressCountry: "India",
    },
  };

  return (
    <>
      <Seo
        title="About Mediyaam | Leading Pharmacy Software Provider in India"
        description="Mediyaam is a leading provider of pharmacy management software in India, serving 10,000+ medical stores across 50+ cities. Learn why we're rated among the top 10 pharmacy software in India."
        keywords={[
          "pharmacy software provider india",
          "top 10 pharmacy software in india",
          "best pharmacy software company india",
          "pharmacy ERP provider",
          "pharmacy software company",
          "medical store software",
          "pharmacy management solutions",
        ]}
        url="pharmacysoftwareindia.com/about"
        canonical="pharmacysoftwareindia.com/about"
        type="website"
        schema={schema}
      />

      <main id="main-content">
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
        <section
          className="relative lg:py-36 py-24 bg-center bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url("/assets/images/contactBg.jpg")`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <SectionReveal>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                About Mediyaam
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed">
                Revolutionizing pharmacy management with powerful, intuitive, and
                scalable ERP solutions built for modern pharmacies.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SectionReveal>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Story
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Founded with a vision to simplify pharmacy operations,
                    Mediyaam has been at the forefront of pharmacy ERP solutions
                    for over 15 years. Our mission is to empower pharmacies with
                    seamless and efficient management tools.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Our cloud-based pharmacy software helps thousands of
                    pharmacies streamline their billing, inventory, and customer
                    management workflows—ensuring smooth day-to-day operations.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Today, Mediyaam is trusted by over 10,000 pharmacy owners
                    across the country, helping them transform their business
                    operations with cutting-edge technology.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="bg-white shadow-xl rounded-2xl p-8 border border-primary-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower pharmacy owners with advanced management tools that
                    simplify complex workflows, improve efficiency, and enhance
                    customer experiences. Every pharmacy, small or large, deserves
                    powerful digital tools.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Our Impact
              </h2>
            </SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <SectionReveal key={index} delay={index * 0.1}>
                  <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <stat.icon className="text-primary-600 text-4xl mx-auto mb-4" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Why Choose Mediyaam?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Industry Expertise",
                      desc: "With over 15 years of experience in pharmacy management software, we understand the industry inside and out.",
                    },
                    {
                      title: "Comprehensive Solutions",
                      desc: "From billing and inventory to POS and multi-branch management, everything you need is available in one intelligent platform.",
                    },
                    {
                      title: "Continuous Innovation",
                      desc: "We consistently update our platform based on customer insights and evolving industry standards.",
                    },
                    {
                      title: "Reliable 24/7 Support",
                      desc: "Our dedicated team is always available to assist you with any questions or technical needs.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
