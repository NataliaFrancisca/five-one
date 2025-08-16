export function insertIntoBackRow(players, rotation, isServing){
    const playerOnFive = document.getElementById(rotation[5][0] + "-" + rotation[5][1]);
    const playerOnSix = document.getElementById(rotation[6][0] + "-" + rotation[6][1]);
    const playerOnOne = document.getElementById(rotation[1][0] + "-" + rotation[1][1]);

    const playersBackRow = [playerOnFive, playerOnSix, playerOnOne];

    playerOnOne.classList.add("player__serving");
    playersBackRow.forEach(player => player.classList.add("inserted"));

    const playerForPositionOne = players[1];
    const playerForPositionSix = players[6];
    const playerForPositionFive = players[5];

    const playersForBackRow = [playerForPositionFive, playerForPositionSix, playerForPositionOne];

    playersForBackRow.forEach((player, index) => {
        if(player.position.includes("central")){
            playersBackRow[index].firstChild.innerHTML = players[7].name;
        }else{
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

    playerOnFour.firstChild.innerHTML = players[4].name;
    playerOnThree.firstChild.innerHTML = players[3].name;
    playerOnTwo.firstChild.innerHTML = players[2].name;

    playerOnFour.lastChild.innerHTML = 4;
    playerOnThree.lastChild.innerHTML = 3;
    playerOnTwo.lastChild.innerHTML = 2;
}