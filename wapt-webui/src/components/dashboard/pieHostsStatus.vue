<template>
  <div class="colorbg">
    <h4 class="center">Status Charts</h4>
    <hr/>
    <pie-chart style="padding:7px;" :data="data" :colors="['#4e7300', '#ffa600', '#b51414']" ></pie-chart>
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
    data () { return [['Ok', this.hostsOkStateCount], ['To-Update', this.hostsWarnStateCount], ['Error', this.hostsErrorStateCount]] }
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
.center {
    text-align: center;
}

</style>
