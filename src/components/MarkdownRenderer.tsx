'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import { cn } from '@/lib/utils'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export default function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn('prose prose-neutral dark:prose-invert max-w-none', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          // Custom heading styles
          h1: ({ children, ...props }) => (
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 mt-8 text-foreground" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="text-xl md:text-2xl font-semibold mb-3 mt-6 text-foreground" {...props}>
              {children}
            </h3>
          ),
          // Custom paragraph styles
          p: ({ children, ...props }) => (
            <p className="text-foreground/80 leading-relaxed mb-4" {...props}>
              {children}
            </p>
          ),
          // Custom list styles
          ul: ({ children, ...props }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-foreground/80" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground/80" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="text-foreground/80" {...props}>
              {children}
            </li>
          ),
          // Custom code styles
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          code: ({ children, className, ...props }: any) => {
            const isInline = !className?.includes('language-')
            return isInline ? (
              <code
                className="bg-foreground/10 text-foreground px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            ) : (
              <code
                className={`block bg-foreground/5 text-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono ${
                  className || ''
                }`}
                {...props}
              >
                {children}
              </code>
            )
          },
          // Custom blockquote styles
          blockquote: ({ children, ...props }) => (
            <blockquote
              className="border-l-4 border-emerald-500 pl-4 py-2 my-4 bg-emerald-500/5 text-foreground/80 italic"
              {...props}
            >
              {children}
            </blockquote>
          ),
          // Custom link styles with video detection
          a: ({ children, href, ...props }) => {
            // Check if the link is a video file
            const isVideo =
              href &&
              (href.includes('.mp4') ||
                href.includes('.webm') ||
                href.includes('.ogg') ||
                href.includes('video/upload')) // For Cloudinary videos

            if (isVideo) {
              return (
                <div className="my-8">
                  <video
                    className="w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-foreground/10"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={href} type="video/mp4" />
                    <p className="text-foreground/70 text-center py-4">
                      Your browser doesn&apos;t support video playback.
                      <a
                        href={href}
                        className="text-emerald-500 hover:text-emerald-400 underline ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download the video instead
                      </a>
                    </p>
                  </video>
                </div>
              )
            }

            return (
              <a
                href={href}
                className="text-emerald-500 hover:text-emerald-400 underline transition-colors"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                {...props}
              >
                {children}
              </a>
            )
          },
          // Custom video element styling
          video: ({ children, ...props }) => (
            <div className="my-8">
              <video
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-foreground/10"
                controls
                playsInline
                preload="metadata"
                {...props}
              >
                {children}
              </video>
            </div>
          ),
          // Custom horizontal rule
          hr: (props) => <hr className="border-foreground/20 my-8" {...props} />,
          // Custom table styles
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-foreground/20" {...props}>
                {children}
              </table>
            </div>
          ),
          th: ({ children, ...props }) => (
            <th
              className="border border-foreground/20 px-4 py-2 bg-foreground/5 text-left font-semibold"
              {...props}
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td className="border border-foreground/20 px-4 py-2" {...props}>
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
