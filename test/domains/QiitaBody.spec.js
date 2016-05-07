// @flow
import assert from "power-assert"
import QiitaBody from "domains/QiitaBody"

describe("QiitaBody", () => {
  let body: QiitaBody

  before(() => {
    body = new QiitaBody("Body")
  })

  describe("new", () => {
    it("should be return new instance", () => {
      assert(body instanceof QiitaBody)
    })
  })
})
