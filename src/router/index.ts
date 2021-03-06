import Vue from 'vue'
import VueRouter from 'vue-router'
import Consoles from '@/views/Consoles.vue'
import ServerList from '@/views/ServerList.vue'
import CredentialStorage from '@/views/CredentialStorage.vue'


export enum View {
  CREDENTIAL_STORAGE = 'credential-storage',
  ADD_SERVER = 'add-server',
  SERVER_LIST = 'server-list',
  CONSOLES = 'consoles',
  SETTINGS = 'settings',
  ABOUT = 'about'
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: View.CREDENTIAL_STORAGE,
    component: CredentialStorage,
    alias: '/' + View.CREDENTIAL_STORAGE
  },
  {
    path: '/' + View.CONSOLES,
    name: View.CONSOLES,
    component: Consoles
  },
  {
    path: '/' + View.SERVER_LIST,
    name: View.SERVER_LIST,
    component: ServerList
  },
  {
    path: '/' + View.ABOUT,
    name: View.ABOUT,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/' + View.SETTINGS,
    name: View.SETTINGS,
    component: () => import('@/views/Settings.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
