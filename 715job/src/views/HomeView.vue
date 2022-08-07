<template>
  <div>
    <MainPage @setBooking="setInput"/>
    <MainContents v-if="!isBooking"/>
    <div ref="MainCalendar">
      <MainCalendar v-if="isBooking" @isPicked="showFloorPlan" :hideDummy="isPicked"/>
    </div>
    <div ref="MainFloorPlan">
      <MainFloorPlan v-if="isPicked"/>
    </div>
  </div>
</template>

<script>
import MainPage from '../components/MainPage'
import MainContents from '../components/MainContents'
import MainCalendar from '../components/MainCalendar'
import MainFloorPlan from '../components/MainFloorPlan'

export default {
  name: 'HomeView',
  data() {
    return {
      isBooking: false,
      isPicked: false
    }
  },
  components: {
    MainPage,
    MainCalendar,
    MainContents,
    MainFloorPlan
  },
  methods: {
    setInput(isBooking) {
      this.isBooking = isBooking
      window.scrollTo({ top: this.$refs.MainCalendar.offsetTop, behavior: 'smooth' })
    },
    showFloorPlan(isPicked) {
      this.isPicked = isPicked
      window.scrollTo({ top: this.$refs.MainFloorPlan.offsetTop + 96, behavior: 'smooth' })
    }
  }
}
</script>
