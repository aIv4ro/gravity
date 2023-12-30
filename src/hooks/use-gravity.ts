import { useRequestFrame } from './use-request-frame'
import { useOnWindowResize } from './use-window-resize'
import { useCanvas } from './use-canvas'
import { usePlanets } from './use-planets'
import { useCallback } from 'react'

export function useGravity ({
  canvasRef
}: {
  canvasRef: React.RefObject<HTMLCanvasElement>
}) {
  const { ctx } = useCanvas({ canvasRef })
  const { planetsRef, update: updatePlanets } = usePlanets()

  useOnWindowResize(({ width, height }) => {
    if (canvasRef.current != null) {
      canvasRef.current.width = width
      canvasRef.current.height = height
    }
  })

  const onFrame = useCallback(() => {
    if (ctx == null) return
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    updatePlanets()
    planetsRef.current.forEach(planet => {
      const radius = planet.radius
      const diameter = radius * 2
      const x = planet.position.x - radius
      const y = planet.position.y - radius
      ctx.beginPath()
      ctx.roundRect(x, y, diameter, diameter, radius)
      ctx.fillStyle = planet.texture
      ctx.fill()
      ctx.closePath()
      if (planet.trail.length > 1) {
        ctx.beginPath()
        ctx.moveTo(planet.trail[0].x, planet.trail[0].y)
        for (let i = 1; i < planet.trail.length; i++) {
          ctx.lineTo(planet.trail[i].x, planet.trail[i].y)
        }
        ctx.strokeStyle = planet.texture
        ctx.stroke()
        ctx.closePath()
      }
    })
  }, [ctx])

  useRequestFrame(onFrame)
}
