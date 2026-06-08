import { AnimatedContent } from '@/components/reactbits/animated-content'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

const projects = [
  {
    title: 'IoT Water Quality Monitoring System',
    label: 'IoT / Monitoring',
    description:
      'Membuat konsep sistem monitoring kualitas air berbasis IoT menggunakan sensor TDS, turbidity, dan pH untuk membaca, mengkalibrasi, dan menampilkan data kualitas air.',
    tags: ['IoT', 'TDS Sensor', 'Turbidity', 'pH Sensor', 'Calibration'],
    metrics: ['TDS', 'NTU', 'pH'],
    visual: 'water',
    accent: 'from-cyan-400/20 via-lime/10 to-blue-500/20',
  },
  {
    title: '4PAWS — Cat Adoption Web App',
    label: 'Web App / Shelter',
    description:
      'Mengembangkan aplikasi adopsi kucing berbasis web dengan fitur katalog kucing, form adopsi, donasi shelter, laporan kucing, dashboard admin, dan pengelolaan data shelter.',
    tags: [
      'Catalog',
      'Adoption Form',
      'Donation',
      'Admin Dashboard',
      'Shelter Data',
    ],
    metrics: ['Cats', 'Donate', 'Reports'],
    visual: 'cat',
    accent: 'from-lime/25 via-yellow-300/10 to-orange-400/20',
  },
] as const

type Project = (typeof projects)[number]

function WaterQualityVisual() {
  const readings = [
    { label: 'TDS', value: '182 ppm', width: 'w-2/3' },
    { label: 'Turbidity', value: '4.2 NTU', width: 'w-1/2' },
    { label: 'pH', value: '7.1', width: 'w-4/5' },
  ]

  return (
    <div className="relative h-48 overflow-hidden rounded-3xl border border-white/10 bg-black/35 p-5">
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cyan-300/25 via-cyan-300/10 to-transparent" />
      <div className="absolute left-6 top-6 h-16 w-16 rounded-2xl border border-lime/30 bg-lime/15 shadow-[0_0_35px_rgba(207,255,4,0.18)]">
        <div className="absolute left-1/2 top-full h-16 w-px -translate-x-1/2 bg-lime/30" />
        <div className="absolute left-1/2 top-[4.8rem] h-3 w-3 -translate-x-1/2 rounded-full bg-lime" />
      </div>
      <div className="relative ml-auto grid w-44 gap-3">
        {readings.map((reading) => (
          <div key={reading.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur">
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/45">
              <span>{reading.label}</span>
              <span>{reading.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10">
              <div className={`${reading.width} h-full rounded-full bg-lime`} />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs text-cyan-100/70">
        <span className="h-2 w-2 rounded-full bg-lime" />
        Live sensor calibration
      </div>
    </div>
  )
}

function CatAdoptionVisual() {
  const cats = ['Milo', 'Luna', 'Oyen']

  return (
    <div className="relative h-48 overflow-hidden rounded-3xl border border-white/10 bg-black/35 p-5">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-lime/20 blur-2xl" />
      <div className="grid grid-cols-3 gap-3">
        {cats.map((cat, index) => (
          <div key={cat} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur">
            <div className="mx-auto mb-3 flex h-12 w-12 items-end justify-center rounded-full bg-lime/20">
              <div className="h-7 w-8 rounded-t-full bg-lime/80" />
            </div>
            <p className="text-center text-xs font-semibold text-white">{cat}</p>
            <p className="text-center text-[10px] text-white/45">#{index + 1}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-lime/20 bg-lime/10 p-3">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/55">
          <span>Shelter donation</span>
          <span>72%</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10">
          <div className="h-full w-[72%] rounded-full bg-lime" />
        </div>
      </div>
    </div>
  )
}

function ProjectVisual({ type }: { type: Project['visual'] }) {
  if (type === 'water') {
    return <WaterQualityVisual />
  }

  return <CatAdoptionVisual />
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <AnimatedContent delay={100 + index * 110} distance={30} duration={1000}>
      <CardContainer containerClassName="py-0" className="w-full">
        <CardBody className="group/card relative h-auto min-h-[520px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-6 shadow-2xl shadow-black/40 transition-colors duration-300 hover:border-lime/40 md:p-7">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
          <div className="absolute inset-px rounded-[calc(2rem-1px)] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <CardItem
              translateZ={42}
              className="rounded-full border border-lime/25 bg-lime/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-lime"
            >
              {project.label}
            </CardItem>
            <CardItem translateZ={36} className="text-sm font-semibold text-white/35">
              0{index + 1}
            </CardItem>
          </div>

          <CardItem
            as="h3"
            translateZ={74}
            className="relative z-10 mt-10 max-w-md text-3xl font-bold leading-tight text-white md:text-4xl"
          >
            {project.title}
          </CardItem>

          <CardItem
            as="p"
            translateZ={58}
            className="relative z-10 mt-4 max-w-xl text-sm leading-relaxed text-white/65"
          >
            {project.description}
          </CardItem>

          <CardItem translateZ={92} className="relative z-10 mt-8 w-full">
            <ProjectVisual type={project.visual} />
          </CardItem>

          <div className="relative z-10 mt-8 grid grid-cols-3 gap-2">
            {project.metrics.map((metric, metricIndex) => (
              <CardItem
                key={metric}
                translateZ={32 + metricIndex * 12}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-3 text-center text-xs font-medium text-white/70"
              >
                {metric}
              </CardItem>
            ))}
          </div>

          <div className="relative z-10 mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <CardItem
                key={tag}
                translateZ={24}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55"
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
              Project pilihan dari portfolio saya, berfokus pada sistem praktis,
              alur produk, dan interface yang mudah digunakan.
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
