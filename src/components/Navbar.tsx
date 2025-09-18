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
    <nav className="bg-secondary text-text-primary py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-black tracking-tight">
          AN
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 font-bold text-base">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative transition-colors duration-300 ${
                      isActive
                        ? 'text-accent' // Using global accent color
                        : 'text-text-secondary hover:text-accent' // Using global text-secondary and accent colors
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-1 bg-accent rounded" /> // Using global accent color
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