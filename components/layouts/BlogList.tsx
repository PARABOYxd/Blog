import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/posts';
import { cn } from '@/lib/utils';

interface BlogListProps {
  posts: Post[];
  totalPages: number;
  currentPage: number;
}

export default function BlogList({ posts, totalPages, currentPage }: BlogListProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="card">
            <Image
              src={post.mainImageUrl || ''}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/posts/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm">
                {/* <span>{post.author}</span> */}
                {/* <span>{new Date(post.date).toLocaleDateString()}</span> */}
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={`/?page=${page}`}
            className={cn(
              'px-4 py-2 rounded-md',
              page === currentPage
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white'
            )}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
}