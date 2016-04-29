// @flow

/**
 * non-nullable and maybe type
 */
// error
// const mustString = (isNull: boolean): string => isNull ? "String" : null
// success
const maybeString = (isNull: boolean): ?string => isNull ? "String" : null
console.log(
  maybeString(false)
)

/**
 * third-party module
 */
import {map} from "lodash"
console.log(
  map([1, 2, 3], x => x * 2)
)

/**
 * my module
 *
 */
import MyLib from "./mylib"
const lib = new MyLib()
console.log(
  lib.method(1234)
)
// error
// lib.method("1234")
