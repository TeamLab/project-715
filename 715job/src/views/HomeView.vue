<template>
  <div>
    <MainPage @setBooking="setInput"/>
    <MainCalendar :showCalendar="isBooking" />
  </div>
</template>

<script>
import MainPage from '../components/MainPage'
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
    MainCalendar
  },
  methods: {
    setInput(isBooking) {
      this.isBooking = isBooking
      console.log(isBooking)
    }
  }
}
</script>
