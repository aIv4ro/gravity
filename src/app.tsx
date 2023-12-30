import { useRef } from 'react'
import { useGravity } from './hooks/use-gravity'

function App () {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useGravity({ canvasRef })

  return (
    <>
      <canvas
        ref={canvasRef}
        className='bg-black'
      />
    </>
  )
}

export default App
