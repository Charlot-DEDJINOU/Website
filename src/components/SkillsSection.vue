<script>
</script>
<template>
  <div class="skills container">
    <div class="section-title">
      <h2>Skills</h2>
    </div>
    <div class="row skills-content">
      <div class="col-lg-6">
        <div class="progress">
          <span class="skill">HTML <i class="val">100%</i></span>
          <div class="progress-bar-wrap">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="progress">
          <span class="skill">CSS <i class="val">90%</i></span>
          <div class="progress-bar-wrap">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="progress">
          <span class="skill">JavaScript <i class="val">75%</i></span>
          <div class="progress-bar-wrap">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="progress">
          <span class="skill">PHP <i class="val">80%</i></span>
          <div class="progress-bar-wrap">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="progress">
          <span class="skill">WordPress/CMS <i class="val">90%</i></span>
          <div class="progress-bar-wrap">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="progress">
          <span class="skill">Photoshop <i class="val">55%</i></span>
          <div class="progress-bar-wrap">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.skills .progress {
  height: 60px;
  display: block;
  background: none;
  border-radius: 0;
}
.skills .progress .skill {
  padding: 10px 0;
  margin: 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #fff;
}
.skills .progress .skill .val {
  float: right;
  font-style: normal;
}

.skills .progress-bar-wrap {
  background: rgba(255, 255, 255, 0.2);
}

.skills .progress-bar {
  width: 1px;
  height: 10px;
  transition: 0.9s;
  background-color: #18d26e;
}
</style>
