<template>
  <div class="mainContainer">
    <div class="startContainer">
      <start />
    </div>
    <div class="aboutContainer">
      <AboutMe />
    </div>
    <div class="projectContainer">
      <Projects />
    </div>
    <div class="contactContainer">
      <Contact />
    </div>
    <div class="mediaContainer">
      <div class="verticalLineTop"></div>
      <img src="../assets/insta.png" alt="Instagram" />
      <img src="../assets/twitter.png" alt="Twitter" />
      <img src="../assets/github.png" alt="Github" />
      <div class="verticalLineBottom"></div>
    </div>
  </div>
</template>
<script>
import start from "../components/StartPage.vue";
import AboutMe from "../components/AboutPage.vue";
import Projects from "../components/ProjectsPage.vue";
import Contact from "../components/ContactPage.vue";

export default {
  components: { start, AboutMe, Projects, Contact },
};
</script>
<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.startContainer {
  width: 100vw;
  height: 100vh;
  background-color: whitesmoke;
}

.aboutContainer {
  width: 100vw;
  height: 30vh;
  /* background-color: whitesmoke; */
}

.projectContainer {
  width: 100vw;
  height: 100%;
  background-color: whitesmoke;
}

.contactContainer {
  width: 100vw;
  height: 100vh;
  background-color: whitesmoke;
}

.mediaContainer {
  position: fixed;
  bottom: 0;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2%;
  gap: 0.5rem;
}

.mediaContainer img {
  width: 2rem;
  cursor: not-allowed;
}

.verticalLineTop {
  border-left: 0.1rem;
  border-style: solid;
  border-top: none;
  border-right: none;
  border-bottom: none;
  height: 4vh;
}

.verticalLineBottom {
  border-left: 0.1rem;
  border-style: solid;
  border-top: none;
  border-right: none;
  border-bottom: none;
  height: 10vh;
}
</style>
