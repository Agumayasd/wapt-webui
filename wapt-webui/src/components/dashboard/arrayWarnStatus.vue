<template>
  <div class="colorbg">
  <!-- <pie-chart :data="data" :colors="['#4e7300', '#ffa600', '#b51414']" :discrete="true"></pie-chart> -->
  <h4 class="center"> Warn</h4>
  <b-table show-empty
           striped
           hover
           stacked="md"
           :items="data"
           :fields="fields"
           :current-page="currentPage"
           :per-page="perPage"
           :filter="filter"
           :sort-by.sync="sortBy"
           :sort-desc.sync="sortDesc"
           :sort-direction="sortDirection"
  ></b-table>

</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      items: [],
      fields: [
        { key: 'computer_name',
          label: 'Computer name'},
        { key: 'last_seen_on',
          label: 'Last Seen',
          'class': 'text-center' },
        { key: 'Reachable',
          label: 'reachable' }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      sortBy: 'last_seen_on',
      sortDesc: true,
      sortDirection: 'asc',
      filter: null
    }
  },
  computed: {
    ...mapGetters([
      'hostsWarnState'
    ]),
    data () { return this.hostsWarnState }
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
