<template>
  <div id="createdUrl">
    <form>
      <label for="origin">Long Url: </label>
      <input
        type="text" name="origin" id="origin"
        value="{origin}" v-model="origin" />
      <label for="alias">Short Url: </label>
      <input
        type="text" name="alias"
        value="{alias}" v-model="alias" />

      <input type="submit" @click.prevent="submitCreateShortUrlForm">
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import createNewShortUrl from '../utils/ShortUrlAPI.js'

export default {
  name: 'ShortUrlForm',
  data () {
    return {
      origin: '',
      alias: ''
    }
  },
  methods: {
    submitCreateShortUrlForm: function() {
      if(this.origin==="" || !/https?:\/\/[a-zA-Z0-9./_]+/.test(this.origin)){
        alert("Long url type fault")
      }else if(this.alias.length>20){
        alert("Short url is too long")
      }else{
        let data = {
          origin: this.origin
        }
        if(this.alias.length>0){
          data['alias'] = this.alias
        }
        this.$store.dispatch('actionCeateShortUrl', data)
      }
    }
  }
}
</script>

<style>
</style>
