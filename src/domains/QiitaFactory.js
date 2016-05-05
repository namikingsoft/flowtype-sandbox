// @flow
import QiitaItem from "domains/QiitaItem"
import type { ItemObject } from "types/QiitaType"

export default class QiitaFactory {

  static createItem(row: ItemObject): QiitaItem {
    return new QiitaItem({
      title: row.title || "",
      body: row.body || "",
      user: row.user.id || "",
    })
  }
}
