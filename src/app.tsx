import { useRef } from 'react'
import { Menu } from './components/menu/menu'
import { GravityProvider } from './components/gravity-provider'

function App () {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <GravityProvider canvasRef={canvasRef}>
      <Menu />
      <canvas
        ref={canvasRef}
        className='bg-black'
      />
    </GravityProvider>
  )
}

export default App
