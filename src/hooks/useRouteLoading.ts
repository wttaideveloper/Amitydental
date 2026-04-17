import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/** Short skeleton window after navigation (bonus: loading feel without backend). */
export function useRouteLoading(delayMs = 380) {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let cancelled = false
    void Promise.resolve().then(() => {
      if (!cancelled) setLoading(true)
    })
    const t = window.setTimeout(() => {
      if (!cancelled) setLoading(false)
    }, delayMs)
    return () => {
      cancelled = true
      window.clearTimeout(t)
    }
  }, [pathname, delayMs])

  return loading
}
