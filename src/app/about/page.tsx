'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Front-end engineer and aspiring entrepreneur with a passion for creating beautiful,
              functional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Hello, I&apos;m kane</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  I&apos;m a front-end engineer with a passion for creating intuitive and engaging
                  user experiences. With a background in design and development, I bring a unique
                  perspective to every project I work on.
                </p>
                <p>
                  My journey in web development began over 6 years ago, and since then, I&apos;ve
                  worked on a variety of projects, from small business websites to large-scale web
                  applications. I specialise in React and Next.js, and I&apos;m always exploring new
                  technologies and frameworks to expand my skillset.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring entrepreneurial ideas, reading
                  about technology trends, or enjoying the outdoors.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://github.com/kanerep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com/_kanerep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-foreground/10 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 z-10" />
              <Image
                src="/images/profile.jpg"
                alt="Profile image"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 border-t border-foreground/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 text-emerald-500 rounded-md mr-3">
                    {category.icon}
                  </span>
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center p-4 rounded-lg border border-foreground/10 bg-background hover:bg-foreground/5 transition-colors"
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-3 text-foreground/80">
                        {skill.logo}
                      </div>
                      <span className="text-sm font-medium text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-foreground/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A brief timeline of my career and education
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-foreground/10"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0
                    ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2'
                    : 'md:pl-12 md:ml-1/2'
                }`}
              >
                <div className="md:w-full">
                  {index !== timeline.length - 1 && (
                    <div className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 z-10"></div>
                  )}
                  <div className="p-6 rounded-xl bg-background border border-foreground/10 shadow-sm">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500 mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/70 mb-2">{item.company}</p>
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-foreground/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Interested in working together or just want to say hello?
            </p>
            <Link
              href="/contact"
              className="py-3 px-6 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

// add postgres and drizzle to the skills section

const skillCategories = [
  {
    name: 'Frontend',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 9l10-7 10 7v11a2 2 0 01-2 2H4a2 2 0 01-2-2V9z"></path>
        <polyline points="12 22 12 13 17 13 17 22"></polyline>
        <polyline points="2 12 12 5 22 12"></polyline>
      </svg>
    ),
    skills: [
      {
        name: 'React',
        logo: (
          <Image
            src="/logos/react_logo_dark.svg"
            alt="React"
            width={48}
            height={48}
            className="object-contain"
          />
        ),
      },
      {
        name: 'Next.js',
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="48">
            <mask
              height="180"
              id=":r8:mask0_408_134"
              maskUnits="userSpaceOnUse"
              width="180"
              x="0"
              y="0"
              style={{ maskType: 'alpha' }}
            >
              <circle cx="90" cy="90" fill="black" r="90"></circle>
            </mask>
            <g mask="url(#:r8:mask0_408_134)">
              <circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle>
              <path
                d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                fill="url(#:r8:paint0_linear_408_134)"
              ></path>
              <rect
                fill="url(#:r8:paint1_linear_408_134)"
                height="72"
                width="12"
                x="115"
                y="54"
              ></rect>
            </g>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id=":r8:paint0_linear_408_134"
                x1="109"
                x2="144.5"
                y1="116.5"
                y2="160.5"
              >
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id=":r8:paint1_linear_408_134"
                x1="121"
                x2="120.799"
                y1="54"
                y2="106.875"
              >
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        name: 'TypeScript',
        logo: (
          <svg viewBox="0 0 24 24" width="100%" height="100%" className="text-blue-600">
            <path
              fill="currentColor"
              d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            />
          </svg>
        ),
      },
      {
        name: 'Tailwind CSS',
        logo: (
          <svg viewBox="0 0 24 24" width="100%" height="100%" className="text-cyan-500">
            <path
              fill="currentColor"
              d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
            />
          </svg>
        ),
      },
      {
        name: 'Framer Motion',
        logo: (
          <Image
            src="/logos/framer_logo_white.svg"
            alt="Framer Motion"
            width={48}
            height={48}
            className="object-contain"
          />
        ),
      },
    ],
  },
  {
    name: 'Design',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
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
    skills: [
      {
        name: 'Figma',
        logo: (
          <svg viewBox="0 0 24 24" width="100%" height="100%">
            <path
              fill="currentColor"
              d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"
            />
          </svg>
        ),
      },
      {
        name: 'UI/UX',
        logo: (
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
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 5v14" />
            <path d="M5 9h4" />
            <path d="M5 15h4" />
            <path d="M15 5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2z" />
          </svg>
        ),
      },
      {
        name: 'Responsive Design',
        logo: (
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
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        ),
      },
      {
        name: 'Prototyping',
        logo: (
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
            <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
            <path d="M12 13v8" />
            <path d="M12 3v3" />
          </svg>
        ),
      },
    ],
  },
  {
    name: 'Backend',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    skills: [
      {
        name: 'Node.js',
        logo: (
          <svg viewBox="0 0 24 24" width="100%" height="100%" className="text-green-600">
            <path
              fill="currentColor"
              d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
            />
          </svg>
        ),
      },
      {
        name: 'Express',
        logo: (
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
            <path d="M5 16H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2" />
            <path d="M10 16H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2" />
            <path d="M10 12h2a1 1 0 0 1 1 1v3" />
            <path d="M15 8v4" />
            <path d="M18 8v8" />
            <path d="M21 11.5v.5" />
          </svg>
        ),
      },
      {
        name: 'Supabase',
        logo: (
          <svg width="100%" height="100%" viewBox="0 0 24 24" className="text-emerald-600">
            <path
              fill="currentColor"
              d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"
            />
          </svg>
        ),
      },
      {
        name: 'REST APIs',
        logo: (
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
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        ),
      },
      {
        name: 'Sanity CMS',
        logo: <Image src="/logos/sanity_logo_white.svg" alt="Sanity CMS" width={48} height={48} />,
      },
    ],
  },
  {
    name: 'Tools',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    skills: [
      {
        name: 'Git',
        logo: (
          <svg viewBox="0 0 24 24" width="100%" height="100%" className="text-orange-600">
            <path
              fill="currentColor"
              d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
            />
          </svg>
        ),
      },
    ],
  },
]

// Sample data for timeline section
const timeline = [
  {
    period: '2022 - Present',
    title: 'Freelance Front-End Engineer',
    company: 'Self-Employed',
    description: 'Building web applications for clients using React, Next.js, and Tailwind CSS.',
  },
  {
    period: '2020 - 2024',
    title: 'Front-End Engineer',
    company: 'MMT Digital',
    description:
      'Developed responsive web applications using React and Next.js, collaborating with designers and backend developers.',
  },
  {
    period: '2018 - 2020',
    title: 'Junior Front-End Developer',
    company: 'MMT Digital',
    description:
      'Designed user interfaces for web and mobile applications, created wireframes, prototypes, and user flows.',
  },
  {
    period: '2015 - 2018',
    title: 'BSc Web Development',
    company: 'Manchester Metropolitan University',
    description:
      'Studied web development with a focus on the fundamentals of web development and user interface design.',
  },
]
