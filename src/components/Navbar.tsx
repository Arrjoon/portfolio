'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Ideas', href: '/ideas' },
  { name: 'Development', href: '/development' },
  { name: 'Blog', href: '/Blogs' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
      }}
      className="border-b border-gray-300 dark:border-gray-700 py-4 sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          AN
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 font-semibold text-sm">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative transition-colors duration-300 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
