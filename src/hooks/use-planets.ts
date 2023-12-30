import { useState } from 'react'
import { planets as initialPlanets } from '../constants/simulation'

export function usePlanets () {
  const [planets, setPlanets] = useState(initialPlanets)

  function update () {
    planets.forEach(planet => {
      planet.interact(planets)
    })
    planets.forEach(planet => {
      planet.update()
    })
    setPlanets([...planets])
  }

  return {
    planets,
    update
  }
}
