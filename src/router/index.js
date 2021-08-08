import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Staff from '../views/Staff.vue'
import StaffProfile from '../components/StaffProfile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      name: 'Joe'
    }
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Staff
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/staff/:id',
    component: StaffProfile,
    name: 'StaffDetails',
    props: true
  }
]
 

const router = new VueRouter({
  routes
})

export default router
