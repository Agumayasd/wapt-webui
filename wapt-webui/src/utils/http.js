export default {
  checkStatus (response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  },
  parseJSON (response) {
    return response.json()
  },
  checkApiResponse (response) {
    if (response.success === true) {
      return response
    } else {
      let error = new Error(response.msg)
      error.response = response
      throw error
    }
  }
}
