import { rotations } from '../db/rotation.js';

function action(actionRotation, description){
    clean();

    const rotation = rotations[currentRotation][actionRotation];
    currentGameAction.lastChild.innerHTML = description;

    insertIntoFrontRow(players, rotation);
    insertIntoBackRow(players, rotation);

    runAnimation(currentRotation);
}

function next(){
    currentRotation == 6 ? currentRotation = 1 : currentRotation = currentRotation + 1;
    updateSchemaNextRotation();
    currentSetterPosition.lastChild.innerHTML = rotationSetter[currentRotation];

    serving();
    runAnimation(currentRotation);
}

function back(){
    currentRotation == 1 ? currentRotation = 6 : currentRotation = currentRotation - 1;
    updateSchemaBackRotation();
    currentSetterPosition.lastChild.innerHTML = baseGameRotation[currentRotation];

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
const btnActionServingBefore = document.getElementById("btn__action-serving-before");
const btnActionServingAfter = document.getElementById("btn__action-serving-after");
const btnActionReceiving = document.getElementById("btn__action-receiving");
const btnActionAttack = document.getElementById("btn__action-attack");
const btnActionDefenseLeft = document.getElementById("btn__action-defense-left");
const btnActionDefenseRight = document.getElementById("btn__action-defense-right");

const btnActionNextRotation = document.getElementById("btn__action-next-rotation");
const btnActionBackRotation = document.getElementById("btn__action-back-rotation");


btnActionOriginal.addEventListener("click", () => action("original", "rotação original"));
btnActionServingBefore.addEventListener("click", () => action("serving-before", "realizando saque (regra antiga)"));
btnActionServingAfter.addEventListener("click", () => action("serving-after", "realizando saque (regra nova)"));
btnActionReceiving.addEventListener("click", () => action("receive", "recebendo saque"));
btnActionAttack.addEventListener("click", () => action("attack", "realizando ataque"));
btnActionDefenseLeft.addEventListener("click", () => action("defense-left", "defendendo (lado esquerdo)"));
btnActionDefenseRight.addEventListener("click", () => action("defense-right", "defendendo (lado direito)"));

btnActionNextRotation.addEventListener("click", () => next());
btnActionBackRotation.addEventListener("click", () => back());