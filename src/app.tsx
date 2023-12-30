import { useRef } from 'react'
import { useGravity } from './hooks/use-gravity'
import { Menu } from './components/menu'

function App () {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { paused, setPaused } = useGravity({ canvasRef })

  return (
    <>
      <Menu paused={paused} setPaused={setPaused} />
      <canvas
        ref={canvasRef}
        className='bg-black'
      />
    </>
  )
}

export default App
