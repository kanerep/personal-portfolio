export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  image?: string
  imageUrl?: string
  technologies: string[]
  tags: string[]
  githubUrl?: string | null
  liveUrl?: string
  featured?: boolean
  date: string
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'RF Heating & Plumbing',
    title: 'RF Heating & Plumbing',
    description:
      'A professional company website to establish a strong online presence and showcase their services.',
    longDescription:
      'A professional company website to establish a strong online presence and showcase their services. ',
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    tags: ['web', 'nextjs', 'react'],
    githubUrl: null,
    liveUrl: 'https://rfheating.com',
    featured: true,
    date: '12/07/2025',
  },
  {
    id: '2',
    slug: 'chainedge',
    title: 'Chain Edge',
    description: 'A landing page rebuild for an onchain analytics platform.',
    longDescription:
      'A landing page rebuild for an onchain analytics platform. Features include a modern design, a clean interface, and a focus on data visualization.',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    tags: ['web', 'react', 'api'],
    githubUrl: '',
    featured: true,
    date: '2023-01-10',
  },
  {
    id: '3',
    slug: 'ai-quote-builder-app',
    title: 'AI Quote Builder',
    description: 'A quote builder app that allows users to build quotes using AI powered features.',
    longDescription:
      'A quote builder app that allows users to build quotes using AI. Features include a modern design, a clean interface, and a focus on data visualization.',
    imageUrl: 'https://images.unsplash.com/photo-1532978379173-523e16f371f5?q=80&w=2070',
    technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    tags: ['web', 'api'],
    githubUrl: '',
    liveUrl: 'https://ai-quote-builder.vercel.app/',
    date: '12/07/2025',
  },
]

// Helper function to get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

// Helper function to get all projects
export function getAllProjects(): Project[] {
  return projects
}

// Helper function to get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
