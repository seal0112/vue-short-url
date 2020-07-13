<template>
  <div id="createdUrl">
    <h1>{{ title }}</h1>
    <table class="createdUrlTable">
      <tr>
        <th>Short Url</th>
        <th>Long Url</th>
      </tr>
      <tr v-for="url in createdUrl">
        <td>{{url.alias}}</td>
        <td>{{url.origin}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'createdUrl',
  data () {
    return {
      title: 'Created Url',
    }
  },
  computed: {
    // ...mapGetters 為 ES7 寫法
    ...mapGetters({
      // getCount return value 將會存在別名為 count 的 data 上
      createdUrl: 'getCreatedUrl',
    }),
  },
  created: function() {
    // 1. 呼叫 api action
    this.$store.dispatch('actionGetCreatedUrl');
  },
}
</script>

<style>
</style>
