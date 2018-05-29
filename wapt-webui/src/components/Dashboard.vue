<template>
<div>
  <p>{{ count }}</p>
  <p>{{ msg }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="PrintThis">Show me</button>

  </p>
  <hr>
  <table class="table table-striped">
  <thead>
    <tr>
      <th>UUID</th>
      <th>Name</th>
      <th>OS</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="host in hosts.result" :key="host.id">
      <td>{{ host.uuid }}</td>
      <td>{{ host.computer_fqdn }}</td>
      <td>{{ host.os_name }}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>

export default {
  name: 'HelloWorld',
  mounted () {
    this.$store.dispatch('LOAD_WAPT_JSON')
  },
  computed: {
    hosts () { return this.$store.state.Wapt.waptState },
    count () { return this.$store.state.Dashboard.count },
    msg () { return this.$store.state.Dashboard.msg }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    PrintThis () {
      this.$store.commit('ShowTexte')
    }
  }
}
</script>

<style scoped>
img {
  width: 30px;

}
</style>
