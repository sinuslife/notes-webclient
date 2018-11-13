<template>
  <v-container grid-list-md text-xs-center>

    <router-link to="/saveForm">Add note</router-link>

    <v-layout row wrap>

      <v-flex v-for="note in getNotes" :key="note.id" >

        <note-row :note="note"/>


      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  import NoteRow from "./NoteRow";

  import {mapGetters} from 'vuex'

  export default {
    components: {NoteRow},
    computed: {
      ...mapGetters(['getNotes'])
    },
    created() {
      this.$store.dispatch('fetchNotes')
    }
  }
</script>
