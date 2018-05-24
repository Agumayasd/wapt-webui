<template>
<div>
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-brand href="/Aguay">
        <img src="./assets/logo_wwui.png" class="d-inline-block align-top" alt="BV">
        Wapt Webui
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="/Bootstrap">Hosts Status</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
    width: 30px;

}
</style>
