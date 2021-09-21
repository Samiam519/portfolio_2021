<template>
  <div id="app">
    <Intro v-if="showIntro" @hide="hide"/>
    <div v-show="!showIntro" class="animate__animated animate__fadeIn animate__slow">
      <Carousel @change="changeSlide" :carousel-index="carouselIndex" :soundOn="soundOn"/>
      <Navigation @change="changeSlide" :carousel-index="carouselIndex"/>
      <Changer @prev="prev" @next="next" :carousel-index="carouselIndex"/>
      <div id="volume-wrapper">
        <b-button
            class="is-dark has-white-stroke is-large"
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
import Navigation from "@/components/Navigation"
import Changer from "@/components/Changer"

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
    setTimeout(()=> {
      if(window.innerHeight > window.innerWidth){
        this.$buefy.dialog.alert("I promise this site looks a lot cooler in landscape mode")
      }
    }, 1250)
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
@import './css/styles.css';
</style>