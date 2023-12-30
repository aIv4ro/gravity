import { useEffect, useMemo, useState } from 'react'
import { useOnWindowResize } from './use-window-resize'
import { type Planet } from '../models/planet'
import { type V2 } from '../models/v2'

interface Settings {
  paused: boolean
}

const simInteractions = 5000

export function useGravityCanvas ({
  canvasRef,
  planets,
  settings
}: {
  canvasRef: React.RefObject<HTMLCanvasElement>
  planets: Planet[]
  settings: Settings
}) {
  const [ctx, setCtx] = useState(canvasRef.current?.getContext('2d'))

  const planetSimulations = useMemo(() => {
    if (!settings.paused) return
    const planetsCopy = planets.map(planet => planet.clone({ trailLength: () => simInteractions }))
    for (let i = 0; i < simInteractions; i++) {
      planetsCopy.forEach(planet => { planet.interact(planetsCopy) })
      planetsCopy.forEach(planet => { planet.update() })
    }
    return planetsCopy.map(planet => ({ trail: planet.trail, texture: planet.texture }))
  }, [planets, settings.paused])

  useOnWindowResize(({ width, height }) => {
    if (canvasRef.current != null) {
      canvasRef.current.width = width
      canvasRef.current.height = height
    }
  })

  useEffect(() => {
    setCtx(canvasRef.current?.getContext('2d'))
  }, [canvasRef.current?.getContext('2d')])

  function drawTrail ({
    trail,
    texture,
    context
  }: {
    trail: V2[]
    texture: string
    context: CanvasRenderingContext2D
  }) {
    if (trail.length <= 1) return
    context.beginPath()
    context.moveTo(trail[0].x, trail[0].y)
    for (let i = 1; i < trail.length; i++) {
      context.lineTo(trail[i].x, trail[i].y)
    }
    context.strokeStyle = texture
    context.stroke()
    context.closePath()
  }

  function drawPlanet ({
    planet,
    context
  }: {
    planet: Planet
    context: CanvasRenderingContext2D
  }) {
    if (ctx == null) return
    const radius = planet.radius
    const diameter = radius * 2
    const x = planet.position.x - radius
    const y = planet.position.y - radius
    context.beginPath()
    context.roundRect(x, y, diameter, diameter, radius)
    context.fillStyle = planet.texture
    context.fill()
    context.closePath()
  }

  useEffect(() => {
    if (ctx == null) return
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    planets.forEach(planet => {
      drawPlanet({ planet, context: ctx })
      if (!settings.paused) drawTrail({ trail: planet.trail, texture: planet.texture, context: ctx })
    })
    if (settings.paused) planetSimulations?.forEach(sim => { drawTrail({ trail: sim.trail, texture: sim.texture, context: ctx }) })
  }, [ctx, planets, settings.paused])
}
