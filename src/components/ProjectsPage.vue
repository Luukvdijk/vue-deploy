<template>
  <div class="mainContainer">
    <div class="headerContainer">
      <div class="mainTitle">My start up projects</div>
      <div class="mainSubTitle">
        Here you see the projects where i have learnd to code
      </div>
    </div>
    <div class="contentContainer">
      <div class="overlay"></div>
      <div class="projectContainer">
        <img
          src="../assets/portefolio-project.png"
          alt="Portefolio website expample"
        />
        <div class="projectText">
          <span class="title">First portefolio site</span>
          <span class="subText"
            >De website waar ik ben begonnen met coderen is deze protfolio
            website. Hier heb ik heel veel geleerd over wat coderen is hoe het
            werkt en wat de basis inhoud. Hier leerde ik ook meer over wat ik
            intressant vindt binnen het coderen.</span
          >
          <div class="lgContainer">
            <div class="lg">
              <i class="devicon-html5-plain colored"></i>
              <p>HTML</p>
            </div>
            <div class="lg">
              <i class="devicon-css3-plain colored"></i>
              <p>CSS</p>
            </div>
          </div>
        </div>
        <a
          class="btn"
          href="http://1810024.hu-open-ict.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Visit website</p>
        </a>
      </div>
      <div class="projectContainer">
        <img src="../assets/barber-project.svg" alt="Barber website expample" />
        <div class="projectText">
          <span class="title">Barber shop</span>
          <span class="subText"
            >Een kappers website waar ik meer heb geleerd over samen werken in
            een team. Maar ook meer over verschillende frameworks waarin je kan
            coderen.</span
          >
          <div class="lgContainer">
            <div class="lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              />
              <p>Vue</p>
            </div>
            <div class="lg">
              <i class="devicon-css3-plain colored"></i>
              <p>CSS</p>
            </div>
          </div>
        </div>
        <a class="btn"><p class="disabled">Bekijk informatie</p></a>
      </div>
      <div class="projectContainer">
        <img src="../assets/golftracking-project.png" alt="Project 3" />
        <div class="projectText">
          <span class="title">Golf Tracking</span>
          <span class="subText"
            >Golf tracking was het eerste project waar we met veel verschillde
            data werkte. Ook maakte we een mobile aplicatie en geen
            website.</span
          >
          <div class="lgContainer">
            <div class="lg">
              <i class="devicon-react-original colored"></i>
              <p>React native</p>
            </div>
            <div class="lg">
              <i class="devicon-javascript-plain colored"></i>
              <p>JavaSript</p>
            </div>
          </div>
        </div>
        <a class="btn"><p class="disabled">Bekijk informatie</p></a>
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
  justify-content: space-between;
  align-items: center;
  border-width: 0.1rem;
  border-color: black;
  border-style: solid;
  width: 23rem;
  height: 27rem;
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  padding-bottom: 1rem;
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

.projectContainer img {
  width: 100%;
  max-height: 50%;
  object-fit: fill;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 2rem;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  border-color: black;
  border-style: solid;
  text-decoration: none;
  color: inherit;
  padding: 0.1rem;
}

.btn:hover {
  background-color: white;
}

.disabled {
  opacity: 0.2;
  cursor: not-allowed;
}

.lgContainer {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
}

.lg {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
}

.lg img {
  width: 32px;
  height: 32px;
}

i {
  font-size: 1.5rem;
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
