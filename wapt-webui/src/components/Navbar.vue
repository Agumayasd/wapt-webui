<template>
<b-navbar toggleable type="light" variant="light">
  <b-navbar-brand to="/Dashboard">
    <img src="../assets/logo_wwui.png" class="d-inline-block align-top" alt="BV">
    Wapt Webui
  </b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item to="/Bootstrap">Hosts Status</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
  <b-navbar-nav class="ml-auto">
    <b-nav-item-dropdown text="Lang" right>
      <b-dropdown-item href="#">EN</b-dropdown-item>
      <b-dropdown-item href="#">FR</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-navbar-nav>
      <b-nav-item>
        <i class="fa fa-refresh"></i>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar-nav>
</b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
