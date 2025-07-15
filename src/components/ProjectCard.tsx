'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

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
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const fallbackImage = 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=2070'

  return (
    <motion.article
      whileHover={{ y: -1, scale: 1.01, transition: { duration: 0.2 } }}
      className="group rounded-3xl overflow-hidden bg-background border border-foreground/10 shadow-sm h-full flex flex-col focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 focus-within:ring-offset-background"
      role="article"
      aria-labelledby={`project-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 bg-foreground/10 animate-pulse flex items-center justify-center">
            <div className="text-foreground/50 text-sm">Loading image...</div>
          </div>
        )}
        <Image
          src={imageError ? fallbackImage : imageUrl}
          alt={`Screenshot of ${title} project`}
          fill
          className={`object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          onLoad={() => setImageLoading(false)}
          onError={() => {
            setImageError(true)
            setImageLoading(false)
          }}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3
            id={`project-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-xl font-semibold leading-tight"
          >
            {title}
          </h3>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors ml-2 flex-shrink-0 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={`View ${title} source code on GitHub`}
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
                role="img"
                aria-hidden="true"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
        </div>

        <p
          className="text-foreground/80 mb-4 flex-grow line-clamp-3"
          aria-describedby={`project-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
          {tags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="px-2 py-1 text-xs rounded-full bg-foreground/5 text-foreground/80 border border-foreground/10"
              aria-label={`Technology: ${tag}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={projectUrl}
          className="inline-flex items-center py-1 font-medium text-emerald-500 hover:text-emerald-600 transition-colors duration-300"
          aria-label={`View detailed information about ${title} project`}
        >
          View Project
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
            className="ml-2"
          >
            <path d="M7 17L17 7"></path>
            <path d="M7 7h10v10"></path>
          </svg>
        </Link>
      </div>
    </motion.article>
  )
}
