// @flow

/**
 * non-nullable and maybe type
 */
// error
const mustString = (isNull: boolean): string => isNull ? "String" : null
// success
const maybeString = (isNull: boolean): ?string => isNull ? "String" : null

