import { AnimatedContent } from '@/components/reactbits/animated-content'
import { BlurText } from '@/components/reactbits/blur-text'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="text-center">
        <AnimatedContent delay={80} distance={16} duration={800}>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            hello, my name is <span className="text-foreground font-medium">Harri</span>
          </p>
        </AnimatedContent>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
          <BlurText text="WebDeveloper" className="justify-center" delay={160} stepDelay={38} />
        </h1>
        <h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mt-1 text-stroke"
        >
          <BlurText text="& AI Engineer" className="justify-center" delay={500} stepDelay={30} />
        </h2>
        <AnimatedContent delay={860} distance={14} duration={800}>
          <p className="text-sm md:text-base text-muted-foreground mt-6">
            based in indonesia
          </p>
        </AnimatedContent>
      </div>
    </section>
  )
}
