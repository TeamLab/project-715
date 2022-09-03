<template>
  <div>
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
          <div class="col-23 table-135"><v-btn dark :color=ButtonColors[1] height="100%" width=100% class="table-btn" @click="showRsvContents('1'), setColor('1')">Table 1</v-btn></div>
          <div class="col-23 table-246"><v-btn dark :color=ButtonColors[2] height="100%" width=100% class="table-btn" @click="showRsvContents('2'), setColor('2')">Table 2</v-btn></div>
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
          <div class="col-23 table-135"><v-btn dark :color=ButtonColors[3] height="100%" width=100% class="table-btn" @click="showRsvContents('3'), setColor('3')">Table 3</v-btn></div>
          <div class="col-23 table-246"><v-btn dark :color=ButtonColors[4] height="100%" width=100% class="table-btn" @click="showRsvContents('4'), setColor('4')">Table 4</v-btn></div>
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
          <div class="col-23 table-135"><v-btn dark :color=ButtonColors[5] height="100%" width=100% class="table-btn" @click="showRsvContents('5'), setColor('5')">Table 5</v-btn></div>
          <div class="col-23 table-246"><v-btn dark :color=ButtonColors[6] height="100%" width=100% class="table-btn" @click="showRsvContents('6'), setColor('6')">Table 6</v-btn></div>
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
    <v-col class="dummy-for-mainrsvcontents" v-if="!hideDummy"></v-col>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    hideDummy: Boolean
  },
  data() {
    return {
      isTablePicked: true,
      PickedTable: '',
      ActiveButton: '',
      ButtonColors: {
        1: '#272727',
        2: '#272727',
        3: '#272727',
        4: '#272727',
        5: '#272727',
        6: '#272727'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    showRsvContents (PickedTable) {
      this.PickedTable = PickedTable
      this.$emit('isTablePicked', this.isTablePicked, this.PickedTable)
    },
    setColor(i) {
      for (let j = 1; j <= 6; j++) {
        this.ButtonColors[j] = '#272727'
      }
      this.ButtonColors[i] = '#769fcd'
      this.ActiveButton = i
    }
  }
}
</script>
<style>
.main-floor-plan-container {
  width:70%;
  max-width: 900px;
  margin: auto;
  padding-top: 48px;
}
.dummy-for-mainrsvcontents {
  height: calc(98vh - 615px);
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
