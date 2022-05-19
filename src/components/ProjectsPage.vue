<template>
  <div class="mainContainer">
    <div class="headerContainer">
      <div class="mainTitle">My start up projects</div>
      <div class="mainSubTitle">
        Here you see the projects where i have learnd to code
      </div>
    </div>
    <div class="contentContainer">
      <div class="projectContainer">
        <img
          src="../assets/portefolio-project.png"
          alt="Portefolio website expample"
        />
        <div class="projectText">
          <span class="title">First portefolio site</span>
          <span class="subText"
            >My first project was a portefolio site. So i can keep track of my
            improvements and project i do over the years.</span
          >
        </div>
      </div>
      <div class="projectContainer">
        <img src="../assets/barber-project.svg" alt="Barber website expample" />
        <div class="projectText">
          <span class="title">Barber shop</span>
          <span class="subText"
            >My second project was to make a site for a barber shop so costumers
            could make a resevation to get a haircut.</span
          >
        </div>
      </div>
      <div class="projectContainer">
        <img src="../assets/golftracking-project.png" alt="Project 3" />
        <div class="projectText">
          <span class="title">Golf Tracking</span>
          <span class="subText"
            >My third and last project of my first year was to create an app
            where your could trace your app as a golfer to track its speed an
            lane in the air.</span
          >
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
  row-gap: 3rem;
  align-items: center;
  width: 100%;
  background-color: whitesmoke;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.headerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
}

.contentContainer {
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  flex-wrap: wrap;
  row-gap: 3rem;
}

.projectContainer {
  display: flex;
  flex-direction: column;
  border-width: 0.1rem;
  border-color: black;
  border-style: solid;
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  cursor: not-allowed;
}

.projectText {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

.title {
  font-size: 2rem;
}

.subText {
  font-size: 1rem;
}

.mainTitle {
  font-size: 5rem;
}

.mainSubTitle {
  font-size: 1.5rem;
}

img {
  width: 100%;
  max-height: 50%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

@media only screen and (max-width: 600px) {
  .headerContainer {
    width: 80vw;
    text-align: center;
  }

  .mainTitle {
    font-size: 3rem;
  }

  .mainSubTitle {
    font-size: 1.3rem;
  }
}
</style>
