<template>
  <div class="body">
    <div class="main">
      <div class="loginHead">로그인</div>
      <div class="loginContents">
        <form action="" method=”post” enctype=”multipart/form-data”>
          <div class="idBox">
            <v-text-field class="v_text_input" label="아이디"></v-text-field>
          </div>
          <div class="passwordBox">
            <v-text-field
              class="v_text_input"
              label="비밀번호"
              type="password"
            ></v-text-field>
          </div>
          <div class="loginButton">
            <input type="submit" value="로그인">
          </div>
        </form>
        <div class="findButtons">
          <ul class="findButtonLists">
            <li><router-link to="/user/findid">아이디 찾기</router-link></li>
            <li>|</li>
            <li><router-link to="/user/findpwd">비밀번호 찾기</router-link></li>
            <li>|</li>
            <li><router-link to="/user/signup">회원가입</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
* {
  text-decoration: none;
  color: #000;
  list-style: none;
}
a:link,
a:visited {
  color: black;
}
.main {
  width: 900px;
  height: 900px;
  margin: auto;
}
.v_text_input {
  font-size: 20px;
}
.loginHead {
  font-size: 24px;
  width: 198px;
  height: 48px;
  margin: auto;
  text-align: center;
  padding-top: 123px;
}
.loginContents {
  margin-top: 98px;
}
.loginContents > form > .idBox,
.passwordBox,
.loginButton {
  margin: auto;
  margin-top: 34.91px;
  width: 388px;
  height: 96px;
}
.findButtons {
  margin: auto;
  margin-top: 10px;
  width: 388px;
  height: 96px;
}
.loginButton > input {
  width: 388px;
  height: 70px;
  font-size: 24px;
  border-radius: 2px;
  background-color: rgb(0, 36, 72);
  color: white;
}
.findButtons > .findButtonLists {
  display: flex;
  justify-content: space-around;
  padding: 0px;
}
.findButtons > .findButtonLists > li {
  font-size: 18px;
}
</style>
