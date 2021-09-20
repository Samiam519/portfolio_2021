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
            <p>Thanks for taking the time to check out my work!
            </p>
            <p>
              Have an idea for a new logo or have any questions about my past works? Hit me up!</p>
            <form action="https://formspree.io/f/mbjqwakb" method="POST" target="_blank" class="is-fullwidth">
              <div>
                <b-field label="Name" horizontal>
                  <b-input required>
                  </b-input>
                </b-field>
                <b-field label="Email" horizontal>
                  <b-input
                      type="email"
                      required
                      name="_replyto"
                      validation-message="Email address invalid">
                  </b-input>
                </b-field>

                <b-field label="Message" horizontal>
                  <b-input maxlength="200" type="textarea" required></b-input>
                </b-field>
                <b-button type="submit" class="is-primary">Submit</b-button>
              </div>
            </form>
          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body has-text-centered slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark">About Me</h1>
            <div class="tile is-ancestor">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-warning has-text-dark">
                    <p>I strive for all of the
                      products I create to be intuitive and innovative in an out-of-the-div way and I hope that the
                      lasting mark
                      I make on my small corner of the web reflects that goal. My current favorite frameworks are <a
                          href="https://vuejs.org/v2/guide/" target="_blank">Vue js</a> and <a
                          href="https://bulma.io/documentation/" target="_blank">Bulma</a> for
                      CSS. That's
                      what I used for this
                      site.</p>
                  </article>
                  <article class="tile is-child notification is-link has-text-dark">
                    <p>
                      I try to reinvent my personal website around once a year, to accommodate changes in my personal
                      aesthetic
                      tastes, stay current on design trends, and to challenge myself to incorporate a new frontend
                      feature that
                      requires skills I don't have yet. In this iteration of my portfolio, I wanted to reimagine what a
                      showcase
                      could look outside of a single page scroller layout (if you're
                      looking
                      at this on mobile, I promise it looks cooler on desktop).
                    </p>
                  </article>
                </div>
              </div>
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child">
                    <img src="../assets/avi_daria.png" width="80%">
                  </article>
                  <article class="tile is-child notification is-primary">
                    <p>
                      Born and raised in Miami Beach by parents in tech-adjacent fields, while growing up I naturally
                      gravitated
                      toward computers. I started designing t-shirts in MS Paint while in elementary school.
                      Throughout high school and college, I continued to cultivate these skills, mostly through
                      freelance jobs
                      designing logos, websites, and app mockups.
                    </p>
                  </article>
                </div>
              </div>
            </div>
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
                    <p>Since graduating from the University of Miami with a
                      bachelor’s degree in Computer Science, I’ve found a place on the R&D team at MAXIMUS, working
                      officially
                      as a Software Engineer, and unofficially as the team’s resident UI/UX specialist.</p>
                  </article>
                  <article class="tile is-child notification is-white has-text-dark">
                    <p>Catapult</p>
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
  data() {
    return {}
  },
  computed: {
    index: {
      get() {
        return this.carouselIndex
      },
      set(val) {
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

.hero-body {
  text-align: left;
}
</style>
