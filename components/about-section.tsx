import { AnimatedContent } from '@/components/reactbits/animated-content'
import { ScrollReveal } from '@/components/reactbits/scroll-reveal'

export function AboutSection() {
  return (
    <section id="about" className="bg-primary text-primary-foreground py-24 md:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedContent distance={18} duration={850}>
          <p className="text-sm font-medium mb-16 md:mb-24">about.</p>
        </AnimatedContent>
        
        <div className="space-y-8">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
            containerClassName="my-0"
            textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight lg:leading-tight text-balance"
          >
            I turn ideas into real products using web technologies and AI, focusing on execution speed and practical problem solving.
          </ScrollReveal>
          
          <AnimatedContent delay={180} direction="left" distance={24} duration={900}>
            <div className="flex justify-end">
              <p className="text-xs md:text-sm text-primary-foreground/70 max-w-sm text-right leading-relaxed">
                Driven by curiosity and execution. I build solutions that 
                are not only functional but also efficient and 
                thoughtfully designed.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
