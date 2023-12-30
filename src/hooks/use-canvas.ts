import { useEffect, useState } from 'react'

export function useCanvas ({
  canvasRef
}: {
  canvasRef: React.RefObject<HTMLCanvasElement>
}) {
  const [ctx, setCtx] = useState(canvasRef.current?.getContext('2d'))

  useEffect(() => {
    setCtx(canvasRef.current?.getContext('2d'))
  }, [canvasRef.current?.getContext('2d')])

  return {
    ctx
  }
}
