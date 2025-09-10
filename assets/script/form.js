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

function cleanPlaceholder(){
    const inputPlayers = document.getElementsByTagName("input");

    for(let i = 0; i < inputPlayers.length; i++){
        inputPlayers.item(i).removeAttribute("placeholder");
    }
}

function setPlaceholderPlayersName(playersFromStorage) {
    const players = JSON.parse(playersFromStorage);

    const fieldMap = {
        1: "setter__name",
        2: "othi__name",
        3: "mdbi__name",
        4: "opp__name",
        5: "othii__name",
        6: "mdbii__name",
        7: "libero__name"
    };

    Object.entries(fieldMap).forEach(([key, fieldId]) => {
        const player = players[key];
        const input = document.getElementById(fieldId);
        if (player && input) {
            input.setAttribute("placeholder", player.name);
        }
    });
}

const teamChoiceFem = document.getElementById("team__choice-fem");
const teamChoiceMan = document.getElementById("team__choice-man");

teamChoiceMan.addEventListener("change", (e) => {
    e.preventDefault();
    cleanPlaceholder();

    let manPlayers = localStorage.getItem("PLAYERS_NAME_MAN");
    if(manPlayers){
        setPlaceholderPlayersName(manPlayers);
    }
})

teamChoiceFem.addEventListener("change", (e) => {
    e.preventDefault();
    cleanPlaceholder();

    let femPlayers = localStorage.getItem("PLAYERS_NAME_FEM");
    if(femPlayers){
        setPlaceholderPlayersName(femPlayers);
    }
})

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
    
    players[1].name = setterName.length >= 3 ? setterName : players[1].name;
    players[7].name = liberoName.length >= 3 ? liberoName : players[7].name;
    players[4].name = oppName.length >= 3 ? oppName : players[4].name;
    players[3].name = mdbiName.length >= 3 ? mdbiName : players[3].name;
    players[6].name = mdbiiName.length >= 3 ? mdbiiName : players[6].name;
    players[2].name = othiName.length >= 3 ? othiName : players[2].name;
    players[5].name = othiiName.length >= 3 ? othiiName : players[5].name;

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