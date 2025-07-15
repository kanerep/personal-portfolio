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
    // { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    // { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="w-full flex justify-center">
      <div
        className={`fixed max-w-5xl top-0 w-full z-50 flex border border-foreground/0 justify-between items-center px-6 md:px-10 transition-all duration-300 py-4  ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg border border-foreground/10 shadow-sm mt-2 rounded-3xl'
            : ''
        }`}
      >
        <div className="mx-auto flex justify-between items-center w-full">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            kanerep<span className="text-emerald-500">.</span>
          </Link>

          <div className="flex items-center gap-12">
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

            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            <div className="block md:hidden">
              <MobileMenu items={navItems} currentPath={pathname} />
            </div>
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

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div>
      <button
        onClick={handleClick}
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
        <>
          <div
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
            style={{ top: '72px' }} // Adjust if your header height changes
          />
          <div className="absolute top-full right-0 left-0 p-6 mt-2 bg-background/95 backdrop-blur-lg shadow-lg border border-foreground/10 rounded-b-lg animate-in fade-in slide-in-from-top-5 duration-300 z-50">
            <nav className="flex flex-col gap-5">
              {items.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`group py-3 px-4 rounded-md transition-colors flex items-center ${
                    currentPath === item.path
                      ? 'bg-emerald-500/10 text-foreground'
                      : 'text-foreground/80 hover:bg-foreground/5 hover:text-foreground'
                  }`}
                >
                  <span
                    className={`mr-3 h-1.5 w-1.5 rounded-full transition-all ${
                      currentPath === item.path
                        ? 'bg-emerald-500'
                        : 'bg-transparent group-hover:bg-emerald-500/50'
                    }`}
                  ></span>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-foreground/10">
              <p className="text-sm text-foreground/60 mb-4">Connect with me</p>
              <div className="flex items-center gap-4 justify-between">
                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.783 9.492 20.036 9.488 19.205C6.728 19.759 6.139 17.786 6.139 17.786C5.684 16.653 5.029 16.351 5.029 16.351C4.146 15.727 5.099 15.739 5.099 15.739C6.082 15.812 6.606 16.774 6.606 16.774C7.48 18.328 8.961 17.833 9.518 17.581C9.607 16.928 9.864 16.433 10.148 16.14C7.952 15.845 5.637 15.016 5.637 11.169C5.637 10.048 6.024 9.13 6.626 8.409C6.525 8.161 6.182 7.152 6.728 5.869C6.728 5.869 7.547 5.604 9.476 6.804C10.295 6.585 11.15 6.475 12 6.471C12.85 6.475 13.707 6.585 14.527 6.804C16.456 5.604 17.272 5.869 17.272 5.869C17.82 7.152 17.476 8.161 17.375 8.409C17.979 9.13 18.363 10.048 18.363 11.169C18.363 15.027 16.042 15.843 13.837 16.134C14.195 16.497 14.518 17.216 14.518 18.311C14.518 19.871 14.508 20.692 14.508 21.017C14.508 21.281 14.667 21.587 15.175 21.487C19.145 20.161 22 16.417 22 12C22 6.477 17.523 2 12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.633 7.997C19.646 8.172 19.646 8.346 19.646 8.52C19.646 13.845 15.593 19.981 8.186 19.981C5.904 19.981 3.784 19.32 2 18.172C2.324 18.209 2.636 18.222 2.973 18.222C4.856 18.222 6.589 17.586 7.974 16.501C6.203 16.464 4.719 15.304 4.207 13.708C4.456 13.745 4.706 13.77 4.968 13.77C5.329 13.77 5.692 13.72 6.029 13.633C4.182 13.259 2.799 11.638 2.799 9.68V9.63C3.336 9.929 3.959 10.116 4.619 10.141C3.534 9.419 2.823 8.184 2.823 6.787C2.823 6.039 3.022 5.353 3.371 4.755C5.354 7.198 8.335 8.795 11.677 8.97C11.615 8.67 11.577 8.359 11.577 8.047C11.577 5.822 13.373 4.026 15.601 4.026C16.765 4.026 17.812 4.52 18.548 5.332C19.458 5.163 20.33 4.837 21.104 4.386C20.805 5.291 20.168 6.039 19.333 6.527C20.144 6.434 20.93 6.209 21.652 5.897C21.104 6.658 20.419 7.331 19.633 7.997Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3V19.7C3 20.418 3.582 21 4.3 21H19.7C20.418 21 21 20.418 21 19.7V4.3C21 3.582 20.418 3 19.7 3ZM8.339 18.338H5.667V9.747H8.339V18.338ZM7.003 8.574C6.147 8.574 5.455 7.88 5.455 7.026C5.455 6.171 6.147 5.478 7.003 5.478C7.858 5.478 8.55 6.171 8.55 7.026C8.55 7.88 7.858 8.574 7.003 8.574ZM18.338 18.338H15.669V14.169C15.669 13.147 15.65 11.838 14.252 11.838C12.835 11.838 12.621 12.947 12.621 14.095V18.338H9.954V9.747H12.514V10.922H12.552C12.916 10.248 13.779 9.535 15.067 9.535C17.77 9.535 18.338 11.313 18.338 13.627V18.338Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
