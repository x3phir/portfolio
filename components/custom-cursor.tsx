'use client'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const hasMovedRef = useRef(false)
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (hover: hover)')
    let isEnabled = media.matches

    const syncCursorAvailability = () => {
      isEnabled = media.matches
      setEnabled(isEnabled)
      document.body.classList.toggle('custom-cursor-enabled', isEnabled)

      if (!isEnabled) {
        hasMovedRef.current = false
        setVisible(false)
        setPressed(false)
      }
    }

    const moveCursor = (event: PointerEvent) => {
      if (!isEnabled) {
        return
      }

      const transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`

      if (dotRef.current) {
        dotRef.current.style.transform = transform
      }

      if (ringRef.current) {
        ringRef.current.style.transform = transform
      }

      if (!hasMovedRef.current) {
        hasMovedRef.current = true
        setVisible(true)
      }
    }

    const showCursor = () => {
      if (isEnabled && hasMovedRef.current) {
        setVisible(true)
      }
    }

    const hideCursor = () => setVisible(false)
    const pressCursor = () => setPressed(true)
    const releaseCursor = () => setPressed(false)

    syncCursorAvailability()

    media.addEventListener('change', syncCursorAvailability)
    window.addEventListener('pointermove', moveCursor)
    window.addEventListener('pointerenter', showCursor)
    window.addEventListener('pointerdown', pressCursor)
    window.addEventListener('pointerup', releaseCursor)
    window.addEventListener('blur', hideCursor)
    document.addEventListener('mouseleave', hideCursor)

    return () => {
      document.body.classList.remove('custom-cursor-enabled')
      media.removeEventListener('change', syncCursorAvailability)
      window.removeEventListener('pointermove', moveCursor)
      window.removeEventListener('pointerenter', showCursor)
      window.removeEventListener('pointerdown', pressCursor)
      window.removeEventListener('pointerup', releaseCursor)
      window.removeEventListener('blur', hideCursor)
      document.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <>
      <div
        ref={ringRef}
        className={cn(
          'custom-cursor-ring',
          visible && 'custom-cursor-visible',
          pressed && 'custom-cursor-pressed',
        )}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className={cn('custom-cursor-dot', visible && 'custom-cursor-visible')}
        aria-hidden="true"
      />
    </>
  )
}
