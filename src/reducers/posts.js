import { POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAIL } from "../actions/posts"

const initState = {
  isFetching: false
}

export default function posts(state = initState, action) {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case POSTS_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        posts: action.payload
      }
    case POSTS_FAIL:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      }
    default:
      return state
  }
}
