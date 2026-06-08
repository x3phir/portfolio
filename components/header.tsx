'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [lang, setLang] = useState<'ID' | 'EN'>('EN')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Harr
        </Link>
        <nav className="flex items-center gap-8">
          <Link 
            href="#about" 
            className="text-sm font-medium hover:opacity-70 transition-opacity"
          >
            about
          </Link>
          <Link 
            href="#skills" 
            className="text-sm font-medium hover:opacity-70 transition-opacity"
          >
            skills
          </Link>
          <Link 
            href="#crafts" 
            className="text-sm font-medium hover:opacity-70 transition-opacity"
          >
            crafts
          </Link>
          <button 
            onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
            className="text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-1"
          >
            <span className={lang === 'ID' ? 'opacity-100' : 'opacity-40'}>ID</span>
            <span className="opacity-40">/</span>
            <span className={lang === 'EN' ? 'opacity-100' : 'opacity-40'}>EN</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
