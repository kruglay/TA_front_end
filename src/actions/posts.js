import callApi from 'utils/callApi'
import route from 'config/routes'

export const
  POSTS_REQUEST = 'POSTS_REQUEST',
  POSTS_SUCCESS = 'POSTS_SUCCESS',
  POSTS_FAIL = 'POSTS_FAIL',
  POSTS_REQUEST_CREATE = 'POSTS_REQUEST_CREATE',
  POSTS_SUCCESS_CREATE = 'POSTS_SUCCESS_CREATE',
  POSTS_FAIL_CREATE = 'POSTS_FAIL_CREATE'

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

function requestCreate() {
  return {
    type: POSTS_REQUEST_CREATE,
    isFetching: true
  }
}

function successCreate(payload) {
  return {
    type: POSTS_SUCCESS_CREATE,
    isFetching: false,
    payload
  }
}

function failCreate(error) {
  return {
    type: POSTS_FAIL_CREATE,
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

export function createPost(post) {
  let url = `${route}/posts/create`
  let config = {
    method: 'POST',
    body: JSON.stringify(post)
  }
  return callApi(url, config, requestCreate, successCreate, failCreate)
}