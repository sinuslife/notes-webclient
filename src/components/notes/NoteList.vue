<template>
  <v-container grid-list-md text-xs-center>

    <section v-if="errored">
      <p>Error</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div v-else>
        <v-flex v-show="isLogged">

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="saveNote"
          >Add note
          </v-btn>

          <v-layout row wrap>

            <v-flex v-for="note in getNotes" :key="note.id">

              <note-row :note="note"/>


            </v-flex>
          </v-layout>

          <note-form-dialog/>

        </v-flex>
      </div>

    </section>

  </v-container>
</template>

<script>
  import NoteRow from "./NoteRow";

  import {mapGetters} from 'vuex'
  import NoteFormDialog from "./NoteFormDialog";

  export default {
    components: {NoteFormDialog, NoteRow},
    computed: {
      ...mapGetters(['getNotes', 'isLogged', 'loading', 'errored'])
    },
    created() {
      if (this.isLogged) {
        this.$store.dispatch('fetchNotes')
      }

    },
    methods: {
      saveNote() {
        this.$store.dispatch('showDialog', true);
      }
    }
  }
</script>
