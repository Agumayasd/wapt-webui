<template>
  <div class="hello">
    <h1>State WAPT Computers</h1>
    <table>
      <tr>
        <th> Computer Name</th>
        <th> Status</th>
        <th> Last Update</th>
        <th> Users </th>
        <th> Os Version </th>
      </tr>
      <tr v-for="computer in posts.data.result" :key="computer.result">
        <td>{{ computer.computer_name}}</td>
        <td>{{ computer.host_status}}</td>
        <td>{{ computer.last_seen_on}}</td>
        <td>{{ computer.connected_users}}</td>
        <td>{{ computer.os_name}}</td>
      </tr>
    </table>

    <ul v-if="errors && errors.length">
    <li v-for="error of errors" :key="error">
      {{error.message}}
      {{posts.headers}}
    </li>
  </ul>
</div>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'

const axiosconfig = {
  // method: 'get',
  // mode: 'no-cors',
  baseURL: 'https://wapt.lan/api/',
  timeout: 30000,
  crossDomain: true
  // auth: {
  // },
  // withCredentials: false
}
Vue.prototype.$axios = axios.create(axiosconfig)
Vue.prototype.$axios.defaults.headers.common.Authorization = 'Basic xxxxxxxxxxxxx'
// Vue.prototype.$axios.defaults.baseURL = 'https://wapt.lan/api/'

export default {
  name: 'AxiosTest',
  data () {
    return {
      msg: 'Welcome from AxiosTest',
      posts: [],
      errors: []
    }
  },
  mounted () {
    // do something after mounting vue instance
    this.$axios.get('v1/hosts')
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
  // Fetches posts when the component is created.
  //   axios.defaults.headers.common['Authorization'] = 'Basic YWRtaW46MWFwdHBvdXJXaW5kb3dz';

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  width: 80%;
}
table.center {margin-left:auto;
  margin-right:auto;
}
tr:nth-child(even) {background-color: #f2f2f2;}

th  {
  background-color: #4CAF50;
  color: white;
}
td {
  padding: 15px;
  text-align: left;
}
</style>
