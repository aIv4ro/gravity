import { useGravityContext } from '../../hooks/gravity-context'
import { type Planet as PlanetType } from '../../models/planet'

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
  return (
    <article
      className='flex p-2 bg-gray-800 rounded gap-2'
    >
      <h3 className='text-xl'>
        Name: {planet.name}
      </h3>
    </article>
  )
}
