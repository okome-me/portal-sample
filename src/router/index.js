import Vue from 'vue'
import Router from 'vue-router'
import Iframe from '@/components/Iframe'
import Login from '@/components/Login'
import Top from '@/components/Top'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Top',
          component: Top
        },
        {
          path: '/iframe/:hp/:menu',
          name: 'Iframe',
          component: Iframe,
          props: true
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
