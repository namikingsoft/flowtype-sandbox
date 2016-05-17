// @flow
import request from "request-promise"
import QiitaFactory from "domains/QiitaFactory"
import QiitaItem from "domains/QiitaItem"
import type { AuthHeader } from "types/StandardType"
import type { ItemObject } from "types/QiitaType"

const API_BASE_URI = "https://feedforce.qiita.com/api/v2"

class PrivateQiitaRepository {
  _accessToken: string;

  constructor(accessToken: string) {
    this._accessToken = accessToken
  }

  accessToken(): string {
    return this._accessToken
  }
}

export default class QiitaRepository extends PrivateQiitaRepository {

  async search(query: string): Promise<Array<QiitaItem>> {
    return (await request({
      method: "GET",
      uri: `${API_BASE_URI}/items`,
      qs: {
        query,
        per_page: 10,
      },
      json: true,
      ...this.auth(),
    }))
    .map((x: ItemObject) => QiitaFactory.createItem(x))
  }

  auth(): AuthHeader {
    return {
      headers: {
        Authorization: `Bearer ${this.accessToken()}`,
      },
    }
  }
}
