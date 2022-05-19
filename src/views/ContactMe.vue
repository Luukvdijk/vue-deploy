<template>
  <div class="mainContainer">
    <img
      src="../assets/underconstruction.jpg"
      alt="Page is underconstruction"
    />
    <div class="text">This page is still under construction</div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.mainContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: 2rem;
}

img {
  width: 20vw;
}
</style>
