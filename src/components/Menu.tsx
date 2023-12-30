import { type Dispatch } from 'react'
import { PlayIcon } from './icons/play'
import { PauseIcon } from './icons/pause'

export function Menu ({
  paused, setPaused
}: {
  paused: boolean
  setPaused: Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <aside
      className='absolute z-10 top-0 text-white'>
      <button
        onClick={() => {
          console.log('clicked')
          setPaused(prev => !prev)
        }}
      >
        {paused ? <PlayIcon className='size-5' /> : <PauseIcon className='size-5' />}
      </button>
    </aside>
  )
}
