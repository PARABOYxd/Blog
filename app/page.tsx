import BlogList from '../components/layouts/BlogList';
import { getAllPosts } from '../lib/posts';

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <div>
      <BlogList posts={posts} totalPages={1} currentPage={1} />
    </div>
  );
}
