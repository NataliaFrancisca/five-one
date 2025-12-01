import { rotations } from '../db/rotation.js';
import { clean } from './court/insert-players.js'; 
import { Teams } from './teams/Teams.js';
import { insertIntoFrontRow, insertIntoBackRow } from './court/insert-players.js';
import { runAnimationFrontRow, runAnimationBackRow } from './animation.js';

const teamsInitialize = new Teams();

let team = teamsInitialize.getCurrentTeam();
let playersByPosition = team.lastPosition;

export const getCurrentSetterPosition = () => +Object.keys(playersByPosition).find(key => playersByPosition[key] === "SETTER");

let currentRotation = getCurrentSetterPosition();
let currentSetterPosition = getCurrentSetterPosition();
let currentAction  = team.lastAction;

const rotationSetter = {
    1: 1,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2
};

export function firstRotation(team){
    clean();
    
    const rotation = rotations[rotationSetter[currentSetterPosition]][currentAction];
    const players = team.players;

    const isServing = currentAction == "serve";
    const isOriginal = currentAction == "original";

    insertIntoFrontRow(playersByPosition, players, rotation);
    insertIntoBackRow(playersByPosition, players, rotation, isServing, isOriginal);

    runAnimationFrontRow(currentRotation);
    runAnimationBackRow(currentRotation);
}

export function saveLastAction(){
    const lastAction = currentAction;

    const currentTeam = teamsInitialize.getCurrentTeam();
    currentTeam.lastAction = lastAction;
    currentTeam.lastPosition = playersByPosition;

    teamsInitialize.update(currentTeam);
}

function action(action, description){
    document.querySelector("#p__current-action > span").innerHTML = description;
    document.querySelector("#p__current-setter-position > span").innerHTML = currentSetterPosition;

    const team = teamsInitialize.getCurrentTeam();
    const rotation = rotations[rotationSetter[currentSetterPosition]][action];

    const isServing = action == "serve";
    const isOriginal = action == "original";
    
    currentAction = action;
    clean();

    insertIntoFrontRow(playersByPosition, team.players, rotation);
    insertIntoBackRow(playersByPosition, team.players, rotation, isServing, isOriginal);

    if(!isOriginal){
        runAnimationFrontRow(currentRotation);
        runAnimationBackRow(currentRotation);
    }
    
    saveLastAction();
}

function next(){
    currentRotation == 6 ? currentRotation = 1 : currentRotation = currentRotation - 1;
    updateSchemaNextRotation();
    updateSetter(true);

    action("original", "rotação original");
}

function back(){
    currentRotation == 1 ? currentRotation = 6 : currentRotation = currentRotation + 1;
    updateSchemaBackRotation();
    updateSetter(false);

    action("original", "rotação original");
}

function updateSetter(isNextRotation){
    let setterPosition = currentSetterPosition;

    if (currentSetterPosition == 1){
        if(isNextRotation){
            setterPosition = 6;
        }else{
            setterPosition = 2;
        }
    }

    if(currentSetterPosition == 6){
        if(isNextRotation){
            setterPosition = 5;
        }else{
            setterPosition = 1;
        }
    }

    if (currentSetterPosition == 5){
        if (isNextRotation){
            setterPosition = 4;
        }else{
            setterPosition = 6;
        }
    }

    if (currentSetterPosition == 4){
        if (isNextRotation){
            setterPosition = 3;
        }else{
            setterPosition = 5;
        }
    }

     if (currentSetterPosition == 3){
        if (isNextRotation){
            setterPosition = 2;
        }else{
            setterPosition = 4;
        }
    }

    if (currentSetterPosition == 2){
        if (isNextRotation){
            setterPosition = 1;
        }else{
            setterPosition = 3;
        }
    }

    currentSetterPosition = setterPosition;
}

function updateSchemaNextRotation(){
    var previous = Object.assign({}, playersByPosition);

    playersByPosition[1] = previous[2];
    playersByPosition[6] = previous[1];
    playersByPosition[5] = previous[6];
    playersByPosition[4] = previous[5];
    playersByPosition[3] = previous[4];
    playersByPosition[2] = previous[3];
}

function updateSchemaBackRotation(){
    var previous = Object.assign({}, playersByPosition);

    playersByPosition[1] = previous[6];
    playersByPosition[6] = previous[5];
    playersByPosition[5] = previous[4];
    playersByPosition[4] = previous[3];
    playersByPosition[3] = previous[2];
    playersByPosition[2] = previous[1];
}

const btnActionOriginal = document.getElementById("btn__action-original");
const btnActionServing = document.getElementById("btn__action-serving");
const btnActionReceiving = document.getElementById("btn__action-receiving");

const btnActionNextRotation = document.getElementById("btn__action-next-rotation");
const btnActionBackRotation = document.getElementById("btn__action-back-rotation");

btnActionOriginal.addEventListener("click", () => action("original", "rotação original"));
btnActionServing.addEventListener("click", () => action("serve", "realizando saque"));
btnActionReceiving.addEventListener("click", () => action("receive", "recebendo saque"));

btnActionNextRotation.addEventListener("click", () => next());
btnActionBackRotation.addEventListener("click", () => back());
