import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Home from '@/components/Index'
import FamilyCareDoc from '@/components/FamilyCareDoc'
import FamilyTerminal from '@/components/FamilyTerminal'
import AppDownload from '@/components/AppDownload'
import index from 'vue-router';

Vue.use(Router)

export default new Router({
  mode:'history',//去除url中的#
  routes: [
    {
      path: '/',
      name:Home,
      component:Home
    },
    {
      path: '/familycaredoc',
      name: 'familycaredoc',
      component: FamilyCareDoc
    },
    {
      path: '/familyterminal',
      name: 'familyterminal',
      component: FamilyTerminal
    },
    {
      path: '/appdownload',
      name: 'appdownload',
      component: AppDownload
    }
  ]
})
