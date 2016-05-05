/* @flow */
import assert from "power-assert"
import QiitaItem from "domains/QiitaItem"

describe("QiitaItem", () => {
  let item: QiitaItem

  beforeEach(() => {
    item = new QiitaItem({
      title: "Title",
      body: "Body",
      user: "User",
    })
  })

  describe("new", () => {
    it("should be return new instance", () => {
      assert(item instanceof QiitaItem)
    })
  })

  describe("title", () => {
    it("should be return initial value", () => {
      assert(item.title() === "Title")
    })
  })

  describe("body", () => {
    it("should be return initial value", () => {
      assert(item.body() === "Body")
    })
  })

  describe("user", () => {
    it("should be return initial value", () => {
      assert(item.user() === "User")
    })
  })

  describe("toObject", () => {
    it("should be return object has initial value", () => {
      assert.deepEqual(item.toObject(), {
        title: "Title",
        body: "Body",
        user: "User",
      })
    })
  })
})
