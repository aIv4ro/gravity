import { useEffect, useState } from 'react'
import { useOnWindowResize } from './use-window-resize'
import { type Planet } from '../models/planet'

export function useGravityCanvas ({
  canvasRef,
  planets
}: {
  canvasRef: React.RefObject<HTMLCanvasElement>
  planets: Planet[]
}) {
  const [ctx, setCtx] = useState(canvasRef.current?.getContext('2d'))

  useOnWindowResize(({ width, height }) => {
    if (canvasRef.current != null) {
      canvasRef.current.width = width
      canvasRef.current.height = height
    }
  })

  useEffect(() => {
    setCtx(canvasRef.current?.getContext('2d'))
  }, [canvasRef.current?.getContext('2d')])

  useEffect(() => {
    if (ctx == null) return
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    planets.forEach(planet => {
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
  }, [ctx, planets])
}
