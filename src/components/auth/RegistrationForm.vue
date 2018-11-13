<template>
  <div class="l-reg">
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
      <v-btn @click="registration">
        Registration
      </v-btn>


    </v-form>

  </div>
  <!--<div>-->
    <!--<input type="text" placeholder="Username" v-model="credential.username"/>-->
    <!--<input type="password" placeholder="Password" v-model="credential.password"/>-->
    <!--<button @click="registration">Registration</button>-->
  <!--</div>-->
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
        this.$store.dispatch('registration', this.credential)
      }
    }
  }
</script>

<style scoped>
  .l-reg {
    padding: 15px;
    margin: 45px auto;
    min-width: 272px;
    max-width: 320px;
    animation: bounceIn 1s forwards ease;
  }
</style>
