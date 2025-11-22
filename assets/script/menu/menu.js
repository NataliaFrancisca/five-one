import { Teams } from "../teams/Teams.js";

const dialogAddPlayerIntoTeam = document.getElementById("dialog__add-player-into-team");
const buttonDialogAddPlayerIntoTeam = document.getElementById("btn__dialog-add");
const buttonCloseDialogAddPlayerIntoTeam = document.getElementById("btn__cancel-set");

const dialogRegister = document.getElementById("dialog__register-players");
const buttonDialogRegister = document.getElementById("btn__dialog-register");
const buttonCloseDialogRegister = document.getElementById("btn__cancel-register");

const buttonShowTeamA = document.getElementById("btn__team-a");
const buttonShowTeamB = document.getElementById("btn__team-b");
const buttonShowTeamC = document.getElementById("btn__team-c");

const teams = new Teams();

// REGISTER NEW PLAYERS DIALOG
buttonDialogRegister.addEventListener("click", () => {
    dialogRegister.showModal();
})

buttonCloseDialogRegister.addEventListener("click", () => {
    dialogRegister.close();
});

// ADDING PLAYER INTO POSITION
buttonDialogAddPlayerIntoTeam.addEventListener("click", () => {
    dialogAddPlayerIntoTeam.showModal();
});

buttonCloseDialogAddPlayerIntoTeam.addEventListener("click", () => {
    dialogAddPlayerIntoTeam.close();
})

// BUTTON TO SELECT WHICH TEAM WILL SHOW ROTATION 5X1
buttonShowTeamA.addEventListener("click", () => {
    teams.set("A");
})

buttonShowTeamB.addEventListener("click", () => {
    teams.set("B");
})

buttonShowTeamC.addEventListener("click", () => {
    teams.set("C");
})