/* @flow */
import assert from "power-assert"
import QiitaItem from "domains/QiitaItem"
import QiitaBody from "domains/QiitaBody"

describe("QiitaItem", () => {
  let item: QiitaItem
  let body: QiitaBody
  let title: string

  beforeEach(() => {
    title = "Title"
    body = new QiitaBody("Body")
    item = new QiitaItem({ title, body })
  })

  describe("new", () => {
    it("should be return new instance", () => {
      assert(item instanceof QiitaItem)
    })
  })

  describe("title", () => {
    it("should be return initial value", () => {
      assert(item.title() === title)
    })
  })

  describe("body", () => {
    it("should be return initial value", () => {
      assert(item.body() === body)
    })
  })

  describe("toObject", () => {
    it("should be return object has initial value", () => {
      assert.deepEqual(item.toObject(), {
        title: "Title",
        body: "Body",
      })
    })
  })
})
