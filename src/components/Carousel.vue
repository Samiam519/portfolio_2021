<template>
  <b-carousel :autoplay="false">
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section class="hero is-fullheight is-dark">
        <div class="hero-body has-text-centered" id="slide-body">
          <h1 class="title is-1">{{ carousel.name }}</h1>
          <p class="subtitle">{{ carousel.content }}</p>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      carousels: [
        {name: 'Landing', content: "this is content for slide 1"},
        {name: 'About Me', content: "this is content for slide 2"},
        {name: 'Socials', content: "this is content for slide 3"},
        {name: 'Contact', content: "this is content for slide 4"},
        {name: 'Quidditch', content: "this is content for slide 5"},
        {name: 'LunchLaunch', content: "this is content for slide 6"},
        {name: 'Accomplish', content: "this is content for slide 7"},
        {name: 'DSA', content: "this is content for slide 8"},
        {name: 'Maximus', content: "this is content for slide 9"},
      ]
    }
  }
}
</script>

<style scoped>
#slide-body{
  background-color: #181914;
  border-radius: 50px;
  margin: 2em auto;
  width: 100vh;
  max-width: 100vw;
}
</style>
