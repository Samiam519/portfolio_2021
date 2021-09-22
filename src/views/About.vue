<template>
  <b-carousel-item>
    <section id="about-me" class="hero is-fullheight is-dark">
      <div class="hero-body slide-body has-text-black">
        <h1 class="title is-1 has-text-grey-dark is-highlighted red-highlight">about me</h1>
        <div class="tile is-ancestor">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-block-touch is-block-tablet is-child notification is-warning has-text-dark">
                <p>I strive for all of the
                  products I create to be intuitive and innovative in an out-of-the-div way and I hope that the
                  lasting mark
                  I make on my small corner of the web reflects that goal. My current favorite frameworks are <a
                      href="https://vuejs.org/v2/guide/" target="_blank">Vue js</a> and <a
                      href="https://bulma.io/documentation/" target="_blank">Bulma</a> for
                  CSS. This site uses <a href="https://buefy.org/documentation" target="_blank">Buefy</a>, a
                  convenient combination of the two.</p>
              </article>
              <article class="tile is-block-touch is-block-tablet is-child notification is-link has-text-dark">
                <p>
                  I try to reinvent my personal website around once a year, to accommodate changes in my personal
                  aesthetic
                  tastes, stay current on design trends, and to challenge myself to incorporate a new frontend
                  feature that
                  requires skills I don't have yet. In this iteration of my portfolio, I wanted to reimagine what a
                  showcase
                  could look outside of a single page scroller layout.
                </p>
              </article>
            </div>
          </div>
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-block-touch is-block-tablet is-child">
                <img src="../assets/avi_daria.png" class="w-80">
              </article>
              <article class="tile is-block-touch is-block-tablet is-child notification is-primary">
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
</template>

<script>
export default {
  name: "About"
}
</script>
