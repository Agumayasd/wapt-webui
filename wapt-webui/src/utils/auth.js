import axios from 'axios'

export default {
  // Send a request to the login URL and returned reponse in Promise
  login (credentials) {
    return axios.post(process.env.API_URL + 'v3/login', {
      params: {
        user: credentials['username'],
        password: credentials['password']
      },
      headers : {
        'Content-type' : 'application/form-url-encode'
      }
    })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => console.log(error))
  }
}
