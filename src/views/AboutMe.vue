<template>
  <div class="mainContainer">
    <img
      src="../assets/underconstruction.jpg"
      alt="Page is underconstruction"
    />
    <div class="text">This page comes soon...</div>
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
  text-align: center;
}

.text {
  font-size: 2rem;
}

img {
  width: 20vw;
}

@media only screen and (max-width: 600px) {
  img {
    width: 50vw;
  }
}
</style>
