<template>
  <div class="text-center main-page">
    <div>
      <p draggable="false">Reservation for Room 715</p>
      <v-btn
        dark
        width="200px"
        height="60px"
        color="#002448"
        class="booknow-button"
        :style="{ 'font-size': '19px' }"
        >
        Book now
      </v-btn>
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

<style scoped>
.main-page {
  width: 100%;
  height: 754px;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Fira Sans';
}
.booknow-button {
  border-radius: 15px;
  margin-bottom: 100px;
}
.main-page p {
  font-size: 50px;
  margin-bottom: 100px;
  color: #002448;
  text-shadow:1px 1px 2px #3A5079;
}
</style>
