<template>
  <!--  Authentication form -->
  <div>
    <b-container>
      <!--  Username input -->
      <b-form class="login-box">
        <b-form-group id="usernameInputGroup"
        label="Username:" label-for="usernameInput">
        <b-form-input id="usernameInput"
        type="text" required
        placeholder="Enter login"
        autofocus
        v-model="credentials.username"
        ></b-form-input>
      </b-form-group>

      <!--  Password input -->
      <b-form-group id="passwordInputGroup"
      label="Password:" label-for="passwordInput">
      <b-form-input id="passwordInput"
      type="password" required
      placeholder="Enter password"
      v-model="credentials.password"
      ></b-form-input>
    </b-form-group>

    <b-button class="login-button" type="button" variant="primary" @click="login(credentials)">Login</b-button>
  </b-form>

  <!--  Display errors under login form -->
  <!-- <b-alert variant="danger"
  dismissible
  :show="showAlert"
  @dismissed="hideAlert">
  {{ errors }} -->
<!-- </b-alert> -->

</b-container>
</div>
</template>

<script>
// import { login } from '@/utils/auth'
import axios from 'axios'

export default {

  data: function () {
    return {
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login (credentials) {
      console.log('AUTH')
      return axios.post(process.env.API_URL + 'v3/login', {
        params: {
          user: credentials['username'],
          password: credentials['password']
        }
      })
        .then((response) => Promise.resolve(response.data))
        .catch((error) => console.log(error))
    }
  }
}
</script>

<style>
.login-box {
  width: 300px;
  margin: 120px auto;
}

.login-button {
  width: 100%;
  font-size: 16px;
}
</style>
