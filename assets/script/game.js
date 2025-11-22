import { rotations } from '../db/rotation.js';
import { insertIntoBackRow, insertIntoFrontRow } from "./player.js";
import { runAnimation } from "./animation.js";
import { Players } from './Players.js';

const rotationSetter = {
    1: 1,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2
}

const currentSetterPosition = document.getElementById("p__current-setter-position");

let players = new Players().importTeamPlayers();
let currentRotation = 1;

export function updateSchemaAfterFormSubmit(){
    const playersOnStorage = importTeamPlayers();
    players = playersOnStorage;
    showFirstRotation();
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
    const rotation = rotations[currentRotation].original;

    insertIntoFrontRow(players, rotation);
    insertIntoBackRow(players, rotation, true);

    currentSetterPosition.lastChild.innerHTML = rotationSetter[currentRotation];
}


showFirstRotation();