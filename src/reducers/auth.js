import {
  LOGIN_FAIL, 
  LOGIN_SUCCESS, 
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  ADD_USER_DATA,
  CLEAR_INFO
} from "../actions/auth"

const initState = {
  isFetching: false,
  info: null
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
        ...action.payload,
        result: 'success',
        info: {
          type: 'info',
          message: 'you logged in'
        }
      }
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.error
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case LOGOUT_SUCCESS:
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user')
      return {
        ...state,
        isFetching: action.isFetching,
        user: '',
        result: 'success',
        info: {
          type: 'info',
          message: 'come back later'
        }
      }
    case LOGOUT_FAIL:
      return {
        ...state,
        result: 'fail',
        info: {
          type: 'error',
          message: 'something going wrong'
        },
        error: action.error
      }
    case USER_CREATE_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case USER_CREATE_SUCCESS:
      if(action.payload.token) {
        window.localStorage.setItem('token', action.payload.token)
        window.localStorage.setItem('user', action.payload.user)
      }
      return {
        ...state,
        isFetching: action.isFetching,
        user: action.payload.user,
        result: action.payload.result,
        info: {
          type: 'info',
          message: 'Congrats you are signed up'
        }
      }
    case USER_CREATE_FAIL:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error,
        result: 'fail',
        info: {
          type: 'error',
          message: 'something going wrong'
        }
      }
    case ADD_USER_DATA:
      return {
        ...state,
        user: action.user
      }
    case CLEAR_INFO:
      return {
        ...state,
        info: action.info
      }
    default:
      return state
  }
}
