import { useGravityContext } from '../../hooks/gravity-context'

export function MenuActions () {
  const { paused, togglePause } = useGravityContext()

  return (
    <>
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
    </>
  )
}
