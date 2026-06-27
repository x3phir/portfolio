import { ArrowUp } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-primary px-6 py-12 text-primary-foreground md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="text-2xl font-black uppercase tracking-tight">Harr</p>
            <p className="mt-1 text-xs text-white/40 sm:text-sm">
              Web Developer &amp; AI Engineer &mdash; based in Indonesia
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white sm:text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white sm:text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#top"
              className="flex h-10 w-10 items-center justify-center border border-white/20 transition-colors hover:bg-white hover:text-black"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 md:text-xs">
          &copy; {new Date().getFullYear()} Harri. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
