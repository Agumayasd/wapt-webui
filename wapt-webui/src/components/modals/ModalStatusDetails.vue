<template>
<b-card no-body>
  <b-tabs card>
    <b-tab :active="status.status === 'ERROR'">
      <template slot="title">
        Errors <b-badge>{{ status.last_update_status.errors.length }}</b-badge>
      </template>
      <template>
        <b-table striped hover :items="this.errors"></b-table>
      </template>
    </b-tab>
    <b-tab :active="status.status === 'TO-UPGRADE'">
      <template slot="title">
        Upgrades <b-badge>{{ status.last_update_status.upgrades.length }}</b-badge>
      </template>
      <template>
        <b-table striped hover :items="this.upgrades"></b-table>
      </template>
    </b-tab>
    <b-tab :active="status.status === 'OK'">
      <template slot="title">
        Pending <b-badge>4</b-badge>
      </template>
      <template>
        <b-table striped hover :items="this.pending"></b-table>
      </template>
    </b-tab>
  </b-tabs>
</b-card>
</template>

<script>
import waptUtils from '@/utils/wapt'

export default {
  props: {
    status: {
      type: Object,
      required: true
    }
  },
  computed: {
    // This function return an array of objects that contain every packages
    // needed to be upgraded and their version
    upgrades: function () {
      let elements = this.status.last_update_status.upgrades
      let upgrades = []

      elements.forEach(function (upgrade) {
        // Add package and his version in object format
        // to array
        upgrades.push(
          waptUtils.extractVersionPackage(upgrade)
        )
      })
      return upgrades
    },
    // This function return an array of objects that contain every packages
    // and their status on computer (remove, upgrade...)
    pending: function () {
      let obj = this.status.last_update_status.pending
      let pending = []

      // For each status keys get package
      // and his version
      Object.keys(obj).forEach(function (status) {
        obj[status].forEach(function (waptPackage) {
          let pendingObj = waptUtils.extractVersionPackage(waptPackage)

          // Add status property to pending object
          Object.defineProperty(pendingObj, 'status', {
            value: status,
            enumerable: true
          })

          pending.push(
            pendingObj
          )
        })
      })
      return pending
    },
    // This function return an array of objects that contain every packages
    // in error status with their version and additionnal error message
    errors: function () {
      let elements = this.status.last_update_status.errors
      let errors = []

      elements.forEach(function (error) {
        // Add package and his version in object format
        // to array
        errors.push(
          waptUtils.extractVersionPackage(error)
        )
      })
      return errors
    }
  }
}
</script>
