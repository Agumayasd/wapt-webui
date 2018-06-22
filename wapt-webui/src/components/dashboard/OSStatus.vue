<template>
  <div class="colorbg">
    <h4 class="center">Os Inventory List</h4>
    <hr/>
    <pie-chart style="padding:7px;" :data="[['win7', Win7Count()], ['win8', Win8Count()], ['win10', Win10Count()]]" :colors="['#01C3CC', '#0C83D1', '#135ED4']"></pie-chart>
  </div>
</template>

<script>
export default {
  methods: {
    Win7Count () {
      return this.$store.state.Wapt.waptState.filter(computer => computer.os_version.startsWith('6.1')).length
    },
    Win8Count () {
      return this.$store.state.Wapt.waptState.filter(computer => computer.os_version.startsWith('6.3')).length
    },
    Win10Count () {
      return this.$store.state.Wapt.waptState.filter(computer => computer.os_version.startsWith('10.0')).length
    }
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
