<script>
import SectionTitle from './SectionTitle.vue'
import SocialMedia from './SocialMedia.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  components: {
    SectionTitle,
    SocialMedia
  },
  setup() {
    const store = useStore()

    const uniColor = ref(computed(() => store.state.uniColor))

    return {
      uniColor
    }
  }
}
</script>
<template>
  <section class="my-5 contact" id="contact">
    <SectionTitle title="Contact" />
    <div class="contact-info">
      <div class="form-reseau">
        <div class="texte mb-3">
          <p class="mt-3">
            Bienvenue dans ma section de contact ! Si vous souhaitez discuter de projets
            passionnants, poser des questions ou simplement dire bonjour, n'hésitez pas à m'envoyer
            un message. Je suis toujours ravi de rencontrer de nouveaux contacts et d'explorer de
            nouvelles opportunités de collaboration.
          </p>
          <div class="item my-1 text-responsive">
            <p><span :style="{ color: uniColor }">Phone </span> : +229 59105267</p>
            <p><span :style="{ color: uniColor }">City</span> : Abomey-Calavi, Bénin</p>
            <p><span :style="{ color: uniColor }">Email</span> : dedjinoucharlotjoel@gmail.com</p>
          </div>
          <p>Vous pouvez egalement me contacter en cliquant juste sur un des icones</p>
          <SocialMedia class="mt-3" size="300px" iconSize="25" />
        </div>
        <form class="form" onsubmit="submit(event)">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.58930023154!2d2.3208294912747394!3d6.448743036718535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a907d5334d9b%3A0xb28a9b10ccbc460a!2sAbomey%20Calavi%2C%20B%C3%A9nin!5e0!3m2!1sfr!2srw!4v1708979789425!5m2!1sfr!2srw"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<style scoped>
.contact {
  width: 100%;
  height: auto;
}
.contact .contact-info {
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}
.mapouter {
  position: relative;
  text-align: right;
  width: 95%;
  height: 400px;
  margin: 0px auto;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 100%;
}
.gmap_iframe {
  width: 100% !important;
  height: 100% !important;
}
.contact .contact-info .form-reseau {
  width: 80%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px auto;
  margin-top: 60px;
}
.contact .contact-info .form-reseau .texte {
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.contact .contact-info .form-reseau .texte p {
  text-align: justify;
}

.contact .contact-info .form-reseau .form {
  width: 50%;
  padding: 0px;
  margin: 0px;
  background: none;
}
.contact .contact-info .form-reseau .message {
  width: 100%;
  height: 120px;
  border-radius: 5px;
}
@media only screen and (max-width: 700px) {
  .contact .contact-info .form-reseau {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0px auto;
    margin-top: 20px;
  }
  .contact .contact-info .form-reseau .texte {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 15px;
  }

  .contact .contact-info .form-reseau .form {
    width: 95%;
    background: none;
  }

  .contact .contact-info .form-reseau .reseau {
    align-self: flex-end;
  }
}
</style>
