<template>
  <div class="body">
    <div class="main">
      <div class="left-box">
        <div class="left-box-inner">
          <div class="left-box-profile">
            <img class="guest-img" src="@/assets/guest-img.png" alt="guest" />
            <p class="my-name">황부현</p>
          </div>
          <div class="left-box-select-rsv">
            <ul id="select-info">
              <li id="select-rsvinfo"><a href="#">예약 정보</a></li>
              <li id="select-profileinfo"><a href="#">개인 정보 수정</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="blank-box"></div>
        <p class="greet-user">황부현님, 안녕하세요</p>
        <div class="rsvinfo">
          <ul class="right-box-rsvinfo-table">
            <li class="right-box-rsvinfo">&nbsp;&nbsp;예약 정보</li>
            <li class="right-box-detail-rsvinfo">
              2022.08.22 15:00 1번 테이블 예약 3인
              <button class="change-rsv" v-on:click="openNew">수정</button>
              <button class="change-delete" v-on:click="openNew">삭제</button>
            </li>

            <li class="right-box-detail-rsvinfo">
              2022.08.27 17:00 4번 테이블 예약 2인
              <button class="change-rsv" v-on:click="openNew">수정</button>
              <button class="change-delete" v-on:click="openNew">삭제</button>
            </li>

            <li class="right-box-detail-rsvinfo">
              2022.09.04 09:00 3번 테이블 예약 3인
              <button class="change-rsv" v-on:click="openNew">수정</button>
              <button class="change-delete" v-on:click="openNew">삭제</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
* {
  text-decoration: none;
  list-style: none;
}
.body {
  margin: auto;
}
.main {
  width: 900px;
  height: 900px;
  margin: auto;
  display: flex;
  align-items: center;
}
.left-box {
  float: left;
  width: 30%;
  height: 600px;
  display: flex;
  justify-content: center;
  position: relative;
}
.left-box-inner {
  display: flex;
  justify-content: center;
  position: relative;
  width: 200px;
  height: 600px;
  background-color: aqua;
}
.left-box-profile {
  position: absolute;
  float: left;
  top: 20%;
}
.guest-img {
  width: 100px;
  height: 100px;
}
.my-name {
  text-align: center;
  font-size: 20px;
  text-decoration: underline;
}
.left-box-select-rsv {
  position: absolute;
  float: left;
  top: 60%;
  background-color: gray;
}
#select-info {
  text-align: center;
  width: 150px;
  height: 100px;
}
#select-rsvinfo {
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#select-profileinfo {
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right-box {
  background: rgb(255, 255, 255);
  width: 70%;
  height: 600px;
  float: right;
}
.blank-box {
  height: 100px;
}
.greet-user {
  display: flex;
  align-items: center;
  width: 630px;
  height: 100px;
}
.right-box-rsvinfo-table {
}
.right-box-rsvinfo {
  background-color: rgb(55, 55, 206);
  width: 500px;
  height: 50px;
  display: flex;
  align-items: center;
}
.right-box-detail-rsvinfo {
  background-color: rgb(69, 69, 164);
  width: 500px;
  height: 50px;
  display: flex;
  align-items: center;
}
.change-rsv {
}
.change-delete {
}
</style>
