'use client'

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'

import { cn } from '@/lib/utils'

type BlurTextProps = {
  text: string
  className?: string
  blur?: number
  by?: 'character' | 'word'
  delay?: number
  distance?: number
  duration?: number
  stepDelay?: number
}

function splitText(text: string, by: 'character' | 'word') {
  if (by === 'word') {
    return text.split(/(\s+)/).filter(Boolean)
  }

  return Array.from(text)
}

export function BlurText({
  text,
  className,
  blur = 12,
  by = 'character',
  delay = 0,
  distance = 20,
  duration = 800,
  stepDelay = 34,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const parts = useMemo(() => splitText(text, by), [by, text])

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
          observer.unobserve(element)
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={cn('inline-flex flex-wrap', className)} aria-label={text}>
      {parts.map((part, index) => {
        const isWhitespace = /^\s+$/.test(part)

        if (isWhitespace) {
          return (
            <span key={`${part}-${index}`} aria-hidden="true" className="whitespace-pre">
              {part}
            </span>
          )
        }

        const style: CSSProperties = {
          filter: isVisible ? 'blur(0px)' : `blur(${blur}px)`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
          transition: [
            `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + index * stepDelay}ms`,
            `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + index * stepDelay}ms`,
            `filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + index * stepDelay}ms`,
          ].join(', '),
          willChange: 'opacity, transform, filter',
        }

        return (
          <span key={`${part}-${index}`} aria-hidden="true" className="inline-block transform-gpu" style={style}>
            {part}
          </span>
        )
      })}
    </span>
  )
}
