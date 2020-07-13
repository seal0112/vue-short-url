<template>
  <div id="top3Visited">
    <h1>{{ title }}</h1>
    <table class="top3VisitedUrlTable">
      <tr>
        <th>Count</th>
        <th>Short Url</th>
        <th>Long Url</th>
      </tr>
      <tr v-for="url in top3VisitedUrl">
        <td>{{url.count}}</td>
        <td>{{url.alias}}</td>
        <td>{{url.origin}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'top3Visited',
  data () {
    return {
      title: 'Top 3 Visited'
    }
  },
  computed: {
    ...mapGetters({
      top3VisitedUrl: 'getTop3VisitedUrl',
    }),
  },
  created: function() {
    this.$store.dispatch('actionGetTop3VisitedUrl');
  },
}
</script>

<style>
</style>
