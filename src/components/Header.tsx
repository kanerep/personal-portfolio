'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          kanerep<span className="text-emerald-500">.</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative py-1 font-medium ${
                  pathname === item.path
                    ? 'text-foreground'
                    : 'text-foreground/60 hover:text-foreground'
                } transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-emerald-500 after:transition-all ${
                  pathname === item.path ? 'after:w-full' : 'hover:after:w-full'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          <div className="block md:hidden">
            <MobileMenu items={navItems} currentPath={pathname} />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileMenu({
  items,
  currentPath,
}: {
  items: { label: string; path: string }[]
  currentPath: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300"
        >
          {isOpen ? (
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 left-0 p-4 mt-2 bg-background/95 backdrop-blur-lg shadow-lg border border-foreground/10 rounded-b-lg animate-in fade-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-4 rounded-md transition-colors ${
                  currentPath === item.path
                    ? 'bg-foreground/10 text-foreground'
                    : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
