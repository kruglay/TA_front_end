import { USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_CREATE_FAIL } from "../actions/users"

const initState = {
  isFetching: false,
  result: null
}

export default function newUser(state = initState, action) {
  switch(action.type) {
    case USER_CREATE_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case USER_CREATE_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        result: action.payload.result
      }
    case USER_CREATE_FAIL:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      }
    default:
      return state
  }
}