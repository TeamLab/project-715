<template>
  <div class="body">
    <div class="main">
      <div class="loginHead">로그인</div>
      <div class="loginContents">
        <div class="idBox">
          <p>아이디</p>
          <input type="text" />
        </div>
        <div class="passwordBox">
          <p>비밀번호</p>
          <input type="text" />
        </div>
        <div class="loginButton">
          <form action="">
            <button>로그인</button>
          </form>
        </div>
        <div class="findButtons">
          <ul class="findButtonLists">
            <li><a href="#">아이디 찾기</a></li>
            <li>|</li>
            <li><a href="#">비밀번호 찾기</a></li>
            <li>|</li>
            <li><router-link to="/user/signup">회원가입</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">footer</div>
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
a:link {
  color: black;
}
a:visited {
  color: black;
}
.body {
  margin: 0px;
}
.main {
  width: 900px;
  height: 900px;
  margin: auto;
}
.loginHead {
  font-size: 24px;
  width: 198px;
  height: 48px;
  margin: auto;
  text-align: center;
  padding-top: 123px;
}
.footer {
  width: 1960px;
  height: 160px;
  border-top: 1px solid #cccccc;
}
.idBox > p {
  font-size: 24px;
}
.passwordBox > p {
  font-size: 24px;
}
.loginContents {
  margin-top: 98px;
}
.loginContents > .idBox,
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
.loginContents > div > input {
  width: 388px;
  height: 47px;
  border-radius: 2px;
  font-size: 20px;
  padding-left: 5px;
  background-color: #d9d9d9;
}
.loginButton > form > button {
  width: 388px;
  height: 96px;
  font-size: 24px;
  background-color: #63acfd;
  border-radius: 2px;
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
