import { Planet } from '../models/planet'
import { V2 } from '../models/v2'

export const G = 6.67408e-11
export const planets = [
  new Planet(
    'Sun',
    new V2(window.innerWidth / 2, window.innerHeight / 2),
    new V2(0, 0),
    50,
    2e10,
    'yellow'
  ),
  new Planet(
    'Earth',
    new V2(window.innerWidth / 2 - 200, window.innerHeight / 2),
    new V2(0, 1),
    10,
    5.972e4,
    'green'
  )
]
