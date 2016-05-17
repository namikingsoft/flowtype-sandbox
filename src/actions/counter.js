// @flow
import { createAction } from "redux-actions"

export const REQUEST_INCREMENT = "REQUEST_INCREMENT"
export const EXECUTE_INCREMENT = "EXECUTE_INCREMENT"

export const actions = {
  requestIncrement: createAction(REQUEST_INCREMENT),
  executeIncrement: createAction(EXECUTE_INCREMENT),
}
