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
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  date: string
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with Next.js and TypeScript',
    longDescription:
      'A showcase of my work and skills as a developer. The site features a responsive design, dark mode, and various sections including projects, blog, and contact information.',
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    tags: ['web', 'nextjs', 'react'],
    githubUrl: 'https://github.com/yourusername/personal-portfolio',
    liveUrl: 'https://yourportfolio.com',
    featured: true,
    date: '2023-03-15',
  },
  {
    id: '2',
    slug: 'e-commerce-store',
    title: 'E-Commerce Store',
    description: 'A full-featured online shop with product listing and cart functionality',
    longDescription:
      'An e-commerce platform built with modern technologies. Features include product browsing, searching, filtering, cart management, and checkout process.',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    tags: ['web', 'react', 'api'],
    githubUrl: 'https://github.com/yourusername/e-commerce',
    featured: true,
    date: '2023-01-10',
  },
  {
    id: '3',
    slug: 'weather-app',
    title: 'Weather Application',
    description: 'A weather forecast application using OpenWeather API',
    longDescription:
      'A responsive weather application that shows current weather and 5-day forecast for any location. Uses geolocation and allows searching for cities.',
    imageUrl: 'https://images.unsplash.com/photo-1532978379173-523e16f371f5?q=80&w=2070',
    technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    tags: ['web', 'api'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://weather.yourportfolio.com',
    date: '2022-11-20',
  },
  {
    id: '4',
    slug: 'task-management-app',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects',
    longDescription:
      'This task management application helps users organize their daily tasks and project workflows. Features include task categorization, due dates, priorities, and progress tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2032',
    technologies: ['React Native', 'Firebase', 'Redux'],
    tags: ['mobile', 'react'],
    githubUrl: 'https://github.com/yourusername/task-app',
    date: '2022-08-15',
  },
  {
    id: '5',
    slug: 'recipe-finder',
    title: 'Recipe Finder',
    description: 'A recipe finder app that allows users to search for recipes by ingredients',
    longDescription:
      'A web application that helps users discover new recipes based on ingredients they have available. Integrates with a recipe API and features advanced filtering options.',
    imageUrl: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2047',
    technologies: ['React', 'API Integration', 'CSS Grid'],
    tags: ['web', 'api', 'react'],
    githubUrl: 'https://github.com/yourusername/recipe-finder',
    liveUrl: 'https://recipes.yourportfolio.com',
    date: '2022-06-10',
  },
  {
    id: '6',
    slug: 'blog-platform',
    title: 'Blog Platform',
    description: 'A blog platform built with Next.js and a headless CMS',
    longDescription:
      'A modern blog platform with a rich text editor, image uploads, and comment functionality. Uses a headless CMS for content management.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070',
    technologies: ['Next.js', 'Sanity.io', 'Tailwind CSS'],
    tags: ['web', 'nextjs', 'cms'],
    githubUrl: 'https://github.com/yourusername/blog-platform',
    liveUrl: 'https://blog.yourportfolio.com',
    date: '2022-04-18',
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
