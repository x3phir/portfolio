import Image from 'next/image'

import { AnimatedContent } from '@/components/reactbits/animated-content'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0

  return (
    <AnimatedContent delay={100 + index * 110} distance={30} duration={1000}>
      <CardContainer containerClassName="py-0" className="w-full">
        <CardBody className="group/card relative h-auto min-h-[470px] w-full overflow-hidden rounded-[2rem] border-2 border-white bg-black p-4 md:p-5">
          <div className="absolute left-5 top-5 h-16 w-16 rounded-full border-2 border-white/25" />
          <div className="absolute right-6 top-8 grid grid-cols-3 gap-1 opacity-25">
            {Array.from({ length: 9 }).map((_, dotIndex) => (
              <span key={dotIndex} className="h-1.5 w-1.5 rounded-full bg-white" />
            ))}
          </div>
          <div className="absolute bottom-6 right-6 h-20 w-20 rotate-12 rounded-[1.75rem] border-2 border-white/20" />

          <CardItem
            translateZ={74}
            className={`relative z-10 w-full overflow-hidden rounded-[1.5rem] border-2 border-white bg-white p-2 ${
              isEven ? '-rotate-1' : 'rotate-1'
            }`}
          >
            <div className="relative h-64 overflow-hidden rounded-[1.1rem] border-2 border-black bg-white">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover grayscale contrast-125"
                priority={index === 0}
              />
            </div>
          </CardItem>

          <div className="relative z-10 mt-8 flex items-start justify-between gap-4">
            <CardItem
              translateZ={42}
              className="rounded-full border-2 border-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white"
            >
              {project.label}
            </CardItem>
            <CardItem
              translateZ={36}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white text-sm font-black text-black"
            >
              0{index + 1}
            </CardItem>
          </div>

          <CardItem
            as="h3"
            translateZ={68}
            className="relative z-10 mt-7 max-w-md text-3xl font-black leading-none tracking-tight text-white md:text-4xl"
          >
            {project.title}
          </CardItem>

          <CardItem
            as="p"
            translateZ={54}
            className="relative z-10 mt-5 max-w-xl text-sm leading-relaxed text-white/70"
          >
            {project.description}
          </CardItem>

          <div className="relative z-10 mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <CardItem
                key={tag}
                translateZ={22}
                className="rounded-full border border-white/35 px-3 py-1.5 text-xs font-semibold text-white/75"
              >
                {tag}
              </CardItem>
            ))}
          </div>
        </CardBody>
      </CardContainer>
    </AnimatedContent>
  )
}

export function CraftsSection() {
  return (
    <section id="crafts" className="bg-primary px-6 py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedContent distance={18} duration={850}>
          <div className="mb-16 flex flex-col gap-4 md:mb-24 md:flex-row md:items-end md:justify-between">
            <p className="text-sm font-medium">crafts.</p>
            <p className="max-w-md text-sm leading-relaxed text-primary-foreground/60 md:text-right">
              Selected portfolio projects shaped with playful structure, crisp
              contrast, and a strict black-and-white visual direction.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
