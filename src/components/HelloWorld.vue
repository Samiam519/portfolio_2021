<template>
  <b-carousel :autoplay="false">
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section class="hero is-fullheight is-danger">
        <div class="hero-body has-text-centered">
          <a class="title" href="/">{{carousel.text}}</a>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
    return {
      carousels: [
        { text: 'Slide 1', color: 'primary' },
        { text: 'Slide 2', color: 'info' },
        { text: 'Slide 3', color: 'success' },
        { text: 'Slide 4', color: 'warning' },
        { text: 'Slide 5', color: 'danger' }
      ]
    }
  }
}
</script>
