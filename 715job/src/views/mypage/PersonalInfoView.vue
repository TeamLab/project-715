<template>
  <div class="body">
    <div class="main">
      <div class="left-box">
        <div class="left-box-inner">
          <div class="left-box-profile">
            <img class="guest-img" src="@/assets/guest-img.png" alt="guest">
            <p class="my-name">황부현</p>
            <div id="select-info">
              <div class="select-info" id="select-rsvinfo"><a href="#">예약 정보</a></div>
              <div class="select-info" id="select-profileinfo"><a href="#">개인 정보 수정</a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="blank-box"></div>
        <p class="greet-user">황부현님, 안녕하세요</p>
        <div class="psninfo">
          <div class="right-box-psninfo-table">
            <li class="right-box-psninfo">&nbsp;&nbsp;개인 정보 수정</li>
            <div class="right-box-psninfo-box">
              <div class="grade">
                <div class="change">학위 변경</div>
                <div class="change-grade-button-set">
                <button class="change-psn-info" v-on:click="openNew">학사</button>
                <button class="change-psn-info" v-on:click="openNew">석사</button>
                <button class="change-psn-info" v-on:click="openNew">교수</button>
                </div>
              </div>
              <div class="e-mail">
                <div class="change">e-mail 수정</div>
                <input class="input-text" v-model="message" placeholder="여기를 수정해보세요">
              </div>
              <div class="password">
                <div class="change">비밀번호 변경</div>
                <input class="input-text" v-model="message" placeholder="여기를 수정해보세요">
              </div>
              <div class="password-check">
                <div class="change">비밀번호 변경 확인</div>
                <input class="input-text" v-model="message" placeholder="여기를 수정해보세요">
              </div>
              <div class="check">
                <button class="cancle" v-on:click="openNew">취소</button>
                <button class="final-change" v-on:click="openNew">변경</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
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
  width: 70%;
  height: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left-box{
  float:left;
  width:30%;
  height:500px;
  display: flex;
  justify-content: center;
  position: relative;
}
.left-box-inner{
  display: flex;
  justify-content: center;
  position: relative;
  width:70%;
  height:500px;
  background-color: rgb(255, 255, 255);
}
.left-box-profile{
  justify-content: center;
  position: relative;
  padding-top:50px;
}
.guest-img{
  width: 100%;
  height:20%;
}
.my-name{
  text-align: center;
  font-size: 80%;
  text-decoration: underline;
}
#select-info{
  padding-top: 50%;
}
.select-info{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: rgb(219, 242, 251);
}
#select-rsvinfo{
  border:solid rgb(133, 214, 255);
}
#select-profileinfo > a{
  color:black;
}
#select-rsvinfo > a:hover{
  color:blue;
}
#select-profileinfo > a:hover{
  color:blue;
}
#select-profileinfo{
  border-left:solid rgb(133, 214, 255);
  border-right:solid rgb(133, 214, 255);
  border-bottom:solid rgb(133, 214, 255);
}
.right-box{
  background: rgb(255, 255, 255);
  width:70%;
  height:500px;
  float:right;
}
.blank-box{
  height: 10%;
}
.greet-user{
  display: flex;
  align-items: center;
  height:10%;
  padding-left:10%;
}
.right-box-psninfo-table{
  padding-left:7%;
}
.right-box-psninfo{
  background-color: rgb(109, 109, 255);
  width:90%;
  height:50px;
  display: flex;
  align-items: center;
}
.right-box-psninfo-box{
  background-color: rgb(49, 49, 152);
  width:90%;
  height:300px;
  border:solid rgb(133, 214, 255);
}
.change-grade{
}
.change-psn-info{
  border:solid gray;
  padding-left:10px;
  padding-right:10px;
  margin-left: 5%;
}
.change-psn-info:hover{
  background-color: gray;
}
.change-grade-button-set{
  display: flex;
  align-items: center;
}
.input-text{
  border:solid gray;
  width: 70%;
  height: 25px;
  margin-left: 5%;
}
.input-text:hover{
  background-color: azure;
}
.change{
  height: 35px;
  display: flex;
  align-items: center;
  padding-left:2%;
}
.check{
  float: right;
}
.cancle{
  margin:10px;
  border:solid gray;
  padding:3px;
}
.cancle:hover{
  background-color: gray;
}
.final-change{
  margin-right:15px;
  border:solid gray;
  padding:3px;
}
.final-change:hover{
  background-color: gray;
}
</style>
