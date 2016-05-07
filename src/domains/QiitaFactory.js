// @flow
import QiitaItem from "domains/QiitaItem"
import QiitaBody from "domains/QiitaBody"
import type { ItemObject } from "types/QiitaType"

export default class QiitaFactory {

  static createItem(row: ItemObject): QiitaItem {
    return new QiitaItem({
      title: row.title || "",
      body: new QiitaBody(row.body || ""),
    })
  }
}
