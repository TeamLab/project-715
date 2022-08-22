<template>
  <div class="right-box">
    <div class="blank-box"></div>
    <p class="greet-user">{{ this.rsvArr[0].name }}님, 안녕하세요</p>
    <div class="rsvinfo">
      <ul class="right-box-rsvinfo-table">
        <li class="right-box-rsvinfo">&nbsp;&nbsp;예약 정보</li>
        <div class="right-box-rsvinfo-box">
          <div v-for="(rsv, index) in this.rsvArr" :key="index" class="right-box-detail-rsvinfo">
            <div class="right-box-list-rsvinfo-left">
              <div class="right-box-list-rsvinfo info1" width="3%">
                {{ index + 1 }}
              </div>
              <div class="right-box-list-rsvinfo info2" width="40%">
                {{ new Date(rsv.rsvdate).toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'}).slice(0, 12) }}
              </div>
              <div class="right-box-list-rsvinfo info3" width="40%">
                {{ rsv.rsvstarttime }} : 00 ~ {{ rsv.rsvendtime }} : 00
              </div>
              <div class="right-box-list-rsvinfo info4" width="18%">
                Table {{ rsv.tablenumber }}
              </div>
              <div class="right-box-list-rsvinfo info5" width="8%">
                {{ rsv.numofrsvpeople }}명
              </div>
            </div>
            <button class="change-delete">삭제</button>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rsvArr: Array
  },
  data() {
    return {
      name: this.rsvname,
      numberofrsvpeople: this.numofrsvpeople
    }
  },
  mounted() {
  }
}
</script>
<style scoped>
.right-box {
  background: rgb(255, 255, 255);
  width: 70%;
  padding-top: 10%;
  min-width: 615px;
}
.blank-box {
  height: 10%;
}
.greet-user {
  display: flex;
  align-items: center;
  height: 10%;
}
.right-box-rsvinfo {
  background-color: rgb(109, 109, 255);
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgb(0, 36, 72);
  color: white;
}
.right-box-rsvinfo-box {
  height: 40vh;
  overflow-y: auto;
  border-left: solid gray;
  border-right: solid gray;
  border-bottom: solid gray;
}
.right-box-detail-rsvinfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(237, 235, 235);
  height: 50px;
  border-bottom: solid rgb(189, 189, 189);
}
.right-box-list-rsvinfo {
  border-right: 1px solid black;
  padding-right: 12px;
  margin-right: 12px;
}
.right-box-list-rsvinfo-left {
  display: flex;
  width: 80%;
}
.right-box-rsvinfo-table {
  padding: 0;
}
.info1 {
  margin-left: 12px;
  padding-right: 12px;
  margin-right: 12px;
  width: 5%;
}
.info2 {
  width: 23.6%;
}
.info3 {
  width: 30.4%;
}
.info4 {
  width: 15.9%;
}
.info5 {
  width: 8.6%;
}
.change-delete {
  width: 50px;
  margin: 6px 12px;
  border: solid gray;
}
.change-delete:hover {
  background-color: rgb(121, 121, 121);
}
.left-rsv-text {
  display: flex;
}
</style>
