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

export function getPosts(orders = [0]) {
  let query = JSON.stringify({orders})
  let url = `${route}/posts?orders=${orders}`
  let config = {
    method: 'GET'
  }
  return callApi(url, config, request, success, fail)
}