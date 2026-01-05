import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';

const CaseStudies = () => {
  const impactHighlights = [
    {
      label: 'Average billing time reduction',
      value: '37%',
      detail: 'Faster checkout experiences across retail counters',
    },
    {
      label: 'Inventory carrying cost savings',
      value: '28%',
      detail: 'Less capital locked in slow-moving or expired stock',
    },
    {
      label: 'Branches managed centrally',
      value: '120+',
      detail: 'Head offices monitor performance in real time',
    },
  ];

  const caseStudies = [
    {
      title: 'City Medical Store Increases Efficiency by 40%',
      client: 'City Medical Store, Pune',
      industry: 'Independent Retail Pharmacy',
      location: 'Pune, India',
      overview:
        'A busy neighborhood pharmacy was struggling with long queues, stock mismatch, and zero visibility into expiries. Mediyaam digitized every counter and consolidated real-time data for the owner.',
      challenges: [
        'Manual billing that averaged 12 minutes per customer',
        'Expiry write-offs every quarter due to lack of alerts',
        'No single view of purchase history or top-selling SKUs',
      ],
      solutions: [
        'Deployed Mediyaam Smart Billing and role-based POS access',
        'Configured expiry alerts and automated reorder points',
        'Introduced product-wise profitability dashboard',
      ],
      results: [
        { label: 'Billing time', value: '−40%' },
        { label: 'Expiry losses', value: '0 in last 6 months' },
        { label: 'Working capital freed', value: '₹4.5L' },
      ],
      productsUsed: ['Smart Billing', 'Inventory Control', 'Expiry Tracking'],
      quote:
        'We close the store 30 minutes earlier every day without losing sales. Mediyaam keeps my counters running like clockwork.',
      author: 'Amit Sharma, Owner',
    },
    {
      title: 'HealthCare Chain Manages 10 Branches Seamlessly',
      client: 'HealthCare Plus Pharmacy Group',
      industry: 'Multi-Branch Pharmacy Chain',
      location: 'Hyderabad, India',
      overview:
        'The group added five new stores in one year but had no centralized control. Mediyaam unified procurement, warehouse dispatch, and branch-level KPIs within a single dashboard.',
      challenges: [
        'Inconsistent pricing and discounting at each branch',
        'Manual spreadsheets for inter-branch transfers',
        'Delayed reporting that made compliance audits painful',
      ],
      solutions: [
        'Central purchase approvals with automated branch replenishment',
        'Live stock ledger for each location and warehouse',
        'Scheduled compliance and GST-ready reports mailed weekly',
      ],
      results: [
        { label: 'Reporting time', value: '−50%' },
        { label: 'Stock variance', value: '<1%' },
        { label: 'Admin hours saved', value: '60 hrs/month' },
      ],
      productsUsed: ['Multi-Branch Control', 'Central Procurement', 'Reports'],
      quote:
        'Branch managers finally operate with the same playbook. I can see sales, inventory, and expiries for every location on one screen.',
      author: 'Sonia Verma, COO',
    },
    {
      title: 'Hospital Pharmacy Cuts Insurance Claim Cycle',
      client: 'Green Valley Specialty Hospital',
      industry: 'Hospital Outpatient Pharmacy',
      location: 'Bengaluru, India',
      overview:
        'Insurance reimbursements were delayed because prescriptions, claims, and dispensing were managed in separate systems. Mediyaam integrated with the HIS and automated compliance checkpoints.',
      challenges: [
        'Claim packets required manual reconciliation before submission',
        'Regulatory audits flagged missing batch-level traceability',
        'High-value injectables frequently went out of stock',
      ],
      solutions: [
        'Two-way integration between HIS and Mediyaam dispensing',
        'Batch/lot capture at GRN and dispensing for audit-ready logs',
        'Demand forecasting tied to scheduled procedures',
      ],
      results: [
        { label: 'Claim cycle time', value: '−35%' },
        { label: 'Regulatory non-compliance', value: '0 findings' },
        { label: 'Stockouts of injectables', value: '−70%' },
      ],
      productsUsed: ['HIS Integration', 'Advanced Inventory', 'Compliance Kit'],
      quote:
        'Audits are now a non-event. Our pharmacy team focuses on patient care instead of filling spreadsheets.',
      author: 'Dr. Kabir Malhotra, Pharmacy Director',
    },
    {
      title: 'Wholesale Distributor Gains 360° Visibility',
      client: 'MedSupply Distributors',
      industry: 'Regional Pharma Distributor',
      location: 'Ahmedabad, India',
      overview:
        'MedSupply services 1,200 retailers but lacked insights into receivables and route performance. Mediyaam connected warehouse, field sales, and finance workflows.',
      challenges: [
        'Vehicles left with 20% unused capacity because demand was estimated manually',
        'Receivables ageing crossed 75 days on key accounts',
        'Promotions were launched without measuring sell-through',
      ],
      solutions: [
        'Route optimization with demand snapshots for every beat',
        'Automated credit limits, dunning reminders, and e-invoicing',
        'Sell-through analytics combining POS pull data from retailers',
      ],
      results: [
        { label: 'Dispatch utilization', value: '↑ to 94%' },
        { label: 'DSO (days sales outstanding)', value: '−22 days' },
        { label: 'Promo ROI visibility', value: 'Real-time' },
      ],
      productsUsed: ['Distributor Suite', 'Receivables Automation', 'Analytics'],
      quote:
        'We finally have conviction before loading a truck. Cash flow improved within the very first quarter.',
      author: 'Nisha Patel, Managing Partner',
    },
  ];

  return (
    <>
      <Seo
        title="Case Studies — Pharmacy Success Stories"
        description="Read success stories from pharmacies using Mediyaam ERP. Learn how our pharmacy management software helps businesses grow and succeed."
        keywords={[
          'pharmacy case studies',
          'pharmacy success stories',
          'medical store case study',
        ]}
        url="https://pharmacysoftwareindia.com/case-studies"
        canonical="https://pharmacysoftwareindia.com/case-studies"
        type="website"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                See how pharmacies are transforming their operations with
                Mediyaam.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="grid gap-6 md:grid-cols-3">
              {impactHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <p className="text-sm uppercase tracking-wide text-primary-500 font-semibold mb-2">
                    {item.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mb-2">
                    {item.value}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <SectionReveal>
              <p className="text-lg text-gray-600 leading-relaxed">
                From single-store pharmacies to multi-branch chains, Mediyaam
                provides a repeatable playbook: understand the bottleneck, map
                the right workflows, and configure automation that teams will
                actually use. Explore the detailed journeys below.
              </p>
            </SectionReveal>
          </div>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <SectionReveal key={index} delay={index * 0.2}>
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 space-y-8">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-primary-500 uppercase tracking-wide">
                      {study.industry}
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {study.title}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {study.client} • {study.location}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {study.overview}
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          Challenges
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          {study.challenges.map((challenge, idx) => (
                            <li key={idx}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          Mediyaam Approach
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          {study.solutions.map((solution, idx) => (
                            <li key={idx}>{solution}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          Measurable outcomes
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {study.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                            >
                              <p className="text-sm text-gray-500">
                                {result.label}
                              </p>
                              <p className="text-2xl font-bold text-gray-900">
                                {result.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          Products used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.productsUsed.map((product, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded-full"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
                    <p className="text-lg text-primary-900 italic mb-2">
                      “{study.quote}”
                    </p>
                    <p className="text-sm font-semibold text-primary-600">
                      {study.author}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;

