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
          :style='{"border-radius": "15px", "font-family": "Fira Sans"}'
        >
          <span>Login</span>
        </v-btn>
      </router-link>
    </v-app-bar>
    <div :class="{ 'main-background': isMain, 'not-main-background': isNotMain }"></div>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="footer">
      <div id="pknusme-link-box">
        <a id="pknusme-link" href="https://sme.pknu.ac.kr/sme/1">PKNU SME</a>
      </div>
      <v-spacer></v-spacer>
      <div id="insta-id">
        Made by @yongchoooon @_buhyeon_ @yo__ngg @s.ggyu
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      isMain: true,
      isNotMain: false
    }
  },
  methods: {},
  watch: {
    '$route' (to, from) {
      if (to.path !== '/' && from.path === '/') {
        this.isMain = false
        this.isNotMain = true
      } else if (to.path === '/' && from.path !== '/') {
        this.isMain = true
        this.isNotMain = false
      }
    }
  }
}
</script>

<style>
@import './css/index.css';
</style>
