import { AnimatedContent } from '@/components/reactbits/animated-content'
import { SpotlightCard } from '@/components/reactbits/spotlight-card'

export function CraftsSection() {
  return (
    <section id="crafts" className="bg-primary text-primary-foreground py-24 md:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedContent distance={18} duration={850}>
          <p className="text-sm font-medium mb-16 md:mb-24">crafts.</p>
        </AnimatedContent>
        
        {/* Grid of crafts mockups - matching the original design */}
        <AnimatedContent delay={100} distance={30} duration={1000}>
          <SpotlightCard className="bg-[#1a1a1a] p-4 md:p-6" spotlightColor="rgba(207, 255, 4, 0.16)">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {/* Column 1 - Tall phone mockup */}
            <div className="col-span-1 row-span-2 bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f] rounded-xl overflow-hidden relative group">
              <div className="absolute top-3 left-3 flex gap-1.5 z-10">
                <span className="text-[8px] text-white/60 bg-white/10 px-2 py-0.5 rounded-full">About</span>
                <span className="text-[8px] text-white/60 bg-white/10 px-2 py-0.5 rounded-full">Events</span>
                <span className="text-[8px] text-lime bg-lime/20 px-2 py-0.5 rounded-full">Play</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#1a3a1a] to-transparent flex items-end p-4">
                <div>
                  <p className="text-lime text-lg font-bold leading-tight">AY SOCCER</p>
                  <p className="text-lime text-lg font-bold leading-tight">OGETGER</p>
                </div>
              </div>
            </div>

            {/* Column 2 - Top: Person image placeholder */}
            <div className="bg-gradient-to-br from-[#3a3a3a] to-[#2a2a2a] rounded-xl overflow-hidden aspect-square relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMmEyYTJhIi8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMzUiIHI9IjE1IiBmaWxsPSIjNDQ0Ii8+CjxlbGxpcHNlIGN4PSI1MCIgY3k9Ijc1IiByeD0iMjUiIHJ5PSIyMCIgZmlsbD0iIzQ0NCIvPgo8L3N2Zz4=')] bg-cover bg-center opacity-60"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                  <p className="text-[8px] text-white/80">Portfolio</p>
                </div>
              </div>
            </div>

            {/* Column 3 - Lime Get Ready card */}
            <div className="bg-lime rounded-xl overflow-hidden aspect-square relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                <p className="text-black font-bold text-sm md:text-base">Get ready</p>
                <div className="mt-2 space-y-0.5 text-center">
                  <div className="flex items-center justify-between text-[9px] text-black/70 gap-3">
                    <span>Wake</span>
                    <span>7:00</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-black/70 gap-3">
                    <span>Sleep</span>
                    <span>4:45</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-black/70 gap-3">
                    <span>Run</span>
                    <span>1.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4 - Soccer field */}
            <div className="bg-gradient-to-b from-[#4a6a4a] to-[#3a5a3a] rounded-xl overflow-hidden aspect-square relative">
              <div className="absolute inset-0 flex items-end p-3">
                <div className="w-full">
                  <div className="h-8 border border-white/20 rounded"></div>
                </div>
              </div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/60 rounded-full"></div>
            </div>

            {/* Row 2 - Column 2: Find app */}
            <div className="bg-gradient-to-br from-lime/90 to-lime rounded-xl overflow-hidden aspect-square relative">
              <div className="absolute inset-0 flex flex-col p-3">
                <p className="text-black font-bold text-xl tracking-tighter">FIND</p>
                <div className="mt-auto">
                  <p className="text-[8px] text-black/60 font-medium">GAME AWAY</p>
                </div>
              </div>
            </div>

            {/* Row 2 - Column 3: Profile */}
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-xl overflow-hidden aspect-square relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-lime/20 border-2 border-lime/40 flex items-center justify-center overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-lime/30"></div>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-[10px] text-white font-medium">Valerie</p>
                  <p className="text-[8px] text-white/50">Vilela</p>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="h-1 bg-white/10 rounded-full">
                  <div className="h-1 bg-lime w-3/4 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Row 2 - Column 4: Success */}
            <div className="bg-lime rounded-xl overflow-hidden aspect-square relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg className="w-6 h-6 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mt-2 text-[10px] text-black font-medium">Congratulation</p>
              </div>
            </div>

            {/* Row 3 - Column 2: Dark profile */}
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl overflow-hidden aspect-square relative">
              <div className="absolute top-2 left-2">
                <span className="text-[8px] text-white/40">Taylor</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#333] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#444] to-[#333]"></div>
                </div>
              </div>
            </div>

            {/* Row 3 - Column 3: Empty profile circle */}
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-xl overflow-hidden aspect-square relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-white/20"></div>
              </div>
            </div>

            {/* Row 3 - Column 4: About section */}
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-xl overflow-hidden aspect-square relative p-3">
              <p className="text-[8px] text-white/40 mb-2">About</p>
              <div className="space-y-1.5">
                <div className="h-0.5 bg-white/10 rounded w-full"></div>
                <div className="h-0.5 bg-white/10 rounded w-4/5"></div>
                <div className="h-0.5 bg-white/10 rounded w-3/5"></div>
                <div className="h-0.5 bg-white/10 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          </SpotlightCard>
        </AnimatedContent>
      </div>
    </section>
  )
}
