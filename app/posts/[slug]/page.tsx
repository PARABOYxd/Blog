import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import Sidebar from '@/components/layouts/Sidebar';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://your-blog-domain.com/posts/${post.slug}`,
      images: [
        {
          url: post.mainImageUrl || '',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.mainImageUrl || ''],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  const posts = await getAllPosts();

  if (!post) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <article className="col-span-2 prose dark:prose-invert max-w-none">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          {post.excerpt && (
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
          )}
          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
            <span>{post.date ? new Date(post.date).toLocaleDateString() : ''}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <Image
          src={post.mainImageUrl || ''}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full h-auto rounded-lg mb-8"
          priority
        />

        {/* PortableText with markdown rendering */}
        <PortableText
          value={post.body}
          components={{
            types: {
              block: ({ value }) => {
                // Get the raw text from the block's children
                const text = value.children?.map((child: any) => child.text).join('') || '';
                // Render as markdown
                return <ReactMarkdown>{text}</ReactMarkdown>;
              },
            },
            marks: {
              strong: ({ children }) => <strong>{children}</strong>,
              em: ({ children }) => <em>{children}</em>,
            },
            list: {
              bullet: ({ children }) => <ul>{children}</ul>,
              number: ({ children }) => <ol>{children}</ol>,
            },
            listItem: {
              bullet: ({ children }) => <li>{children}</li>,
              number: ({ children }) => <li>{children}</li>,
            },
          }}
        />

        {/* Optional: tags display if added to schema */}
      </article>

      <Sidebar posts={posts} />
    </div>
  );
}
