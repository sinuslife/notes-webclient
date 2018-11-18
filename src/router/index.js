import Vue from 'vue'
import Router from 'vue-router'

import NoteList from '../components/notes/NoteList'
import LoginForm from '../components/auth/LoginForm'
import RegistrationForm from '../components/auth/RegistrationForm'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: NoteList
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationForm
    }
  ]
})
