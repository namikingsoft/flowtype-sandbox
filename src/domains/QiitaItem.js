// @flow
type Param = {
  title: string,
  body: string,
  user: string,
}

export default class QiitaItem {
  static privates: WeakMap<QiitaItem, Param> = new WeakMap();

  constructor(param: Param) {
    QiitaItem.privates.set(this, param)
  }

  title(): string {
    return QiitaItem.privates.get(this).title
  }

  body(): string {
    return QiitaItem.privates.get(this).body
  }

  user(): string {
    return QiitaItem.privates.get(this).user
  }

  toObject(): Object {
    return {
      title: this.title(),
      body: this.body(),
      user: this.user(),
    }
  }
}
