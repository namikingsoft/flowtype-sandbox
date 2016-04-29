// @flow

/**
 * non-nullable and maybe type
 */
// error
const mustString = (isNull: boolean): string => isNull ? "String" : null
// success
const maybeString = (isNull: boolean): ?string => isNull ? "String" : null

/**
 * third-party library
 */
import {map} from 'lodash'
console.log(
  map([1, 2, 3], x => x * 2)
)
