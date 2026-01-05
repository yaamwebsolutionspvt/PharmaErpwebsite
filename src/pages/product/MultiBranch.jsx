import Seo from '../../seo/Seo';
import SectionReveal from '../../components/SectionReveal';
import FeatureCard from '../../components/FeatureCard';
import CTA from '../../components/CTA';
import {
  FaNetworkWired,
  FaSync,
  FaChartBar,
  FaShieldAlt,
  FaUsers,
  FaMobileAlt,
} from 'react-icons/fa';

const MultiBranch = () => {
  const features = [
    {
      icon: FaNetworkWired,
      title: 'Centralized Management',
      description:
        'Manage all pharmacy branches from a single dashboard with real-time visibility.',
    },
    {
      icon: FaSync,
      title: 'Real-Time Sync',
      description:
        'Automatic synchronization of data across all branches for up-to-date information.',
    },
    {
      icon: FaChartBar,
      title: 'Branch Analytics',
      description:
        'Compare performance across branches with detailed analytics and reports.',
    },
    {
      icon: FaShieldAlt,
      title: 'Role-Based Access',
      description:
        'Control access to branch data with role-based permissions and security.',
    },
    {
      icon: FaUsers,
      title: 'Staff Management',
      description:
        'Manage staff across all branches, assign roles, and track performance.',
    },
    {
      icon: FaMobileAlt,
      title: 'Cloud-Based',
      description:
        'Access your multi-branch system from anywhere with cloud-based architecture.',
    },
  ];

  return (
    <>
      <Seo
        title="Multi-Branch Management — Pharmacy Chain Software"
        description="Manage multiple pharmacy branches efficiently with centralized control, real-time sync, and comprehensive analytics. Perfect for pharmacy chains and franchises."
        keywords={[
          'multi-branch pharmacy software',
          'pharmacy chain management',
          'cloud pharmacy software',
          'pharmacy franchise software',
        ]}
        url="pharmacysoftwareindia.com/product/multi-branch"
        canonical="pharmacysoftwareindia.com/product/multi-branch"
        type="website"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Multi-Branch Management
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Manage multiple pharmacy locations seamlessly with centralized
                control, real-time sync, and comprehensive branch analytics.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Multi-Branch Features
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Scale Your Pharmacy Business"
        description="Manage multiple branches efficiently with our multi-branch system."
        primaryCTA={{ path: '/contact', label: 'Get Started' }}
        secondaryCTA={{ path: '/pricing', label: 'View Plans' }}
      />
    </>
  );
};

export default MultiBranch;

