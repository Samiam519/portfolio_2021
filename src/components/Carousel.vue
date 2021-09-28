<template>
  <div>
    <div id="click-sounds" class="hidden">
      <audio id="click-1">
        <source src="../assets/sounds/click-1.wav" type="audio/wav">
      </audio>
      <audio id="click-2">
        <source src="../assets/sounds/click-2.wav" type="audio/wav">
      </audio>
      <audio id="click-3">
        <source src="../assets/sounds/click-3.wav" type="audio/wav">
      </audio>
      <audio id="click-4">
        <source src="../assets/sounds/click-4.wav" type="audio/wav">
      </audio>
      <audio id="click-5">
        <source src="../assets/sounds/click-5.wav" type="audio/wav">
      </audio>
    </div>
    <b-carousel
        @change="playSound"
        :autoplay="false"
        :indicator="false"
        icon-size="is-large">
      <router-view/>
    </b-carousel>
  </div>
</template>

<script>

export default {
  name: "Carousel",
  props: {
    soundOn: Boolean
  },
  mounted() {
    // bc router is controlling the carousel, need to emit when carousel arrows are used for App.vue to handle
    document.querySelector('.carousel-arrow > .has-icons-left').addEventListener('click', () => {
      // TODO get transition of current slide leaving, working
      let currentSlide = document.querySelector('.carousel-item').children[0].id;
      document.getElementById(currentSlide).parentElement.classList.add('slide-prev-leave-active');
      this.$emit('prev')
      document.getElementById(currentSlide).parentElement.classList.remove('slide-prev-leave-active');
    }, false);
    document.querySelector('.carousel-arrow > .has-icons-right').addEventListener('click', () => {
      let currentSlide = document.querySelector('.carousel-item').children[0].id;
      document.getElementById(currentSlide).parentElement.classList.add('slide-next-leave-active');
      this.$emit('next')
      document.getElementById(currentSlide).parentElement.classList.remove('slide-next-leave-active');
    }, false);
  },
  methods: {
    playSound() {
      // take sound setting as prop bc it gets passed properly now
      if (this.soundOn) {
        // play random click sound out of 5 options
        let allSounds = document.getElementById('click-sounds').children;
        let randomClickSound = allSounds[Math.floor(Math.random() * allSounds.length)];
        randomClickSound.play();
      }
    }
  }
}
</script>