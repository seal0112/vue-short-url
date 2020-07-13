import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

// init
Vue.use(VueRouter)

import createdUrl from './pages/CreatedUrl.vue'
import hitCountGroupByDate from './pages/HitCountGroupByDate.vue'
import top3Visited from './pages/Top3Visted.vue'
import App from './App.vue'

const router = new VueRouter({
  // 使用 HTML 5 模式
  mode: 'history',
  base: __dirname,
  // routre 表
  routes: [
    {
      path: '/created-url',
      name: 'createdUrl',
      component: createdUrl
    },
    {
      path: '/top-3-visited',
      name: 'top3Visited',
      component: top3Visited
    },
    {
      path: '/hit-count-group-by-date',
      name: 'hitCountGroupByDate',
      component: hitCountGroupByDate
    },
    // router 轉址
    { path: '/*', redirect: '/created-url' }
  ]
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
