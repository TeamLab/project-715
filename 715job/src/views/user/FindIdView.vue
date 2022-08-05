<template>
  <div class="body">
    <div class="main">
      <div class="findLogInHead">
        <p><strong>아이디 찾기</strong></p>
      </div>
      <div class="findContainer">
        <div class="findButton">
          <button id="findIdButton">아이디 찾기</button>
        </div>
        <div class="findButton">
          <button id="findPwButton">비밀번호 찾기</button>
        </div>
      </div>
      <div class="findIdInfo">
        <div class="studentNumberBox">
          <p>학번</p>
          <input type="text" />
        </div>
        <div class="studentNameBox">
          <p>이름</p>
          <input type="text" />
        </div>
        <div class="findIdForm">
          <form action="">
            <button>아이디 찾기</button>
          </form>
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
.main {
  width: 900px;
  height: 900px;
  margin: auto;
}
.findLogInHead {
  font-size: 24px;
  width: 198px;
  height: 48px;
  margin: auto;
  text-align: center;
  padding-top: 123px;
}
.footer {
  border-top: 1px solid #cccccc;
  text-align: center;
}
.findContainer {
  display: flex;
  width: 388px;
  margin: auto;
  padding-top: 50px;
}
.findContainer > .findButton {
  flex: 1;
  text-align: center;
  padding-top: 50px;
}
.findContainer > .findButton > button {
  width: 100%;
  height: 50px;
  border: 1px solid black;
  font-size: 22px;
}
.studentNumberBox > p {
  font-size: 24px;
}
.studentNameBox > p {
  font-size: 24px;
}
.findIdInfo {
  margin-top: 70px;
}
.findIdInfo > .studentNumberBox,
.studentNameBox,
.findIdForm {
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
.findIdInfo > div > input {
  width: 388px;
  height: 47px;
  border-radius: 2px;
  font-size: 20px;
  padding-left: 5px;
  background-color: #d9d9d9;
}
.findIdForm {
  padding-top: 30px;
}
.findIdForm > form > button {
  width: 388px;
  height: 70px;
  font-size: 24px;
  background-color: #f1f1f1;
  border-radius: 2px;
}
</style>
