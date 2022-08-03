<template>
  <div>
    <HelloWorld />
    <MainPage />
  </div>

</template>

<script>
import HelloWorld from '../components/HelloWorld'
import MainPage from '../components/MainPage'

export default {
  name: 'HomeView',

  components: {
    HelloWorld,
    MainPage
  }
}
</script>
