'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <section className="py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Front-end engineer & <span className="text-emerald-500">product maker</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 max-w-lg">
                I create well-crafted web applications and products that solve real problems with
                clean code and intuitive design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="py-3 px-6 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="py-3 px-6 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-foreground/10 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/40 z-10" />
              <Image
                src="/images/portfolio-photo.png"
                alt="Hero image"
                fill
                className="object-cover grayscale-100"
                priority
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              I specialise in creating modern, responsive web applications with a focus on user
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Service - First card spans two rows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 md:p-8 rounded-xl bg-background border border-foreground/10 shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all group md:row-span-2 flex flex-col"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-5 group-hover:bg-emerald-500/20 transition-colors">
                {services[0].icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-emerald-500 transition-colors">
                {services[0].title}
              </h3>
              <p className="text-foreground/70 mb-0 md:mb-6">{services[0].description}</p>

              <div className="md:block hidden mt-auto space-y-3">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>React & Next.js</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>TypeScript & JavaScript</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Headless CMS Integration</span>
                </div>
              </div>
            </motion.div>

            {/* Other Services */}
            {services.slice(1).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + (index + 1) * 0.1 }}
                className="p-6 rounded-xl bg-background border border-foreground/10 shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-5 group-hover:bg-emerald-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Check out some of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="group rounded-xl overflow-hidden bg-background border border-foreground/10 shadow-sm"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-emerald-500 hover:text-emerald-600 transition-colors"
                  >
                    View Project →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="py-3 px-6 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
              <p className="text-xl text-foreground/70 mb-8">
                I&apos;m always open to discussing new projects, creative ideas or opportunities to
                be part of your vision.
              </p>
              <Link
                href="/contact"
                className="py-3 px-6 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-foreground/10 shadow-lg bg-background flex items-center justify-center">
                <Image
                  src="/collaboration.svg"
                  alt="Collaboration illustrated by overlapping circles"
                  width={600}
                  height={400}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

// Sample data for services section
const services = [
  {
    title: 'Front-End Development',
    description:
      'Building beautiful, responsive interfaces with modern frameworks and libraries. I focus on creating clean, maintainable code that delivers exceptional user experiences.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating intuitive and engaging user experiences that balance visual appeal with usability, ensuring your product stands out from the crowd.',
    icon: (
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
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
  },
  {
    title: 'Performance Optimisation',
    description:
      'Improving site speed and responsiveness for better user experience and SEO, with emphasis on Core Web Vitals and modern best practices.',
    icon: (
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
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
  },
  {
    title: 'Responsive Design',
    description:
      'Building websites that work beautifully across all devices with a mobile-first approach that ensures great experiences for all users.',
    icon: (
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
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18"></line>
      </svg>
    ),
  },
  {
    title: 'AI & Custom Solutions',
    description:
      'Integrating AI capabilities and building bespoke solutions that elevate your products with intelligent features tailored to your needs.',
    icon: (
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
      >
        <path d="M12 2a8 8 0 0 0-8 8c0 1.5.3 2.9.9 4.2.5 1.1 1.1 2.1 1.9 3L12 22l5.3-4.9c.8-.8 1.4-1.8 1.9-3 .6-1.3.9-2.7.9-4.2a8 8 0 0 0-8-8z"></path>
        <path d="M12 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      </svg>
    ),
  },
]

// Sample data for featured projects
const featuredProjects = [
  {
    title: 'RF Plumbing & Heating',
    description:
      'A professional company website to establish a strong online presence and showcase their services.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    slug: 'rf-plumbing-and-heating',
  },
  {
    title: 'Portfolio Website',
    description: 'A creative portfolio website for a digital artist.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    slug: 'portfolio-website',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    slug: 'task-management-app',
  },
]
