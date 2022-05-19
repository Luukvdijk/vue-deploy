<template>
  <div class="mainContainer">
    <div class="contentContainer">
      <div class="titleContainer">
        <div class="title">About me</div>
      </div>
      <div class="textContainer">
        <div class="text">
          I am now a web developer for almost a year. I have created project
          this year to learn more about coding and what coding languages there
          are. I have worked with a lot of people that inspere me to get better
          every day.
          <div class="readMore">Read more...</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.mainContainer {
  display: flex;
  justify-content: center;
  align-content: center;
}
.contentContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.title {
  font-size: 6rem;
  color: whitesmoke;
  text-shadow: 0.2rem 0.2rem 0.2rem rgb(230, 230, 230);
}
.textContainer {
  width: 40%;
  cursor: not-allowed;
}
.text {
  position: relative;
  font-size: 1.5rem;
}
</style>
