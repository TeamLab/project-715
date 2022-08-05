<template>
  <div class="body">
    <div class="main">
      <div class="findIdResultHead">
        <p><strong>아이디 찾기 결과</strong></p>
      </div>
      <div class="resultComment">
        <p><strong>회원님의 학번으로 가입된 아이디가 있습니다.</strong></p>
      </div>
      <div class="resultIdInfo">
        <input type="text" />
      </div>
      <div class="forgetPwd">
        <span id="forgetPwd"><p>비밀번호가 기억나지 않으세요?</p></span>
        <span id="findPwd"
          ><router-link to="/user/findpwd">비밀번호 찾기</router-link></span
        >
      </div>
      <div class="loginButton">
        <form action="">
          <button>로그인</button>
        </form>
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
.main {
  width: 900px;
  margin: auto;
}
.findIdResultHead > p {
  text-align: center;
  font-size: 24px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.resultComment > p {
  text-align: center;
  font-size: 24px;
  padding-top: 70px;
}
.resultIdInfo {
  width: 388px;
  margin: auto;
  margin-top: 75px;
}
.resultIdInfo > input {
  width: 100%;
  height: 47px;
  padding-left: 5px;
  font-size: 24px;
  border-radius: 2px;
  background-color: #d9d9d9;
}
.forgetPwd {
  width: 388px;
  padding-top: 75px;
  display: flex;
  margin: auto;
}
.forgetPwd > #forgetPwd {
  margin-right: 5px;
}
.loginButton {
  text-align: center;
}
.loginButton > form > button {
  width: 388px;
  height: 70px;
  font-size: 24px;
  background-color: #658ef8;
  border-radius: 2px;
}
</style>
