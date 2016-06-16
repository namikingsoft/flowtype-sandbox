// @flow
import assert from "power-assert"

type SwitchType =
  { type: "LITERAL1", key: string }
| { type: "LITERAL2", key: number }

describe("SwitchType", () => {
  it("should be switch type by LITERAL1", () => {
    const obj: SwitchType = { type: "LITERAL1", key: "test" }
    if (obj.type === "LITERAL1") {
      const str: string = obj.key
      assert(str === "test")
    }
    // type error
    // const str: string = obj.key;
    // assert(str === "test")
  })
  it("should be switch type by LITERAL2", () => {
    const obj: SwitchType = { type: "LITERAL2", key: 1234 }
    if (obj.type === "LITERAL2") {
      const num: number = obj.key
      assert(num === 1234)
    }
    // type error
    // const num: number = obj.key;
    // assert(num === 1234)
  })
})
