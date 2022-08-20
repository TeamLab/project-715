<template>
  <div class="right-box">
    <div class="blank-box"></div>
    <p class="greet-user">황부현님, 안녕하세요</p>
    <div class="rsvinfo">
      <ul class="right-box-rsvinfo-table">
        <li class="right-box-rsvinfo">&nbsp;&nbsp;예약 정보</li>
        <div class="right-box-rsvinfo-box">
          <div class="right-box-detail-rsvinfo">
            <div class="right-box-list-rsvinfo">2022.08.22 15:00 - 17:00 1번 테이블 예약 3인</div>
            <button class="change-delete">삭제</button>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
.right-box{
  background: rgb(255, 255, 255);
  width:70%;
  padding-top:10%;
  min-width: 550px;
}
.blank-box{
  height: 10%;
}
.greet-user{
  display: flex;
  align-items: center;
  height:10%;
}
.right-box-rsvinfo{
  background-color: rgb(109, 109, 255);
  height:50px;
  display: flex;
  align-items: center;
  background-color: rgb(0, 36, 72);
  color:white;
}
.right-box-rsvinfo-box{
  height:350px;
  border-left:solid gray;
  border-right:solid gray;
  border-bottom:solid gray;
}
.right-box-detail-rsvinfo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(237, 235, 235);
  height:50px;
  border-bottom: solid rgb(189, 189, 189);
}
.right-box-rsvinfo-table {
  padding: 0;
}
.right-box-list-rsvinfo {
  margin-left: 12px;
}
.change-delete{
  width: 50px;
  margin: 6px 12px;
  border: solid gray;
}
.change-delete:hover{
  background-color:rgb(121, 121, 121);
}
</style>
