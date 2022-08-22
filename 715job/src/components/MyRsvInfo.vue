<template>
  <div class="right-box">
    <div class="blank-box"></div>
    <p class="greet-user">{{ this.rsvname[0] }}님, 안녕하세요</p>
    <div class="rsvinfo">
      <ul class="right-box-rsvinfo-table">
        <li class="right-box-rsvinfo">&nbsp;&nbsp;예약 정보</li>
        <div class="right-box-rsvinfo-box">
          <div class="right-box-detail-rsvinfo">
            <div class="right-box-list-rsvinfo">
              {{ this.rsvList[0] }} {{ this.rsvList[1] }}:00 ~
              {{ this.rsvList[2] }}:00, {{ this.rsvList[3] }}번 테이블,
              {{ this.rsvList[4] }}명
            </div>
            <button class="change-delete">삭제</button>
          </div>

          <div class="right-box-detail-rsvinfo">
            <div class="right-box-list-rsvinfo">
              {{ this.rsvList[5] }} {{ this.rsvList[6] }}:00 ~
              {{ this.rsvList[7] }}:00, {{ this.rsvList[8] }}번 테이블,
              {{ this.rsvList[9] }}명
            </div>
            <button class="change-delete">삭제</button>
          </div>

          <!-- <div
            v-for="i in this.rsvList.length / 5"
            :key="i"
            class="right-box-detail-rsvinfo"
          >
            <div v-for="j in 5" :key="j" class="left-rsv-text">
              <div></div>
            </div>
            <button class="change-delete">삭제</button>
          </div> -->
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rsvname: Array,
    numofrsvpeople: Array,
    rsvdate: Array,
    rsvendtime: Array,
    rsvstarttime: Array,
    tablenumber: Array,
    rsvList: Array
  },
  /* mounted() {
    this.rsvList.push(
      this.rsvdate,
      this.rsvstarttime,
      this.rsvendtime,
      this.numberofrsvpeople
    )
  }, */
  data() {
    return {
      name: this.rsvname,
      numberofrsvpeople: this.numofrsvpeople
      //  rsvdate: this.rsvdate,
      //  rsvendtime: this.rsvendtime,
      //  rsvstarttime: this.rsvstarttime,
      //  tablenumber: this.tablenumber
      // rsvLists: this.rsvList
    }
  },
  methods: {}
}
</script>
<style scoped>
.right-box {
  background: rgb(255, 255, 255);
  width: 70%;
  padding-top: 10%;
  min-width: 550px;
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
  height: 350px;
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
.right-box-rsvinfo-table {
  padding: 0;
}
.right-box-list-rsvinfo {
  margin-left: 12px;
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
