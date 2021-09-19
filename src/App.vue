<template>
  <div id="app">
    <Carousel v-if="!showIntro"/>
    <Test v-show="false"/>
    <Intro v-if="showIntro" @hide="hide"/>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import Test from './components/Test.vue'
import Intro from './components/Intro.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Test,
    Intro
  },
  data() {
    return {
      showIntro: true
    }
  },
  mounted() {

  },
  methods:{
    hide(){
      this.showIntro = false
    }
  }
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin:  0;
  animation: animate-background 0.5s forwards;
  animation-delay: 0.75s;
}
#app{
  height: 100%;
}
.hidden{
  display: none;
}

@keyframes animate-background {
  from {
    background-color: #EFEAE4;
  }
  to {
    background-color: #30332A;
  }
}
</style>
