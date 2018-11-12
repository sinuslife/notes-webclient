<template>
  <div>
    <input type="text" placeholder="Username" v-model="credential.username"/>
    <input type="password" placeholder="Password" v-model="credential.password"/>
    <button @click="registration">Registration</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        credential: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      registration() {
        this.$store.dispatch('registration')
      }
    }
  }
</script>
