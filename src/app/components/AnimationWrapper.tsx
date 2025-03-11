'use client'

import dynamic from 'next/dynamic'
import LoadingFallback from './LoadingFallback'

// Dynamic import wrapped in a client component
const DynamicLoadingAnimation = dynamic(() => import('./LoadingAnimation'), {
  loading: () => <LoadingFallback />,
})

export default function AnimationWrapper() {
  return <DynamicLoadingAnimation />
}
