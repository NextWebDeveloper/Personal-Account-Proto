import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import * as History from 'history'
import newsReducer from './modules'

export const history = History.createBrowserHistory()

const initialState = { idCounter: 0, news: [{ id: 0, title: 'title', description: 'description', lastEditTime: '27.06.2020, 22:38:06', image: 'https://habrastorage.org/files/0c7/09f/e40/0c709fe40de64b3e816f93d6053874ea.png' }] }
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  connectRouter(history)(newsReducer),
  initialState,
  composedEnhancers
)
