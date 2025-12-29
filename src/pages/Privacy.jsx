import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';

const Privacy = () => {
  return (
    <>
      <Seo
        title="Privacy Policy — Mediyaam"
        description="Read Mediyaam's privacy policy to understand how we collect, use, and protect your healthcare data with industry-leading security standards."
        keywords={['privacy policy', 'data protection', 'HIPAA compliance', 'healthcare data security']}
        url="https://mediyaam.example.com/privacy"
        canonical="https://mediyaam.example.com/privacy"
        type="website"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-gray-600">Last updated: December 29, 2025</p>
              <p className="text-sm text-gray-500 mt-2">Effective Date: January 1, 2025</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <SectionReveal>
              <h2>Our Commitment to Your Privacy</h2>
              <p>
                At Mediyaam, we understand that your pharmacy handles sensitive patient information daily.
                Your trust is paramount, and we're committed to protecting the privacy and security of all
                data processed through our platform. This Privacy Policy explains how we collect, use, store,
                and safeguard your information when you use our Pharmacy ERP software.
              </p>

              <h2>1. Information We Collect</h2>

              <h3>1.1 Information You Provide to Us</h3>
              <p><strong>Account Information:</strong> When you register for Mediyaam, we collect your pharmacy name,
                business address, contact details, license numbers, and authorized user information including names,
                email addresses, and phone numbers.</p>

              <p><strong>Patient Data:</strong> Our system processes patient information necessary for pharmacy operations,
                including names, contact details, prescription information, medication histories, insurance details,
                and health-related data. We act as a data processor on your behalf and never claim ownership of this data.</p>

              <p><strong>Transaction Data:</strong> We collect information about purchases, inventory management,
                supplier interactions, billing records, and payment processing details to facilitate your pharmacy operations.</p>

              <p><strong>Support Communications:</strong> When you contact our support team, we maintain records of
                your inquiries, feedback, and our responses to provide better service and improve our platform.</p>

              <h3>1.2 Information Collected Automatically</h3>
              <p><strong>Usage Data:</strong> We automatically collect information about how you interact with Mediyaam,
                including features used, time spent on different modules, search queries, and system performance metrics.</p>

              <p><strong>Device Information:</strong> We collect device identifiers, browser types, operating systems,
                IP addresses, and network information to ensure compatibility and security.</p>

              <p><strong>Cookies and Tracking:</strong> We use essential cookies for authentication and session management.
                Analytics cookies help us understand usage patterns to improve our service. You can control cookie preferences
                through your browser settings.</p>

              <h2>2. How We Use Your Information</h2>

              <h3>2.1 Service Delivery</h3>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and maintain the Mediyaam ERP platform</li>
                <li>Process prescriptions, manage inventory, and facilitate billing</li>
                <li>Generate reports and analytics for your pharmacy operations</li>
                <li>Ensure regulatory compliance and maintain audit trails</li>
                <li>Facilitate integrations with insurance providers, suppliers, and healthcare systems</li>
              </ul>

              <h3>2.2 Communication</h3>
              <p>We may contact you to:</p>
              <ul>
                <li>Send important service updates, security alerts, and system notifications</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Share product updates, new features, and educational content (you can opt-out anytime)</li>
                <li>Conduct user surveys to improve our services</li>
              </ul>

              <h3>2.3 Platform Improvement</h3>
              <p>We analyze aggregated, de-identified data to:</p>
              <ul>
                <li>Enhance platform performance and user experience</li>
                <li>Develop new features based on user needs</li>
                <li>Identify and fix technical issues</li>
                <li>Conduct research to improve pharmacy workflow efficiency</li>
              </ul>

              <h2>3. Data Security & Compliance</h2>

              <h3>3.1 Security Measures</h3>
              <p>We implement industry-leading security practices:</p>
              <ul>
                <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                <li><strong>Access Controls:</strong> Role-based access controls ensure users only see data relevant to their responsibilities</li>
                <li><strong>Authentication:</strong> Multi-factor authentication (MFA) available for all user accounts</li>
                <li><strong>Infrastructure:</strong> Data hosted on secure, SOC 2 Type II certified cloud infrastructure</li>
                <li><strong>Monitoring:</strong> 24/7 security monitoring and intrusion detection systems</li>
                <li><strong>Backups:</strong> Automated daily backups with point-in-time recovery capabilities</li>
              </ul>

              <h3>3.2 HIPAA Compliance</h3>
              <p>Mediyaam is designed to support HIPAA compliance for covered entities. We:</p>
              <ul>
                <li>Sign Business Associate Agreements (BAAs) with healthcare providers</li>
                <li>Implement administrative, physical, and technical safeguards required by HIPAA</li>
                <li>Maintain detailed audit logs of all system access and data modifications</li>
                <li>Conduct regular security risk assessments and vulnerability testing</li>
                <li>Train our staff on HIPAA privacy and security requirements</li>
              </ul>

              <h3>3.3 Data Retention</h3>
              <p>We retain your data as follows:</p>
              <ul>
                <li><strong>Active Accounts:</strong> Data retained for the duration of your subscription</li>
                <li><strong>Regulatory Requirements:</strong> Prescription and transaction records maintained per local pharmacy regulations (typically 3-7 years)</li>
                <li><strong>Account Deletion:</strong> Upon request, we delete your data within 30 days, except where legal retention is required</li>
                <li><strong>Backups:</strong> Deleted data may persist in encrypted backups for up to 90 days before permanent deletion</li>
              </ul>

              <h2>4. Data Sharing & Disclosure</h2>

              <h3>4.1 We Never Sell Your Data</h3>
              <p>We do not and will never sell, rent, or trade your personal information or patient data to third parties for marketing purposes.</p>

              <h3>4.2 Service Providers</h3>
              <p>We share data with trusted service providers who help us operate our platform:</p>
              <ul>
                <li><strong>Cloud Hosting:</strong> Secure data storage and infrastructure management</li>
                <li><strong>Payment Processors:</strong> Secure payment processing for subscriptions</li>
                <li><strong>Analytics Services:</strong> Aggregated, de-identified usage analytics</li>
                <li><strong>Customer Support Tools:</strong> To provide efficient technical support</li>
              </ul>
              <p>All service providers are contractually bound to protect your data and use it only for specified purposes.</p>

              <h3>4.3 Healthcare Integrations</h3>
              <p>With your explicit authorization, we may share data with:</p>
              <ul>
                <li>Insurance companies for claims processing and verification</li>
                <li>Healthcare providers for prescription verification and patient care coordination</li>
                <li>Pharmaceutical suppliers for inventory management</li>
                <li>Regulatory bodies for compliance reporting</li>
              </ul>

              <h3>4.4 Legal Requirements</h3>
              <p>We may disclose information when required by law, such as:</p>
              <ul>
                <li>Responding to valid legal processes (subpoenas, court orders)</li>
                <li>Protecting our rights, property, or safety, or that of our users</li>
                <li>Investigating fraud or security incidents</li>
                <li>Complying with regulatory audits and investigations</li>
              </ul>

              <h2>5. Your Rights & Choices</h2>

              <h3>5.1 Access & Portability</h3>
              <p>You have the right to:</p>
              <ul>
                <li>Access all data stored in your Mediyaam account</li>
                <li>Export your data in standard formats (CSV, JSON, PDF)</li>
                <li>Request a copy of your data for migration purposes</li>
              </ul>

              <h3>5.2 Correction & Deletion</h3>
              <p>You can:</p>
              <ul>
                <li>Update or correct inaccurate information directly in the platform</li>
                <li>Request deletion of your account and associated data</li>
                <li>Modify user permissions and access controls</li>
              </ul>

              <h3>5.3 Communication Preferences</h3>
              <p>You control your communication preferences:</p>
              <ul>
                <li>Opt-out of marketing emails while still receiving critical service notifications</li>
                <li>Customize notification settings within your account</li>
                <li>Unsubscribe links included in all marketing communications</li>
              </ul>

              <h3>5.4 Data Processing Objections</h3>
              <p>You may object to certain data processing activities. Contact us at privacy@mediyaam.com to discuss your concerns.</p>

              <h2>6. International Data Transfers</h2>
              <p>If you're located outside our primary operating region, your data may be transferred to and processed in
                countries where our servers are located. We ensure appropriate safeguards are in place through:</p>
              <ul>
                <li>Standard Contractual Clauses approved by relevant authorities</li>
                <li>Compliance with applicable data protection frameworks</li>
                <li>Equivalent security measures regardless of data location</li>
              </ul>

              <h2>7. Children's Privacy</h2>
              <p>Mediyaam is designed for use by licensed pharmacies and healthcare professionals. Our platform is not
                intended for individuals under 18 years of age. While pharmacies may process prescriptions for minors,
                we do not knowingly collect personal information directly from children.</p>

              <h2>8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
                We will:</p>
              <ul>
                <li>Notify you of material changes via email and in-app notifications</li>
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Provide a 30-day notice period before significant changes take effect</li>
                <li>Maintain an archive of previous policy versions upon request</li>
              </ul>

              <h2>9. Contact Us</h2>
              <p>We're here to address your privacy concerns and questions:</p>
              <p>
                <strong>Email:</strong> privacy@mediyaam.com<br />
                <strong>Data Protection Officer:</strong> dpo@mediyaam.com<br />
                <strong>Support:</strong> support@mediyaam.com<br />
                <strong>Phone:</strong> Available through your account dashboard<br />
                <strong>Response Time:</strong> We aim to respond to all privacy inquiries within 48 hours
              </p>

              <h2>10. Additional Resources</h2>
              <p>For more information about data protection and your rights:</p>
              <ul>
                <li><strong>Security Practices:</strong> Visit our Security Center for detailed technical documentation</li>
                <li><strong>HIPAA Information:</strong> Review our HIPAA Compliance Guide</li>
                <li><strong>Data Processing Agreement:</strong> Available for enterprise customers</li>
                <li><strong>Incident Response:</strong> Our security incident response procedures are documented in your admin portal</li>
              </ul>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>Your Trust Matters:</strong> At Mediyaam, we believe privacy is a fundamental right.
                  We're committed to transparency, security, and giving you control over your data. If you have
                  any questions or concerns about how we handle your information, please don't hesitate to reach out.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;

