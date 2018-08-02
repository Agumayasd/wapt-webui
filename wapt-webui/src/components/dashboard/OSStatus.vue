<template>
  <div class="colorbg">
    <h4 class="center">Os Inventory List</h4>
  <hr/>
    <pie-chart style="padding:7px;" :data=dataOS(windowsVersion)  :colors="chartColors"></pie-chart>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartColors: ['#009FEF', '#0C83D1', '#135ED4'],
      windowsVersion: {'Win7': '6.1', 'Win8': '6.3', 'Win10': '10.0'}
    }
  },
  methods: {
    dataOS (payload) {
      var arrayOSRepartition = []
      for (var name in payload) {
        var localArray = []
        var OsNumber = payload[name]
        var osCount = this.$store.state.Wapt.waptState.filter(computer => computer.os_version.startsWith(OsNumber)).length
        localArray.push(name)
        localArray.push(osCount)
        arrayOSRepartition.push(localArray)
      }
      return arrayOSRepartition
    }
  }
}

</script>

<style scoped>
.colorbg {
  background-color: lightgray;
  border-radius: 10px;
}

.center {
    text-align: center;
}
</style>
