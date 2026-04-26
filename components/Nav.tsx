'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/spotlight', label: 'Spotlight' },
  { href: '/play', label: 'Play' },
  { href: '/results', label: 'Results' },
  { href: '/choose', label: 'Choose' },
  { href: '/past-weeks', label: 'Past Weeks' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-violet-950 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-semibold text-amber-400 tracking-tight">
          Giving Game
        </Link>

        <nav className="hidden md:flex gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                pathname === href
                  ? 'text-amber-400'
                  : 'text-violet-300 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-md text-violet-300 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-violet-800 bg-violet-950">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm font-medium border-b border-violet-900 transition-colors ${
                pathname === href
                  ? 'text-amber-400'
                  : 'text-violet-300 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
