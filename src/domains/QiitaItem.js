// @flow
import QiitaBody from "domains/QiitaBody"

type Param = {
  title: string,
  body: QiitaBody,
}

class PrivateQiitaItem {
  _param: Param;

  constructor(param: Param) {
    this._param = param
  }

  title(): string {
    return this._param.title
  }

  body(): QiitaBody {
    return this._param.body
  }
}

export default class QiitaItem extends PrivateQiitaItem {

  toObject(): Object {
    return {
      title: this.title(),
      body: this.body().valueOf(),
    }
  }
}
