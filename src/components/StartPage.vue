<template>
  <div class="mainContainer">
    <div class="nameContainer">
      <div id="title">Luuk van Dijk</div>
      <div id="subTitle">Web developer and UI/ UX desigener</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.mainContainer {
  width: 100vw;
  height: 100vw;
}

.nameContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

#title {
  font-size: 8rem;
  font-family: "Smooch", cursive;
}

#subTitle {
  font-size: 1.5rem;
}
</style>
