<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="mainContainer">
    <div class="navContainer">
      <RouterLink class="navButton" to="/">01. Home</RouterLink>
      <RouterLink class="navButton" to="/about">02. About</RouterLink>
      <RouterLink class="navButton" to="/conact">03. Contact</RouterLink>
    </div>
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

.navContainer {
  position: fixed;
  right: 0;
  width: 20vw;
  height: 4vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

a:hover,
a.router-link-active {
  border-bottom: 2px solid #3498db;
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
