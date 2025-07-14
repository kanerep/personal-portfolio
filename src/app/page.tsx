'use client'

import PageTransition from '@/components/PageTransition'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import ProjectList from '@/components/ProjectList'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Hero />
        <About />
        <Services />
        <ProjectList />
        <CTASection />
      </div>
    </PageTransition>
  )
}

// Sample data for featured projects
