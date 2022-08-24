<template>
  <div class="right-box">
    <div class="blank-box"></div>
    <p class="greet-user">{{ name }}님, 안녕하세요</p>
    <div class="psninfo">
      <div class="right-box-psninfo-table">
        <li class="right-box-psninfo">&nbsp;&nbsp;개인 정보</li>
        <div class="right-box-psninfo-box">
          <form>
            <v-select
              :items="items"
              label="직책"
              dense
              outlined
              :style='{"padding-top":"20px", "padding-left":"20px", "padding-right":"20px", "width":"50%"}'
            ></v-select>

            <v-text-field
              value="hwangbh8@gmail.com"
              :rules="emailRule"
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
</template>

<script>
export default {
  props: {
    name: String
  },
  data: () => ({
    items: ['학사', '석사', '교수'],
    emailRule: [
      v => !!v || '이메일을 입력해주세요.',
      v => {
        const replaceV = v.replace(/(\s*)/g, '')
        const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
        console.log(pattern.test(replaceV))
        return pattern.test(replaceV) || '이메일 형식으로 입력해주세요'
      }
    ]
  })

}
</script>
<style scoped>
.right-box{
  background: rgb(255, 255, 255);
  width:70%;
  float:right;
  padding-top:10%;
}
.blank-box{
  height: 10%;
}
.greet-user{
  display: flex;
  align-items: center;
  height:10%;
}
.right-box-psninfo{
  background-color: rgb(0, 36, 72);
  color:white;
  width:90%;
  height:50px;
  display: flex;
  align-items: center;
}
.right-box-psninfo-box{
  background-color: rgb(255, 255, 255);
  width:90%;
  height:350px;
  border-left:solid gray;
  border-right:solid gray;
  border-bottom:solid gray;
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
