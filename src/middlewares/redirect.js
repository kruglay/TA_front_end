import { LOGIN_FAIL } from "../actions/auth"

export const REDIRECT = 'REDIRECT'

const redirect = store => next => action => {
  if(action.isAuthenticate === false) {
    store.dispatch({
      type: REDIRECT,
      path: '/session/new'
    })
  } else {
    next(action)
  }
}

export default redirect