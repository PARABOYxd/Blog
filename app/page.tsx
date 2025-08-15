import { getAllPosts, getCategories, getTags } from '@/lib/posts';
import BlogList from '@/components/layouts/BlogList';
import SearchBar from '@/components/ui/SearchBar';
import FilterBar from '@/components/ui/FilterBar';

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string; search?: string; category?: string; tag?: string };
}) {
  const page = parseInt(searchParams.page || '1', 10);
  const search = searchParams.search || '';
  const category = searchParams.category || '';
  const tag = searchParams.tag || '';

  const posts = await getAllPosts();
  const categories = await getCategories();
  const tags = await getTags();

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category ? post.category === category : true;
    const matchesTag = tag ? post.tags.includes(tag) : true;
    return matchesSearch && matchesCategory && matchesTag;
  });

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  return (
    <div className="space-y-8">
      <SearchBar />
      <FilterBar categories={categories} tags={tags} />
      <BlogList posts={paginatedPosts} totalPages={totalPages} currentPage={page} />
    </div>
  );
}