// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { actions as counterActions } from "actions/counter"
import Button from "components/Button"
import type { CounterState } from "types/Counter"

class CounterPage extends Component {
  props: {
    counter: CounterState,
    // actions
    requestIncrement: (num: number) => any,
    reset: () => any,
  };

  handlePressIncrement() {
    const incrementNum = parseInt(this.refs.count.value || 1, 10)
    this.props.requestIncrement(incrementNum)
  }

  handlePressReset() {
    this.props.reset()
  }

  render() {
    const { counter: { num } } = this.props
    return (
      <div>
        <Button onClick={e => this.handlePressIncrement(e)}>
          Increment: current count is {num}.
        </Button>
        <Button onClick={e => this.handlePressReset(e)}>
          Reset
        </Button>
        <p>
          <label>Increment Count: </label>
          <input type="text" ref="count" />
        </p>
      </div>
    )
  }
}

export default connect(
  ({ counter }) => ({ counter }),
  { ...counterActions },
)(CounterPage)
