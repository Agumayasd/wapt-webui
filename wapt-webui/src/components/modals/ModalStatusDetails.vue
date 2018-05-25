<template>
<b-card no-body>
  <b-tabs card>
    <b-tab active>
      <template slot="title">
        Errors <b-badge>{{ host.last_update_status.errors.length }}</b-badge>
      </template>
      {{ host.last_update_status.errors }}
    </b-tab>
    <b-tab>
      <template slot="title">
        Upgrades <b-badge>{{ host.last_update_status.upgrades.length }}</b-badge>
      </template>
      {{ host.last_update_status.upgrades }}
    </b-tab>
    <b-tab>
      <template slot="title">
        Pending <b-badge>4</b-badge>
      </template>
      {{ host.last_update_status.pending }}
    </b-tab>
  </b-tabs>
</b-card>
</template>

<script>
export default {
  props: {
    host: {
      type: Object,
      required: true
    }
  }
}
</script>
