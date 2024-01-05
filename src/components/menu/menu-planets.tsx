import { useGravityContext } from '../../hooks/gravity-context'
import { type Planet as PlanetType } from '../../models/planet'
import { Input } from '../common/input'

export function MenuPlanets () {
  const { planets } = useGravityContext()

  return (
    <>
      <h2 className='text-2xl'>
        Planets
      </h2>
      <ul className='flex flex-col gap-2'>
        {planets.map(planet => (
          <li
            key={planet.id}
          >
            <Planet
              planet={planet}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

function Planet ({
  planet
}: {
  planet: PlanetType
}) {
  const id = planet.id
  const { updatePlanet } = useGravityContext()

  return (
    <article
      className='flex flex-col p-2 bg-gray-800 rounded gap-2'
    >
      <h3 className='text-xl'>Name: {planet.name}</h3>
      <Input
        type='number'
        label='Position x: '
        value={planet.position.x}
        onChange={(value) => {
          updatePlanet({ id, position: planet.position.clone({ x: () => value }) })
        }}
      />
      <Input
        type='number'
        label='Position y: '
        value={planet.position.y}
        onChange={(value) => {
          updatePlanet({ id, position: planet.position.clone({ y: () => value }) })
        }}
      />
      <Input
        type='number'
        label='Velocity x: '
        value={planet.velocity.x}
        onChange={(value) => {
          updatePlanet({ id, velocity: planet.velocity.clone({ x: () => value }) })
        }}
      />
      <Input
        type='number'
        label='Velocity y: '
        value={planet.velocity.y}
        onChange={(value) => {
          updatePlanet({ id, velocity: planet.velocity.clone({ y: () => value }) })
        }}
      />
      <Input
        type='number'
        label='Mass: '
        value={planet.mass}
        onChange={(value) => {
          updatePlanet({ id, mass: value })
        }}
      />
    </article>
  )
}
