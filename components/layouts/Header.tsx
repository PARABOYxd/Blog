"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Smart Finance Blog
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            aria-label="Toggle theme"
          >
            {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-primary"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-primary"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
