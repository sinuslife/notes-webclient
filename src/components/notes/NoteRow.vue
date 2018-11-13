<template>
  <v-card class="ma-1" hover>

    <v-card-text v-on:click="edit">
      <div>{{note.title}}</div>
      <div>{{note.text}}</div>
    </v-card-text>

  </v-card>

</template>

<script>
  import router from '@/router'

  export default {
    props: ['note'],
    methods: {
      edit() {
        router.push({path: '/saveForm'})

      }
    }
  }
</script>
