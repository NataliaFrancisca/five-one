import { rotations } from '../db/rotation.js';
import { clean } from './court/insert-players.js'; 
import { Teams } from './teams/Teams.js';
import { insertIntoFrontRow, insertIntoBackRow } from './court/insert-players.js';
import { runAnimation } from './animation.js';

const teamsInitialize = new Teams();
let team = teamsInitialize.getCurrentTeam();

let currentRotation = team.lastPosition;
let currentAction  = team.lastAction;

const pCurrentTeam = document.querySelector("#p__current-team > span");
const pCurrentAction = document.querySelector("#p__current-action > span");
const pCurretnSetterPosition = document.querySelector("#p__current-setter-position > span");

export function saveLastAction(){
    const lastAction = currentAction;
    const lastRotation = currentRotation;

    const currentTeam = teamsInitialize.getCurrentTeam();
    currentTeam.lastAction = lastAction;
    currentTeam.lastPosition = lastRotation;

    teamsInitialize.update(currentTeam);
}

function action(actionRotation, description){
    team = teamsInitialize.getCurrentTeam();
    clean();

    console.log(actionRotation, description);

    const rotation = rotations[currentRotation][actionRotation];
    pCurrentAction.innerHTML = description;
    currentAction = actionRotation;

    insertIntoFrontRow(team.players, rotation);
    insertIntoBackRow(team.players, rotation);

    runAnimation(currentRotation);
    saveLastAction();
}

function next(){
    currentRotation == 6 ? currentRotation = 1 : currentRotation = currentRotation + 1;
    updateSchemaNextRotation();
    pCurretnSetterPosition.innerHTML = rotationSetter[currentRotation];

    serving();
    runAnimation(currentRotation);
}

function back(){
    currentRotation == 1 ? currentRotation = 6 : currentRotation = currentRotation - 1;
    updateSchemaBackRotation();
    pCurretnSetterPosition.innerHTML = baseGameRotation[currentRotation];

    serving();
    runAnimation(currentRotation);
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

const btnActionOriginal = document.getElementById("btn__action-original");
const btnActionServing = document.getElementById("btn__action-serving");
const btnActionReceiving = document.getElementById("btn__action-receiving");
const btnActionAttack = document.getElementById("btn__action-attack");
const btnActionDefenseLeft = document.getElementById("btn__action-defense-left");
const btnActionDefenseRight = document.getElementById("btn__action-defense-right");

const btnActionNextRotation = document.getElementById("btn__action-next-rotation");
const btnActionBackRotation = document.getElementById("btn__action-back-rotation");

btnActionOriginal.addEventListener("click", () => action("original", "rotação original"));
btnActionServing.addEventListener("click", () => action("serve", "realizando saque"));
btnActionReceiving.addEventListener("click", () => action("receive", "recebendo saque"));
btnActionAttack.addEventListener("click", () => action("attack", "realizando ataque"));
btnActionDefenseLeft.addEventListener("click", () => action("defense-left", "defendendo (lado esquerdo)"));
btnActionDefenseRight.addEventListener("click", () => action("defense-right", "defendendo (lado direito)"));

btnActionNextRotation.addEventListener("click", () => next());
btnActionBackRotation.addEventListener("click", () => back());
