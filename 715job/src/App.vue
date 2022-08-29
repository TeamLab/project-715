<template>
  <v-app>
    <v-app-bar app color="transparent" elevation="0" height="96px">
      <router-link to="/">
        <div class="d-flex align-center ml-2">
          <v-img
            alt="715Job"
            class="shrink"
            contain
            min-width="100"
            src="./assets/715Job.png"
            width="150"
            @click="backToMain"
          />
        </div>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/user/login" style="text-decoration: none">
        <v-btn
          v-if="!isloggedin"
          class="mr-4"
          dark
          color="#002448"
          height="45px"
          width="100px"
          :style="{ 'border-radius': '15px', 'font-family': 'Fira Sans' }"
        >
          <span>Login</span>
        </v-btn>
      </router-link>
      <router-link to="/" style="text-decoration: none">
        <v-btn
          v-if="isloggedin"
          class="mr-4"
          color="#002448"
          height="45px"
          width="100px"
          outlined
          elevation="1"
          :style="{ 'border-radius': '15px', 'font-family': 'Fira Sans' }"
          @click="logOut"
        >
          <span>Logout</span>
        </v-btn>
      </router-link>
      <router-link to="/mypage" style="text-decoration: none">
        <v-btn
          v-if="isloggedin"
          dark
          class="mr-4"
          color="#002448"
          height="45px"
          width="100px"
          :style="{ 'border-radius': '15px', 'font-family': 'Fira Sans' }"
        >
          <span>My Page</span>
        </v-btn>
      </router-link>
    </v-app-bar>
    <div
      :class="{ 'main-background': isMain, 'not-main-background': isNotMain }"
    ></div>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="#f7f7f7">
      <div id="pknusme-link-box">
        <a id="pknusme-link" href="https://sme.pknu.ac.kr/sme/1">PKNU SME</a>
      </div>
      <v-spacer></v-spacer>
      <div id="insta-id">Made by @yongchoooon @_buhyeon_ @yo__ngg @s.ggyu</div>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      isMain: true,
      isNotMain: false,
      loggedinuserid: '',
      isloggedin: 0
    }
  },
  mounted() {
    axios.post('/api/users').then((res) => {
      this.loggedinuserid = res.data.loggedinuserid
      this.isloggedin = res.data.isloggedin
    })
  },
  methods: {
    logOut(event) {
      axios
        .post('/api/users/logOut', {
          user: this.loggedinuserid
        })
        .then((res) => {
          // 로그아웃 성공
          this.loggedinuserid = res.data.loggedinuserid
          this.isloggedin = res.data.isloggedin
          this.$router.push('/').catch(() => {})
        })
    },
    backToMain() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== '/' && from.path === '/') {
        this.isMain = false
        this.isNotMain = true
      } else if (to.path === '/' && from.path === '/user/login') {
        this.isMain = true
        this.isNotMain = false
        axios.post('/api/users').then((res) => {
          // this.user = res.data
          this.loggedinuserid = res.data.loggedinuserid
          this.isloggedin = res.data.isloggedin
        })
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
