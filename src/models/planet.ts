import { G } from '../constants/simulation'
import { type V2 } from './v2'

export class Planet {
  private readonly _id = crypto.randomUUID()
  private readonly _trail: V2[] = []

  constructor (
    private readonly _name: string,
    private _position: V2,
    private _velocity: V2,
    private readonly _radius: number,
    private _mass: number,
    private readonly _texture: string,
    private readonly _trailLength = 100
  ) {}

  clone ({
    trailLength
  }: {
    trailLength?: () => number
  } = {}) {
    return new Planet(
      this.name,
      this.position.clone(),
      this.velocity.clone(),
      this.radius,
      this.mass,
      this.texture,
      trailLength?.() ?? this.trailLength
    )
  }

  get id () {
    return this._id
  }

  get name () {
    return this._name
  }

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

  get mass () {
    return this._mass
  }

  set mass (mass: number) {
    this._mass = mass
  }

  get radius () {
    return this._radius
  }

  get texture () {
    return this._texture
  }

  get trail () {
    return this._trail
  }

  get trailLength () {
    return this._trailLength
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
