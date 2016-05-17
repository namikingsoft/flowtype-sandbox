// @flow
import React, { Component } from "react"

export default class Layout extends Component {
  props: {
    children?: Array<Component>,
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
