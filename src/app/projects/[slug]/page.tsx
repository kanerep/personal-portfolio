import { getProjectBySlug } from '@/data/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import Image from 'next/image'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import fs from 'fs/promises'
import path from 'path'
import Button from '@/components/Button'

// Function to read markdown content for projects
async function getProjectMarkdown(slug: string): Promise<string | null> {
  try {
    const markdownPath = path.join(process.cwd(), 'src', 'data', 'markdown', `${slug}.md`)
    const content = await fs.readFile(markdownPath, 'utf-8')
    return content
  } catch {
    console.log(`No markdown file found for ${slug}`)
    return null
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  const markdownContent = await getProjectMarkdown(slug)

  if (!project) {
    notFound()
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative max-w-5xl mx-auto overflow-hidden bg-gradient-to-br from-emerald-500/5 to-background border rounded-3xl shadow-lg border-foreground/10">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="py-12 md:py-20">
              {/* Back Navigation */}
              <div className="mb-8">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 text-foreground/80 hover:text-emerald-500 transition-all duration-300"
                >
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
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back to Projects
                </Link>
              </div>

              {/* Project Header */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                {/* Left: Title and Meta */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      {project.title}
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium border border-emerald-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium rounded-xl transition-all duration-300 bg-emerald-600 text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
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
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        View Live Site
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium rounded-xl transition-all duration-300 bg-foreground/10 text-foreground hover:bg-foreground/20 border border-foreground/20 hover:border-foreground/30"
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
                          className="transition-transform group-hover:scale-110"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        View Source
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Project Image */}
                {(project.image || project.imageUrl) && (
                  <div className="lg:col-span-2">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur"></div>
                      <div className="relative overflow-hidden rounded-xl border border-foreground/10 bg-background">
                        <Image
                          src={project.image || project.imageUrl!}
                          alt={project.title}
                          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            {markdownContent ? (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Project Details
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto rounded"></div>
                </div>
                <MarkdownRenderer content={markdownContent} className="prose-lg prose-emerald" />
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Project Overview
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto rounded"></div>
                </div>

                <div className="bg-foreground/5 rounded-2xl p-8 md:p-12 border border-foreground/10">
                  <p className="text-lg text-foreground/80 leading-relaxed text-center">
                    {project.longDescription || project.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 max-w-5xl mx-auto bg-gradient-to-r from-emerald-500/5 to-background border rounded-3xl shadow-lg border-foreground/5">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Interested in working together?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>
            <Button variant="primary" type="button" href="/contact">
              Get in Touch
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
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </Button>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
