<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import Educations from '../data/Educations'
import Experiences from '../data/Experiences'

export default {
    methods : {
        Educations,
        Experiences
    },
  setup() {
        const store = useStore();
        const uniColor = ref(computed(() => store.state.uniColor))
        const theme = ref(computed(() => store.state.theme))

        return {
            uniColor,
            theme,
        }
    }
}
</script>
<template>
    <div id="resume" class="resume mt-4">
        <div class="container">
          <div class="row">
              <div class="col-lg-6">
                  <span class="resume-title my-3 d-inline-block">Education</span>
                  <div v-for="(item, index) in Educations()" :key="index" class="resume-item d-flex py-4" :style="{'--before' : uniColor, borderLeft : '5px solid' + uniColor}">
                    <span :style="{backgroundColor : uniColor}"></span>
                    <div class="informations p-3 w-100" :style="{backgroundColor : theme.background.secondary}">
                        <h4 :style="{color : uniColor}">
                            {{ item.title }}</h4>
                        <i :style="{backgroundColor : theme.background.tertiaire}" class="text-responsive">{{ item.years }}</i>
                        <p class="text-responsive"><em>{{ item.place }}</em></p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-6">
                  <span class="resume-title my-3 d-inline-block">Experience Professionnel</span>
                  <div v-for="(item, index) in Experiences()" :key="index" class="resume-item d-flex py-4" :style="{'--before' : uniColor, borderLeft : '5px solid' + uniColor}">
                    <span :style="{backgroundColor : uniColor}"></span>
                    <div class="informations p-3 w-100" :style="{backgroundColor : theme.background.secondary}">
                        <h4 :style="{color : uniColor}">{{ item.title }}</h4>
                        <i :style="{backgroundColor : theme.background.tertiaire}" class="text-responsive">{{ item.years }}</i>
                        <p class="px-2"><em>{{ item.place }}</em></p>
                        <p>
                        <ul class="text-responsive">
                          <li v-for="(skill, index) in item.skills" :key="index">{{ skill }}</li>
                        </ul>
                        </p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.resume .resume-item span {
    display: inline-block;
    width: 40px;
    height: 5px;
    margin-left: -15px;
}
.resume .resume-item .informations {
    margin-top: -20px;
    background-color: rgba(0, 0, 0, 0.31);
    border-radius: 10px;
}
.resume .resume-title {
    font-size: 20px;
    font-weight: bold;
}
.resume .resume-item {
    padding: 0 0 20px 20px;
    position: relative;
}
.resume .resume-item h4 {
    line-height: 18px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
}
.resume .resume-item i {
    font-size: 16px;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
    border-radius: 5px;
    font-style: italic;
}
.resume .resume-item ul {
    padding-left: 20px;
}
.resume .resume-item ul li {
    padding-bottom: 10px;
}
.resume .resume-item:last-child {
    padding-bottom: 0;
}
.resume .resume-item::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -10px;
    top: 18px;
    background: var(--before);
    border: 2px solid var(--before);
}
@media screen and (max-width: 768px) {
  .resume .resume-item span {
    width: 20px;
  }
}
</style>