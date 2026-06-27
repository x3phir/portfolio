import { ArrowUpRight } from 'lucide-react'
import { AnimatedContent } from '@/components/reactbits/animated-content'

export function CtaSection() {
  return (
    <section className="border-t border-black/10 bg-background px-6 py-24 text-center text-foreground md:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedContent distance={18} duration={850}>
          <p className="mb-6 text-sm font-medium">collaboration.</p>
        </AnimatedContent>

        <AnimatedContent delay={120} distance={24} duration={900}>
          <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
            Got a project
            <br />
            in mind?
          </h2>
        </AnimatedContent>

        <AnimatedContent delay={300} distance={20} duration={800}>
          <div className="mt-10 flex flex-col items-center gap-6">
            <p className="max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let&apos;s build something
              great together.
            </p>
            <a
              href="https://wa.me/6283898717632"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 border-2 border-black px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white"
            >
              Hit me up
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}
