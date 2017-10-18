import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import logger from 'redux-logger'

import testReducer from '../reducers/testReducer'
import auth from '../reducers/auth'

export const history = createHistory()
const middleware = applyMiddleware(routerMiddleware(history), logger)
const store = createStore(combineReducers({
  testReducer,
  form: formReducer,
  auth
}), middleware)

export default store