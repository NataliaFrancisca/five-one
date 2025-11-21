import { updateSchemaAfterFormSubmit } from "./game.js";
import { Players } from "./Players.js";

const formUpdateNames = document.getElementById("form__update-names");
const CURRENT_TEAM_CHOICE = "CURRENT__TEAM__CHOICE";

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

// const teamChoiceFem = document.getElementById("team__choice-fem");
// const teamChoiceMan = document.getElementById("team__choice-man");

// teamChoiceMan.addEventListener("change", (e) => {
//     e.preventDefault();
//     cleanPlaceholder();

//     let manPlayers = localStorage.getItem("PLAYERS_NAME_MAN");
//     if(manPlayers){
//         setPlaceholderPlayersName(manPlayers);
//     }
// })

// teamChoiceFem.addEventListener("change", (e) => {
//     e.preventDefault();
//     cleanPlaceholder();

//     let femPlayers = localStorage.getItem("PLAYERS_NAME_FEM");
//     if(femPlayers){
//         setPlaceholderPlayersName(femPlayers);
//     }
// })
