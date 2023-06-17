<script setup lang="ts">
import {onMounted, ref} from 'vue'
import axios from 'axios'

defineProps<{ msg: string }>()

const count = ref(0)
onMounted(async () => {
  const response = await axios.get('https://api.swo.moe/stats/github/lambert-rao')
  count.value = response.data.count // assuming stars is in the data
})

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <a href="https://github.com/Lambert-Rao" target="_blank" class="github-button">
      <img src="/github-mark.svg" class="logo vue" alt="Vue logo" height="26"/>
      <span>My follower: {{ count }}</span>
    </a>
  </div>

  <p>
    欢迎访问来到网站,目前我正在学习中。学习方向包括c++,rust网络编程，vue前端开发，以及一点运维。
  </p>
  <p>
    Welcome to my website. Currently, I am in the process of learning.<br> areas include C++, Rust network programming,
    Vue front-end development, and a bit of DevOps.
  </p>
  <p class="contact">Contact me at <a href="mailto:lambertrao@outlook.com">lambertrao@outlook.com</a></p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.github-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1em;
}
</style>
