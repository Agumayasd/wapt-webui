<template>
  <!--  Authentication form -->
  <div>
    <b-container>
      <!--  Username input -->
      <b-form class="login-box">
        <b-form-group
        id="usernameInputGroup"
        label="Username:"
        label-for="usernameInput"
        >
          <b-form-input
          id="usernameInput"
          type="text" required
          placeholder="Enter login"
          autofocus
          v-model="credentials.username"
          />
        </b-form-group>

        <!--  Password input -->
        <b-form-group
        id="passwordInputGroup"
        label="Password:"
        label-for="passwordInput"
        >
          <b-form-input
          id="passwordInput"
          type="password"
          required
          placeholder="Enter password"
          v-model="credentials.password"
          />
        </b-form-group>

        <b-button
        id="loginButton"
        class="login-button"
        type="button"
        variant="primary"
        @click="login(credentials)"
        >
        Login
        </b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import auth from '@/utils/auth'

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
    login: auth.login
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
