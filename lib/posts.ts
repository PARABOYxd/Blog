import { createClient } from '@sanity/client';
import type { PortableTextBlock } from '@portabletext/types';

const client = createClient({
  projectId: '3j94hd6b',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

export default client;


export interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  mainImageUrl?: string;
  date?: string;
  body: PortableTextBlock[];
  readTime: number;
}


export async function getAllPosts(): Promise<Post[]> {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    "mainImageUrl": mainImage.asset->url,
    date,
    body
  }`;
  console.log('Sanity API: getAllPosts called');
  const posts = await client.fetch(query);
  return posts.map((post: any) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    mainImageUrl: post.mainImageUrl,
    date: post.date,
    body: post.body,
    readTime: Math.ceil((String(post.body || '').split(' ').length) / 200),
  }));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    "mainImageUrl": mainImage.asset->url,
    date,
    body
  }`;
  console.log('Sanity API: getPostBySlug called with slug:', slug);
  const post = await client.fetch(query, { slug });
  if (!post) return null;
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    mainImageUrl: post.mainImageUrl,
    date: post.date,
    body: post.body,
    readTime: Math.ceil((String(post.body || '').split(' ').length) / 200),
  };
}

export async function getCategories(): Promise<string[]> {
  const query = `*[_type == "post"]{category}`;
  const posts = await client.fetch(query);
  const categories = new Set(posts.map((post: any) => post.category));
  return Array.from(categories) as string[];
}

export async function getTags(): Promise<string[]> {
  const query = `*[_type == "post"]{tags}`;
  const posts = await client.fetch(query);
  const tags = new Set(posts.flatMap((post: any) => post.tags || []));
  return Array.from(tags) as string[];
}