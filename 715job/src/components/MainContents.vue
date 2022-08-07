<template>
  <div>
    <div class="main-text">
      <h1>PKNU SME 가온관 715호 사용규칙</h1>
        <p>팀 프로젝트 및 세미나 진행을 위한 협업룸으로 사용됩니다!</p>
        <p>함께 사용하고자 하는 공간이 필요한 학생이라면 누구나 예약 후 사용하실 수 있습니다.</p>
      <br>
      <h2 class="bold">사용 규칙</h2>
      <br>
        <p>1. 대학원생은 사용 7일 전부터, 학부생은 사용 2일 전부터 예약이 가능하다.
          <br>
          ex) 학부생의 경우 7월 4일에 사용 예약을 하고자 한다면, 7월 6일까지 예약이 가능하다. </p>
        <p>2. 사용 가능한 시간 제약은 없지만, 사용하고자 하는 인원이 많을 경우에는 2~3시간 정도의 사용이 권장된다.</p>
        <p>3. 협업룸은 모두가 함께 사용하는 공간이니 서로를 위해 청결하고 소중하게 사용한다.</p>
        <p>4. 715호 내 설비
          <br>
          - TV, 트롤리(TV 리모컨, 보드마카, 멀티탭, HDMI) 자유롭게 사용이 가능합니다.
          <br>
          - 사용 후 제자리에 꼭 두어 다음에 필요시 찾는 수고를 덜 수 있도록 협조 바랍니다.
        </p>
        <p>5. 다른 인원과 함께 사용 시 최대한 정숙을 기하여 주시기 바라며, 필요시 나가서 전화를 받는 등의 기본 에티켓을 지켜주시기 바랍니다.</p>
    </div>
    <div class="dummy-for-calendar"></div>
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

<style scoped>
.main-text {
  margin: 48px 48px 0px 48px;
}
.main-text > p {
  font-size: 18px;
}
.dummy-for-calendar {
  height: 370px;
}
</style>
