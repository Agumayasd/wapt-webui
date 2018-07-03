// import axios from 'axios'
import 'whatwg-fetch'

// axios.defaults.withCredentials = true

export default {
  // Send a request to the login URL and returned reponse in Promise
  login (credentials) {
    // return axios.post(process.env.API_URL + 'v3/login?user=' +
    // credentials['username'] + '&password=' + credentials['password'])
    //   .then((response) => {
    //     console.log(response)
    //     Promise.resolve(response.data)
    //   })
    //   .catch((error) => console.log(error))
    return fetch('http://dev.clerc.im/api/' + 'v3/login?user=' + credentials['username'] + '&password=' + credentials['password'], {
      credentials: 'include'
    })
      .then(function (data) {
        console.log(data)
      }).catch(function (error) {
        console.log(error)
      })
  }
}
