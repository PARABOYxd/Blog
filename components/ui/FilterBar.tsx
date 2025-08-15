'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  categories: string[];
  tags: string[];
}

export default function FilterBar({ categories, tags }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || '';
  const currentTag = searchParams.get('tag') || '';

  const handleFilter = (type: 'category' | 'tag', value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(type, value);
      params.set('page', '1');
    } else {
      params.delete(type);
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleFilter('category', '')}
            className={cn(
              'px-3 py-1 rounded-full text-sm',
              !currentCategory ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white'
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter('category', category)}
              className={cn(
                'px-3 py-1 rounded-full text-sm',
                currentCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white'
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleFilter('tag', '')}
            className={cn(
              'px-3 py-1 rounded-full text-sm',
              !currentTag ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white'
            )}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleFilter('tag', tag)}
              className={cn(
                'px-3 py-1 rounded-full text-sm',
                currentTag === tag
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white'
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}