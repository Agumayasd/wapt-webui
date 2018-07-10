import 'whatwg-fetch'
import http from '@/utils/http'

export default {
  // Send a request to the login URL and returned reponse in Promise
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
  }
}
