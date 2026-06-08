'use client'

import { useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from 'react'

import { cn } from '@/lib/utils'

type ScrollRevealProps = {
  children: ReactNode
  scrollContainerRef?: RefObject<HTMLElement | null>
  enableBlur?: boolean
  baseOpacity?: number
  baseRotation?: number
  blurStrength?: number
  containerClassName?: string
  textClassName?: string
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function getText(children: ReactNode): string {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children)
  }

  if (Array.isArray(children)) {
    return children.map(getText).join('')
  }

  return ''
}

export function ScrollReveal({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName,
  textClassName,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const splitText = useMemo(() => getText(children).split(/(\s+)/).filter(Boolean), [children])
  const wordCount = splitText.filter((word) => !/^\s+$/.test(word)).length

  useEffect(() => {
    const element = containerRef.current

    if (!element) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setScrollProgress(1)
      return
    }

    const scroller = scrollContainerRef?.current
    let frame = 0

    const updateProgress = () => {
      cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect()
        const viewportHeight = scroller ? scroller.clientHeight : window.innerHeight
        const scrollerTop = scroller ? scroller.getBoundingClientRect().top : 0
        const elementTop = rect.top - scrollerTop
        const start = viewportHeight * 0.95
        const end = viewportHeight * 0.52
        const progress = (start - elementTop) / (start - end)

        setScrollProgress(clamp(progress, 0, 1))
      })
    }

    const scrollTarget = scroller ?? window

    updateProgress()
    scrollTarget.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      cancelAnimationFrame(frame)
      scrollTarget.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [scrollContainerRef])

  let wordIndex = 0

  return (
    <h2
      ref={containerRef}
      className={cn('scroll-reveal transform-gpu', containerClassName)}
      style={{
        transform: `rotate(${baseRotation * (1 - scrollProgress)}deg)`,
        transformOrigin: '0% 50%',
        willChange: 'transform',
      }}
    >
      <span className={cn('scroll-reveal-text block', textClassName)}>
        {splitText.map((word, index) => {
          if (/^\s+$/.test(word)) {
            return word
          }

          const currentIndex = wordIndex++
          const wordStart = (currentIndex / Math.max(wordCount, 1)) * 0.55
          const wordProgress = clamp((scrollProgress - wordStart) / 0.3, 0, 1)
          const opacity = baseOpacity + wordProgress * (1 - baseOpacity)
          const blur = enableBlur ? blurStrength * (1 - wordProgress) : 0

          return (
            <span
              key={`${word}-${index}`}
              className="word inline-block transform-gpu"
              style={{
                filter: `blur(${blur}px)`,
                opacity,
                transform: `translateY(${8 * (1 - wordProgress)}px)`,
                willChange: 'filter, opacity, transform',
              }}
            >
              {word}
            </span>
          )
        })}
      </span>
    </h2>
  )
}
