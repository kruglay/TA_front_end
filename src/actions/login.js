import route from '../config/routes'
import callApi from '../utils/callApi'

export const LOGIN_REQUEST = 'LOGIN_REQUEST',
             LOGIN_SUCCESS = 'LOGIN_SUCCESS',
             LOGIN_FAIL    = 'LOGIN_FAIL'

function request() {
  return {
    type: LOGIN_REQUEST,
    isFetching: true
  }
}

function success(payload) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    payload: payload
  }
}

function fail(error) {
  return {
    type: LOGIN_FAIL,
    isFetching: false,
    error
  }
}

export default function login(params) {
  const { query, username, password } = params
  const body = JSON.stringify({
    username,
    password
  })
  const config = {
    method: 'POST',
    body,
  }
  const url = `${route}${query}`
  return callApi(url, config, request, success, fail)
}