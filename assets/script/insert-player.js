export function setPlayersIntoBackRow(players, rotation, serving){
    const playerPositionFive = document.getElementById(rotation[5][0] + ":" + rotation[5][1]);
    const playerPositionSix = document.getElementById(rotation[6][0] + ":" + rotation[6][1]);
    const playerPositionOne = document.getElementById(rotation[1][0] + ":" + rotation[1][1]);

    playerPositionFive.classList.add("inserted");
    playerPositionSix.classList.add("inserted");
    playerPositionOne.classList.add("inserted");
    playerPositionOne.classList.add("player__serving");

    const playerFromPositionOne = players[1];
    const playerFromPositionFive = players[5];
    const playerFromPositionSix = players[6];

    if (playerFromPositionFive.position.includes("middle")){
        playerPositionFive.firstChild.innerHTML = players[7].name;
    }else{
        playerPositionFive.firstChild.innerHTML = playerFromPositionFive.name;
    }

    if (playerFromPositionSix.position.includes("middle")){
        playerPositionSix.firstChild.innerHTML = players[7].name;
    }else{
        playerPositionSix.firstChild.innerHTML = playerFromPositionSix.name;
    }

    if (playerFromPositionOne.position.includes("middle")){
        playerPositionOne.firstChild.innerHTML = players[7].name;
    }else{
        playerPositionOne.firstChild.innerHTML = playerFromPositionOne.name;
    }

    if (serving){
        playerPositionOne.firstChild.innerHTML = playerFromPositionOne.name;
    }

    playerPositionOne.lastChild.innerHTML = 1;
    playerPositionSix.lastChild.innerHTML = 6;
    playerPositionFive.lastChild.innerHTML = 5;
}

export function setPlayersIntoFrontRow(players, rotation){
    const playerPositionFour = document.getElementById(rotation[4][0] + ":" + rotation[4][1]);
    const playerPositionThree = document.getElementById(rotation[3][0] + ":" + rotation[3][1]);
    const playerPositionTwo = document.getElementById(rotation[2][0] + ":" + rotation[2][1]);

    playerPositionFour.classList.add("inserted");
    playerPositionThree.classList.add("inserted");
    playerPositionTwo.classList.add("inserted");

    playerPositionFour.firstChild.innerHTML = players[4].name;
    playerPositionThree.firstChild.innerHTML = players[3].name;
    playerPositionTwo.firstChild.innerHTML = players[2].name;

    playerPositionFour.lastChild.innerHTML = 4;
    playerPositionThree.lastChild.innerHTML = 3;
    playerPositionTwo.lastChild.innerHTML = 2;
}