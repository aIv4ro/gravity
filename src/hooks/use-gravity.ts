import { useRequestFrame } from './use-request-frame'
import { useGravityCanvas } from './use-gravity-canvas'
import { usePlanets } from './use-planets'
import { useCallback, useState } from 'react'

export function useGravity ({
  canvasRef
}: {
  canvasRef: React.RefObject<HTMLCanvasElement>
}) {
  const { planets, calcInteractions } = usePlanets()
  const [paused, setPaused] = useState(false)

  const onFrame = useCallback(() => {
    if (paused) return
    calcInteractions()
  }, [paused])

  useRequestFrame(onFrame)

  useGravityCanvas({ canvasRef, planets })

  return {
    paused,
    setPaused,
    planets
  }
}
