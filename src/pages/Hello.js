// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { actions as counterActions } from "actions/counter"
import Button from "components/Button"
import type { Counter } from "reducers/counter"

class Hello extends Component {
  props: {
    counter: Counter,
    actions: {
      requestIncrement: (num: number) => void,
    },
    params: {
      name: string,
    },
  };

  handleButtonClick() {
    this.props.actions.requestIncrement(2)
  }

  render() {
    const { params: { name }, counter: { num } } = this.props
    return (
      <div>
        <Button onClick={e => this.handleButtonClick(e)}>
          Hello, {name}! Your count is {num}.
        </Button>
      </div>
    )
  }
}

export default connect(
  ({ counter }) => ({ counter }),
  dispatch => ({ actions: bindActionCreators(counterActions, dispatch) }),
)(Hello)
