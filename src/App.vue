<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ title }}</h1>
    <shortUrlForm />

    <router-link :to="{path: '/created-url'}">Created Url</router-link>
    <router-link :to="{path: '/top-3-visited'}">Top 3 Visted</router-link>
    <router-link :to="{path: '/hit-count-group-by-date'}">Hit Count Group By Date</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ShortUrlForm from './pages/ShortUrlForm.vue'

export default {
  name: 'app',
  data () {
    return {
      title: 'Short Url',
    }
  },
  components: {
    ShortUrlForm
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
  padding: 0 20px;
}
.count {
  color: red;
}

table, th, td {
  margin: 0 auto;
  border: 1px solid black;
}

form {
  margin-bottom: 40px;
}
</style>
