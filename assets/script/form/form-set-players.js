import { Player } from "../player/Player.js";
import { Players } from "../player/Players.js";
import { Team } from "../teams/Team.js";
import { Teams } from "../teams/Teams.js";

const formSetPlayersIntoTeam = document.getElementById("form__add-players-into-team");

const teamChoiceA = document.getElementById("team__choice-a");
const teamChoiceB = document.getElementById("team__choice-b");
const teamChoiceC = document.getElementById("team__choice-c");

const allPlayersRegistered = document.querySelectorAll(".player-select");

let players = new Players().get();

function updateSelects(){
    const used = [...allPlayersRegistered].map(s => s.value).filter(v => v);

    allPlayersRegistered.forEach(select => {
        const valorAtual = select.value;

        select.innerHTML = '<option value=""></option>';

        players.forEach(j => {
            if (!used.includes(j) || j === valorAtual) {
                const option = document.createElement("option");
                option.value = j;
                option.textContent = j;
                if (j === valorAtual) option.selected = true;
                    select.appendChild(option);
            }
      });
    })
}


allPlayersRegistered.forEach(select => {
    select.addEventListener("change", updateSelects);
});

updateSelects();

formSetPlayersIntoTeam.addEventListener("submit", () => {
    let teamChoice;

    if(teamChoiceA.checked){
        teamChoice = "A";
    } else if (teamChoiceB.checked){
        teamChoice = "B";
    } else if (teamChoiceC.checked){
        teamChoice = "C";
    }

    const team = new Team();

    allPlayersRegistered.forEach((p) => {
        console.log(p.name, p.value)
        team.setPlayer(new Player(p.value, p.name));
    })

    team.setName(teamChoice);

    new Teams().add(team);
});

export function updateDataFromPlayers(){
    const playersUpdated = new Players().get();
    players = playersUpdated;
    updateSelects();
}
