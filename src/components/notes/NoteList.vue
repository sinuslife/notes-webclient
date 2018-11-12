<template>
  <div>
    <router-link to="/saveForm">Add note</router-link>
    <note-row v-model="notes" v-for="note in getNotes" :key="note.id"
              :note="note"
    />
  </div>
</template>

<script>
  import NoteRow from "./NoteRow";

  import {mapGetters} from 'vuex'

  export default {
    components: {NoteRow},
    data(){
      return{
        notes:[{id:1}]
      }
    },
    computed:{
      ...mapGetters(['getNotes'])
    },
    created(){
      this.$store.dispatch('fetchNotes')
    }
  }
</script>
