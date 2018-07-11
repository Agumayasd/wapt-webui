<template>
  <div class="colorbg">
    <h4 class="center">Os Inventory List</h4>
  <hr/>
    <pie-chart style="padding:7px;" :data=dataOS() :colors="['#01C3CC', '#0C83D1', '#135ED4']"></pie-chart>
  </div>
</template>

<script>
export default {
  methods: {
    dataOS () {
      var windowsVersion = { 'Win7': '6.1',
        'Win8': '6.3',
        'Win10': '10.0'}
      var arrayOSRepartition = []
      for (var name in windowsVersion) {
        var localArray = []
        var OsNumber = windowsVersion[name]
        var osCount = this.$store.state.Wapt.waptState.filter(computer => computer.os_version.startsWith(OsNumber)).length
        // console.log("datum :  " + datum);
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
