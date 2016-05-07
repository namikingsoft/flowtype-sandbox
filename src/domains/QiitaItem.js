// @flow
import QiitaBody from "domains/QiitaBody"

export type Param = {
  title: string,
  body: QiitaBody,
}

export default class QiitaItem {
  static privates: WeakMap<QiitaItem, Param> = new WeakMap();

  constructor(param: Param) {
    QiitaItem.privates.set(this, param)
  }

  title(): string {
    return QiitaItem.privates.get(this).title
  }

  body(): QiitaBody {
    return QiitaItem.privates.get(this).body
  }

  toObject(): Object {
    return {
      title: this.title(),
      body: this.body().valueOf(),
    }
  }
}
