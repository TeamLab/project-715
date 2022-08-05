<template>
  <div class="body">
    <div class="main">
      <div class="signUpHead">
        <h6>회원가입</h6>
      </div>
      <div class="nameInfo">
        <div class="studentId">
          <p>학번</p>
          <input type="text" value="1233" />
        </div>
        <div class="studentName">
          <p>성함</p>
          <input type="text" />
        </div>
      </div>
      <div class="degreeInfo">
        <div class="positionInfo">
          <p>직책</p>
          <div class="degreeButton">
            <span><button id="studentButton">학생</button></span>
            <span><button id="professorButton">교수</button></span>
          </div>
        </div>
        <div class="degreeCourseInfo">
          <p>학위과정</p>
          <div class="degreeButton">
            <span><button id="collegeButton">학사</button></span>
            <span><button id="doctorButton">석박사</button></span>
          </div>
        </div>
      </div>
      <div class="idInfo">
        <div class="infoBox">
          <p>아이디</p>
          <input type="text" />
        </div>
      </div>
      <div class="passwordInfo">
        <div class="infoBox">
          <p>비밀번호</p>
          <input type="password" />
          <input type="password" />
        </div>
      </div>
      <div class="passwordVerify">
        <div class="infoBox">
          <p>비밀번호 확인 질문</p>
          <input type="text" />
        </div>
      </div>
      <div class="emailInfo">
        <div class="infoBox">
          <p>이메일</p>
          <input type="text" />
        </div>
      </div>
      <div class="signInButton">
        <form action="">
          <button>가입하기</button>
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
.body {
  margin: 0;
}
.main {
  width: 388px;
  height: 900px;
  margin: auto;
}
.signUpHead {
  text-align: center;
  margin-bottom: 24px;
}
.signUpHead > h6 {
  font-size: 24px;
}
.nameInfo {
  display: flex;
  justify-content: space-between;
}
.main > div {
  margin-top: 24px;
}
.nameInfo > div > p {
  font-size: 24px;
  margin-bottom: 10px;
}
.nameInfo > div > input {
  width: 175px;
  height: 51px;
  border-radius: 2px;
  font-size: 20px;
  padding-left: 5px;
  background-color: #d9d9d9;
}
.degreeInfo {
  display: flex;
  justify-content: space-between;
}
.degreeInfo > div > p {
  font-size: 24px;
  margin-bottom: 10px;
}
.degreeButton > span {
  margin-right: 1px;
}
.degreeButton > span > button {
  width: 87px;
  height: 51px;
  background-color: #d9d9d9;
}
.infoBox > p {
  font-size: 24px;
  margin-bottom: 10px;
}
.infoBox > input {
  width: 388px;
  background-color: #d9d9d9;
  height: 51px;
  border-radius: 2px;
}
.signInButton > form > button {
  width: 388px;
  height: 96px;
  font-size: 24px;
  background-color: #63acfd;
  border-radius: 2px;
}
.passwordInfo {
  height: 158px;
}
.passwordInfo > .infoBox > input {
  margin-bottom: 5px;
}
</style>
