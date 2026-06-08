'use client'

import { useRef, useState, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  spotlightColor?: string
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(207, 255, 4, 0.14)',
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  return (
    <div
      ref={cardRef}
      className={cn('relative overflow-hidden rounded-2xl', className)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onMouseMove={(event) => {
        const rect = cardRef.current?.getBoundingClientRect()

        if (!rect) {
          return
        }

        setPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 ease-out"
        style={{
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 68%)`,
          opacity: isActive ? 1 : 0,
        }}
      />
      <div className="relative z-0">{children}</div>
    </div>
  )
}
