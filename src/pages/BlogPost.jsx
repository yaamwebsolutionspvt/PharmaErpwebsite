import { useParams } from 'next/navigation';
import Seo from '../seo/Seo';
import SectionReveal from '../components/SectionReveal';

const BlogPost = () => {
    const params = useParams();
    const slug = params?.slug;

    // Function to fetch post data based on slug (simulating API call)
    const getPostData = (slug) => {
        switch (slug) {
            case 'pharmacy-inventory-management-tips':
                return {
                    title: '10 Essential Tips for Pharmacy Inventory Management',
                    content: `
            <p>Managing pharmacy inventory efficiently is crucial for profitability and customer satisfaction. Here are 10 essential tips to help you optimize your inventory management.</p>
            <h2>1. Implement Real-Time Tracking</h2>
            <p>Use pharmacy inventory management software that provides real-time stock updates. This helps you know exactly what's in stock at any moment.</p>
            <h2>2. Set Expiry Alerts</h2>
            <p>Configure automatic alerts for products nearing expiry to minimize losses and ensure product quality.</p>
            <h2>3. Optimize Reorder Points</h2>
            <p>Set minimum stock levels based on sales history to ensure you never run out of fast-moving items.</p>
            <h2>4. Track Fast-Moving Items</h2>
            <p>Identify and prioritize high-demand products to maintain adequate stock levels.</p>
            <h2>5. Regular Stock Audits</h2>
            <p>Conduct regular physical stock audits to identify discrepancies and maintain accuracy.</p>
            <h2>6. FIFO/FEFO Method</h2>
            <p>Employ First-In, First-Out (FIFO) or First-Expiry, First-Out (FEFO) methods to ensure older stock or items nearing expiry are sold first, reducing waste.</p>
            <h2>7. Demand Forecasting</h2>
            <p>Utilize historical sales data and market trends to accurately predict future demand and adjust stock levels accordingly.</p>
            <h2>8. Regular Audits</h2>
            <p>Perform frequent and thorough inventory audits to reconcile physical stock with system records, catching discrepancies early.</p>
            <h2>9. Automation</h2>
            <p>Implement automated systems for tasks like ordering, receiving, and tracking to minimize manual errors and improve efficiency.</p>
            <h2>10. Data Analytics</h2>
            <p>Leverage data analytics to gain insights into sales patterns, product performance, and inventory turnover rates for informed decision-making.</p>
          `,
                    author: 'Mediyaam Team',
                    publishedTime: '2025-01-15T08:00:00Z',
                    modifiedTime: '2025-01-15T08:00:00Z',
                    image: '/inventory-tips.webp',
                    description: 'Learn essential tips for managing pharmacy inventory efficiently, reducing expiry losses, and optimizing stock levels for better profitability.',
                    keywords: [
                        'pharmacy inventory management',
                        'drug stock tracking',
                        'pharmacy inventory tips',
                        'reduce expiry losses',
                        'optimize stock levels',
                    ],
                };
            case 'gst-compliance-guide-for-pharmacies':
                return {
                    title: 'GST Compliance Guide for Pharmacies',
                    content: `
            <p>Navigating GST compliance is crucial for medical stores. This comprehensive guide covers filing requirements, HSN codes, and tax calculations to ensure your pharmacy stays compliant.</p>
            <h2>1. Understanding GST for Pharmacies</h2>
            <p>Gain a clear understanding of how the Goods and Services Tax (GST) applies to pharmaceutical products and services.</p>
            <h2>2. HSN Codes for Medicines</h2>
            <p>Learn about the Harmonized System of Nomenclature (HSN) codes specific to various medicines and medical supplies for correct classification.</p>
            <h2>3. GST Rates on Pharmaceutical Products</h2>
            <p>Familiarize yourself with the applicable GST rates for different categories of pharmaceutical items, including common drugs and essential medicines.</p>
            <h2>4. Invoicing and Billing Requirements</h2>
            <p>Understand the mandatory details and format for GST-compliant invoices and bills issued by pharmacies.</p>
            <h2>5. GST Return Filing</h2>
            <p>Get a step-by-step guide on how to file various GST returns (GSTR-1, GSTR-3B, etc.) accurately and on time.</p>
            <h2>6. Input Tax Credit (ITC)</h2>
            <p>Learn how to claim Input Tax Credit on purchases to reduce your overall tax liability, maximizing profitability.</p>
            <h2>7. Record Keeping</h2>
            <p>Understand the essential documents and records that need to be maintained for GST compliance and audit purposes.</p>
            <h2>8. E-Way Bills</h2>
            <p>Know when and how to generate E-Way Bills for the movement of goods, particularly for bulk pharmaceutical supplies.</p>
            <h2>9. Common Mistakes to Avoid</h2>
            <p>Identify and avoid common errors in GST compliance that can lead to penalties or legal issues for your pharmacy.</p>
            <h2>10. Updates and Amendments</h2>
            <p>Stay informed about the latest amendments and notifications issued by the GST council relevant to the pharmaceutical sector.</p>
          `,
                    author: 'Mediyaam Team',
                    publishedTime: '2025-02-01T10:00:00Z',
                    modifiedTime: '2025-02-01T10:00:00Z',
                    image: '/gst-guide.webp',
                    description: 'Complete guide to GST compliance for medical stores, including filing requirements, HSN codes, and tax calculations.',
                    keywords: [
                        'GST compliance pharmacy',
                        'medical store GST',
                        'pharmacy HSN codes',
                        'GST filing requirements medical store',
                        'pharmacy tax calculations',
                    ],
                };
            case 'how-to-choose-the-right-pharmacy-pos-system':
                return {
                    title: 'How to Choose the Right Pharmacy POS System',
                    content: `
            <p>Selecting the ideal Point-of-Sale (POS) system for your pharmacy is crucial for smooth operations. Here are key factors to consider when making your choice.</p>
            <h2>1. Essential Features for Pharmacies</h2>
            <p>Look for features like prescription management, inventory tracking, patient profiles, and integrated billing tailored for pharmacies.</p>
            <h2>2. Ease of Use and User Interface</h2>
            <p>Choose a system with an intuitive interface that your staff can quickly learn and operate efficiently, minimizing training time.</p>
            <h2>3. Integration Capabilities</h2>
            <p>Ensure the POS system can integrate seamlessly with other software you use, such as accounting, inventory, and prescription dispensing systems.</p>
            <h2>4. Pricing and Cost-Effectiveness</h2>
            <p>Evaluate the total cost of ownership, including initial setup, monthly fees, and potential hidden charges, to ensure it fits your budget.</p>
            <h2>5. Customer Support and Training</h2>
            <p>Opt for a vendor that provides excellent customer support, comprehensive training, and readily available technical assistance.</p>
            <h2>6. Scalability</h2>
            <p>Select a POS system that can grow with your pharmacy, accommodating increased transaction volumes, additional locations, or new services.</p>
            <h2>7. Security Features</h2>
            <p>Prioritize systems with robust security measures to protect sensitive patient data and financial information, ensuring compliance with privacy regulations.</p>
            <h2>8. Reporting and Analytics</h2>
            <p>Look for comprehensive reporting capabilities that provide insights into sales trends, inventory performance, and customer behavior to aid business decisions.</p>
            <h2>9. Hardware Compatibility</h2>
            <p>Ensure the POS software is compatible with your existing hardware (scanners, printers, cash drawers) or that the vendor offers suitable hardware solutions.</p>
            <h2>10. Vendor Reputation and Reviews</h2>
            <p>Research the vendor's reputation, read customer reviews, and ask for references to ensure reliability and satisfaction from other pharmacy owners.</p>
          `,
                    author: 'Mediyaam Team',
                    publishedTime: '2025-03-01T12:00:00Z',
                    modifiedTime: '2025-03-01T12:00:00Z',
                    image: '/pos-selection.webp',
                    description: 'Key factors to consider when selecting a point-of-sale system for your pharmacy, including features, pricing, and support.',
                    keywords: [
                        'pharmacy POS system',
                        'choose pharmacy software',
                        'best POS for medical store',
                        'pharmacy POS features',
                        'pharmacy POS pricing',
                    ],
                };
            default:
                return {
                    title: 'Blog Post Not Found',
                    content: '<p>The requested blog post could not be found.</p>',
                    author: 'Mediyaam Team',
                    publishedTime: new Date().toISOString(),
                    modifiedTime: new Date().toISOString(),
                    image: '',
                    description: 'This blog post could not be found.',
                    keywords: [],
                };
        }
    };

    const post = getPostData(slug);

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        image: post.image,
        author: {
            '@type': 'Organization',
            name: post.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Mediyaam',
        },
        datePublished: post.publishedTime,
        dateModified: post.modifiedTime,
    };

    return (
        <>
            <Seo
                title={`${post.title} — Mediyaam Blog`}
                description={post.description}
                keywords={post.keywords}
                url={`https://pharmacysoftwareindia.com/blog/${slug}`}
                canonical={`https://pharmacysoftwareindia.com/blog/${slug}`}
                type="article"
                publishedTime={post.publishedTime}
                modifiedTime={post.modifiedTime}
                author={post.author}
                image={post.image}
                schema={schema}
            />
            <article className="py-12 md:py-20 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6 md:p-10">
                        <SectionReveal>
                            <header className="pb-6 border-b border-gray-200 mb-8">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                    {post.title}
                                </h1>
                                <div className="text-sm text-gray-500 mt-3 flex items-center space-x-4">
                                    <span className="font-medium text-gray-700">By {post.author}</span>
                                    <span className="text-xl">•</span>
                                    <time dateTime={post.publishedTime}>
                                        Published on {new Date(post.publishedTime).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </time>
                                </div>
                            </header>
                            {post.image && (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-[72vh] rounded-lg shadow-md mb-10 object-cover"
                                />
                            )}
                            <div
                                className="prose prose-lg prose-indigo max-w-none text-gray-800"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </SectionReveal>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;