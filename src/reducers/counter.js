// @flow
import { handleActions } from "redux-actions"
import { EXECUTE_INCREMENT } from "actions/counter"

export interface Counter {
  num: number;
}

const initialState = {
  num: 0,
}

export default handleActions({
  [EXECUTE_INCREMENT]: (state, { payload }) => ({
    ...state,
    num: state.num + payload,
  }),
}, initialState)
