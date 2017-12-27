import {
  LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST
} from "../actions/login"

const initState = {
  isFetching: false
}

export default function auth(state = initState, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case LOGIN_SUCCESS:
      if(action.payload.token) {
        window.localStorage.setItem('token', action.payload.token)
        window.localStorage.setItem('user', action.payload.user)
      }
      return {
        ...state,
        isFetching: action.isFetching,
        ...action.payload
      }
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
