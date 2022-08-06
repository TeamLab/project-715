<template>
  <div class="right-box">
    <div class="blank-box"></div>
    <p class="greet-user">황부현님, 안녕하세요</p>
    <div class="rsvinfo">
      <ul class="right-box-rsvinfo-table">
        <li class="right-box-rsvinfo">&nbsp;&nbsp;예약 정보</li>
        <div class="right-box-rsvinfo-box">
          <li class="right-box-detail-rsvinfo">2022.08.22 15:00 1번 테이블 예약 3인
            <button class="change-rsv">수정</button>
            <button class="change-delete">삭제</button>
          </li>
          <li class="right-box-detail-rsvinfo">2022.08.27 17:00 4번 테이블 예약 2인
            <button class="change-rsv">수정</button>
            <button class="change-delete">삭제</button>
          </li>
          <li class="right-box-detail-rsvinfo">2022.09.04 09:00 3번 테이블 예약 3인
            <button class="change-rsv">수정</button>
            <button class="change-delete">삭제</button>
          </li>
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
