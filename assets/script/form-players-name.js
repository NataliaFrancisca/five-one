var openDialoginButton = document.getElementById("button__open-dialog");
var cancelButton = document.getElementById("cancel");
var dialogFormPlayersName = document.getElementById("dialog__update-players-name");

openDialoginButton.addEventListener("click", function () {
    dialogFormPlayersName.showModal();
});

cancelButton.addEventListener("click", function () {
    dialogFormPlayersName.close();
});

const players = {
    1: {
        "position": "setter",
        "name": "",
    },
    7: {
        "position": "libero",
        "name": "",
    },
    6: {
        "position": "middle 2",
        "name": "",
    },
    5: {
        "position": "outside 2",
        "name": "",
    },
    4: {
        "position": "opposite",
        "name": "",
    },
    3: {
        "position": "middle 1",
        "name": "",
    },
    2: {
        "position": "outside 1",
        "name": "",
    }
}

const form = document.getElementById("form__players-name");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const storagePlayers = localStorage.getItem("PLAYERS__NAME");
    var playersUpdated = storagePlayers ? JSON.parse(storagePlayers) : players;

    const setter__name = document.getElementById("setter__name").value;
    const libero__name = document.getElementById("libero__name").value;
    const opp__name = document.getElementById("opp__name").value;
    const mdbi__name = document.getElementById("mdbi__name").value;
    const mdbii__name = document.getElementById("mdbii__name").value;
    const othi__name = document.getElementById("othi__name").value;
    const othii__name = document.getElementById("othii__name").value;

    if (setter__name && setter__name.length > 2) {
        playersUpdated[1].name = setter__name;
    }
    if (libero__name && libero__name.length > 2) {
        playersUpdated[7].name = libero__name;
    }
    if (opp__name && opp__name.length > 2) {
        playersUpdated[4].name = opp__name;
    }
    if (mdbi__name && mdbi__name.length > 2) {
        playersUpdated[3].name = mdbi__name;
    }
    if (mdbii__name && mdbii__name.length > 2) {
        playersUpdated[6].name = mdbii__name;
    }
    if (othi__name && othi__name.length > 2) {
        playersUpdated[2].name = othi__name;
    }
    if (othii__name && othii__name.length > 2) {
        playersUpdated[5].name = othii__name;
    }

    localStorage.setItem("PLAYERS__NAME", JSON.stringify(playersUpdated));
    dialogFormPlayersName.close();
    updatePlayers();
})