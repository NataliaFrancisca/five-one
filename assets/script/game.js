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

function runAnimationWhile(athleteOne, athleteTwo){
    const rect1 = athleteOne.getBoundingClientRect();
    const rect2 = athleteTwo.getBoundingClientRect();
 
    const dx = rect2.left - rect1.left;
    const dy = rect2.top - rect1.top;

    athleteOne.style.transition = "transform 0.6s ease";
    athleteTwo.style.transition = "transform 0.6s ease";

    athleteOne.style.transform = `translate(${dx}px, ${dy}px)`;
    athleteTwo.style.transform = `translate(${-dx}px, ${-dy}px)`;

    setTimeout(() => {
        athleteOne.style.transform = "";
        athleteTwo.style.transform = "";
    }, 1000);

    setTimeout(() => {
        athleteTwo.classList.add()
    }, 1000);
}

function runAnimationFrontRow(){
    const frontRow = document.querySelectorAll(".line__1.inserted");

    switch(currentRotation){
        case 1: 
            runAnimationWhile(frontRow[0], frontRow[2])
            break;
        case 2:
            runAnimationWhile(frontRow[1], frontRow[2])
            break;
        case 3:
            runAnimationWhile(frontRow[0], frontRow[1])
            break;
        case 4:
            runAnimationWhile(frontRow[0], frontRow[2])
            break;
        case 5:
            runAnimationWhile(frontRow[1], frontRow[2])
            break;
        case 6:
            runAnimationWhile(frontRow[0], frontRow[1])
            break;
    }
}

function runAnimationBackRow(){
    const backRow = document.querySelectorAll(".line__4.inserted, .line__5.inserted");

    switch(currentRotation){
        case 1: 
            runAnimationWhile(backRow[0], backRow[2])
            break;
        case 4:
            runAnimationWhile(backRow[0], backRow[2])
            break;
    }
}

function showFirstRotation(){
    clean();

    currentRotation = 1;
    const rotation = rotations[currentRotation].serving;

    insertIntoFrontRow(players, rotation.front);
    insertIntoBackRow(players, rotation.back, true);

    currentSetterPosition.lastChild.innerHTML = baseGameRotation[currentRotation];

    runAnimationFrontRow();
    runAnimationBackRow();
}

function next(){
    currentRotation == 6 ? currentRotation = 1 : currentRotation = currentRotation + 1;
    updateSchemaNextRotation();
    currentSetterPosition.lastChild.innerHTML = baseGameRotation[currentRotation];

    serving();

    runAnimationFrontRow();
    runAnimationBackRow();
}

function back(){
    currentRotation == 1 ? currentRotation = 6 : currentRotation = currentRotation - 1;
    updateSchemaBackRotation();
    currentSetterPosition.lastChild.innerHTML = baseGameRotation[currentRotation];

    serving();
    runAnimationFrontRow();
    runAnimationBackRow();
}

function serving(){
    clean();

    const rotation = rotations[currentRotation].serving;
    currentGameAction.lastChild.innerHTML = "realizando saque";

    insertIntoFrontRow(players, rotation.front);
    insertIntoBackRow(players, rotation.back, true);

    runAnimationFrontRow();
    runAnimationBackRow();
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