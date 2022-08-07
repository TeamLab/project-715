<template>
  <div>
    <div class="main-text">
      <h1>PKNU SME 가온관 715호 사용규칙</h1>
      <p>팀 프로젝트 및 세미나 진행을 위한 협업룸으로 사용됩니다!</p>
      <p>함께 사용하고자 하는 공간이 필요한 학생이라면 누구나 예약 후 사용하실 수 있습니다.</p>
      <br>
      <h2 class="bold">사용 규칙</h2>
      <br>
      <p>1. 예약 시에는 예약자가 누구인지 알 수 있도록 한다. </p>
      <p>2. 사용 가능한 시간 제약은 없지만, 사용하고자 하는 인원이 많을 경우에는 2~3시간 정도의 사용이 권장된다.</p>
      <p>3. 협업룸은 모두가 함께 사용하는 공간이니 서로를 위해 청결하고 소중하게 사용한다.</p>
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
