<template>
  <div>
    <HelloWorld />
    <MainPage />
    <MainCalendar />
  </div>

</template>

<script>
import HelloWorld from '../components/HelloWorld'
import MainPage from '../components/MainPage'
import MainCalendar from '../components/MainCalendar'

export default {
  name: 'HomeView',

  components: {
    HelloWorld,
    MainPage,
    MainCalendar
  }
}
</script>
