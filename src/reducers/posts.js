import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAIL,
  POSTS_REQUEST_CREATE,
  POSTS_SUCCESS_CREATE,
  POSTS_FAIL_CREATE,
} from "../actions/posts"

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
    case POSTS_REQUEST_CREATE:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case POSTS_SUCCESS_CREATE:
      return {
        ...state,
        ...action.payload,
      }
    case POSTS_FAIL_CREATE:
      return {
        ...state,
        error: action.error,
        isFetching: action.isFetching,
        result: 'fail',
        info: {
          type: 'error',
          message: "post did't added"
        }
      }
    default:
      return state
  }
}
