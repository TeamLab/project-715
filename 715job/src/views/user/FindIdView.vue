<template>
  <div class="body">
    <div class="main">
      <div class="findIdHead">
        <p><strong>아이디 찾기</strong></p>
      </div>
      <div class="findContainer">
        <div class="findButton">
          <router-link to="/user/findid">
        <v-btn outlined
        id="findIdButton"
          outlinedcolor="black"
        >
          아이디 찾기
        </v-btn>
        </router-link>
        </div>
        <div class="findButton">
          <router-link to="/user/findpwd">
        <v-btn
        id="findPwdButton"
          color="#F1F1F1"
        >
          비밀번호 찾기
        </v-btn>
        </router-link>
        </div>
      </div>
      <form action="" method=”post” enctype=”multipart/form-data”>
        <div class="studentInfoBox">
          <v-text-field class="v_text_input" label="학번"></v-text-field>
        </div>
        <div class="studentInfoBox">
          <v-text-field class="v_text_input" label="이름"></v-text-field>
        </div>
        <div class="findIdForm">
          <router-link id="toFindIdResult" to="/user/findidresult"
            ><input type="submit" value="아이디 찾기"
          /></router-link>
        </div>
      </form>
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
.v_text_input {
  font-size: 20px;
}
.findIdHead > p {
  text-align: center;
  font-size: 24px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.findContainer {
  display: flex;
  width: 388px;
  margin: auto;
}
.findContainer > .findButton {
  flex: 1;
  text-align: center;
  padding-top: 50px;
}
.findContainer > .findButton > a{
  text-decoration: none;
}
.findContainer > .findButton > a > #findIdButton{
  width: 100%;
  height: 50px;
  font-size: 22px;
}
.findContainer > .findButton > a > #findPwdButton{
  width: 100%;
  height: 50px;
  font-size: 22px;
}
.studentInfoBox {
  padding-top: 50px;
}
.studentInfoBox > #studentHead {
  font-size: 24px;
}
.studentInfoBox > .v_text_input {
  width: 388px;
  height: 47px;
  border-radius: 2px;
  padding-left: 5px;
  font-size: 20px;
  margin: auto;
}
.findIdForm {
  padding-top: 100px;
  text-align: center;
}
.findIdForm > #toFindIdResult {
  text-decoration: none;
  color: black;
}
.findIdForm > #toFindIdResult > input {
  width: 388px;
  height: 70px;
  font-size: 24px;
  border-radius: 2px;
  background-color: #658ef8;
}
</style>
