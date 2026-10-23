import { useEffect, useRef } from 'react'

/**
 * useScrollReveal
 *
 * Watches a ref'd element with IntersectionObserver and adds the
 * `is-visible` class once it scrolls into view, which triggers the
 * fade + rise transition defined in styles/index.css (.reveal).
 *
 * Kept intentionally simple: one observer per element, one class toggle.
 * The element stays revealed once shown (no re-hiding on scroll-up),
 * which feels calmer than re-triggering the animation every time.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect users who've asked for less motion: show immediately.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return ref
}
