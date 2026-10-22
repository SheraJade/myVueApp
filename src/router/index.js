import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Admissions from '../views/Admissions.vue'
import Academics from '../views/Academics.vue'
import CampusLife from '../views/CampusLife.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'
import PortalLogin from '../views/PortalLogin.vue'
import SampleData from '../views/SampleData.vue'
import SampleMethods from '../views/SampleMethods.vue'
import SampleVmodel from '../views/SampleVmodel.vue'


const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/admissions',
      name: 'admissions',
      component: Admissions
    },
    {
      path: '/academics',
      name: 'academics',
      component: Academics
    },
    {
      path: '/campus-life',
      name: 'campus-life',
      component: CampusLife
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {path: '/portal-login',
      name: 'portallogin',
      component: PortalLogin},
    {
      path: '/sample-data', 
      name: 'sampleData', 
      component: SampleData },
    {
    path: '/sample-methods',
    name: 'sampleMethods',
    component: SampleMethods
    },
    {
  path: '/sample-vmodel',
  name: 'sampleVmodel',
  component: SampleVmodel
}

  ]
})

export default router