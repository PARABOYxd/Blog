import Link from 'next/link';
import { getCategories, Post } from '@/lib/posts';
import AdSenseAd from '@/components/ui/AdSenseAd';

interface SidebarProps {
  posts: Post[];
}

function LatestPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Latest Posts</h3>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CategoriesList({ categories }: { categories: string[] }) {
  return (
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
  );
}

export default async function Sidebar({ posts }: SidebarProps) {
  const categories = await getCategories();
  const latestPosts = posts.slice(0, 5);
  return (
    <aside className="space-y-8">
      <LatestPosts posts={latestPosts} />
      <CategoriesList categories={categories} />
      <AdSenseAd />
    </aside>
  );
}