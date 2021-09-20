<template>
  <div id="app">
    <Intro v-if="showIntro" @hide="hide"/>
    <div v-show="!showIntro" class="site-content">
      <Carousel :carousel-index="carouselIndex"/>
      <Navigation @change="changeSlide"/>
      <Changer @change="changeSlide" :carousel-index="carouselIndex"/>
    </div>
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import Carousel from './components/Carousel.vue'
import Navigation from "@/components/Navigation";
import Changer from "@/components/Changer";

export default {
  name: 'App',
  components: {
    Changer,
    Intro,
    Carousel,
    Navigation
  },
  data() {
    return {
      showIntro: true,
      carouselIndex: 2
    }
  },
  mounted() {

  },
  methods:{
    hide(){
      this.showIntro = false
    },
    changeSlide(ind){
      this.carouselIndex = ind
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
.site-content{
  animation: fade-in 0.5s forwards;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
}
</style>
