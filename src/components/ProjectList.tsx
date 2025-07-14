'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'

export default function ProjectList() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="featured-projects">
      <div className="text-center mb-16">
        <h2 id="featured-projects" className="text-3xl md:text-4xl font-bold mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Check out some of my recent work
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
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
        role="list"
        aria-label="Featured projects list"
      >
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className="h-full"
            role="listitem"
            aria-label={`Project ${index + 1} of 3`}
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

      <div className="text-center mt-12">
        <Button
          href="/projects"
          variant="primary"
          type="button"
          className="justify-center"
          size="md"
          aria-label="View all projects page"
        >
          View All Projects
        </Button>
      </div>
    </section>
  )
}
