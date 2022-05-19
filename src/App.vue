<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="mainContainer">
    <div class="contentContainer">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  width: 100vw;
  height: 100vh;
}

@media only screen and (max-width: 600px) {
  .navContainer {
    width: 100vw;
    height: 7vh;
  }
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
