import { useRef } from 'react'
import { planets } from '../models/planet'

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
