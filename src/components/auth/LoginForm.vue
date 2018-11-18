<template>
  <div class="l-login">
    <v-form>
      <v-text-field label="Username"
                    v-model="credential.username"
                    prepend-icon="account_box"
                    required>

      </v-text-field>
      <v-text-field label="Password"
                    v-model="credential.password"
                    prepend-icon="lock"
                    type="password"
                    required>
      </v-text-field>
      <v-btn @click="login">
        Login
      </v-btn>


    </v-form>

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
      login() {
        this.$store.dispatch('login', this.credential)
      }
    }
  }
</script>

<style scoped>
  .l-login {
    padding: 15px;
    margin: 45px auto;
    min-width: 272px;
    max-width: 320px;
  }
</style>
