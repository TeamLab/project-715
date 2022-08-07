<template>
  <div class="body">
    <div class="main">
      <ul class="timeLists">
        <li v-for="(timeNum, i) in timeNum" :key="i">
          <v-btn
            class="v_btn_timeTable"
            :ripple="false"
            :color="bgTimeColor"
            @click="selectTime"
            >{{ timeNum }}</v-btn
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      bgTimeColor: '#d9d9d9',
      timeNum: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    selectTime(i) {
      this.timeNum[i].bgTimeColor = 'white'
    }
  }
}
</script>

<style scoped>
.main {
  max-width: 900px;
  width: 70%;
  margin: auto;
  margin-top: 30px;
}
.timeLists {
  max-width: 900px;
  display: flex;
  padding: 0px;
  height: 200px;
  margin-bottom: 50px;
}
.timeLists > li {
  width: 100%;
  height: 100%;
  list-style: none;
  border-right: 1px solid black;
  text-align: center;
}
.timeLists > li > .v_btn_timeTable {
  width: 100%;
  height: 100%;
  min-width: 10px;
  padding: 0px;
}
</style>
