import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s Work Together
        </h2>
        <span className="w-10 h-1 bg-emerald-600 rounded-2xl block mb-4"></span>
        <div className="space-y-4 text-xl text-foreground/80">
          <p>
            Ready to bring your next project to life? I&apos;d love to hear about your ideas and
            discuss how we can collaborate.
          </p>
        </div>
      </div>

      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="group p-6 rounded-4xl border border-foreground/10 bg-surface shadow-sm hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                Start a Conversation
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Have a project in mind? Let&apos;s discuss your requirements and how I can help
                bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-emerald-500 hover:text-emerald-600 transition-colors font-medium"
              >
                Get in touch
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
                  className="ml-2"
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="group p-6 rounded-4xl border border-foreground/10 bg-surface shadow-sm hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                Schedule a Call
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Prefer to chat directly? Book a consultation call to discuss your project
                requirements and timeline.
              </p>
              <a
                href="https://cal.com/kanerep"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-500 hover:text-emerald-600 transition-colors font-medium"
              >
                Book a call
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
                  className="ml-2"
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
