<template>

  <v-app>

    <v-toolbar app color="amber" absolute clipped-left>
      <span class="title ml-3 mr-5">Booble&nbsp;<span class="font-weight-light">Notes</span></span>

      <v-spacer></v-spacer>

      <div v-if="!isLogged">
        <router-link to="/login">Login</router-link>
        <router-link to="/registration">Registration</router-link>
      </div>
      <div v-else>

        <v-btn icon @click="logout">
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </div>

    </v-toolbar>
    <v-content>

      <v-layout justify-center align-center>
        <v-flex shrink>

          <router-view/>


        </v-flex>
      </v-layout>


    </v-content>
  </v-app>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['isLogged'])
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>


