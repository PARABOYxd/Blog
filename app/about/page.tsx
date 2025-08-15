import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Smart Finance Blog',
  description:
    'Learn about Smart Finance Blog, our mission to simplify personal finance, and our team of experienced financial writers and analysts.',
  keywords: [
    'personal finance blog',
    'financial tips',
    'investing advice',
    'saving money',
    'budgeting help',
    'stock market insights',
  ],
  openGraph: {
    title: 'About Us | Smart Finance Blog',
    description:
      'Meet the team behind Smart Finance Blog — experts in investing, saving, and financial planning dedicated to helping you achieve financial freedom.',
    url: 'https://your-finance-blog.com/about',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1565372918675-3a04e54c05c5',
        width: 1200,
        height: 630,
        alt: 'About Smart Finance Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Smart Finance Blog',
    description:
      'The team behind Smart Finance Blog — helping you make smarter money decisions.',
    images: ['https://images.unsplash.com/photo-1565372918675-3a04e54c05c5'],
  },
};

export default function AboutPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {/* Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Smart Finance Blog",
            description:
              "Smart Finance Blog provides expert personal finance tips, investing strategies, and money management guides to help readers achieve financial freedom.",
            url: "https://your-finance-blog.com/about",
            publisher: {
              "@type": "Organization",
              name: "Smart Finance Blog",
              logo: {
                "@type": "ImageObject",
                url: "https://your-finance-blog.com/logo.png",
              },
            },
            mainEntity: {
              "@type": "Organization",
              name: "Smart Finance Blog",
              founder: {
                "@type": "Person",
                name: "Your Name",
              },
              foundingDate: "2025",
              sameAs: [
                "https://twitter.com/yourprofile",
                "https://linkedin.com/in/yourprofile",
              ],
            },
          }),
        }}
      />

      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="text-lg mb-6">
        Welcome to <strong>Smart Finance Blog</strong>, your trusted source for expert guidance on personal finance, investing, and money management.
        Our mission is to help readers like you make smarter financial decisions and achieve long-term wealth.
      </p>
      <p className="text-lg mb-6">
        Founded in 2025, we bring together experienced financial writers, analysts, and industry professionals who are passionate about making
        complex financial concepts simple and actionable.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg mb-6">
        We aim to provide reliable, research-backed finance content that empowers you to take control of your money — whether that means building
        an investment portfolio, saving for retirement, or simply managing your day-to-day budget more effectively.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
      <p className="text-lg mb-6">
        Our team includes chartered financial analysts, certified financial planners, and experienced writers with a deep understanding of
        markets and personal finance strategies. Together, we ensure that every article meets our high standards for accuracy and clarity.
      </p>

      <p className="text-lg">
        Thank you for visiting Smart Finance Blog. We hope our insights help you grow your wealth and make informed decisions about your money.
        For inquiries, collaborations, or feedback, reach out through our <a href="/contact">Contact Page</a>.
      </p>
    </div>
  );
}
