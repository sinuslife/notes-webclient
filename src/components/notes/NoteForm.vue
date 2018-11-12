<template>
  <div>
    <input type="text" placeholder="Write title" v-model="note.title"/>
    <textarea placeholder="Write text" v-model="note.text"></textarea>
    <button @click="save">Save</button>
  </div>
</template>

<script>
  import router from '@/router'

  export default {
    data() {
      return {
        note: {
          title: '',
          text: ''
        }
      }
    },
    methods: {
      save() {
        this.$store.dispatch('saveNote', this.note);
        router.push({path: '/home'});
      }
    }
  }
</script>
