<template>
  <v-app>
    <v-app-bar app color="transparent" elevation="0" height="96px">
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Name"
            class="shrink hidden-sm-and-down"
            contain
            min-width="100"
            src="./assets/715Job-white.png"
            width="150"
          />
        </div>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/login" style="text-decoration:none;color:white">
        <v-btn
          class="mr-4"
          href="#"
          dark
          color="#002448"
          height="45px"
          width="100px"
          style="border-radius: 15px"
        >
          <span>Login</span>
        </v-btn>
      </router-link>
    </v-app-bar>
    <div class="main-background"></div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
@import './css/index.css';
</style>
