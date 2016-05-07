// @flow

export default class SingleValue<T> {
  static privates: WeakMap<SingleValue, T> = new WeakMap();

  constructor(value: T) {
    SingleValue.privates.set(this, value)
  }

  valueOf(): T {
    return SingleValue.privates.get(this)
  }

  toString(): string {
    return String(this.valueOf())
  }

  equals(target: SingleValue<T>): boolean {
    return this.valueOf() === target.valueOf()
  }
}
