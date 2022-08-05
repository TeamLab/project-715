<template>
  <div>
    <MainPage />
    <MainCalendar />
  </div>
</template>

<script>
import MainPage from '../components/MainPage'
import MainCalendar from '../components/MainCalendar'

export default {
  name: 'HomeView',

  components: {
    MainPage,
    MainCalendar
  }
}
</script>
