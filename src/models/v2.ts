function validateNumber (
  n: number, name?: string
) {
  if (isNaN(n)) {
    throw new Error(`${name} must be a number, got ${n}`)
  }
}

export class V2 {
  constructor (
    private _x: number,
    private _y: number
  ) {
    validateNumber(_x, 'x')
    validateNumber(_y, 'y')
  }

  clone () {
    return new V2(this._x, this._y)
  }

  get x () {
    return this._x
  }

  set x (value: number) {
    validateNumber(value, 'x')
    this._x = value
  }

  get y () {
    return this._y
  }

  set y (value: number) {
    validateNumber(value, 'y')
    this._y = value
  }

  add (v: V2) {
    return new V2(this.x + v.x, this.y + v.y)
  }

  sub (v: V2) {
    return new V2(this.x - v.x, this.y - v.y)
  }

  mulScalar (s: number) {
    return new V2(this.x * s, this.y * s)
  }

  sqrMagnitude () {
    return this.x * this.x + this.y * this.y
  }

  magnitude (): number {
    return Math.sqrt(this.sqrMagnitude())
  }

  normalize () {
    const length = this.magnitude()
    return new V2(this.x / length, this.y / length)
  }
}
