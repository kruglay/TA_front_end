import callApi from 'utils/callApi'
import route from 'config/routes'

export const
  POSTS_REQUEST = 'POSTS_REQUEST',
  POSTS_SUCCESS = 'POSTS_SUCCESS',
  POSTS_FAIL = 'POSTS_FAIL'

function request() {
  return {
    type: POSTS_REQUEST,
    isFetching: true
  }
}

function success(payload) {
  return {
    type: POSTS_SUCCESS,
    isFetching: false,
    payload
  }
}

function fail(error) {
  return {
    type: POSTS_FAIL,
    isFetching: false,
    error
  }
}

export function getPosts(order = 0) {
  let url = `${routes}/posts`
  let config = {
    method: 'POST',
    body: {
      'order': '0'
    }
  }
  callApi(url, config, request, success, fail)
}