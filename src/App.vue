<template>
  <div id="app">
    <Carousel/>
    <Test v-show="false"/>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Test
  }
}
</script>
