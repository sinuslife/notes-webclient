<template>
  <div>
    <div v-if="!isLogged">
      <router-link to="/login">Login</router-link>
      <router-link to="/registration">Registration</router-link>

      <!--<router-view name="login"></router-view>-->
      <!--<router-view name="registration"></router-view>-->
    </div>
    <div v-else>
      <button @click="logout">Logout</button>


    </div>

    <router-view/>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters(['isLogged'])
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>


