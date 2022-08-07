<template>
  <v-col class="main-floor-plan-container">
    <v-col class="rsv-text">
      <h1>예약 테이블 선택</h1>
    </v-col>
    <v-col class="main-floor-plan" style="display:flex;flex-direction:column">
      <div class="row-17" style="display:flex;">
        <div class="col-14"></div>
        <div class="col-23"></div>
        <div class="col-23"></div>
        <div class="col-14"></div>
      </div>
      <div class="table-1to6" style="display:flex;">
        <div class="col-14"></div>
        <div class="col-23 table-135"><v-btn dark height="100%" width=100% class="table-btn">Table 1</v-btn></div>
        <div class="col-23 table-246"><v-btn dark height="100%" width=100% class="table-btn">Table 2</v-btn></div>
        <div class="col-14"></div>
      </div>
      <div class="row-23" style="display:flex;">
        <div class="col-14"></div>
        <div class="col-23"></div>
        <div class="col-23"></div>
        <div class="col-14"></div>
      </div>
      <div class="table-1to6" style="display:flex;">
        <div class="col-14"></div>
        <div class="col-23 table-135"><v-btn dark height="100%" width=100% class="table-btn">Table 3</v-btn></div>
        <div class="col-23 table-246"><v-btn dark height="100%" width=100% class="table-btn">Table 4</v-btn></div>
        <div class="col-14"></div>
      </div>
      <div class="row-23" style="display:flex;">
        <div class="col-14"></div>
        <div class="col-23"></div>
        <div class="col-23"></div>
        <div class="col-14"></div>
      </div>
      <div class="table-1to6" style="display:flex;">
        <div class="col-14"></div>
        <div class="col-23 table-135"><v-btn dark height="100%" width=100% class="table-btn">Table 5</v-btn></div>
        <div class="col-23 table-246"><v-btn dark height="100%" width=100% class="table-btn">Table 6</v-btn></div>
        <div class="col-14"></div>
      </div>
      <div class="row-17" style="display:flex;">
        <div class="col-14"></div>
        <div class="col-23"></div>
        <div class="col-23"></div>
        <div class="col-14"></div>
      </div>
    </v-col>
  </v-col>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style>
.main-floor-plan-container {
  height: 1024px;
  width:70%;
  max-width: 900px;
  margin: auto;
  padding-top: 48px;
}
.main-floor-plan {
  height: 465px;
  display: block;
  width: 100%;
  padding: 0;
  background-image: url('../assets/floorplan.PNG');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.row-17 {
  height: 56px;
}
.table-1to6 {
  height: 85px;
}
.row-23 {
  height: 49px;
}
.col-14 {
  width: 20%;
}
.col-23 {
  width: 30%;
}
.table-135 {
  border-right: 1px solid #b0bbca;
}
.table-246 {
  border-left: 1px solid #b0bbca;
}
</style>
