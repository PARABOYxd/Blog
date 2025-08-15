import Link from 'next/link';
import { getCategories, Post } from '@/lib/posts';

interface SidebarProps {
  posts: Post[];
}

export default async function Sidebar({ posts }: SidebarProps) {
  const categories = await getCategories();
  const latestPosts = posts.slice(0, 5);

  return (
    <aside className="space-y-8">
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Latest Posts</h3>
        <ul className="space-y-4">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="text-gray-600 dark:text-gray-300 hover:text-primary"
              >
                {post.title}
              </Link>
              {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString()}
              </p> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/?category=${category}`}
                className="text-gray-600 dark:text-gray-300 hover:text-primary"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Advertisement</h3>
        <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center">
          {/* Google AdSense Ad */}
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '100%' }}
            data-ad-client="ca-pub-8722576979132394"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `(adsbygoogle = window.adsbygoogle || []).push({});`
          }}
        />
      </div>
    </aside>
  );
}