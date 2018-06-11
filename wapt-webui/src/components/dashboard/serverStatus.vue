<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
const items = [
  {status: 'ok', HowMany: '12'},
  {status: 'Warn', HowMany: '15'},
  {status: 'Error', HowMany: '18'}
]

export default {
  data () {
    return {
      items: items
    }
  }
}

</script>

<style scoped>
img {
  width: 30px;

}
</style>
