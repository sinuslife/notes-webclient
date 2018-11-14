<template>
  <div class="l-login">
    <v-form>
      <v-text-field label="Username"
                    v-model="credential.username"
                    prepend-icon="account_box"
                    :rules="usernameRules"
                    required>

      </v-text-field>
      <v-text-field label="Password"
                    v-model="credential.password"
                    prepend-icon="lock"
                    type="password"
                    :rules="passwordRules"
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
        },
        usernameRules:[
          v => !!v || 'Name is required',
          v => v.length >= 5 || 'Username must be at least 5 characters'
        ],
        passwordRules:[
          v => !!v || 'Password is required',
          v => v.length >= 6 || 'Password must be at least 6 characters'
        ]
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
    animation: bounceIn 1s forwards ease;
  }
</style>
