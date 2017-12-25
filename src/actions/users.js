import callApi from 'utils/callApi'
import route from 'config/routes'

export const
  USER_CREATE_REQUEST = 'USER_CREATE_REQUEST',
  USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS',
  USER_CREATE_FAIL = 'USER_CREATE_FAIL'

function request() {
  return {
    type: USER_CREATE_REQUEST,
    isFetching: true
  }
}

function success(payload) {
  return {
    type: USER_CREATE_SUCCESS,
    isFetching: false,
    payload
  }
}

function fail(error) {
  return {
    type: USER_CREATE_FAIL,
    isFetching: false,
    error
  }
}

export function createUser(user) {
  let url = `${route}/users/new`
  let config = {
    method: 'POST',
    body: JSON.stringify(user)
  }
  return callApi(url, config, request, success, fail)
}