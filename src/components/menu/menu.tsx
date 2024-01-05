import { type Planet as PlanetType } from '../../models/planet'
import { MenuHeader } from './menu-header'
import { useGravityContext } from '../../hooks/gravity-context'

export function Menu () {
  const { paused, togglePause, showMenu, planets } = useGravityContext()

  return (
    <aside
      className='absolute z-10 top-0 text-white p-2 max-h-screen overflow-y-auto'
    >
      <div
        className='grid p-2 bg-gray-900 shadow-lg gap-3'
      >
        <MenuHeader />
        <div className={`${showMenu ? 'flex flex-col gap-2' : 'hidden'}`}>
          <h2 className='text-2xl'>Actions</h2>
          <label
            className="flex items-center gap-2"
          >
            <input
              type="checkbox"
              checked={paused}
              onChange={togglePause}
            />
            Paused
          </label>
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
        </div>
      </div>
    </aside>
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
