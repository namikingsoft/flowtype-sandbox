// @flow
import { take, put, fork } from "redux-saga/effects"
import { REQUEST_INCREMENT, actions } from "actions/counter"

export function* requestIncrement(): any {
  while (true) {
    const ret: any = yield take(REQUEST_INCREMENT)
    yield put(actions.executeIncrement(ret.payload))
  }
}

export default function* root(): any {
  yield [
    fork(requestIncrement),
  ]
}
