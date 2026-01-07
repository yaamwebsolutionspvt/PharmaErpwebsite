import BlogPost from "../../../pages/BlogPost";

// Generate static params for all blog posts
export async function generateStaticParams() {
    return [
        { slug: 'pharmacy-inventory-management-tips' },
        { slug: 'gst-compliance-guide-for-pharmacies' },
        { slug: 'how-to-choose-the-right-pharmacy-pos-system' },
    ];
}

export default function Page({ params }) {
    return <BlogPost slug={params.slug} />;
}
