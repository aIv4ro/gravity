import { useEffect } from 'react'

export function useOnWindowResize (
  fn: (size: { width: number, height: number }) => void
) {
  useEffect(() => {
    function onResize () {
      fn({ width: window.innerWidth, height: window.innerHeight })
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
}
