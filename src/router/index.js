import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Home',
    component: Vue.component("page-not-found", {
      template: "",
      created: function() {
          window.location.href = "/food";
      }
    })
  },
  {
    path: '/food',
    name: 'Mobil',
    component: () => import( '../views/Mobil.vue')
  },
  {
    path: '/motor',
    name: 'Motor',
    component: () => import( '../views/Motor.vue')
  },
  {
    path: '/pelanggan',
    name: 'Pelanggan',
    component: () => import( '../views/Pelanggan.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
