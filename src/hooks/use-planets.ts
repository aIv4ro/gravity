import { useRef } from 'react'
import { planets } from '../constants/simulation'

export function usePlanets () {
  const planetsRef = useRef(planets)

  function update () {
    planetsRef.current.forEach(planet => {
      planet.interact(planetsRef.current)
    })
    planetsRef.current.forEach(planet => {
      planet.update()
    })
  }

  return {
    planetsRef,
    update
  }
}
