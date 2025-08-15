"use client";
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set('search', searchTerm);
      params.set('page', '1');
    } else {
      params.delete('search');
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-lg mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search posts by title or tags..."
        className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-light"
      />
      <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <Search size={20} className="text-gray-500 dark:text-gray-400" />
      </button>
    </form>
  );
}
