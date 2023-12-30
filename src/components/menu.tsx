import { useState, type Dispatch } from 'react'
import { MenuIcon } from './icons/menu'
import { type Planet as PlanetType } from '../models/planet'

export function Menu ({
  paused, setPaused, planets
}: {
  paused: boolean
  setPaused: Dispatch<React.SetStateAction<boolean>>
  planets: PlanetType[]
}) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <aside
      className='absolute z-10 top-0 text-white p-2 max-h-screen overflow-y-auto'
    >
      <div
        className='grid p-2 bg-gray-900 shadow-lg gap-3'
      >
        <header className='flex items-center gap-10'>
          <button className='flex items-center gap-2 transition-colors bg-gray-800 hover:bg-gray-700 rounded px-2 py-2' onClick={() => { setShowMenu(prev => !prev) }}>
            <MenuIcon className={'transition-transform ' + (showMenu ? 'rotate-90' : '')} />
          </button>
        </header>
        <div className={`${showMenu ? 'flex flex-col gap-2' : 'hidden'}`}>
          <h2 className='text-2xl'>Actions</h2>
          <label
            className="flex items-center gap-2"
          >
            <input
              type="checkbox"
              checked={paused}
              onChange={(evt) => { setPaused(evt.target.checked) }}
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
