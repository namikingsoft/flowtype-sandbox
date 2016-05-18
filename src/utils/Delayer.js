// @flow

class PrivateDelayer {
  _msec: number;

  constructor(msec: number) {
    this._msec = msec
  }

  msec(): number {
    return this._msec
  }
}

export default class Delayer extends PrivateDelayer {

  execute<T>(value: T): Promise<T> {
    return new Promise(resolve =>
      setTimeout(() => resolve(value), this.msec())
    )
  }
}
