import { useState } from 'react'
import { planets as initialPlanets } from '../constants/simulation'
import { type Planet } from '../models/planet'

interface UpdatePlanet {
  id: typeof Planet.prototype.id
  position?: typeof Planet.prototype.position
  velocity?: typeof Planet.prototype.velocity
  mass?: typeof Planet.prototype.mass
}

export function usePlanets () {
  const [planets, setPlanets] = useState(initialPlanets)

  function calcInteractions () {
    planets.forEach(planet => {
      planet.interact(planets)
    })
    planets.forEach(planet => {
      planet.update()
    })
    setPlanets([...planets])
  }

  function updatePlanet ({
    id, position, velocity, mass
  }: UpdatePlanet) {
    const planet = planets.find(planet => planet.id === id)
    if (planet == null) return
    planet.position = position ?? planet.position
    planet.velocity = velocity ?? planet.velocity
    planet.mass = mass ?? planet.mass
    setPlanets([...planets])
  }

  return {
    planets,
    calcInteractions,
    updatePlanet
  }
}
