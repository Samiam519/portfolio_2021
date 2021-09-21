<template>
  <div id="app">
    <Intro v-if="showIntro" @hide="hide"/>
    <div v-show="!showIntro" class="site-content">
      <Carousel @change="changeSlide" :carousel-index="carouselIndex" :soundOn="soundOn"/>
      <Navigation @change="changeSlide" :carousel-index="carouselIndex"/>
      <Changer @prev="prev" @next="next" :carousel-index="carouselIndex"/>
      <div id="volumeWrapper">
        <b-button
            class="is-rounded is-black is-large"
            :icon-right="soundOn ? 'volume-up' : 'volume-mute'"
            @click="changeSound"
            aria-label="Change volume"
        />
      </div>
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
      carouselIndex: 2,
      soundOn: true
    }
  },
  mounted() {
    // add listeners for keys
    window.addEventListener('keydown', (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        this.prev()
      }else if(e.key === "ArrowRight" || e.key === "ArrowUp"){
        this.next()
      }
    });
  },
  methods: {
    hide() {
      this.showIntro = false
    },
    changeSound(){
      this.soundOn = !this.soundOn
    },
    changeSlide(ind) {
      this.carouselIndex = ind
    },
    prev() {
      if (this.carouselIndex === 0) {
        this.changeSlide(7)
      } else {
        this.changeSlide(this.carouselIndex - 1)
      }
    },
    next() {
      if (this.carouselIndex === 7) {
        this.changeSlide( 0)
      } else {
        this.changeSlide(this.carouselIndex + 1)
      }
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
  overflow: hidden;
  font-size: 16px;
  background-color: #EFEAE4;
}

#app {
  height: 100%;
}

#volumeWrapper{
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  width: auto;
}

#volumeWrapper > button:hover{
  background-color: #5a5b55;
}

.site-content {
  animation: fade-in 0.5s forwards;
}

.hero-body h1 {
  align-self: end;
}

.field{
  font-size: 1em;
}
.field.label{
  margin: 0;
}

.notification{
  filter:drop-shadow(10px 10px 0 #30332A);
  border: 4px solid #30332A;
}

.button{
  filter:drop-shadow(5px 5px 0 #30332A);
  border: 2px solid #30332A !important;
  border-radius: 0;
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
@-webkit-keyframes animate-background
{
  from {
    background-color: #EFEAE4;
  }
  to {
    background-color: #30332A;
  }
}
@-moz-keyframes animate-background
{
  from {
    background-color: #EFEAE4;
  }
  to {
    background-color: #30332A;
  }
}
@-ms-keyframes animate-background
{
  from {
    background-color: #EFEAE4;
  }
  to {
    background-color: #30332A;
  }
}
@keyframes animate-background
{
  from {
    background-color: #EFEAE4;
  }
  to {
    background-color: #30332A;
  }
}

@-webkit-keyframes fade-in
{
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
}
@-moz-keyframes fade-in
{
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
}
@-ms-keyframes fade-in
{
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
}
@keyframes fade-in
{
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
}

@-webkit-keyframes highlight
{
  0% {
    width: 0;
    opacity: 0;
  }

  50% {
    width: 100%;
    opacity: 1;
  }
}
@-moz-keyframes highlight
{
  0% {
    width: 0;
    opacity: 0;
  }

  50% {
    width: 100%;
    opacity: 1;
  }
}
@-ms-keyframes highlight
{
  0% {
    width: 0;
    opacity: 0;
  }

  50% {
    width: 100%;
    opacity: 1;
  }
}
@keyframes highlight
{
  0% {
    width: 0;
    opacity: 0;
  }

  50% {
    width: 100%;
    opacity: 1;
  }
}
/*-----------------
Standardized colors
-----------------*/

.red {
  fill: #ed5959;
}
.blue{
  fill: #40c6ee;
}
.yellow {
  fill: #FDF388;
}

.dark-yellow {
  fill: #e0d580;
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

.white{
  fill: #EFEAE4;
}

.black, .cls-text{
  fill: #181914;
}

.black-stroke {
  fill: none;
  stroke: #181914;
  stroke-miterlimit: 10;
  stroke-width: 4px;
}

.dark-grey-stroke {
  stroke: #30332a;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}

.white-stroke {
  fill: none;
  stroke: #EFEAE4;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}

.blue-stroke {
  fill: none;
  stroke: #40c6ee;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}

.no-stroke {
  fill: none;
  stroke: transparent;
  stroke-miterlimit: 10;
  stroke-width: 4px;
}

.large-stroke{
  stroke-width: 4px;
}

.text-stroke{
  paint-order: stroke;
  stroke: #30332a;
  stroke-width: 5px;
  stroke-linecap: butt;
  stroke-linejoin: miter;
}

.is-highlighted{
  position: relative;
  z-index: 0;
  text-decoration: none;
}

.is-highlighted::before {
  filter: opacity(0.5);
  position: absolute;
  content: "";
  height: 20px;
  width: 100%;
  z-index: -1;
  bottom: 0;
  transform: translate(10px, -4px);
  animation: highlight 0.5 forwards;
}

.blue-highlight::before {
  background-color: #40c6ee;
}

.red-highlight::before {
  background-color: #ed5959;
}

.yellow-highlight::before {
  background-color: #FDF388;
}

.white-highlight::before {
  background-color: #fff;
}

.cls-text {
  font-size: 12px;
  font-family: Abside-Round1, Abside;
}

.logo-name-text > text{
  font-family: Streamster;
  font-size: 170px;
}

.logo-subtitle-text{
  font-size: 20px;
}
</style>
