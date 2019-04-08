import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // {
    //   path: '/Lesson1.0',
    //   name: 'Lesson1.0',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Lesson1.0.vue')
    // },
    {
      path: '/Lesson1.1',
      name: 'Lesson1.1',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson1.1.vue')
    },
    {
      path: '/Lesson1.2',
      name: 'Lesson1.2',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson1.2.vue')
    },
    {
      path: '/Lesson1.3',
      name: 'Lesson1.3',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson1.3.vue')
    },
    {
      path: '/Lesson1.4',
      name: 'Lesson1.4',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson1.4.vue')
    },
    {
      path: '/Lesson2.0',
      name: 'Lesson2.0',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson2.0.vue')
    },
    {
      path: '/Lesson2.1',
      name: 'Lesson2.1',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson2.1.vue')
    },
    {
      path: '/Lesson2.2',
      name: 'Lesson2.2',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson2.2.vue')
    },
    {
      path: '/Lesson3.0',
      name: 'Lesson3.0',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson3.0.vue')
    },
    {
      path: '/Lesson3.1',
      name: 'Lesson3.1',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson3.1.vue')
    },
    {
      path: '/Lesson4.0',
      name: 'Lesson4.0',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson4.0.vue')
    },
    {
      path: '/Lesson4.1',
      name: 'Lesson4.1',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson4.1.vue')
    },
    {
      path: '/Lesson4.2',
      name: 'Lesson4.2',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson4.2.vue')
    },
    {
      path: '/Lesson4.3',
      name: 'Lesson4.3',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson4.3.vue')
    },
    {
      path: '/Lesson4.4',
      name: 'Lesson4.4',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson4.4.vue')
    },
    {
      path: '/Lesson5.0',
      name: 'Lesson5.0',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson5.0.vue')
    },
    {
      path: '/Lesson5.1',
      name: 'Lesson5.1',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson5.1.vue')
    },
    {
      path: '/Lesson5.2',
      name: 'Lesson5.2',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson5.2.vue')
    },
    {
      path: '/Lesson6.0',
      name: 'Lesson6.0',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson6.0.vue')
    },
    {
      path: '/Lesson7.0',
      name: 'Lesson7.0',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson7.0.vue')
    },
    {
      path: '/Lesson7.1',
      name: 'Lesson7.1',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson7.1.vue')
    },
    {
      path: '/Lesson8.0',
      name: 'Lesson8.0',
      component: () => import(/* webpackChunkName: "about" */ './views/Lesson8.0.vue')
    }
  ]
})
