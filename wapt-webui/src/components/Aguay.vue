<template>
<div>
  <p>{{ count }}</p>
  <p>{{ msg }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="PrintThis">Show me</button>

  </p>
</div>
</template>

<script>

export default {
  computed: {
    count () { return this.$store.state.Dashboard.count },
    msg () { return this.$store.state.Dashboard.msg }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    PrintThis () {
      this.$store.commit('ShowTexte')
    }
  }
}
</script>

<style scoped>
img {
  width: 30px;

}
</style>
