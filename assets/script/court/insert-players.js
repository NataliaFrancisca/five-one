import { rotations } from "../../db/rotation.js";
import { Teams } from "../teams/Teams.js";

const baseRotation = {
    1: "SETTER",
    7: "LIBERO",
    4: "OPPOSITE_HITTER",
    6: "MIDDLE_BLOCK_I",
    3: "MIDDLE_BLOCK_II",
    5: "OUTSIDE_HITTER_I",
    2: "OUTSIDE_HITTER_II"
}

const rotationSetter = {
    1: 1,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2
};

const currentSetterPosition = document.getElementById("p__current-setter-position");

const teamsInitialize = new Teams();
let team = teamsInitialize.getCurrentTeam();

let currentRotation = team.lastPosition;
let currentAction  = team.lastAction;

export function clean(){
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

export function firstRotation(){
    clean();

    const rotation = rotations[currentRotation][currentAction];
    const players = team.players;

    insertIntoFrontRow(players, rotation);
    insertIntoBackRow(players, rotation, true);

    currentSetterPosition.lastChild.innerHTML = rotationSetter[currentRotation];
}

export function insertIntoBackRow(players, rotation, isServing){
    const playerOnFive = document.getElementById(rotation[5][0] + "-" + rotation[5][1]);
    const playerOnSix = document.getElementById(rotation[6][0] + "-" + rotation[6][1]);
    const playerOnOne = document.getElementById(rotation[1][0] + "-" + rotation[1][1]);

    const playersBackRow = [playerOnFive, playerOnSix, playerOnOne];

    playerOnOne.classList.add("player__serving");
    playersBackRow.forEach(player => player.classList.add("inserted"));

    const playerForPositionOne = {position: baseRotation[1], name: players[baseRotation[1]]};
    const playerForPositionSix = {position: baseRotation[6], name: players[baseRotation[6]]};
    const playerForPositionFive = {position: baseRotation[5], name: players[baseRotation[5]]};

    const playersForBackRow = [playerForPositionFive, playerForPositionSix, playerForPositionOne];


    playersForBackRow.forEach((player, index) => {
        console.log(player)
        if(player.position.includes("MIDDLE")){
            playersBackRow[index].firstChild.innerHTML = players[baseRotation[7]];
            playersBackRow[index].classList.add("player__libero");
        } else{
            playersBackRow[index].firstChild.innerHTML = player.name;
        }
    });

    if(isServing){
        playerOnOne.firstChild.innerHTML = playerForPositionOne.name;
    }

    playerOnOne.lastChild.innerHTML = 1;
    playerOnSix.lastChild.innerHTML = 6;
    playerOnFive.lastChild.innerHTML = 5;
}

export function insertIntoFrontRow(players, rotation){
    const playerOnFour = document.getElementById(rotation[4][0] + "-" + rotation[4][1]);
    const playerOnThree = document.getElementById(rotation[3][0] + "-" + rotation[3][1]);
    const playerOnTwo = document.getElementById(rotation[2][0] + "-" + rotation[2][1]);

    const playersFrontRow= [playerOnFour, playerOnThree, playerOnTwo];
    playersFrontRow.forEach(player => player.classList.add("inserted"));

    playerOnFour.firstChild.innerHTML = players[baseRotation[4]];
    playerOnThree.firstChild.innerHTML = players[baseRotation[3]];
    playerOnTwo.firstChild.innerHTML = players[baseRotation[2]];

    playerOnFour.lastChild.innerHTML = 4;
    playerOnThree.lastChild.innerHTML = 3;
    playerOnTwo.lastChild.innerHTML = 2;
}

export function updateSchemaAfterFormSubmit(){
    team = teamsInitialize.getCurrentTeam();
    firstRotation();
}


firstRotation();
