import Vue from 'vue'
import Router from 'vue-router'

import NoteList from '../components/notes/NoteList'
import SaveForm from '../components/notes/NoteForm'
import LoginForm from '../components/auth/LoginForm'
import RegistrationForm from '../components/auth/RegistrationForm'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: NoteList
    },
    {
      path: '/saveForm',
      name: 'saveForm',
      component: SaveForm
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
