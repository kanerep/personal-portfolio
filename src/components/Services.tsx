'use client'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Front-End Development',
    description:
      'Building beautiful, responsive interfaces with modern frameworks and libraries. I focus on creating clean, maintainable code that delivers exceptional user experiences.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating intuitive and engaging user experiences that balance visual appeal with usability, ensuring your product stands out from the crowd.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
  },
  {
    title: 'Performance Optimisation',
    description:
      'Improving site speed and responsiveness for better user experience and SEO, with emphasis on Core Web Vitals and modern best practices.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
  },
  {
    title: 'Responsive Design',
    description:
      'Building websites that work beautifully across all devices with a mobile-first approach that ensures great experiences for all users.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18"></line>
      </svg>
    ),
  },
  {
    title: 'AI & Custom Solutions',
    description:
      'Integrating AI capabilities and building bespoke solutions that elevate your products with intelligent features tailored to your needs.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bot-icon lucide-bot"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="py-12">
      <div className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
        <span className="w-10 h-1 bg-emerald-600 rounded-2xl block mb-4"></span>
        <div className="space-y-4 text-xl text-foreground/80">
          <p>
            I specialise in creating modern, responsive web applications with a focus on user
            experience and performance.
          </p>
        </div>
      </div>

      {/* Sleek Services List */}
      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            className="group p-6 rounded-4xl border border-foreground/10 bg-surface shadow-sm hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
