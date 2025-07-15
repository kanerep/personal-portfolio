import Image from 'next/image'
import Button from '@/components/Button'

export default function Hero() {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-heading text-4xl text-foreground/90 md:text-5xl font-bold mb-6">
            Crafting <span className="text-emerald-500">AI-powered MVPs</span> & Web Apps with{' '}
            <span className="text-emerald-500">React</span> &{' '}
            <span className="text-emerald-500">Next.js</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-lg">
            From pixel-perfect UIs to scalable server-side logic, delivering smooth, maintainable
            MVP solutions
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              type="button"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              }
              href="/contact"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="relative h-[325px] w-[325px] rounded-full overflow-hidden border border-foreground/10 shadow-lg place-self-center">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/50 z-10" />
          <Image
            src="/images/portfolio-photo.png"
            alt="Hero image"
            fill
            className="grayscale-100 object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
