import { updateSchemaAfterFormSubmit } from "./game.js";

const formUpdateNames = document.getElementById("form__update-names");
const CURRENT_TEAM_CHOICE = "CURRENT__TEAM__CHOICE";

const PLAYER__SCHEMA = {
    1: {
        "position": "levantador",
        "name": "levantador",
    },
    7: {
        "position": "líbero",
        "name": "líbero",
    },
    6: {
        "position": "central I",
        "name": "central I",
    },
    5: {
        "position": "ponteiro I",
        "name": "ponteiro I",
    },
    4: {
        "position": "oposto",
        "name": "oposto",
    },
    3: {
        "position": "central II",
        "name": "central II",
    },
    2: {
        "position": "ponteiro II",
        "name": "ponteiro II",
    }
}

// return the players from team gender.
export function importTeamPlayers(){
    const TEAM = localStorage.getItem("CURRENT__TEAM__CHOICE");
    let STORAGE_PLAYERS;

    if (TEAM == "FEMININO"){
        let players = localStorage.getItem("PLAYERS_NAME_FEM");
        STORAGE_PLAYERS = players ? JSON.parse(players) : PLAYER__SCHEMA;
    }

    else if (TEAM == "MASCULINO"){
        let players = localStorage.getItem("PLAYERS_NAME_MAN");
        STORAGE_PLAYERS = players ? JSON.parse(players) : PLAYER__SCHEMA;
    }

    else{
        STORAGE_PLAYERS = PLAYER__SCHEMA;
    }

    return STORAGE_PLAYERS;
}

formUpdateNames.addEventListener("submit", (e) => {
    e.preventDefault();

    let players = importTeamPlayers();

    const dialogUpdateNames = document.querySelector(".dialog__update-names");

    const setterName = document.getElementById("setter__name").value;
    const liberoName = document.getElementById("libero__name").value;
    const oppName = document.getElementById("opp__name").value;
    const mdbiName = document.getElementById("mdbi__name").value;
    const mdbiiName = document.getElementById("mdbii__name").value;
    const othiName = document.getElementById("othi__name").value;
    const othiiName = document.getElementById("othii__name").value;

    const teamChoiceFem = document.getElementById("team__choice-fem");
    const teamChoiceMan = document.getElementById("team__choice-man");
    
    players[1].name = setterName;
    players[7].name = liberoName;
    players[4].name = oppName;
    players[3].name = mdbiName;
    players[6].name = mdbiiName;
    players[2].name = othiName;
    players[5].name = othiiName;

    if (teamChoiceFem.checked){
        localStorage.setItem(CURRENT_TEAM_CHOICE, "FEMININO");
        localStorage.setItem("PLAYERS_NAME_FEM", JSON.stringify(players));
    } else if (teamChoiceMan.checked){
        localStorage.setItem(CURRENT_TEAM_CHOICE, "MASCULINO");
        localStorage.setItem("PLAYERS_NAME_MAN", JSON.stringify(players));
    }else{
        alert("Escolha um time para atualiza os dados dos atletas.");
        return;
    }

    dialogUpdateNames.close();
    updateSchemaAfterFormSubmit();
});