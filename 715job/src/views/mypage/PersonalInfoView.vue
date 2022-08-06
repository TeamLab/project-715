<template>
  <div class="body">
    <div class="main">
      <div class="left-box">
        <div class="left-box-inner">
          <div class="left-box-profile">
            <img class="guest-img" src="@/assets/guest-img.png" alt="guest">
            <p class="my-name">황부현</p>
            <div id="select-info">
              <div class="select-info" id="select-rsvinfo"><router-link to="/mypage/rsvinfo">예약 정보</router-link></div>
              <div class="select-info" id="select-profileinfo"><router-link to="/mypage/psninfo">개인 정보 수정</router-link></div>
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
              <form>
                <v-select
                  :items="items"
                  label="학위 변경"
                  dense
                  outlined
                  :style='{"padding-top":"20px", "padding-left":"20px", "padding-right":"20px"}'
                ></v-select>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  :style='{"padding-left":"20px", "padding-right":"20px"}'
                ></v-text-field>

                <v-text-field
                  class="password-input"
                  label="비밀번호 변경"
                  type="password"
                  :style='{"padding-left":"20px", "padding-right":"20px"}'
                ></v-text-field>

                <v-text-field
                  class="password-input"
                  label="비밀번호 변경 확인"
                  type="password"
                  :style='{"padding-left":"20px", "padding-right":"20px"}'
                ></v-text-field>

                <v-btn
                  @click="submit"
                  class="mr-4"
                  dark
                  color="#002448"
                  height="45px"
                  width="100px"
                  :style='{"border-radius": "15px", "font-family": "Fira Sans", "float":"right"}'
                >
                  submit
                </v-btn>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ['학사', '석사', '교수']
  })
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
  background-color: rgb(255, 255, 255);
  width:90%;
  height:350px;
  border:solid rgb(133, 214, 255);
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
