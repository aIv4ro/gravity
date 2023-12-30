import { useEffect, useRef } from 'react'

export function useRequestFrame (
  onFrame: () => void
) {
  const requestRef = useRef<number>()

  const animate = () => {
    onFrame()
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current != null) {
        console.log('cancelAnimationFrame')
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [onFrame])
}
