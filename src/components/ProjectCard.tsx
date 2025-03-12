'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  projectUrl: string
  githubUrl?: string
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-xl overflow-hidden bg-background border border-foreground/10 shadow-sm"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold">{title}</h3>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label={`GitHub repository for ${title}`}
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
          )}
        </div>

        <p className="text-foreground/70 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-foreground/5 text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={projectUrl}
          className="inline-block py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  )
}
