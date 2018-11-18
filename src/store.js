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
    logged: localStorage.getItem('token'),
    noteAttr: {
      id: '',
      title: '',
      text: ''
    },
    dialog: false,
    loading: false,
    errored: false
  },
  getters: {
    getNotes: state => state.notes,
    isLogged: state => state.logged,
    noteAttr: state => state.noteAttr,
    dialog: state => state.dialog,
    loading: state => state.loading,
    errored: state => state.errored
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
      commit('set', {type: 'loading', items: true});
      commit('set', {type: 'errored', items: false});
      Vue.axios.get('/api/user/note')
        .then(response => {
          commit('saveNote', response.data)
        })
        .catch(() => commit('set', {type: 'errored', items: true}))
        .finally(() => commit('set', {type: 'loading', items: false}))
    },
    saveNote({commit, dispatch}, note) {
      Vue.axios.post('/api/user/note', note).then(response => {
        commit('addNote', response.data)
      }).then(() => {
        dispatch('clearNoteAttr')
      })
    },
    editNote({commit, dispatch}, note) {
      Vue.axios.put(`/api/user/note/${note.id}`, note).then(response => {
        const index = getIndex(store.getters.getNotes, note.id);
        commit('replaceNote', index, 1, response.data)
      }).then(() => {
        dispatch('clearNoteAttr')
      })
    },
    deleteNote({commit}, note) {
      Vue.axios.delete(`/api/user/note/${note.id}`).then(response => {
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
    },

    showDialog({commit}, flag) {
      commit('set', {type: 'dialog', items: flag})
    },
    pushNoteToAttr({commit}, note) {
      commit('set', {type: 'noteAttr', items: note})
    },
    clearNoteAttr({commit}) {
      let empty = {
        id: '',
        title: '',
        text: ''
      };
      commit('set', {type: 'noteAttr', empty})
    }
  }

});

export default store
