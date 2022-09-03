<template>
  <div>
    <div class="main-text">
      <h1><v-icon size="40px" style="margin-bottom:4px;" color="blue darken-2">mdi-checkbox-marked-outline</v-icon> PKNU SME 가온관 715호 협업룸 이용 규칙</h1>
      <br>
      <p>가온관 715호는 팀 프로젝트 및 세미나 진행을 위한 <span class="bg-lightblue">협업룸</span>으로 이용됩니다!</p>
      <p>함께 이용하고자 하는 공간이 필요하신 분이라면 <span class="bg-lightblue">누구나 예약 후 이용 가능</span>합니다.</p>
      <br>
      <h2>이용 규칙</h2>
      <br>
        <p>1. <span class="bg-lightblue">대학원생은 이용 7일 전</span>부터, <span class="bg-lightblue">학부생은 이용 2일 전</span>부터 예약이 가능합니다.
        <br>ex) 학부생의 경우 7월 6일에 협업룸을 이용하고자 한다면, 7월 4일부터 예약이 가능합니다.</p>
        <p>2. 이용 가능한 시간 제약은 없지만, 이용하고자 하는 인원이 많을 경우에는 2~3시간 정도의 이용이 권장됩니다.</p>
        <p>3. 715호 협업룸 내 설비
          <br>
          - TV, 트롤리(TV 리모컨, 보드마카, 멀티탭, HDMI 등)은 <span class="bg-lightblue">자유롭게 이용이 가능</span>합니다.
          <br>
          - 이용 후 제자리에 꼭 두어 이후에 이용할 다른 학생의 수고를 덜 수 있도록 협조 바랍니다.
        </p>
        <p>4. 다른 인원과 함께 이용 시 상호 배려하며 <span class="bg-lightblue">기본적인 에티켓</span>을 지켜주시기 바랍니다. </p>
        <p>5. 715호 협업룸은 <span class="bg-lightblue">모두가 함께 이용하는 공간</span>이니 서로를 위해 <span class="text-red">반드시 청결하고 소중하게 이용합니다!</span></p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style>
.main-text {
  margin: 48px;
}
.bg-lightblue {
  background-color: rgba(186, 214, 241, 0.5);
}
.text-red {
  color: rgb(212, 0, 0);
}
</style>
