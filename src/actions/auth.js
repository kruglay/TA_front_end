import route from '../config/routes'
import callApi from '../utils/callApi'

export const
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAIL = 'LOGOUT_FAIL',
  USER_CREATE_REQUEST = 'USER_CREATE_REQUEST',
  USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS',
  USER_CREATE_FAIL = 'USER_CREATE_FAIL',
  ADD_USER_DATA = 'ADD_USER_DATA'


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

function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true
  }
}

function logoutSuccess(payload) {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    payload: payload
  }
}

function logoutFail(error) {
  return {
    type: LOGOUT_FAIL,
    isFetching: false,
    error
  }
}

function createUserRequest() {
  return {
    type: USER_CREATE_REQUEST,
    isFetching: true
  }
}

function createUserSuccess(payload) {
  return {
    type: USER_CREATE_SUCCESS,
    isFetching: false,
    payload
  }
}

function createUserFail(error) {
  return {
    type: USER_CREATE_FAIL,
    isFetching: false,
    error
  }
}

export function login(params) {
  const { query, username, password } = params
  const body = JSON.stringify({
    username,
    password
  })
  const config = {
    method: 'POST',
    body,
    // credentials: 'include'
  }
  const url = `${route}/sessions/new`
  return callApi(url, config, request, success, fail)
}

export function logout() {
  let token = window.localStorage.getItem('token')
  const body = JSON.stringify({
    token
  })
  const config = {
    method: 'POST',
    body,
    // credentials: 'include'
  }
  const url = `${route}/sessions/destroy`
  return callApi(url, config, logoutRequest, logoutSuccess, logoutFail)
}

export function createUser(user) {
  let url = `${route}/users/new`
  let config = {
    method: 'POST',
    body: JSON.stringify(user)
  }
  return callApi(url, config, createUserRequest, createUserSuccess, createUserFail)
}

export function addUserData() {
  let user = window.localStorage.getItem('user')
  return {
    type: ADD_USER_DATA,
    user
  }
}
