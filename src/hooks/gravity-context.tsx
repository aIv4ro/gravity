import { createContext, useContext } from 'react'
import { type useGravity } from './use-gravity'

type GravityContextType = ReturnType<typeof useGravity>

export const GravityContext = createContext<GravityContextType | null>(null)

export function useGravityContext () {
  const context = useContext(GravityContext)
  if (context == null) {
    throw new Error('useGravityContext must be used within a GravityProvider')
  }
  return context
}
