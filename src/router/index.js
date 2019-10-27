import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main.vue'
import Category from '../components/categorySelect.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      props: true
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      props: true
    }
  ]
})
