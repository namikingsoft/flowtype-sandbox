// @flow
import type { Action } from "types/Action"
import type { CounterPayload } from "types/Counter"

export const REQUEST_INCREMENT = "REQUEST_INCREMENT"
export const EXECUTE_INCREMENT = "EXECUTE_INCREMENT"
export const RESET = "RESET"

function requestIncrement(payload: number): Action<CounterPayload> {
  return { type: REQUEST_INCREMENT, payload }
}

function executeIncrement(payload: number): Action<CounterPayload> {
  return { type: EXECUTE_INCREMENT, payload }
}

function reset(): Action<CounterPayload> {
  return { type: RESET }
}

export const actions = {
  requestIncrement,
  executeIncrement,
  reset,
}
