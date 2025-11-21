// import { updateSchemaAfterFormSubmit } from "./game.js";

const CURRENT_TEAM_CHOICE = "CURRENT__TEAM__CHOICE";

const btnOpenDialog = document.getElementById("btn__open-dialog");
const btnCloseDialog = document.getElementById("btn__cancel");

const btnTeamA = document.getElementById("btn__a-team");
const btnTeamB = document.getElementById("btn__b-team");
const btnTeamC = document.getElementById("btn__c-team");

const dialogUpdateNames = document.querySelector(".dialog__update-names");
const textCurrentTeam = document.getElementById("p__current-team");

const storage = localStorage.getItem(CURRENT_TEAM_CHOICE);

if (storage && storage == "PLAYERS__FROM-TEAM-A"){
    const span = textCurrentTeam.lastElementChild;
    span.innerHTML = "time a";
} else if (storage && storage == "PLAYERS__FROM-TEAM-B"){
    const span = textCurrentTeam.lastElementChild;
    span.innerHTML = "time b";
} else if (storage && storage == "PLAYERS__FROM-TEAM-C"){
    const span = textCurrentTeam.lastElementChild;
    span.innerHTML = "time c";
}

btnTeamA.addEventListener("click", () => {
    if (localStorage.getItem("PLAYERS__FROM-TEAM-A") == null){
        alert("Cadastre o time A para exibir na quadra.");
        return;
    }

    localStorage.setItem(CURRENT_TEAM_CHOICE, "PLAYERS__FROM-TEAM-A");
    const span = textCurrentTeam.lastElementChild;
    span.innerHTML = "time A";
    updateSchemaAfterFormSubmit();
});

btnTeamB.addEventListener("click", () => {
    if (localStorage.getItem("PLAYERS__FROM-TEAM-B") == null){
        alert("Cadastre o time b para exibir na quadra.");
        return;
    }

    localStorage.setItem(CURRENT_TEAM_CHOICE, "PLAYERS__FROM-TEAM-B");
    const span = textCurrentTeam.lastElementChild;
    span.innerHTML = "time B";
    updateSchemaAfterFormSubmit();
});

btnTeamC.addEventListener("click", () => {
    if (localStorage.getItem("PLAYERS__FROM-TEAM-C") == null){
        alert("Cadastre o time c para exibir na quadra.");
        return;
    }

    localStorage.setItem(CURRENT_TEAM_CHOICE, "PLAYERS__FROM-TEAM-C");
    const span = textCurrentTeam.lastElementChild;
    span.innerHTML = "time C";
    updateSchemaAfterFormSubmit();
});


btnOpenDialog.addEventListener("click", () => {
    dialogUpdateNames.showModal();
});

btnCloseDialog.addEventListener("click", () => {
    dialogUpdateNames.close();
});

