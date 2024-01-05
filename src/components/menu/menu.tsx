import { MenuHeader } from './menu-header'
import { useGravityContext } from '../../hooks/gravity-context'
import { MenuActions } from './menu-actions'
import { MenuPlanets } from './menu-planets'

export function Menu () {
  const { showMenu } = useGravityContext()

  return (
    <aside
      className='absolute z-10 top-0 text-white p-2 max-h-screen overflow-y-auto'
    >
      <div
        className='grid p-2 bg-gray-900 shadow-lg gap-3'
      >
        <MenuHeader />
        <div className={`${showMenu ? 'flex flex-col gap-2' : 'hidden'}`}>
          <MenuActions />
          <MenuPlanets />
        </div>
      </div>
    </aside>
  )
}
