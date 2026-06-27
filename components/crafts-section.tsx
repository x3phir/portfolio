'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, X } from 'lucide-react'
import { createPortal } from 'react-dom'

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
  {
    title: 'ngeaiyuk',
    label: 'AI Blueprint Tool',
    description:
      'A guided interview that turns rough software ideas into a clear, editable project blueprint ready for your AI coding agent.',
    image: '/ngeaiyuk.png',
    imageAlt: 'Ngeaiyuk guided interview project preview',
    tags: ['AI', 'Blueprint', 'Project Planning'],
  },
] as const

type Project = (typeof projects)[number]

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white p-6 shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center bg-black text-white transition-colors hover:bg-black/80"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="relative aspect-video w-full overflow-hidden bg-black md:aspect-auto md:w-1/2">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center">
            <span className="mb-3 w-fit rounded-full border-2 border-black px-4 py-1 text-xs font-bold uppercase tracking-[0.18em]">
              {project.label}
            </span>
            <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.03em] text-black md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-black/65 md:text-base">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AnimatedContent delay={100 + index * 110} distance={26} duration={950}>
        <article
          tabIndex={0}
          onClick={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setIsOpen(true)
            }
          }}
          className="group/project relative h-40 cursor-pointer overflow-hidden border-b border-white/35 outline-none transition-colors duration-300 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary sm:h-48"
          aria-label={`${project.title} project`}
        >
          <div className="relative z-10 flex h-full items-center justify-between px-4 sm:px-8">
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-white text-black sm:h-10 sm:w-10">
                <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </span>
              <span className="truncate text-[clamp(1.5rem,4vw,4rem)] font-black uppercase leading-none tracking-tight text-white">
                {project.title}
              </span>
            </div>
            <span className="hidden shrink-0 text-4xl font-black text-white/20 md:block">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="absolute inset-0 z-20 flex translate-y-full items-center justify-between bg-white px-4 py-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/project:translate-y-0 group-focus/project:translate-y-0 sm:px-8">
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <p className="max-w-2xl text-xs font-medium leading-relaxed text-black/65 opacity-0 transition-opacity delay-100 duration-300 group-hover/project:opacity-100 group-focus/project:opacity-100 sm:text-sm md:text-base">
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

      {isOpen && <ProjectModal project={project} onClose={() => setIsOpen(false)} />}
    </>
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
