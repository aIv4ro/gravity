import { type RefObject } from 'react'
import { useGravity } from '../hooks/use-gravity'
import { GravityContext } from '../hooks/gravity-context'

export function GravityProvider ({
  children,
  canvasRef
}: {
  children: React.ReactNode
  canvasRef: RefObject<HTMLCanvasElement>
}) {
  const gravity = useGravity({ canvasRef })

  return (
    <GravityContext.Provider value={gravity}>
      {children}
    </GravityContext.Provider>
  )
}
