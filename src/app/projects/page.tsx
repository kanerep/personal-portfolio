'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const [filter, setFilter] = useState<string>('all')

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.tags.includes(filter))

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A collection of my work, side projects, and experiments
            </p>
          </motion.div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['all', 'web', 'mobile', 'design', 'react', 'nextjs'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    filter === tag
                      ? 'bg-emerald-500 text-white'
                      : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                  }`}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  projectUrl={`/projects/${project.slug}`}
                  githubUrl={project.githubUrl}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-foreground/70">
                No projects found with the selected filter.
              </p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </section>

        <section className="py-16 border-t border-foreground/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Want to Work Together?</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              I&apos;m always open to discussing new projects and opportunities.
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

// Sample project data
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Tailwind CSS.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    tags: ['web', 'react', 'nextjs'],
    slug: 'ecommerce-platform',
    githubUrl: 'https://github.com/kanerep/ecommerce-platform',
  },
  {
    title: 'Portfolio Website',
    description: 'A creative portfolio website for a digital artist.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    tags: ['web', 'design', 'react'],
    slug: 'portfolio-website',
    githubUrl: 'https://github.com/kanerep/portfolio-website',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    tags: ['web', 'mobile', 'react'],
    slug: 'task-management-app',
    githubUrl: 'https://github.com/kanerep/task-management-app',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    tags: ['web', 'react', 'api'],
    slug: 'weather-dashboard',
    githubUrl: 'https://github.com/kanerep/weather-dashboard',
  },
  {
    title: 'Recipe Finder',
    description: 'A recipe finder app that allows users to search for recipes by ingredients.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    tags: ['web', 'mobile', 'api'],
    slug: 'recipe-finder',
    githubUrl: 'https://github.com/kanerep/recipe-finder',
  },
  {
    title: 'Blog Platform',
    description: 'A blog platform built with Next.js and a headless CMS.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    tags: ['web', 'nextjs', 'cms'],
    slug: 'blog-platform',
    githubUrl: 'https://github.com/kanerep/blog-platform',
  },
]
