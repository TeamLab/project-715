<template>
  <div class="main">
    <div class="rsv-text">
      <h1>
        예약 시간 선택
      </h1>
    </div>
    <div class="timecontents">
      <ul class="timeLists">
        <li v-for="i in 23" :key="i">
          <v-btn
            :id="'timetable-btn-'+i"
            class="timetable"
            style="background:#d9d9d9;"
            @click="pickTime"
            >{{ i }}
          </v-btn>
        </li>
      </ul>
    </div>
    <div class="rsv-text">
      <h1>
        예약 정보 입력
      </h1>
    </div>
    <div class="contents-row content-row-1">
      <div class="content-box">
        <span class="input-title"><span class="text-orangered">*</span> 예약 날짜</span>
        <input
        type="text"
        id="selectedDate"
        class="input-text-readonly"
        value="07-AUG-2022"
        readonly
      />
      </div>
      <div class="content-box">
        <span class="input-title"><span class="text-orangered">*</span> 예약자</span>
        <input class="input-text-readonly"  type="text" value="권용근" readonly />
      </div>
    </div>
    <div class="contents-row content-row-2" >
      <div class="content-box">
        <span class="input-title"><span class="text-orangered">*</span> 이용시작시간</span>
        <input class="input-text-readonly" type="text" value="20:00" readonly />
      </div>
      <div style="margin-top:auto;margin-bottom:auto;">
        ~
      </div>
      <div class="content-box">
        <span class="input-title"><span class="text-orangered">*</span> 이용종료시간</span>
        <input class="input-text-readonly" type="text" value="22:00" readonly />
      </div>
    </div>
    <div class="contents-row content-row-3">
      <div class="content-box">
        <span class="input-title"><span class="text-orangered">*</span> 이용 인원</span>
        <select class="peopleNum">
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
      </div>
      <div class="content-box">
        <span class="input-title"><span class="text-orangered">*</span> 테이블 번호</span>
        <input class="input-text-readonly" type="text" value="3" readonly />
      </div>
    </div>
    <div class="contents-row-last content-row-4">
        <span class="input-title">&nbsp;&nbsp;예약 내용</span>
        <textarea cols="2"></textarea>
    </div>
    <div class="rsv-text">
      <h1>유의사항</h1>
    </div>
    <div class="notice-contents">
      <div style="margin-bottom:24px;">
        <p>1. 715호 협업룸에서 사용한 물품 및 설비는 사용 후 반드시 제자리에 둔다.</p>
        <p>2. 715호 협업룸을 함께 사용하는 모두를 위해 사용 이후 반드시 주변 청결을 유지한다.</p>
        <p>3. 715호 협업룸을 같은 시간에 다른 팀과 함께 사용할 경우, 서로에게 방해가 되지 않도록 배려하며 사용한다.</p>
        <p>4. 715호 협업룸 사용 예약자 및 사용자는 715호 협업룸의 설비와 기물을 고장 및 파손에 대해 유의하며 사용한다.</p>
      </div>
    </div>
    <div class="confirm-note">
      <span><input class="corfirm-note-checkbox" type="checkbox" v-model="checkedValue" /></span>
      <span>위의 사항에 동의합니다.</span>
    </div>
    <div class="rsv-button">
      <v-btn
        dark
        id="rsv-button"
        :ripple="false"
        color="#002448"
        :disabled="!checkedValue"
      >
        예약하기
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selected: '',
      checkedValue: 'what',
      count: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {}
  // methods: {
  //   pickTime() {
  //     this.count += 1
  //     if (this.count % 2 === 1) {
  //     }
  //   }
  // }
}
</script>

<style scoped>
.main {
  max-width: 900px;
  width: 70%;
  margin: auto;
  margin-top: 48px;
  min-width: 470px;
  padding: 12px;
}
.timeLists {
  display: flex;
  padding: 0px;
  height: 80px;
  margin-bottom: 24px;
}
li {
  width: 100%;
  height: 100%;
  list-style: none;
  border-right: 1px solid black;
}
.timeLists > li:last-child {
  border: none;
}
.timeLists > li > .timetable {
  width: 100%;
  height: 100%;
  min-width: 10px;
  padding: 0px;
}
.datecontents {
  display: flex;
  flex-direction: column;
}
.input-title {
  padding-left: 10px;
  color: #658ef8;
  font-size: 13px;
}
.input-text-readonly {
  background-color: #efefef;
}
input, select {
  border: 1px solid #658ef8;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 20px;
}
textarea {
  border: 1px solid #658ef8;
  border-radius: 10px;
  width: 100%;
  height: 80px;
  font-size: 20px;
  padding: 10px;
}
select {
  -webkit-appearance: menulist !important;
  -moze-appearance: menulist !important;
  appearance: menulist !important;
  padding-left: 10px;
}
.content-box {
  display: flex;
  flex-direction: column;
  width: 46%;
  margin-bottom: 19px;
}
.contents-row-last {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
}
option {
  font-size: 24px;
}
.contents-row {
  display: flex;
  justify-content: space-between;
}
.text-orangered {
  color: orangered;
}
.notice-contents > p {
  margin-top: 3px;
}
.confirm-note {
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}
.confirm-note span {
  vertical-align: 0.5;
}
.corfirm-note-checkbox {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.rsv-button {
  margin-bottom: 48px;
}
#rsv-button {
  width: 100%;
  height: 70px;
  font-size: 24px;
}
</style>
