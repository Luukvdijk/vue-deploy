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
        <img src="../assets/Kapper/Kapper1.png" alt="Barber website expample" />
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
        <button class="btn" @click="kapper = true">More information</button>
      </div>
      <div class="projectContainer">
        <img src="../assets/Golf/golftracking-project.png" alt="Project 3" />
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
        <button class="btn" @click="golf = true">More information</button>
      </div>
    </div>
    <div v-if="golf" class="modal">
      <div class="modalMainContainer">
        <div class="modalTitle">Golf Tracking Simulator</div>
        <div class="modalContainer">
          <div class="modalImgGolf">
            <img
              src="../assets/Golf/golfHomePage.png"
              alt="Homepage of the golf app"
            />
            <img
              src="../assets/Golf/golfHomePage.png"
              alt="Homepage of the golf app"
            />
          </div>
          <div class="modalText">
            The golf tracking project was a project that wasnt sure it was
            possible. So our team was reasearing if it was evenpossible what we
            wanted to do whit the app. We wanted to make a app for your phone so
            that you could make a video with your phones camera and that a ai
            would regonise the golf and give back data intermidiate golfers use.
            <br />
            <br />
            This project was hard because we first needed to find out if this
            was possible. After a lot of research we found out that it might be
            possible so we went for it. After making the app it self we needed
            to connect te AI and the Simulation. This would then be shown in the
            app.
          </div>
        </div>
        <div class="btn" @click="golf = false">Close</div>
      </div>
    </div>
    <div v-if="kapper" class="modal">
      <div class="modalMainContainer">
        <div class="modalTitle">Jan de kapper</div>
        <img
          id="logo"
          src="../assets/Kapper/KapperLogo.svg"
          alt="Logo barber"
        />
        <div class="modalContainer">
          <div class="modalImgBarber">
            <img src="../assets/Kapper/Kapper2.png" alt="barber websites" />
          </div>
          <div class="modalText">
            De barber shop project was the first group project i worked on. The
            porpus of the project was to make a website for a Barber (that
            doesn't exits). This barber wanted a way for his costumers to make a
            reservation online. When they made that reservation the barber
            wanted to see this reservation on a dashboard so he could accept or
            decline the requist.
            <br />
            <br />
            In this project i learnd a lot about team work and how you work as a
            team on one project. I also learnd a lot more about how people are
            diffrent in how they code and that coding rules are important to
            set. Learing about more coding lanqauges and frameworks gave me also
            another way to look at coding.
          </div>
        </div>
        <div class="btn" @click="kapper = false">Close</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      golf: false,
      kapper: false,
    };
  },
};
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

.blur {
  filter: blur(3px);
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
  cursor: pointer;
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

.modal {
  position: fixed;
  top: 5vh;
  left: 10vw;
  z-index: 999;
  width: 80vw;
  height: 90vh;
  background-color: white;
  border-radius: 5rem;
}

.modalMainContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
  margin-top: 2rem;
  gap: 5rem;
}

.modalTitle {
  font-size: 2.5rem;
  font-weight: bold;
}

.modalContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70vw;
  gap: 1rem;
}

.modalImgBarber {
  display: flex;
  align-items: center;
  max-width: 40vw;
  height: fit-content;
}

.modalImgGolf {
  display: flex;
  justify-content: space-evenly;
  width: 50vw;
}

.modalImgGolf img {
  max-width: 15vw;
  height: 50vh;
}

.modalText {
  width: 25vw;
  height: 50vh;
  display: flex;
}

#logo {
  position: fixed;
  top: 10vh;
  left: 20vw;
  width: 7vw;
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
