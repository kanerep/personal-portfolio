export default function About() {
  return (
    <section className="py-16">
      <div className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">About</h2>
        <span className="w-10 h-1 bg-emerald-600 rounded-2xl block mb-4"></span>
        <div className="space-y-4 text-2xl text-foreground/80">
          <p>
            I&apos;m a front-end engineer with seven years&apos; experience, now harnessing AI to
            build fast, intuitive MVPs that pave the way for my own future SaaS products.
          </p>
          <p>
            After studying Web Development at Manchester Metropolitan University, I spent six years
            at a software agency collaborating with large clients, then recently jumped into the
            world of freelancing! I&apos;ve worked with small business&apos; to build web
            applications using React and Next.js. I&apos;m currently working on a project called
            Odyssey which is a Web3 analytics platform.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me tinkering with entrepreneurial ideas,
            being active outdoors or lifting weights. My long-term goal is to launch my own B2B SaaS
            products to help businesses solve real world problems. If you have an idea, let&apos;s
            chat and build something great together!
          </p>
          <p>
            If you want to follow my journey, feel free to check out my{' '}
            <a
              href="https://x.com/_kanerep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 underline hover:text-emerald-600 transition-colors duration-300"
            >
              Twitter.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
