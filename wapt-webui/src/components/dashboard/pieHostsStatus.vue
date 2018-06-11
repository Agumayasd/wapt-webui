<template>
  <pie-chart :data="data" :colors="['#4e7300', '#ffa600', '#b51414']" :discrete="true"></pie-chart>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('LOAD_WAPT_JSON')
  },

  computed: {
    ...mapGetters([
      'hostsOkStateCount',
      'hostsErrorStateCount',
      'hostsWarnStateCount'
    ]),
    data () { return [['ok', this.hostsOkStateCount], ['Warn', this.hostsWarnStateCount], ['Error', this.hostsErrorStateCount]] }
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
