<template>
  <div id="app">
    <Intro v-if="showIntro" @hide="hide"/>
    <div v-show="!showIntro" class="site-content">
      <Carousel @change="changeSlide" :carousel-index="carouselIndex"/>
      <Navigation @change="changeSlide" :carousel-index="carouselIndex"/>
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
  methods: {
    hide() {
      this.showIntro = false
    },
    changeSlide(ind) {
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
  margin: 0;
  animation: animate-background 0.5s forwards;
  animation-delay: 0.75s;
}

#app {
  height: 100%;
}

.site-content {
  animation: fade-in 0.5s forwards;
}
.notification{
  filter:drop-shadow(10px 10px 0 #30332A);
  border: 4px solid #30332A;
}
.is-absolute{
  position: absolute;
}
.is-fullwidth, .is-ancestor{
  width: 100%;
}
/*-----------------
---------Animations
-----------------*/
@keyframes animate-background {
  from {
    background-color: #EFEAE4;
  }
  to {
    background-color: #30332A;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
}
/*-----------------
Standardized colors
-----------------*/
.yellow {
  fill: #FDF388;
}

.dark-yellow {
  fill: #e0d580;
}

.black-stroke {
  fill: none;
  stroke: #181914;
  stroke-miterlimit: 10;
  stroke-width: 4px;
}

.cls-text {
  font-size: 12px;
  font-family: Abside-Round1, Abside;
}

.cls-text {
  fill: #efe7dc;
}

.pure-white {
  fill: #ffffff;
}

.dark-grey {
  fill: #30332a;
}

.black, .cls-text{
  fill: #181914;
}

.red {
  fill: #ed5959;
}
</style>
