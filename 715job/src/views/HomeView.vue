<template>
  <div>
    <MainPage @setBooking="setInput"/>
    <MainContents v-if="!isBooking"/>
    <div ref="MainCalendar">
      <MainCalendar v-if="isBooking" @isDatePicked="showFloorPlan" :hideDummy="isDatePicked"/>
    </div>
    <div ref="MainFloorPlan">
      <MainFloorPlan v-if="isDatePicked" @isTablePicked="showRsvContents" :hideDummy="isTablePicked"/>
    </div>
    <div ref="MainRsvContents">
      <MainRsvContents v-if="isTablePicked"/>
    </div>
  </div>
</template>

<script>
import MainPage from '../components/MainPage'
import MainContents from '../components/MainContents'
import MainCalendar from '../components/MainCalendar'
import MainFloorPlan from '../components/MainFloorPlan'
import MainRsvContents from '../components/MainRsvContents.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      isBooking: false,
      isDatePicked: false,
      isTablePicked: false
    }
  },
  components: {
    MainPage,
    MainCalendar,
    MainContents,
    MainFloorPlan,
    MainRsvContents
  },
  watch: {
    isTablePicked() {
      window.scrollTo({ top: this.$refs.MainRsvContents.offsetTop + 96, behavior: 'smooth' })
    }
  },
  methods: {
    setInput(isBooking) {
      this.isBooking = isBooking
      window.scrollTo({ top: this.$refs.MainCalendar.offsetTop, behavior: 'smooth' })
    },
    showFloorPlan(isDatePicked) {
      this.isDatePicked = isDatePicked
      window.scrollTo({ top: this.$refs.MainFloorPlan.offsetTop + 96, behavior: 'smooth' })
    },
    showRsvContents(isTablePicked) {
      this.isTablePicked = isTablePicked
      window.scrollTo({ top: this.$refs.MainFloorPlan.offsetTop + 131, behavior: 'smooth' })
    }
  }
}
</script>
<style>
.dummy-calendar {
  display: none;
}
</style>
