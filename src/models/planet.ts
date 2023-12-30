import { G } from '../constants/simulation'
import { type V2 } from './v2'

export class Planet {
  private readonly _trail: V2[] = []
  private readonly _trailLength = 100

  constructor (
    private _position: V2,
    private _velocity: V2,
    private readonly _radius: number,
    private readonly _mass: number,
    private readonly _texture: string
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

  get texture () {
    return this._texture
  }

  get trail () {
    return this._trail
  }

  interact (planets: Planet[]) {
    planets.forEach(planet => {
      if (planet === this) return
      const sub = planet.position.clone().sub(this.position)
      const sqrDst = sub.magnitude()
      const fDir = sub.normalize()
      const acc = fDir.mulScalar(G * planet.mass / sqrDst)
      this.velocity = this.velocity.add(acc)
    })
  }

  private updateTrail () {
    this.trail.push(this.position.clone())
    if (this.trail.length > this._trailLength) {
      this.trail.shift()
    }
  }

  update () {
    this.updateTrail()
    this.position = this.position.add(this.velocity)
  }
}
