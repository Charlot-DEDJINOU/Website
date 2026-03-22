<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const uniColor = computed(() => store.state.uniColor)
const isDark = computed(() => store.state.dark)

const containerStyle = computed(() => ({
  background: isDark.value ? '#0d1117' : '#f6f8fa',
  color: isDark.value ? '#c9d1d9' : '#24292f'
}))
</script>

<template>
  <div class="not-found" :style="containerStyle">
    <div class="not-found-box">
      <pre class="ascii-art" :style="{ color: uniColor }">
 _  _    ___  _  _
| || |  / _ \| || |
| || |_| | | | || |_
|__   _| | | |__   _|
   | | | |_| |  | |
   |_|  \___/   |_|
</pre>
      <p class="not-found-label" :style="{ color: uniColor }">Not Found</p>
      <p class="not-found-msg">
        <span class="prompt" :style="{ color: uniColor }">charlot@portfolio:~$ </span>
        <span>cd <strong>/this/page</strong></span>
      </p>
      <p class="not-found-error">bash: cd: /this/page: No such file or directory</p>
      <p class="not-found-hint">The page you are looking for does not exist.</p>
      <button class="back-btn" :style="{ borderColor: uniColor, color: uniColor }" @click="router.push('/')">
        → go home
      </button>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', Courier, monospace;
}

.not-found-box {
  text-align: center;
  padding: 2rem;
}

.ascii-art {
  font-size: clamp(0.5rem, 2vw, 1rem);
  line-height: 1.3;
  margin: 0 0 0.5rem;
  font-family: inherit;
}

.not-found-label {
  font-size: 1rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin: 0 0 2rem;
  opacity: 0.8;
}

.not-found-msg {
  font-size: 1rem;
  margin: 0 0 0.4rem;
}

.not-found-error {
  font-size: 0.9rem;
  color: #f85149;
  margin: 0 0 1.5rem;
}

.not-found-hint {
  font-size: 0.85rem;
  opacity: 0.5;
  margin: 0 0 2rem;
}

.back-btn {
  background: transparent;
  border: 1px solid;
  padding: 0.5rem 1.5rem;
  font-family: inherit;
  font-size: 0.9rem;
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: opacity 0.2s;
}

.back-btn:hover {
  opacity: 0.7;
}
</style>
