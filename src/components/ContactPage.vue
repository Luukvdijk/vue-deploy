<template>
  <div class="mainContainer">
    <div class="headerContainer">
      <div class="title">
        Ik ben benieuwd naar jouw project. Ben jij klaar om te beginnen?
      </div>
    </div>
    <div class="formContainer">
      <form>
        <div class="contentContainer">
          <div class="ownMailContainer">
            <div class="ownMail">To: hireme@gmail.com</div>
            <img src="../assets/copy.png" alt="copy icon" />
          </div>
          <div class="nameAndMail">
            <div class="name">
              <label class="inputTitle" for="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="mail">
              <label class="inputTitle" for="mail">Your mail</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div class="information">
            <label class="inputTitle" for="information"
              >Project information</label
            >
            <textarea
              type="text"
              id="information"
              name="information"
              required
            />
          </div>
          <div class="btnContainer">
            <input class="btn" type="submit" value="Submit" disabled />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3rem;
  width: 100vw;
  height: 100vh;
}

.headerContainer {
  display: flex;
  width: 60%;
  text-align: center;
  margin-top: 5rem;
}

.title {
  font-size: 3.5rem;
}

.formContainer {
  position: -webkit-sticky;
  position: sticky;
  top: 40vh;
}

.contentContainer {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 35vw;
}

.nameAndMail {
  display: flex;
  flex-direction: row;
  column-gap: 5rem;
}

.nameAndMail div {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1rem;
}

.nameAndMail input {
  width: 100%;
  height: 5vh;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  border-color: black;
  font-size: 1rem;
  padding: 0.2rem;
}

.information {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.information textarea {
  width: 100%;
  height: 15vh;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  border-color: black;
  resize: none;
  padding: 0.2rem;
  font-size: 1rem;
}

.inputTitle {
  font-size: 1.5rem;
}

.ownMailContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  border-style: solid;
  border-width: 0.1rem;
  border-color: black;
  border-radius: 0.5rem;
}

.ownMail {
  font-size: 1.2rem;
}

.btnContainer {
  display: flex;
  justify-content: center;
  width: 100%;
}

.btn {
  width: 30%;
  height: 5vh;
  border-radius: 1em;
  border-style: solid;
  border-width: 0.1rem;
  border-color: black;
  background-color: transparent;
  cursor: not-allowed;
}

.btn:hover {
  background-color: white;
}

img {
  width: auto;
  height: 1.2rem;
}
</style>
