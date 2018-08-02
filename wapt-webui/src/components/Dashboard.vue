<template>
  <b-container fluid>
    <br/>
    <b-row align-v="center">
      <b-col>
        <pieHostsStatus></pieHostsStatus>
      </b-col>
      <b-col>
        <OSStatus></OSStatus>
      </b-col>
    </b-row>
    <br>
    <b-row align-v="center">
      <b-col>
        <arrayWarnStatus></arrayWarnStatus>
      </b-col>
      <b-col>
        <arrayOkStatus></arrayOkStatus>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col>
        <arrayErrorStatus></arrayErrorStatus>

      </b-col>
      <b-col>
        <!-- <arrayErrorStatus></arrayErrorStatus> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import pieHostsStatus from '@/components/dashboard/pieHostsStatus'
import arrayOkStatus from '@/components/dashboard/arrayOkStatus'
import arrayWarnStatus from '@/components/dashboard/arrayWarnStatus'
import arrayErrorStatus from '@/components/dashboard/arrayErrorStatus'
import OSStatus from '@/components/dashboard/OSStatus'

export default {

  name: 'Dashboard',
  mounted () {
    this.$store.dispatch('LOAD_WAPT_JSON')
  },
  components: {
    pieHostsStatus,
    arrayOkStatus,
    arrayWarnStatus,
    OSStatus,
    arrayErrorStatus
  }
}
</script>
<style>
.container {
  padding: 10px;
}

</style>
