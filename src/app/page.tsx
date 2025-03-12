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
                Front-End Engineer & <span className="text-emerald-500">Entrepreneur</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 max-w-lg">
                I build creative digital experiences with modern web technologies and a focus on
                user experience.
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
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
                alt="Hero image"
                fill
                className="object-cover"
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

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-xl bg-background border border-foreground/10 shadow-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
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
              <div className="relative h-[300px] w-full rounded-2xl overflow-hidden border border-foreground/10 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
                  alt="Contact image"
                  fill
                  className="object-cover"
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
      'Building responsive, accessible, and performant user interfaces with modern frameworks like React and Next.js.',
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
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating intuitive and engaging user experiences with a focus on usability, accessibility, and visual appeal.',
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
    title: 'Digital Entrepreneurship',
    description:
      'Developing innovative digital products and services with a focus on solving real-world problems.',
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
]

// Sample data for featured projects
const featuredProjects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Tailwind CSS.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    slug: 'ecommerce-platform',
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
