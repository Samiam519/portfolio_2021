<template>
  <div id="app">
    <Intro v-if="showIntro" @hide="hideIntro" :soundOn="soundOn"/>
    <div v-show="!showIntro" class="animate__animated animate__fadeIn animate__slow">
      <main>
        <Carousel @prev="prev" @next="next" :soundOn="soundOn" :disabled="carouselIndex === 8"/>
      </main>
      <Navigation @change="changeSlide" :current-index="carouselIndex"/>
      <Changer @prev="prev" @next="next"/>
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
      soundOn: true,
      nextButton: null,
      prevButton: null
    }
  },
  created() {
    // load sound setting
    this.soundOn = localStorage.sound === 'true';
  },
  mounted() {
    // add listeners for keyboard
    window.addEventListener('keydown', (e) => {
      // ignore keystrokes while an input field is focused
      if(document.activeElement.tagName.toLowerCase() !== "input"){
        if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
          this.prev()
        }else if(e.key === "ArrowRight" || e.key === "ArrowUp"){
          this.next()
        }
      }
    });
    setTimeout(()=> {
      // show mobile portrait warning after intro animation
      if(window.innerHeight > window.innerWidth){
        this.$buefy.dialog.alert("I promise this site looks a lot cooler in landscape mode")
      }
    }, 1250) //wait for intro animation
  },
  computed:{
    carouselIndex(){
      // return current slide number
      // if there isnt a current slide yet bc intro animation is still playing,
      // then return the default: 3
      return this.$route ? parseInt(this.$route.meta.slide) : 3
    }
  },
  methods: {
    hideIntro() {
      this.showIntro = false
    },
    changeSound(){
      this.soundOn = !this.soundOn;
      localStorage.sound = this.soundOn;
    },
    changeSlide(ind) {
      // match desired slide index to route in paths array
      // use ind+1 bc the first route in the array is a redirect to home
      // used as default route, dont change that
      this.$router.push(this.$router.options.routes[ind+1].path).catch(()=>{});
    },
    prev() {
      // if at the beginning of array, send to end
      if (this.carouselIndex === 0) {
        this.changeSlide(8)
      } else {
        this.changeSlide(this.carouselIndex - 1)
      }
    },
    next() {
      // if at end of array, send to beginning
      if (this.carouselIndex === 8) {
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
@import './css/stagger.css';
</style>
