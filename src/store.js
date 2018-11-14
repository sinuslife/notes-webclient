import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

Vue.use(Vuex);

function getIndex(list, id) {
  if (typeof list !== 'undefined') {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        return i
      }
    }
    return -1
  }
}

const store = new Vuex.Store({
  state: {
    notes: [],
    logged: localStorage.getItem('token')
  },
  getters: {
    getNotes: state => state.notes,
    isLogged: state => state.logged
  },
  mutations: {
    set(state, {type, items}) {
      state[type] = items
    },
    replaceNote(state, index, items) {
      state.notes.splice(index, 1, items)
    },
    deleteNote(state, note) {
      state.notes.splice(state.notes.indexOf(note), 1)
    },
    saveNote(state, note) {
      state.notes = note
    },
    addNote(state, note) {
      state.notes.push(note)
    },
    login(state) {
      state.logged = 1
    },
    logout(state) {
      state.logged = 0
    }

  },
  actions: {
    fetchNotes({commit}) {
      Vue.axios.get('/api/users/note')
        .then(response => {
          commit('saveNote', response.data)
        })
    },
    saveNote({commit}, note) {
      Vue.axios.post('/api/users/note', note).then(response => {
        commit('addNote', response.data)
      })
    },
    editNote({commit}, note) {
      Vue.axios.put(`/api/users/note/${note.id}`, note).then(response => {
        const index = getIndex(store.getters.getNotes, note.id);
        commit('replaceNote', index, 1, response.data)
      })
    },
    deleteNote({commit}, note) {
      Vue.axios.delete(`/api/users/note/${note.id}`).then(response => {
        if (response.status === 200) {
          commit('deleteNote', note)
        }
      })
    },
    login({commit}, credential) {
      Vue.axios.post('/login', credential).then(response => {
        localStorage.setItem('token', response.headers['authorization']);
        commit('login');
        router.push({path: '/home'})
      })
    },
    registration({commit, dispatch}, credential) {
      Vue.axios.post('/sign-up', credential).then(response => {
        if (response.status === 200) {
          dispatch('login', credential)
        }
      })
    },
    logout({commit}) {
      localStorage.removeItem('token');
      commit('logout');
      router.push({path: '/login'})
    }


  }
});

export default store
