<template>
  <b-carousel :autoplay="false">
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section class="hero is-fullheight is-dark">
        <div class="hero-body">
          <div class="columns">
            <div class="column is-half">
              <h1 class="title is-1">Slide {{i+1}}</h1>
              <p class="subtitle">{{carousel.content}}</p>
            </div>
          </div>
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
        { text: 'Slide 1', color: 'primary', content: "this is content for slide 1" },
        { text: 'Slide 2', color: 'info', content: "this is content for slide 2" },
        { text: 'Slide 3', color: 'success', content: "this is content for slide 3" },
        { text: 'Slide 4', color: 'warning', content: "this is content for slide 4" },
        { text: 'Slide 5', color: 'danger', content: "this is content for slide 5" }
      ]
    }
  }
}
</script>
