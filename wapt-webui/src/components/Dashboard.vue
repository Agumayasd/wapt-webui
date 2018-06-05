<template>
<div>
  <p>{{ count }}</p>
  <p>{{ msg }}</p>
  <p>
    <button v-on:click="increment">+</button>
    <button v-on:click="PrintThis">Show me</button>

  </p>
  <hr>
  <tbody>
    <!-- <tr v-for="host in hosts.result" :key="host.uuid">
      <td>{{ host.uuid }}</td>
      <td>{{ host.computer_fqdn }}</td>
      <td>{{ host.os_name }}</td>
    </tr> -->
    <div> {{data}} </div>
    <div> {{hostsOkStateCount}} </div>
    <div> {{hostsErrorStateCount}} </div>
    <div> {{hostsWarnStateCount}} </div>
    <pie-chart :data="data" :colors="['#4e7300', '#ffa600', '#b51414']" width="800px" height="500px" :discrete="true"></pie-chart>

  </tbody>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashobard',
  mounted () {
    this.$store.dispatch('LOAD_WAPT_JSON')
  },

  computed: {
    ...mapGetters([
      'hostsOkStateCount',
      'hostsErrorStateCount',
      'hostsWarnStateCount'
    ]),
    data () { return [['ok', this.$store.getters.hostsOkStateCount], ['Warn', this.$store.getters.hostsWarnStateCount], ['Error', this.$store.getters.hostsErrorStateCount]] },
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
