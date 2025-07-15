'use client'

import { motion } from 'framer-motion'

interface LoadingFallbackProps {
  message?: string
  className?: string
  showSpinner?: boolean
  'aria-label'?: string
}

export default function LoadingFallback({
  message = 'Loading...',
  className = '',
  showSpinner = true,
  'aria-label': ariaLabel = 'Loading content',
}: LoadingFallbackProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 ${className}`}
      role="status"
      aria-label={ariaLabel}
      aria-live="polite"
    >
      {showSpinner && (
        <motion.div
          className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />
      )}
      <p className={`text-foreground/80 ${showSpinner ? 'mt-4' : ''}`}>{message}</p>
    </div>
  )
}
