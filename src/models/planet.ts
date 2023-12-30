import { V2 } from './v2'

const G = 6.67408e-11

export class Planet {
  constructor (
    private _position: V2,
    private _velocity: V2,
    private readonly _radius: number,
    private readonly _mass: number
  ) {}

  get position () {
    return this._position
  }

  set position (position: V2) {
    this._position = position
  }

  get velocity () {
    return this._velocity
  }

  set velocity (velocity: V2) {
    this._velocity = velocity
  }

  get radius () {
    return this._radius
  }

  get mass () {
    return this._mass
  }

  interact (planets: Planet[]) {
    planets.forEach(planet => {
      if (planet === this) return
      const sub = planet.position.clone().sub(this.position)
      const sqrDst = sub.magnitude()
      const fDir = sub.normalize()
      const acc = fDir.mulScalar(G * this.mass / sqrDst)
      this.velocity = this.velocity.add(acc)
    })
  }

  update () {
    this.position = this.position.add(this.velocity)
  }
}

export const planets = [
  new Planet(new V2(400, 200), new V2(0, 0), 10, 100000000),
  new Planet(new V2(800, 200), new V2(0, 0), 10, 100000000)
]
