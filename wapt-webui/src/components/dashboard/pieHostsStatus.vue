<template>
  <div class="colorbg">
    <p class="center">Status Charts</p>

  <pie-chart :data="data" :colors="['#4e7300', '#ffa600', '#b51414']" ></pie-chart>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters([
      'hostsOkStateCount',
      'hostsErrorStateCount',
      'hostsWarnStateCount'
    ]),
    data () { return [['ok', this.hostsOkStateCount], ['Warn', this.hostsWarnStateCount], ['Error', this.hostsErrorStateCount]] }
  }
}
</script>

<style scoped>
.colorbg {
  background-color: lightgray;
  border-radius: 10px;
  /* width: 545px; */
  /* height: 331px; */
}

</style>
