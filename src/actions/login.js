export const LOGIN_REQUEST = 'LOGIN_REQUEST',
             LOGIN_SUCCESS = 'LOGIN_SUCCESS',
             LOGIN_FAIL    = 'LOGIN_FAIL'

function loginRequest() {
  return {
    type: LOGIN_REQUEST,
    isFetching: true
  }
}

function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    payload: payload
  }
}

function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    isFetching: false,
    error
  }
}

export default function login(params) {
  const { query } = params
  const headers = new Headers()
  const config = {
    method:'POST',
    headers: {

    }
  }
}