// @flow
import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { Router, Route, hashHistory } from "react-router"
import createSagaMiddleware from "redux-saga"
import reducer from "reducers"
import saga from "sagas"
import Layout from "containers/Layout"
import Hello from "pages/Hello"
import NotFound from "pages/NotFound"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <Route path="hello/:name" component={Hello} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app"),
)
