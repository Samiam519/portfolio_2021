<template>
  <b-carousel-item>
    <section id="contact" class="hero is-fullheight is-dark">
      <div class="hero-body slide-body has-text-black">
        <h1 class="title is-1 has-text-grey-dark is-highlighted blue-highlight">contact</h1>
        <p>Thanks for taking the time to check out my work!
        </p>
        <p class="mb-5">
          Have an idea for a new logo or have any questions about my past works? Hit me up!
        </p>
        <form action="https://formspree.io/f/mbjqwakb" method="POST" target="_blank" class="is-fullwidth">
          <div>
            <b-field label="name" horizontal class="m-0">
              <b-input required expanded class="is-fullwidth p-1">
              </b-input>
            </b-field>
            <b-field label="email" horizontal class="m-0">
              <b-input
                  type="email"
                  required
                  name="_replyto"
                  class="is-fullwidth p-1"
                  validation-message="Email address invalid">
              </b-input>
            </b-field>
            <b-field label="message" horizontal class="m-0">
              <b-input maxlength="200" type="textarea" required class="is-fullwidth p-1"></b-input>
            </b-field>
            <b-button type="submit" class="is-primary is-pulled-right">submit</b-button>
          </div>
        </form>
      </div>
    </section>
  </b-carousel-item>
</template>

<script>
export default {
  name: "Contact"
}
</script>
