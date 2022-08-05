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
        <span><p>비밀번호가 기억나지 않으세요?</p></span>
        <span><router-link to="/user/findpwd">비밀번호 찾기</router-link></span>
      </div>
      <div></div>
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
.body {
  margin: 0;
}
.main {
  width: 900px;
  margin: auto;
}
.findIdResultHead {
  background-color: beige;
}

.findIdResultHead > p {
  text-align: center;
  font-size: 24px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.resultComment {
  background-color: aquamarine;
}
.resultComment > p {
  text-align: center;
  font-size: 24px;
  padding-top: 70px;
}
.resultIdInfo {
  background-color: antiquewhite;
  margin-top: 50px;
}
.resultIdInfo > input {
  width: 100%;
  height: 81px;
  padding-left: 5px;
  font-size: 24px;
}
</style>
