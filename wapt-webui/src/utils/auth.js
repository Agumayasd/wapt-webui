import 'whatwg-fetch'
import http from '@/utils/http'

export default {
  // Send a request to the login URL to get authentication cookie
  login (credentials) {
    fetch(process.env.API_URL + 'v3/login?user=' + credentials['username'] +
    '&password=' + credentials['password'], {
      credentials: 'include'
    })
      .then(http.checkStatus)
      .then(http.parseJSON)
      .then((data) => {
        return data
      })
      .catch((error) => {
        return error
      })
  },
  authenticated () {
    let status = fetch(process.env.API_URL + 'v1/usage_statistics', {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      credentials: 'include'
    }).then((response) => {
      if (response.status === 401 || response.status === 403) {
        return false
      } else {
        return true
      }
    }).catch((error) => {
      return error
    })
    return status
  }
}
