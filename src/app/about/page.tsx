'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <section className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Front-end engineer and aspiring entrepreneur with a passion for creating beautiful,
              functional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Hello, I&apos;m kanerep</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  I&apos;m a front-end engineer with a passion for creating intuitive and engaging
                  user experiences. With a background in design and development, I bring a unique
                  perspective to every project I work on.
                </p>
                <p>
                  My journey in web development began over 6 years ago, and since then, I&apos;ve
                  worked on a variety of projects, from small business websites to large-scale web
                  applications. I specialise in React and Next.js, and I&apos;m always exploring new
                  technologies and frameworks to expand my skillset.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring entrepreneurial ideas, reading
                  about technology trends, or enjoying the outdoors.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://github.com/kanerep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com/_kanerep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-foreground/10 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 z-10" />
              <Image
                src="/images/profile.jpg"
                alt="Profile image"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 border-t border-foreground/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-xl bg-background border border-foreground/10 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-foreground/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A brief timeline of my career and education
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-foreground/10"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0
                    ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2'
                    : 'md:pl-12 md:ml-1/2'
                }`}
              >
                <div className="md:w-full">
                  <div className="absolute top-0 left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 z-10"></div>
                  <div className="p-6 rounded-xl bg-background border border-foreground/10 shadow-sm">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500 mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/70 mb-2">{item.company}</p>
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-foreground/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Interested in working together or just want to say hello?
            </p>
            <Link
              href="/contact"
              className="py-3 px-6 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

// Sample data for skills section
const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Design',
    items: ['Figma', 'UI/UX', 'Responsive Design', 'Prototyping'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Supabase', 'REST APIs', 'Kontent.ai', 'Sanity Headless CMS'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Netlify', 'Jest', 'Storybook'],
  },
]

// Sample data for timeline section
const timeline = [
  {
    period: '2022 - Present',
    title: 'Freelance Front-End Engineer',
    company: 'Self-Employed',
    description: 'Building web applications for clients using React, Next.js, and Tailwind CSS.',
  },
  {
    period: '2020 - 2024',
    title: 'Front-End Engineer',
    company: 'MMT Digital',
    description:
      'Developed responsive web applications using React and Next.js, collaborating with designers and backend developers.',
  },
  {
    period: '2018 - 2020',
    title: 'Junior Front-End Developer',
    company: 'MMT Digital',
    description:
      'Designed user interfaces for web and mobile applications, created wireframes, prototypes, and user flows.',
  },
  {
    period: '2015 - 2018',
    title: 'BSc Web Development',
    company: 'Manchester Metropolitan University',
    description:
      'Studied web development with a focus on the fundamentals of web development and user interface design.',
  },
]
