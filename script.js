import { rotations } from './assets/db/rotation.js';
import { setPlayersIntoBackRow, setPlayersIntoFrontRow, insertPlayerName } from './assets/script/insert-player.js';

var court = document.querySelector(".main__court");
var currentSetterPosition = document.querySelector(".current__position");
var currentAction = document.querySelector(".current__action");

const rotationsBase = {
    0: 1,
    1: 6,
    2: 5, 
    3: 4,
    4: 3,
    5: 2
}

let playersBase = {
    1: {
        "position": "setter",
        "name": "setter",
    },
    7: {
        "position": "libero",
        "name": "libero",
    },
    6: {
        "position": "middle 2",
        "name": "middle 2",
    },
    5: {
        "position": "outside 2",
        "name": "outside 2",
    },
    4: {
        "position": "opposite",
        "name": "opposite",
    },
    3: {
        "position": "middle 1",
        "name": "middle 1",
    },
    2: {
        "position": "outside 1",
        "name": "outside 1",
    }
}

let players = playersBase;
let current = 0;

function updatePlayersAfterFormSubmit(){
    const storagePlayers = localStorage.getItem("PLAYERS__NAME");
    const section = document.querySelector(".section__players-name");

    if (storagePlayers == null){
        players = playersBase;
        section.classList.add("hidden");
    }else{
        players = JSON.parse(storagePlayers);
        insertPlayerName(players);
        section.classList.remove("hidden");
    }
}

function updatePlayersNextRotation(){
    var prev = Object.assign({}, players)

    players[1] = prev[2]
    players[6] = prev[1]
    players[5] = prev[6]
    players[4] = prev[5]
    players[3] = prev[4]
    players[2] = prev[3]
}

export function updatePlayersBackRotation(){
    var prev = Object.assign({}, players)

    players[1] = prev[6]
    players[6] = prev[5]
    players[5] = prev[4]
    players[4] = prev[3]
    players[3] = prev[2]
    players[2] = prev[1]
}

function clean(){
    const players = court.querySelectorAll(".inserted");
    const size = players.length;
    
    for (let i = 0; i <= size; i++){
        const element = players.item(i);

        if(element){
            element.classList.remove("inserted");
            element.firstChild.innerHTML = "";
            element.lastChild.innerHTML = "";
        }
    }

    const playerServing = court.querySelector(".player__serving");

    if(playerServing){
        playerServing.classList.remove("player__serving");
    }
}

export function next(){
    current == 5 ? current = 0 : current = current+1;
    updatePlayersNextRotation();
    clean();
    currentSetterPosition.innerHTML = rotationsBase[current];
}

export function back(){
    current == 0 ? current = 5 : current = current-1;
    updatePlayersBackRotation();
    clean();
    currentSetterPosition.innerHTML = rotationsBase[current];
}

export function serving(){
    clean();

    const rotation = rotations[current].serving;
    currentAction.innerHTML = "serving";

    setPlayersIntoFrontRow(players, rotation.front);
    setPlayersIntoBackRow(players, rotation.back, true);
}

export function receiving(){
    clean();

    const rotation = rotations[current].receiving;
    currentAction.innerHTML = "receiving";

    setPlayersIntoFrontRow(players, rotation.front);
    setPlayersIntoBackRow(players, rotation.back, false);
}

updatePlayersAfterFormSubmit();

window.serving = serving;
window.receiving = receiving;
window.back = back;
window.next = next;

window.updatePlayers = updatePlayersAfterFormSubmit;