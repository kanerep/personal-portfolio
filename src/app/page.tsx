import AnimationWrapper from '@/components/AnimationWrapper'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full max-w-4xl text-center pt-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">kanerep.</h1>
      </header>

      <main className="flex flex-col items-center gap-8 text-center max-w-2xl">
        <AnimationWrapper />

        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">Coming Soon</h2>

          <p className="text-lg opacity-80">I&apos;m currently rebuilding my portfolio.</p>

          <p className="text-sm opacity-60">
            In the meantime, feel free to connect with me on social media.
          </p>
        </div>

        <div className="flex justify-center gap-6 pt-6">
          {/* GitHub */}
          <a
            href="https://github.com/kanerep"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 focus:scale-110"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          {/* LinkedIn eventually */}
          {/* <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 focus:scale-110"
            aria-label="LinkedIn Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a> */}

          {/* Twitter/X */}
          <a
            href="https://twitter.com/_kanerep"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 focus:scale-110"
            aria-label="X Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1200 1227"
              fill="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
            </svg>
          </a>
        </div>
      </main>

      <footer className="w-full text-center py-6 text-sm opacity-60">
        <p>© {new Date().getFullYear()} kanerep. all rights reserved.</p>
      </footer>
    </div>
  )
}
