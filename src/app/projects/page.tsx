'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import ProjectCard from '@/components/ProjectCard'
import { getAllProjects } from '@/data/projects'
import Button from '@/components/Button'

export default function Projects() {
  const [filter, setFilter] = useState<string>('all')
  const projects = getAllProjects()

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.tags.includes(filter))

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
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
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl || ''}
                  tags={project.tags}
                  projectUrl={`/projects/${project.slug}`}
                  githubUrl={project.githubUrl || ''}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-foreground/70 mb-4">
                No projects found with the selected filter.
              </p>
              <Button variant="primary" size="sm" type="button" onClick={() => setFilter('all')}>
                View All Projects
              </Button>
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  )
}
