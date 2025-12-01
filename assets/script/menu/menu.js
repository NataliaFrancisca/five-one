import { Players } from "../player/Players.js";
import { Teams } from "../teams/Teams.js";

import { updateField } from "../form/form-delete-player.js";
import { updateSchemaAfterFormSubmit } from "../court/insert-players.js";
import { firstRotation, getCurrentSetterPosition } from "../actions.js";

const dialogAddPlayerIntoTeam = document.getElementById("dialog__add-player-into-team");
const buttonDialogAddPlayerIntoTeam = document.getElementById("btn__dialog-add");
const buttonCloseDialogAddPlayerIntoTeam = document.getElementById("btn__cancel-set");

const dialogRegister = document.getElementById("dialog__register-players");
const buttonDialogRegister = document.getElementById("btn__dialog-register");
const buttonCloseDialogRegister = document.getElementById("btn__cancel-register");

const dialogDelete = document.getElementById("dialog__delete-players");
const buttonDialogDelete = document.getElementById("btn__dialog-delete");
const buttonCloseDialogDelete = document.getElementById("btn__cancel-delete");

const buttonShowTeamA = document.getElementById("btn__team-a");
const buttonShowTeamB = document.getElementById("btn__team-b");
const buttonShowTeamC = document.getElementById("btn__team-c");

const pCurrentTeam = document.querySelector("#p__current-team > span");
const pCurrentAction = document.querySelector("#p__current-action > span");
const pCurretnSetterPosition = document.querySelector("#p__current-setter-position > span");

const teams = new Teams();
const players = new Players();

let currentTeam;

buttonDialogDelete.addEventListener("click", () => {
    if (players.get().length == 0){
        alert("Nenhum jogador foi cadastrado.");
        return;
    }
    
    updateField();
    dialogDelete.showModal();
})

buttonCloseDialogDelete.addEventListener("click", () => {
    dialogDelete.close();
})

buttonDialogRegister.addEventListener("click", () => {
    dialogRegister.showModal();
})

buttonCloseDialogRegister.addEventListener("click", () => {
    dialogRegister.close();
});

buttonDialogAddPlayerIntoTeam.addEventListener("click", () => {
    if (players.get().length < 7){
        alert("É necessário ter 7 jogadores cadastrado para realizar a operação.");
        return;
    }

    dialogAddPlayerIntoTeam.showModal();
});

buttonCloseDialogAddPlayerIntoTeam.addEventListener("click", () => {
    dialogAddPlayerIntoTeam.close();
})

buttonShowTeamA.addEventListener("click", () => {
    teams.setCurrentTeam("A");
    updateDetails()
    updateSchemaAfterFormSubmit();
})

buttonShowTeamB.addEventListener("click", () => {
    teams.setCurrentTeam("B");
    updateDetails();
    updateSchemaAfterFormSubmit();
})

buttonShowTeamC.addEventListener("click", () => {
    teams.setCurrentTeam("C");
    updateDetails();
    updateSchemaAfterFormSubmit();
})

function updateDetails(){

    const actionsDescription = {
        "original": "rotação original",
        "serve": "realizando saque",
        "receive": "recebendo saque",
        "attack": "realizando saque",
        "defense-left": "defendendo (lado esquerdo)",
        "defense-right": "defendendo (lado direito)"
    }

    currentTeam = teams.getCurrentTeam();
    const currentSetterPosition = getCurrentSetterPosition();

    pCurrentTeam.innerHTML = currentTeam.name;
    pCurrentAction.innerHTML = actionsDescription[currentTeam.lastAction];
    pCurretnSetterPosition.innerHTML = currentSetterPosition;

    firstRotation(currentTeam);
}

updateDetails();

