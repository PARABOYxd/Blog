import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Smart Finance Blog',
  description:
    'Get in touch with Smart Finance Blog for personal finance questions, collaboration opportunities, or media inquiries.',
  keywords: [
    'finance contact',
    'personal finance help',
    'investing questions',
    'financial advice inquiry',
    'budgeting help contact',
  ],
  openGraph: {
    title: 'Contact Us | Smart Finance Blog',
    description:
      'Reach out to Smart Finance Blog — our finance experts are here to answer your money, investing, and budgeting questions.',
    url: 'https://your-finance-blog.com/contact',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1565372918675-3a04e54c05c5',
        width: 1200,
        height: 630,
        alt: 'Contact Smart Finance Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Smart Finance Blog',
    description:
      'Contact Smart Finance Blog for expert personal finance guidance and collaboration opportunities.',
    images: ['https://images.unsplash.com/photo-1565372918675-3a04e54c05c5'],
  },
};

export default function ContactPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {/* Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Smart Finance Blog",
            description:
              "Get in touch with Smart Finance Blog for personal finance questions, collaboration opportunities, or media inquiries.",
            url: "https://your-finance-blog.com/contact",
            publisher: {
              "@type": "Organization",
              name: "Smart Finance Blog",
              logo: {
                "@type": "ImageObject",
                url: "https://your-finance-blog.com/logo.png",
              },
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "support@your-finance-blog.com",
              availableLanguage: ["English"],
            },
          }),
        }}
      />

      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg mb-6">
        We’d love to hear from you! Whether you have questions about{" "}
        <strong>investing</strong>, need help with <strong>budgeting</strong>,
        or are interested in a <strong>finance content collaboration</strong>, our team is here to help.
      </p>

      <form className="space-y-6 max-w-lg">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
            rows={5}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
        <p className="text-lg mb-4">
          Follow us on social media for the latest <strong>money tips</strong>,
          <strong> market updates</strong>, and <strong>finance guides</strong>:
        </p>
        <div className="flex space-x-4">
          <a href="https://twitter.com" className="text-primary-light hover:text-primary">
            Twitter
          </a>
          <a href="https://linkedin.com" className="text-primary-light hover:text-primary">
            LinkedIn
          </a>
          <a href="https://github.com" className="text-primary-light hover:text-primary">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
