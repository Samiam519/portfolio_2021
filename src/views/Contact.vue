<template>
  <b-carousel-item>
    <section id="contact" class="hero is-fullheight is-dark">
      <div class="hero-body slide-body has-text-black">
        <h1 class="title is-1 has-text-grey-dark is-highlighted blue-highlight animate__animated animate__fadeInUp">
          contact</h1>
        <p class="animate__animated animate__fadeInUp _2">Thanks for taking the time to check out my work!
        </p>
        <p class="mb-5 animate__animated animate__fadeInUp _3">
          Have an idea for a new logo or have any questions about my past works? Hit me up!
        </p>
        <form
            id="contact-form"
            accept-charset="utf-8"
            class="is-fullwidth"
        >
          <input type="text" name="_honey" style="display:none">
          <input type="hidden" name="_subject" value="Portfolio Website Contact Form Submission">
          <fieldset>
            <b-field label="name" horizontal class="m-0 animate__animated animate__fadeInUp _4">
              <b-input
                  required
                  v-model="name"
                  name="name"
                  type="text"
                  class="is-fullwidth p-1"/>
            </b-field>
            <b-field label="email" horizontal class="m-0 animate__animated animate__fadeInUp _5">
              <b-input
                  required
                  v-model="email"
                  type="email"
                  name="email"
                  class="is-fullwidth p-1"
                  validation-message="Email address invalid"/>
            </b-field>
            <b-field label="message" horizontal class="m-0 animate__animated animate__fadeInUp _6">
              <b-input
                  required
                  v-model="message"
                  name="Message"
                  maxlength="200"
                  rows="1"
                  type="textarea"
                  class="is-fullwidth p-1"
              />
            </b-field>
          </fieldset>
          <b-tooltip
              label="Fill out all fields before submitting"
              class="is-pulled-right is-radiusless animate__animated animate__fadeInUp _7"
              :active="formIncomplete"
              type="is-dark">
            <b-button
                class="is-primary"
                @click="submitForm"
                :disabled="formIncomplete"
                :loading="loading"
            >submit
            </b-button>
          </b-tooltip>
        </form>
        <div id="buffer"></div>
        <div class="socials mt-3 columns is-fullwidth is-desktop animate__animated animate__fadeInUp _8 is-flex is-justify-content-center">
          <div class="column is-flex" v-bind:class="isMobile ? 'is-justify-content-center' : 'is-justify-content-flex-end'">
            <b-button
                icon-pack="fab"
                class="is-info has-black-stroke"
                v-bind:class="isMobile ? 'is-medium' : 'is-large'"
                icon-right="linkedin"
                aria-label="Visit Sam's LinkedIn"
                @click="openSocial(0)"
            />
            <b-button
                icon-pack="fab"
                class="is-black has-black-stroke mx-5"
                v-bind:class="isMobile ? 'is-medium' : 'is-large'"
                icon-right="twitter"
                aria-label="Visit Sam's Twitter"
                @click="openSocial(1)"
            />
            <b-button
                icon-pack="fab"
                class="is-warning has-black-stroke"
                v-bind:class="isMobile ? 'is-medium' : 'is-large'"
                icon-right="github"
                aria-label="Visit Sam's Github"
                @click="openSocial(2)"
            />
          </div>
          <div class="column is-hidden-mobile is-flex is-justify-content-flex-start">
            <b-button
                icon-pack="fab"
                class="is-grey has-black-stroke"
                v-bind:class="isMobile ? 'is-medium' : 'is-large'"
                icon-right="gitlab"
                aria-label="Visit Sam's Gitlab"
                @click="openSocial(3)"
            />
            <b-button
                icon-pack="fab"
                class="is-link has-black-stroke mx-5"
                v-bind:class="isMobile ? 'is-medium' : 'is-large'"
                icon-right="behance"
                aria-label="Visit Sam's Behance"
                @click="openSocial(4)"
            />
            <b-button
                icon-pack="fab"
                class="is-white has-black-stroke"
                v-bind:class="isMobile ? 'is-medium' : 'is-large'"
                icon-right="deviantart"
                aria-label="Visit Sam's Deviantart"
                @click="openSocial(5)"
            />
          </div>
        </div>
        <div class="socials is-hidden-desktop columns is-fullwidth is-desktop animate__animated animate__fadeInUp _9 is-flex is-justify-content-center">
          <b-button
              icon-pack="fab"
              class="is-grey has-black-stroke"
              v-bind:class="isMobile ? 'is-medium' : 'is-large'"
              icon-right="gitlab"
              aria-label="Visit Sam's Gitlab"
              @click="openSocial(3)"
          />
          <b-button
              icon-pack="fab"
              class="is-link has-black-stroke mx-5"
              v-bind:class="isMobile ? 'is-medium' : 'is-large'"
              icon-right="behance"
              aria-label="Visit Sam's Behance"
              @click="openSocial(4)"
          />
          <b-button
              icon-pack="fab"
              class="is-white has-black-stroke"
              v-bind:class="isMobile ? 'is-medium' : 'is-large'"
              icon-right="deviantart"
              aria-label="Visit Sam's Deviantart"
              @click="openSocial(5)"
          />
        </div>
      </div>
    </section>
  </b-carousel-item>
</template>

<script>
import axios from 'axios';

export default {
  name: "Contact",
  data() {
    return {
      name: '',
      email: '',
      message: '',
      loading: false,
      socialsLinks: [
        "https://www.linkedin.com/in/samjimenez519/",
        "https://twitter.com/_sam_antics",
        "https://github.com/Samiam519",
        "https://gitlab.com/samiam5194",
        "https://www.behance.net/samjimenez",
        "https://www.deviantart.com/samaim519"
      ]
    }
  },
  computed: {
    formIncomplete() {
      return !this.name || !this.email || !this.message
    },
    isMobile(){
      return window.innerWidth < 1024
    }
  },
  methods: {
    submitForm() {
      this.loading = true;
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.post('https://formsubmit.co/ajax/b21ebba82ef5d8fd3f9eafde7c869d23', {
        name: this.name,
        email: this.email,
        message: this.message
      })
          .then((response) => {
            this.loading = false;
            this.$buefy.toast.open({
              duration: 5000,
              message: "Hey " + response.config.data.split('"')[3] + ", thank you for reaching out! I'll be in touch soon",
              position: 'is-bottom',
              type: 'is-success'
            })
          })
          .catch(error => {
            this.loading = false;
            this.$buefy.toast.open({
              duration: 5000,
              message: error.data.message + " I've received this error and will look into it.",
              position: 'is-bottom',
              type: 'is-danger'
            })
          });
    },
    openSocial(ind) {
      window.open(this.socialsLinks[ind], '_blank').focus();
    }
  }
}
</script>
