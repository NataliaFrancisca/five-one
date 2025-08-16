import { updateSchemaAfterFormSubmit } from "./game.js";

const CURRENT_TEAM_CHOICE = "CURRENT__TEAM__CHOICE";

const btnOpenDialog = document.getElementById("btn__open-dialog");
const btnCloseDialog = document.getElementById("btn__cancel");
const btnTeamFemale = document.getElementById("btn__fem-team");
const btnTeamMale = document.getElementById("btn__man-team");

const dialogUpdateNames = document.querySelector(".dialog__update-names");
const textCurrentTeam = document.getElementById("p__current-team");

const storage = localStorage.getItem(CURRENT_TEAM_CHOICE);

if (storage && storage == "FEMININO"){
    const span = textCurrentTeam.lastElementChild;
    span.innerHTML = "feminino";
} else if (storage && storage == "MASCULINO"){
    const span = textCurrentTeam.lastElementChild;
    span.innerHTML = "masculino";
}

btnTeamFemale.addEventListener("click", () => {
    localStorage.setItem(CURRENT_TEAM_CHOICE, "FEMININO");
    const span = textCurrentTeam.lastElementChild;
    span.innerHTML = "feminino";
    updateSchemaAfterFormSubmit();
});

btnTeamMale.addEventListener("click", () => {
    localStorage.setItem(CURRENT_TEAM_CHOICE, "MASCULINO");
    const span = textCurrentTeam.lastElementChild;
    span.innerHTML = "masculino";
    updateSchemaAfterFormSubmit();
});

btnOpenDialog.addEventListener("click", () => {
    dialogUpdateNames.showModal();
});

btnCloseDialog.addEventListener("click", () => {
    dialogUpdateNames.close();
});

