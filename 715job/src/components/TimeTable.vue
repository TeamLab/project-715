<template>
  <div class="body">
    <div class="main">
      <div class="timeContents">
        <ul class="timeLists">
          <li v-for="(timeNum, i) in timeNum" :key="i">
            <v-btn
              class="v_btn_timeTable"
              :ripple="false"
              :color="bgTimeColor"
              @click="selectTime"
              >{{ timeNum }}</v-btn
            >
          </li>
        </ul>
      </div>
      <div class="dateContents">
        <span>Date</span>
        <input
          type="text"
          id="selectedDate"
          class="input-text"
          value="07-AUG-2022"
          readonly
        />
      </div>
      <div class="rsvContents1">
        <div class="content1-1">
          <span>이용 인원</span>
          <select class="peopleNum">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>
        <div class="content1-2">
          <span>이용시간</span>

          <input type="text" id="selectedTime" value="20:00 ~ 22:00" readonly />
        </div>
      </div>
      <div class="rsvContents2">
        <div class="content2-1">
          <span>예약자</span>
          <input type="text" id="reserver" value="권용근" readonly />
        </div>
        <div class="content2-2">
          <span>테이블 번호</span>
          <input type="text" id="selectedTable" value="3" readonly />
        </div>
      </div>
      <div class="noteHead">
        <h1>유의사항</h1>
      </div>
      <div class="noteContents">
        <ol class="noteList">
          <li>
            협업룸을 함께 사용하는 모두를 위해 사용 이후 반드시 주변 청결을
            유지한다.
          </li>
          <li>
            협업룸을 같은 시간에 다른 팀과 함께 사용할 경우, 서로에게 방해가
            되지 않도록 배려하며 사용한다.
          </li>
          <li>
            예약자는 협업룸의 설비와 기물에 대한 고장 및 파손에 대한 책임의식을
            가진다.
          </li>
        </ol>
      </div>
      <div class="confirmNote">
        <span><input type="checkbox" /></span>
        <span>위의 사항에 동의합니다.</span>
      </div>
      <div class="doRsv">
        <v-btn id="v_btn_doRsv" :ripple="false" color="#658EF8">
          예약하기
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selected: '',
      bgTimeColor: '#d9d9d9',
      timeNum: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    selectTime(i) {
      this.timeNum[i].bgTimeColor = 'white'
    }
  }
}
</script>

<style scoped>
.main {
  max-width: 900px;
  width: 70%;
  margin: auto;
  margin-top: 30px;
  min-width: 470px;
}
.timeLists {
  display: flex;
  padding: 0px;
  height: 100px;
  margin-bottom: 100px;
}
.timeLists > li {
  width: 100%;
  height: 100%;
  list-style: none;
  border-right: 1px solid black;
  text-align: center;
}
.timeLists > li > .v_btn_timeTable {
  width: 100%;
  height: 100%;
  min-width: 10px;
  padding: 0px;
}
.dateContents {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}
.dateContents > span {
  padding-left: 2%;
  color: #658ef8;
}
#selectedDate {
  border: 1px solid #658ef8;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 100px;
  font-size: 24px;
}
.rsvContents1 {
  height: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}
.rsvContents1 > .content1-1 {
  display: flex;
  flex-direction: column;
  width: 46%;
}
.rsvContents1 > .content1-1 > span {
  color: #658ef8;
  padding-left: 5%;
  font-size: 13px;
}
.rsvContents1 > .content1-1 > .peopleNum {
  width: 100%;
  height: 100px;
  border: 1px solid #658ef8;
  border-radius: 10px;
  text-align: center;
  font-size: 24px;
  padding-left: 10px;
  -webkit-appearance: menulist !important; /* override vuetify style */
  -moze-appearance: menulist !important; /* override vuetify style */
  appearance: menulist !important; /* override vuetify style */
}
.rsvContents1 > .content1-1 > .peopleNum > option {
  font-size: 24px;
}
.rsvContents1 > .content1-2 {
  display: flex;
  flex-direction: column;
  width: 46%;
}
.rsvContents1 > .content1-2 > span {
  color: #658ef8;
  padding-left: 5%;
  font-size: 13px;
}
.rsvContents1 > .content1-2 > input {
  border: 1px solid #658ef8;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 100px;
  font-size: 24px;
}
.rsvContents2 {
  height: 100px;
  display: flex;
  justify-content: space-between;
}
.rsvContents2 > .content2-1,
.content2-2 {
  display: flex;
  flex-direction: column;
  width: 46%;
}
.rsvContents2 > .content2-1 > span {
  color: #658ef8;
  font-size: 13px;
  padding-left: 5%;
}
.rsvContents2 > .content2-1 > input {
  border: 1px solid #658ef8;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 100px;
  font-size: 24px;
}
.rsvContents2 > .content2-2 > span {
  color: #658ef8;
  padding-left: 5%;
  font-size: 13px;
}
.rsvContents2 > .content2-2 > input {
  border: 1px solid #658ef8;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 100px;
  font-size: 24px;
}
.noteHead {
  margin-top: 50px;
  padding-left: 5px;
}
.noteContents {
  margin-top: 20px;
}
.noteContents > .noteList > li {
  margin-top: 3px;
  font-size: 20px;
}
.confirmNote {
  text-align: center;
  font-size: 24px;
  margin-top: 30px;
}
.confirmNote > span {
  margin-right: 10px;
}
.confirmNote > span > input {
  width: 24px;
  height: 24px;
}
.doRsv {
  margin-top: 30px;
  margin-bottom: 50px;
}
.doRsv > #v_btn_doRsv {
  width: 100%;
  height: 70px;
  font-size: 24px;
}
</style>
