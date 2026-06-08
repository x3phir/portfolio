'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right'

type AnimatedContentProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  distance?: number
  duration?: number
  once?: boolean
  threshold?: number
}

function getOffset(direction: Direction, distance: number) {
  switch (direction) {
    case 'down':
      return { x: 0, y: -distance }
    case 'left':
      return { x: distance, y: 0 }
    case 'right':
      return { x: -distance, y: 0 }
    case 'up':
    default:
      return { x: 0, y: distance }
  }
}

export function AnimatedContent({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 900,
  once = true,
  threshold = 0.2,
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once, threshold])

  const offset = getOffset(direction, distance)
  const transform = isVisible
    ? 'translate3d(0, 0, 0) scale(1)'
    : `translate3d(${offset.x}px, ${offset.y}px, 0) scale(0.98)`

  const style: CSSProperties = {
    filter: isVisible ? 'blur(0px)' : 'blur(14px)',
    opacity: isVisible ? 1 : 0,
    transform,
    transition: [
      `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      `filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    ].join(', '),
    willChange: 'opacity, transform, filter',
  }

  return (
    <div ref={ref} className={cn('transform-gpu', className)} style={style}>
      {children}
    </div>
  )
}
