import { useRequestFrame } from './use-request-frame'
import { useGravityCanvas } from './use-gravity-canvas'
import { usePlanets } from './use-planets'
import { useCallback } from 'react'

export function useGravity ({
  canvasRef
}: {
  canvasRef: React.RefObject<HTMLCanvasElement>
}) {
  const { draw } = useGravityCanvas({ canvasRef })
  const { planetsRef, update: updatePlanets } = usePlanets()

  const onFrame = useCallback(() => {
    updatePlanets()
    draw({ planets: planetsRef.current })
  }, [draw])

  useRequestFrame(onFrame)
}
