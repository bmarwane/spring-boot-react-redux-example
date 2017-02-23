import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'

import { Provider } from 'react-redux'
import routes from 'routes'
import {  combineReducers, applyMiddleware } from 'redux'

import {initStore} from './store'

const store = initStore()

render(
    <Provider store={store}>
        <Router children={routes} history={hashHistory} />
    </Provider>,
    document.getElementById("container")
)