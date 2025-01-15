<template>
  <section class="section connect">
    <div class="container">
      <p class="section-subtitle revealed">Questions, Comments, Concerns?</p>

      <h2 class="h2 section-title revealed">
        <span class="span">Connect</span> With Us
      </h2>

      <form class="contact-form" method="POST">
        <div class="contact-inputs">
          <div class="contact-content">
            <label class="contact-label"> Name: </label>
            <input type="text" class="contact-input" name="name" required />
          </div>

          <div class="contact-content">
            <label class="contact-label"> E-mail: </label>
            <input type="email" class="contact-input" name="email" required />
          </div>
        </div>

        <div class="contact-content">
          <label class="contact-label"> Message: </label>
          <textarea
            class="contact-input"
            name="message"
            cols="0"
            rows="7"
            required
          ></textarea>
        </div>

        <Button type="submit" text="Send Message" class="btn" />

        <input type="hidden" name="_subject" value="Contact Form Submitted" />
        <input type="hidden" name="_honeypot" value="" />
      </form>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Connect",
  components: {
    Button,
  },
};
</script>

<style>
.connect {
  text-align: center;
}

.contact-inputs {
  gap: 0;
}

.contact-inputs .contact-content {
  clip-path: var(--clip-path-3);
}

.contact-content {
  background-color: var(--bg-purple-alpha-30);
  padding: 0.75rem 1rem 0.25rem;
  margin-bottom: 1rem;
}

.contact-content textarea {
  resize: none;
}

.contact-input {
  width: 100%;
  background-color: transparent;
  color: var(--text-white);
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem 0.5rem 0;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (max-width: 375px) {
  .contact-form {
    padding-left: 0;
    padding-right: 0;
  }
}

@media screen and (min-width: 575px) {
  .contact-inputs {
    display: flex;
    gap: 1rem;
  }

  .contact-form {
    padding-left: 0;
    padding-right: 0;
    width: 450px;
    margin: 0 auto;
  }
}
</style>
