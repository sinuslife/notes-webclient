<template>
  <v-card class="ma-1" hover>

    <v-card-text v-on:click.stop="edit" class="bla">
      <div><b><i>{{note.title}}</i></b></div>
      <div>{{note.text}}</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn small color="green darken-1" flat @click="this.delete">Delete</v-btn>
    </v-card-actions>

  </v-card>

</template>

<script>
  export default {
    props: ['note'],
    methods: {
      edit() {
        this.$store.dispatch('pushNoteToAttr', this.note);
        this.$store.dispatch('showDialog', true)

      },
      delete() {
        this.$store.dispatch('deleteNote', this.note)
      }
    }
  }
</script>

<style scoped>
  .bla {
    word-wrap: break-word;
    text-align: left;
  }
</style>
