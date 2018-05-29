export default {
  // This function return package name and his version
  extractVersionPackage: function (e) {
    let re = /(.*)\s\(=(.*)\).*/i
    let res = e.match(re)
    return { package: res[1], version: res[2] }
  }
}
