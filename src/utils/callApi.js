export default function callApi(url, config, request, success, fail) {
  let headers
  console.log(config)
  request()
  if (config.headers === undefined) {
    headers = new Headers()
  } else {
    headers = config.headers
  }
  headers.append('Content-Type', 'application/json')
  fetch(url, config)
    .then(res => {
      success(res.json())
    })
    .catch(error => {
      fail(error)
    })
}