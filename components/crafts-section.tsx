import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import { AnimatedContent } from '@/components/reactbits/animated-content'

const projects = [
  {
    title: 'IoT Water Quality Monitoring System',
    label: 'IoT Monitoring',
    description:
      'A compact IoT concept for reading and displaying water quality data from TDS, turbidity, and pH sensors.',
    image: '/iot-monitoring-systems.png',
    imageAlt: 'IoT water quality monitoring system project preview',
    tags: ['IoT', 'Water Quality', 'Sensors'],
  },
  {
    title: '4PAWS - Cat Adoption Web App',
    label: 'Shelter Web App',
    description:
      'A web app for browsing adoptable cats, submitting adoption forms, and managing shelter data.',
    image: '/4paws.png',
    imageAlt: '4PAWS cat adoption web app project preview',
    tags: ['Adoption', 'Catalog', 'Dashboard'],
  },
] as const

type Project = (typeof projects)[number]

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <AnimatedContent delay={100 + index * 110} distance={26} duration={950}>
      <article
        tabIndex={0}
        className="group/project relative h-32 overflow-hidden border-b border-white/35 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary sm:h-36"
        aria-label={`${project.title} project`}
      >
        <div className="relative z-10 flex h-full items-center gap-3 px-2 text-left text-white sm:px-6">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-white text-black sm:h-8 sm:w-8">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="truncate text-2xl font-black uppercase leading-none tracking-tight sm:text-[4vh] md:text-[4.6vh]">
            {project.title}
          </span>
        </div>

        <div className="absolute inset-0 z-20 flex translate-y-full items-center justify-between bg-white px-3 py-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/project:translate-y-0 group-focus/project:translate-y-0 sm:px-6">
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <span className="mb-2 w-fit rounded-full border-2 border-black px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-black sm:hidden">
              {project.label}
            </span>
            <h3 className="flex min-w-0 items-center text-[clamp(1.8rem,5vw,4.75rem)] font-black uppercase leading-none tracking-[-0.06em] text-black">
              <span className="mr-3 inline-flex h-10 min-w-10 items-center justify-center bg-black px-2 text-base text-white sm:h-12 sm:min-w-12 sm:text-xl">
                {index + 1}
              </span>
              <span className="truncate">{project.title}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-xs font-medium leading-relaxed text-black/65 opacity-0 transition-opacity delay-100 duration-300 group-hover/project:opacity-100 group-focus/project:opacity-100 sm:text-sm md:text-base">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 opacity-0 transition-opacity delay-150 duration-300 group-hover/project:opacity-100 group-focus/project:opacity-100">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-2 border-black px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-black transition-colors group-hover/project:bg-black group-hover/project:text-white group-focus/project:bg-black group-focus/project:text-white sm:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative ml-6 hidden h-full w-[38%] overflow-hidden rounded-tl-sm bg-black shadow-[-10px_10px_0_#000] md:block">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 36vw, 45vw"
              className="object-cover grayscale contrast-125 transition duration-500 group-hover/project:grayscale-0 group-focus/project:grayscale-0"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </article>
    </AnimatedContent>
  )
}

export function CraftsSection() {
  return (
    <section id="crafts" className="min-h-screen bg-primary px-6 py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedContent distance={18} duration={850}>
          <p className="mb-16 text-sm font-medium md:mb-24">crafts.</p>
        </AnimatedContent>

        <div className="w-full overflow-hidden border-t border-white/35">
          {projects.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
