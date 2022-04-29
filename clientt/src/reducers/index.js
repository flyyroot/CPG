import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
export default function index() {
  return (
    <div>index</div>
  )
}

// const store = createStore(reducers, compose(applyMiddleware(thunk)))
