import { rotations } from '../db/rotation.js';
import { insertIntoBackRow, insertIntoFrontRow } from "./player.js";
import { importTeamPlayers } from "./form.js";

const baseGameRotation = {
    1: 1,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2
}

const currentSetterPosition = document.getElementById("p__current-setter-position");
const currentGameAction = document.getElementById("p__current-action");

const btnActionServing = document.getElementById("btn__action-serving");
const btnActionReceiving = document.getElementById("btn__action-receiving");

const btnActionNextRotation = document.getElementById("btn__action-next-rotation");
const btnActionBackRotation = document.getElementById("btn__action-back-rotation");

let players = importTeamPlayers();
let currentRotation = 1;

export function updateSchemaAfterFormSubmit(){
    const playersOnStorage = importTeamPlayers();
    players = playersOnStorage;
    showFirstRotation();
}

function updateSchemaNextRotation(){
    var previous = Object.assign({}, players);

    players[1] = previous[2];
    players[6] = previous[1]
    players[5] = previous[6]
    players[4] = previous[5]
    players[3] = previous[4]
    players[2] = previous[3]
}

function updateSchemaBackRotation(){
    var previous = Object.assign({}, players);

    players[1] = previous[6];
    players[6] = previous[5];
    players[5] = previous[4];
    players[4] = previous[3];
    players[3] = previous[2];
    players[2] = previous[1];
}

function clean(){
    const allPlayersInCourter = volleyballCourt.querySelectorAll(".inserted");
    const numberOfPlayers = allPlayersInCourter.length;

    for (let i = 0; i <= numberOfPlayers; i++){
        const player = allPlayersInCourter.item(i);

        if (player){
            player.classList.remove("inserted");
            player.firstChild.innerHTML = "";
            player.lastChild.innerHTML = "";
        }
    }

    const playerServing = volleyballCourt.querySelector(".player__serving");

    if (playerServing){
        playerServing.classList.remove("player__serving");
    }
}

function showFirstRotation(){
    clean();

    currentRotation = 1;
    const rotation = rotations[currentRotation].serving;

    insertIntoFrontRow(players, rotation.front);
    insertIntoBackRow(players, rotation.back, true);

    currentSetterPosition.lastChild.innerHTML = baseGameRotation[currentRotation];
}

function next(){
    currentRotation == 6 ? currentRotation = 1 : currentRotation = currentRotation + 1;
    updateSchemaNextRotation();
    currentSetterPosition.lastChild.innerHTML = baseGameRotation[currentRotation];

    serving();
}

function back(){
    currentRotation == 1 ? currentRotation = 6 : currentRotation = currentRotation - 1;
    updateSchemaBackRotation();
    currentSetterPosition.lastChild.innerHTML = baseGameRotation[currentRotation];

    serving();
}

function serving(){
    clean();

    const rotation = rotations[currentRotation].serving;
    currentGameAction.lastChild.innerHTML = "realizando saque";

    insertIntoFrontRow(players, rotation.front);
    insertIntoBackRow(players, rotation.back, true);
}

function receiving(){
    clean();

    const rotation = rotations[currentRotation].receiving;
    currentGameAction.lastChild.innerHTML = "recebendo saque";

    insertIntoFrontRow(players, rotation.front);
    insertIntoBackRow(players, rotation.back, false);
}

btnActionServing.addEventListener("click", () => serving());
btnActionReceiving.addEventListener("click", () => receiving());

btnActionNextRotation.addEventListener("click", () => next());
btnActionBackRotation.addEventListener("click", () => back());

showFirstRotation();
updateSchemaAfterFormSubmit();
