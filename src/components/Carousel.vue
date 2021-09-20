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
        v-model="index"
        :autoplay="false"
        @change="slideChange"
        :indicator="false"
        icon-size="is-large">
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body has-text-centered slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark">Contact</h1>
            <p>test</p>
          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body has-text-centered slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark">About Me</h1>
            <p>
              Born and raised in Miami Beach by parents in tech-adjacent fields, while growing up I naturally gravitated
              toward computers. I started designing t-shirts in MS Paint while in elementary school.
              Throughout high school and college, I continued to cultivate these skills, mostly through freelance jobs
              designing logos, websites, and app mockups. Since graduating from the University of Miami with a
              bachelor’s degree in Computer Science, I’ve found a place on the R&D team at MAXIMUS, working officially
              as a Software Engineer, and unofficially as the team’s resident UI/UX specialist.
            </p>
            <p>
              I try to reinvent my personal website around once a year, to accommodate changes in my personal aesthetic
              tastes, stay current on design trends, and to challenge myself to incorporate a new frontend feature that
              requires skills I don't have yet. In this iteration of my portfolio, I wanted to reimagine what a showcase
              could look like without adding to the bevy of single page scroller portfolios out there (if you're looking
              at this on mobile, I promise it looks cooler on desktop). I was inspired by the 90s fashion
              trending right now and hit the ground running with this viewmaster concept.
            </p>
            <p>I strive for all of the
              products I create to be intuitive and innovative in an out-of-the-div way and I hope that the lasting mark
              I make on my small corner of the web reflects that goal. My current favorite frameworks are <a
                  href="https://vuejs.org/v2/guide/" target="_blank" class="has-text-link">Vue js</a> and <a
                  href="https://bulma.io/documentation/" target="_blank" class="has-text-link">Bulma</a> for CSS. That's
              what I used for this
              site.</p>
            <div id="social-icons">

            </div>
          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body has-text-centered slide-body has-text-black">
            <img
                class="landing-logo"
                src="../assets/name.svg"
                alt="Sam Jimenez ui designer & frontend engineer"
            />
          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body has-text-centered slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark">Maximus</h1>
            <div class="tile is-ancestor">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-primary">
                    <p class="title">Vertical...</p>
                    <p class="subtitle">Top tile</p>
                  </article>
                  <article class="tile is-child notification is-warning has-text-dark">
                    <p class="title">...tiles</p>
                    <p class="subtitle">Bottom tile</p>
                  </article>
                </div>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-link">
                  <p class="title">Wide tile</p>
                  <p class="subtitle">Aligned with the right tile</p>
                  <div class="content">
                    <!-- Content -->
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body has-text-centered slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark">DSA</h1>

          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body has-text-centered slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark">Quidditch</h1>

          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body has-text-centered slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark">Accomplish</h1>

          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body has-text-centered slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark">LunchLaunch</h1>

          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    carouselIndex: Number
  },
  computed: {
    index: {
      get(){
        return this.carouselIndex
      },
      set(val){
        this.$emit('change', val)
      }
    }
  },
  methods: {
    slideChange() {
      // play random click sound out of 5 options
      let allSounds = document.getElementById('click-sounds').children;
      let randomClickSound = allSounds[Math.floor(Math.random() * allSounds.length)];
      randomClickSound.play();
    }
  }
}
</script>

<style>
.slide-body {
  background-color: #efe7dc;
  border-radius: 50px;
  margin: 4em auto;
  width: 100vh;
  max-width: 100vw;
  flex-direction: column;
}

.carousel-arrow .icon:hover {
  border: none !important;
  background-color: #5a5b55 !important;
}

.landing-logo {
  max-width: 77%;
}
</style>
