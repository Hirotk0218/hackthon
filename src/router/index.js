import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main.vue'
import Category from '../components/categorySelect.vue'
import Mypage from '../components/myPage.vue'

Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: Mypage,
      props: true
    }
  ]
})
