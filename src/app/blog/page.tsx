'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Thoughts, ideas, and insights on web development, design, and entrepreneurship
            </p>
          </motion.div>

          <div className="mb-12">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 px-4 pl-10 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
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
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group rounded-xl overflow-hidden bg-background border border-foreground/10 shadow-sm flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-foreground/5 text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold mb-3 group-hover:text-emerald-500 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-foreground/70 mb-4 flex-grow">{post.excerpt}</p>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-foreground/10">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm text-foreground/70">{post.author.name}</span>
                    </div>
                    <span className="text-sm text-foreground/50">{post.date}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="absolute inset-0"
                  aria-label={`Read ${post.title}`}
                >
                  <span className="sr-only">Read article</span>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-foreground/70">No articles found matching your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
              >
                View All Articles
              </button>
            </div>
          )}
        </section>

        <section className="py-16 border-t border-foreground/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Get the latest articles and insights delivered straight to your inbox.
            </p>

            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow py-3 px-4 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="py-3 px-6 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

// Sample data for blog posts
const posts = [
  {
    title: 'Getting Started with Next.js 14',
    slug: 'getting-started-with-nextjs-14',
    excerpt:
      'Learn how to build modern web applications with Next.js 14, the React framework for production.',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    date: 'May 15, 2024',
    tags: ['Next.js', 'React', 'Web Development'],
    author: {
      name: 'kanerep',
      avatar: '/images/profile.jpg',
    },
  },
  {
    title: 'The Power of Tailwind CSS',
    slug: 'the-power-of-tailwind-css',
    excerpt:
      'Discover how Tailwind CSS can help you build beautiful, responsive user interfaces quickly and efficiently.',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    date: 'April 28, 2024',
    tags: ['CSS', 'Tailwind', 'Design'],
    author: {
      name: 'kanerep',
      avatar: '/images/profile.jpg',
    },
  },
  {
    title: 'Building Micro-Animations with Framer Motion',
    slug: 'building-micro-animations-with-framer-motion',
    excerpt:
      'Learn how to create subtle, engaging animations that enhance user experience without being distracting.',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    date: 'April 10, 2024',
    tags: ['Animation', 'Framer Motion', 'UX'],
    author: {
      name: 'kanerep',
      avatar: '/images/profile.jpg',
    },
  },
  {
    title: 'The Future of Web Development',
    slug: 'the-future-of-web-development',
    excerpt:
      'Explore emerging trends and technologies that are shaping the future of web development.',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    date: 'March 22, 2024',
    tags: ['Web Development', 'Trends', 'Future'],
    author: {
      name: 'kanerep',
      avatar: '/images/profile.jpg',
    },
  },
  {
    title: 'From Developer to Entrepreneur',
    slug: 'from-developer-to-entrepreneur',
    excerpt:
      'My journey from being a developer to starting my own tech business, and lessons learned along the way.',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    date: 'March 5, 2024',
    tags: ['Entrepreneurship', 'Career', 'Business'],
    author: {
      name: 'kanerep',
      avatar: '/images/profile.jpg',
    },
  },
  {
    title: 'Optimizing Performance in React Applications',
    slug: 'optimizing-performance-in-react-applications',
    excerpt:
      'Practical tips and techniques for improving the performance of your React applications.',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    date: 'February 18, 2024',
    tags: ['React', 'Performance', 'Optimization'],
    author: {
      name: 'kanerep',
      avatar: '/images/profile.jpg',
    },
  },
]
