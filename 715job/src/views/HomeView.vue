<template>
  <div>
    <MainPage @setBooking="setInput"/>
    <MainContents v-if="!isBooking"/>
    <div ref="MainCalendar">
      <MainCalendar v-if="isBooking"/>
    </div>
  </div>
</template>

<script>
import MainPage from '../components/MainPage'
import MainContents from '../components/MainContents'
import MainCalendar from '../components/MainCalendar'

export default {
  name: 'HomeView',
  data() {
    return {
      isBooking: false
    }
  },
  components: {
    MainPage,
    MainCalendar,
    MainContents
  },
  methods: {
    setInput(isBooking) {
      this.isBooking = isBooking
      window.scrollTo({ top: this.$refs.MainCalendar.offsetTop, behavior: 'smooth' })
    }
  }
}
</script>
