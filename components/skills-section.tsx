import { 
  SiGo, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiNodedotjs,
  SiGithub,
  SiDocker,
  SiFigma,
  SiVercel,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
} from '@icons-pack/react-simple-icons'

import { AnimatedContent } from '@/components/reactbits/animated-content'

// Custom AWS Icon
function AwsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.256-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.07 2.07 0 0 1-.223.08.396.396 0 0 1-.104.016c-.128 0-.191-.088-.191-.272v-.391c0-.141.016-.247.056-.319.04-.072.128-.151.272-.231.28-.152.615-.28 1.006-.375.391-.104.806-.152 1.245-.152.95 0 1.644.216 2.091.647.439.432.663 1.086.663 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.751-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311l-1.876-6.172a1.25 1.25 0 0 1-.08-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.112.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.062 1.062 0 0 1-.063.2l-1.923 6.17c-.048.16-.104.264-.168.312a.549.549 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.272-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.184.072-.272.207-.272.056 0 .112.008.167.024.056.016.136.056.232.104.32.144.668.256 1.038.336.375.08.743.12 1.117.12.59 0 1.046-.104 1.36-.312.32-.208.479-.504.479-.878 0-.263-.08-.48-.247-.655-.168-.176-.486-.328-.95-.472l-1.367-.423c-.686-.215-1.197-.535-1.517-.962-.32-.424-.48-.895-.48-1.406 0-.407.088-.764.264-1.07.176-.306.407-.568.694-.775.287-.215.614-.375.983-.488A4.2 4.2 0 0 1 18.8 6c.207 0 .422.008.638.032.223.024.43.056.63.104.192.04.375.088.544.152.168.063.295.127.375.191.128.072.224.16.272.264.047.096.071.232.071.416v.375c0 .184-.071.28-.207.28-.072 0-.184-.032-.343-.104a4.5 4.5 0 0 0-1.901-.407c-.535 0-.958.088-1.262.27-.303.184-.455.472-.455.87 0 .272.096.503.287.695.192.191.543.375 1.054.543l1.325.41c.678.207 1.165.495 1.46.863.295.368.44.791.44 1.261 0 .415-.088.79-.255 1.117-.168.328-.399.607-.703.838a3.17 3.17 0 0 1-1.046.535c-.4.127-.838.19-1.313.19z"/>
      <path d="M21.753 18.308c-2.608 1.926-6.394 2.95-9.655 2.95-4.568 0-8.68-1.687-11.796-4.494-.244-.22-.025-.52.27-.35 3.36 1.96 7.514 3.137 11.805 3.137 2.894 0 6.078-.6 9.01-1.846.44-.19.814.29.366.603z"/>
      <path d="M22.77 17.127c-.334-.428-2.212-.203-3.055-.102-.255.031-.294-.191-.064-.359 1.495-1.053 3.951-.748 4.238-.396.287.359-.076 2.837-1.479 4.019-.216.183-.422.086-.326-.151.316-.791 1.02-2.583.686-3.011z"/>
    </svg>
  )
}

// Custom Git icon
function GitIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  )
}

const languages = [
  { name: 'Go', icon: SiGo },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
]

const tools = [
  { name: 'GitHub', icon: SiGithub },
  { name: 'AWS', icon: AwsIcon },
  { name: 'Docker', icon: SiDocker },
  { name: 'Figma', icon: SiFigma },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: GitIcon },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        <AnimatedContent distance={18} duration={850}>
          <p className="text-sm font-medium mb-16 md:mb-24">skills.</p>
        </AnimatedContent>
        
        <div className="space-y-16">
          {/* Languages & Frameworks */}
          <AnimatedContent delay={80} distance={26} duration={950}>
            <p className="text-sm text-muted-foreground text-center mb-10">
              language & <span className="font-semibold text-foreground">framework</span>
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {languages.map((item) => (
                <div 
                  key={item.name} 
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-transform duration-300 ease-out"
                  title={item.name}
                >
                  <item.icon className="w-full h-full" />
                </div>
              ))}
            </div>
          </AnimatedContent>
          
          {/* Tools */}
          <AnimatedContent delay={170} distance={26} duration={950}>
            <p className="text-sm text-muted-foreground text-center mb-10">
              <span className="font-semibold text-foreground">tools</span>
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {tools.map((item) => (
                <div 
                  key={item.name} 
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-transform duration-300 ease-out"
                  title={item.name}
                >
                  <item.icon className="w-full h-full" />
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
