<template>
  <div>
    <input type="text" placeholder="Username" v-model="credential.username"/>
    <input type="password" placeholder="Password" v-model="credential.password"/>
    <button @click="login">Login</button>
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
    methods:{
      login(){
        this.$store.dispatch('login', this.credential)
      }
    }
  }
</script>
