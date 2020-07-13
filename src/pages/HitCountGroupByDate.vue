<template>
  <div id="hitCountGroupByDate">
    <h1>{{ title }}</h1>
    <div v-for="(h,index) in hitCountGroupByDate" :key="index">
      <h4>{{`Date: ${h.Date.toString()}`}}</h4>
      <table class="top3VisitedUrlTable">
        <tr>
          <th>Count</th>
          <th>Short Url</th>
          <th>Long Url</th>
        </tr>
        <tr v-for="v in h.Values" :key="v.alias">
          <td>{{v.count}}</td>
          <td>{{v.alias}}</td>
          <td>{{v.origin}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'hitCountGroupByDate',
  data () {
    return {
      title: 'Hit Count Group By Date'
    }
  },
  computed: {
    ...mapGetters({
      hitCountGroupByDate: 'getHitCountGroupByDate',
    }),
  },
  created: function() {
    this.$store.dispatch('actionGetHitCountGroupByDate');
  },
}
</script>

<style>
</style>
