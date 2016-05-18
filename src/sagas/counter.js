// @flow
import { take, put, fork } from "redux-saga/effects"
import { REQUEST_INCREMENT, actions } from "actions/counter"
import type { Action } from "types/Action"
import type { CounterPayload } from "types/Counter"

export function* requestIncrement(): any {
  for (;;) {
    const action: Action<CounterPayload> = yield take(REQUEST_INCREMENT)
    yield put(actions.executeIncrement(action.payload.num))
  }
}

export default function* root(): any {
  yield [
    fork(requestIncrement),
  ]
}
