<template>
  <div class="body">
    <div class="main">
      <div class="signUpHead">
        <h6>회원가입</h6>
      </div>
      <div class="nameInfo">
        <div class="studentId">
          <v-text-field class="v_text_input" label="학번"></v-text-field>
        </div>
        <div class="studentName">
          <v-text-field type="text" id="name" v-model="user.name" class="v_text_input" label="이름" autocomplete='off'></v-text-field>
        </div>
      </div>
      <div class="degreeInfo">
        <div class="positionInfo">
          <p>직책</p>
          <div class="degreeButton">
            <span>
              <v-btn
                :ripple="false"
                :color="bgcolorStudent"
                width="87px"
                height="51px"
                @click="selectStudent"
              >
                학생
              </v-btn></span
            >
            <span
              ><v-btn
                :ripple="false"
                :color="bgcolorProfessor"
                width="87px"
                height="51px"
                @click="selectProfessor"
              >
                교수
              </v-btn></span
            >
          </div>
        </div>
        <div class="degreeCourseInfo">
          <p>학위과정</p>
          <div class="degreeButton">
            <span
              ><v-btn
                :ripple="false"
                :color="bgcolorMaster"
                width="87px"
                height="51px"
                @click="selectMaster"
              >
                학사
              </v-btn></span
            >
            <span
              ><v-btn
                :ripple="false"
                :color="bgcolorDoctor"
                width="87px"
                height="51px"
                @click="selectDoctor"
              >
                석박사
              </v-btn></span
            >
          </div>
        </div>
      </div>
      <div class="idInfo">
        <div class="infoBox">
          <v-text-field
            type="text"
            id="id"
            v-model="user.userid"
            autocomplete='off'
            class="v_text_input"
            label="아이디"
            style="margin-bottom: 24px"
          ></v-text-field>
        </div>
      </div>
      <div class="passwordInfo">
        <div class="infoBox">
          <v-text-field
            type="password"
            id="password"
            v-model="user.password"
            class="v_text_input"
            label="비밀번호"
            style="margin-bottom: 24px"
          ></v-text-field>
          <v-text-field
            class="v_text_input"
            label="비밀번호 확인"
            type="password"
            style="margin-bottom: 24px"
          ></v-text-field>
        </div>
      </div>
      <div class="passwordVerify">
        <div class="infoBox">
          <v-text-field
            class="v_text_input"
            label="비밀번호 확인 질문"
            value="당신이 졸업한 초등학교는?"
            readonly
            style="margin-bottom: 24px"
          ></v-text-field>
        </div>
      </div>
      <div class="passwordVerify">
        <div class="infoBox">
          <v-text-field
            class="v_text_input"
            label="비밀번호 확인 답변"
            style="margin-bottom: 24px"
          ></v-text-field>
        </div>
      </div>
      <div class="emailInfo">
        <div class="infoBox">
          <v-text-field class="v_text_input" label="이메일"></v-text-field>
        </div>
      </div>
      <div class="signInButton">
      <button @click="signUp">가입하기</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      bgcolorStudent: '#d9d9d9',
      bgcolorProfessor: '#d9d9d9',
      bgcolorMaster: '#d9d9d9',
      bgcolorDoctor: '#d9d9d9',
      user: {
        userid: '',
        name: '',
        password: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    signUp(event) {
      this.$http.post('/api/users/signup', {
        user: this.user
      })
        .then((res) => {
          if (res.data.success === true) {
            console.log('A')
            alert(res.data.message)
          }
          if (res.data.success === false) {
            console.log('B')
            alert(res.data.message)
          }
        })
        .catch(function (error) {
          console.log('C')
          alert(error)
        })
    },
    selectStudent() {
      if (this.bgcolorStudent === '#d9d9d9') {
        this.bgcolorStudent = 'white'
        this.bgcolorProfessor = '#d9d9d9'
      } else {
        this.bgcolorStudent = 'white'
        this.bgcolorProfessor = '#d9d9d9'
      }
    },
    selectProfessor() {
      if (this.bgcolorProfessor === '#d9d9d9') {
        this.bgcolorStudent = '#d9d9d9'
        this.bgcolorProfessor = 'white'
      } else {
        this.bgcolorStudent = '#d9d9d9'
        this.bgcolorProfessor = 'white'
      }
    },
    selectMaster() {
      if (this.bgcolorMaster === '#d9d9d9') {
        this.bgcolorMaster = 'white'
        this.bgcolorDoctor = '#d9d9d9'
      } else {
        this.bgcolorMaster = 'white'
        this.bgcolorDoctor = '#d9d9d9'
      }
    },
    selectDoctor() {
      if (this.bgcolorMaster === '#d9d9d9') {
        this.bgcolorMaster = '#d9d9d9'
        this.bgcolorDoctor = 'white'
      } else {
        this.bgcolorMaster = '#d9d9d9'
        this.bgcolorDoctor = 'white'
      }
    }
  }
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
  margin-bottom: 50px;
}
.signUpHead {
  text-align: center;
  margin-bottom: 50px;
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
  font-size: 20px;
  margin-bottom: 10px;
}
.degreeButton > span {
  margin-right: 1px;
}
.infoBox > p {
  font-size: 24px;
  margin-bottom: 10px;
}

.signInButton > button {
  width: 388px;
  height: 96px;
  font-size: 24px;
  background-color: rgb(0, 36, 72);
  color: white;
  border-radius: 2px;
}
.v-btn:before {
  opacity: 0 !important;
}
</style>
