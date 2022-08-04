<template>
  <div class="body">
    <div class="main">
      <div class="findIdHead">
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
      <div class="studentInfoBox">
        <p id="studentHead">학번</p>
        <input type="text" id="studentInfoInput" />
      </div>
      <div class="studentInfoBox">
        <p id="studentHead">이름</p>
        <input type="text" id="studentInfoInput" />
      </div>
      <div class="findIdForm">
        <form action="">
          <button>아이디 찾기</button>
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
  width: 900px;
  margin: auto;
}
.findIdHead > p {
  text-align: center;
  font-size: 24px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.findContainer {
  display: flex;
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
.studentInfoBox {
  padding-top: 50px;
}
.studentInfoBox > #studentHead {
  font-size: 24px;
}
.studentInfoBox > #studentInfoInput {
  width: 100%;
  height: 47px;
  border-radius: 2px;
  padding-left: 5px;
  font-size: 20px;
  background-color: #d9d9d9;
}
.findIdForm {
  padding-top: 100px;
}
.findIdForm > form > button {
  width: 100%;
  height: 83px;
  font-size: 24px;
  background-color: #f1f1f1;
}
</style>
