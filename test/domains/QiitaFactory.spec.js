/* @flow */
import assert from "power-assert"
import QiitaFactory from "domains/QiitaFactory"
import QiitaItem from "domains/QiitaItem"

describe("QiitaFactory", () => {
  describe("createItem", () => {
    const item = QiitaFactory.createItem({
      title: "Title",
      body: "Body",
      user: {
        id: "User",
      },
    })
    it("should be return new instance of QiitaItem", () => {
      assert(item instanceof QiitaItem)
    })
    it("should be return correct object", () => {
      assert.deepEqual(item.toObject(), {
        title: "Title",
        body: "Body",
        user: "User",
      })
    })
  })
})
