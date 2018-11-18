<template>
  <v-dialog persistent v-model="dialog">
    <v-card>

      <v-card-text>
        <v-text-field
          solo flat
          v-model="noteAttr.title"
        ></v-text-field>
        <v-textarea
          solo flat
          auto-grow
          v-model="noteAttr.text"
        ></v-textarea>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          flat="flat"
          @click="saveNote"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'NoteFormDialog',
    computed: {
      ...mapGetters(['dialog', 'noteAttr'])
    },
    methods: {
      saveNote() {
        if (this.noteAttr.id) {
          this.$store.dispatch('editNote', this.noteAttr);
          this.$store.dispatch('showDialog', false);
        } else {
          this.$store.dispatch('saveNote', this.noteAttr);
          this.$store.dispatch('showDialog', false);
        }
      }
    }
  }
</script>
