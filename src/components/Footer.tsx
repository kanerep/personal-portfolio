'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-background border-t border-foreground/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              kanerep<span className="text-emerald-500">.</span>
            </h3>
            <p className="text-foreground/70 mb-4 max-w-xs">
              Front-end engineer and aspiring entrepreneur building creative digital experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/kanerep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/_kanerep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Twitter/X"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1200 1227"
                  fill="currentColor"
                >
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-foreground/70 mb-2">
              Let&apos;s connect! Send a message through the contact form or find me on social
              media.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-2 py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center text-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} kanerep. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with <span className="text-emerald-500">♥</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
