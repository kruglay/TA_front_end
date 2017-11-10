function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export default function callApi(url, config, request, success, fail) {
  return dispatch => {
    console.log(config)
    dispatch(request())
    if (config.headers === undefined) {
      config.headers = {
        'Content-Type': 'application/json'
      }
    } else {
      config.headers['Content-Type'] = 'application/json'
    }
    fetch(url, config)
      .then(checkStatus)
      .then(parseJSON)
      .then(json=>dispatch(success(json)))
      .catch(error => {
        dispatch(fail(error))
      })
  }
}