import { useRequestFrame } from './use-request-frame'
import { useGravityCanvas } from './use-gravity-canvas'
import { usePlanets } from './use-planets'
import { useCallback } from 'react'
import { useBoolean } from './use-boolean'

export function useGravity ({
  canvasRef
}: {
  canvasRef: React.RefObject<HTMLCanvasElement>
}) {
  const { planets, calcInteractions, updatePlanet } = usePlanets()
  const { value: paused, toggle: togglePause } = useBoolean(true)
  const { value: showMenu, toggle: toggleShowMenu } = useBoolean()

  const onFrame = useCallback(() => {
    if (paused) return
    calcInteractions()
  }, [paused])

  useRequestFrame(onFrame)

  const settings = { paused }
  useGravityCanvas({ canvasRef, planets, settings })

  return {
    paused,
    togglePause,
    showMenu,
    toggleShowMenu,
    planets,
    updatePlanet
  }
}
