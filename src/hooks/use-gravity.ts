import { useRequestFrame } from './use-request-frame'
import { useGravityCanvas } from './use-gravity-canvas'
import { usePlanets } from './use-planets'
import { useCallback } from 'react'

export function useGravity ({
  canvasRef
}: {
  canvasRef: React.RefObject<HTMLCanvasElement>
}) {
  const { planets, update: updatePlanets } = usePlanets()

  const onFrame = useCallback(() => {
    updatePlanets()
  }, [])

  useRequestFrame(onFrame)
  useGravityCanvas({ canvasRef, planets })
}
