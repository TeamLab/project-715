<template>
<div class="main">
  <div class="left-box">
    <div class="left-box-inner">
      <div class="left-box-profile">
        <img class="guest-img" src="@/assets/guest-img.png" alt="guest">
        <p class="my-name">황부현</p>
        <div id="select-info">
          <div class="select-info" id="select-rsvinfo"><button @click="setMyRsvInfo">예약 정보</button></div>
          <div class="select-info" id="select-profileinfo"><button @click="setPersonalInfo">개인 정보</button></div>
        </div>
      </div>
    </div>
  </div>
  <MyRsvInfo v-if="isMyRsvInfo"/>
  <PersonalInfo v-if="isPersonalInfo"/>
</div>
</template>
<script>
import PersonalInfo from '../components/PersonalInfo.vue'
import MyRsvInfo from '../components/MyRsvInfo.vue'

export default {
  components: {
    PersonalInfo,
    MyRsvInfo
  },
  data() {
    return {
      isPersonalInfo: false,
      isMyRsvInfo: true
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    setPersonalInfo() {
      this.isPersonalInfo = true
      this.isMyRsvInfo = false
    },
    setMyRsvInfo() {
      this.isPersonalInfo = false
      this.isMyRsvInfo = true
    }
  }
}
</script>
<style scoped>
* {
  text-decoration: none;
  list-style: none;
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
  width: 150px;
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
.right-box-rsvinfo-table{
  padding-left:7%;
}
.right-box-rsvinfo{
  background-color: rgb(109, 109, 255);
  width:90%;
  height:50px;
  display: flex;
  align-items: center;
}
.right-box-detail-rsvinfo{
  background-color: rgb(237, 235, 235);
  height:50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid rgb(189, 189, 189);
}
.right-box-rsvinfo-box{
  width:90%;
  height:300px;
  border:solid rgb(133, 214, 255);
}
.change-rsv{
  border:solid gray;
  float:right;
  margin-left:5%;
  padding:5px;
}
.change-rsv:hover{
  background-color:rgb(121, 121, 121)
}
.change-delete{
  border:solid gray;
  float:right;
  margin-left:5%;
  padding:5px;
}
.change-delete:hover{
  background-color:rgb(121, 121, 121)
}
</style>
