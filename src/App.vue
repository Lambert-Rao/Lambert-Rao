<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://lambertrao.top" target="_blank">
      <img src="/moc.svg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <HelloWorld msg="Lambert" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em rgba(100, 110, 255, 0.67));
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em rgba(0, 0, 0, 0.65));
}
</style>
