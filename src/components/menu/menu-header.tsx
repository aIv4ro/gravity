import { useGravityContext } from '../../hooks/gravity-context'
import { MenuIcon } from '../icons/menu'

export function MenuHeader () {
  const { showMenu, toggleShowMenu } = useGravityContext()

  return (
    <header className='flex items-center gap-10'>
    <button
      className='flex items-center gap-2 transition-colors bg-gray-800 hover:bg-gray-700 rounded px-2 py-2'
      onClick={toggleShowMenu}
    >
      <MenuIcon className={'transition-transform ' + (showMenu ? 'rotate-90' : '')} />
    </button>
  </header>
  )
}
