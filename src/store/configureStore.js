import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import testReducer from '../reducers/testReducer'

export const history = createHistory()
const middleware = applyMiddleware(routerMiddleware(history))
const store = createStore(combineReducers({
  testReducer,
  form: formReducer
}), middleware)

export default store