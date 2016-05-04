/* @flow */
/* eslint-disable */

import assert from "power-assert"
import MyLib from "mylib"

describe("MyLib", () => {
  describe("method", () => {
    it("should be return string number", () => {
      const mylib = new MyLib()
      assert(mylib.method(1234) === "1234")
    })
  })
})
