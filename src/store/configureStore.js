import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import testReducer from '../reducers/testReducer'
import auth from '../reducers/auth'
import posts from 'reducers/posts'
import redirectMiddleware from 'middlewares/redirect'
import redirect from 'reducers/redirect'

export const history = createHistory()
const middleware = applyMiddleware(routerMiddleware(history), thunk, redirectMiddleware, logger)
const store = createStore(combineReducers({
  testReducer,
  form: formReducer,
  auth,
  posts,
  redirect
}), middleware)

export default store