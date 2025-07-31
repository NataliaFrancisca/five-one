import { rotations } from './rotation.js';

var court = document.querySelector(".main__court");
var h1 = document.querySelector("#current-position");

let row = 6;
let col = 5;

let players = {
    1: "setter",
    6: "middle 2",
    5: "outside 2",
    4: "opposite",
    3: "middle 1",
    2: "outside 1"
}

// 4 3 2
// 5 6 1

function updatePlayers(){
    var prev = Object.assign({}, players)

    players[1] = prev[2]
    players[6] = prev[1]
    players[5] = prev[6]
    players[4] = prev[5]
    players[3] = prev[4]
    players[2] = prev[3]
}

const rotationsBase = {
    0: 1,
    1: 6,
    2: 5, 
    3: 4,
    4: 3,
    5: 2
}

let current = 0;

for(let i = 1; i < row + 1; i++){
    for(let j = 1; j < col + 1; j++){
        const div = document.createElement("div");
        div.id = i + ":" + j;
        div.classList.add("court__square");
        court.appendChild(div);
    }
}

export function next(){

    if (current == 5){
        current = 0;
    }else{
        current = current + 1;
    }

    updatePlayers();
    cleanCourt();
    console.log(current);

    h1.innerHTML = rotationsBase[current];
}

export function serving(){
    console.log(current);
    const rotationNumber = rotationsBase[current];
    const rotation = rotations[current].serving;
    console.log("rotation serving: ", rotationNumber, rotation);
    cleanCourt();
    executeRotation(rotation, true);
}

export function receiving(){
   const rotationNumber = rotationsBase[current];
    const rotation = rotations[current].receiving;
    console.log("rotation serving: ", rotationNumber, rotation);
    cleanCourt();
    executeRotation(rotation, false);
}

function cleanCourt(){
    const elements = court.querySelectorAll(".inserted");
    const size = elements.length;
    
    for (let i = 0; i <= size; i++){
        const element = elements.item(i);

        if(element){
            element.classList.remove("inserted");
            element.innerHTML = "";
        }
    }
}

function executeRotation(rotation, isServing){
    const front = rotation.front;
    const back = rotation.back;

    const idFour = front[4][0] + ":" + front[4][1];
    const idThree = front[3][0] + ":" + front[3][1];
    const idTwo = front[2][0] + ":" + front[2][1];

    const elementFour = document.getElementById(idFour);
    const elementThree = document.getElementById(idThree);
    const elementTwo = document.getElementById(idTwo);

    elementFour.classList.add("inserted");
    elementThree.classList.add("inserted");
    elementTwo.classList.add("inserted");

    elementFour.innerHTML = players[4];
    elementThree.innerHTML = players[3];
    elementTwo.innerHTML = players[2];

    const idFive = back[5][0] + ":" + back[5][1];
    const idSix = back[6][0] + ":" + back[6][1];
    const idOne = back[1][0] + ":" + back[1][1];

    const elementFive = document.getElementById(idFive);
    const elementSix = document.getElementById(idSix);
    const elementOne = document.getElementById(idOne);

    elementFive.classList.add("inserted");
    elementSix.classList.add("inserted");
    elementOne.classList.add("inserted");


    if (!isServing){
        const playerOne = players[1];
        const playerFive = players[5];
        const playerSix = players[6];

        if (playerFive.includes("middle")){
            elementFive.innerHTML = "libero";
        }else{
            elementFive.innerHTML = playerFive;
        }

        if (playerSix.includes("middle")){
            elementSix.innerHTML = "libero";
        }else{
            elementSix.innerHTML = playerSix;
        }

        if (playerOne.includes("middle")){
            elementOne.innerHTML = "libero";
        }else{
            elementOne.innerHTML = playerOne;
        }
    }


    if(isServing){
        const playerOne = players[1];
        elementOne.innerHTML = playerOne;

        const playerFive = players[5];
        const playerSix = players[6];

        if (playerFive.includes("middle")){
            elementFive.innerHTML = "libero";
        }else{
            elementFive.innerHTML = playerFive;
        }

        if (playerSix.includes("middle")){
            elementSix.innerHTML = "libero";
        }else{
            elementSix.innerHTML = playerSix;
        }
    }
}

window.next = next;

window.serving = serving;
window.receiving = receiving;