<template>
  <b-container>
    <b-row>
      <b-col>
        <pieHostsStatus></pieHostsStatus>
      </b-col>
      <b-col>
        <serverStatus></serverStatus>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import pieHostsStatus from '@/components/dashboard/pieHostsStatus'
import serverStatus from '@/components/dashboard/serverStatus'

export default {
  name: 'Dashboard',
  components: {
    pieHostsStatus,
    serverStatus
  }
}
</script>
